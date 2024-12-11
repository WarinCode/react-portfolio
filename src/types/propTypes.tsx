import {
  AnchorHTMLAttributes,
  ImgHTMLAttributes,
  FormHTMLAttributes,
  ReactNode,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  LegacyRef,
} from "react";
import Modal from "react-modal";
import SchoolModel from "./models/school";
import UniversityModel from "./models/university";
import CourseModel from "./models/course";
import { Attributes, NavItemData, Skill, TitleObject } from ".";

interface RootContainer<T extends HTMLElement = HTMLElement>
  extends Attributes<T> {
  children: ReactNode;
}

export interface AppContainerProps<T extends HTMLElement>
  extends RootContainer<T> {}

export interface ContainerProps<T extends HTMLElement = HTMLElement>
  extends RootContainer<T> {}

export interface CardContainerProps<T extends HTMLDivElement>
  extends RootContainer<T> {}

export interface FormContainerProps<T extends HTMLFormElement = HTMLFormElement>
  extends Pick<RootContainer<T>, "children"> {
  attributes?: FormHTMLAttributes<T>;
}

export interface InputWrapperProps<T extends HTMLDivElement = HTMLDivElement>
  extends RootContainer<T> {}

export interface NavLinkProps extends NavItemData {}

export interface TitleProps extends TitleObject {}

export interface LineProps<T extends HTMLDivElement = HTMLDivElement>
  extends Attributes<T> {}

export interface ButtonProps<T extends HTMLButtonElement = HTMLButtonElement>
  extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> {
  attributes?: ButtonHTMLAttributes<T>;
  text: string;
  icon?: JSX.Element;
  buttonType: "normal" | "contact";
}

export interface SkillProps extends Skill {}

export interface BackgroundLayerProps<T extends HTMLDivElement = HTMLDivElement>
  extends Attributes<T> {}

export interface CardProps<T extends HTMLDivElement = HTMLDivElement>
  extends Attributes<T> {
  cardType: "school" | "university";
  data: SchoolModel | UniversityModel;
}

export interface CardImageTopProps<T extends HTMLDivElement = HTMLDivElement>
  extends Pick<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">,
    Attributes<T> {}

export interface CardTitleProps<
  T extends HTMLHeadingElement = HTMLHeadingElement
> extends TitleObject,
    Attributes<T> {}

export interface CardHeaderProps extends RootContainer<HTMLElement> {}

export interface CardBodyProps<T extends HTMLDivElement>
  extends RootContainer<T> {}

export interface CardDetailsProps<T extends HTMLDivElement>
  extends RootContainer<T> {}

export interface CardLinkProps<
  T extends HTMLAnchorElement = HTMLAnchorElement
> {
  attributes?: AnchorHTMLAttributes<T>;
  icon: JSX.Element;
}

export interface CourseProps<T extends HTMLElement = HTMLDivElement>
  extends CourseModel,
    Attributes<T> {}

export interface InputFieldProps<T extends HTMLElement = HTMLInputElement> {
  attributes?: InputHTMLAttributes<T>;
  labelName: string;
  referent: LegacyRef<T>;
}

export interface SelectFieldProps<
  T extends HTMLSelectElement = HTMLSelectElement
> extends Omit<InputFieldProps<T>, "attributes"> {
  attributes?: SelectHTMLAttributes<T>;
  optionList: Array<string | number>;
}

export interface ModalFormProps {
  modal: Modal.Props;
  id?: string;
  course?: CourseModel;
  closeModal(): void;
}

export interface FormProps extends Pick<ModalFormProps, "course" | "id"> {
  mode: "add" | "edit";
  closeModal?: () => void;
}

export interface MobileMenuProps {
  isOpen: boolean;
}