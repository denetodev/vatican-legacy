import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  imports: [CommonModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss',
})
export class CtaComponent {
  // Se precisar adicionar funcionalidade para o botão de compartilhamento
  shareContent(): void {
    // Implementação do compartilhamento (pode ser integrado com APIs de redes sociais)
    console.log('Compartilhando conteúdo...');
  }
}
