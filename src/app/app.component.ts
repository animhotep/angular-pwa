import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private meta: Meta, private titleService: Title) {
    this.meta.addTag({ name: 'description', content: 'Angular PWA manual page' });
    this.meta.addTag({ name: 'author', content: 'pasha' });
    this.meta.addTag({ name: 'keywords', content: 'angular, pwa, manual' });
    this.titleService.setTitle('Angular PWA manual');
  }
  title = 'Angular PWA manual page';
}
