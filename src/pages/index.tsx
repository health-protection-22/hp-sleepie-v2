import React from 'react';

import { Page } from '../components/Page';

import { Nutratherapy } from '../components/Nutratherapy';

import { YoureUnique } from '../components/Home/YoureUnique';
import { HowItWorks } from '../components/Home/HowItWorks';
import { BetterSleep } from '../components/Home/BetterSleep';

const Home = () => {
  const title = 'Sleepie - We offer a safe and optimized natural supplements';
  const description =
    'Your problems sleeping can be a thing of the past. Meet Sleepie. We offer an Safe and Optimized Natural Supplements.';

  return (
    <div className="w-full h-fit">
      <Page title={title} description={description}>
        <main className="w-full h-fit">
          <YoureUnique />
          <HowItWorks />
          <BetterSleep />
          <Nutratherapy />
        </main>
      </Page>
    </div>
  );
};

export default Home;
