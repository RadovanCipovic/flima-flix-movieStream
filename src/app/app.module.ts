import { NgModule } from "@angular/core";
import {
  BrowserModule,
  provideClientHydration,
} from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./components/app/app.component";
import { HelpersModule } from "./components/helpers/helpers.module";
import { PagesModule } from "./components/pages/pages.module";
import { HttpClientModule, withFetch } from "@angular/common/http";
import { provideHttpClient } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HelpersModule,
    PagesModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
