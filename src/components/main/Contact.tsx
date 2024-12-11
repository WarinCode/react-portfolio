import { ReactElement } from "react";
import uuid from "react-uuid";
import Container from "../containers/Container";
import Line from "../Line";
import Title from "../Title";
import Button from "../Button";
import { ButtonProps } from "../../types/propTypes";
import { contactButtons } from "../../constants";

const Contact = (): ReactElement => {
  return (
    <Container attributes={{ className: "text-tertiary", id: "contact" }}>
      <Line />
      <Title title="Contact" />
      <div className="mb-8">
        <p className="font-k2d max-[360px]:mb-2">
          ช่องทางการติดต่อทั้งหมดของเรา
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between max-[450px]:flex-col max-[360px]:flex-col">
        {contactButtons.map((btn: ButtonProps<HTMLButtonElement>) => (
          <Button
            key={uuid()}
            {...btn}
            attributes={{
              className:
                "max-[450px]:w-full max-[450px]:mb-6 max-[360px]:w-full max-[360px]:mb-6",
            }}
          />
        ))}
      </div>
    </Container>
  );
};

export default Contact;
