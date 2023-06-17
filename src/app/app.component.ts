import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eds';

  constructor() {
  }

  ngOnInit() {
    const menuItems = [
      { label: 'Home', link: '/' },
      {
        label: 'Services',
        link: '/services',
        children: [
          { label: 'Product 1', link: '/product1' },
          { label: 'Product 2', link: '/product2' },
        ],
      },
      { label: 'Contact', link: '/contact' },
    ];
  }

  wizardItems: string[] = [
    'Custom Applications',
    'Product Design & Development',
    'Cloud Development',
    'Cloud Migration',
    'App Modernization',
    'Corporate Websites',
    'Chrome Extension Development',
    'Technical Account Management',
    'Are you stuck in code, need help just this time'
  ];
}
