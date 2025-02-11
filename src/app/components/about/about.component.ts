import { CommonModule } from '@angular/common';
import { Component,OnInit, AfterViewInit  } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, AfterViewInit {


// Data for Team Members
teamMembers = [
  { name: 'DR. M MASOOD', role: 'Fonder&CEO OF MBway LLC', image: '../../../assets/images/drMasood.avif' }

];


// Data for Timeline of the Company
timeline = [
  { year: '2000', event: 'Founded with a vision to redefine luxury.' },
  { year: '2010', event: 'Expanded our services internationally.' },
  { year: '2020', event: 'Won the Luxury Design Award for excellence.' }
];


constructor() {
  gsap.registerPlugin(ScrollTrigger);
}

ngOnInit(): void {
}

ngAfterViewInit(): void {
  gsap.from('.team-member', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.team-section',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.timeline-item', {
    opacity: 0,
    x: -50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.timeline-section',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
}
}
