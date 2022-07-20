import {Hotel} from "./hotel";

export class HotelManagement {
    private hotels: Hotel[] = [];

    public getAll(): Hotel[] {
        return this.hotels;
    }

    public createNewHotel(hotel: Hotel): void {
        this.hotels.push(hotel);
    }

    public updateHotel(index: number, newHotel: Hotel): void {
        this.hotels[index] = newHotel;
    }

    public deleteHotel(index: number): void {
        this.hotels.splice(index, 1);
    }
}