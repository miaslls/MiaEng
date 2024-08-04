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
  items: [
    { text: 'verb flashcards', url: '/games/verb-flashcards' },
    { text: 'fashion flashcards', url: '/games/fashion-flashcards' },
  ],
};
