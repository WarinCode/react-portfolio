import { ReactElement } from "react";
import uuid from "react-uuid";
import NavLink from "../NavLink";
import { NavItemData } from "../../types";
import { navItems } from "../../constants";

const Navbar = (): ReactElement => {
  return (
    <nav className="flex items-center justify-between sticky top-0 h-20 z-50 px-28 backdrop-blur-lg">
      <div className="flex items-center w-1/2 cursor-default">
        <img
          src="assets/icons/react.svg"
          alt="react-logo"
          className="w-12 h-12 transition delay-100 ease-in-out"
        />
        <h4 className="capitalize ms-3 text-2xl text-secondary">
          react portfolio
        </h4>
      </div>
      <ul className="flex items-center justify-evenly w-1/2 cursor-pointer">
        {navItems.map(
          (item: NavItemData): ReactElement => (
            <NavLink key={uuid()} {...item} />
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
