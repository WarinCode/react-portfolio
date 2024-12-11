import { ReactElement, FC } from "react";
import { ContainerProps } from "../../types/propTypes";

const Container: FC<ContainerProps> = ({
  children,
  attributes,
}): ReactElement => {
  return <section {...attributes} className={`px-28 max-[450px]:px-12 max-[360px]:px-12 ${attributes?.className}`}>{children}</section>;
};

export default Container;
