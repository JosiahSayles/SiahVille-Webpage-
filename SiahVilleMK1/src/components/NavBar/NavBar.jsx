import React from "react";
import { Link, NavLink } from "react-router";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 w-full  shadow-md z-50 flex justify-center items-center  shadow-md px-6 py-3">
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/img/SiahVilleLogo.png"
          alt="SiahVilleLogo"
          className="w-40 h-40 object contain"
        />
      </Link>
      <nav></nav>

      <div></div>
    </header>
  );
}
