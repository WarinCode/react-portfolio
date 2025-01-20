import { ReactElement, FC } from "react";
import { InputWrapperProps } from "../types/propTypes";
import { getClassName } from "../utils";

const InputWrapper: FC<InputWrapperProps> = ({
  children,
  attributes,
}): ReactElement => {
  return (
    <div {...attributes} className={`w-full ${getClassName(attributes?.className)}`}>
      {children}
    </div>
  );
};

export default InputWrapper;
