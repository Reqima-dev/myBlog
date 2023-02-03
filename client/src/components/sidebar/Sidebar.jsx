import React from "react";
import "./sidebar.css";
import itImages4 from "../../assets/images/itImages4.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const SIdebar = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImage" src={itImages4} alt="" />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Follow US</span>
        <div className="sidebarSocial">
          <a href="#" target="_blank">
            <i className="sidebarIcons fa-brands fa-linkedin"></i>
          </a>
          <a href="#" target="_blank">
            <i className="sidebarIcons fa-brands fa-square-facebook"></i>
          </a>
          <a href="#" target="_blank">
            <i className="sidebarIcons fa-brands fa-square-twitter"></i>
          </a>
          <a href="#" target="_blank">
            <i className="sidebarIcons fa-brands fa-square-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SIdebar;
