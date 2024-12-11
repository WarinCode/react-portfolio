import { ReactElement, FC } from "react";
import { SkillProps } from "../types/propTypes";

const SkillItem: FC<SkillProps> = ({ name, path }): ReactElement => {
  return (
    <div className="skill w-32 h-32 cursor-pointer select-none max-[450px]:w-24 max-[450px]:h-24 max-[360px]:w-24 max-[360px]:h-24">
      <img
        src={path}
        alt={name}
        loading="lazy"
        className="mx-auto w-16 h-16 transition-all delay-100 ease-in-out max-[450px]:w-12 max-[450px]:h-12 max-[360px]:w-12 max-[360px]:h-12"
      />
      <p className="text-base text-center text-tertiary mt-3 transition-all delay-100 ease-in-out max-[360px]:text-sm">
        {name}
      </p>
    </div>
  );
};

export default SkillItem;
