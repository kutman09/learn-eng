'use client';

import React, { useEffect, useState } from 'react';
import { topicsList } from '../data/topics';
import { TopicCard } from '../components/TopicCard';
import { SpacedRepetitionModule } from '../components/SpacedRepetitionModule';
import { loadProgress } from '../lib/progress';

export default function Home() {
  const [progressData, setProgressData] = useState<Record<string, number>>({});

  useEffect(() => {
    const data: Record<string, number> = {};
    topicsList.forEach(topic => {
      if (!topic.isComingSoon) {
        const prog = loadProgress(topic.slug);
        if (prog && prog.lastScore) {
          data[topic.slug] = prog.lastScore.totalScore;
        }
      }
    });
    setProgressData(data);
  }, []);

  return (
    <main className="container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <header style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#7FC8A9' }}>
          Английский с нуля
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>
          Шаг за шагом к свободному общению.
        </p>
      </header>

      <SpacedRepetitionModule />

      <h2 style={{ marginBottom: '24px' }}>Доступные темы</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
        {topicsList.map(topic => (
          <TopicCard 
            key={topic.slug}
            slug={topic.slug}
            title={topic.title}
            description={topic.description}
            isComingSoon={topic.isComingSoon}
            progressPercentage={progressData[topic.slug]}
          />
        ))}
      </div>
    </main>
  );
}
