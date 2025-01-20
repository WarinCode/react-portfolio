import { ReactElement, FC, useContext } from "react";
import { AppContainerProps } from "../../types/propTypes";
import { getClassName } from "../../utils";

const AppContainer: FC<AppContainerProps<HTMLDivElement>> = ({
  children,
  attributes,
}): ReactElement => {
  return (
    <div
      {...attributes}
      className={`w-full h-full ${getClassName(attributes?.className)}`}
    >
      {children}
    </div>
  );
};

export default AppContainer;
