import { ReactElement, FC } from "react";
import uuid from "react-uuid";
import NavLink from "./NavLink";
import { navItems } from "../constants";
import { MobileMenuProps } from "../types/propTypes";
import { NavItemData } from "../types";

const MobileMenu: FC<MobileMenuProps> = ({ isOpen }): ReactElement => {
  return (
    <ul
      className={`flex flex-col items-start w-full cursor-pointer transition-all delay-75 ease-linear mt-4 max-[360px]:${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      {navItems.map(
        (item: NavItemData): ReactElement => (
          <NavLink key={uuid()} {...item} />
        )
      )}
    </ul>
  );
};

export default MobileMenu;
