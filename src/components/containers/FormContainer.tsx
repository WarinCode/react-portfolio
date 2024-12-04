import { ReactElement, FC } from "react";
import { FormContainerProps } from "../../types/propTypes";

const FormContainer: FC<FormContainerProps> = ({
  children,
  attributes,
}): ReactElement => {
  return <form {...attributes}>{children}</form>;
};

export default FormContainer;
