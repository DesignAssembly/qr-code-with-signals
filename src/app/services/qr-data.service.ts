import { Injectable, signal } from '@angular/core';
import { QrData } from '../types/qr-data';
@Injectable({
  providedIn: 'root'
})
export class QrDataService {

  private data = signal<QrData>({
    title: 'Improve your front-end skills by building projects',
    description: 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
  });

  getCardData = () => this.data;
  constructor() { }
}
