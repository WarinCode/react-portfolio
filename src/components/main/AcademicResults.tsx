import { ReactElement } from "react";
import Container from "../containers/Container";
import Title from "../Title";
import Line from "../Line";
import AddDataForm from "../AddDataForm";
import Courses from "../Courses";
import CourseContext from "../contexts/CourseContext";
import CourseModel from "../../types/models/course";
import useFetch from "../../hooks/useFetch";
import { getApiUrl } from "../../utils";

const AcademicResults = (): ReactElement => {
  const apiUrl: string = getApiUrl() + "/courses";
  const [courses, setCourses, refresh] = useFetch<CourseModel[]>(apiUrl);

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
            <p className="font-k2d mb-12">แสดงผลการเรียนทั้งหมด</p>
          )}
          <Courses />
        </div>
      </Container>
    </CourseContext.Provider>
  );
};

export default AcademicResults;
