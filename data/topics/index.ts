import { toBeTopic } from './to-be';
import { presentSimpleTopic } from './present-simple';
import { articlesTopic } from './articles';
import { foodTopic } from './food-countable-uncountable';

export const topicsList = [
  toBeTopic,
  presentSimpleTopic,
  articlesTopic,
  foodTopic
];

export const getTopicBySlug = (slug: string) => {
  return topicsList.find(t => t.slug === slug);
};
