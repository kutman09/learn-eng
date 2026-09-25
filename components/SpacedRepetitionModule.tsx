'use client';

import React, { useEffect, useState } from 'react';
import { loadCards, SpacedRepetitionCard } from '../lib/progress';

export const SpacedRepetitionModule: React.FC = () => {
  const [dueCards, setDueCards] = useState<SpacedRepetitionCard[]>([]);

  useEffect(() => {
    const allCards = loadCards();
    const today = new Date().toISOString().split('T')[0];
    
    const due = allCards.filter(c => c.nextReviewDate <= today);
    setDueCards(due);
  }, []);

  if (dueCards.length === 0) {
    return null; // Don't show if nothing to review
  }

  return (
    <div style={{
      backgroundColor: '#E8F0FE',
      padding: '24px',
      borderRadius: '16px',
      marginBottom: '32px',
      border: '1px solid #cce0ff'
    }}>
      <h3 style={{ marginBottom: '12px' }}>Время повторить! 🧠</h3>
      <p style={{ marginBottom: '16px', color: '#555' }}>
        У вас {dueCards.length} карточек для повторения.
      </p>
      
      {/* 
        For this MVP, we just list them or show a simplified version. 
        In a real app, this would open a modal with flashcards.
      */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {dueCards.slice(0, 3).map(card => (
          <div key={card.id} style={{ 
            backgroundColor: '#fff', 
            padding: '8px 12px', 
            borderRadius: '8px',
            fontSize: '0.9rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            {card.type === 'vocabulary' ? (
              <span><strong>{card.content.en}</strong> - {card.content.ru}</span>
            ) : (
              <span>Rule from: {card.topicSlug}</span>
            )}
          </div>
        ))}
        {dueCards.length > 3 && (
          <div style={{ padding: '8px 12px', color: '#666' }}>
            и ещё {dueCards.length - 3}...
          </div>
        )}
      </div>
    </div>
  );
};
