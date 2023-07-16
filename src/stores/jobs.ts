import { defineStore } from 'pinia';
export interface Job {
  isCurrentRole: boolean;
  timeline: string;
  role: string;
  company: string;
  lineItems: string[];
  skills: string[];
}
const jobs: Job[] = [
  {
    isCurrentRole: false,
    timeline: '2021 - 2023',
    role: 'Sr. Engineer, Full Stack',
    company: 'Slickdeals',
    lineItems: [
      'Upgraded and customized browser extensions, transforming Chrome Manifest V2 from JS to V3 in TypeScript using Vite + Vue 3',
      'Developed backend REST API controllers, repositories, services, and data models using PHP',
      'Integrated with various third-party CRM and campaign systems through API and Webhooks',
      'Implemented responsive Vue components with seamless integration to Google Analytics',
      'Established and maintained comprehensive unit and functional tests for both frontend and backend code',
      'Executed acceptance tests in JIRA + Zephyr, collaborating closely with QA teams',
      'Contributed to Agile SCRUM and Kanban teams by assisting in sprint planning and refinement on a weekly basis',
      'Provided valuable constructive criticism during code reviews and peer evaluations, fostering a collaborative and ego-free environment',
    ],
    skills: [
      'Vue 3',
      'SCSS',
      'TypeScript',
      'PHP',
      'Symfony',
      'REST API',
      'MySQL',
      'Docker',
      'Microservices',
      'Unit Tests',
      'Agile - SCRUM',
      'Agile - Kanban',
      'JIRA',
      'Git',
      'A/B Testing',
    ],
  },
  {
    isCurrentRole: false,
    timeline: '2016 - 2021',
    role: 'Lead Full Stack Engineer',
    company: 'Smart Software Solutions',
    lineItems: [
      'Worked directly with clients via web, phone, and email to define project scope and costs',
      'Submitted over 20+ project proposals annually',
      'Configured, secured, and managed virtual servers',
      'Managed DNS records, SSL Certificates, and firewall rules',
      'Provided training and delegated tasks to developers across multiple projects daily',
      'Executed all responsibilities associated with full stack development',
    ],
    skills: [
      'Angular 9',
      'React Native',
      'Redux',
      'SCSS',
      'Firebase',
      'AWS',
      'DNS',
      'PHP',
      'REST API',
      'MySQL',
      'Ionic',
      'Node.js + Express',
      'JAVA',
      'CentOS',
    ],
  },
  {
    isCurrentRole: false,
    timeline: '2014 - 2016',
    role: 'Full Stack Engineer',
    company: 'Smart Software Solutions',
    lineItems: [
      'Developed REST APIs primarily using Node.js + Express or PHP',
      'Integrated Node.js + Express instances with MySQL database using Sequelize',
      'Developed responsive web and hybrid mobile applications using Material Design, Angular, React, and React Native, all implemented in TypeScript',
      'Created custom themes, modules, and features for Wordpress and Drupal',
      'Optimized MySQL queries to significantly enhance performance',
    ],
    skills: [
      'Angular 2+',
      'React',
      'SCSS',
      'Material Design',
      'Drupal',
      'Wordpress',
      'Node.js + Express',
      'PHP',
      'REST API',
      'MySQL',
      'Ionic',
      'Express',
      'JAVA',
      'CentOS',
    ],
  },
  {
    isCurrentRole: false,
    timeline: '2012 - 2014',
    role: 'Support Software Analyst',
    company: 'Evisions',
    lineItems: [
      'Supported 5-10 calls and web sessions daily to resolve issues',
      'Updated code and check templates for over 50 universities world-wide',
      'Performed baseline code upgrades in response to core software updates',
    ],
    skills: ['Pro*C', 'Linux', 'Vim', 'Customer Service', 'Support'],
  },
];

export const useJobsStore = defineStore('jobs', {
  state: () => ({
    jobs,
  }),
  actions: {},
});
