import React from "react";
import "./style.css";
import imgLogo from "../statics/logo2.png";

const Header = () => {
  return (
    <div className="header-wrapper clearfix">
      <div className="logo-wrapper">
        <img src={imgLogo} alt="logo" />
      </div>
      <nav className="nav-wrapper">
        <ul>
          <li>首页</li>
          <li>导航1</li>
          <li>导航2</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
