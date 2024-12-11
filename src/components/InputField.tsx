import { ReactElement, FC } from "react";
import InputWrapper from "./InputWrapper";
import { InputFieldProps } from "../types/propTypes";

const InputField: FC<InputFieldProps> = ({
  labelName,
  attributes,
  referent,
}): ReactElement => {
  return (
    <InputWrapper>
      <label htmlFor={attributes?.id} className="block mb-4 text-xl max-[360px]:text-lg max-[360px]:w-full">
        {labelName}
      </label>
      <input
        {...attributes}
        className={`outline-none w-3/4 h-12 border-tertiary border-2 rounded bg-primary ps-2 transition delay-150 ease-linear focus:border-secondary ${attributes?.className} max-[360px]:w-full`}
        ref={referent}
        required
      />
    </InputWrapper>
  );
};

export default InputField;
