import React from 'react';
import colors from '../../../../../styles/Theme/colors';
import { StepOneImage } from '../../StepsImages/StepOne';
import { StepThreeImage } from '../../StepsImages/StepThree';
import { StepTwoImage } from '../../StepsImages/StepTwo';

export default function useStepByStepMobile() {
  const steps = [
    {
      stepNumber: 1,
      title: 'Customize your formula',
      text: 'Complete your sleep, health and diet information, and  Sleepie will use this data to create a supplement combination specifically for you.',
      stepColor: colors.blueScale[800],
      image: <StepOneImage />,
    },
    {
      stepNumber: 2,
      title: 'Getting started',
      text: `Order your first box of all natural personalized sleep-aids, and get ready for that good night${'\u0027'}s sleep you have always dreamed of.`,
      stepColor: colors.brand.cart,
      image: <StepTwoImage />,
    },
    {
      stepNumber: 3,
      title: 'Adjusting your Sleepie',
      text: 'Your body changes and so does your sleep.  If any changes occur, fill-out the sleep data again, and the formula in your next box will be adjusted.',
      stepColor: colors.brand.salmon,
      image: <StepThreeImage />,
    },
  ];

  return { steps };
}
