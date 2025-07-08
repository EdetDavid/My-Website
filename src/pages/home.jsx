import React from "react";
import Showcase from "../components/showcase";
import Skills from "../components/myskills";
import SkillsMobile from "../components/skills-mobile";
import MyChartComponent from "../components/chart";
import ContactSection from "../components/contact-form";
import SocialLinks from "../components/social-icons";
const Home = () => {
  return (
    <>
      <Showcase />
      <Skills />
      <SkillsMobile />
      <MyChartComponent />
      <ContactSection />
      <SocialLinks />
    </>
  );
};
export default Home;
