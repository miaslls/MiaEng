'use client';

import styles from './VerbFlashcardsPage.module.css';

import * as React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import {
  type VerbFlashcards,
  type VerbForm,
  verbs,
} from '@/app/_data/verb-flashcards/verbs';
import {
  type ImageFlashcards,
  verbImages,
} from '@/app/_data/verb-flashcards/images';
import { verbBaseArray } from '@/app/_data/verb-flashcards/verbs/base';

type Pill = { form: VerbForm; label: string };

type CurrentVerb = {
  verb?: string;
  index?: number;
  base?: keyof VerbFlashcards;
};

type OptionsState = {
  hideImage: boolean;
  hideVerb: boolean;
  random: boolean;
};

type Option = {
  key: keyof OptionsState;
  label: string;
  isChecked: boolean;
};

export default function VerbFlashcardsPage() {
  const [previousForm, setPreviousForm] = useState<VerbForm>();
  const [currentForm, setCurrentForm] = useState<VerbForm>('base');
  const [currentVerb, setCurrentVerb] = useState<CurrentVerb>();
  const [optionsState, setOptionsState] = useState<OptionsState>({
    hideImage: false,
    hideVerb: false,
    random: false,
  });

  const pills: Pill[] = [
    { form: 'base', label: 'base' },
    { form: 'presentParticiple', label: '-ing' },
    { form: 'simplePast', label: 'simple past' },
    { form: 'pastParticiple', label: 'past participle' },
  ];

  const options: Option[] = [
    {
      key: 'hideImage',
      label: 'hide image',
      isChecked: optionsState.hideImage,
    },
    {
      key: 'hideVerb',
      label: 'hide verb',
      isChecked: optionsState.hideVerb,
    },
    {
      key: 'random',
      label: 'random',
      isChecked: optionsState.random,
    },
  ];

  const handleToggleOption = (option: Option) => {
    setOptionsState((prev) => {
      const updatedOptions: Partial<OptionsState> = {};
      if (option.key === 'hideImage' && !prev.hideImage) {
        updatedOptions.hideVerb = false;
      }

      if (option.key === 'hideVerb' && !prev.hideVerb) {
        updatedOptions.hideImage = false;
      }

      updatedOptions[option.key] = !prev[option.key];

      return { ...prev, ...updatedOptions };
    });
  };

  const handleClickButton = () => {
    if (currentVerb?.base) {
      const currentIndex = currentVerb.index;
      let nextIndex: number;

      if (optionsState.random) {
        nextIndex = Math.floor(Math.random() * verbBaseArray.length);
      } else {
        nextIndex =
          currentIndex !== undefined
            ? (currentIndex + 1) % verbBaseArray.length
            : 0;
      }

      const nextBase = verbBaseArray[nextIndex] as keyof VerbFlashcards;

      setCurrentVerb({
        index: nextIndex,
        base: nextBase,
        verb: verbs[currentForm][nextBase],
      });
    } else {
      const firstBase = verbBaseArray[0];
      setCurrentVerb({
        index: 0,
        base: firstBase as keyof VerbFlashcards,
        verb: verbs[currentForm][firstBase],
      });
    }
  };

  useEffect(() => {
    if (currentForm !== previousForm) {
      setPreviousForm(currentForm);

      if (currentVerb?.base) {
        setCurrentVerb({
          ...currentVerb,
          verb: verbs[currentForm][currentVerb.base],
        });
      }
    }
  }, [currentForm, previousForm, currentVerb]);

  // 📌📌📌 RETURN

  return (
    <div className={styles['page-container']}>
      <header className={styles['header-with-pills']}>
        <h1 className={styles.title}>Verb Flashcards</h1>

        <ul className={styles['pill-container']}>
          {pills.map((pill) => (
            <li
              key={pill.form}
              onClick={() => setCurrentForm(pill.form)}
              className={`${styles.pill} ${
                currentForm === pill.form ? styles['active-pill'] : ''
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
            <div
              key={option.key}
              className={styles['option']}
              onClick={() => handleToggleOption(option)}
            >
              <div className={styles.option}>
                <div className="small-icon">
                  <i
                    className={`fi fi-rr-${
                      option.isChecked ? 'checkbox' : 'square'
                    }`}
                  ></i>
                </div>
                <span className={styles['option-label']}>{option.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles['image-container']}>
          {optionsState.hideImage ? (
            <div className="large-icon">
              <i className="fi fi-rs-crossed-eye"></i>
            </div>
          ) : (
            <Image
              alt=""
              width={336}
              height={336}
              className={styles['verb-image']}
              src={
                verbImages[currentVerb?.base as keyof ImageFlashcards] ||
                verbImages.reference
              }
            />
          )}
        </div>

        <button
          className={styles['current-verb-btn']}
          onClick={handleClickButton}
        >
          {optionsState.hideVerb ? (
            <div className="icon-container">
              <i className="fi fi-rs-crossed-eye"></i>
            </div>
          ) : (
            currentVerb?.verb || 'CLICK ME'
          )}
        </button>
      </main>
    </div>
  );
}
