'use client';

import styles from './VerbFlashcardsPage.module.css';

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

type Options = {
  hideImage: boolean;
  hideVerb: boolean;
  random: boolean;
};

type CurrentVerb = {
  verb: string | undefined;
  index: number | undefined;
  base: keyof VerbFlashcards | undefined;
};

export default function VerbFlashcardsPage() {
  const [previousForm, setPreviousForm] = useState<VerbForm>();
  const [currentForm, setCurrentForm] = useState<VerbForm>('base');
  const [currentVerb, setCurrentVerb] = useState<CurrentVerb>({
    verb: undefined,
    index: undefined,
    base: undefined,
  });
  const [options, setOptions] = useState<Options>({
    hideImage: false,
    hideVerb: false,
    random: false,
  });

  // 📌📌 verb form
  useEffect(() => {
    if (currentForm !== previousForm) {
      setPreviousForm(currentForm);

      if (currentVerb.base) {
        setCurrentVerb({
          ...currentVerb,
          verb: verbs[currentForm][currentVerb.base],
        });
      }
    }
  }, [currentForm, previousForm, currentVerb]);

  // 📌 button
  const handleClickButton = () => {
    if (currentVerb.base) {
      const currentIndex = verbBaseArray.findIndex(
        (base) => base === currentVerb.base
      );

      let nextIndex: number;

      if (currentIndex === verbBaseArray.length - 1) nextIndex = 0;
      else nextIndex = currentIndex + 1;

      const nextBase = verbBaseArray[nextIndex] as keyof VerbFlashcards;

      setCurrentVerb({
        ...currentVerb,
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

  // 📌📌 options
  useEffect(() => {
    if (options.hideImage) {
      setOptions({ ...options, hideVerb: false });
    }
    if (options.hideVerb) {
      setOptions({ ...options, hideImage: false });
    }
  }, [options]);

  // 📌📌📌 RETURN

  return (
    <div className={styles['page-container']}>
      <header className={styles['header-with-pills']}>
        <h1 className={styles.title}>Verb Flashcards</h1>

        <ul className={styles['pill-container']}>
          <li
            className={`${styles.pill} ${
              currentForm === 'base' ? styles['active-pill'] : ''
            }`}
            onClick={() => setCurrentForm('base')}
          >
            base
          </li>
          <li
            className={`${styles.pill} ${
              currentForm === 'presentParticiple' ? styles['active-pill'] : ''
            }`}
            onClick={() => setCurrentForm('presentParticiple')}
          >
            -ing
          </li>
          <li
            className={`${styles.pill} ${
              currentForm === 'simplePast' ? styles['active-pill'] : ''
            }`}
            onClick={() => setCurrentForm('simplePast')}
          >
            simple past
          </li>
          <li
            className={`${styles.pill} ${
              currentForm === 'pastParticiple' ? styles['active-pill'] : ''
            }`}
            onClick={() => setCurrentForm('pastParticiple')}
          >
            past participle
          </li>
        </ul>
      </header>

      <main className={styles['main-container']}>
        <Image
          src={
            verbImages[currentVerb.base as keyof ImageFlashcards] ||
            verbImages.reference
          }
          alt=""
          width={300}
          height={300}
          className={styles['verb-image']}
        />
        <button
          className={styles['current-verb-btn']}
          onClick={handleClickButton}
        >
          {currentVerb?.verb || 'CLICK ME'}
        </button>
      </main>
    </div>
  );
}
