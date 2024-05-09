import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Hotel } from "../models/Hotels";

@Injectable({
  providedIn: "root",
})
export class HotelService {
  constructor(private http: HttpClient) {}

  getAllHotels() {
    return this.http.get<Hotel[]>("http://127.0.0.1:8080/hotel");
  }

  getHotelByID(id: number) {
    return this.http.get<Hotel>(`http://localhost:8080/hotel/${id}`);
  }
}
