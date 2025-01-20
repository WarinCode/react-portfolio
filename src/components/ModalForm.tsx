import { ReactElement, FC } from "react";
import Modal from "react-modal";
import EditDataForm from "./EditDataForm";
import { ModalFormProps } from "../types/propTypes";

Modal.setAppElement("#root");

const ModalForm: FC<ModalFormProps> = ({
  modal,
  id,
  course,
  handleCloseModal,
}): ReactElement => {

  return (
    <Modal {...modal}>
      <EditDataForm id={id} course={course} handleCloseModal={handleCloseModal} />
    </Modal>
  );
};

export default ModalForm;
