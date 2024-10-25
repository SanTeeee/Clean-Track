import React from "react";

import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footerWrap">
        <div>
          <p className="footerHead">Follow CleanTrack</p>
          <div className="socials">
            <a href="#">
              <CiLinkedin />
            </a>
            <a href="">
              {" "}
              <CiFacebook />
            </a>
            <a href="">
              {" "}
              <CiInstagram />
            </a>
            <a href="">
              {" "}
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div className="Newsletter">
          <p className="footerHead">Subscribe to Newsletter</p>
          <input type="email" placeholder="Enter email address" />
          <a href="#">
            <button> Subscribe</button>
          </a>
        </div>
      </div>
      <div className="FooterLinks">
        <a href="#" className="top">
          GO TO TOP
          <FaArrowUp style={{ fontSize: "10px" }} />
        </a>
        <div className="bottomLinks">
          <a href="#">How it works</a>
          <a href="# ">About </a>
          <a href="#">Customer's review</a>
          <a href="#">Contact </a>
          <a href="#">Help</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
