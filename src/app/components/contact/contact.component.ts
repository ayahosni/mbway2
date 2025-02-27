import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmailService } from '../../service/email.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  isLoading = false;
  isSuccess = false;
  isError = false;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  sendEmail() {
    if (this.contactForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.isSuccess = false;
    this.isError = false;

    this.emailService.sendEmail(this.contactForm.value)
      .then(() => {
        this.isSuccess = true;
        this.contactForm.reset();
      })
      .catch(() => {
        this.isError = true;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
