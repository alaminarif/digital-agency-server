import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../Images/logos/logo.png";

const Navbar = () => {
  const menuItems = (
    <div>
      <li>
        <Link to="/">Home</Link>
        <Link to="/our-team">Our Team</Link>
        <Link to="/our-protfolio">Our Protfolio</Link>
        <Link to="/contact-us">contact Us</Link>
      </li>
    </div>
  );
  return (
    <div className="navbar max-w-7xl mx-auto relative top-12 z-10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link>
          <img className="w-[150px]" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
