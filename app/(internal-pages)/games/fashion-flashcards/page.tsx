import React from 'react';
import { FlashcardsPage } from '@components/pages/FlashcardsPage';
import {
  fashionFlashcards,
  allFashionFlashcards,
  fashionCover,
  fashionCategories,
} from '@data/games/fashion-flashcards';

export default function FashionFlashcardsPage() {
  return (
    <FlashcardsPage
      flashcardsDataObject={fashionFlashcards}
      allFlashcardsArray={allFashionFlashcards}
      coverFlashcard={fashionCover}
      categories={fashionCategories}
      flashcardType='noun'
    />
  );
}
