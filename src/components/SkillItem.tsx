import { ReactElement, FC } from "react";
import { SkillProps } from "../types/propTypes";

const SkillItem: FC<SkillProps> = ({ name, path }): ReactElement => {
  return (
    <div className="skill w-32 h-32 cursor-pointer select-none">
      <img
        src={path}
        alt={name}
        loading="lazy"
        className="mx-auto w-16 h-16 transition-all delay-100 ease-in-out"
      />
      <p className="text-base text-center text-tertiary mt-3 transition-all delay-100 ease-in-out">{name}</p>
    </div>
  );
};

export default SkillItem;
