import { Component, Input } from "@angular/core";
import { Hotel } from "../../../models/Hotels";

@Component({
  selector: "app-hotel-card",
  templateUrl: "./hotel-card.component.html",
  styleUrl: "./hotel-card.component.scss",
})
export class HotelCardComponent {
  @Input("hotel")
  hotel: Hotel = new Hotel();
}
