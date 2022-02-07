import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-white">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-green-900 hover:text-blue-400 text-5xl font-bold PlayFair tracking-widest"
          >
            Vedanth
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-400 hover:text-green-300 text-xl font-semibold OpenSans"
            activeClassName="text-red-900 bg-blue-900"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/projects"
            className="inline-flex items-center py-5 px-10 my-6 rounded text-blue-400 hover:text-green-300 text-xl font-semibold OpenSans"
            activeClassName="text-red-900 bg-blue-900"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-400 hover:text-green-300 text-xl font-semibold OpenSans"
            activeClassName="text-red-900 bg-blue-900"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/VedanthR5?tab=repositories"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 55, width: 55 }}
          />
          <SocialIcon
            url="mailto:vedanth.ramanathan@gmail.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 55, width: 55 }}
          />
        </div>
      </div>
    </header>
  );
}
