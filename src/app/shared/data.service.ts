import { Injectable } from '@angular/core';
import { Project, Experience, Education, TechCategory } from './types';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getProjects(): Project[] {
    return [
      {
        title: 'News Pulse',
        description:
          'Stay updated with the latest news and trending stories from around the world.',
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
  }

  getExperiences(): Experience[] {
    return [
      {
        title: 'Senior Software Engineer',
        company: 'Clockwork',
        location: 'Montevideo, Uruguay',
        duration: '3 years and 6 months',
        description: [
          'Led backend and frontend development for diverse high-impact projects',
          'Built scalable applications using React, NestJS, and MongoDB',
          'Delivered production-ready solutions with focus on performance and maintainability',
        ],
      },
      {
        title: 'Team Lead',
        company: 'Innovant',
        location: 'Montevideo, Uruguay',
        duration: '7 years and 8 months',
        description: [
          'Evolved from software developer to Team Lead, delivering high-quality solutions for numerous clients',
          'Team Lead: Managed tasks, client meetings, and led a team of developers (2 years)',
          'Project Analysis: Analyzed and understood Open Banking Solution architecture (1 year)',
          'Backend projects: Omniphase (.NET Core 3.0, C#, Postgres, Entity Framework, Azure Functions), Tempo (WebApi 2 .NET, C#, SQL, Entity Framework), Encatex (Visual Basic .Net, SQL, Store Procedures, C#, Windows Forms)',
          'Frontend projects: Omniphase (Angular, TypeScript, HTML, NgRx), Trace (React, TypeScript, SCSS, HTML)',
          'Managed AWS instances and Internet Information Services (IIS) for production deployments',
        ],
      },
    ];
  }

  getEducation(): Education[] {
    return [
      {
        degree: 'Software Engineer',
        institution: 'Universidad ORT Uruguay',
        period: '2013 – 2018',
        specialization: 'Specialization in software Architecture and software development process',
      },
      {
        degree: 'Software Engineer Assistant',
        institution: 'Universidad ORT Uruguay',
        period: '2013 – 2015',
      },
    ];
  }

  getTechStack(): TechCategory[] {
    return [
      {
        name: 'Languages',
        items: ['TypeScript', 'C#', 'Java', 'JavaScript', 'Android', 'SQL', 'NoSQL'],
      },
      {
        name: 'Frameworks & Libraries',
        items: [
          'React',
          'Angular',
          'Next.js',
          'NestJS',
          '.NET Core',
          'Jest',
          'NgRx',
          'Tailwind CSS',
          'Vitest',
          'ReactQuery',
          'Webpack',
          'Redux',
          'Redis',
          'BullMQ',
          'MongoDB',
          'PostgreSQL',
          'MySQL',
          'Microsoft SQL Server',
        ],
      },
      {
        name: 'Cloud & DevOps',
        items: [
          'AWS',
          'CI/CD',
          'Docker',
          'Microservices',
          'Queues',
          'Event Driven Architecture',
          'IIS',
          'Azure',
          'Render',
          'Neon',
          'Vercel',
          'Upstash',
        ],
      },
      {
        name: 'Tools & Others',
        items: ['JIRA', 'Shortcut', 'Notion', 'Git', 'Slack'],
      },
    ];
  }
}
