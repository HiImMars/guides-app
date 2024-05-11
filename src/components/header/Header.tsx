import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiDiabloSkull } from "react-icons/gi";

export const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleNavLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <header className="flex items-center gap-10 px-8">
      <GiDiabloSkull className="w-12 h-12 fill-light" />
      <nav className="flex items-center gap-8 text-3xl text-light">
        <NavLink
          to="/"
          className={`py-5  hover:text-active focus:text-active transition ${
            activeLink === "home" ? "text-active" : "text-light"
          }`}
          onClick={() => handleNavLinkClick("home")}
        >
          Home
        </NavLink>
        <NavLink
          to="/builds"
          className={`py-5 hover:text-active focus:text-active transition ${
            activeLink === "builds" ? "text-active" : "text-light"
          }`}
          onClick={() => handleNavLinkClick("builds")}
        >
          Builds
        </NavLink>
      </nav>
    </header>
  );
};
