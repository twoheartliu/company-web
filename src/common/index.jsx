import React from "react";
import "./style.css";
import imgLogo from "../statics/logo1.png";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-box clearfix">
        <div className="logo">
          <a href="/">
            <img src={imgLogo} alt="logo" />
          </a>
        </div>
        <nav className="nav-menu clearfix">
          <div className="nav-left">
            <a href="">首页</a>
          </div>
          <div className="nav-left">
            <a href="">解决方案</a>
          </div>
          <div className="nav-left">
            <a href="">产品服务</a>
          </div>
          <div className="nav-left">
            <a href="">关于链平方</a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
