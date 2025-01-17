import { ReactElement, FC } from "react";
import { ButtonProps } from "../types/propTypes";
import { btnStyled } from "../constants";
import { getClassName } from "../utils";

const Button: FC<ButtonProps> = ({ attributes, text }): ReactElement => {
  return (
    <button
      {...attributes}
      className={`${btnStyled} ${getClassName(attributes?.className)}`}
    >
      {text}
    </button>
  );
};

export default Button;
