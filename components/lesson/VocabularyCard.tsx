import React from 'react';
import styles from './Lesson.module.scss';
import { VocabularyWord } from '../../types';

interface Props {
  words: VocabularyWord[];
  onNext: () => void;
}

export const VocabularyCard: React.FC<Props> = ({ words, onNext }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Новые слова</h2>
      <p className={styles.text}>Давайте выучим несколько новых слов, которые пригодятся в этой теме.</p>
      
      <div className={styles.vocabGrid}>
        {words.map(word => (
          <div key={word.id} className={styles.vocabItem}>
            <div className={styles.en}>{word.english}</div>
            <div className={styles.trans}>{word.transcription}</div>
            <div className={styles.ru}>{word.russian}</div>
            <div className={styles.ex}>{word.example}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '24px', textAlign: 'right' }}>
        <button className={styles.button} onClick={onNext}>Запомнил, идем дальше</button>
      </div>
    </div>
  );
};
