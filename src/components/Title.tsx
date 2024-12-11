import { ReactElement, FC } from "react";
import { TitleProps } from "../types/propTypes";

const Title: FC<TitleProps> = ({ title }): ReactElement => {
  return (
    <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent inline-block mb-8 max-[360px]:text-3xl">
      {`<${title} />`}
    </h1>
  );
};

export default Title;
