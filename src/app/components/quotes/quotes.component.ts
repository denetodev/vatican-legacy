import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-quotes',
  imports: [CommonModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.8s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate(
          '0.4s ease',
          style({ opacity: 0, transform: 'translateY(-30px)' })
        ),
      ]),
    ]),
  ],
})
export class QuotesComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  intervalId: any;
  isTransitioning = false;

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }

  startSlideShow() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  stopSlideShow() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentSlide = (this.currentSlide + 1) % 4;

    // Reset transitioning state after animation completes
    setTimeout(() => {
      this.isTransitioning = false;
    }, 800);

    // Reset the slideshow timer
    this.stopSlideShow();
    this.startSlideShow();
  }

  prevSlide() {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentSlide = (this.currentSlide - 1 + 4) % 4;

    // Reset transitioning state after animation completes
    setTimeout(() => {
      this.isTransitioning = false;
    }, 800);

    // Reset the slideshow timer
    this.stopSlideShow();
    this.startSlideShow();
  }

  goToSlide(index: number) {
    if (this.isTransitioning || this.currentSlide === index) return;

    this.isTransitioning = true;
    this.currentSlide = index;

    // Reset transitioning state after animation completes
    setTimeout(() => {
      this.isTransitioning = false;
    }, 800);

    // Reset the slideshow timer
    this.stopSlideShow();
    this.startSlideShow();
  }

  // Pausing slideshow on interaction
  pauseSlideshow() {
    this.stopSlideShow();
  }

  resumeSlideshow() {
    this.startSlideShow();
  }
}
