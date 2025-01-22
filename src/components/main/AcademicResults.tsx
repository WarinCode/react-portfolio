import { ReactElement } from "react";
import Container from "../containers/Container";
import Title from "../Title";
import Line from "../Line";
import AddDataForm from "../AddDataForm";
import Courses from "../Courses";
import CourseContext from "../contexts/CourseContext";
import GPAX from "../GPAX";
import CourseModel from "../../types/models/course";
import useFetch from "../../hooks/useFetch";
import { getApiUrl } from "../../utils";
import { GPAXType } from "../../types/models/gpa";

const AcademicResults = (): ReactElement => {
  const apiUrl: string = getApiUrl();
  const [courses, setCourses, refresh] = useFetch<CourseModel[]>(apiUrl + "/courses");
  const [gpaxObject, setGpaxObject] = useFetch<GPAXType>(apiUrl + "/gpax");

  const handleFetch = (): void => {
    refresh();
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        setCourses,
        handleFetch,
      }}
    >
      <Container
        attributes={{ className: "text-tertiary", id: "academic-results" }}
      >
        <Line attributes={{ className: "my-24" }} />
        <div>
          <Title title="Academic Results" />
          <p className="font-k2d mb-12">แบบฟอร์มสำหรับเพิ่มผลการเรียน</p>
        </div>
        <AddDataForm />
        <Line attributes={{ className: "my-24" }} />
        <div>
          {courses?.length === 0 ? (
            <p className="font-k2d mb-12 text-center">
              ยังไม่มีรายวิชาที่นำมาแสดงในตอนนี้โปรดเพิ่มรายวิชาก่อน
            </p>
          ) : (
            <div className="flex items-center justify-between mb-12">
              <p className="font-k2d">ผลการเรียนทั้งหมด</p>
              <GPAX gpax={gpaxObject?.gpax === undefined ? 0 : gpaxObject.gpax} />
            </div>
          )}
          <Courses />
        </div>
      </Container>
    </CourseContext.Provider>
  );
};

export default AcademicResults;
