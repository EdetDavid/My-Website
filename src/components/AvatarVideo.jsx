import React from "react";
import { motion, useMotionValue } from "framer-motion";
import "./AvatarVideo.css";

// local asset imports (used when IFRAME_SRC is empty)
import avatarDemo from "../assets/videos/avatar-demo.mp4";
import avatarPoster from "../assets/images/avatar-poster.jpg";

// if you prefer using a remote embed (HeyGen iframe) set this constant
// otherwise the component falls back to the local MP4 file from assets
const IFRAME_SRC = "https://app.heygen.com/embeds/f9004c702e9e48009e988b18d098202b";

const AvatarVideo = () => {
  // motion values for cursor-following shadow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="avatar-video-section">
      <motion.h2
        className="avatar-video-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        👤 Meet My Animated Avatar
      </motion.h2>
      <motion.div
        className="avatar-video-wrapper"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {IFRAME_SRC ? (
          <iframe
            className="avatar-video"
            data-testid="avatar-video"
            width="560"
            height="315"
            src={IFRAME_SRC}
            title="Welcome Video"
            frameBorder="0"
            allow="encrypted-media; fullscreen"
            allowFullScreen
          ></iframe>
        ) : (
          <video
            className="avatar-video"
            data-testid="avatar-video"
            controls
            muted
            autoPlay
            loop
            playsInline
            poster={avatarPoster}
          >
            <source src={avatarDemo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <motion.div
          className="avatar-video-glow"
          style={{ x: mouseX, y: mouseY }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default AvatarVideo;
