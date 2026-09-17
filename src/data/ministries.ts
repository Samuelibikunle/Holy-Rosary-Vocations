export interface Ministry {
  number: string;
  title: string;
  description: string;
}

export const MINISTRIES: Ministry[] = [
  {
    number: '01',
    title: 'Schools and classrooms',
    description: 'Teaching, running schools, and reaching girls whose education would otherwise stop early.',
  },
  {
    number: '02',
    title: 'Hospitals and clinics',
    description: 'Nursing, midwifery and rural health work where medical care is scarce.',
  },
  {
    number: '03',
    title: 'Pastoral ministry',
    description: 'Catechesis, parish work, retreats and accompanying people in their faith.',
  },
  {
    number: '04',
    title: 'Migrants and refugees',
    description: 'Welcoming, sheltering and speaking up for people who have had to leave home.',
  },
  {
    number: '05',
    title: 'Care of the earth',
    description: 'Farms, water projects and climate work rooted in the places we live.',
  },
  {
    number: '06',
    title: 'Justice and peace',
    description: 'Standing with those without a voice on trafficking, women’s rights, land and dignity.',
  },
];

export const COUNTRIES: string[] = [
  'Nigeria',
  'Cameroon',
  'Ethiopia',
  'Ghana',
  'Kenya',
  'Liberia',
  'Sierra Leone',
  'South Africa',
  'Zambia',
  'Ireland',
  'England',
  'Brazil',
  'Mexico',
  'United States',
];
