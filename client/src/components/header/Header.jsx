import React from "react";
import "./header.css";
import itImages1 from "../../assets/images/itImages1.jpeg";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Information Technology</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={itImages1} alt="" />
    </div>
  );
};

export default Header;
