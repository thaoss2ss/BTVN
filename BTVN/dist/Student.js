"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(name, email, group, age) {
        this._name = name;
        this._email = email;
        this._group = group;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get group() {
        return this._group;
    }
    set group(value) {
        this._group = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}
exports.Student = Student;
