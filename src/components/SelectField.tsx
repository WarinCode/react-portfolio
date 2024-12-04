import { ReactElement, FC } from "react";
import uuid from "react-uuid";
import InputWrapper from "./InputWrapper";
import { SelectFieldProps } from "../types/propTypes";

const SelectField: FC<SelectFieldProps> = ({
  labelName,
  attributes,
  optionList,
  referent,
}): ReactElement => {
  return (
    <InputWrapper>
      <label htmlFor={attributes?.id} className="block mb-4 text-xl">
        {labelName}
      </label>
      <select
        {...attributes}
        className={`w-3/4 h-12 outline-none p-2 cursor-pointer bg-primary border-tertiary border-2 rounded text-tertiary transition delay-150 ease-linear
           hover:border-secondary`}
        required
        ref={referent}
      >
        {optionList.map(
          (item: number | string): ReactElement => (
            <option key={uuid()}>{item}</option>
          )
        )}
      </select>
    </InputWrapper>
  );
};

export default SelectField;
