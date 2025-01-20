import { ReactElement, FC } from "react";
import { LineProps } from "../types/propTypes";
import { getClassName } from "../utils";

const Line: FC<LineProps> = ({ attributes }): ReactElement => {
  return (
    <div
      {...attributes}
      className={`bg-[#C6C6C6] w-full h-[0.5px] opacity-30 my-24 max-[450px]:my-16 max-[360px]:my-16 ${getClassName(attributes?.className)}`}
    ></div>
  );
};

export default Line;
