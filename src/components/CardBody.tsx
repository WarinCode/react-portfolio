import { ReactElement, FC } from "react";
import { CardBodyProps } from "../types/propTypes";

const CardBody: FC<CardBodyProps<HTMLDivElement>> = ({
  children,
  attributes,
}): ReactElement => {
  return (
    <div {...attributes} className={`py-4 font-k2d ${attributes?.className}`}>
      {children}
    </div>
  );
};

export default CardBody;
