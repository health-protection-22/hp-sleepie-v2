import React, { useState } from 'react';

import { getDays } from '../../../../utils/functions/date';
import { FakeSelect } from '../../FakeSelect';

type Props = {
  onSet?: () => void;
  id?: string;
  initialDay?: {
    value: string;
    label: string;
  };
  className?: string;
};

export function SelectDay({
  id = 'selectDate',
  onSet,
  initialDay = { value: '', label: '' },
  className,
}: Props) {
  const [daysOfMonth, setDaysOfMoth] = useState(31);
  function onOpen() {
    const monthElement = document.getElementById(id + 'Month') as HTMLInputElement;
    const yearElement = document.getElementById(id + 'Year') as HTMLInputElement;

    if (!monthElement || !yearElement) return;
    const monthValue = parseInt(monthElement.value);
    const yearValue = parseInt(monthElement.value);
    const qtdOfDays = getDays(yearValue, monthValue);

    if (!qtdOfDays) return;
    setDaysOfMoth(qtdOfDays);
  }
  const initialArray = new Array(daysOfMonth).fill(null).map((_, i) => i + 1);

  const daysOptions = [...initialArray].map((x) => ({
    value: x.toString(),
    label: x.toString(),
  }));

  return (
    <FakeSelect
      onSet={onSet}
      id={id + 'Day'}
      onOpen={onOpen}
      placeholder="Day"
      initialOption={initialDay}
      options={daysOptions}
      className={className}
    />
  );
}
