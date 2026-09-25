import React, { useState } from 'react';
import styles from './Lesson.module.scss';
import { MultipleChoiceExercise } from '../../types';
import { FeedbackToast } from './FeedbackToast';

interface Props {
  data: MultipleChoiceExercise;
  onAnswer: (isCorrect: boolean) => void;
}

export const ExerciseMultipleChoice: React.FC<Props> = ({ data, onAnswer }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = () => {
    if (!selected) return;
    const correct = selected === data.correctAnswer;
    setIsCorrect(correct);
    setSubmitted(true);
    onAnswer(correct);
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Тренировка</h3>
      <p className={styles.text}>{data.instruction}</p>
      
      <div style={{ fontSize: '1.2rem', margin: '24px 0', fontWeight: 'bold' }}>
        {data.question}
      </div>

      <div className={styles.optionsList}>
        {data.options.map((opt, i) => {
          let btnClass = styles.optionBtn;
          if (selected === opt) btnClass += ` ${styles.selected}`;
          if (submitted) {
            if (opt === data.correctAnswer) btnClass += ` ${styles.correct}`;
            else if (selected === opt) btnClass += ` ${styles.incorrect}`;
          }

          return (
            <button 
              key={i} 
              className={btnClass}
              onClick={() => {
                if (!submitted || !isCorrect) {
                  setSelected(opt);
                  setSubmitted(false);
                }
              }}
              disabled={submitted && isCorrect}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {submitted && (
        <FeedbackToast 
          isCorrect={isCorrect} 
          message={!isCorrect ? `Правильный ответ: ${data.correctAnswer}` : undefined} 
        />
      )}

      <div style={{ marginTop: '24px', textAlign: 'right' }}>
        {(!submitted || !isCorrect) ? (
          <button className={styles.button} onClick={checkAnswer} disabled={!selected}>Проверить</button>
        ) : null}
      </div>
    </div>
  );
};
