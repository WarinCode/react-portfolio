import { ReactElement } from "react";
import uuid from "react-uuid";
import Container from "../containers/Container";
import Title from "../Title";
import Line from "../Line";
import SkillItem from "../SkillItem";
import { skills } from "../../constants";
import { Skill } from "../../types";

const Skills = (): ReactElement => {
  return (
    <Container attributes={{ className: "text-tertiary", id: "skills" }}>
      <Line attributes={{ className: "my-24" }} />
      <div>
        <Title title="Skills" />
        <p className="font-k2d">
          Programming Languages, Frameworks, Libraries, IDEs และ Tools
          ทั้งหมดที่ใช้งานเป็น
        </p>
      </div>
      <div className="grid grid-cols-6 grid-flow-row place-items-center mt-10 gap-y-6">
        {skills.map(
          (skill: Skill): ReactElement => (
            <SkillItem key={uuid()} {...skill} />
          )
        )}
      </div>
    </Container>
  );
};

export default Skills;
