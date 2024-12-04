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
        <p className="font-k2d">ช่องทางการติดต่อทั้งหมดของเรา</p>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        {contactButtons.map((btn: ButtonProps<HTMLButtonElement>) => (
          <Button key={uuid()} {...btn} />
        ))}
      </div>
    </Container>
  );
};

export default Contact;
