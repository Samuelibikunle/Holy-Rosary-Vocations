export interface Reflection {
  id: string;
  tag: string;
  title: string;
  body: string;
  imageKey: string;
}

export const REFLECT_TAGS = ['All', 'Mary', 'Prayer', 'Mission', 'Community', 'Gospel'] as const;

export const REFLECTIONS: Reflection[] = [
  {
    id: '1',
    tag: 'Mary',
    title: 'The month of the Rosary',
    body: 'A decade a day, said slowly, changes the way you listen for the rest of the day.',
    imageKey: 'charism',
  },
  {
    id: '2',
    tag: 'Prayer',
    title: 'Before the others wake',
    body: 'The first half hour of silence is not preparation for the day. It is the day.',
    imageKey: 'novitiate',
  },
  {
    id: '3',
    tag: 'Mission',
    title: 'A borrowed bicycle',
    body: 'Ministry is rarely dramatic. It is mostly turning up again on the same road.',
    imageKey: 'mission',
  },
  {
    id: '4',
    tag: 'Community',
    title: 'Four countries, one kitchen',
    body: 'You learn a great deal about God from people who season food differently.',
    imageKey: 'whoWeAre',
  },
  {
    id: '5',
    tag: 'Gospel',
    title: 'Whom shall I send?',
    body: 'Isaiah answered before he understood what he was agreeing to. Most Sisters did too.',
    imageKey: 'vision',
  },
  {
    id: '6',
    tag: 'Mary',
    title: 'She kept these things',
    body: 'Mary did not explain her calling. She carried it and let it grow quietly.',
    imageKey: 'welcome',
  },
  {
    id: '7',
    tag: 'Prayer',
    title: 'When prayer goes dry',
    body: 'Dryness is not absence. It is often the point at which prayer stops being about feeling.',
    imageKey: 'aspirancy',
  },
  {
    id: '8',
    tag: 'Community',
    title: 'The last to speak',
    body: 'In a good community meeting, the youngest Sister is asked first.',
    imageKey: 'candidacy',
  },
];
