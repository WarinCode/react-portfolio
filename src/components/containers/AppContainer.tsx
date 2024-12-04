import { ReactElement, FC, useContext } from "react";
import { AppContainerProps } from "../../types/propTypes";

const AppContainer: FC<AppContainerProps<HTMLDivElement>> = ({
  children,
  attributes,
}): ReactElement => {
  return (
    <div
      {...attributes}
      className={`w-full h-full ${attributes?.className}`}
    >
      {children}
    </div>
  );
};

export default AppContainer;
