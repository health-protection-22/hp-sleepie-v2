import React from 'react';

import WarningIcon from '../../../assets/icon/Warning';
import { useFakeSelect } from './hooks/useFakeSelect';
import { CleanArrow } from '../CleanArrow';
import { SelectOption } from './types';
import { Text4 } from '../Texts';
import { When } from '../When';

type Props = {
  hideMessageValidation?: boolean;
  countOfDisplayedItems?: number;
  options: SelectOption[];
  initialOption?: {
    value: string;
    label: string;
  };
  placeholder?: string;
  isRequired?: boolean;
  onOpen?: () => void;
  onSet?: () => void;
  zIndex?: number;
  id?: string;
  className?: string;
  usePlaceholderHasSelectedOption?: boolean;
};

export function FakeSelect({
  countOfDisplayedItems = 5,
  placeholder = 'Select',
  hideMessageValidation,
  id = 'custom-select',
  initialOption,
  zIndex = 17,
  isRequired,
  options,
  onOpen,
  onSet,
  className = '',
  usePlaceholderHasSelectedOption,
}: Props) {
  const {
    showMessageValidation,
    messageValidation,
    distanceFromLeft,
    distanceFromTop,
    selectedOption,
    offsetSizeBody,
    closeOptions,
    onSelectItem,
    handleClick,
    positionTop,
    onChange,
    show,
    ref,
  } = useFakeSelect({
    isRequired,
    initialOption,
    onOpen,
    onSet,
    id,
  });
  return (
    <>
      <div
        id={'backdrop-' + id}
        onClick={() => closeOptions()}
        className={`absolute ${show ? '' : 'hidden'}`}
        style={{
          left: (-distanceFromLeft).toString() + 'px',
          top: (-distanceFromTop).toString() + 'px',
          zIndex: zIndex - 1,
          height: offsetSizeBody.height,
          width: offsetSizeBody.width,
          margin: 0,
        }}
      ></div>
      <input
        value={selectedOption.value}
        required={isRequired}
        name={'selectInput'}
        onChange={onChange}
        id={id}
        type={'hidden'}
        ref={ref}
      />
      <div className={`relative flex flex-1 min-w-fit ${className}`}>
        <div
          id={'divSelect-' + id}
          onClick={handleClick}
          className={
            ' flex flex-row py-4 px-7 min-w-fit gap-2 bg-transparent w-full rounded-xl border border-borderColor p-4 items-center justify-between cursor-pointer  select-none text-sm xl:text-base '
          }
        >
          <When value={usePlaceholderHasSelectedOption}>
            <span className={!selectedOption.label ? `opacity-40` : '' + ' text-sm xl:text-base '}>
              {placeholder}
            </span>
          </When>
          <When value={!usePlaceholderHasSelectedOption}>
            <span className={!selectedOption.label ? `opacity-40` : '' + ' text-sm xl:text-base '}>
              {selectedOption.label ? selectedOption.label : placeholder}
            </span>
          </When>
          <CleanArrow rotate={show} direction={'bottom'} />
        </div>
        <div
          id={id + '-options'}
          className={`absolute flex flex-col w-full bg-white-full  border-l border-r border-b border-borderColor rounded-b-xl py-2 px-0 min-w-fit 
          ${options.length > countOfDisplayedItems ? 'overflow-y-scroll' : ''}
          ${show ? '' : 'hidden'}`}
          style={{
            maxHeight: (countOfDisplayedItems * 25 + 8).toString() + 'px',
            top: positionTop,
            zIndex: zIndex,
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => onSelectItem(option)}
              className={
                'min-w-fit w-full flex h-[25px] cursor-pointer pl-7 pr-1 hover:bg-backgroundCart-primary'
              }
            >
              <Text4>{option.label}</Text4>
            </div>
          ))}
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
    </>
  );
}
