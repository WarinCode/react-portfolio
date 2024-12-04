import { FC, ReactElement } from "react";
import { CardContainerProps } from "../../types/propTypes";

const CardContainer: FC<CardContainerProps<HTMLDivElement>> = ({
  children,
  attributes,
}): ReactElement => {
  return <div {...attributes}>{children}</div>;
};

export default CardContainer;
