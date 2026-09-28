export type ExerciseType = 'fill-gap' | 'multiple-choice' | 'matching' | 'sentence-builder' | 'translate' | 'sort' | 'error-correction' | 'speaking' | 'exit-ticket';
export type ExerciseCategory = 'warmup' | 'guided' | 'free' | 'test' | 'speaking' | 'exit-ticket';

export interface ExerciseBase {
  id: string;
  type: ExerciseType;
  category: ExerciseCategory;
  instruction: string;
  subtopicTag?: string;
}

export interface FillGapExercise extends ExerciseBase {
  type: 'fill-gap';
  textBefore: string;
  textAfter: string;
  correctAnswer: string;
  options: string[];
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

export interface SortExercise extends ExerciseBase {
  type: 'sort';
  categories: string[];
  items: { word: string; category: string }[];
}

export interface ErrorCorrectionExercise extends ExerciseBase {
  type: 'error-correction';
  wrongSentence: string;
  correctSentence: string;
  explanation: string;
}

export interface SpeakingExercise extends ExerciseBase {
  type: 'speaking';
  prompts: string[];
  expectedKeywords: string[];
  sampleAnswer: string;
}

export interface ExitTicketExercise extends ExerciseBase {
  type: 'exit-ticket';
  questions: string[];
}

export type Exercise = FillGapExercise | MultipleChoiceExercise | MatchingExercise | SentenceBuilderExercise | TranslateExercise | SortExercise | ErrorCorrectionExercise | SpeakingExercise | ExitTicketExercise;

export interface TheoryBlockData {
  id: string;
  title: string;
  content: string;
}

export interface VocabularyWord {
  id: string;
  english: string;
  russian: string;
  transcription: string;
  example: string;
  emoji?: string;
  tags?: string[]; // e.g. countable/uncountable
}

export interface TopicData {
  slug: string;
  title: string;
  description: string;
  isComingSoon?: boolean;
  goals?: string[];
  warmup: {
    context: string;
    dialogue?: { en: string; ru: string }[]; // Make dialogue optional for the new topic
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
