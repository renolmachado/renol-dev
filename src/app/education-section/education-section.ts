import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-gray-900">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">Education</h2>
          <div class="w-24 h-1 bg-linear-to-r from-gray-500 to-gray-700 mx-auto"></div>
        </div>
        <div class="max-w-4xl mx-auto space-y-6">
          @for (edu of education; track edu.degree) {
          <div class="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:bg-gray-750 transition-all">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h3 class="text-2xl font-bold text-white mb-1">{{ edu.degree }}</h3>
                <p class="text-xl text-gray-300 mb-2">{{ edu.institution }}</p>
                @if (edu.specialization) {
                <p class="text-gray-400">{{ edu.specialization }}</p>
                }
              </div>
              <span class="text-gray-400 text-sm md:mt-1">{{ edu.period }}</span>
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class EducationSection {
  private readonly dataService = inject(DataService);
  protected readonly education = this.dataService.getEducation();
}
