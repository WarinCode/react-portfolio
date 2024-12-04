import { ReactElement, FC } from "react";
import { CardHeaderProps } from "../types/propTypes";

const CardHeader: FC<CardHeaderProps> = ({
  children,
  attributes,
}): ReactElement => {
  return (
    <header
      {...attributes}
      className={`flex items-center relative ${attributes?.className}`}
    >
      {children}
    </header>
  );
};

export default CardHeader;
