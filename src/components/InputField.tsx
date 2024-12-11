import { ReactElement, FC } from "react";
import InputWrapper from "./InputWrapper";
import { InputFieldProps } from "../types/propTypes";

const InputField: FC<InputFieldProps> = ({
  labelName,
  attributes,
  referent,
}): ReactElement => {
  return (
    <InputWrapper attributes={{ className: "max-[360px]:w-full" }}>
      <label htmlFor={attributes?.id} className="block mb-4 text-xl">
        {labelName}
      </label>
      <input
        {...attributes}
        className={`outline-none w-3/4 h-12 border-tertiary border-2 rounded bg-primary ps-2 transition delay-150 ease-linear focus:border-secondary ${attributes?.className}`}
        ref={referent}
        required
      />
    </InputWrapper>
  );
};

export default InputField;
