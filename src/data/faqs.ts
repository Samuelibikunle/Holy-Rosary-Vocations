export interface FaqItem {
  question: string;
  answer: string;
}

export interface Requirement {
  label: string;
  value: string;
}

export const REQUIREMENTS: Requirement[] = [
  { label: 'Age', value: '18 to 30 at entry' },
  { label: 'Education', value: 'Completed secondary school' },
  { label: 'Nationality', value: 'Any, we are intercultural' },
  { label: 'Health', value: 'Sound physical and mental health' },
  { label: 'Faith', value: 'Baptised and confirmed Catholic, single' },
];

export const FAQS: FaqItem[] = [
  {
    question: 'How do I know God is calling me?',
    answer: 'Usually as a desire that will not leave you alone, a pull towards prayer, towards service, towards this way of life. Certainty is not required to begin. Discernment is how you find out.',
  },
  {
    question: 'At what age can I be admitted?',
    answer: 'Most women enter between 18 and 30. If you are older, write to us anyway, because each situation is looked at personally. Ages shown are stand-ins pending confirmation.',
  },
  {
    question: 'What education do I need?',
    answer: 'Completed secondary school is the usual requirement. Further study, a trade or professional experience are all welcome and often continue during formation.',
  },
  {
    question: 'Can I join from any country?',
    answer: 'Yes. We are an international and intercultural congregation present in fourteen countries, and Sisters are missioned internationally.',
  },
  {
    question: 'What about my health?',
    answer: 'Sound physical and mental health is required, because missionary life can be demanding. A medical assessment is part of the admission process. Ask us about specific conditions rather than assuming the answer is no.',
  },
  {
    question: 'My family is against it. What now?',
    answer: 'This is common, and it is not the end of the conversation. Many families come round slowly. We will never ask you to hide your discernment from them, and we are glad to speak with them.',
  },
  {
    question: 'Do I have to give away everything I own?',
    answer: 'Not at the start. Poverty is lived gradually and only becomes a vow after years of formation. Nothing irreversible is asked of you early on.',
  },
  {
    question: 'How long does formation take?',
    answer: 'Roughly ten years from entry to final profession, in stages, each one renewable and each one free to leave.',
  },
  {
    question: 'Can I leave if it is not for me?',
    answer: 'Yes, at any stage before final profession, and without shame. Many women discern their way out and are grateful for the years.',
  },
  {
    question: 'Can I just ask questions without committing?',
    answer: 'That is exactly what the vocation team is for. Write with one question. There is no obligation, and you will not be followed up relentlessly.',
  },
];
