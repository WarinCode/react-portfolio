import { useState, useContext, useCallback, ReactElement, FC } from "react";
import axios, { AxiosResponse, AxiosError, HttpStatusCode } from "axios";
import { toast, Id } from "react-toastify";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import ModalForm from "./ModalForm";
import Line from "./Line";
import CourseContext from "./contexts/CourseContext";
import CourseModel from "../types/models/course";
import { CourseContextType } from "../types";
import { CourseProps } from "../types/propTypes";
import { modalStyles, toastOptions } from "../constants";
import { getLocalhost } from "../utils";

const Course: FC<CourseProps> = ({
  attributes,
  id,
  courseName,
  code,
  credit,
  grade,
}): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const { handleFetch } = useContext(CourseContext) as CourseContextType;

  const handleClick = (): void => {
    setOpen(!open);
  };

  const handleOpenModal = (): void => {
    setModalIsOpen(true);
  };

  const handleCloseModal = (): void => {
    setModalIsOpen(false);
  };

  const handleDelete = useCallback(async (id: string): Promise<void> => {
    const toastId: Id = toast.info("กำลังลบข้อมูล", {
      ...toastOptions,
      isLoading: true,
    });

    try {
      const { status }: AxiosResponse<CourseModel> =
        await axios.delete<CourseModel>(`${getLocalhost()}/courses/${id}`);

      if (status === HttpStatusCode.Ok) {
        setTimeout(async (): Promise<void> => {
          await handleFetch();
          toast.update(toastId, {
            ...toastOptions,
            render: "ลบข้อมูลสำเร็จ",
            type: "success",
            isLoading: false,
          });
        }, 2000);
      }

    } catch (e: any) {
      if (e instanceof AxiosError) {
        toast.update(toastId, {
          ...toastOptions,
          type: "error",
          render: e.message,
          isLoading: false,
        });
      }
    }
  }, []);

  return (
    <div
      {...attributes}
      className={`font-k2d text-tertiary w-3/4 bg-zinc-900 rounded-lg mb-8 p-6 shadow ${attributes?.className}`}
    >
      <ModalForm
        modal={{
          isOpen: modalIsOpen,
          style: modalStyles,
          onRequestClose: handleCloseModal,
        }}
        id={id}
        course={{
          id,
          courseName,
          code,
          credit,
          grade,
        }}
        closeModal={handleCloseModal}
      />

      <div>
        <header
          className="w-full cursor-pointer text-lg translate-y-2 flex items-center justify-between"
          onClick={handleClick}
        >
          <p className="max-[450px]:text-base max-[360px]:text-base">{courseName}</p>
          <IoIosArrowUp
            className={`text-xl transition delay-100 ease-linear max-[450px]:text-base max-[360px]:text-base ${
              open ? "rotate-0" : "rotate-180"
            }`}
          />
        </header>
        <div
          className={`transition-all ease-linear delay-100 ${
            open ? " h-[80px] opacity-100" : "h-0 opacity-0 "
          }`}
        >
          <Line attributes={{ className: "mt-8 mb-6 max-[450px]:mt-6 max-[450px]:mb-6 max-[360px]:mt-6 max-[360px]:mb-6" }} />
          <p className="text-sm">รหัสวิชา: {code}</p>
          <p className="text-sm my-2">
            เกรด: <span className="font-bold">{grade}</span>
          </p>
          <p className="text-sm">หน่วยกิต: {credit}</p>
        </div>
        <div
          className={`flex items-center justify-end transition-all ease-linear delay-100 ${
            open ? " h-[40px] opacity-100" : "h-0 opacity-0 "
          } mt-8`}
        >
          <AiOutlineEdit
            className="text-2xl me-4 cursor-pointer"
            onClick={handleOpenModal}
          />
          <AiOutlineDelete
            className="text-2xl cursor-pointer"
            onClick={() => handleDelete(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Course;
