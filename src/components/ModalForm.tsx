import { ReactElement, FC } from "react";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";
import Form from "./Form";
import { ModalFormProps } from "../types/propTypes";

Modal.setAppElement("#root");

const ModalForm: FC<ModalFormProps> = ({
  modal,
  id,
  course,
  closeModal
}): ReactElement => {
  return (
    <Modal {...modal}>
      <div className="relative">
        <IoCloseOutline
          className="text-3xl text-tertiary text-end cursor-pointer absolute top-0 right-0"
          onClick={modal.onRequestClose}
        />
      </div>
      <Form
        mode={"edit"}
        id={id}
        course={course}
        closeModal={closeModal}
      />
    </Modal>
  );
};

export default ModalForm;
