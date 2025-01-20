import { ReactElement, FC } from "react";
import { CardDetailsProps } from "../types/propTypes";
import { getClassName } from "../utils";

const CardDetails: FC<CardDetailsProps<HTMLDivElement>> = ({
  children,
  attributes,
}): ReactElement => {
  return (
    <div {...attributes} className={`mt-3 leading-7 ${getClassName(attributes?.className)}`}>
      {children}
    </div>
  );
};

export default CardDetails;
