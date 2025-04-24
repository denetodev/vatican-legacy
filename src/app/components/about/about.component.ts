import { Component, HostListener, OnInit } from '@angular/core';
import { PopeDataService } from '../../services/pope-data.service';
import { AboutInfo } from '../../models/about-info.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  aboutInfo: AboutInfo = { title: '', description: '', highlights: [] };
  isInView = false;

  constructor(private popeDataService: PopeDataService) {}

  ngOnInit() {
    this.aboutInfo = this.popeDataService.getAboutInfo();

    // Formatando o texto para HTML se necessário
    if (this.aboutInfo.description) {
      this.aboutInfo.description = this.aboutInfo.description
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
    }

    setTimeout(() => {
      this.checkIfInView();
    }, 500);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  @HostListener('window:scroll', ['$event'])
  checkIfInView() {
    const element = document.getElementById('about');
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      this.isInView = rect.top <= windowHeight * 0.5 && rect.bottom >= 0;
    }
  }
}
