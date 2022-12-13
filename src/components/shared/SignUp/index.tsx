import React from 'react';

import { InputPassword } from '../CustomInputs/InputPassword';
import { InputCheckbox } from '../CustomInputs/InputCheckbox';
import { SelectDate } from '../CustomSelects/SelectDate';
import { InputEmail } from '../CustomInputs/InputEmail';
import AvatarIcon from '../../../assets/icon/Avatar';
import EmailIcon from '../../../assets/icon/Email';
import LockIcon from '../../../assets/icon/Lock';
import { Button, Text } from '@chakra-ui/react';
import { useSignUp } from './hooks/useSignUp';
import { Input } from '../Input';

type Props = {
  onRegister: () => void;
};
export function SignUp({ onRegister }: Props) {
  const idNewPasswordField = 'newPassword';
  const {
    checkMinPasswordLengthValidationFunction,
    checkMinNameLengthValidationFunction,
    confirmNewEmailValidationFunction,
    handleSubmit,
  } = useSignUp({ idNewPasswordField, onRegister });
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete={'off'}
      className=" flex flex-col 2xl:grid 2xl:grid-cols-2 gap-6 max-w-[500px] 2xl:max-w-full w-full min-w-fit"
    >
      <div className="flex flex-col gap-4 col-span-1 min-w-fit">
        <Text fontWeight={600} color={'black'}>
          Sign up with your personal information
        </Text>
        <Input
          validateFunctions={[checkMinNameLengthValidationFunction]}
          onLeftIcon={<AvatarIcon />}
          placeholder={'Name'}
          id={'inputName'}
          required
          className="sign-up"
        />
        <InputEmail
          id={'inputEmail'}
          autoComplete={'off'}
          isRequired
          onLeftIcon={<EmailIcon />}
          className="sign-up"
        />
        <InputPassword
          validateFunctions={[checkMinPasswordLengthValidationFunction]}
          autoComplete={'new-password'}
          onLeftIcon={<LockIcon />}
          id={idNewPasswordField}
          showButton
          isRequired
          className="sign-up"
        />
        <InputPassword
          validateFunctions={[confirmNewEmailValidationFunction]}
          placeholder={'Confirm Password'}
          autoComplete={'new-password'}
          onLeftIcon={<LockIcon />}
          id={'confirmNewPassword'}
          isRequired
          showButton
          className="sign-up"
        />
      </div>
      <div className="flex flex-col gap-4 col-span-1 min-w-fit">
        <Text fontWeight={600} color={'black'}>
          Date of Birth
        </Text>
        <div className="flex min-w-fit sign-up">
          <SelectDate isRequired />
        </div>
        <div className="flex gap-2  items-center mb-7">
          <InputCheckbox id={'receiveUpdatesCheckbox'} defaultCheck={true} />
          <Text fontSize={14} lineHeight={4}>
            I want to receive updates, tips, and other emails from Sleepie. You can unsubscribe any
            time.
          </Text>
        </div>
        <Button
          padding={4}
          bgColor={'buttonColor'}
          width={'full'}
          h={12}
          type="submit"
          mb={2}
          className="sign-up"
        >
          Register
        </Button>
        <Text fontSize={12} lineHeight={4} color={'textSecondary'}>
          By create an account, I agree to the Terms of Service and Privacy Policy
        </Text>
      </div>
    </form>
  );
}
