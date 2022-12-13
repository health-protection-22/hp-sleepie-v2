import { useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { IndicationArrow } from '../../shared/IndicationArrow';
import { When } from '../../shared/When';
import useBetterSleep from './hooks/useBetterSleep';
import { OptionCard } from './OptionCard';
import { OptionCardMobile } from './OptionCardMobile';

export function BetterSleep() {
  const { optionsButtons, activeButton, handleActiveButton, getOptionContent } = useBetterSleep();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <div className="w-full flex flex-col justify-center items-center my-16 lg:mt-16 gap-[45px] lg:gap-[90px]">
      <div className="max-w-[1440px] px-6 lg:px-[60px] w-full flex flex-col gap-10 items-center lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-10 max-w-[450px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-[30px] lg:text-[40px] font-bold text-text-primary leading-8 lg:leading-[48px] max-w-[303px]">
              An effective way to better sleep
            </h2>
            <p className="text-[16px] lg:text-[20px] leading-6 font-normal text-text-secondary">
              With science, technology, and expert advice, Sleepie is a unique method that will
              guide you to your dream sleep based on what you really need.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {optionsButtons.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <When value={isWideVersion}>
                    <OptionCard
                      isActive={activeButton === item}
                      label={item}
                      handleActiveButton={handleActiveButton}
                    />
                  </When>
                  <When value={!isWideVersion}>
                    <OptionCardMobile
                      handleActiveButton={handleActiveButton}
                      isActive={activeButton === item}
                      label={item}
                    />
                  </When>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <When value={isWideVersion}>{getOptionContent(activeButton)}</When>
      </div>
      <IndicationArrow text="Start now" url="/#nutratherapy" />
    </div>
  );
}
