import { ReactElement, useContext } from "react";
import Title from "../Title";
import Container from "../containers/Container";
import BackgroundLayer from "../BackgroundLayer";
import DownloadButton from "../DownloadButton";
import UserContext from "../contexts/UserContext";
import { UserContextType } from "../../types";
import { IoDocumentText } from "react-icons/io5";

const About = (): ReactElement => {
  const { user } = useContext(UserContext) as UserContextType;

  return (
    <Container
      attributes={{ className: "text-tertiary h-max mb-12 pt-12", id: "about" }}
    >
      <div className="flex items-start justify-between max-[450px]:flex-col-reverse max-[450px]:items-center max-[360px]:flex-col-reverse max-[360px]:items-center">
        <div className="pt-12 w-1/2 max-[450px]:w-full max-[450px]:pt-12 max-[360px]:w-full max-[360px]:pt-12">
          <Title title="About" />
          <p className="font-k2d leading-8 w-full text-wrap">
            สวัสดีเราชื่อ {user?.fullname} รหัสนิสิต {user?.studentId}{" "}
            นิสิตชั้นปีที่ {user?.sophomore} คณะ {user?.faculty} สาขา{" "}
            {user?.major} (CS27) {user?.university} (KU83) อายุ {user?.age} ปี
            เวลาว่าง {user?.hobbies} เป้าหมายหลักในอนาคตต้องการเป็น Full Stack
            Developer
          </p>
          <div className="mt-8 max-[450px]:flex-col max-[360px]:flex-col">
            <DownloadButton
              text="ดาวโหลด์ CV"
              to="/assets/cv/resume.pdf"
              icon={<IoDocumentText className="text-2xl"/>}
              attributes={{
                className:
                  "my-2 me-4 max-[450px]:w-full max-[450px]:mb-6 max-[360px]:w-full max-[360px]:mb-4",
              }}
            />
          </div>
        </div>
        <div className="relative w-1/2 max-[450px]:w-full max-[360px]:w-full">
          <img
            src="/assets/imgs/profile.jpg"
            alt="user-img"
            className="w-[270px] h-[380px] z-10 border-8 border-transparent mx-auto max-[450px]:w-max max-[450px]:rounded-lg max-[450px]:border-none max-[360px]:w-max max-[360px]:rounded-lg max-[360px]:border-none"
            loading="lazy"
          />
          <BackgroundLayer
            attributes={{
              className:
                "z-[-1] bg-zinc-900 opacity-40 top-6 right-28 border-8 border-transparent max-[450px]:hidden max-[360px]:hidden",
            }}
          />
          <BackgroundLayer
            attributes={{
              className:
                "z-[-2] bg-zinc-900 opacity-20 top-12 right-20 max-[450px]:hidden max-[360px]:hidden",
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default About;
