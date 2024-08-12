'use client';

import styles from './FlashcardsPage.module.css';

import React, { useEffect, useMemo, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';

import {
  type Pill,
  useHeaderWithPills,
} from '@hooks/page-elements/useHeaderWithPills';

export const FlashcardsPage = ({
  flashcardsDataObject,
  allFlashcardsArray,
  coverFlashcard,
  categories,
  flashcardType,
}: FlashcardsPageProps) => {
  const pillData: Pill[] = [
    ...categories.map((category) => ({
      key: category.replace(' ', '-'),
      label: category,
    })),
  ];

  const { HeaderWithPillsUi, activePill } = useHeaderWithPills({
    title: 'Fashion Flashcards',
    hasAllPill: true,
    pillData,
  });

  const [currentFlashcard, setCurrentFlashcard] = useState<DisplayFlashcard>({
    ...coverFlashcard,
    index: null,
  });

  const [optionsState, setOptionsState] = useState<OptionsState>({
    hideImage: false,
    hideWord: false,
    random: false,
  });

  const currentArray = useMemo(
    () =>
      activePill === 'all'
        ? allFlashcardsArray
        : flashcardsDataObject[activePill],
    [activePill],
  ) as Flashcard[];

  const options: Option[] = [
    {
      key: 'hideImage',
      label: 'hide image',
      isChecked: optionsState.hideImage,
    },
    {
      key: 'hideWord',
      label: `hide ${flashcardType}`,
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
        setCurrentFlashcard({ ...coverFlashcard, index: null, key: 'restart' });
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
  }, [currentArray]);

  return (
    <div className='page-container'>
      <HeaderWithPillsUi />
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
            className={`${styles['flashcard-image']} ${optionsState.hideImage ? 'opacity-50' : ''}`}
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
};

interface FlashcardsPageProps {
  flashcardsDataObject: Record<string, Flashcard[]>;
  allFlashcardsArray?: Flashcard[];
  coverFlashcard: Flashcard;
  categories: string[];
  flashcardType: string;
}

export interface Flashcard {
  key: string | null;
  label: string | null;
  image: StaticImageData;
}

export interface DisplayFlashcard extends Flashcard {
  index: number | null;
}

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
