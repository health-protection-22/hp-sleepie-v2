import React from 'react';
import { PeriodButton } from '../PeriodButton';
import usePeriodTabList, { Active } from './hooks/usePeriodTabList';

type Props = {
  defaultActive?: Active;
};

export function PeriodTabList({ defaultActive = `day` }: Props) {
  const { active, handleActive } = usePeriodTabList(defaultActive);

  return (
    <div className="flex gap-3 min-w-fit">
      <PeriodButton label="Day" isActive={active === 'day'} onClick={() => handleActive(`day`)} />
      <PeriodButton
        label="Week"
        isActive={active === 'week'}
        onClick={() => handleActive(`week`)}
      />
      <PeriodButton
        label="Month"
        isActive={active === 'month'}
        onClick={() => handleActive(`month`)}
      />
    </div>
  );
}
