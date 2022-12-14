import React from 'react';

import { Page } from '../components/Page';

import { Nutratherapy } from '../components/Nutratherapy';

import { YoureUnique } from '../components/Home/YoureUnique';
import GetStartedImage from '../../public/images/GetStarted.png';
import Image from 'next/image';

const Home = () => {
  const title = 'Sleepie - We offer a safe and optimized natural supplements';
  const description =
    'Your problems sleeping can be a thing of the past. Meet Sleepie. We offer an Safe and Optimized Natural Supplements.';

  return (
    <div className="w-full h-fit">
      <Page title={title} description={description}>
        <main className="w-full h-fit">
          <YoureUnique />
          {/* <GetStarted /> */}
          <div className="flex justify-center items-center bg-background-secondary">
            <Image src={GetStartedImage} width={1440} height={2132} alt="test" />
          </div>
          <Nutratherapy />
        </main>
      </Page>
    </div>
  );
};

export default Home;
