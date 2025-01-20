import { ReactElement, FC } from "react";
import { CardBodyProps } from "../types/propTypes";
import { getClassName } from "../utils";

const CardBody: FC<CardBodyProps<HTMLDivElement>> = ({
  children,
  attributes,
}): ReactElement => {
  return (
    <div {...attributes} className={`py-4 font-k2d ${getClassName(attributes?.className)}`}>
      {children}
    </div>
  );
};

export default CardBody;
