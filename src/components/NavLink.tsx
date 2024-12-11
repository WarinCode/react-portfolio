import { FC, ReactElement } from "react";
import { NavLinkProps } from "../types/propTypes";

const NavLink: FC<NavLinkProps> = ({ text, targetId }): ReactElement => {
  return (
    <li className="nav-link text-tertiary max-[360px]:text-sm max-[360px]:mb-2">
      <a href={targetId}>{text}</a>
    </li>
  );
};

export default NavLink;
