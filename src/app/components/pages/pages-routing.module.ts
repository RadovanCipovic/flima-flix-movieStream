import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HotelsComponent } from "./hotels/hotels.component";

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
