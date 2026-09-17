export interface GalleryCategory {
  id: string;
  label: string;
  question: string;
  images: string[];
}

export const GALLERIES: GalleryCategory[] = [
  {
    id: 'community',
    label: 'Community',
    question: 'What does it feel like to live in community with other Sisters?',
    images: ['whoWeAre', 'vision', 'welcome', 'finalProfession', 'candidacy'],
  },
  {
    id: 'prayer',
    label: 'Prayer',
    question: 'What does a day of prayer actually look like?',
    images: ['novitiate', 'charism', 'aspirancy', 'firstProfession', 'candidacy'],
  },
  {
    id: 'mission',
    label: 'Mission',
    question: 'Where do Sisters work, and with whom?',
    images: ['mission', 'charism', 'vision', 'whoWeAre', 'ongoing'],
  },
  {
    id: 'formation',
    label: 'Formation',
    question: 'Who walks with you while you are learning?',
    images: ['novitiate', 'candidacy', 'aspirancy', 'preCandidacy', 'firstProfession'],
  },
];
