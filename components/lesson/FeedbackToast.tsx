import React from 'react';
import styles from './Lesson.module.scss';
import { CheckCircle, XCircle } from 'lucide-react';

interface Props {
  isCorrect: boolean;
  message?: string;
}

export const FeedbackToast: React.FC<Props> = ({ isCorrect, message }) => {
  return (
    <div className={`${styles.feedback} ${isCorrect ? styles.correct : styles.incorrect}`}>
      {isCorrect ? <CheckCircle size={24} /> : <XCircle size={24} />}
      <div>
        <strong>{isCorrect ? 'Отлично!' : 'Ой, ошибка.'}</strong>
        {message && <div style={{ marginTop: '4px' }}>{message}</div>}
      </div>
    </div>
  );
};
