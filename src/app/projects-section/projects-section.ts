import { Component, signal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../shared/data.service';
import { Project } from '../shared/types';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.html',
})
export class ProjectsSection {
  private readonly dataService = inject(DataService);
  protected readonly projects: Project[] = this.dataService.getProjects();
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
