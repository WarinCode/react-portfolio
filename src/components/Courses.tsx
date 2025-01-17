import { ReactElement, useContext } from "react";
import uuid from "react-uuid";
import CourseContext from "./contexts/CourseContext";
import { CourseContextType } from "../types";
import Course from "./Course";
import CourseModel from "../types/models/course";

const Courses = (): ReactElement => {
  const { courses } = useContext(CourseContext) as CourseContextType;

  return (
    <div className="grid grid-cols-2 grid-flow-row place-items-center items-baseline gap-y-8 max-[450px]:grid-cols-1 max-[360px]:grid-cols-1">
      {courses !== null ? (
        courses.map(
          (course: CourseModel): ReactElement => (
            <Course
              key={uuid()}
              {...course}
              attributes={{
                className: "max-[450px]:w-full max-[360px]:w-full",
              }}
            />
          )
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default Courses;
