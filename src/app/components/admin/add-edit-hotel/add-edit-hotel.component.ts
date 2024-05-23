import { Component, OnInit } from "@angular/core";
import { HotelService } from "../../../services/hotel.service";
import { Hotel } from "../../../models/Hotels";
import { ActivatedRoute, Router } from "@angular/router";
import { log } from "console";
import { environment } from "../../../../environments/environment.development";

@Component({
  selector: "app-add-edit-hotel",
  templateUrl: "./add-edit-hotel.component.html",
  styleUrl: "./add-edit-hotel.component.scss",
})
export class AddEditHotelComponent implements OnInit {
  hotel: Hotel = new Hotel();
  edit: boolean = false;
  fileToUpload: File | null = null;
  apiUrl = environment.API_URL;

  constructor(
    private hotelService: HotelService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((paramData) => {
      if (paramData[`id`]) {
        this.edit = true;

        this.hotelService
          .getHotelByID(paramData[`id`])
          .subscribe((data) => (this.hotel = data));
      }
    });
  }

  saveHotel() {
    if (this.edit) {
      if (this.fileToUpload) {
        //ako fajl postoji
        let formData: FormData = new FormData();
        formData.append("img", this.fileToUpload);
        this.hotelService
          .uploadImage(formData)
          .subscribe((fileUploadResponse: any) => {
            this.hotel.imagePath = fileUploadResponse.filename;
            this.hotelService.updateHotel(this.hotel).subscribe((data) => {
              this.router.navigateByUrl("/hotels");
            });
          });
      }
      this.hotelService.updateHotel(this.hotel).subscribe((data) => {
        this.router.navigateByUrl("/hotels");
      });
    } else {
      let formData: FormData = new FormData();
      formData.append("img", this.fileToUpload);
      this.hotelService
        .uploadImage(formData)
        .subscribe((fileUploadResponse: any) => {
          this.hotel.imagePath = fileUploadResponse.filename;

          this.hotelService.insertHotel(this.hotel).subscribe((data) => {
            this.router.navigateByUrl("/hotels");
          });
        });
    }
  }

  setUploadedFile(event: any) {
    this.fileToUpload = event.target.files[0];
    console.log(this.fileToUpload);
  }
}
