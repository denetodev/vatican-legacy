import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  constructor() {}

  // Método para abrir links em nova aba
  openLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // Método para inscrição na newsletter
  subscribeNewsletter(event: Event): void {
    event.preventDefault();
    // Implementar lógica de inscrição aqui
    alert('Obrigado por se inscrever na nossa newsletter!');
  }
}
