import React, { useRef, useState, useEffect } from 'react';
import './BackgroundMusic.css'; // Create a CSS file for additional styling

const BackgroundMusic = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current && src) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
    }
  }, [src]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={src} loop />
      <div id="controls" className="controls">
        <button onClick={togglePlay} className={`control-button ${isPlaying ? 'playing' : ''}`}>
          <i className="fas fa-music"></i>
        </button>
      </div>
    </div>
  );
};

export default BackgroundMusic;
