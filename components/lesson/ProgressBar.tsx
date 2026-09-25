import React from 'react';
import styles from './Lesson.module.scss';

interface Props {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<Props> = ({ current, total }) => {
  const percentage = total === 0 ? 0 : (current / total) * 100;
  
  return (
    <div className={styles.progressBar}>
      <div className={styles.fill} style={{ width: `${percentage}%` }}></div>
    </div>
  );
};
