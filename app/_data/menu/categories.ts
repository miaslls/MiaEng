import { MenuCategory } from '.';

export const home: MenuCategory = {
  title: 'home',
  titleUrl: '/',
};

export const tools: MenuCategory = {
  title: 'tools',
  items: [{ text: 'verb flashcards', url: '/tools/verb-flashcards' }],
};

export const games: MenuCategory = {
  title: 'games',
  items: [
    { text: 'lorem ipsum', url: '/' },
    { text: 'dolor sit', url: '/' },
    { text: 'amet', url: '/' },
  ],
};
