"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManagement = void 0;
class StudentManagement {
    constructor() {
        this.students = [];
    }
    getAllStudent() {
        return this.students;
    }
    createNewStudent(student) {
        this.students.push(student);
    }
    UpdateStudent(index, newStudent) {
        this.students[index] = newStudent;
    }
    deleteStudent(index) {
        this.students.splice(index, 1);
    }
    findName(name) {
        let index = -1;
        for (let i = 0; i < this.students.length; i++) {
            if (name === this.students[i].name) {
                index = i;
                break;
            }
        }
        return index;
    }
    findStudent(name) {
        let index = this.findName(name);
        if (index === -1) {
            return -1;
        }
        else {
            return (`Sinh viên cần tìm là :\n tên:${this.students[index].name} email ${this.students[index].email} lớp:${this.students[index].group} tuổi ${this.students[index].age}`);
        }
    }
}
exports.StudentManagement = StudentManagement;
