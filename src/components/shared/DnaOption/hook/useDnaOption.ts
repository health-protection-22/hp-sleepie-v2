import { FormEvent, useEffect, useRef, useState } from 'react';

import { useCartContext } from '../../../../contexts/Cart';
import config from '../../../../config';
import { setCookie } from 'nookies';

type Props = {
  onSubmit: () => void;
};
export function useDnaOption({ onSubmit }: Props) {
  const { dnaOption } = config.messages.validations;
  const ref = useRef<HTMLInputElement>(null);
  const idUploadFile = 'uploadDnaOption';
  const [messageValidation, setMessageValidation] = useState('');
  const { enableSwitchBetweenMethods, setSubscribeMethod } = useCartContext();
  const [selectedDecodeOption, setSelectedDecodeOption] = useState<
    'yes' | 'no' | 'upload' | undefined
  >('yes');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setCookie(undefined, 'healthProtection_dnaOption', selectedDecodeOption as string);
    onSubmit();
  }

  function validate() {
    if (selectedDecodeOption === undefined) return setMessageValidation(dnaOption.isRequired);
    setMessageValidation('');
  }

  useEffect(() => {
    if (selectedDecodeOption === 'upload') return;
    const inputFile = document.getElementById(idUploadFile) as HTMLInputElement;
    if (!inputFile.value) return;
    inputFile.value = '';
    inputFile.dispatchEvent(new Event('change'));
  }, [selectedDecodeOption]);

  useEffect(() => {
    ref.current?.addEventListener('invalid', function (event) {
      event.preventDefault();
      validate();
    });
  });

  useEffect(() => {
    validate();
  }, [selectedDecodeOption]);

  return {
    enableSwitchBetweenMethods,
    setSelectedDecodeOption,
    selectedDecodeOption,
    setSubscribeMethod,
    messageValidation,
    handleSubmit,
    idUploadFile,
    ref,
  };
}
