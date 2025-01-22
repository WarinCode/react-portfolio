export default interface GPAModel {
    year: number;
    studentYear: number;
    semester: "first" | "second" | "summer";
    gpa: number;
    gpax: number;
    credit: number;
}

export type GPAs = GPAModel[];
export type GPAXType = Pick<GPAModel, "gpax">;