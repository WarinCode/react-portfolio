export default interface CourseModel {
    id: number;
    courseCode: string;
    courseName: string;
    grade: string;
    credit: number;
}

export type Courses = CourseModel[];