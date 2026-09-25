import React, { useState, useEffect } from 'react';
import styles from './Lesson.module.scss';
import { MatchingExercise } from '../../types';
import { FeedbackToast } from './FeedbackToast';

interface Props {
  data: MatchingExercise;
  onAnswer: (isCorrect: boolean) => void;
}

export const ExerciseMatching: React.FC<Props> = ({ data, onAnswer }) => {
  const [leftItems, setLeftItems] = useState<{ id: number; text: string }[]>([]);
  const [rightItems, setRightItems] = useState<{ id: number; text: string }[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [errorPair, setErrorPair] = useState<{ l: number; r: number } | null>(null);

  useEffect(() => {
    // Shuffle logic for left and right
    const shuffle = (array: any[]) => array.slice().sort(() => Math.random() - 0.5);
    
    const l = data.pairs.map((p, i) => ({ id: i, text: p.left }));
    const r = data.pairs.map((p, i) => ({ id: i, text: p.right }));
    
    setLeftItems(shuffle(l));
    setRightItems(shuffle(r));
  }, [data]);

  useEffect(() => {
    if (selectedLeft !== null && selectedRight !== null) {
      if (selectedLeft === selectedRight) {
        // match
        setMatched(prev => [...prev, selectedLeft]);
        setSelectedLeft(null);
        setSelectedRight(null);
        if (matched.length + 1 === data.pairs.length) {
          onAnswer(true); // all matched
        }
      } else {
        // error
        setErrorPair({ l: selectedLeft, r: selectedRight });
        onAnswer(false);
        setTimeout(() => {
          setSelectedLeft(null);
          setSelectedRight(null);
          setErrorPair(null);
        }, 1000);
      }
    }
  }, [selectedLeft, selectedRight, data, matched, onAnswer]);

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Тренировка</h3>
      <p className={styles.text}>{data.instruction}</p>
      
      <div style={{ display: 'flex', gap: '24px', marginTop: '24px' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {leftItems.map(item => {
            const isMatched = matched.includes(item.id);
            const isSelected = selectedLeft === item.id;
            const isError = errorPair?.l === item.id;
            
            let btnClass = styles.optionBtn;
            if (isSelected) btnClass += ` ${styles.selected}`;
            if (isMatched) btnClass += ` ${styles.correct}`;
            if (isError) btnClass += ` ${styles.incorrect}`;

            return (
              <button 
                key={item.id} 
                className={btnClass}
                onClick={() => !isMatched && setSelectedLeft(isSelected ? null : item.id)}
                disabled={isMatched}
              >
                {item.text}
              </button>
            );
          })}
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {rightItems.map(item => {
            const isMatched = matched.includes(item.id);
            const isSelected = selectedRight === item.id;
            const isError = errorPair?.r === item.id;
            
            let btnClass = styles.optionBtn;
            if (isSelected) btnClass += ` ${styles.selected}`;
            if (isMatched) btnClass += ` ${styles.correct}`;
            if (isError) btnClass += ` ${styles.incorrect}`;

            return (
              <button 
                key={item.id} 
                className={btnClass}
                onClick={() => !isMatched && setSelectedRight(isSelected ? null : item.id)}
                disabled={isMatched}
              >
                {item.text}
              </button>
            );
          })}
        </div>
      </div>
      
      {matched.length === data.pairs.length && (
        <FeedbackToast isCorrect={true} message="Все пары найдены верно!" />
      )}
    </div>
  );
};
