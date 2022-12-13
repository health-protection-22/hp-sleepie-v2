import { Button } from '@chakra-ui/react';
import React from 'react';
import LoadingSpinnerIcon from '../../../../assets/icon/LoadingSpinner';
import { Modal } from '../../Modal';
import { usePaymentModal } from './hook/usePaymentModal';

type Props = {
  show: boolean;
  closeModal: () => void;
  onSubmit: () => void;
};

export function PaymentModal({ show, closeModal, onSubmit }: Props) {
  const elementIdStripeButton = 'button-stripe';
  const elementIdPaypal = 'div-paypal';
  const elementIdStripe = 'div-stripe';

  const { handleClickStripe, isLoadingIframe, isLoading } = usePaymentModal({
    elementIdStripeButton,
    elementIdPaypal,
    elementIdStripe,
    closeModal,
  });

  return (
    <Modal show={show} closeModal={closeModal} closeOnBackDrop>
      <div
        className={`flex flex-col w-screen xl:w-full justify-center items-center h-screen xl:h-fit bg-white-full rounded-lg ease-linear transform transition-all duration-300
      ${isLoadingIframe ? 'max-h-96' : 'max-h-screen'}
      `}
      >
        <div className={`flex h-fit ${isLoadingIframe ? 'flex' : 'hidden'}`}>
          <LoadingSpinnerIcon fill="black" />
        </div>
        <div className={` flex flex-col ease-linear min-w-[400px] w-full xl:w-[500px] transform transition-all duration-300 h-full xl:h-fit ${isLoadingIframe ? 'opacity-0 ': 'opacity-100 p-8 '}`}>
          <div className={`flex-col items-center w-full h-fit gap-4 ${isLoadingIframe ? 'hidden' : 'flex'}`}>
            <div id={elementIdPaypal} className=" flex justify-center w-full  h-[90px] max-w-[750px] overflow-hidden" />

            <div id={elementIdStripe} className=" h-fit w-full overflow-y-hidden overflow-x-hidden " />
            <Button w={'full'} isLoading={isLoading} id={elementIdStripeButton} onClick={handleClickStripe}>
              pay with Stripe
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
