import { Component, OnInit } from '@angular/core';
import { PopeDataService } from '../../services/pope-data.service';
import { TimelineItem } from '../../models/timeline-item.model';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(
          '0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class TimelineComponent implements OnInit {
  timelineEvents: TimelineItem[] = [];

  constructor(private popeDataService: PopeDataService) {}

  ngOnInit() {
    this.timelineEvents = this.popeDataService.getTimelineItems();
  }

  getIconForEvent(type: string | undefined): string {
    if (!type) return 'event';

    const iconMap: { [key: string]: string } = {
      appointment: 'assignment_ind',
      speech: 'record_voice_over',
      travel: 'flight',
      document: 'description',
      meeting: 'groups',
      mass: 'church',
      charity: 'favorite',
      encyclical: 'menu_book',
    };

    return iconMap[type] || 'event';
  }

  playVideo() {
    // Implementar lógica para reproduzir o vídeo
    console.log('Play video clicked');
  }
}
