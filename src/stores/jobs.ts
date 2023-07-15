import { defineStore } from 'pinia';
export interface Job {
  isCurrentRole: boolean;
  timeline: string;
  role: string;
  company: string;
  lineItems: string[];
}
const jobs: Job[] = [
  {
    isCurrentRole: false,
    timeline: '2021 - 2023',
    role: 'Sr. Engineer, Full Stack',
    company: 'Slickdeals',
    lineItems: [
      'Refactored and white-labeled browser extensions from Chrome Manifest V2 in JS to V3 in TypeScript with Vite + Vue 3',
      'Created backend REST API controllers, repositories, services, and data models in PHP',
      'Integrated with third-party CRM and campaign systems via API and Webhooks',
      'Created responsive Vue components tied to Google Analytics',
      'Created and maintained unit and functional tests for frontend and backend code',
      'Created acceptance tests in JIRA + Zephyr for QA teams',
      'Supported Agile SCRUM and Kanban teams plan and refine sprints weekly',
      'Performed ego-free constructive criticism in code reviews and peer reviews',
    ],
  },
  {
    isCurrentRole: false,
    timeline: '2016 - 2021',
    role: 'Lead Full Stack Engineer',
    company: 'Smart Software Solutions',
    lineItems: [
      'Worked directly with clients via web, phone, and email to define project scope and costs',
      'submitted over 20+ project proposals annually',
      'Launched, configured, secured, and managed virtual servers',
      'Managed DNS records, SSL Certificates, and firewall rules',
      'Managed and secured virtual machines with fail2ban, firewall rules, and cron jobs',
      'Trained and delegated daily with developers in multiple projects',
      'Performed all duties of full stack development',
    ],
  },
  {
    isCurrentRole: false,
    timeline: '2014 - 2016',
    role: 'Full Stack Engineer',
    company: 'Smart Software Solutions',
    lineItems: [
      'Developed REST APIs using primarily Node.js + Express or PHP',
      'Integrated Node.js + Express instances with MySQL database with Sequelize',
      'Developed responsive web and hybrid mobile applications using Material Design, Angular, React, and React Native in TypeScript',
      'Created Wordpress and Drupal custom themes, modules, and features',
      'Optimized MySQL queries to drastically improve performance',
    ],
  },
];

export const userJobsStore = defineStore('jobs', {
  state: () => ({
    jobs,
  }),
  actions: {},
});
