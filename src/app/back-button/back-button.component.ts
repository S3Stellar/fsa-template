import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css'],
})
export class BackButtonComponent implements OnInit {
  constructor(private Location: Location) {}

  ngOnInit(): void {}

  goBack(): void {
    this.Location.back();
  }
}
