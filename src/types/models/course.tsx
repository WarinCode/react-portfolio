export default interface CourseModel {
    id: string;
    code: string;
    courseName: string;
    grade: string;
    credit: number;
}

export type Courses = CourseModel[];