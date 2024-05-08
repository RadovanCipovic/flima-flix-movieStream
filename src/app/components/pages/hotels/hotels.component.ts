import { Component, OnInit } from "@angular/core";
import { Hotel } from "../../../models/Hotels";
import { HotelService } from "../../../services/hotel.service";

@Component({
  selector: "app-hotels",
  templateUrl: "./hotels.component.html",
  styleUrl: "./hotels.component.scss",
})
export class HotelsComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotelService.getAllHotels().subscribe((data) => {
      this.hotels = data;
    });
  }
}
