import coverImg from '@images/fashion-flashcards/_cover.jpg';
import bootsImg from '@images/fashion-flashcards/boots.jpg';
import beltImg from '@images/fashion-flashcards/belt.jpg';
import bowtieImg from '@images/fashion-flashcards/bowtie.jpg';
import dressImg from '@images/fashion-flashcards/dress.jpg';
import hatImg from '@images/fashion-flashcards/hat.jpg';
import heelsImg from '@images/fashion-flashcards/heels.jpg';
import hoodieImg from '@images/fashion-flashcards/hoodie.jpg';
import jeansImg from '@images/fashion-flashcards/jeans.jpg';
import pajamasImg from '@images/fashion-flashcards/pajamas.jpg';
import shortsImg from '@images/fashion-flashcards/shorts.jpg';
import skirtImg from '@images/fashion-flashcards/skirt.jpg';
import sneakersImg from '@images/fashion-flashcards/sneakers.jpg';
import socksImg from '@images/fashion-flashcards/socks.jpg';
import suitImg from '@images/fashion-flashcards/suit.jpg';
import tanktopImg from '@images/fashion-flashcards/tanktop.jpg';
import tshirtImg from '@images/fashion-flashcards/tshirt.jpg';
import type { Flashcard } from '@/app/(internal-pages)/flashcards/fashion-flashcards/page';

export const fashionCategories: FashionCategory[] = [
  'clothes',
  'accessories',
  'footwear',
];

export const fashionCover: Flashcard = {
  key: null,
  label: null,
  image: coverImg,
};

export const fashionFlashcards: Record<FashionCategory, Flashcard[]> = {
  clothes: [
    { key: 'dress', label: 'dress', image: dressImg },
    { key: 'hoodie', label: 'hoodie', image: hoodieImg },
    { key: 'jeans', label: 'jeans', image: jeansImg },
    { key: 'pajamas', label: 'pajamas', image: pajamasImg },
    { key: 'shorts', label: 'shorts', image: shortsImg },
    { key: 'skirt', label: 'skirt', image: skirtImg },
    { key: 'suit', label: 'suit', image: suitImg },
    { key: 'tanktop', label: 'tank-top', image: tanktopImg },
    { key: 'tshirt', label: 'tshirt', image: tshirtImg },
  ],
  footwear: [
    { key: 'boots', label: 'boots', image: bootsImg },
    { key: 'heels', label: 'heels', image: heelsImg },
    { key: 'sneakers', label: 'sneakers', image: sneakersImg },
    { key: 'socks', label: 'socks', image: socksImg },
  ],
  accessories: [
    { key: 'belt', label: 'belt', image: beltImg },
    { key: 'bowtie', label: 'bow-tie', image: bowtieImg },
    { key: 'hat', label: 'hat', image: hatImg },
  ],
};

export const allFashionFlashcards: Flashcard[] = [
  ...fashionFlashcards.clothes,
  ...fashionFlashcards.footwear,
  ...fashionFlashcards.accessories,
];

type FashionCategory = 'clothes' | 'footwear' | 'accessories';
