'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { getTopicBySlug } from '../../../data/topics';
import { scoringWeights } from '../../../data/scoring';
import { calculateScore, ScoreBreakdown } from '../../../lib/scoring';
import { loadProgress, saveProgress, TopicProgress, addCardsForReview } from '../../../lib/progress';

import { ProgressBar } from '../../../components/lesson/ProgressBar';
import { TheoryBlock } from '../../../components/lesson/TheoryBlock';
import { VocabularyCard } from '../../../components/lesson/VocabularyCard';
import { ExerciseFillGap } from '../../../components/lesson/ExerciseFillGap';
import { ExerciseMultipleChoice } from '../../../components/lesson/ExerciseMultipleChoice';
import { ExerciseMatching } from '../../../components/lesson/ExerciseMatching';
import { ExerciseSentenceBuilder } from '../../../components/lesson/ExerciseSentenceBuilder';
import { ExerciseTranslate } from '../../../components/lesson/ExerciseTranslate';
import { ResultsSummary } from '../../../components/lesson/ResultsSummary';
import { ExerciseSort } from '../../../components/lesson/ExerciseSort';
import { ExerciseErrorCorrection } from '../../../components/lesson/ExerciseErrorCorrection';
import { ExerciseSpeaking } from '../../../components/lesson/ExerciseSpeaking';
import { ExerciseExitTicket } from '../../../components/lesson/ExerciseExitTicket';
import { Exercise, UserAnswer } from '../../../types';

export default function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const topic = getTopicBySlug(resolvedParams.slug);

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, UserAnswer>>({});
  const [completedBlocks, setCompletedBlocks] = useState<string[]>([]);
  const [scoreBreakdown, setScoreBreakdown] = useState<ScoreBreakdown | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (topic) {
      const saved = loadProgress(topic.slug);
      if (saved) {
      }
    }
  }, [topic]);

  if (!topic) {
    return <div className="container" style={{ padding: '40px' }}>Тема не найдена</div>;
  }

  const sequence: any[] = [];
  
  if (topic.goals && topic.goals.length > 0) {
    sequence.push({ type: 'goals', data: topic.goals });
  }

  if (topic.warmup) {
    sequence.push({ type: 'warmup', data: topic.warmup });
  }

  topic.theory.forEach(t => sequence.push({ type: 'theory', data: t }));
  
  if (topic.vocabulary.length > 0) {
    sequence.push({ type: 'vocabulary', data: topic.vocabulary });
  }

  topic.exercises.forEach(ex => sequence.push({ type: 'exercise', data: ex }));

  const totalSteps = sequence.length;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      finishTopic();
    }
  };

  const handleAnswer = (exerciseId: string, isCorrect: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [exerciseId]: {
        exerciseId,
        isCorrect,
        attempts: (prev[exerciseId]?.attempts || 0) + 1
      }
    }));
  };

  const finishTopic = () => {
    const finalScore = calculateScore(answers, topic.exercises, scoringWeights);
    setScoreBreakdown(finalScore);

    const prevProgress = loadProgress(topic.slug);
    const newProgress: TopicProgress = {
      slug: topic.slug,
      completedBlocks: [],
      answers,
      lastScore: finalScore,
      lastAttemptDate: new Date().toISOString(),
      history: prevProgress ? [...prevProgress.history, { score: finalScore.totalScore, date: new Date().toISOString() }] : [{ score: finalScore.totalScore, date: new Date().toISOString() }]
    };

    saveProgress(topic.slug, newProgress);

    if (topic.vocabulary.length > 0) {
      const nextReview = new Date();
      nextReview.setDate(nextReview.getDate() + 1);
      
      const cards = topic.vocabulary.map(v => ({
        id: `vocab-${v.id}`,
        topicSlug: topic.slug,
        type: 'vocabulary' as const,
        content: { en: v.english, ru: v.russian },
        nextReviewDate: nextReview.toISOString().split('T')[0],
        intervalDays: 1
      }));
      addCardsForReview(cards);
    }
  };

  const renderStepContent = (step: any, index: number) => {
    if (step.type === 'goals') {
      return (
        <div style={{ backgroundColor: '#E8F0FE', padding: '24px', borderRadius: '16px', border: '1px solid #cce0ff' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '16px', color: '#1967D2' }}>Цели урока (Today I can...)</h2>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '1.1rem' }}>
            {step.data.map((g: string, i: number) => <li key={i} style={{ marginBottom: '8px' }}>{g}</li>)}
          </ul>
          <div style={{ textAlign: 'right' }}>
            <button 
              onClick={handleNext}
              style={{ backgroundColor: '#1967D2', color: 'white', padding: '12px 24px', borderRadius: '12px', fontWeight: 'bold' }}
            >
              Начать
            </button>
          </div>
        </div>
      );
    }

    if (step.type === 'warmup') {
      return (
        <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #E0E0E0' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '16px', color: '#333' }}>Введение</h2>
          <p style={{ marginBottom: '16px' }}>{step.data.context}</p>
          {step.data.dialogue && step.data.dialogue.length > 0 && (
            <div style={{ backgroundColor: '#FAFAFA', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
              {step.data.dialogue.map((d: any, i: number) => (
                <div key={i} style={{ marginBottom: '12px' }}>
                  <div style={{ fontWeight: 'bold' }}>{d.en}</div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>{d.ru}</div>
                </div>
              ))}
            </div>
          )}
          <div style={{ textAlign: 'right' }}>
            <button 
              onClick={handleNext}
              style={{ backgroundColor: '#7FC8A9', color: 'white', padding: '12px 24px', borderRadius: '12px', fontWeight: 'bold' }}
            >
              Дальше
            </button>
          </div>
        </div>
      );
    }

    if (step.type === 'theory') {
      return <TheoryBlock data={step.data} onNext={handleNext} />;
    }

    if (step.type === 'vocabulary') {
      return <VocabularyCard words={step.data} onNext={handleNext} />;
    }

    if (step.type === 'exercise') {
      const ex = step.data as Exercise;
      
      const onAnswerWrapper = (isCorrect: boolean) => {
        handleAnswer(ex.id, isCorrect);
      };

      let catTitle = '';
      if (ex.category === 'warmup') catTitle = 'Разминка (Warm-up)';
      else if (ex.category === 'guided') catTitle = 'Тренировка с подсказками';
      else if (ex.category === 'free') catTitle = 'Самостоятельная тренировка';
      else if (ex.category === 'test') catTitle = 'Финальный тест';
      else if (ex.category === 'speaking') catTitle = 'Говорение';
      else if (ex.category === 'exit-ticket') catTitle = 'Exit Ticket';

      return (
        <div>
          <div style={{ marginBottom: '16px', color: '#666', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {catTitle}
          </div>
          
          {ex.type === 'fill-gap' && <ExerciseFillGap key={`${ex.id}-${ex.category === 'test' ? retryCount : 0}`} data={ex} onAnswer={onAnswerWrapper} />}
          {ex.type === 'multiple-choice' && <ExerciseMultipleChoice key={`${ex.id}-${ex.category === 'test' ? retryCount : 0}`} data={ex} onAnswer={onAnswerWrapper} />}
          {ex.type === 'matching' && <ExerciseMatching key={`${ex.id}-${ex.category === 'test' ? retryCount : 0}`} data={ex} onAnswer={onAnswerWrapper} />}
          {ex.type === 'sentence-builder' && <ExerciseSentenceBuilder key={`${ex.id}-${ex.category === 'test' ? retryCount : 0}`} data={ex} onAnswer={onAnswerWrapper} />}
          {ex.type === 'translate' && <ExerciseTranslate key={`${ex.id}-${ex.category === 'test' ? retryCount : 0}`} data={ex} onAnswer={onAnswerWrapper} />}
          {ex.type === 'sort' && <ExerciseSort key={`${ex.id}-${ex.category === 'test' ? retryCount : 0}`} data={ex} onAnswer={onAnswerWrapper} />}
          {ex.type === 'error-correction' && <ExerciseErrorCorrection key={`${ex.id}-${ex.category === 'test' ? retryCount : 0}`} data={ex} onAnswer={onAnswerWrapper} />}
          {ex.type === 'speaking' && <ExerciseSpeaking key={`${ex.id}-${ex.category === 'test' ? retryCount : 0}`} data={ex} onAnswer={onAnswerWrapper} />}
          {ex.type === 'exit-ticket' && <ExerciseExitTicket key={`${ex.id}-${ex.category === 'test' ? retryCount : 0}`} data={ex} onAnswer={onAnswerWrapper} />}

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            {answers[ex.id] !== undefined && (
              <button 
                onClick={handleNext}
                style={{ backgroundColor: '#7FC8A9', color: 'white', padding: '12px 24px', borderRadius: '12px', fontWeight: 'bold' }}
              >
                {index === totalSteps - 1 ? 'Завершить' : 'Дальше'}
              </button>
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ marginBottom: '24px' }}>
        <button 
          onClick={() => router.push('/')}
          style={{ color: '#666', fontWeight: 'bold' }}
        >
          ← На главную
        </button>
      </div>

      {!scoreBreakdown && (
        <>
          <ProgressBar current={currentStep} total={totalSteps} />
          
          {currentStep > 0 && (
            <div style={{ marginTop: '12px', marginBottom: '24px' }}>
              <button 
                onClick={() => setCurrentStep(prev => prev - 1)}
                style={{ 
                  color: '#666', 
                  backgroundColor: '#f0f0f0', 
                  padding: '6px 12px', 
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
              >
                ← Назад
              </button>
            </div>
          )}
        </>
      )}

      {scoreBreakdown ? (
        <ResultsSummary 
          topic={topic} 
          scoreBreakdown={scoreBreakdown} 
          onRetryTest={() => {
            const testExercises = topic.exercises.filter(e => e.category === 'test');
            const newAnswers = { ...answers };
            testExercises.forEach(e => delete newAnswers[e.id]);
            setAnswers(newAnswers);
            setScoreBreakdown(null);
            setRetryCount(prev => prev + 1);
            
            const firstTestIndex = sequence.findIndex(s => s.type === 'exercise' && s.data.category === 'test');
            if (firstTestIndex !== -1) setCurrentStep(firstTestIndex);
            else setCurrentStep(0);
          }}
          onGoHome={() => router.push('/')}
          onGoToTheory={(subtopic) => {
            // Find the theory block index or vocabulary if it's vocabulary
            const targetIndex = sequence.findIndex(s => {
               if (subtopic === 'vocabulary' && s.type === 'vocabulary') return true;
               // Attempt to match subtopic tag to theory title keyword (very rough match)
               if (s.type === 'theory') {
                 const title = s.data.title.toLowerCase();
                 const sub = subtopic.toLowerCase();
                 // specific mappings for food topic:
                 if (sub === 'countable' && title.includes('countable')) return true;
                 if (sub === 'a-an' && title.includes('a / an')) return true;
                 if (sub === 'some-any' && (title.includes('some') || title.includes('any'))) return true;
                 if (sub === 'plural' && title.includes('plural')) return true;
               }
               return false;
            });
            if (targetIndex !== -1) {
              setScoreBreakdown(null);
              setCurrentStep(targetIndex);
            }
          }}
        />
      ) : (
        sequence.map((step, index) => (
          <div key={index} style={{ display: index === currentStep ? 'block' : 'none' }}>
            {renderStepContent(step, index)}
          </div>
        ))
      )}
    </div>
  );
}
