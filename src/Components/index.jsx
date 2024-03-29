import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Context/context";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const context = useContext(CartContext);
  let activeStyle = {
    textDocation: "underline",
  };
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg ">
          <NavLink
            to="/"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/">Clothes</NavLink>
        </li>
        <li>
          <NavLink to="/">Electronics</NavLink>
        </li>
        <li>
          <NavLink to="/">Toys</NavLink>
        </li>
        <li>
          <NavLink to="/">Others</NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li>lorem@gmail.com</li>
        <li>
          <NavLink
            to="/Orders"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/Account">My Account</NavLink>
        </li>
        <li>
          <NavLink to="/Login">Sign In</NavLink>
        </li>
        <li className="grid grid-cols-2 items-center text-lg ">
          <ShoppingCartIcon className="h-6 w-6 text-black" />
          {context.pCount}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
