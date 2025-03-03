import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer custom-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Flora Luxe</h2>
          <p>Luxury blooms for every occasion</p>
        </div>
      </div>

      <div className="footer-social">
        <a href="#" className="social-icon"><FaFacebookF /></a>
        <a href="#" className="social-icon"><FaInstagram /></a>
        <a href="#" className="social-icon"><FaTwitter /></a>
        <a href="#" className="social-icon"><FaLinkedinIn /></a>
      </div>

      <div className="footer-contact">
          <p>Contact: info@floraluxe.com</p>
          <p>Phone: +1 234 567 890</p>
      </div>

      <div className="footer-bottom">
        &copy; {year} Flora Luxe. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;