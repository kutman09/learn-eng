import React, { useState } from 'react';
import styles from './Lesson.module.scss';
import { ExitTicketExercise } from '../../types';

interface Props {
  data: ExitTicketExercise;
  onAnswer: (isCorrect: boolean) => void;
}

export const ExerciseExitTicket: React.FC<Props> = ({ data, onAnswer }) => {
  const [answers, setAnswers] = useState<string[]>(Array(data.questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);

  const checkAnswer = () => {
    // Exit ticket is mostly self-reflection, any non-empty answer is accepted
    const isComplete = answers.every(a => a.trim().length > 0);
    setSubmitted(true);
    if (isComplete) {
      onAnswer(true);
    }
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Exit Ticket</h3>
      <p className={styles.text}>{data.instruction}</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
        {data.questions.map((q, i) => (
          <div key={i}>
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{q}</div>
            <input 
              type="text"
              className={styles.gapInput}
              style={{ width: '100%', textAlign: 'left' }}
              value={answers[i]}
              onChange={(e) => {
                const newAnswers = [...answers];
                newAnswers[i] = e.target.value;
                setAnswers(newAnswers);
                setSubmitted(false);
              }}
              disabled={submitted}
            />
          </div>
        ))}
      </div>

      {submitted && (
        <div style={{ marginTop: '16px', color: '#4CAF7D', fontWeight: 'bold' }}>
          Спасибо за ответы! Отличная работа.
        </div>
      )}

      <div style={{ marginTop: '24px', textAlign: 'right' }}>
        {!submitted && (
          <button className={styles.button} onClick={checkAnswer} disabled={answers.some(a => !a.trim())}>Готово</button>
        )}
      </div>
    </div>
  );
};
