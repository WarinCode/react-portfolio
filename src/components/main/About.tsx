import { ReactElement, useContext } from "react";
import uuid from "react-uuid";
import Title from "../Title";
import Container from "../containers/Container";
import BackgroundLayer from "../BackgroundLayer";
import Button from "../Button";
import UserContext from "../contexts/UserContext";
import { ButtonProps } from "../../types/propTypes";
import { UserContextType } from "../../types";
import { contactButtons } from "../../constants";

const About = (): ReactElement => {
  const { user } = useContext(UserContext) as UserContextType;

  return (
    <Container
      attributes={{ className: "text-tertiary h-max mb-12 pt-12", id: "about" }}
    >
      <div className="flex items-start justify-between">
        <div className="pt-12 w-1/2">
          <Title title="About" />
          <p className="font-k2d leading-8 w-full text-wrap">
            สวัสดีเราชื่อ {user?.fullname} รหัสนิสิต {user?.studentId}{" "}
            นิสิตชั้นปีที่ {user?.sophomore} คณะ {user?.faculty} สาขา{" "}
            {user?.major} (CS27) {user?.university} (KU83) อายุ {user?.age} ปี
            เวลาว่าง {user?.hobbies} เป้าหมายหลักในอนาคตต้องการเป็น Full Stack
            Developer
          </p>
          <p className="my-2 font-k2d">ช่องทางการติดต่อหลัก: </p>
          <div className="flex w-full items-center justify-start mt-8">
            {contactButtons.slice(1, 3).map(
              (btn: ButtonProps<HTMLButtonElement>): ReactElement => (
                <Button
                  key={uuid()}
                  {...btn}
                  attributes={{ className: "my-2 me-4" }}
                />
              )
            )}
          </div>
        </div>
        <div className="relative w-1/2">
          <img
            src="/assets/imgs/profile.jpg"
            alt="user-img"
            className="w-[270px] h-[380px] z-10 border-8 border-transparent mx-auto"
            loading="lazy"
          />
          <BackgroundLayer
            attributes={{
              className:
                "z-[-1] bg-zinc-900 opacity-40 top-6 right-28 border-8 border-transparent",
            }}
          />
          <BackgroundLayer
            attributes={{
              className: "z-[-2] bg-zinc-900 opacity-20 top-12 right-20",
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default About;
