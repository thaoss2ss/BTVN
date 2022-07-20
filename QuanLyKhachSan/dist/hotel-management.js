"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelManagement = void 0;
class HotelManagement {
    constructor() {
        this.hotels = [];
    }
    getAll() {
        return this.hotels;
    }
    createNewHotel(hotel) {
        this.hotels.push(hotel);
    }
    updateHotel(index, newHotel) {
        this.hotels[index] = newHotel;
    }
    deleteHotel(index) {
        this.hotels.splice(index, 1);
    }
}
exports.HotelManagement = HotelManagement;
