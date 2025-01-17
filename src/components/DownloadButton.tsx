import { ReactElement, FC } from "react";
import { DownloadButtonProps } from "../types/propTypes";
import { btnStyled } from "../constants";
import { getClassName } from "../utils";

const DownloadButton: FC<DownloadButtonProps> = ({
  attributes,
  text,
  to,
  icon
}): ReactElement => {
  return (
    <button
      {...attributes}
      className={`${btnStyled} ${getClassName(attributes?.className)}`}
    >
      <a href={to} download={true} target="_blank" className="flex items-center justify-center">
        <span>{icon}</span>
        <span className="ms-1 font-k2d">{text}</span>
      </a>
    </button>
  );
};

export default DownloadButton;
