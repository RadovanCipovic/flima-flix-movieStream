import { Component, Host, Input } from "@angular/core";
import { Hotel } from "../../../models/Hotels";
import { HotelService } from "../../../services/hotel.service";
import { Router } from "@angular/router";
import { HotelsComponent } from "../../pages/hotels/hotels.component";
import { environment } from "../../../../environments/environment.development";

@Component({
  selector: "app-hotel-card",
  templateUrl: "./hotel-card.component.html",
  styleUrl: "./hotel-card.component.scss",
})
export class HotelCardComponent {
  @Input("hotel")
  hotel: Hotel = new Hotel();
  apiUrl = environment.API_URL;

  constructor(
    private hotelService: HotelService,
    @Host() private hotelsComponent: HotelsComponent
  ) {}

  deleteHotel() {
    if (confirm("Are your sure?")) {
      this.hotelService.deleteHotel(this.hotel.id).subscribe((data) => {
        this.hotelsComponent.ngOnInit();
        // window.location.reload();
      });
    }
  }
}
