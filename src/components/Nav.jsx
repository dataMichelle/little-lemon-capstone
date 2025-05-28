import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav aria-label="Main Navigation">
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/about">About</NavLink>
        </li> */}
        {/* <li>
          <NavLink to="/menu">Menu</NavLink>
        </li> */}
        <li>
          <NavLink to="/booking-page">Reservations</NavLink>
        </li>
        {/* <li>
          <NavLink to="/order-online">Order Online</NavLink>
        </li> */}
        {/* <li>
          <NavLink to="/login">Login</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
