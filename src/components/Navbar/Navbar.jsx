import React from "react";
import { useState, useEffect, useRef } from "react";
import Carousal from "../Carousal/Carousal";
import "./Navbar.css";

const Navbar = () => {
  const menuRef = useRef();
  const iconRef = useRef();

  function openMenu() {
    if (menuRef.current.classList.contains("open")) {
      menuRef.current.classList.add("close");
      iconRef.current.classList.remove("icon-closed");

      setTimeout(function () {
        menuRef.current.classList.remove("open");
      }, 1300);
    } else {
      menuRef.current.classList.remove("close");
      menuRef.current.classList.add("open");
      iconRef.current.classList.add("icon-closed");
    }
  }

  function openSubmenu(event) {
    if (event.currentTarget.classList.contains("active")) {
      event.currentTarget.classList.remove("active");
    } else {
      event.currentTarget.classList.add("active");
    }
  }

  return (
      <nav>
        <div className="menubar">
          <a href="#" className="home">
            Magnetic Minds
          </a>
          <div className="icons">
            <div className="secondary-icons">
              <i className="icon-second">
                <img src="https://webdevtrick.com/wp-content/uploads/user-icon.svg" />
              </i>
              <i className="icon-second">
                <img src="https://webdevtrick.com/wp-content/uploads/search-icon.svg" />
              </i>
              <i className="icon-second">
                <img src="https://webdevtrick.com/wp-content/uploads/location-icon.svg" />
              </i>
            </div>

            <i className="icon-menu" onClick={openMenu} ref={iconRef}>
              <span></span>
            </i>
          </div>
        </div>
        <ul className="menu" ref={menuRef}>
          <li className="menu-link">
            <a href="#" className="text-item">
              About
            </a>
          </li>
          <li className="menu-link sub" onClick={openSubmenu}>
            <a href="#" className="text-item">
              Blog<span className="icon"></span>
            </a>
            <ul className="submenu">
              <li className="sub-item">
                <a href="#">Semrush</a>
              </li>
              <li className="sub-item">
                <a href="#">Infosys</a>
              </li>
              <li className="sub-item">
                <a href="#">Dell</a>
              </li>
            </ul>
          </li>
          <li className="menu-link sub" onClick={openSubmenu}>
            <a href="#" className="text-item">
              Services<span className="icon"></span>
            </a>
            <ul className="submenu">
              <li className="sub-item">
                <a href="#">Depression</a>
              </li>
              <li className="sub-item">
                <a href="#">Relationship</a>
              </li>
              <li className="sub-item">
                <a href="#">Corporate</a>
              </li>
            </ul>
          </li>
          <li className="menu-link">
            <a href="#" className="text-item">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
