import { Component, signal, PLATFORM_ID, inject as angularInject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { inject } from '@vercel/analytics';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly platformId = angularInject(PLATFORM_ID);
  protected readonly title = signal('Renol Dev');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      inject();
    }
  }
}
