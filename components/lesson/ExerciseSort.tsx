import React, { useState } from 'react';
import styles from './Lesson.module.scss';
import { SortExercise } from '../../types';
import { FeedbackToast } from './FeedbackToast';

interface Props {
  data: SortExercise;
  onAnswer: (isCorrect: boolean) => void;
}

export const ExerciseSort: React.FC<Props> = ({ data, onAnswer }) => {
  const [sortedItems, setSortedItems] = useState<Record<string, string>>({}); // itemId -> category
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const toggleCategory = (word: string, category: string) => {
    if (submitted && isCorrect) return;
    setSubmitted(false);
    setSortedItems(prev => ({ ...prev, [word]: category }));
  };

  const checkAnswer = () => {
    let correct = true;
    for (const item of data.items) {
      if (sortedItems[item.word] !== item.category) {
        correct = false;
        break;
      }
    }
    setIsCorrect(correct);
    setSubmitted(true);
    onAnswer(correct);
  };

  const isAllSorted = data.items.length > 0 && data.items.every(item => sortedItems[item.word]);

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Сортировка</h3>
      <p className={styles.text}>{data.instruction}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
        {data.items.map((item, idx) => {
          const cat = sortedItems[item.word];
          let bgColor = cat ? '#d0f0c0' : '#f0f0f0';
          let border = cat ? '2px solid #7FC8A9' : '2px solid transparent';
          
          if (submitted && !isCorrect && cat && cat !== item.category) {
             bgColor = '#ffcccb';
             border = '2px solid #E57373';
          }
          if (submitted && isCorrect) {
             bgColor = '#d0f0c0';
             border = '2px solid #4CAF7D';
          }

          return (
            <div key={idx} style={{ padding: '8px 12px', background: bgColor, borderRadius: '8px', border, cursor: 'default' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>{item.word}</div>
              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {data.categories.map(c => (
                  <button 
                    key={c}
                    onClick={() => toggleCategory(item.word, c)}
                    style={{ 
                      padding: '4px 8px', 
                      fontSize: '0.8rem', 
                      borderRadius: '4px',
                      background: cat === c ? '#7FC8A9' : '#fff',
                      color: cat === c ? '#fff' : '#333',
                      border: '1px solid #ccc',
                      cursor: 'pointer'
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {submitted && (
        <FeedbackToast 
          isCorrect={isCorrect} 
          message={!isCorrect ? 'Есть ошибки. Попробуйте ещё раз!' : 'Всё верно!'} 
        />
      )}

      <div style={{ marginTop: '24px', textAlign: 'right' }}>
        {(!submitted || !isCorrect) && (
          <button 
            className={styles.button} 
            onClick={checkAnswer} 
            disabled={!isAllSorted}
          >
            Проверить
          </button>
        )}
      </div>
    </div>
  );
};
