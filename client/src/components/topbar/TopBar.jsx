import React, { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const TopBar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://www.linkedin.com/in/adlou-kondo" target="_blank">
          <i className="topIcons fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100077629830766"
          target="_blank"
        >
          <i className="topIcons fa-brands fa-square-facebook"></i>
        </a>
        <a href="https://twitter.com/AdlouKondo" target="_blank">
          <i className="topIcons fa-brands fa-square-twitter"></i>
        </a>
        <a href="http://bit.ly/3vGBsBB" target="_blank">
          <i className="topIcons fa-brands fa-square-instagram"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/"> HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/"> ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to="/"> CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link to="/write"> WRITE</Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="settings">
            <img
              className="topImg"
              src={PF + user.profilePic}
              alt={user.username}
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link to="/register">REGISTER</Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcons fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
