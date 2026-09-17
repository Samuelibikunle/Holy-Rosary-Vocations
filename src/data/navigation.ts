export interface NavSubItem {
  label: string;
  href: string;
  note: string;
}

export interface NavGroup {
  label: string;
  href: string;
  sub: NavSubItem[];
}

export const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Home',
    href: '/',
    sub: [],
  },
  {
    label: 'Vocation',
    href: '/discernment',
    sub: [
      { label: 'Discernment', href: '/discernment', note: 'Where the question begins' },
      { label: 'Formation', href: '/formation', note: 'The stages, in order' },
      { label: 'Frequently asked', href: '/faq', note: 'Practical answers' },
    ],
  },
  {
    label: 'About us',
    href: '/life',
    sub: [
      { label: 'Life as a Sister', href: '/life', note: 'Who we are and how we live' },
      { label: 'Our ministries', href: '/ministries', note: 'Where Sisters are sent' },
      { label: 'Safeguarding', href: '/faq#safeguarding', note: 'Our commitment to the young' },
    ],
  },
  {
    label: 'Stories',
    href: '/stories',
    sub: [],
  },
  {
    label: 'Reflect',
    href: '/reflect',
    sub: [],
  },
  {
    label: 'Contact',
    href: '/contact',
    sub: [],
  },
];
