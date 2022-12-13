import colors from '../../../../styles/Theme/colors';

export default function useHowItWorks() {
  const steps = [
    {
      stepNumber: 1,
      title: 'Customize your formula',
      text: 'Tell us how you feel by answering your sleep and secondary questions. Sleepie will use this data to create a supplement combination for you, for free.',
      stepColor: colors.blueScale[800],
    },
    {
      stepNumber: 2,
      title: 'Fine Tune',
      text: `Indicate your health conditions and eating habits to make your formula more personalized and combined with you.`,
      stepColor: colors.brand.cart,
    },
    {
      stepNumber: 3,
      title: 'Getting Started',
      text: `Order your first box of all-natural personalized sleep-aids for U$59.90, and get ready for that good night's sleep you have always dreamed of.`,
      stepColor: colors.brand.salmon,
    },
  ];

  return { steps };
}
