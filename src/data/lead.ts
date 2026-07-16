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
      'Officers help plan events, make decisions with their branch, and support newer members as they learn how SASC works.',
    icon: 'workspace',
  },
  {
    title: 'Find your people',
    description:
      'You’ll work closely with other Southeast Asian students and often build friendships that last beyond the semester.',
    icon: 'groups',
  },
  {
    title: 'Make things happen',
    description:
      'From booking rooms to running campaigns, officer work turns ideas into programs people can actually attend.',
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
      'Internal Affairs coordinates bonding events, wellness programming, and member support so people stay connected throughout the year.',
    image: '/internal.jpg',
    committee: 'Internal',
    keyFocus: [
      'Plan bonding and wellness events.',
      'Connect members with mentorship and support resources.',
      'Help newer members feel welcome and looked after.',
    ],
  },
  {
    name: 'External Affairs',
    focus: 'Community Partnerships & Advocacy',
    overview:
      'External Affairs builds relationships with campus and Bay Area partners, then helps turn those partnerships into shared events and campaigns.',
    image: '/tabling.jpg',
    committee: 'External',
    keyFocus: [
      'Maintain relationships with campus and Bay Area partners.',
      'Help plan collaborative events on and off campus.',
      'Support campaigns that affect Southeast Asian students and communities.',
    ],
  },
  {
    name: 'Operations',
    focus: 'Logistics, Budgeting & Event Support',
    overview:
      'Operations handles budgeting, vendors, reimbursements, scheduling, and event logistics so programs can run smoothly.',
    image: '/operations.jpg',
    committee: 'Operations',
    keyFocus: [
      'Coordinate timelines and vendors for major events.',
      'Manage purchasing, reimbursements, and ASUC funding requests.',
      'Research grants and sponsorships that support our programs.',
      'Work with directors on budget planning and tracking.',
    ],
  },
  {
    name: 'Public Relations',
    focus: 'Storytelling & Outreach',
    overview:
      'Public Relations creates graphics, photos, video, captions, and newsletters so members and the wider campus know what SASC is doing.',
    image: '/pr.jpg',
    committee: 'PR',
    keyFocus: [
      'Design graphics and short-form video for Instagram and print.',
      'Photograph and archive events.',
      'Write captions, newsletters, and other outreach copy.',
      'Plan social media rollouts for programs and campaigns.',
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
    title: 'Watch for the next cycle',
    detail:
      'We share recruitment details on Instagram, the mailing list, and at general meetings once branch needs are clear.',
    icon: 'lightbulb',
  },
  {
    title: 'Meet the directors',
    detail:
      'You’ll talk through expectations, your interests, and which branch might be the best fit.',
    icon: 'diversity',
  },
  {
    title: 'Start onboarding',
    detail:
      'You’ll meet your branch, get oriented, and learn what the first few weeks usually look like.',
    icon: 'event',
  },
  {
    title: 'Grow with us',
    detail:
      'You’ll get support from your team during busy weeks and quieter stretches alike.',
    icon: 'volunteer',
  },
];
