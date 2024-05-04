import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/builds">Builds</NavLink>
      </nav>
    </header>
  );
};
