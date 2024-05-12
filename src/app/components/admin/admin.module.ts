import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { AddEditHotelComponent } from "./add-edit-hotel/add-edit-hotel.component";
import { FormsModule, NgModel } from "@angular/forms";

@NgModule({
  declarations: [AddEditHotelComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule],
})
export class AdminModule {}
