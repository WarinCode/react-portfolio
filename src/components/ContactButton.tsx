import { ReactElement, FC } from "react";
import { ContactButtonProps } from "../types/propTypes";
import { btnStyled } from "../constants";
import { getClassName } from "../utils";

const ContactButton: FC<ContactButtonProps> = ({
  attributes,
  text,
  icon,
  href,
  onClick,
}): ReactElement => {
  const isLine: boolean = text === "line";

  return (
    <button
      {...attributes}
      className={`${btnStyled} ${getClassName(attributes?.className)}`}
    >
      <a
        href={isLine ? "#contact" : href}
        target={isLine ? undefined : "_blank"}
        onClick={onClick}
        className="flex items-center justify-center w-full h-full"
      >
        {icon}
        <span className="capitalize ms-2">{text}</span>
      </a>
    </button>
  );
};

export default ContactButton;
