"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rl = __importStar(require("readline-sync"));
const Student_1 = require("./Student");
const studentManagement_1 = require("./studentManagement");
let choice = -1;
let studentManagement = new studentManagement_1.StudentManagement();
function showAllStudent() {
    console.log('---Danh sách học viên---');
    let students = studentManagement.getAllStudent();
    for (const student of students) {
        console.log(`${student.name}\t${student.email}\t${student.group}\t${student.age}`);
    }
}
function inputStudent() {
    let name = rl.question('Nhập tên học viên: ');
    let email = rl.question('Nhập email: ');
    let group = rl.question('Nhập lớp học: ');
    let age = +rl.question('Nhập số tuổi: ');
    return new Student_1.Student(name, email, group, age);
}
function showCreateStudent() {
    console.log('---Thông tin học viên---');
    let student = inputStudent();
    studentManagement.createNewStudent(student);
}
function showUpdateStudent() {
    console.log('---Chỉnh sủa thông tin---');
    let index = +rl.question('Nhập vị trí cần chỉnh sửa: ');
    let student = inputStudent();
    studentManagement.UpdateStudent(index, student);
}
function showDeleteForm() {
    console.log('---Xóa học viên---');
    let index = +rl.question('Nhập vị trí cần xóa: ');
    studentManagement.deleteStudent(index);
}
function Menu() {
    console.log('---Quản Lý Học Viên---');
    console.log('1. Tạo Thông Tin Tên Học Viên');
    console.log('2. Hiển Thị Danh Sách Học Viên');
    console.log('3. Chỉnh sủa thông tin Học Viên');
    console.log('4. Xóa Học Viên');
    console.log('5. Tìm kiếm Học Viên');
    console.log('0. Thoát ');
}
function showSearchStudent() {
    console.log('---Tìm kiếm học viên---');
    let name = rl.question('Nhập tên cần tìm kiếm: ');
    console.log(studentManagement.findStudent(name));
}
do {
    Menu();
    choice = +rl.question("Nhập lựa chọn của bạn: ");
    switch (choice) {
        case 1: {
            showCreateStudent();
            break;
        }
        case 2: {
            showAllStudent();
            break;
        }
        case 3: {
            showUpdateStudent();
            break;
        }
        case 4: {
            showDeleteForm();
            break;
        }
        case 5: {
            showSearchStudent();
            break;
        }
    }
} while (choice != 0);
