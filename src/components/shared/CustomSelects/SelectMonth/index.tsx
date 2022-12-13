import React from 'react';
import { monthOptions } from '../../../../utils/constants/options';
import { FakeSelect } from '../../FakeSelect';

type Props = {
  onSet?: () => void;
  id?: string;
  initialMonth?: {
    value: string;
    label: string;
  };
  className?: string;
};

export function SelectMonth({
  id = 'selectDate',
  onSet,
  initialMonth = { value: '', label: '' },
  className,
}: Props) {
  return (
    <FakeSelect
      onSet={onSet}
      placeholder="Month"
      id={id + 'Month'}
      initialOption={initialMonth}
      options={monthOptions}
      className={className}
    />
  );
}
