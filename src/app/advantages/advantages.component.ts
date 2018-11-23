import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css']
})
export class AdvantagesComponent implements OnInit {


  constructor(private meta: Meta, private titleService: Title) {
    this.meta.updateTag({ name: 'description', content: 'Advantages of the Angular 7 PWA App' });
    this.meta.updateTag({ name: 'author', content: 'pasha' });
    this.meta.updateTag({ name: 'keywords', content: 'Advantages, Angular 7, PWA' });
    this.titleService.setTitle('Advantages of the Angular 7 PWA App');
  }

  ngOnInit() {
  }

}
