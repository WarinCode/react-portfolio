import { ReactElement, useContext } from "react";
import Container from "../containers/Container";
import Line from "../Line";
import UserContext from "../contexts/UserContext";
import { UserContextType } from "../../types";

const Footer = (): ReactElement => {
  const year: number = new Date().getFullYear() + 543;
  const { user } = useContext(UserContext) as UserContextType;

  return (
    <Container attributes={{ className: "my-8" }}>
      <Line attributes={{ className: "mt-24 mb-8" }} />
      <footer className="font-k2d text-tertiary text-center text-sm">
        @Copyright {year} | เขียนโค้ด และ ออกแบบโดย นาย {user?.fullname}
      </footer>
    </Container>
  );
};

export default Footer;
