import { ReactElement, FC } from "react";
import { CardImageTopProps } from "../types/propTypes";

const CardImageTop: FC<CardImageTopProps> = ({
  src,
  alt,
  attributes,
}): ReactElement => {
  return (
    <div
      {...attributes}
      className={`overflow-hidden rounded-md ${attributes?.className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-[230px] bg-cover rounded-md transition delay-200 ease-linear hover:scale-150 max-[450px]:h-[170px] max-[360px]:h-[150px]"
      />
    </div>
  );
};

export default CardImageTop;
