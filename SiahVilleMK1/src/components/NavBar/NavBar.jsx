import React from "react";
import { Link, NavLink } from "react-router";

export default function NavBar() {
  return (
    <header className="font fixed top-0 left-0 w-full  shadow-xl z-50 flex justify-evenly  items-baseline bg-slate-500 shadow-md px-6 py-3">
      <div className="flex ">
        <NavLink
          to="/"
          className="flex-col items text-white pr-5 hover:text-red-200"
        >
          <img className="pl-2 " src="/Icons/home.png" alt="Home Icon" />
          Home
        </NavLink>
        <NavLink className="flex-col items text-white pr-5 hover:text-red-200">
          <img
            className="pl-8"
            src="/Icons/shoppingbag.png"
            alt="Shopping bag Icon"
          />
          Shopping Bag
        </NavLink>
        <NavLink className="flex-col items text-white  pr-5 hover:text-red-200">
          <img className="pl-1" src="/Icons/login.png" alt="Login Icon" />
          Login
        </NavLink>
      </div>
      <Link
        to="/"
        className="flex items-center justify-center shadow-lg  rounded-3xl"
      >
        <img
          src="/img/SiahVilleLogo.png"
          alt="SiahVilleLogo"
          className="w-40 h-30 object contain"
        />
      </Link>
      <div className="flex ">
        <NavLink className="flex-col items text-white pr-5 hover:text-red-200 ">
          <img className="pl-3" src="/Icons/search.png" alt="Search Icon" />
          Search
        </NavLink>
        <NavLink className="flex-col items text-white pr-5 hover:text-red-200">
          <img
            className="pl-7"
            src="/Icons/collections.png"
            alt="Shopping bag Icon"
          />
          Collections
        </NavLink>
        <NavLink
          to="/stickers"
          className="flex-col items text-white pr hover:text-red-200"
        >
          <img className="pl-4" src="/Icons/catalog.png" alt="Login Icon" />
          Catalog
        </NavLink>
      </div>
    </header>
  );
}
