import { LeadershipCommittee } from './leadership';

export type BenefitIconKey = 'workspace' | 'groups' | 'campaign';

export const leadBenefits: Array<{
  title: string;
  description: string;
  icon: BenefitIconKey;
}> = [
  {
    title: 'Do real work, learn by doing',
    description:
      'Take on real organizing tasks, make decisions with the team, and help guide newer members as you build leadership experience.',
    icon: 'workspace',
  },
  {
    title: 'Find your people',
    description:
      'Work alongside Southeast Asian peers, form friendships that last, and support each other beyond SASC events.',
    icon: 'groups',
  },
  {
    title: 'Make things happen',
    description:
      'Plan events, launch campaigns, and work with community partners who care about Southeast Asian student voices.',
    icon: 'campaign',
  },
];

export type BranchKeyFocus = string[];

export type LeadBranch = {
  name: string;
  focus: string;
  overview: string;
  image: string;
  committee: LeadershipCommittee;
  keyFocus: BranchKeyFocus;
};

export const leadBranches: LeadBranch[] = [
  {
    name: 'Internal Affairs',
    focus: 'Community Care & Mentorship',
    overview:
      'In Internal Affairs, we hold spaces for care, coordinate bonding events, and make sure our community stays supported and connected.',
    image: '/internal.jpg',
    committee: 'Internal',
    keyFocus: [
      'Lead culturally grounded care spaces and restorative practices.',
      'Coordinate bonding events that keep our coalition tight-knit.',
      'Connect members with mentorship, wellness, and resource partners.',
    ],
  },
  {
    name: 'External Affairs',
    focus: 'Community Partnerships & Advocacy',
    overview:
      'In External Affairs, we build and maintain relationships with campus allies and grassroots groups to advance equity together.',
    image: '/tabling.jpg',
    committee: 'External',
    keyFocus: [
      'Maintain relationships with Bay Area partners and grassroots orgs.',
      'Co-create events that uplift Southeast Asian voices on and off campus.',
      'Mobilize students around campaigns impacting the SEAA diaspora.',
    ],
  },
  {
    name: 'Operations',
    focus: 'Logistics, Budgeting & Event Support',
    overview:
      'The Operations team handles budgeting, scheduling, vendor coordination, reimbursements, and event logistics so programs run smoothly.',
    image: '/operations.jpg',
    committee: 'Operations',
    keyFocus: [
      'Own timelines, run-of-show, and vendor coordination for flagship events.',
      'Build systems that make program leads feel supported and resourced.',
      'Manage purchasing, reimbursements, and ASUC funding proposals.',
      'Research grants and sponsorships that sustain our programs.',
      'Partner with directors on budget strategy and transparency.',
    ],
  },
  {
    name: 'Public Relations',
    focus: 'Storytelling & Outreach',
    overview:
      'Public Relations shapes how our work is seen and understood, from graphics and video to newsletters and social media campaigns that reflect our members’ voices.',
    image: '/pr.jpg',
    committee: 'PR',
    keyFocus: [
      'Create branded graphics, short-form video, and print collateral.',
      'Capture photo/video at events and manage our content archive.',
      'Experiment with new storytelling formats that highlight members.',
      'Craft newsletters, email campaigns, and social captions with voice.',
      'Plan social media rollouts that build anticipation for programs.',
      'Monitor insights to refine outreach and grow our community reach.',
    ],
  },
];

export type ApplicationStepIconKey = 'lightbulb' | 'diversity' | 'event' | 'volunteer';

export const leadApplicationSteps: Array<{
  title: string;
  detail: string;
  icon: ApplicationStepIconKey;
}> = [
  {
    title: 'Fill out the interest form',
    detail:
      'Tell us what excites you, what you’re good at, and what you want to learn. We’re genuinely interested in what you bring, not just checkboxes.',
    icon: 'lightbulb',
  },
  {
    title: 'Meet the directors',
    detail:
      'We’ll have a conversation to get to know you, talk about expectations, and see where you’ll fit best.',
    icon: 'diversity',
  },
  {
    title: 'Start onboarding',
    detail:
      'We’ll orient you with your branch, introduce the team, and share a roadmap for your first weeks.',
    icon: 'event',
  },
  {
    title: 'Grow with us',
    detail:
      'Expect mentorship, chances to develop professionally, and a team that supports you when things get busy and when they slow down. Priority deadline: February 1 at 11:59 PM.',
    icon: 'volunteer',
  },
];
