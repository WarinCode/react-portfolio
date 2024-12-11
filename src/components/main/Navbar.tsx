import { ReactElement, useState } from "react";
import uuid from "react-uuid";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import NavLink from "../NavLink";
import MobileMenu from "../MobileMenu";
import { NavItemData } from "../../types";
import { navItems } from "../../constants";

const Navbar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`flex flex-col p-6 w-full sticky top-0 h-20 z-50 px-28 backdrop-blur-lg max-[360px]:justify-between max-[360px]:-top-1 max-[360px]:px-12 transition-all ease-linear delay-150 ${
        isOpen ? "h-max" : "h-20"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center w-1/2 cursor-default max-[360px]:w-3/4">
          <img
            src="assets/icons/react.svg"
            alt="react-logo"
            className="w-12 h-12 transition delay-100 ease-in-out max-[360px]:w-10 max-[360px]:h-10"
          />
          <h4 className="capitalize ms-3 text-2xl text-secondary max-[360px]:text-lg">
            react portfolio
          </h4>
        </div>
        <div
          className="cursor-pointer max-[360px]:w-auto"
          onClick={handleClick}
        >
          {isOpen ? (
            <IoMdClose className="text-xl text-secondary text-end" />
          ) : (
            <GiHamburgerMenu className="text-xl text-secondary text-end" />
          )}
        </div>
        <ul className="flex items-center justify-evenly w-1/2 cursor-pointer max-[360px]:hidden">
          {navItems.map(
            (item: NavItemData): ReactElement => (
              <NavLink key={uuid()} {...item} />
            )
          )}
        </ul>
      </div>
      <MobileMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
