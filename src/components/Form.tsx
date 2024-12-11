import {
  FC,
  useEffect,
  useCallback,
  useRef,
  ReactElement,
  useContext,
  FormEvent,
  MutableRefObject,
} from "react";
import axios, { AxiosResponse, HttpStatusCode, AxiosError } from "axios";
import { toast, Id } from "react-toastify";
import FormContainer from "./containers/FormContainer";
import CourseContext from "./contexts/CourseContext";
import { CourseContextType } from "../types";
import Button from "./Button";
import InputField from "./InputField";
import SelectField from "./SelectField";
import CourseModel, { Courses } from "../types/models/course";
import { FormProps } from "../types/propTypes";
import { grades, credits, toastOptions } from "../constants";
import { getLocalhost } from "../utils";

const Form: FC<FormProps> = ({
  mode,
  course,
  id,
  closeModal,
}): ReactElement => {
  const { courses, setCourses, handleFetch } = useContext(
    CourseContext
  ) as CourseContextType;
  const courseName = useRef() as MutableRefObject<HTMLInputElement>;
  const code = useRef() as MutableRefObject<HTMLInputElement>;
  const grade = useRef() as MutableRefObject<HTMLSelectElement>;
  const credit = useRef() as MutableRefObject<HTMLSelectElement>;

  const getCurrentValue = ({
    current: { value },
  }: MutableRefObject<HTMLInputElement | HTMLSelectElement>): string => {
    return value;
  };

  const setCurrentValue = (
    ref: MutableRefObject<HTMLInputElement | HTMLSelectElement>,
    value: string | number | undefined
  ): void => {
    if (typeof value === "undefined") {
      ref.current.value = "";
    } else if (typeof value === "number") {
      ref.current.value = String(value);
    } else {
      ref.current.value = value;
    }
  };

  useEffect((): void => {
    if (mode === "edit") {
      courseName.current.focus();
      setCurrentValue(courseName, course?.courseName);
      setCurrentValue(code, course?.code);
      setCurrentValue(grade, course?.grade);
      setCurrentValue(credit, course?.credit);
    }
  }, []);

  const clear = (): void => {
    setCurrentValue(courseName, "");
    setCurrentValue(code, "");
    setCurrentValue(grade, "A");
    setCurrentValue(credit, 3);
  };

  const formValidation = useCallback((id?: string): void => {
    if (getCurrentValue(courseName).length === 0) {
      setCurrentValue(courseName, "");
      courseName.current.focus();
      throw new Error("โปรดกรอกชื่อวิชา!");
    }

    for (let i: number = 0; i <= 9; i++) {
      if (getCurrentValue(courseName).startsWith(i.toString())) {
        setCurrentValue(courseName, "");
        courseName.current.focus();
        throw new Error("ชื่อวิชาไม่สามารถขึ้นต้นด้วยตัวเลขได้!");
      }
    }

    if (getCurrentValue(code).length < 8) {
      setCurrentValue(code, "");
      code.current.focus();
      throw new Error("รหัสวิชาต้องมีความยาวเท่ากับ 8!");
    }

    if (isNaN(parseInt(getCurrentValue(code)))) {
      setCurrentValue(code, "");
      code.current.focus();
      throw new Error("รหัสวิชาต้องเป็นตัวเลขเท่านั้น!");
    }

    let temp: string = getCurrentValue(code);
    for (let j: number = 0; j < 8; j++) {
      if (isNaN(parseInt(temp[j]))) {
        setCurrentValue(code, "");
        code.current.focus();
        throw new Error("รหัสวิชาต้องเป็นตัวเลขเท่านั้น!");
      }
    }

    let isError: boolean = false;
    setCourses((prevCourses: Courses): Courses => {
      if (id === undefined) {
        isError = prevCourses.some(
          (course: CourseModel): boolean =>
            course.code === getCurrentValue(code) ||
            course.courseName === getCurrentValue(courseName)
        );
      } else {
        const filterdCourses: Courses = prevCourses.filter(
          (course: CourseModel): boolean => course.id !== id
        );
        isError = filterdCourses.some(
          (course: CourseModel) =>
            course.code === getCurrentValue(code) ||
            course.courseName === getCurrentValue(courseName)
        );
      }

      return prevCourses;
    });

    if (isError) {
      clear();
      throw new Error("ไม่สามารถเพิ่มชื่อวิชาหรือรหัสวิชาที่ซ้ำกันได้!");
    }
  }, []);

  const getId = (): string => {
    let id: string = "";
    setCourses((prevCourses: Courses) => {
      id =
        prevCourses.length === 0
          ? "1"
          : String(parseInt(prevCourses[prevCourses.length - 1].id) + 1);
      return prevCourses;
    });

    return id;
  };

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();

      const payload: CourseModel = {
        id: getId(),
        courseName: getCurrentValue(courseName),
        code: getCurrentValue(code),
        grade: getCurrentValue(grade),
        credit: parseInt(getCurrentValue(credit)),
      };

      try {
        formValidation();

        const { status }: AxiosResponse<CourseModel> =
          await axios.post<CourseModel>(`${getLocalhost()}/courses`, payload);

        if (status === HttpStatusCode.Created) {
          await handleFetch();
          toast.success("เพิ่มรายวิชาสำเร็จ", toastOptions);
          clear();
        }
      } catch (e: any) {
        if (e instanceof AxiosError || e instanceof Error) {
          toast.error(e.message, toastOptions);
        }
      }
    },
    []
  );

  const handleEdit = useCallback(
    async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();

      const toastId: Id = toast.info("กำลังแก้ไขข้อมูล", {
        ...toastOptions,
        isLoading: true,
      });

      const payload: CourseModel = {
        id: id as string,
        courseName: getCurrentValue(courseName),
        code: getCurrentValue(code),
        grade: getCurrentValue(grade),
        credit: parseInt(getCurrentValue(credit)),
      };

      try {
        formValidation(id);

        const { status }: AxiosResponse<CourseModel> =
          await axios.put<CourseModel>(
            `${getLocalhost()}/courses/${id}`,
            payload
          );

        if (status === HttpStatusCode.Ok) {
          setTimeout(async (): Promise<void> => {
            await handleFetch();
            clear();
            if (closeModal !== undefined) closeModal();

            toast.update(toastId, {
              ...toastOptions,
              render: "แก้ไขข้อมูลสำเร็จ",
              type: "success",
              isLoading: false,
            });
          }, 2000);
        }
      } catch (e: any) {
        if (e instanceof AxiosError || e instanceof Error) {
          toast.update(toastId, {
            ...toastOptions,
            render: e.message,
            type: "error",
            isLoading: false,
          });
        }
      }
    },
    []
  );

  return (
    <FormContainer
      attributes={{
        className:
          "mt-8 grid grid-cols-2 grid-rows-3 place-items-center text-tertiary font-k2d gap-y-12 max-[360px]:grid-cols-1 max-[360px]:grid-flow-row max-[360px]:items-start",
        onSubmit: mode === "add" ? handleSubmit : handleEdit,
      }}
    >
      <InputField
        labelName="ชื่อวิชา"
        attributes={{
          id: "courseName",
          type: "text",
          minLength: 4,
          maxLength: 50,
        }}
        referent={courseName}
      />
      <InputField
        labelName="รหัสวิชา"
        attributes={{
          id: "courseName",
          type: "text",
          minLength: 1,
          maxLength: 8,
        }}
        referent={code}
      />
      <SelectField
        labelName="เกรด"
        optionList={grades}
        attributes={{ id: "grade" }}
        referent={grade}
      />
      <SelectField
        labelName="หน่วยกิต"
        optionList={credits}
        attributes={{ id: "credit" }}
        referent={credit}
      />
      <Button
        attributes={{ className: "col-span-2 mt-4 w-[250px]", type: "submit" }}
        text={mode === "add" ? "บันทึก" : "แก้ไข"}
        buttonType={"normal"}
      />
    </FormContainer>
  );
};

export default Form;
