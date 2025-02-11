import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  services = [
    {
      title: 'Medical Services',
      description: ' We provide cutting-edge healthcare solutions, from advanced medical facilities to specialized treatments, ensuring top-tier care for our patients.',
      image: '../../../assets/images/dentist-2530990_640-removebg-preview.png'
    },
    {
      title: 'Commercial Services',
      description: 'We curates unforgettable travel experiences, offering bespoke tour packages and personalized itineraries that cater to the diverse needs .',
      image: '../../../assets/images/service2.avif'
    },
    {
      title: 'Engineering Services',
      description: 'Our engineering department pioneers innovative infrastructure projects, combining technological advancement with sustainable practices.',
      image: '../../../assets/images/service3.avif'
    },
    {
      title: 'Education Services',
      description: 'We support educational advancement through comprehensive services that include counseling, placement, and training programs. ',
      image: '../../../assets/images/service4.avif'
    },
    {
      title: 'Trade and Commerce',
      description: ': Engaged in the global marketplace, MBway is involved in the trade of high-quality products and services, fostering strong business .',
      image: '../../../assets/images/trade.jpg'
    },
    {
      title: 'Real Estate',
      description: ' Our real estate division handles the development, management, and sale of properties, ensuring value and satisfaction for our clients.',
      image: '../../../assets/images/RealEstate.avif'
    }
   
  ];

  ngOnInit(): void {
    AOS.init({ duration: 1000, once: false }); 
  }
}