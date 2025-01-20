import { ReactElement, FC } from "react";
import { BackgroundLayerProps } from "../types/propTypes";
import { getClassName } from "../utils";

const BackgroundLayer: FC<BackgroundLayerProps<HTMLDivElement>> = ({
  attributes,
}): ReactElement => {
  return (
    <div
      {...attributes}
      className={`absolute shadow-lg w-[270px] h-[380px] ${getClassName(attributes?.className)}`}
    ></div>
  );
};

export default BackgroundLayer;
