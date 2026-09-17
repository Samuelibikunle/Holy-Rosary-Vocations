export interface FormationStage {
  id: string;
  stepNumber: string;
  title: string;
  length: string;
  summary: string;
  cta: string;
  imageKey: string;
  alt: string;
  standfirst: string;
  paragraphs: string[];
}

export const STAGES: FormationStage[] = [
  {
    id: 'aspirancy',
    stepNumber: '01',
    title: 'Aspirancy',
    length: 'Varies',
    summary: 'Invitation and friendship. You get to know the Sisters and keep in touch with a contact community while you continue studying or working.',
    cta: 'Learn about Aspirancy →',
    imageKey: 'aspirancy',
    alt: 'Aspirants of the congregation',
    standfirst: 'The stage of invitation and contact, with no commitment asked of you.',
    paragraphs: [
      'Aspirancy is the stage of invitation and contact with interested young women who have some sense of being called by God to missionary life among the poor. If you are still studying, you are encouraged to continue, while keeping up correspondence with a contact community and visiting when you can.',
      'In practice this means letters, phone calls, and an occasional weekend with Sisters near you. You keep your job or your course. Nobody asks you to decide anything.',
      'Most women stay at this stage for a year or more. It is the right place to be while you are still saying the words out loud for the first time.',
    ],
  },
  {
    id: 'pre-candidacy',
    stepNumber: '02',
    title: 'Pre-candidacy',
    length: 'About 1 year',
    summary: 'A year of serious discernment. You work or study, and visit the convent on the last weekend of each month to learn our way of life.',
    cta: 'Learn about Pre-candidacy →',
    imageKey: 'preCandidacy',
    alt: 'Pre-candidacy community weekend',
    standfirst: 'A year of serious discernment while you continue to work or study.',
    paragraphs: [
      'This period provides the opportunity for serious discernment and it lasts for one year. You must be either working or studying, while visiting our convent on the last weekend of every month to learn more about our way of life.',
      'Those monthly weekends are ordinary rather than ceremonial. Prayer, meals, conversation, and the chance to ask the questions that only occur to you once you are inside the house.',
      'By the end of the year, you and the Sisters accompanying you should both have a clearer sense of whether to continue.',
    ],
  },
  {
    id: 'candidacy',
    stepNumber: '03',
    title: 'Candidacy',
    length: 'About 2 years',
    summary: 'Formal entrance into the life of the congregation, deepening your knowledge of Christian life while discerning where God is leading.',
    cta: 'Learn about Candidacy →',
    imageKey: 'candidacy',
    alt: 'Candidates in formation',
    standfirst: 'Formal entrance into the life of the congregation, for about two years.',
    paragraphs: [
      'This is the time of formal entrance into the life of our congregation and it lasts for two years in our candidacy house. It is a time of deepening your knowledge of Christian life while discerning where God is leading.',
      'Candidates live together, study scripture and the vows, and take part in an apostolate with real responsibility.',
      'This is also where community life stops being an idea. Cooking rotas, shared money, other people’s habits. Many women say it is the stage that taught them the most.',
    ],
  },
  {
    id: 'novitiate',
    stepNumber: '04',
    title: 'Novitiate',
    length: 'About 2 years',
    summary: 'Two years of intense formation in prayer, study, community living and apostolate, in view of first profession.',
    cta: 'Learn about the Novitiate →',
    imageKey: 'novitiate',
    alt: 'Novices at prayer and study',
    standfirst: 'Two years of intense formation, in view of first profession.',
    paragraphs: [
      'The novitiate is two years of intense formation in prayer, study, community living and apostolate, sharing in the daily life and work of the Sisters, all in view of making first profession.',
      'There is more silence here than at any other stage, and more study of the congregation’s history and constitutions.',
      'It is also the stage women most often describe as a relief. For two years, prayer is not something squeezed between other obligations.',
    ],
  },
  {
    id: 'first-profession',
    stepNumber: '05',
    title: 'First profession',
    length: 'Renewed yearly',
    summary: 'Vows of poverty, consecrated celibacy and obedience admit you to the life and work of the congregation, serving in an apostolate.',
    cta: 'Learn about first vows →',
    imageKey: 'firstProfession',
    alt: 'First profession celebration',
    standfirst: 'First vows, renewed yearly, and your first mission.',
    paragraphs: [
      'Vows of poverty, consecrated celibacy and obedience admit you to the life and work of the congregation. You continue to serve God’s people in different apostolates, living with other Sisters in community while deepening your personal relationship with God.',
      'Vows at this stage are temporary and renewed. You may be sent to study, to teach, to nurse, or to another country.',
      'Nothing here is irreversible. Women do leave at this stage, and they leave with the congregation’s blessing.',
    ],
  },
  {
    id: 'final-profession',
    stepNumber: '06',
    title: 'Final profession',
    length: 'The lifelong yes',
    summary: 'Made between five and nine years after first profession, once you have gained real experience of missionary religious life.',
    cta: 'Learn about Final Profession →',
    imageKey: 'finalProfession',
    alt: 'Final profession celebration',
    standfirst: 'The lifelong yes, made once you have real experience of the life.',
    paragraphs: [
      'Final profession is made between five and nine years after first profession, when you have gained experience of missionary religious life.',
      'By this point you have lived in more than one community, worked in at least one apostolate, and had years of accompaniment.',
      'It is a perpetual commitment, and it is made with open eyes rather than in the first flush of enthusiasm. That is exactly why the congregation waits.',
    ],
  },
  {
    id: 'ongoing-formation',
    stepNumber: '07',
    title: 'Ongoing formation',
    length: 'For life',
    summary: 'Study, renewal and accompaniment continue. Formation never really finishes.',
    cta: 'Learn about ongoing formation →',
    imageKey: 'ongoing',
    alt: 'Ongoing formation and mission renewal',
    standfirst: 'Formation never really finishes.',
    paragraphs: [
      'Sisters continue to serve God’s people in different apostolates, living in community while deepening their personal relationship with God. Study, renewal and accompaniment continue for life.',
      'In practice this includes further qualifications, sabbaticals, retreats, and periods of renewal after long or difficult missions.',
      'A Sister of fifty years is still being formed. It is one of the quieter promises the congregation makes to you.',
    ],
  },
];

export interface PrayerResource {
  id: string;
  title: string;
  standfirst: string;
  imageKey: string;
  alt: string;
  paragraphs: string[];
}

export const PRAYER_RESOURCES: PrayerResource[] = [
  {
    id: 'undecided',
    title: 'A prayer for the undecided',
    standfirst: 'For the days when you cannot tell hope from wishful thinking.',
    imageKey: 'novitiate',
    alt: 'Sisters at prayer',
    paragraphs: [
      'Lord, I do not know what you are asking of me. I am not sure I want to know yet. Keep me honest, keep me unhurried, and do not let me settle for a life I chose only because it was easier to explain.',
      'Pray it slowly, once, and then sit for five minutes without adding anything.',
      'Stand in text. The congregation’s own prayers for discernment will replace this.',
    ],
  },
  {
    id: 'silence',
    title: 'Fifteen minutes of silence: how to start',
    standfirst: 'A practical way in, for someone who has never prayed in silence before.',
    imageKey: 'charism',
    alt: 'A quiet moment',
    paragraphs: [
      'Choose a time you can keep for a week. Early is easier than late. Put the phone in another room.',
      'Begin by naming one thing you are grateful for and one thing you are anxious about. Give both to God. Then sit without trying to produce good thoughts.',
      'When your mind wanders, bring it back gently to a single phrase: "Here I am, Lord."',
    ],
  },
  {
    id: 'examen',
    title: 'The evening examen for discernment',
    standfirst: 'Five questions to ask at the end of each day.',
    imageKey: 'aspirancy',
    alt: 'Reflecting at dusk',
    paragraphs: [
      'Where did I feel most alive today? Where did I feel drained or distant? When was I most generous? When was I most fearful? What is God asking of me tomorrow?',
      'Discernment happens not in sudden visions, but in the recurring patterns of peace and restlessness.',
      'Notice what consistently brings life to your soul over weeks and months.',
    ],
  },
];
