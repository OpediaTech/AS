import React from "react";
import footerLogo from "../../images/footer-logo.png";

// logo
import logo from "../../images/vpma-page-navbar-logo.png";

function Header() {
  return (
    <header id="masthead" className="site-header">
      <div className="site-logo vpma-logo">
        <a className="custom-logo-link" href="index.html">
          <img className="custom-logo" src={logo} alt="image" />
        </a>
      </div>
      <div className="header-contact">
        <div className="contact-number">
          <div className="contact-phone">
            <a href="tel:8008206020">(800) 820-6020</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
