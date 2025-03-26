import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import {
  TiSocialFacebookCircular,
  TiSocialGithub,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { SlSocialBehance } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 All rights reserved | Alaa Wael Sobhi Al-Faqawi</p>
      <div className="socials">
        <a href="https://www.instagram.com/alaaelfaqawi/?next=%2F">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/alaa.wael.1460/">
          <TiSocialFacebookCircular />
        </a>
        <a href="https://x.com/alaafaqawi2001">
          <TiSocialTwitter />
        </a>
        <a href="https://www.linkedin.com/in/alaa-el-faqawi-a4b866225/">
          <TiSocialLinkedin />
        </a>
        <a href="https://github.com/alaawael20">
          <TiSocialGithub />
        </a>
        <a href="https://www.behance.net/alaael-faqawi">
          <SlSocialBehance />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
