import type { StaticImageData } from 'next/image';

import referenceImg from '@images/fashion-flashcards/reference.jpg';
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

export const fashionCategories: FashionCategory[] = [
  'clothes',
  'accessories',
  'footwear',
];

export const fashionCover: FashionItem = {
  label: null,
  image: referenceImg,
};

export const fashion: FashionFlashcards = {
  clothes: {
    dress: { label: 'dress', image: dressImg },
    hoodie: { label: 'hoodie', image: hoodieImg },
    jeans: { label: 'jeans', image: jeansImg },
    pajamas: { label: 'pajamas', image: pajamasImg },
    shorts: { label: 'shorts', image: shortsImg },
    skirt: { label: 'skirt', image: skirtImg },
    suit: { label: 'suit', image: suitImg },
    tanktop: { label: 'tank-top', image: tanktopImg },
    tshirt: { label: 'tshirt', image: tshirtImg },
  },
  footwear: {
    boots: { label: 'boots', image: bootsImg },
    heels: { label: 'heels', image: heelsImg },
    sneakers: { label: 'sneakers', image: sneakersImg },
    socks: { label: 'socks', image: socksImg },
  },
  accessories: {
    belt: { label: 'belt', image: beltImg },
    bowtie: { label: 'bow-tie', image: bowtieImg },
    hat: { label: 'hat', image: hatImg },
  },
};

export const allFashion: Record<string, FashionItem> = {
  ...fashion.clothes,
  ...fashion.footwear,
  ...fashion.accessories,
};

export type FashionCategory = 'clothes' | 'footwear' | 'accessories';

export type FashionItem = {
  label: string | null;
  image: StaticImageData;
};

export type FashionFlashcards = Record<
  FashionCategory,
  Record<string, FashionItem>
>;
