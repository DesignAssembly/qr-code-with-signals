import { Component, effect, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QrCardComponent } from "./components/qr-card.component";
import { ButtonComponent } from './components/button.component';
import { ButtonDirective } from './directives/button.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QrCardComponent, ButtonComponent,ButtonDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  theme   = signal<'light' | 'dark'>('light');
  qrLabel = signal('Change QR Title');

  @ViewChild(QrCardComponent, { static: true })
  qrCard!: QrCardComponent;

  constructor() {
    effect(() => {
      const current = this.theme();
      document.body.classList.remove('dark', 'light');
      document.body.classList.add(current);
    });
  }

  toggleTheme = () => {
    this.theme.update((t) => (t === 'light' ? 'dark' : 'light'));
  };

  getThemeIcon = () => this.theme() === 'light' ? 'icon-moon.svg' : 'icon-sun.svg';

}
