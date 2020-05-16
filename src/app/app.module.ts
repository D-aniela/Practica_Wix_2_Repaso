import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CarrouselComponent } from './components/home/carrousel/carrousel.component';
import { EligemeComponent } from './components/home/eligeme/eligeme.component';
import { NuestrosSociosComponent } from './components/home/nuestros-socios/nuestros-socios.component';
import { NuestraVisionComponent } from './components/home/nuestra-vision/nuestra-vision.component';
import { FooterComponent } from './components/shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarrouselComponent,
    EligemeComponent,
    NuestrosSociosComponent,
    NuestraVisionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
