const title = 'Sleepie - An all natural personalized supplement with no side effects.';
const description =
  'Having trouble sleeping? Try Sleepie, and say goodbye to those sleepless nights. An all natural science-based sleep-aid, customized for you. No side effects.';

export const SEO = {
  title,
  description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sleepie.life',
    title,
    description,
    images: [
      {
        url: 'https://www.sleepie.life/images/logo-sleepie.png',
        alt: title,
        width: 124,
        height: 40,
      },
    ],
  },
};
