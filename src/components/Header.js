import "./css/Header.css";
import icon from "./cutlery.png";
import { useState } from "react";

const Header = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  const handleClose = () => {
    setShowVideo(false);
  };

  return (
    <div className="header">
      <img
        style={{ cursor: "pointer" }}
        onClick={handleClick}
        className="cutlery"
        src={icon}
        alt="cutlery icon"
      />
      <h1 className="header_text">Recipe search</h1>
      {showVideo && (
        <div className="video-modal">
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          <iframe
            title="YouTube Video"
            width="800"
            height="450"
            src={`https://www.youtube.com/embed/M33G50MLITY`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Header;
