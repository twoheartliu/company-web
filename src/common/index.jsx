import React from "react";
import "./style.css";
import imgLogo from "../statics/logo1.png";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div class="header clearfix">
        <h1 class="logo">
          <a href="#">
            <img src={imgLogo} alt="logo" />
          </a>
        </h1>
        <nav>
          <a href="#">首页</a>
          <a href="#">关于蚂蚁</a>
          <a href="#">新闻中心</a>
          <a href="#">蚂蚁模式</a>
          <a href="#">联系我们</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
