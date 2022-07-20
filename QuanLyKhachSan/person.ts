export class Person {
    private _name: string;
    private _dob: string;
    private _identity: string;


    constructor(name: string, dob: string, identity: string) {
        this._name = name;
        this._dob = dob;
        this._identity = identity;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get dob(): string {
        return this._dob;
    }

    set dob(value: string) {
        this._dob = value;
    }

    get identity(): string {
        return this._identity;
    }

    set identity(value: string) {
        this._identity = value;
    }
}