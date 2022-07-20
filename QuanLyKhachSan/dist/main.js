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
const hotel_management_1 = require("./hotel-management");
const person_1 = require("./person");
const hotel_1 = require("./hotel");
var HotelChoice;
(function (HotelChoice) {
    HotelChoice[HotelChoice["SHOW_LIST_HOTEL"] = 1] = "SHOW_LIST_HOTEL";
    HotelChoice[HotelChoice["SHOW_CREATE_HOTEL"] = 2] = "SHOW_CREATE_HOTEL";
    HotelChoice[HotelChoice["SHOW_EDIT_HOTEL"] = 3] = "SHOW_EDIT_HOTEL";
    HotelChoice[HotelChoice["SHOW_DELETE_HOTEL"] = 4] = "SHOW_DELETE_HOTEL";
    HotelChoice[HotelChoice["EXIT"] = 0] = "EXIT";
})(HotelChoice || (HotelChoice = {}));
let choice = -1;
let hotelManagement = new hotel_management_1.HotelManagement();
function showAllHotel() {
    console.log('---Danh sách khách trọ---');
    let hotels = hotelManagement.getAll();
    for (const hotel of hotels) {
        console.log(`${hotel.dayOfRents}\t${hotel.type}\t${hotel.price}\t${hotel.person.name}`);
    }
}
function inputPerson() {
    let name = rl.question('Nhập tên khách trọ:');
    let dob = rl.question('Nhập ngày sinh:');
    let identity = rl.question('Nhập CMND:');
    return new person_1.Person(name, dob, identity);
}
function inputHotel() {
    let person = inputPerson();
    let dayOfRents = +rl.question('Nhập số ngày thuê:');
    let type = rl.question('Nhập loại phòng:');
    let price = +rl.question('Nhập giá phòng');
    return new hotel_1.Hotel(dayOfRents, type, price, person);
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
