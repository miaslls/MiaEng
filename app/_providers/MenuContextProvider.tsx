'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { useSessionStorage } from '@lib/storage';

type MenuContextState = {
  isMenuOpen: boolean;
  handleToggleMenu: () => void;
};

export const MenuContext = createContext<MenuContextState | null>(null);

export function useMenu() {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error(
      'useMenu must be used within a component wrapped with MenuProvider. ' +
        'Wrap your component tree with <MenuProvider> to enable menu functionality.'
    );
  }

  return context;
}

export default function MenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useSessionStorage('isMenuOpen', false);

  useEffect(() => {
    function applyBodyOverflow(isMenuOpen: boolean) {
      document.body.style.overflowY = isMenuOpen ? 'hidden' : 'auto';
    }

    setIsMenuOpen(isMenuOpen);
    applyBodyOverflow(isMenuOpen);

    return () => {
      applyBodyOverflow(false);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  useEffect(() => {
    const handleEscKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener('keydown', handleEscKeydown);

      return () => {
        window.removeEventListener('keydown', handleEscKeydown);
      };
    }
  }, [isMenuOpen, setIsMenuOpen]);

  const handleToggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, handleToggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
