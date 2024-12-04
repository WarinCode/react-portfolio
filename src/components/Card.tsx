import { ReactElement, FC } from "react";
import { IoLink, IoLocationSharp } from "react-icons/io5";
import CardContainer from "./containers/CardContainer";
import CardImageTop from "./CardImageTop";
import CardHeader from "./CardHeader";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";
import CardDetails from "./CardDetails";
import CardLink from "./CardLink";
import { CardProps } from "../types/propTypes";
import SchoolModel from "../types/models/school";
import UniversityModel from "../types/models/university";

const Card: FC<CardProps<HTMLDivElement>> = ({
  attributes,
  cardType,
  data,
}): ReactElement => {
  if (cardType === "school") {
    const { img, schoolName, location, facebookLink, studyPlan, period } =
      data as SchoolModel;

    return (
      <CardContainer
        attributes={{
          ...attributes,
          className: `${attributes?.className} bg-primary w-[450px] h-[420px] overflow-hidden`,
        }}
      >
        <CardImageTop src={img} alt={schoolName} />
        <CardBody>
          <CardHeader>
            <CardTitle title={schoolName} />
            <span className="absolute right-4 text-secondary flex">
              <CardLink
                attributes={{ href: location }}
                icon={<IoLocationSharp className="text-xl cursor-pointer" />}
              />
              <CardLink
                attributes={{ href: facebookLink, className: "ms-4" }}
                icon={
                  <IoLink className="text-xl cursor-pointer rotate-[315deg]" />
                }
              />
            </span>
          </CardHeader>
          <CardDetails>
            <p>สาย: {studyPlan}</p>
            <p>ระยะเวลา: {period}</p>
          </CardDetails>
        </CardBody>
      </CardContainer>
    );
  }

  const {
    img,
    universityName,
    location,
    facebookLink,
    faculty,
    major,
    period,
  } = data as UniversityModel;

  return (
    <CardContainer
      attributes={{
        ...attributes,
        className: `${attributes?.className} bg-primary w-[450px] h-[420px] overflow-hidden`,
      }}
    >
      <CardImageTop src={img} alt={universityName} />
      <CardBody>
        <CardHeader>
          <CardTitle title={universityName} />
          <span className="absolute right-4 text-secondary flex">
            <CardLink
              attributes={{ href: location }}
              icon={<IoLocationSharp className="text-xl cursor-pointer" />}
            />
            <CardLink
              attributes={{ href: facebookLink, className: "ms-4" }}
              icon={
                <IoLink className="text-xl cursor-pointer rotate-[315deg]" />
              }
            />
          </span>
        </CardHeader>
        <CardDetails>
          <p>คณะ: {faculty}</p>
          <p>สาขา: {major}</p>
          <p>ระยะเวลา: {period}</p>
        </CardDetails>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
