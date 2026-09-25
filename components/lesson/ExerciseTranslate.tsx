import React, { useState } from 'react';
import styles from './Lesson.module.scss';
import { TranslateExercise } from '../../types';
import { FeedbackToast } from './FeedbackToast';

interface Props {
  data: TranslateExercise;
  onAnswer: (isCorrect: boolean) => void;
}

export const ExerciseTranslate: React.FC<Props> = ({ data, onAnswer }) => {
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = () => {
    // Basic normalization: remove punctuation and extra spaces, lowercase
    const normalize = (str: string) => 
      str.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").trim();

    const correct = normalize(value) === normalize(data.correctEnglish);
    setIsCorrect(correct);
    setSubmitted(true);
    onAnswer(correct);
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Перевод</h3>
      <p className={styles.text}>{data.instruction}</p>
      
      <div style={{ fontSize: '1.2rem', margin: '24px 0', fontWeight: 'bold' }}>
        {data.russian}
      </div>

      <input 
        type="text"
        className={`${styles.gapInput} ${submitted ? (isCorrect ? styles.correct : styles.incorrect) : ''}`}
        style={{ width: '100%', maxWidth: '400px', margin: '0 0 24px 0', textAlign: 'left' }}
        placeholder="Type in English..."
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
          message={!isCorrect ? `Правильный ответ: ${data.correctEnglish}` : undefined} 
        />
      )}

      <div style={{ marginTop: '24px', textAlign: 'right' }}>
        {(!submitted || !isCorrect) ? (
          <button className={styles.button} onClick={checkAnswer} disabled={!value.trim()}>Проверить</button>
        ) : null}
      </div>
    </div>
  );
};
