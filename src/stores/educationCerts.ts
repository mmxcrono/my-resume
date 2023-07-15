import { defineStore } from 'pinia';
export interface EducationCert {
  name: string;
  location: string;
  timeline: string;
  degree?: string;
  lineItems: string[];
}
const educationCerts: EducationCert[] = [
  {
    timeline: '2021',
    name: 'Scrum Alliance',
    location: 'Online',
    lineItems: ['Certified Scrum Developer (CSD)'],
  },
  {
    timeline: '2009 - 2012',
    name: 'Cal Poly Pomona',
    location: 'Pomona, CA',
    degree: 'B.S. in Computer Science',
    lineItems: ['President of Vietnamese Student Association from 2010 to 2011'],
  },
  {
    timeline: '2006 - 2009',
    name: 'Orange Coast College',
    location: 'Costa Mesa, CA',
    lineItems: [],
  },
];

export const useEducationCertsStore = defineStore('educationCerts', {
  state: () => ({
    educationCerts,
  }),
  actions: {},
});
