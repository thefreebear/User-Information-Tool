import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <Link className="Links" to="/about">
        <label>About Us</label>
      </Link>
      <Link className="Links" to="/contactus">
        <label>Contact Us</label>
      </Link>
      <div className="FooterIcons">
      <FontAwesomeIcon style={{ margin: "0px 8px 0px 10px" }}icon={faTwitterSquare} size="2x" />
      <FontAwesomeIcon icon={faGithub} size="2x" />
      </div>
    </footer>
  );
};

export default Footer;
