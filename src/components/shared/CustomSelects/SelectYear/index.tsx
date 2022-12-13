import React from 'react';
import { FakeSelect } from '../../FakeSelect';

type Props = {
  RangeOfYears?: number;
  initialYear?: {
    value: string;
    label: string;
  };
  onSet?: () => void;
  id?: string;
  className?: string;
};

export function SelectYear({
  RangeOfYears = 120,
  initialYear = { value: '', label: '' },
  id = 'selectDate',
  onSet,
  className,
}: Props) {
  const actualDate = new Date();
  const actualYear = actualDate.getFullYear();

  const initialArray = new Array(RangeOfYears).fill(null).map((_, i) => i + 1);

  const yearsOptions = [...initialArray].map((x) => ({
    value: (actualYear + 1 - x).toString(),
    label: (actualYear + 1 - x).toString(),
  }));

  return (
    <FakeSelect
      onSet={onSet}
      placeholder="Year"
      id={id + 'Year'}
      initialOption={initialYear}
      options={yearsOptions}
      className={className}
    />
  );
}
