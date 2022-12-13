import { Button, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import AvatarIcon from '../../../../assets/icon/Avatar';
import LockIcon from '../../../../assets/icon/Lock';
import { InputEmail } from '../../CustomInputs/InputEmail';
import { InputPassword } from '../../CustomInputs/InputPassword';
import { Modal } from '../../Modal';
import { When } from '../../When';
import { useLoginModal } from './hook/useLoginModal';

type Props = {
  show: boolean;
  closeModal: () => void;
  onLogin: () => void;
};

export function LoginModal({ show, closeModal, onLogin }: Props) {
  const { handleSubmit, authenticationIsLoading } = useLoginModal({ onLogin, closeModal });
  return (
    <Modal closeOnBackDrop show={show} closeModal={closeModal}>
      <form
        onSubmit={handleSubmit}
        className={'flex flex-col rounded-lg gap-10 items-center p-10 bg-backgroundCart-primary'}
      >
        <Text fontSize="2xl" fontWeight="bold">
          Login Area
        </Text>
        <div className="gap-4 flex flex-col w-full">
          <InputEmail id="inputEmail" onLeftIcon={<AvatarIcon />} />
          <InputPassword id="inputPassword" onLeftIcon={<LockIcon />} showButton />
        </div>
        <When value={authenticationIsLoading}>
          <Spinner
            color={'brand.500'}
            emptyColor="gray.200"
            size="md"
            thickness="2px"
            speed="0.75s"
          />
        </When>
        <When value={!authenticationIsLoading}>
          <Button type="submit" w={'full'}>
            {'Enter'}
          </Button>
        </When>
      </form>
    </Modal>
  );
}
