import { ReactElement, FC } from "react";
import { CardLinkProps } from "../types/propTypes";

const CardLink: FC<CardLinkProps> = ({ attributes, icon }): ReactElement => {
  return (
    <a {...attributes} target="_blank">
      {icon}
    </a>
  );
};

export default CardLink;
