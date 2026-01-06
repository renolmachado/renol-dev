import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <section
      class="relative min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-gray-800 overflow-hidden"
    >
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute -top-40 -right-40 w-80 h-80 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        ></div>
        <div
          class="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 w-80 h-80 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
        ></div>
      </div>

      <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-fade-in">
          Welcome to
          <span class="text-transparent bg-clip-text bg-linear-to-r from-gray-300 to-gray-500"
            >RenolDev</span
          >
        </h1>
        <p class="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
          Crafting digital experiences with passion and precision
        </p>
        <a
          href="#experience"
          class="inline-block bg-gray-200 text-black font-bold px-8 py-4 rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-lg animate-fade-in-delay-2"
        >
          Explore My Experience
        </a>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  `,
})
export class HeroSection {}
