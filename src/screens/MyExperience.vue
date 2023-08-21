<script setup lang="ts">
import ExternalLink from '@/components/ExternalLink.vue';

const slickdealsSkills = [
  'Vue',
  'SCSS',
  'TypeScript',
  'REST API',
  'PHP',
  'Symfony',
  'MySQL',
  'Docker',
  'Microservices',
  'Unit Tests',
  'JIRA',
  'Git',
  'A/B Testing',
  'Google Tag Manager',
  'Agile - SCRUM',
  'Agile - Kanban',
];

const smartLeadSkills = [
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
  'Java',
  'Linux',
];

const smartSkills = [
  'Angular 2+',
  'AngularJS',
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
  'Java',
  'Linux',
];
</script>

<template>
  <div class="my-experience">
    <h1 class="page-title eyebrow">My Experience</h1>

    <section class="jobs">
      <article
        class="job"
        :class="{
          'job--current': false,
        }"
      >
        <p class="job__timeline">2021 - 2023</p>
        <div class="job__info">
          <h3 class="job__role">Sr. Engineer, Full Stack</h3>
          <span class="job__company"><ExternalLink href="https://slickdeals.net/" label="Slickdeals" /></span>
        </div>
        <ul class="job__items">
          <li>
            Refactored and modularized the
            <ExternalLink href="https://slickdeals.net/extension/" label="Slickdeals browser extension" /> involving
            <strong>Vite, Vue, Storybook, Typescript, and SCSS</strong>
          </li>
          <li>
            Worked closely with the design team on <strong>50+ Figma</strong> designs and
            <strong>30+ A/B Tests</strong>
          </li>
          <li>
            Developed <strong>REST API</strong> controllers, services, repositories, and data models in
            <strong>PHP</strong>
          </li>
          <li>Helped improve enterprise-level microservices and monolithic <strong>Git</strong> repos</li>
          <li>Integrated code with <strong>Google Tag Manager, Google Analytics, and Sentry</strong></li>
          <li>Established and maintained <strong>100+ unit tests</strong> and <strong>functional tests</strong></li>
          <li>
            Contributed to <strong>Agile Scrum</strong> and <strong>Kanban</strong> teams by assisting in weekly sprint
            planning and refinement, quarterly planning with <strong>OKRs</strong> and <strong>KPIs</strong>
          </li>
          <li>
            Defined and completed implementation and test plans for <strong>200+</strong> tickets in
            <strong>JIRA</strong>
          </li>
        </ul>
        <ul class="job__skills">
          <li v-for="item in slickdealsSkills" :key="item" class="job__skills__item">{{ item }}</li>
        </ul>
      </article>

      <article
        class="job"
        :class="{
          'job--current': false,
        }"
      >
        <p class="job__timeline">2016 - 2021</p>
        <div class="job__info">
          <h3 class="job__role">Lead Full Stack Engineer</h3>
          <span class="job__company"
            ><ExternalLink href="https://smartsoftwareinc.com/" label="Smart Software Solutions"
          /></span>
        </div>

        <ul class="job__items">
          <li>
            Developed <strong>responsive</strong> web and hybrid <strong>mobile</strong> applications following
            <strong>Material Design</strong> with <strong>Ionic</strong>, <strong>Angular</strong>,
            <strong>React</strong>,
            <strong>React Native</strong>
          </li>
          <li>Created and proposed project <strong>estimates</strong> to clients over web and email</li>
          <li><strong>Trained</strong> new hires and delegated tasks to developers across multiple projects</li>
          <li>
            Developed <strong>REST API</strong> controllers, repositories, services, and data models in
            <strong>Typescript</strong> with <strong>Node.js</strong>, <strong>Express</strong>,
            <strong>Sequelize</strong> and <strong>MySQL</strong>
          </li>
          <li>Designed <strong>database schemas</strong> and performed <strong>SQL query optimization</strong></li>
        </ul>
        <div class="job__skills">
          <div v-for="item in smartLeadSkills" :key="item" class="job__skills__item">{{ item }}</div>
        </div>
      </article>

      <article
        class="job"
        :class="{
          'job--current': false,
        }"
      >
        <p class="job__timeline">2014 - 2016</p>
        <div class="job__info">
          <h3 class="job__role">Full Stack Engineer</h3>
          <span class="job__company"
            ><ExternalLink href="https://smartsoftwareinc.com/" label="Smart Software Solutions"
          /></span>
        </div>

        <ul class="job__items">
          <li>
            Developed <strong>responsive</strong> web and hybrid <strong>mobile</strong> applications following
            <strong>Material Design</strong> with <strong>Ionic</strong>, <strong>Angular</strong>,
            <strong>React</strong>
          </li>
          <li>
            Developed <strong>REST API</strong> controllers, repositories, services, and data models in
            <strong>Typescript</strong> with <strong>Node.js</strong>, <strong>Express</strong>,
            <strong>Sequelize</strong> and <strong>MySQL</strong>
          </li>
        </ul>
        <div class="job__skills">
          <div v-for="item in smartSkills" :key="item" class="job__skills__item">{{ item }}</div>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped lang="scss">
.my-experience {
  padding-block: 4em;
  padding-inline: 1em;
}
.jobs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: 2rem;
}
.job {
  background-color: var(--clr-surface-1);
  padding: 1rem;
  position: relative;
  border-radius: 0.5rem;

  &--current::after {
    content: 'Current role';
    position: absolute;
    color: var(--clr-accent-heading);
    top: -2rem;
    left: 0;
  }

  &__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__company {
    text-align: right;
  }

  &__items {
    margin-block: 2rem;
    list-style: circle;
    padding-left: 2rem;
  }

  &__skills {
    display: flex;
    flex-wrap: wrap;
    padding-left: 2rem;

    &__item {
      padding: 0.5em 1em;
      margin: 0.5em 0.5em 0 0;
      border-radius: 20pt;
      background-color: var(--clr-button);
    }
  }
}
</style>
