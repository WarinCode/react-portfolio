import { ReactElement } from "react";
import uuid from "react-uuid";
import Container from "../containers/Container";
import Line from "../Line";
import Title from "../Title";
import Card from "../Card";
import SchoolModel, { Schools } from "../../types/models/school";
import UniversityModel from "../../types/models/university";
import { getApiUrl } from "../../utils";
import useFetch from "../../hooks/useFetch";

const Graduation = (): ReactElement => {
  const [schools, setSchools] = useFetch<Schools>(getApiUrl() + "/schools");
  const [university, setUniversity] = useFetch<UniversityModel>(
    getApiUrl() + "/university"
  );

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
        <p className="font-k2d leading-8">
          โรงเรียนที่เรียนจบและสำเร็จการศึกษามาแล้วและมหาลัยที่กำลังศึกษาอยู่ ณ
          ปัจจุบัน
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 place-items-center gap-y-16 gap-x-4 mt-12 max-[450px]:grid-cols-1 max-[450px]:grid-flow-row max-[450px]:gap-y-8 max-[360px]:grid-cols-1 max-[360px]:grid-flow-row max-[360px]:gap-y-8">
        {schools !== null ? (
          schools.map(
            (school: SchoolModel): ReactElement => (
              <Card key={uuid()} cardType="school" data={school} />
            )
          )
        ) : (
          <></>
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
