import { ReactElement, FC } from "react";
import { ButtonProps } from "../types/propTypes";

const baseStyled: string =
  "w-56 h-14 bg-primary border-2 border-tertiary rounded-md text-tertiary p-4 delay-200 transition ease-linear hover:text-black hover:border-transparent hover:bg-secondary select-none shadow-md hover:shadow-tertiary hover:scale-95";

const Button: FC<ButtonProps> = ({
  attributes,
  text,
  icon,
  buttonType,
  href,
  onClick,
}): ReactElement => {
  if (buttonType === "normal") {
    return (
      <button
        {...attributes}
        className={`${baseStyled} ${attributes?.className}`}
      >
        {text}
      </button>
    );
  }

  return (
    <button
      {...attributes}
      className={`${baseStyled} ${attributes?.className}`}
    >
      <a
        href={text === "line" ? "#contact" : href}
        {...(text === "line" ? {} : { target: "_blank" })}
        onClick={onClick}
        className="flex items-center justify-center w-full h-full"
      >
        {icon}
        <span className="capitalize ms-2">{text}</span>
      </a>
    </button>
  );
};

export default Button;
