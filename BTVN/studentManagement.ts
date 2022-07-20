import {Student} from "./Student";

export class StudentManagement {
    private students: Student[] = [];

    public getAllStudent(): Student[] {
        return this.students;
    }

    public createNewStudent(student: Student) {
        this.students.push(student);
    }

    public UpdateStudent(index: number, newStudent: Student): void {
        this.students[index] = newStudent;
    }

    public deleteStudent(index: number): void {
        this.students.splice(index, 1);
    }

    findName(name: string) {
        let index = -1;
        for (let i = 0; i < this.students.length; i++) {
            if (name === this.students[i].name) {
                index = i;
                break;
            }
        }
        return index
    }

    findStudent(name: string) {
        let index = this.findName(name);
        if (index === -1) {
            return -1;
        } else {
            return (`Sinh viên cần tìm là :\n tên:${this.students[index].name} email ${this.students[index].email} lớp:${this.students[index].group} tuổi ${this.students[index].age}`);
        }
    }


}