import React from 'react';
import styles from './Lesson.module.scss';
import { VocabularyWord } from '../../types';

interface Props {
  words: VocabularyWord[];
  onNext: () => void;
}

export const VocabularyCard: React.FC<Props> = ({ words, onNext }) => {
  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Новые слова</h2>
      <p className={styles.text}>Давайте выучим несколько новых слов, которые пригодятся в этой теме.</p>
      
      <div className={styles.vocabGrid} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {words.map(word => (
          <div key={word.id} className={styles.vocabItem} style={{ position: 'relative', display: 'block', textAlign: 'left' }}>
            <button 
              onClick={() => playAudio(word.english)}
              style={{ position: 'absolute', right: '12px', top: '12px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem', padding: '4px' }}
              title="Listen"
            >
              🔊
            </button>
            <div className={styles.en} style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              {word.emoji && <span style={{ marginRight: '8px' }}>{word.emoji}</span>}
              {word.english}
            </div>
            <div className={styles.trans} style={{ color: '#888', fontSize: '0.9rem', marginBottom: '4px' }}>{word.transcription}</div>
            <div className={styles.ru} style={{ color: '#555', marginBottom: '8px' }}>{word.russian}</div>
            <div className={styles.ex} style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#666' }}>{word.example}</div>
            {word.tags && word.tags.length > 0 && (
              <div style={{ marginTop: '12px', display: 'flex', gap: '4px' }}>
                {word.tags.map(tag => (
                  <span key={tag} style={{ background: '#E8F0FE', color: '#1967D2', fontSize: '0.75rem', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '24px', textAlign: 'right' }}>
        <button className={styles.button} onClick={onNext}>Запомнил, идем дальше</button>
      </div>
    </div>
  );
};
