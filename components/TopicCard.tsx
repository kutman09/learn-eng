import React from 'react';
import Link from 'next/link';

interface Props {
  slug: string;
  title: string;
  description: string;
  isComingSoon?: boolean;
  progressPercentage?: number;
}

export const TopicCard: React.FC<Props> = ({ slug, title, description, isComingSoon, progressPercentage }) => {
  return (
    <Link href={isComingSoon ? '#' : `/topics/${slug}`}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
        border: '1px solid #E0E0E0',
        opacity: isComingSoon ? 0.6 : 1,
        cursor: isComingSoon ? 'default' : 'pointer',
        transition: 'transform 0.2s',
        position: 'relative',
        display: 'block'
      }}>
        {progressPercentage !== undefined && (
          <div style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            backgroundColor: progressPercentage >= 90 ? '#4CAF7D' : '#FFB74D',
            color: '#fff',
            padding: '4px 8px',
            borderRadius: '12px',
            fontSize: '0.8rem',
            fontWeight: 'bold'
          }}>
            {progressPercentage}%
          </div>
        )}
        <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: '#333' }}>
          {title}
        </h3>
        <p style={{ color: '#666', fontSize: '0.95rem' }}>
          {description}
        </p>
      </div>
    </Link>
  );
};
