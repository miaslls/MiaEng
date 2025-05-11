'use client';

import styles from './FashionFlashcardsPage.module.css';

import React, { useEffect, useMemo, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';

import {
  fashionFlashcards,
  allFashionFlashcards,
  fashionCover,
  fashionCategories,
} from '@/app/_data/games/fashion-flashcards';

export default function FashionFlashcardsPage() {
  type Category = (typeof fashionCategories)[number] | 'all';

  const pillData: Pill[] = [
    { key: 'all', label: 'show all' },
    ...fashionCategories.map((categ) => ({
      key: categ.replace(' ', '-'),
      label: categ,
    })),
  ];

  const [currentFlashcard, setCurrentFlashcard] = useState<DisplayFlashcard>({
    ...fashionCover,
    index: null,
  });

  const [activePill, setActivePill] = useState<Category>('all');

  const [optionsState, setOptionsState] = useState<OptionsState>({
    hideImage: false,
    hideWord: false,
    random: false,
  });

  const currentArray = useMemo(
    () =>
      activePill === 'all'
        ? allFashionFlashcards
        : fashionFlashcards[activePill],
    [activePill],
  );

  const options: Option[] = [
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

  const buttonLabel = useMemo(() => {
    const flashcardKey = currentFlashcard.key;
    const flashcardLabel = currentFlashcard.label;
    let iconKey: string;

    if (flashcardLabel && !optionsState.hideWord) return flashcardLabel;

    if (!flashcardLabel && !flashcardKey) iconKey = 'play';
    else if (flashcardKey === 'restart') iconKey = 'rewind';
    else iconKey = 'crossed-eye';

    return (
      <div className='icon-container'>
        <i className={`fi fi-rs-${iconKey}`}></i>
      </div>
    );
  }, [currentFlashcard, optionsState.hideWord]);

  const handleToggleOption = (option: Option) => {
    setOptionsState((prev) => {
      const updatedOptions: Partial<OptionsState> = {};
      if (option.key === 'hideImage' && !prev.hideImage) {
        updatedOptions.hideWord = false;
      }

      if (option.key === 'hideWord' && !prev.hideWord) {
        updatedOptions.hideImage = false;
      }

      updatedOptions[option.key] = !prev[option.key];

      return { ...prev, ...updatedOptions };
    });
  };

  const handleClickButton = () => {
    const currentIndex = currentFlashcard.index;
    let nextIndex: number;

    if (optionsState.random) {
      const randomIndex = Math.floor(Math.random() * currentArray.length);
      nextIndex =
        randomIndex !== currentIndex
          ? randomIndex
          : (randomIndex + 1) % currentArray.length;
    } else {
      if (currentIndex === currentArray.length - 1) {
        setCurrentFlashcard({ ...fashionCover, index: null, key: 'restart' });
        return;
      }

      nextIndex =
        currentIndex === null ? 0 : (currentIndex + 1) % currentArray.length;
    }

    setCurrentFlashcard({ ...currentArray[nextIndex], index: nextIndex });
  };

  useEffect(() => {
    if (currentFlashcard.index !== null) {
      setCurrentFlashcard({ ...currentArray[0], index: 0 });
    }
  }, [currentArray, currentFlashcard.index]);

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
              onClick={() => setActivePill(pill.key as Category)}
            >
              {pill.label}
            </li>
          ))}
        </ul>
      </header>

      <main className={styles['main-container']}>
        <div className={styles['options-container']}>
          {options.map((option) => (
            <div
              key={option.key}
              className={styles['option']}
              onClick={() => handleToggleOption(option)}
            >
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
          <Image
            alt=''
            width={336}
            height={336}
            className={`${styles['flashcard-image']} ${optionsState.hideImage ? styles['opacity-50'] : ''}`}
            src={currentFlashcard.image}
          />
          <div
            className={`${styles['image-overlay']} ${styles['image-overlay--colorize']}`}
          ></div>
          {optionsState.hideImage && (
            <div
              className={`${styles['image-overlay']} ${styles['image-overlay--hide']}`}
            >
              <div className='large-icon'>
                <i className='fi fi-rs-crossed-eye'></i>
              </div>
            </div>
          )}
        </figure>

        <button
          className={styles['flashcard-button']}
          onClick={handleClickButton}
        >
          {buttonLabel}
        </button>
      </main>
    </div>
  );
}

export interface Flashcard {
  key: string | null;
  label: string | null;
  image: StaticImageData;
}

export interface DisplayFlashcard extends Flashcard {
  index: number | null;
}

type Pill = { key: string; label: string };

type Option = {
  key: keyof OptionsState;
  label: string;
  isChecked: boolean;
};

type OptionsState = {
  hideImage: boolean;
  hideWord: boolean;
  random: boolean;
};
