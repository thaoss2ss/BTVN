"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
class Hotel {
    constructor(dayOfRents, type, price, person) {
        this._dayOfRents = dayOfRents;
        this._type = type;
        this._price = price;
        this._person = person;
    }
    get dayOfRents() {
        return this._dayOfRents;
    }
    set dayOfRents(value) {
        this._dayOfRents = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get person() {
        return this._person;
    }
    set person(value) {
        this._person = value;
    }
}
exports.Hotel = Hotel;
