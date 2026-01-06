import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-section.html',
})
export class ExperienceSection {
  private readonly dataService = inject(DataService);
  protected readonly experiences = this.dataService.getExperiences();
}
