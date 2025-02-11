import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { ChoosingComponent } from './components/choosing/choosing.component';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },

  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact.component').then((m) => m.ContactComponent ),
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about.component').then( (m) => m.AboutComponent ),
  },

  {
    path: 'services',
    loadComponent: () => 
      import('./components/services/services.component').then((m) => m.ServicesComponent),
  },
  {
    path: 'choosing',
    loadComponent: () => 
      import('./components/choosing/choosing.component').then((m) => m.ChoosingComponent),
  },
  {
    path: 'chatbot',
    loadComponent: () => 
      import('./components/chatbot/chatbot.component').then((m) => m.ChatbotComponent),
  },
];

export const appProviders = [provideHttpClient()];
