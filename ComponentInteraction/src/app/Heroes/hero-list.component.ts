import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})


export class HeroListComponent implements OnInit {

 
  heroArr:any=[
    {
      'heroName':'Goku',
      'heroDeptartment':'Dragon ball z'
      },
      {
        'heroName':'IronMan',
        'heroDeptartment':'Avengers'
        },
        {
          'heroName':'SuperMan',
        'heroDeptartment':'JusticeLegue'
          }
  ];
     heroData:any='';
     onSelect(hero:any){
       
       this.heroData=hero;
     }
      
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
