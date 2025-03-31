import React from "react";
import "./Weather.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Weather App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
