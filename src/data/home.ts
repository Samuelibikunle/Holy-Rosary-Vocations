export interface JourneyStep {
  n: number;
  title: string;
  body: string;
  href: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  { n: 1, title: 'Feel welcome', body: 'You have arrived in the right place, and you are welcome to look around.', href: '/' },
  { n: 2, title: 'Discover', body: 'Who we are, what we believe, and where in the world we serve.', href: '/life' },
  { n: 3, title: 'Imagine', body: 'Stories, photographs and ministries that let you picture the life.', href: '/stories' },
  { n: 4, title: 'Understand', body: 'The stages of formation and honest answers to practical questions.', href: '/formation' },
  { n: 5, title: 'Begin', body: 'One conversation with a Vocation Directress. Nothing more.', href: '/contact' },
];

export interface SignOfVocation {
  title: string;
  body: string;
}

export const SIGNS_OF_VOCATION: SignOfVocation[] = [
  { title: 'A desire that keeps returning', body: 'The thought of religious life comes back, even after you have set it aside.' },
  { title: 'A pull towards prayer', body: 'Silence and prayer attract you more than they used to, even when they are difficult.' },
  { title: 'Restlessness with your plans', body: 'A good life is available to you and something in it still feels unfinished.' },
  { title: 'Compassion that costs you', body: 'You notice suffering and you cannot leave it alone.' },
  { title: 'Others have said it aloud', body: 'Someone who knows you has asked whether you ever considered religious life.' },
  { title: 'Peace when you imagine it', body: 'Picturing yourself as a Sister brings quiet rather than dread.' },
];

export interface DiscernStep {
  n: string;
  title: string;
  body: string;
}

export const DISCERN_STEPS: DiscernStep[] = [
  { n: '01', title: 'Pray honestly', body: 'Tell God what you actually feel, including the fear. Fifteen minutes of silence a day is enough to begin.' },
  { n: '02', title: 'Talk to someone', body: 'A priest, a Sister, a spiritual director. Discernment spoken aloud stops going in circles.' },
  { n: '03', title: 'Notice the pattern', body: 'Keep a short journal for a month. Discernment is read backwards, in what consistently gives peace.' },
  { n: '04', title: 'Take one small step', body: 'Write to a Vocation Directress, visit a community, join a discernment retreat. Small steps are reversible.' },
];

export interface QuickTile {
  label: string;
  href: string;
  imageKey: string;
}

export const QUICK_TILES: QuickTile[] = [
  { label: 'Discernment', href: '/discernment', imageKey: 'novitiate' },
  { label: 'Formation', href: '/formation', imageKey: 'candidacy' },
  { label: 'Life as a Sister', href: '/life', imageKey: 'whoWeAre' },
  { label: 'Our ministries', href: '/ministries', imageKey: 'mission' },
  { label: 'Stories', href: '/stories', imageKey: 'firstProfession' },
  { label: 'Time to Reflect', href: '/reflect', imageKey: 'charism' },
  { label: 'Frequently asked', href: '/faq', imageKey: 'preCandidacy' },
  { label: 'Contact a Sister', href: '/contact', imageKey: 'vision' },
];

export const COUNTRY_CONTACTS = [
  { place: 'Nigeria (Vocation Team HQ)', tel: '+234 705 515 9331' },
  { place: 'Ghana', tel: '+233 24 123 4567' },
  { place: 'Cameroon', tel: '+237 67 890 1234' },
  { place: 'Kenya', tel: '+254 71 234 5678' },
  { place: 'Sierra Leone', tel: '+232 76 543 210' },
  { place: 'Ireland & UK', tel: '+353 1 234 5678' },
  { place: 'Zambia & South Africa', tel: '+260 97 123 4567' },
  { place: 'Americas (Brazil/USA)', tel: '+1 617 555 0192' },
];

export const HERO_SETS: Record<string, string[]> = {
  home: ['novitiate', 'firstProfession', 'finalProfession'],
  discernment: ['novitiate', 'aspirancy', 'charism'],
  formation: ['novitiate', 'candidacy', 'finalProfession'],
  life: ['whoWeAre', 'charism', 'mission'],
  ministries: ['mission', 'charism', 'vision'],
  stories: ['firstProfession', 'finalProfession', 'vision'],
  faq: ['preCandidacy', 'aspirancy', 'candidacy'],
  contact: ['vision', 'mission', 'whoWeAre'],
  reflect: ['novitiate', 'finalProfession', 'firstProfession'],
};
