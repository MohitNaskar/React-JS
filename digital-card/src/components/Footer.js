import twitterIcon from "../images/Twitter Icon.png";
import facebookIcon from "../images/Facebook Icon.png";
import instagramIcon from "../images/Instagram Icon.png";
import linkedinIcon from "../images/Linkedin Icon.png";
import React from "react";
export default function Footer() {
  return (
    <footer>
      <img src={twitterIcon} alt="Twitter Icon" className="footer-image" />
      <img src={facebookIcon} alt="Facebook Icon" className="footer-image" />
      <img src={instagramIcon} alt="Instagram Icon" className="footer-image" />
      <img src={linkedinIcon} alt="LinkedIn Icon" className="footer-image" />
    </footer>
  );
}
