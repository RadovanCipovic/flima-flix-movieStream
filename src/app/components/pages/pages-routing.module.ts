import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HotelsComponent } from "./hotels/hotels.component";
import { ViewHotelComponent } from "./view-hotel/view-hotel.component";
import { AddEditHotelComponent } from "../admin/add-edit-hotel/add-edit-hotel.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "contact",
    component: ContactUsComponent,
  },
  {
    path: "hotels",
    component: HotelsComponent,
  },
  {
    path: "view-hotel/:id",
    component: ViewHotelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
