import { ReactElement, FC } from "react";
import { CardHeaderProps } from "../types/propTypes";

const CardHeader: FC<CardHeaderProps> = ({
  children,
  attributes,
}): ReactElement => {
  return (
    <header
      {...attributes}
      className={`flex items-center relative ${attributes?.className} max-[450px]:flex-col max-[450px]:items-start max-[360px]:flex-col max-[360px]:items-start`}
    >
      {children}
    </header>
  );
};

export default CardHeader;
