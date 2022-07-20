import * as rl from 'readline-sync';
import {HotelManagement} from "./hotel-management";
import {Person} from "./person";
import {Hotel} from "./hotel";

enum HotelChoice {
    SHOW_LIST_HOTEL = 1,
    SHOW_CREATE_HOTEL = 2,
    SHOW_EDIT_HOTEL = 3,
    SHOW_DELETE_HOTEL = 4,
    EXIT = 0
}

let choice = -1;
let hotelManagement = new HotelManagement();

function showAllHotel() {
    console.log('---Danh sách khách trọ---');
    let hotels = hotelManagement.getAll();
    for (const hotel of hotels) {
        console.log(`${hotel.dayOfRents}\t${hotel.type}\t${hotel.price}\t${hotel.person.name}`)
    }
}

function inputPerson() {
    let name = rl.question('Nhập tên khách trọ:');
    let dob = rl.question('Nhập ngày sinh:');
    let identity = rl.question('Nhập CMND:');
    return new Person(name, dob, identity);
}

function inputHotel() {
    let person = inputPerson();
    let dayOfRents = +rl.question('Nhập số ngày thuê:');
    let type = rl.question('Nhập loại phòng:');
    let price = +rl.question('Nhập giá phòng');
    return new Hotel(dayOfRents, type, price, person);
}

function showCreateHotel() {
    console.log('---Tạo thông tin khách trọ---');
    let hotel = inputHotel();
    hotelManagement.createNewHotel(hotel);
}

function showUpdateHotel() {
    console.log('---Cập nhật thông tin khách trọ---');
    let index = +rl.question('Nhập vị trí cần chỉnh sửa:');
    let hotel = inputHotel();
    hotelManagement.updateHotel(index, hotel);
}

function showDeleteForm() {
    console.log('---Xóa thông tin khách trọ---');
    let index = +rl.question('Nhập ví trị muốn xóa:');
    hotelManagement.deleteHotel(index);
}

function menu() {
    console.log('---Quản lý khách sạn---');
    console.log('1. Hiển thị danh sách khách trọ');
    console.log('2. Tạo thông tin khách trọ');
    console.log('3. Chỉnh sửa thông tin trọ');
    console.log('4. Xóa thông tin khách trọ');
    console.log('0. Thoát chương trình');
}

do {
    menu();
    choice = +rl.question("Nhập lựa chọn của bạn:");
    switch (choice) {
        case HotelChoice.SHOW_LIST_HOTEL: {
            showAllHotel();
            break;
        }
        case HotelChoice.SHOW_CREATE_HOTEL: {
            showCreateHotel();
            break;
        }
        case HotelChoice.SHOW_EDIT_HOTEL: {
            showUpdateHotel();
            break;
        }
        case HotelChoice.SHOW_DELETE_HOTEL: {
            showDeleteForm();
            break;
        }
    }
} while (choice != HotelChoice.EXIT);