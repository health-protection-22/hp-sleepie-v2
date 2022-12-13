import React from 'react';

import { SelectMonth } from '../SelectMonth';
import { SelectYear } from '../SelectYear';
import { SelectDay } from '../SelectDay';
import { When } from '../../When';
import { useSelectDate } from './hooks/useSelectDate';
import WarningIcon from '../../../../assets/icon/Warning';
import { doNothing } from '../../../../utils/functions';

type Props = {
  hideMessageValidation?: boolean;
  isRequired?: boolean;
  id?: string;
  year?: {
    value: string;
    label: string;
  };
  month?: {
    value: string;
    label: string;
  };
  day?: {
    value: string;
    label: string;
  };
  dispatchActionOnChange?: (selectedDate: Date) => void;
  isFlexColumn?: boolean;
};

export function SelectDate({
  id,
  year = { value: '', label: '' },
  month = { value: '', label: '' },
  day = { value: '', label: '' },
  isRequired,
  hideMessageValidation,
  dispatchActionOnChange,
  isFlexColumn,
}: Props) {
  const { ref, showMessageValidation, messageValidation, isValid, validate } = useSelectDate({
    id,
    isRequired,
    dispatchActionOnChange,
  });

  return (
    <div className="flex flex-col w-full min-w-fit">
      <input
        name={'validatorItem'}
        required={isRequired}
        onChange={doNothing}
        className={'hidden'}
        checked={isValid}
        type={'checkbox'}
        ref={ref}
      />
      <div
        className={`flex justify-between gap-4 flex-1 min-w-fit ${isFlexColumn ? `flex-col` : ``}`}
      >
        <SelectMonth
          onSet={validate}
          initialMonth={month}
          id={id}
          className="step-two-interaction"
        />
        <SelectDay onSet={validate} initialDay={day} id={id} className="step-two-interaction" />
        <SelectYear onSet={validate} initialYear={year} id={id} className="step-two-interaction" />
      </div>
      <When value={!hideMessageValidation && showMessageValidation}>
        <div
          data-testid={'messageValidation'}
          className={'flex flex-row gap-2 items-center pl-4 h-max mt-2'}
        >
          <WarningIcon />
          <label className={'text-alerts-red font-light text-xs leading-4'}>
            {messageValidation}
          </label>
        </div>
      </When>
    </div>
  );
}
