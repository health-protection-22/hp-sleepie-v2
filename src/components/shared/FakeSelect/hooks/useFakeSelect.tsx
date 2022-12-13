import { useEffect, useRef, useState } from 'react';

import { doNothing } from '../../../../utils/functions';
import config from '../../../../config';
import { SelectOption } from '../types';

type Props = {
  isRequired?: boolean;
  initialOption?: {
    value: string;
    label: string;
  };
  onOpen?: () => void;
  onSet?: () => void;
  id: string;
};

export function useFakeSelect({
  id,
  isRequired,
  initialOption = { value: '', label: '' },
  onOpen,
  onSet,
}: Props) {
  const { isRequired: messageValidation } = config.messages.validations;

  const [selectedOption, setSelectedOption] = useState<SelectOption>(initialOption);
  const [showMessageValidation, setShowMessageValidation] = useState(false);
  const [distanceFromTop, setDistanceFromTop] = useState(0);
  const [distanceFromLeft, setDistanceFromLeft] = useState(0);
  const [positionTop, setPositionTop] = useState('0px');
  const [show, setShow] = useState(true);
  const offsetSizeBody = { height: document.body.offsetHeight, width: window.innerWidth - 15 };
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!selectedOption.value) return;
    if (onSet) onSet();
  }, [selectedOption.value]);

  function calculateDistanceFromCorner() {
    const backdropElement = document.getElementById('backdrop-' + id) as HTMLElement;
    if (!backdropElement.scrollHeight || !backdropElement.scrollWidth) return;
    const sizeOfScroll = 15;
    const distanceOfBodyToTopViewport = document.body.getBoundingClientRect().top;
    const distanceOfBackdropToTopViewport = backdropElement.getBoundingClientRect().top;

    if (distanceOfBackdropToTopViewport <= 0) return;

    const distanceTop = distanceOfBackdropToTopViewport - distanceOfBodyToTopViewport;
    setDistanceFromTop(distanceTop);
    setDistanceFromLeft(backdropElement.getBoundingClientRect().left + sizeOfScroll);
  }

  function validate(options: SelectOption) {
    if (isRequired && !options.value) {
      setShowMessageValidation(true);
    } else {
      setShowMessageValidation(false);
    }
  }
  function openOptions() {
    if (!ref.current) return;

    if (onOpen) onOpen();
    setShow(true);
  }

  function closeOptions(options?: SelectOption) {
    setShow(false);
    validate(options ? options : selectedOption);
  }

  function onChange() {
    doNothing();
  }

  useEffect(() => {
    if (!show) return;
    calculateDistanceFromCorner();
  }, [show]);

  useEffect(() => {
    const customSelect = document.getElementById('divSelect-' + id);
    if (!customSelect) return;

    const height = customSelect.scrollHeight;
    setPositionTop((height - 6).toString() + 'px');
    setShow(false);
  }, []);

  function handleClick() {
    if (show) return closeOptions();
    return openOptions();
  }

  function onSelectItem(options: SelectOption) {
    setSelectedOption(options);
    closeOptions(options);
  }

  useEffect(() => {
    ref.current?.addEventListener('invalid', function (event) {
      event.preventDefault();

      validate(selectedOption);
    });
  });

  return {
    showMessageValidation,
    messageValidation,
    distanceFromLeft,
    distanceFromTop,
    selectedOption,
    offsetSizeBody,
    onSelectItem,
    closeOptions,
    handleClick,
    positionTop,
    onChange,
    show,
    ref,
  };
}
