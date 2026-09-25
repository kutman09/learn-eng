import React, { useState, useEffect } from 'react';
import styles from './Lesson.module.scss';
import { SentenceBuilderExercise } from '../../types';
import { FeedbackToast } from './FeedbackToast';

interface Props {
  data: SentenceBuilderExercise;
  onAnswer: (isCorrect: boolean) => void;
}

export const ExerciseSentenceBuilder: React.FC<Props> = ({ data, onAnswer }) => {
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<number[]>([]); // indexes in shuffledWords
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setShuffledWords(data.words.slice().sort(() => Math.random() - 0.5));
  }, [data]);

  const toggleWord = (index: number) => {
    if (submitted && isCorrect) return;
    setSubmitted(false);
    
    if (selectedWords.includes(index)) {
      setSelectedWords(prev => prev.filter(i => i !== index));
    } else {
      setSelectedWords(prev => [...prev, index]);
    }
  };

  const checkAnswer = () => {
    const built = selectedWords.map(i => shuffledWords[i]).join(' ');
    const correct = built === data.correctSentence;
    setIsCorrect(correct);
    setSubmitted(true);
    onAnswer(correct);
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Собери предложение</h3>
      <p className={styles.text}>{data.instruction}</p>
      
      <div className={styles.sentenceDropzone}>
        {selectedWords.map(index => (
          <div 
            key={`s-${index}`} 
            className={styles.wordChip}
            onClick={() => toggleWord(index)}
          >
            {shuffledWords[index]}
          </div>
        ))}
      </div>

      <div className={styles.wordBank}>
        {shuffledWords.map((word, index) => (
          <div 
            key={`w-${index}`} 
            className={`${styles.wordChip} ${selectedWords.includes(index) ? styles.used : ''}`}
            onClick={() => toggleWord(index)}
          >
            {word}
          </div>
        ))}
      </div>

      {submitted && (
        <FeedbackToast 
          isCorrect={isCorrect} 
          message={!isCorrect ? `Правильный ответ: ${data.correctSentence}` : undefined} 
        />
      )}

      <div style={{ marginTop: '24px', textAlign: 'right' }}>
        {(!submitted || !isCorrect) ? (
          <button 
            className={styles.button} 
            onClick={checkAnswer} 
            disabled={selectedWords.length === 0}
          >
            Проверить
          </button>
        ) : null}
      </div>
    </div>
  );
};
