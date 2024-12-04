import { ReactElement, FC } from "react";
import { CardDetailsProps } from "../types/propTypes";

const CardDetails: FC<CardDetailsProps<HTMLDivElement>> = ({
  children,
  attributes,
}): ReactElement => {
  return (
    <div {...attributes} className={`mt-3 leading-7 ${attributes?.className}`}>
      {children}
    </div>
  );
};

export default CardDetails;
