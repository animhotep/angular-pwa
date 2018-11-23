import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-howto',
  templateUrl: './howto.component.html',
  styleUrls: ['./howto.component.css']
})
export class HowtoComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {
    this.meta.updateTag({ name: 'description', content: 'How to bootstrap Angular 7 PWA App' });
    this.meta.updateTag({ name: 'author', content: 'pasha' });
    this.meta.updateTag({ name: 'keywords', content: 'How to, Angular 7, bootstrap' });
    this.titleService.setTitle('How to bootstrap Angular 7 PWA App');
  }

  ngOnInit() {
  }

}
