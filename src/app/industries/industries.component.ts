import { Component, OnInit } from '@angular/core';
import { WizardItem } from '../shared/modals/dtos';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {

  industriesCards : WizardItem[] = [
    {
      heading: 'Travel & Movement',
      content: 'Transforming the Travel & Movement industry with innovative software solutions that streamline operations, enhance customer experiences, and drive growth.',
      iconUrl: 'path/to/travel-icon.png'
    },
    {
      heading: 'Healthcare',
      content: 'Revolutionizing the Healthcare industry with cutting-edge software solutions that improve patient care, optimize workflows, and drive medical advancements.',
      iconUrl: 'path/to/healthcare-icon.png'
    },
    {
      heading: 'Construction & Specification',
      content: 'Elevating the Construction & Specification industry with technology-driven solutions that enhance project management, streamline collaboration, and deliver successful outcomes.',
      iconUrl: 'path/to/construction-icon.png'
    },
    {
      heading: 'Workforce Management',
      content: 'Empowering the Workforce Management industry with intelligent software solutions that optimize scheduling, improve productivity, and drive operational efficiency.',
      iconUrl: 'path/to/workforce-icon.png'
    },
    {
      heading: 'Education',
      content: 'Transforming the Education industry through innovative software solutions that empower learners, streamline administration, and enable personalized, interactive learning experiences.',
      iconUrl: 'path/to/education-icon.png'
    },
    {
      heading: 'Cloud Migration',
      content: 'Enabling seamless Cloud Migration for businesses, unlocking the potential of scalability, cost-efficiency, and enhanced performance in the digital landscape.',
      iconUrl: 'path/to/cloud-migration-icon.png'
    },
    {
      heading: 'Agriculture',
      content: 'Empowering the Agriculture industry with technology-driven solutions that optimize processes, increase efficiency, and drive sustainable growth.',
      iconUrl: 'path/to/agriculture-icon.png'
    },
    {
      heading: 'Legal',
      content: 'Driving digital transformation in the Legal industry through innovative software solutions that streamline workflows, enhance collaboration, and ensure compliance.',
      iconUrl: 'path/to/legal-icon.png'
    },
    {
      heading: 'Payment & Retail',
      content: 'Revolutionizing the Payment & Retail industry with secure and seamless software solutions that enhance customer experiences, drive sales, and simplify transactions.',
      iconUrl: 'path/to/payment-icon.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }





}
