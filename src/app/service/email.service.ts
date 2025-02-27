import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serviceID = 'service_torduyo';
  private templateID = 'template_k6wec2m';
  private publicKey = 'bs4CZt2G5r0UmOh6I';

  constructor() {}

  sendEmail(formData: any): Promise<void> {
    return emailjs.send(this.serviceID, this.templateID, formData, this.publicKey)
      .then(() => {
        console.log('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        throw error;
      });
  }
}
