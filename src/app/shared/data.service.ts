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
        description: `With News Pulse, my goal was to integrate advanced concepts such as AI, microservices, message queues, and Redis to build a robust platform for aggregating and analyzing news from multiple sources. I aimed to develop a fully functional product that spans every layer of software architecture—from a high-performance frontend to a complex backend and database management.`,
        image: 'https://daily-news-pulse.vercel.app/opengraph-image',
        link: 'https://daily-news-pulse.vercel.app',
        tags: ['Next.js', 'TypeScript', 'Microservices', 'Queues', 'Redis', 'NestJS', 'AI'],
        github: 'https://github.com/renolmachado/dev-pulse',
      },
      {
        title: 'Discover Movies',
        description: `Developed as a technical assessment, this application focuses on a high-end cinematic discovery experience. The project emphasizes 'pixel-perfect' design and sophisticated state management. Built with React, it leverages React Query (TanStack) for efficient data fetching, Redux for global state, and React Router for seamless navigation, ensuring a polished, high-performance UI`,
        image: 'https://reel-radar.vercel.app/api/og',
        link: 'https://reel-radar.vercel.app',
        tags: ['React', 'TypeScript', 'Pixel Perfect'],
        github: 'https://github.com/renolmachado/discover-movies',
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
          'Groq',
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
        items: [
          'JIRA',
          'Shortcut',
          'Notion',
          'Git',
          'Slack',
          'AI',
          'GitHub',
          'Figma',
          'Postman',
          'Bruno',
        ],
      },
    ];
  }
}
