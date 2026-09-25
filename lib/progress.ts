import { UserAnswer } from '../types';
import { ScoreBreakdown } from './scoring';

export interface TopicProgress {
  slug: string;
  completedBlocks: string[]; // IDs of completed theory blocks or exercises
  answers: Record<string, UserAnswer>;
  lastScore?: ScoreBreakdown;
  lastAttemptDate?: string;
  history: { score: number; date: string }[];
}

export interface SpacedRepetitionCard {
  id: string; // exercise ID or vocabulary ID
  topicSlug: string;
  type: 'vocabulary' | 'rule';
  content: any; // Simplified payload for rendering
  nextReviewDate: string;
  intervalDays: number;
}

const PROGRESS_KEY = 'learn_eng_progress';
const CARDS_KEY = 'learn_eng_cards';

export const loadProgress = (slug: string): TopicProgress | null => {
  if (typeof window === 'undefined') return null;
  const data = localStorage.getItem(`${PROGRESS_KEY}_${slug}`);
  return data ? JSON.parse(data) : null;
};

export const saveProgress = (slug: string, progress: TopicProgress) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`${PROGRESS_KEY}_${slug}`, JSON.stringify(progress));
};

export const loadCards = (): SpacedRepetitionCard[] => {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(CARDS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveCards = (cards: SpacedRepetitionCard[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CARDS_KEY, JSON.stringify(cards));
};

export const addCardsForReview = (newCards: SpacedRepetitionCard[]) => {
  const existing = loadCards();
  const merged = [...existing];
  
  newCards.forEach(nc => {
    const idx = merged.findIndex(c => c.id === nc.id);
    if (idx >= 0) {
      merged[idx] = nc;
    } else {
      merged.push(nc);
    }
  });

  saveCards(merged);
};
