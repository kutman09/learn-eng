import { toBeTopic } from './to-be';

export const topicsList = [
  toBeTopic,
  {
    slug: 'present-simple',
    title: 'Present Simple',
    description: 'Регулярные действия и привычки. (Скоро появится)',
    warmup: { context: '', dialogue: [] },
    theory: [],
    vocabulary: [],
    exercises: [],
    isComingSoon: true
  },
  {
    slug: 'articles',
    title: 'Артикли a/an и the',
    description: 'Определенность и неопределенность. (Скоро появится)',
    warmup: { context: '', dialogue: [] },
    theory: [],
    vocabulary: [],
    exercises: [],
    isComingSoon: true
  }
];

export const getTopicBySlug = (slug: string) => {
  return topicsList.find(t => t.slug === slug);
};
