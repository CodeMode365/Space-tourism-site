import React, { useState, useRef } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = (): JSX.Element => {
  const [showNav, setshowNav] = useState<boolean>(false);

  const toggleNav = (): void => {
    setshowNav(!showNav);
  };

  return (
    <nav id="nav-bar">
      <div id="logo">
        <img src="./logo2.svg" alt="" />
      </div>
      <ul className={showNav ? "visible" : "hidden"}>
        <NavLink to={"/"}>
          <li>00 Home</li>
        </NavLink>
        <NavLink to={"/destination"}>
          <li>01 Destination</li>
        </NavLink>
        <NavLink to={"/crew"}>
          <li>02 Crew</li>
        </NavLink>
        <NavLink to={"/technology"}>
          <li>03 Technology</li>
        </NavLink>
      </ul>
      <div className="hamburger" id="hamburger">
        <button onClick={() => toggleNav()}>
          {!showNav ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
