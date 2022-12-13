import { useEffect, useRef, useState } from 'react';
import config from '../../../../../config';
import { getDays } from '../../../../../utils/functions/date';
import { ValidationResponse } from '../../../../../validators/types';

type Props = {
  isRequired?: boolean;
  id?: string;
  dispatchActionOnChange?: (selectedDate: Date) => void;
};

export function useSelectDate({ id, isRequired, dispatchActionOnChange }: Props) {
  const { validations } = config.messages;
  const idSetted = id ?? 'selectDate';

  const [showMessageValidation, setShowMessageValidation] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [validateResponse, setValidateResponse] = useState<ValidationResponse>({
    isValid: true,
  });

  const ref = useRef<HTMLInputElement>(null);

  function validate() {
    function turnValidResponse() {
      setValidateResponse({ isValid: true });
      setShowMessageValidation(false);
      setIsValid(true);
    }

    const selectMonth = document.getElementById(idSetted + 'Month') as HTMLInputElement;
    const selectYear = document.getElementById(idSetted + 'Year') as HTMLInputElement;
    const selectDay = document.getElementById(idSetted + 'Day') as HTMLInputElement;

    const allSelectExists = selectMonth && selectYear && selectDay;

    if (!allSelectExists) return;

    const selectMonthValue = selectMonth.value;
    const selectYearValue = selectYear.value;
    const selectDayValue = selectDay.value;

    const selectedDate = new Date(selectYearValue + '/' + selectMonthValue + '/' + selectDayValue);
    const actualDate = new Date();

    const daysInThisMonth = getDays(parseInt(selectYearValue), parseInt(selectMonthValue));

    const allSelectIsSetted = !!selectMonthValue && !!selectYearValue && !!selectDayValue;
    const allSelectIsNotSetted = !selectMonthValue && !selectYearValue && !selectDayValue;
    const notAllSelectIsSetted = !allSelectIsSetted && !allSelectIsNotSetted;

    if (isRequired) {
      if (!allSelectIsSetted) {
        setIsValid(false);
        setValidateResponse({ isValid: false, reason: validations.isRequired });
        return setShowMessageValidation(true);
      } else {
        turnValidResponse();
      }
    }

    if (notAllSelectIsSetted) {
      setIsValid(false);
      setValidateResponse({ isValid: false, reason: validations.date.validDate });
      return setShowMessageValidation(true);
    } else {
      turnValidResponse();
    }

    if (allSelectIsSetted) {
      if (daysInThisMonth < parseInt(selectDayValue)) {
        setIsValid(false);
        setValidateResponse({ isValid: false, reason: validations.date.validDate });
        return setShowMessageValidation(true);
      } else {
        turnValidResponse();
      }

      if (selectedDate > actualDate) {
        setIsValid(false);
        setValidateResponse({ isValid: false, reason: validations.date.validDate });
        return setShowMessageValidation(true);
      } else {
        turnValidResponse();
      }

      if (dispatchActionOnChange) dispatchActionOnChange(selectedDate);
    }
  }

  useEffect(() => {
    ref.current?.addEventListener('invalid', function (event) {
      event.preventDefault();
      validate();
    });
  });

  return {
    messageValidation: validateResponse.reason,
    showMessageValidation,
    validate,
    isValid,
    ref,
  };
}
