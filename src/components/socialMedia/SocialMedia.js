import React from "react";
import "./SocialMedia.css";
import i18n from 'i18next';
export default function socialMedia() {
  var socialMediaLinks= i18n.t('socialMediaLinks', { returnObjects: true});
  return (
    <div className="social-media-div">
      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
        <span></span>
      </a>
     
      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-at"></i>
        <span></span>
      </a>
      
    </div>
  );
}
