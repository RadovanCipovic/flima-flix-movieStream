import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Hotel } from "../models/Hotels";
import { Form } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class HotelService {
  constructor(private http: HttpClient) {}

  getAllHotels() {
    return this.http.get<Hotel[]>("http://localhost:3000/hotel");
  }

  getHotelByID(id: number) {
    return this.http.get<Hotel>(`http://localhost:3000/hotel/${id}`);
  }

  insertHotel(hotel: Hotel) {
    return this.http.post("http://localhost:3000/hotel", hotel);
  }

  updateHotel(hotel: Hotel) {
    return this.http.put(`http://localhost:3000/hotel/${hotel.id}`, hotel);
  }

  deleteHotel(id: number) {
    return this.http.delete(`http://localhost:3000/hotel/${id}`);
  }

  uploadImage(formData: FormData) {
    return this.http.post("http://localhost:3000/upload", formData);
  }
}
