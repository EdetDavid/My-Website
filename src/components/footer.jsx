import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="footer bg-transparent text-dark p-3 w-100">
        <div
          id="footer-wrapper"
          className="d-flex justify-content-center align-items-center position-relative"
        >
          <p className="text-muted my-2">&copy; All rights reserved</p>
              <div className="position-absolute end-0">
                <button
                  type="button"
                  className="footer-back-to-top"
                  aria-label="Scroll to top"
                  onClick={() => {
                    // Try a few scroll targets to support apps that use a scroll container
                    const targets = [
                      document.getElementById("main-content"),
                      document.scrollingElement,
                      document.documentElement,
                      document.body,
                    ].filter(Boolean);

                    let didScroll = false;

                    for (const t of targets) {
                      try {
                        if (typeof t.scrollTo === "function") {
                          t.scrollTo({ top: 0, behavior: "smooth" });
                          didScroll = true;
                        } else if ("scrollTop" in t) {
                          t.scrollTop = 0;
                          didScroll = true;
                        }
                      } catch (err) {
                        // ignore and try next
                      }
                    }

                    // Last resort: call window.scrollTo
                    if (!didScroll) {
                      try {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } catch (err) {
                        document.documentElement.scrollTop = 0;
                      }
                    }
                  }}
                >
                  <i className="fas fa-caret-up text-white fa-2x"></i>
                </button>
              </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
