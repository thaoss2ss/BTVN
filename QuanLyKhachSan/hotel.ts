import {Person} from "./person";

export class Hotel {
    private _dayOfRents: number;
    private _type: string;
    private _price: number;
    private _person: Person;


    constructor(dayOfRents: number, type: string, price: number, person: Person) {
        this._dayOfRents = dayOfRents;
        this._type = type;
        this._price = price;
        this._person = person;
    }


    get dayOfRents(): number {
        return this._dayOfRents;
    }

    set dayOfRents(value: number) {
        this._dayOfRents = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get person(): Person {
        return this._person;
    }

    set person(value: Person) {
        this._person = value;
    }
}