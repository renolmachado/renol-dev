import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactSection } from '../contact-section/contact-section';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  color: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, ContactSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly projects: Project[] = [
    {
      title: 'News Pulse',
      description: 'Stay updated with the latest news and trending stories from around the world.',
      image: 'https://dev-pulse-web-gules.vercel.app/og-image.png',
      link: 'https://dev-pulse-web-gules.vercel.app',
      color: 'from-gray-700 to-gray-900',
    },
    {
      title: 'Discover Movies',
      description: 'Explore the world of cinema with the latest releases and popular films.',
      image: 'https://discover-movies-henna.vercel.app/og-image.png',
      link: 'https://discover-movies-henna.vercel.app',
      color: 'from-gray-800 to-black',
    },
  ];

  protected readonly currentProjectIndex = signal(0);
  private intervalId?: ReturnType<typeof setInterval>;

  constructor() {
    effect(() => {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }

      this.intervalId = setInterval(() => {
        this.nextProject();
      }, 5000);
    });
  }

  protected get currentProject(): Project {
    return this.projects[this.currentProjectIndex()];
  }

  protected nextProject(): void {
    this.currentProjectIndex.set((this.currentProjectIndex() + 1) % this.projects.length);
  }

  protected previousProject(): void {
    this.currentProjectIndex.set(
      (this.currentProjectIndex() - 1 + this.projects.length) % this.projects.length
    );
  }

  protected goToProject(index: number): void {
    this.currentProjectIndex.set(index);
  }
}
