import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './Heroes/hero-list.component';
import { HeroDetailsComponent } from './Heroes/hero-details.component';


const routes: Routes = [{path:'hreo-list',component:HeroListComponent},
 {path:'hreo-list/:heroName',component:HeroListComponent},
 {path:'hero-details',component:HeroDetailsComponent} ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

  export const routingComponent=[HeroListComponent,HeroDetailsComponent];
 
