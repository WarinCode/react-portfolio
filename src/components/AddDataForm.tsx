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
import { AddDataFormProps, FormProps } from "../types/propTypes";
import { grades, credits, toastOptions } from "../constants";
import { getApiUrl } from "../utils";

const AddDataForm: FC<AddDataFormProps> = ({ attributes }): ReactElement => {
  const { setCourses, handleFetch } = useContext(
    CourseContext
  ) as CourseContextType;
  const courseName = useRef() as MutableRefObject<HTMLInputElement>;
  const courseCode = useRef() as MutableRefObject<HTMLInputElement>;
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

  const clear = (): void => {
    setCurrentValue(courseName, "");
    setCurrentValue(courseCode, "");
    setCurrentValue(grade, "A");
    setCurrentValue(credit, 3);
  };

  const formValidation = useCallback((id?: number): void => {
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

    if (getCurrentValue(courseCode).length < 8) {
      setCurrentValue(courseCode, "");
      courseCode.current.focus();
      throw new Error("รหัสวิชาต้องมีความยาวเท่ากับ 8!");
    }

    if (isNaN(parseInt(getCurrentValue(courseCode)))) {
      setCurrentValue(courseCode, "");
      courseCode.current.focus();
      throw new Error("รหัสวิชาต้องเป็นตัวเลขเท่านั้น!");
    }

    let temp: string = getCurrentValue(courseCode);
    for (let j: number = 0; j < 8; j++) {
      if (isNaN(parseInt(temp[j]))) {
        setCurrentValue(courseCode, "");
        courseCode.current.focus();
        throw new Error("รหัสวิชาต้องเป็นตัวเลขเท่านั้น!");
      }
    }

    let isError: boolean = false;
    setCourses((prevCourses: Courses | null): Courses | null => {
      if (prevCourses === null) {
        isError = true;
        return prevCourses;
      } else if (id === undefined) {
        isError = prevCourses.some(
          (course: CourseModel): boolean =>
            course.courseCode === getCurrentValue(courseCode) ||
            course.courseName === getCurrentValue(courseName)
        );
      } else {
        const filterdCourses: Courses = prevCourses.filter(
          (course: CourseModel): boolean => course.id !== id
        );
        isError = filterdCourses.some(
          (course: CourseModel) =>
            course.courseCode === getCurrentValue(courseCode) ||
            course.courseName === getCurrentValue(courseName)
        );
      }

      return prevCourses;
    });

    if (isError) {
      clear();
      throw new Error("ไม่สามารถเพิ่มชื่อวิชาได้!");
    }
  }, []);

  const getId = (): number => {
    let id: number = 0;
    setCourses((prevCourses: Courses | null) => {
      id =
        prevCourses?.length === 0 || prevCourses === null
          ? 1
          : prevCourses[prevCourses.length - 1].id + 1;
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
        courseCode: getCurrentValue(courseCode),
        grade: getCurrentValue(grade),
        credit: parseInt(getCurrentValue(credit)),
      };

      try {
        formValidation();

        const { status }: AxiosResponse<CourseModel> =
          await axios.post<CourseModel>(`${getApiUrl()}/courses/create`, payload);

        if (status === HttpStatusCode.Created) {
          handleFetch();
          toast.success("เพิ่มรายวิชาสำเร็จ", toastOptions);
          clear();
        }
      } catch (e: any) {
        if (e instanceof AxiosError || e instanceof Error) {
          toast.error(e.message, toastOptions);
          clear();
        }
      }
    },
    []
  );

  return (
    <FormContainer
      attributes={{
        ...attributes,
        className:
          "mt-8 grid grid-cols-2 grid-rows-3 place-items-center text-tertiary font-k2d gap-y-12 max-[450px]:flex max-[450px]:flex-col max-[360px]:flex max-[360px]:flex-col",
        onSubmit: handleSubmit,
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
          id: "courseCode",
          type: "text",
          minLength: 1,
          maxLength: 8,
        }}
        referent={courseCode}
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
        attributes={{
          className:
            "col-span-2 mt-4 w-[250px] max-[450px]:w-full max-[360px]:w-full",
          type: "submit",
        }}
        text={"บันทึก"}
      />
    </FormContainer>
  );
};

export default AddDataForm;
