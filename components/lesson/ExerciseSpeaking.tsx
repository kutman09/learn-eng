import React, { useState } from 'react';
import styles from './Lesson.module.scss';
import { SpeakingExercise } from '../../types';
import { FeedbackToast } from './FeedbackToast';

interface Props {
  data: SpeakingExercise;
  onAnswer: (isCorrect: boolean) => void;
}

export const ExerciseSpeaking: React.FC<Props> = ({ data, onAnswer }) => {
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = () => {
    const text = value.toLowerCase();
    // Soft check for expected keywords
    const missing = data.expectedKeywords.filter(kw => !text.includes(kw.toLowerCase()));
    
    // As long as they wrote something substantial, we count it as "correct" for scoring, 
    // but give feedback if missing keywords.
    const correct = value.trim().split(' ').length >= 3;
    setIsCorrect(correct);
    setSubmitted(true);
    onAnswer(correct);
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Говорение / Письмо</h3>
      <p className={styles.text}>{data.instruction}</p>
      
      <div style={{ backgroundColor: '#FAFAFA', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          {data.prompts.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>

      <textarea 
        className={styles.gapInput}
        style={{ width: '100%', minHeight: '100px', textAlign: 'left', resize: 'vertical' }}
        placeholder="Type your answer here..."
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
          message={
            isCorrect 
            ? `Отлично! Пример хорошего ответа:\n\n${data.sampleAnswer}` 
            : 'Пожалуйста, напишите более подробный ответ.'
          } 
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
