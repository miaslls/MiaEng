import { MenuCategory } from '.';

export const home: MenuCategory = {
  title: 'home',
  titleUrl: '/',
};

export const tools: MenuCategory = {
  title: 'tools',
};

export const games: MenuCategory = {
  title: 'games',
};

export const flashcards: MenuCategory = {
  title: 'flashcards',
  items: [
    { text: 'verb flashcards', url: '/flashcards/verb-flashcards' },
    { text: 'fashion flashcards', url: '/flashcards/fashion-flashcards' },
  ],
};
