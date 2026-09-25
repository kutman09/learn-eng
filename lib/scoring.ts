import { ScoringConfig } from '../data/scoring';
import { UserAnswer, Exercise } from '../types';

export interface ScoreBreakdown {
  totalScore: number; // 0 to 100
  subtopics: Record<string, number>; // "affirmative": 100
  categoryScores: Record<string, number>;
}

export function calculateScore(
  answers: Record<string, UserAnswer>,
  exercises: Exercise[],
  config: ScoringConfig
): ScoreBreakdown {
  const categoryStats: Record<string, { correct: number; total: number }> = {
    guided: { correct: 0, total: 0 },
    free: { correct: 0, total: 0 },
    test: { correct: 0, total: 0 }
  };

  const subtopicStats: Record<string, { correct: number; total: number }> = {};

  exercises.forEach(ex => {
    // Category tracking
    if (categoryStats[ex.category]) {
      categoryStats[ex.category].total += 1;
      if (answers[ex.id]?.isCorrect) {
        categoryStats[ex.category].correct += 1;
      }
    }

    // Subtopic tracking
    if (ex.subtopicTag) {
      if (!subtopicStats[ex.subtopicTag]) {
        subtopicStats[ex.subtopicTag] = { correct: 0, total: 0 };
      }
      subtopicStats[ex.subtopicTag].total += 1;
      if (answers[ex.id]?.isCorrect) {
        subtopicStats[ex.subtopicTag].correct += 1;
      }
    }
  });

  // Calculate percentage for each category
  const categoryScores: Record<string, number> = {};
  let totalWeightedScore = 0;

  for (const [cat, stats] of Object.entries(categoryStats)) {
    if (stats.total > 0) {
      const percentage = (stats.correct / stats.total) * 100;
      categoryScores[cat] = percentage;
      
      const weight = config[cat as keyof ScoringConfig] || 0;
      totalWeightedScore += percentage * weight;
    } else {
      categoryScores[cat] = 0;
    }
  }

  // Calculate percentage for each subtopic
  const subtopics: Record<string, number> = {};
  for (const [sub, stats] of Object.entries(subtopicStats)) {
    if (stats.total > 0) {
      subtopics[sub] = Math.round((stats.correct / stats.total) * 100);
    }
  }

  return {
    totalScore: Math.round(totalWeightedScore),
    subtopics,
    categoryScores
  };
}
