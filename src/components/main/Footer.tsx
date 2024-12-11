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
      <Line attributes={{ className: "mt-24 mb-8 max-[450px]:mb-12 max-[450px]:mt-12 max-[360px]:mb-12 max-[360px]:mt-12" }} />
      <footer className="font-k2d text-tertiary text-center text-sm max-[360px]:text-xs">
        @Copyright {year} | เขียนโค้ด และ ออกแบบโดย นาย {user?.fullname}
      </footer>
    </Container>
  );
};

export default Footer;
