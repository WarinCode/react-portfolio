import { ReactElement, FC } from "react";
import { CardTitleProps } from "../types/propTypes";

const CardTitle: FC<CardTitleProps> = ({ attributes, title }): ReactElement => {
  return (
    <h3
      {...attributes}
      className={`text-lg text-secondary ${attributes?.className}`}
    >
      {title}
    </h3>
  );
};

export default CardTitle;
