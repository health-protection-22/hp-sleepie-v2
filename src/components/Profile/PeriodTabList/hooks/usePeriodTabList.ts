import { useState } from 'react';

export type Active = 'day' | 'week' | 'month';

export default function usePeriodTabList(defaultActive: Active) {
  const [active, setActive] = useState<Active>(defaultActive);

  function handleActive(value: Active) {
    setActive(value);
  }

  return { active, handleActive };
}
