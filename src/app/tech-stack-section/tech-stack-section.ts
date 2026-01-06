import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-tech-stack-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-linear-to-br from-black to-gray-900">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">Tech Stack</h2>
          <div class="w-24 h-1 bg-linear-to-r from-gray-500 to-gray-700 mx-auto"></div>
        </div>
        <div class="space-y-8">
          @for (category of techStack; track category.name) {
          <div>
            <h3 class="text-2xl font-semibold text-white mb-6">{{ category.name }}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              @for (tech of category.items; track tech) {
              <div
                class="p-4 text-center rounded-lg bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all hover:shadow-lg"
              >
                <h4 class="font-semibold text-white text-sm">{{ tech }}</h4>
              </div>
              }
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class TechStackSection {
  private readonly dataService = inject(DataService);
  protected readonly techStack = this.dataService.getTechStack();
}
