export interface Story {
  id: string;
  kicker: string;
  title: string;
  standfirst: string;
  summary: string;
  cta: string;
  cardImage: string;
  alt: string;
  heroImage: string;
  paragraphs: string[];
  quote: string;
  attribution: string;
}

export const STORIES: Story[] = [
  {
    id: 'why-i-joined',
    kicker: 'Why I joined',
    title: 'Meet Sr. [Name]',
    standfirst: 'She was studying accounting in Enugu and had never met a missionary Sister. Then a friend invited her to a retreat.',
    summary: 'She was studying accounting in Enugu and had never met a missionary Sister. Then a friend invited her to a retreat.',
    cta: 'Read her story →',
    cardImage: 'vision',
    alt: 'Young sisters of the congregation',
    heroImage: 'vision',
    paragraphs: [
      'I was in my third year of accounting and my plan was completely settled. A good job, a flat of my own, and a wedding somewhere in the future. Nothing about that plan was wrong. It simply stopped fitting.',
      'A friend asked me to come with her to a weekend retreat. I went for her company. On the Saturday evening a Sister spoke about being sent, and I remember the feeling of the room tilting slightly, as though someone had said my name.',
      'I did nothing about it for eight months. I told nobody. Then I wrote one email to the Vocation Directress with one question, and she wrote back the same week. That email was the whole beginning.',
    ],
    quote: 'I did not need certainty. I needed one person willing to take the question seriously with me.',
    attribution: 'Sr. [Name], [Region]',
  },
  {
    id: 'first-vows',
    kicker: 'My first vows',
    title: '“I said yes with shaking hands”',
    standfirst: 'What the day of first profession actually feels like, and what changed the morning after.',
    summary: 'What the day of first profession actually feels like, and what changed the morning after.',
    cta: 'Read about first vows →',
    cardImage: 'firstProfession',
    alt: 'First profession celebration',
    heroImage: 'firstProfession',
    paragraphs: [
      'Everyone tells you the day will be beautiful. Nobody tells you your hands will shake, or that you will hear your own voice from very far away as you make the vows.',
      'My mother cried through the whole Mass. She had not wanted this for me, and she was the first to embrace me afterwards. Both of those things were true at once, and I have stopped trying to tidy them.',
      'The next morning was completely ordinary. Prayer at half past five, breakfast, the same walk to the same school. That was the surprise. First vows do not lift you out of daily life. They hand it back to you.',
    ],
    quote: 'The vows did not make me a different person. They made me a person with somewhere to stand.',
    attribution: 'Sr. [Name], first profession [year]',
  },
  {
    id: 'community-day',
    kicker: 'A day in my community',
    title: 'From 5:30am to night prayer',
    standfirst: 'One Sister walks through an ordinary Tuesday: prayer, a school day, cooking, laughter, exhaustion.',
    summary: 'One Sister walks through an ordinary Tuesday: prayer, a school day, cooking, laughter, exhaustion.',
    cta: 'Follow her day →',
    cardImage: 'whoWeAre',
    alt: 'Sisters of the congregation together',
    heroImage: 'whoWeAre',
    paragraphs: [
      'Half past five. Four of us in the chapel, three nationalities, one of us still visibly asleep. Morning prayer, then twenty minutes of silence, then tea that somebody always forgets to make.',
      'School from eight until two. Ninety girls, not enough chairs, one Sister who teaches mathematics as though it were a personal favour to each of them.',
      'Evening is cooking, marking, and an argument about the radio that we have had in some form every week for two years. Night prayer at nine. In between all of it, more laughter than I ever expected to find in a convent.',
    ],
    quote: 'People imagine the silence. What they do not imagine is how funny it is here.',
    attribution: 'Sr. [Name], [Region]',
  },
  {
    id: 'being-sent',
    kicker: 'Being sent',
    title: 'Leaving home for another country',
    standfirst: 'On learning a new language at thirty, and finding family among Sisters she had never met.',
    summary: 'On learning a new language at thirty, and finding family among Sisters she had never met.',
    cta: 'Read about mission →',
    cardImage: 'finalProfession',
    alt: 'Final profession celebration',
    heroImage: 'finalProfession',
    paragraphs: [
      'I was thirty when I was missioned outside my own country. I had prayed to be sent. I had not really pictured the airport.',
      'The first six months I understood perhaps a third of what was said at table. I smiled a great deal and said very little, which my community found hilarious and later admitted they had all done themselves.',
      'Three years on, this is home. Not instead of the home I left, but alongside it. That is the part of missionary life I would not have believed if someone had described it to me.',
    ],
    quote: 'Being sent is not losing your family. It is discovering how large the family already was.',
    attribution: 'Sr. [Name], [Region]',
  },
];
