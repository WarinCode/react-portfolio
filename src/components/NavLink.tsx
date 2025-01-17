import { FC, ReactElement } from "react";
import { NavLinkProps } from "../types/propTypes";

const NavLink: FC<NavLinkProps> = ({ text, targetId }): ReactElement => {
  return (
    <li className="nav-link text-tertiary max-[450px]:mb-3 max-[450px]:text-base max-[360px]:text-sm max-[360px]:mb-3">
      <a href={targetId}>{text}</a>
    </li>
  );
};

export default NavLink;
