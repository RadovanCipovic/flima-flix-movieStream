import { Component, OnInit } from "@angular/core";
import { Hotel } from "../../../models/Hotels";
import { HotelService } from "../../../services/hotel.service";
import { ActivatedRoute } from "@angular/router";
import { environment } from "../../../../environments/environment.development";

@Component({
  selector: "app-view-hotel",
  templateUrl: "./view-hotel.component.html",
  styleUrl: "./view-hotel.component.scss",
})
export class ViewHotelComponent implements OnInit {
  hotel: Hotel = new Hotel();
  apiUrl = environment.API_URL;

  constructor(
    private hotelService: HotelService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((paramsData) => {
      let hotelID: number = paramsData[`id`];

      this.hotelService.getHotelByID(hotelID).subscribe((data) => {
        this.hotel = data;
      });
    });
  }
}
