import { ReactElement, FC } from "react";
import { CardHeaderProps } from "../types/propTypes";
import { getClassName } from "../utils";

const CardHeader: FC<CardHeaderProps> = ({
  children,
  attributes,
}): ReactElement => {
  return (
    <header
      {...attributes}
      className={`flex items-center relative ${getClassName(attributes?.className)} max-[450px]:flex-col max-[450px]:items-start max-[360px]:flex-col max-[360px]:items-start`}
    >
      {children}
    </header>
  );
};

export default CardHeader;
