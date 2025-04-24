import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isScrolled = false;
  menuOpen = false;
  activeSection = '';

  ngOnInit() {
    this.checkScrollPosition();
    this.detectActiveSection();
  }

  @HostListener('window:scroll')
  checkScrollPosition() {
    this.isScrolled = window.scrollY > 30;
    this.detectActiveSection();
  }

  scrollToSection(sectionId: string) {
    this.menuOpen = false;
    this.activeSection = sectionId;

    setTimeout(() => {
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
    }, 100);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  detectActiveSection() {
    const sections = ['about', 'impact', 'timeline', 'quotes', 'final'];
    const scrollPosition = window.scrollY + 200;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const top = element.offsetTop - 100;
        const bottom = top + element.offsetHeight;

        if (scrollPosition >= top && scrollPosition <= bottom) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}
