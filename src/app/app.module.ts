import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { AreasComponent } from './areas/areas.component';
import { AreadetailsService } from './areadetails.service';
import { AppRoutingModule } from './/app-routing.module';
import { UniqueShopDetailsComponent } from './unique-shop-details/unique-shop-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AreasComponent,
    UniqueShopDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AreadetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
