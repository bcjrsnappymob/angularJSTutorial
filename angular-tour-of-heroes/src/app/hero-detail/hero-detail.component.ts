import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    // Extract route parameter from URL with id
    private route: ActivatedRoute,
    // Gets hero data from the remote server and get the hero-to-display
    private HeroService: HeroService,
    // To navigate back to the view that navigated here
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  /*
    route.snapshot: A static image of the route information after the component was created.
    paramMap: A dictionary of route parameter values extracted from the URL.
    + operator: Converts the string to a number.
  */

  getHero(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.HeroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
