import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import Typed from 'typed.js';
import * as AOS from 'aos';
import { ContactComponent } from '../contact/contact.component';
import { ServicesComponent } from '../services/services.component';
import { ChatbotComponent } from '../chatbot/chatbot.component';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-home',
standalone: true,
imports: [ContactComponent, ServicesComponent, RouterLink, ChatbotComponent, HttpClientModule,CommonModule],
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {
  isLoading = true; // المتغير لإدارة حالة التحميل

  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }

  ngAfterViewInit(): void {
    const options = {
      strings: [
        'Your Partner in Progress <span> Medical Services, Engineering, Tourism, Education </span>'
      ],
      typeSpeed: 120, // سرعة الكتابة
      backSpeed: 25, // سرعة الحذف
      backDelay: 1000, // تأخير قبل الحذف
      loop: true, // تكرار النص
      showCursor: false // إخفاء المؤشر
    };

    new Typed('#typed-text', options);

    // تحديث AOS بعد تحميل الصفحة
    setTimeout(() => {
      AOS.refresh();
    }, 300);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    // تحديث AOS عند التمرير
    AOS.refresh();
  }
  completeInitialization(): void {
    if (this.isLoading) {
      this.isLoading = false; // إيقاف حالة التحميل
    }
  }
}