import { MouseEvent } from "react";
import { toast, Bounce, ToastOptions } from "react-toastify";
import Modal from "react-modal";
import { ContactButtonProps } from "../types/propTypes";
import { NavItemData, Skill } from "../types";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io5";
import { FaLine } from "react-icons/fa6";

export const toastOptions: ToastOptions = {
  position: "top-right",
  autoClose: 3200,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Bounce,
};

export const modalStyles: Modal.Styles = {
  overlay: {
    backgroundColor: "rgba(19, 19, 19, 0.6)",
  },
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#111111",
    zIndex: "60",
    width: "70%",
    border: "2px solid #c4c4c4",
    padding: "26px",
    borderRadius: "16px"
  },
};

export const navItems: NavItemData[] = [
  {
    text: "About",
    targetId: "#about",
  },
  {
    text: "Education",
    targetId: "#education",
  },
  {
    text: "Skills",
    targetId: "#skills",
  },
  {
    text: "Academic Results",
    targetId: "#academic-results",
  },
  {
    text: "Contact",
    targetId: "#contact",
  },
];

export const contactButtons: ContactButtonProps<HTMLButtonElement>[] = [
  {
    text: "email",
    href: "mailto:warin.sai@ku.th",
    icon: <AiOutlineMail className="text-2xl" />,
  },
  {
    text: "instagram",
    href: "https://www.instagram.com/warin.dev/",
    icon: <AiOutlineInstagram className="text-2xl" />,
  },
  {
    text: "github",
    href: "https://github.com/WarinCode",
    icon: <IoLogoGithub className="text-2xl" />,
  },
  {
    text: "line",
    href: "",
    onClick: (e: MouseEvent<HTMLAnchorElement>): void => {
      toast.info("Line ID: varin471", toastOptions);
    },
    icon: <FaLine className="text-2xl" />,
  },
];

export const skills: Skill[] = [
  {
    name: "HTML",
    path: "/assets/icons/HTML5.svg",
  },
  {
    name: "CSS",
    path: "/assets/icons/CSS3.svg",
  },
  {
    name: "Scss",
    path: "/assets/icons/Sass.svg",
  },
  {
    name: "JavaScript",
    path: "/assets/icons/JavaScript.svg",
  },
  {
    name: "TypeScript",
    path: "/assets/icons/TypeScript.svg",
  },
  {
    name: "Python",
    path: "/assets/icons/Python.svg",
  },
  {
    name: "Java",
    path: "/assets/icons/Java.svg",
  },
  {
    name: "React",
    path: "/assets/icons/react.svg",
  },
  {
    name: "Tailwind CSS",
    path: "/assets/icons/Tailwind CSS.svg",
  },
  {
    name: "Express",
    path: "/assets/icons/Express.svg",
  },
  {
    name: "Node.js",
    path: "/assets/icons/Node.js.svg",
  },
  {
    name: "Bun",
    path: "/assets/icons/Bun.svg",
  },
  {
    name: "MySQL",
    path: "/assets/icons/MySQL.svg",
  },
  {
    name: "Git",
    path: "/assets/icons/Git.svg",
  },
  {
    name: "Vite.js",
    path: "/assets/icons/Vite.js.svg",
  },
  {
    name: "Postman",
    path: "/assets/icons/Postman.svg",
  },
  {
    name: "IntelliJ IDEA",
    path: "/assets/icons/IntelliJ IDEA.svg",
  },
  {
    name: "DataGrip",
    path: "/assets/icons/DataGrip.svg",
  },
];

export const grades: string[] = [
  "A",
  "B+",
  "B",
  "C+",
  "C",
  "D+",
  "D",
  "F",
  "W",
  "I",
];

export const credits: number[] = [3, 2, 1];

export const btnStyled: string = "w-56 h-14 bg-primary border-2 border-tertiary rounded-md text-tertiary p-4 delay-200 transition ease-linear hover:text-black hover:border-transparent hover:bg-secondary select-none shadow-md hover:shadow-tertiary hover:scale-95";

export class BearerToken {
  public static data: string = "";
}