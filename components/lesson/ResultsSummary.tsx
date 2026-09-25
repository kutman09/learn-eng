import React from 'react';
import styles from './Lesson.module.scss';
import { ScoreBreakdown } from '../../lib/scoring';
import { TopicData } from '../../types';

interface Props {
  topic: TopicData;
  scoreBreakdown: ScoreBreakdown;
  onRetryTest: () => void;
  onGoHome: () => void;
}

export const ResultsSummary: React.FC<Props> = ({ topic, scoreBreakdown, onRetryTest, onGoHome }) => {
  const score = scoreBreakdown.totalScore;
  
  let resultText = '';
  let color = '#E57373'; // soft coral (default, low)
  
  if (score >= 90) {
    resultText = 'Отлично! Тема усвоена, можно двигаться дальше.';
    color = '#4CAF7D'; // soft green
  } else if (score >= 70) {
    resultText = 'Хорошо, но пара моментов ещё требует внимания.';
    color = '#FFB74D'; // peach/yellow
  } else if (score >= 50) {
    resultText = 'Тема понята частично, рекомендуем повторить теорию и попробовать снова.';
    color = '#FF8A65'; // coral
  } else {
    resultText = 'Стоит вернуться к теории — пока рано двигаться дальше.';
  }

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className={styles.card} style={{ textAlign: 'center' }}>
      <h2 className={styles.title}>Итоги: {topic.title}</h2>
      
      <div style={{ margin: '32px 0', display: 'flex', justifyContent: 'center' }}>
        <svg width="150" height="150" viewBox="0 0 150 150">
          <circle 
            cx="75" cy="75" r={radius} 
            stroke="#E0E0E0" strokeWidth="12" fill="none" 
          />
          <circle 
            cx="75" cy="75" r={radius} 
            stroke={color} strokeWidth="12" fill="none" 
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 75 75)"
            style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
          />
          <text x="75" y="85" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#333">
            {score}%
          </text>
        </svg>
      </div>

      <p className={styles.text} style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{resultText}</p>

      <div style={{ textAlign: 'left', margin: '32px 0', padding: '16px', backgroundColor: '#FAFAFA', borderRadius: '8px' }}>
        <h4 style={{ marginBottom: '16px' }}>Разбивка по подтемам:</h4>
        {Object.entries(scoreBreakdown.subtopics).map(([sub, perc]) => (
          <div key={sub} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ textTransform: 'capitalize' }}>{sub}</span>
            <strong>{perc}%</strong>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px' }}>
        <button className={styles.buttonOutline} onClick={onRetryTest}>
          Пройти тест заново
        </button>
        <button className={styles.button} onClick={onGoHome}>
          На главную
        </button>
      </div>
    </div>
  );
};
