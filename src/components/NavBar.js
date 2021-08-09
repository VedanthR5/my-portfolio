import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-blue-900">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-green-200 text-4xl font-bold PlayFair tracking-widest"
          >
            Vedanth
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-200 font-semibold OpenSans"
            activeClassName="text-red-900 bg-black"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/projects"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-200 font-semibold OpenSans"
            activeClassName="text-red-900 bg-black"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-200 font-semibold OpenSans"
            activeClassName="text-red-900 bg-black"
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
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="mailto:vedanth.ramanathan@gmail.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://discordapp.com/users/775455774771249173"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
