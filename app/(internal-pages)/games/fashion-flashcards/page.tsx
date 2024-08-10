'use client';

import styles from './FashionFlashcardsPage.module.css';

import React, { useState } from 'react';
import Image from 'next/image';

import {
  type FashionFlashcards,
  type FashionCategory,
  type FashionItem,
  fashion,
  allFashion,
  fashionCover,
  fashionCategories,
} from '@/app/_data/games/fashion-flashcards';

export default function FashionFlashcardsPage() {
  const pillData = [
    { key: 'all', label: 'show all' },
    ...fashionCategories.map((categ) => ({
      key: categ.replace(' ', '-'),
      label: categ,
    })),
  ];

  const [currentFlashcard, setCurrentFlashcard] = useState(fashionCover);
  const [activePill, setActivePill] = useState<FashionCategory | 'all'>('all');
  const [optionsState, setOptionsState] = useState({
    hideImage: false,
    hideWord: false,
    random: false,
  });

  const options = [
    {
      key: 'hideImage',
      label: 'hide image',
      isChecked: optionsState.hideImage,
    },
    {
      key: 'hideWord',
      label: 'hide word',
      isChecked: optionsState.hideWord,
    },
    {
      key: 'random',
      label: 'random',
      isChecked: optionsState.random,
    },
  ];

  return (
    <div className={styles['page-container']}>
      <header className={styles['header-with-pills']}>
        <h1 className={styles.title}>Fashion Flashcards</h1>

        <ul className={styles['pill-container']}>
          {pillData.map((pill) => (
            <li
              key={pill.key}
              className={`${styles.pill} ${
                activePill === pill.key ? styles['active-pill'] : ''
              }`}
            >
              {pill.label}
            </li>
          ))}
        </ul>
      </header>

      <main className={styles['main-container']}>
        <div className={styles['options-container']}>
          {options.map((option) => (
            <div key={option.key} className={styles['option']}>
              <div className='small-icon'>
                <i
                  className={`fi fi-rr-${option.isChecked ? 'checkbox' : 'square'}`}
                ></i>
              </div>
              <span className={styles['option-label']}>{option.label}</span>
            </div>
          ))}
        </div>

        <figure className={styles['image-container']}>
          {optionsState.hideImage ? (
            <div className='large-icon'>
              <i className='fi fi-rs-crossed-eye'></i>
            </div>
          ) : (
            <Image
              alt=''
              width={336}
              height={336}
              className={styles['flashcard-image']}
              src={currentFlashcard.image}
            />
          )}
        </figure>

        <button className={styles['flashcard-button']}>
          {optionsState.hideWord ? (
            <div className='icon-container'>
              <i className='fi fi-rs-crossed-eye'></i>
            </div>
          ) : (
            (currentFlashcard.label ?? (
              <div className='icon-container'>
                <i className='fi fi-rs-play'></i>
              </div>
            ))
          )}
        </button>
      </main>
    </div>
  );
}
