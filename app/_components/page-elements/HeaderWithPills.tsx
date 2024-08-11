'use client';

import styles from './HeaderWithPills.module.css';

import React from 'react';
import type { Pill } from '@/app/_hooks/page-elements/useHeaderWithPills';

export const HeaderWithPills = ({
  title,
  pills,
  activePill,
  setActivePill,
}: HeaderWithPillsProps) => {
  return (
    <header>
      <h1 className='page-title'>{title}</h1>
      <ul className={styles['pill-container']}>
        {pills.map((pill) => (
          <li
            key={pill.key}
            onClick={() => setActivePill(pill.key)}
            className={`${styles.pill} ${
              activePill === pill.key ? styles['active-pill'] : ''
            }`}
          >
            {pill.label}
          </li>
        ))}
      </ul>
    </header>
  );
};

interface HeaderWithPillsProps {
  title: string;
  pills: Pill[];
  activePill: string;
  setActivePill: React.Dispatch<React.SetStateAction<string>>;
}
