import { Component, computed, effect, signal } from '@angular/core';
import { QrDataService } from '../services/qr-data.service';

@Component({
  selector: 'app-qr-card',
  standalone: true,
  imports: [],
  templateUrl: './qr-card.component.html',
  styleUrl: './qr-card.component.css'
})
export class QrCardComponent {

  qrTitle       = signal('Improve your front-end skills by building projects');
  qrDescription = signal('Scan the QR code to visit Frontend Mentor and take your coding skills to the next level');
  orientation   = signal<'column' | 'row'>('column');
  isFlipped     = signal<Boolean>(false);
  isUppercase   = signal<Boolean>(false);

  qrData = this.qrService.getCardData();

  titleText = computed(() => this.isUppercase() ? this.qrData().title.toUpperCase() : this.qrData().title);
  constructor(private qrService: QrDataService) {
    effect(() => {
      console.log(`QR description changed: ${this.qrDescription()}`);
    });
    effect(() => {
      console.log(`QR title changed: ${this.qrTitle()}`);
    });
  }

  flexDirection = computed(() =>
    this.isFlipped()
      ? this.orientation() === 'column'
        ? 'column-reverse'
        : 'row-reverse'
      : this.orientation()
  );
  
  cardWidth = computed(() =>
    this.orientation() === 'column'
      ? 'clamp(12.5rem, 60vw ,20rem)'
      : 'clamp(12.5rem, 60vw ,50rem)'
  );




}
