import React from 'react';

import { usePageSuccess } from '../../../hooks/pageCheckout/success/usePageSuccess';
import { AppDownloadBanner } from '../../../components/shared/AppDownloadBanner';
import WithAuthentication from '../../../components/shared/WithAuthentication';
import { Text2, Text3, Text4 } from '../../../components/shared/Texts';
import scanApp from '../../../../public/images/sleepie-app-scan.png';
import LoadingSpinnerIcon from '../../../assets/icon/LoadingSpinner';
import { TextBox } from '../../../components/shared/TextBox';
import { When } from '../../../components/shared/When';
import CheckIcon from '../../../assets/icon/Check';
import { Page } from '../../../components/Page';
import { useRouter } from 'next/router';
import Image from 'next/image';

function Success() {
  const { query } = useRouter();
  const { tid } = query;
  const transactionId = tid as string;

  const { user, isFetching, isSuccess } = usePageSuccess({ transactionId });
  return (
    <Page>
      <main className="w-full h-fit flex justify-center">
        <div className=" max-w-[550px] xl:max-w-[1440px] w-full flex flex-col justify-center items-center px-6 xl:px-[60px] py-8">
          <When value={isFetching}>
            <LoadingSpinnerIcon fill="black" />
          </When>
          <When value={isSuccess}>
            <div className="flex flex-col justify-center items-center gap-4 mb-14">
              <span className="flex flex-col justify-center items-center bg-[#61D4A2] rounded-full h-24 w-24">
                <CheckIcon width="32" height="30" />
              </span>
              <Text2>Payment confirmed</Text2>
            </div>
            <div className="flex flex-col  items-center gap-6 max-w-[780px] mb-16 ">
              <Text3 className="font-semibold text-center">
                {`Hi ${user?.name.split(' ')[0]}, we are delighted to have you as a client.`}
              </Text3>
              <Text4 className="text-center font-light">
                We sincerely understand what’s to have sleeping problems and how this can ruin our
                lives day by day. We suggest to you to follow the first steps of our program to
                achieve the best results fast.
              </Text4>
            </div>
            <div className="flex flex-col items-center gap-6 max-w-[950px]">
              <Text3 className="font-semibold">We just sent you two packages:</Text3>
              <TextBox title="15-days starter box">
                This is the best starter box based on the initial information you provided. We’ll
                change every 15 days until we see improvements on your tracking app.
              </TextBox>
              <TextBox title="DNA collect kit">
                Collect your sample and mail it. We’ll send to your email your DNA file, guide you
                to read it and our algorithm will automatically take into account to adjust your
                recommendation
              </TextBox>
              <div className="flex w-full mb-8">
                <AppDownloadBanner />
              </div>
              <div
                className={
                  'flex flex-col xl:flex-row w-full gap-4 justify-center items-center mb-8'
                }
              >
                <Image src={scanApp} width={283} height={223} placeholder="blur" alt={'scan app'} />
                <div className="flex flex-col gap-6 max-w-[540px] text-center xl:text-left">
                  <Text4 className=" text-center xl:text-left">
                    Please, its very important that you scan the QR code when you open the pack and
                    take your pills. This will help us understand the best time for you should take
                    your pills.
                  </Text4>
                  <Text4 className=" text-center xl:text-left">
                    Also, it’s very important that you answer your daily quiz
                  </Text4>
                </div>
              </div>
            </div>
          </When>
        </div>
      </main>
    </Page>
  );
}

export default WithAuthentication(Success);
