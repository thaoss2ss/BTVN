"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, dob, identity) {
        this._name = name;
        this._dob = dob;
        this._identity = identity;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get dob() {
        return this._dob;
    }
    set dob(value) {
        this._dob = value;
    }
    get identity() {
        return this._identity;
    }
    set identity(value) {
        this._identity = value;
    }
}
exports.Person = Person;
