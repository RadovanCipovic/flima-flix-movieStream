import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/pages/home/home.component";
import { ContactUsComponent } from "./components/pages/contact-us/contact-us.component";
import { HotelsComponent } from "./components/pages/hotels/hotels.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => {
      return import("./components/pages/pages.module").then(
        (pm) => pm.PagesModule
      );
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
