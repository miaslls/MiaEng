import { home, tools, games } from './categories';

export const menuData: MenuCategory[] = [home, tools, games];

export type MenuCategory = {
  title: string;
  titleUrl?: string;
  items?: MenuItem[];
};

export type MenuItem = {
  text: string;
  url: string;
};
