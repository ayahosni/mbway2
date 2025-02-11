import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ChatbotComponent {
  qaList = [
    { question: 'What health services do you provide?', answer: 'We offer consultations, diagnostics, and specialized treatments in various medical fields.', category: 'health' },
    { question: 'What diagnostic services are available?', answer: 'We provide a range of diagnostic services including blood tests, imaging, and screenings.', category: 'health' },
    { question: 'What educational programs are available?', answer: 'We provide online courses, certifications, and professional training programs in multiple disciplines.', category: 'education' },
    { question: 'What training programs are available for professionals?', answer: 'We offer certification programs and specialized training courses for professionals.', category: 'education' },
    { question: 'What tourism packages do you offer?', answer: 'Our packages include guided tours, custom travel itineraries, and exclusive hotel bookings.', category: 'tourism' },
    { question: 'What custom travel itineraries can you offer?', answer: 'We offer tailored travel plans that suit your interests, preferences, and budget.', category: 'tourism' },
    { question: 'What engineering services do you specialize in?', answer: 'We specialize in civil, mechanical, and electrical engineering projects with a focus on quality and innovation.', category: 'engineering' },
    { question: 'What types of construction projects do you handle?', answer: 'We handle residential, commercial, and industrial construction projects with expert engineering support.', category: 'engineering' },
    { question: 'Do you sell heavy equipment?', answer: 'Yes, we offer a wide range of heavy machinery for construction, mining, and industrial purposes.', category: 'equipment' },
    { question: 'Do you offer equipment rental?', answer: 'Yes, we provide short-term and long-term rental options for a variety of construction equipment.', category: 'equipment' },
    { question: 'Would you like to inquire about other services?', answer: '', category: 'other' }
  ];

  messages: { sender: string, text: string }[] = [
    { sender: 'bot', text: 'Welcome!' },
    { sender: 'bot', text: 'Please select a question to learn more about our services.' }
  ];

  userMessage = '';
  visibleQaList: any[] = []; 
  isChatOpen = false; // State to control the visibility of the chat
  currentCategory: string | null = null; // Track the current category of questions

  // Toggle chat window visibility
  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    // Reset visible questions if chat is closed
    if (!this.isChatOpen) {
      this.visibleQaList = [];
      this.messages = [
        { sender: 'bot', text: 'Welcome!' },
        { sender: 'bot', text: 'Please select a question to learn more about our services.' }
      ];
      this.currentCategory = null;
    } else {
      this.updateVisibleQuestions(); // Reload questions when chat opens
    }
  }

  // Method to show 3 questions at a time
  updateVisibleQuestions() {
    const remainingQuestions = this.qaList.filter(item => !this.visibleQaList.includes(item));
    const nextQuestions = remainingQuestions.slice(0, 3);
    this.visibleQaList = [...this.visibleQaList, ...nextQuestions];
  }

  handleQuestion(selectedQuestion: string) {
    const qa = this.qaList.find(item => item.question === selectedQuestion);
    if (qa) {
      this.messages.push({ sender: 'user', text: qa.question });
      this.messages.push({ sender: 'bot', text: qa.answer });
      this.currentCategory = qa.category;

      if (qa.category !== 'other') {
        this.messages.push({ sender: 'bot', text: 'Would you like to inquire about other services?' });
        if (!this.qaList.find(item => item.question === 'Would you like to inquire about other services?')) {
          this.qaList.push({ question: 'Would you like to inquire about other services?', answer: '', category: 'other' });
        }
      }

      this.updateVisibleQuestions();
    }
  }

  sendMessage() {
    if (this.userMessage.trim()) {
      this.messages.push({ sender: 'user', text: this.userMessage });
      this.messages.push({ sender: 'bot', text: this.getResponse(this.userMessage) });
      this.userMessage = '';
    }
  }

  getResponse(userInput: string): string {
    const lowerInput = userInput.toLowerCase();
    for (const qa of this.qaList) {
      if (lowerInput.includes(qa.question.toLowerCase())) {
        return qa.answer;
      }
    }
    return 'I am sorry, I do not have an answer to that question. Could you please rephrase or ask something else?';
  }

  ngOnInit() {
    this.updateVisibleQuestions(); // Initialize visible questions
  }
}
