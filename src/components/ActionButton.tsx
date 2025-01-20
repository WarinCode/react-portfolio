import { ReactElement, FC } from "react";
import { ActionButtonProps } from "../types/propTypes";
import { btnStyled } from "../constants";
import { getClassName } from "../utils";

const ActionButton: FC<ActionButtonProps> = ({
    attributes,
    text,
    icon,
}): ReactElement => {

    return (
        <button
            {...attributes}
            className={`${btnStyled} flex items-center justify-center ${getClassName(attributes?.className)}`}
        >
            <span className=""
            >
                {icon}
                <span className="capitalize ms-2">{text}</span>
            </span>
        </button>
    );
};

export default ActionButton;
