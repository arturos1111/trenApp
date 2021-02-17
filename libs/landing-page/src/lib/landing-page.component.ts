import { Component, OnInit } from '@angular/core';
import { LandingPageService } from './services/landing-page.service';

@Component({
  selector: 'tren-app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [LandingPageService],
})
export class LandingPageComponent implements OnInit {
  constructor(private landingPageService: LandingPageService) {}

  ngOnInit(): void {}
}
