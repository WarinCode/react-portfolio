import { ReactElement, FC } from "react";
import uuid from "react-uuid";
import NavLink from "./NavLink";
import { navItems } from "../constants";
import { MobileMenuProps } from "../types/propTypes";
import { NavItemData } from "../types";

const MobileMenu: FC<MobileMenuProps> = ({ isOpen }): ReactElement => {
  return (
    <ul
      className={`opacity-0 ${
        isOpen
          ? "opacity-100 max-[360px]:flex max-[360px]:flex-col max-[360px]:items-start"
          : ""
      } w-full cursor-pointer transition-[opacity] delay-100 ease-linear mt-4`}
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
