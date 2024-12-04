import { ReactElement, FC } from "react";
import { InputWrapperProps } from "../types/propTypes";

const InputWrapper: FC<InputWrapperProps> = ({
  children,
  attributes,
}): ReactElement => {
  return (
    <div {...attributes} className={`w-full ${attributes?.className}`}>
      {children}
    </div>
  );
};

export default InputWrapper;
