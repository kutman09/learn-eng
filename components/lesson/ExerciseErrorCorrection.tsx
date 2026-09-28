import React, { useState } from 'react';
import styles from './Lesson.module.scss';
import { ErrorCorrectionExercise } from '../../types';
import { FeedbackToast } from './FeedbackToast';

interface Props {
  data: ErrorCorrectionExercise;
  onAnswer: (isCorrect: boolean) => void;
}

export const ExerciseErrorCorrection: React.FC<Props> = ({ data, onAnswer }) => {
  const [value, setValue] = useState(data.wrongSentence);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = () => {
    const normalize = (str: string) => str.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").trim();
    const correct = normalize(value) === normalize(data.correctSentence);
    setIsCorrect(correct);
    setSubmitted(true);
    onAnswer(correct);
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Исправьте ошибку</h3>
      <p className={styles.text}>{data.instruction}</p>
      
      <div style={{ fontSize: '1.2rem', margin: '16px 0', fontWeight: 'bold', color: '#E57373', textDecoration: 'line-through' }}>
        {data.wrongSentence}
      </div>

      <input 
        type="text"
        className={`${styles.gapInput} ${submitted ? (isCorrect ? styles.correct : styles.incorrect) : ''}`}
        style={{ width: '100%', maxWidth: '400px', margin: '0 0 24px 0', textAlign: 'left' }}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setSubmitted(false);
        }}
        disabled={submitted && isCorrect}
      />

      {submitted && (
        <FeedbackToast 
          isCorrect={isCorrect} 
          message={isCorrect ? 'Верно!' : `Правильный ответ: ${data.correctSentence}\n\n${data.explanation}`} 
        />
      )}

      <div style={{ marginTop: '24px', textAlign: 'right' }}>
        {(!submitted || !isCorrect) && (
          <button className={styles.button} onClick={checkAnswer} disabled={!value.trim()}>Проверить</button>
        )}
      </div>
    </div>
  );
};
