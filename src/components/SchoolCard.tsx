import { ReactElement, FC } from "react";
import { IoLink, IoLocationSharp } from "react-icons/io5";
import CardContainer from "./containers/CardContainer";
import CardImageTop from "./CardImageTop";
import CardHeader from "./CardHeader";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";
import CardDetails from "./CardDetails";
import CardLink from "./CardLink";
import { SchoolCardProps } from "../types/propTypes";
import { getClassName } from "../utils";

const SchoolCard: FC<SchoolCardProps<HTMLDivElement>> = ({
    attributes,
    data: { img, schoolName, location, facebookLink, studyPlan, period },
}): ReactElement => {

    return (
        <CardContainer
            attributes={{
                ...attributes,
                className: `${getClassName(attributes?.className)} bg-primary w-[450px] h-[420px] overflow-hidden max-[450px]:w-full max-[450px]:h-max max-[360px]:w-full max-[360px]:h-max`,
            }}
        >
            <CardImageTop src={img} alt={schoolName} />
            <CardBody>
                <CardHeader>
                    <CardTitle
                        title={schoolName}
                        attributes={{ className: "text-base" }}
                    />
                    <span className="absolute right-4 text-secondary flex max-[450px]:relative max-[450px]:right-0 max-[450px]:mt-4 max-[450px]:mb-4 max-[360px]:relative max-[360px]:right-0 max-[360px]:mt-4 max-[360px]:mb-4">
                        <CardLink
                            attributes={{ href: location }}
                            icon={
                                <IoLocationSharp className="text-xl cursor-pointer max-[450px]:text-lg max-[360px]:text-lg" />
                            }
                        />
                        <CardLink
                            attributes={{ href: facebookLink, className: "ms-4" }}
                            icon={
                                <IoLink className="text-xl cursor-pointer rotate-[315deg] max-[450px]:text-lg max-[360px]:text-lg" />
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

export default SchoolCard;