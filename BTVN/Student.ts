export class Student{
    private _name: string;
    private _email: string;
    private _group: string;
    private _age: number;

    constructor(name: string, email: string, group: string, age: number) {
        this._name = name;
        this._email = email;
        this._group = group;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get group(): string {
        return this._group;
    }

    set group(value: string) {
        this._group = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}