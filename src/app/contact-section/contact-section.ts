import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  template: `<section class="py-20 bg-linear-to-br from-black via-gray-900 to-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
      <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Have a project in mind? Let's create something amazing together.
      </p>

      <button
        data-tally-open="vGe1jA"
        data-tally-layout="modal"
        data-tally-emoji-text="👋"
        data-tally-emoji-animation="wave"
        class="cursor-pointer inline-block bg-gray-200 text-black font-bold px-8 py-4 rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-lg"
      >
        Get in Touch
      </button>
    </div>
  </section>`,
})
export class ContactSection {}
