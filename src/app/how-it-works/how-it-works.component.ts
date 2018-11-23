import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {


  constructor(private meta: Meta, private titleService: Title) {
    this.meta.updateTag({ name: 'description', content: 'How does PWA works in offline' });
    this.meta.updateTag({ name: 'author', content: 'pasha' });
    this.meta.updateTag({ name: 'keywords', content: 'Service workers, Offline mode, PWA' });
    this.titleService.setTitle('How does PWA works');
  }

  ngOnInit() {
  }

}
