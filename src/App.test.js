import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

beforeAll(() => {
  // JSDOM doesn't include IntersectionObserver; stub it so framer-motion's inView works
  class IntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.IntersectionObserver = IntersectionObserver;
  // mock media play so BackgroundMusic doesn't throw
  HTMLMediaElement.prototype.play = jest.fn();
});

test("renders main navigation and home video", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  // wait for preloader to disappear and navbar to mount
  const navElement = await screen.findByRole("navigation", {}, { timeout: 3000 });
  expect(navElement).toBeInTheDocument();

  // main content area should appear as well
  const mainContent = screen.getByRole("main");
  expect(mainContent).toBeInTheDocument();

  // avatar video component renders a video element when home loads
  const video = await screen.findByTestId("avatar-video");
  expect(video).toBeInTheDocument();
});
