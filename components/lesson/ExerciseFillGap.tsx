import React, { useState } from 'react';
import styles from './Lesson.module.scss';
import { FillGapExercise } from '../../types';
import { FeedbackToast } from './FeedbackToast';

interface Props {
  data: FillGapExercise;
  onAnswer: (isCorrect: boolean) => void;
}

export const ExerciseFillGap: React.FC<Props> = ({ data, onAnswer }) => {
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = () => {
    const correct = value.trim().toLowerCase() === data.correctAnswer.toLowerCase();
    setIsCorrect(correct);
    setSubmitted(true);
    onAnswer(correct);
  };

  const handleNext = () => {
    // Parent will move to next exercise, reset state if needed
    setSubmitted(false);
    setValue('');
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Тренировка</h3>
      <p className={styles.text}>{data.instruction}</p>
      
      <div style={{ fontSize: '1.2rem', margin: '24px 0' }}>
        {data.textBefore}
        <input 
          type="text"
          className={`${styles.gapInput} ${submitted ? (isCorrect ? styles.correct : styles.incorrect) : ''}`}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setSubmitted(false);
          }}
          disabled={submitted && isCorrect}
        />
        {data.textAfter}
      </div>

      {submitted && (
        <FeedbackToast 
          isCorrect={isCorrect} 
          message={!isCorrect ? `Правильный ответ: ${data.correctAnswer}` : undefined} 
        />
      )}

      <div style={{ marginTop: '24px', textAlign: 'right' }}>
        {(!submitted || !isCorrect) ? (
          <button className={styles.button} onClick={checkAnswer} disabled={!value}>Проверить</button>
        ) : null}
      </div>
    </div>
  );
};
