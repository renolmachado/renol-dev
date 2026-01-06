import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-tech-stack-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack-section.html',
})
export class TechStackSection {
  private readonly dataService = inject(DataService);
  protected readonly techStack = this.dataService.getTechStack();
}
