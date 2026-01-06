import { Component } from '@angular/core';
import { HeroSection } from '../hero-section/hero-section';
import { AboutSection } from '../about-section/about-section';
import { ProjectsSection } from '../projects-section/projects-section';
import { ExperienceSection } from '../experience-section/experience-section';
import { EducationSection } from '../education-section/education-section';
import { TechStackSection } from '../tech-stack-section/tech-stack-section';
import { ContactSection } from '../contact-section/contact-section';

@Component({
  selector: 'app-home',
  imports: [
    HeroSection,
    AboutSection,
    ProjectsSection,
    ExperienceSection,
    EducationSection,
    TechStackSection,
    ContactSection,
  ],
  template: `
    <app-hero-section />
    <app-about-section />
    <app-projects-section />
    <app-experience-section />
    <app-education-section />
    <app-tech-stack-section />
    <app-contact-section />
  `,
  styleUrl: './home.css',
})
export class Home {}
