import { toBeTopic } from './to-be';
import { presentSimpleTopic } from './present-simple';
import { presentContinuousTopic } from './present-continuous';
import { pastSimpleTopic } from './past-simple';
import { articlesTopic } from './articles';
import { foodTopic } from './food-countable-uncountable';

export const topicsList = [
  toBeTopic,
  presentSimpleTopic,
  presentContinuousTopic,
  pastSimpleTopic,
  articlesTopic,
  foodTopic
];

export const getTopicBySlug = (slug: string) => {
  return topicsList.find(t => t.slug === slug);
};
