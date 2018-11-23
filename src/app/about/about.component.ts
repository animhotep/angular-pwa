import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {
    this.meta.updateTag({ name: 'description', content: 'Page about Progressive Web Apps' });
    this.meta.updateTag({ name: 'author', content: 'pasha' });
    this.meta.updateTag({ name: 'keywords', content: 'PWA, Angular 7, About' });
    this.titleService.setTitle('About PWA');
  }

  ngOnInit() {
  }

}
