import { ReactElement, useState, useEffect } from "react";
import uuid from "react-uuid";
import Container from "../containers/Container";
import Line from "../Line";
import Title from "../Title";
import Card from "../Card";
import SchoolModel, { Schools } from "../../types/models/school";
import UniversityModel from "../../types/models/university";
import { fetchData } from "../../utils";

const Graduation = (): ReactElement => {
  const [schools, setSchools] = useState<Schools>([]);
  const [university, setUniversity] = useState<UniversityModel | null>(null);
  const controller: AbortController = new AbortController();

  useEffect((): (() => void) => {
    (async (): Promise<void> => {
      await fetchData<Schools>("/schools", setSchools, controller);
      await fetchData<UniversityModel | null>(
        "/university",
        setUniversity,
        controller
      );
    })();

    return (): void => {
      controller.abort();
    };
  }, []);

  return (
    <Container
      attributes={{
        className: "text-tertiary",
        id: "graduation",
      }}
    >
      <Line />
      <div>
        <Title title="Graduation" />
        <p className="font-k2d">
          โรงเรียนที่เรียนจบและสำเร็จการศึกษามาแล้วและมหาลัยที่กำลังศึกษาอยู่ ณ
          ปัจจุบัน
        </p>
      </div>
      <div className="grid grid-cols-2 place-items-center gap-y-16 gap-x-4 mt-12">
        {schools.map(
          (school: SchoolModel): ReactElement => (
            <Card key={uuid()} cardType="school" data={school} />
          )
        )}
        {university !== null ? (
          <Card cardType="university" data={university} />
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
};

export default Graduation;
