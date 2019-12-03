import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchHeroComponent } from './heroes/search-hero/search-hero.component';
//import { HeroDetailsComponent } from './Heroes/hero-details.component';
//import { HeroListComponent } from './Heroes/hero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    SearchHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
