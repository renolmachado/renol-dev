import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education-section.html',
})
export class EducationSection {
  private readonly dataService = inject(DataService);
  protected readonly education = this.dataService.getEducation();
}
