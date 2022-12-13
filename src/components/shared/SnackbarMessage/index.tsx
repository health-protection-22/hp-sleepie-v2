import React from 'react';
import CloseIcon from '../../../assets/icon/Close';
import { SnackbarProps } from '../../../contexts/Snackbar/types';
import { Text5 } from '../Texts';
import { useSnackbarMessage } from './hooks/useSnackbarMessage';

type Props = {
  snackbar: SnackbarProps;
  deleteSnackbar: () => void;
};

export const SnackbarMessage = ({ deleteSnackbar, snackbar }: Props) => {
  const { handleDeleteSnackbar, show } = useSnackbarMessage({ deleteSnackbar, snackbar });

  return (
    <div
      className={`${snackbar.type === 'error' ? 'bg-alerts-red' : 'bg-alerts-green'} 
            ${snackbar.type === 'success' ? 'bg-alerts-green' : ''}
            ${snackbar.type === 'warn' ? 'bg-alerts-orange' : ''}
            transition-opacity duration-200 animate-fadeInAnimation ${
              show ? 'opacity-1' : 'opacity-0'
            }
            flex justify-between items-center absolute pointer-events-auto overflow-hidden 
            px-5 py-3 w-[400px] rounded-xl text-primary-white bg-no-repeat z-[9999]`}
      style={{ boxShadow: '0 0 10px #00000084' }}
      data-testid={'snackbarMessage-' + snackbar.type}
    >
      <div />
      <div className="flex flex-1 mr-5">
        <Text5 className={'2xl:leading-5 text-center w-full text-white-full'}>
          {snackbar.message}
        </Text5>
      </div>
      <span
        data-testid={'closeIcon'}
        className={
          'flex cursor-pointer rounded-xl w-fit h-fit transform hover:scale-125 active:scale-90'
        }
        onClick={handleDeleteSnackbar}
      >
        <CloseIcon height="10" width="10" />
      </span>
    </div>
  );
};
