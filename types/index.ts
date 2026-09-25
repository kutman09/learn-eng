export type ExerciseType = 'fill-gap' | 'multiple-choice' | 'matching' | 'sentence-builder' | 'translate';
export type ExerciseCategory = 'guided' | 'free' | 'test';

export interface ExerciseBase {
  id: string;
  type: ExerciseType;
  category: ExerciseCategory;
  instruction: string;
  subtopicTag?: string; // e.g. "affirmative", "negative", "vocabulary"
}

export interface FillGapExercise extends ExerciseBase {
  type: 'fill-gap';
  textBefore: string;
  textAfter: string;
  correctAnswer: string;
  options: string[]; // e.g., ["am", "is", "are"]
}

export interface MultipleChoiceExercise extends ExerciseBase {
  type: 'multiple-choice';
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface MatchingExercise extends ExerciseBase {
  type: 'matching';
  pairs: { left: string; right: string }[];
}

export interface SentenceBuilderExercise extends ExerciseBase {
  type: 'sentence-builder';
  words: string[];
  correctSentence: string;
}

export interface TranslateExercise extends ExerciseBase {
  type: 'translate';
  russian: string;
  correctEnglish: string;
}

export type Exercise = FillGapExercise | MultipleChoiceExercise | MatchingExercise | SentenceBuilderExercise | TranslateExercise;

export interface TheoryBlockData {
  id: string;
  title: string;
  content: string; // Markdown or plain text with basic tags
}

export interface VocabularyWord {
  id: string;
  english: string;
  russian: string;
  transcription: string;
  example: string;
}

export interface TopicData {
  slug: string;
  title: string;
  description: string;
  isComingSoon?: boolean;
  warmup: {
    context: string;
    dialogue: { en: string; ru: string }[];
  };
  theory: TheoryBlockData[];
  vocabulary: VocabularyWord[];
  exercises: Exercise[];
}

export interface UserAnswer {
  exerciseId: string;
  isCorrect: boolean;
  attempts: number;
}
