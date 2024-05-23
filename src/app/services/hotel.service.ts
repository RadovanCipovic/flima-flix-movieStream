import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Hotel } from "../models/Hotels";
import { Form } from "@angular/forms";
import { environment } from "../../environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class HotelService {
  constructor(private http: HttpClient) {}

  apiUrl = environment.API_URL;

  getAllHotels() {
    return this.http.get<Hotel[]>(`${this.apiUrl}/hotel`);
  }

  getHotelByID(id: number) {
    return this.http.get<Hotel>(`${this.apiUrl}/hotel/${id}`);
  }

  insertHotel(hotel: Hotel) {
    return this.http.post(`${this.apiUrl}/hotel`, hotel);
  }

  updateHotel(hotel: Hotel) {
    return this.http.put(`${this.apiUrl}/hotel/${hotel.id}`, hotel);
  }

  deleteHotel(id: number) {
    return this.http.delete(`http://localhost:3000/hotel/${id}`);
  }

  uploadImage(formData: FormData) {
    return this.http.post("http://localhost:3000/public", formData);
  }
}
