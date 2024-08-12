import { home, tools, games, flashcards } from './categories';

export const menuData: MenuCategory[] = [home, tools, games, flashcards];

export type MenuCategory = {
  title: string;
  titleUrl?: string;
  items?: MenuItem[];
};

export type MenuItem = {
  text: string;
  url: string;
};
