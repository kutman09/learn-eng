import React from 'react';
import styles from './Lesson.module.scss';
import { TheoryBlockData } from '../../types';

interface Props {
  data: TheoryBlockData;
  onNext: () => void;
}

export const TheoryBlock: React.FC<Props> = ({ data, onNext }) => {
  // Simple markdown-like replacement for bold
  const renderContent = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      // Handle simple newlines as br or paragraphs
      return <span key={index}>{part.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i !== part.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}</span>;
    });
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{data.title}</h2>
      <div className={styles.markdown}>
        <p>{renderContent(data.content)}</p>
      </div>
      <div style={{ marginTop: '24px', textAlign: 'right' }}>
        <button className={styles.button} onClick={onNext}>Понятно, дальше</button>
      </div>
    </div>
  );
};
