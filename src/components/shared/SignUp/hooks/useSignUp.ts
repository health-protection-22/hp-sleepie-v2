import { FormEvent } from 'react';

import { useValidator } from '../../../../validators/hooks/useValidator';
import { addLeadingZeros } from '../../../../utils/functions/string';
import { useAuthContext } from '../../../../contexts/Auth';
import { useBreakpointValue } from '@chakra-ui/react';

type Props = {
  idNewPasswordField: string;
  onRegister: () => void;
};

export function useSignUp({ idNewPasswordField, onRegister }: Props) {
  const { validateStringIsEqual, validateStringMinLength } = useValidator();
  const { register } = useAuthContext();

  const isWideVersion = useBreakpointValue(
    {
      base: false,
      lg: false,
      xl: true,
    },
    { fallback: 'xl' },
  );

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const receiveUpdateCheckbox = (
      document.getElementById('receiveUpdatesCheckbox') as HTMLInputElement
    ).checked;
    const password = (document.getElementById('confirmNewPassword') as HTMLInputElement).value;
    const month = addLeadingZeros(
      (document.getElementById('selectDateMonth') as HTMLInputElement).value,
      2,
    );
    const year = (document.getElementById('selectDateYear') as HTMLInputElement).value;
    const day = addLeadingZeros(
      (document.getElementById('selectDateDay') as HTMLInputElement).value,
      2,
    );
    const email = (document.getElementById('inputEmail') as HTMLInputElement).value;
    const name = (document.getElementById('inputName') as HTMLInputElement).value;

    const dateOfBirth = day + '/' + month + '/' + year;

    const payload = {
      receive_update: receiveUpdateCheckbox,
      password_confirmation: password,
      date_of_birth: dateOfBirth,
      password,
      email,
      name,
    };
    register(payload, onRegister);
  }

  function checkMinNameLengthValidationFunction(name: string) {
    return validateStringMinLength(4, name);
  }

  function checkMinPasswordLengthValidationFunction(name: string) {
    return validateStringMinLength(6, name);
  }

  function confirmNewEmailValidationFunction(confirmNewPasswordFieldValue: string) {
    const newPasswordField = document.getElementById(idNewPasswordField) as HTMLInputElement;
    return validateStringIsEqual(confirmNewPasswordFieldValue, newPasswordField.value);
  }

  return {
    checkMinPasswordLengthValidationFunction,
    checkMinNameLengthValidationFunction,
    confirmNewEmailValidationFunction,
    isWideVersion,
    handleSubmit,
  };
}
