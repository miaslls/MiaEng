'use client';

import React, { useState } from 'react';
import { HeaderWithPills } from '@/app/_components/page-elements/HeaderWithPills';

export const useHeaderWithPills = ({
  title,
  pillData,
  hasAllPill,
}: UseHeaderWithPillsProps) => {
  const pills = hasAllPill
    ? [{ key: 'all', label: 'show all' }, ...pillData]
    : pillData;

  const [activePill, setActivePill] = useState(pills[0].key);

  const HeaderWithPillsUi = () => (
    <HeaderWithPills
      title={title}
      pills={pills}
      activePill={activePill}
      setActivePill={setActivePill}
    />
  );

  return { HeaderWithPillsUi, activePill };
};

interface UseHeaderWithPillsProps {
  title: string;
  pillData: Pill[];
  hasAllPill?: boolean;
}

export type Pill = { key: string; label: string };
