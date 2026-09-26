import { toBeTopic } from './to-be';

import { presentSimpleTopic } from './present-simple';
import { articlesTopic } from './articles';

export const topicsList = [
  toBeTopic,
  presentSimpleTopic,
  articlesTopic
];

export const getTopicBySlug = (slug: string) => {
  return topicsList.find(t => t.slug === slug);
};
