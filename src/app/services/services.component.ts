import { Component, OnInit } from '@angular/core';
import { WizardItem } from '../shared/modals/dtos';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})


export class ServicesComponent implements OnInit {

  serviceCards = [
      {
        heading: 'Custom Applications',
        iconUrl: 'path/to/custom-apps-icon.png',
        content: 'We help you unlock innovation by creating bespoke software that aligns perfectly with your workflows, providing a competitive edge in the digital landscape.'
      },
      {
        heading: 'Product Design & Development',
        iconUrl: 'path/to/product-design-icon.png',
        content: 'Delivering cutting-edge products through meticulous design and agile development.'
      },
      {
        heading: 'Cloud Development',
        iconUrl: 'path/to/cloud-dev-icon.png',
        content: 'Transforming businesses with scalable and secure cloud solutions tailored to your needs.'
      },
      {
        heading: 'Cloud Migration',
        iconUrl: 'path/to/cloud-migration-icon.png',
        content: 'Seamlessly transitioning your business to the cloud for enhanced scalability, flexibility, and cost-efficiency through expert Cloud Migration services.'
      },
      {
        heading: 'App Modernization',
        iconUrl: 'path/to/app-modernization-icon.png',
        content: 'Revitalizing legacy systems with modern technologies to unlock new possibilities and optimize performance through comprehensive App Modernization services.'
      },
      {
        heading: 'Corporate Websites',
        iconUrl: 'path/to/corporate-websites-icon.png',
        content: 'Crafting professional and captivating corporate websites that elevate your online presence and engage your target audience.'
      },
      {
        heading: 'Chrome Extension Development',
        iconUrl: 'path/to/chrome-extension-icon.png',
        content: 'Building custom Chrome extensions to enhance productivity, streamline workflows, and empower users with quick and tailored functionalities.'
      },
      {
        heading: 'Technical Account Management',
        iconUrl: 'path/to/tech-account-mgmt-icon.png',
        content: 'Providing dedicated technical account management to ensure seamless collaboration, personalized support, and successful outcomes for your software projects.'
      },
      {
        heading: 'Are you stuck in code, need help just this time',
        iconUrl: 'path/to/code-help-icon.png',
        content: 'Unlocking your coding potential by offering expert assistance and guidance when you\'re facing challenges, empowering you to overcome obstacles and achieve your development goals.'
      }
    ];

  constructor() { }

  ngOnInit(): void {
  }
}


