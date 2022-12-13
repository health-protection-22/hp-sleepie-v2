import { useState } from 'react';
import {
  TELL_US,
  BASED_ON_SCIENCE,
  FINE_TUNE,
  HEALTH_CONDITIONS,
  SECURITY,
  START_YOUR_SLEEP,
} from '../constants';
import React from 'react';
import { TellUsContent } from '../Contents/TellUs';
import { BasedOnScienceContent } from '../Contents/BasedOnScience';
import { FineTuneContent } from '../Contents/FineTune';
import { HealthConditionsContent } from '../Contents/HealthConditions';
import { SecurityContent } from '../Contents/Security';
import { StartYourSleepContent } from '../Contents/StartYourSleep';

export default function useBetterSleep() {
  const [activeButton, setActiveButton] = useState<string>(TELL_US);

  const optionsButtons = [
    TELL_US,
    HEALTH_CONDITIONS,
    FINE_TUNE,
    START_YOUR_SLEEP,
    BASED_ON_SCIENCE,
    SECURITY,
  ];

  function handleActiveButton(value: string) {
    setActiveButton(value);
  }

  const getOptionContent = (value: string) => {
    switch (value) {
      case TELL_US:
        return <TellUsContent />;
        break;

      case HEALTH_CONDITIONS:
        return <HealthConditionsContent />;
        break;

      case FINE_TUNE:
        return <FineTuneContent />;
        break;

      case START_YOUR_SLEEP:
        return <StartYourSleepContent />;
        break;

      case BASED_ON_SCIENCE:
        return <BasedOnScienceContent />;
        break;

      case SECURITY:
        return <SecurityContent />;
        break;
      default:
        break;
    }
  };

  return { activeButton, optionsButtons, handleActiveButton, getOptionContent };
}
