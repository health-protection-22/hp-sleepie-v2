import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import BlueArrowBottomIcon from '../../../assets/icon/BlueArrowBottom';
import colors from '../../../styles/Theme/colors';
import { Button } from '../../shared/Button';
import { Link } from '../../shared/Link';
import { Text4 } from '../../shared/Texts';
import { Stamps } from './Stamps';
import { Title } from './Title';

export function YoureUnique() {
  return (
    <div className="w-full flex flex-col justify-center items-center my-16 lg:mt-16">
      <div className="max-w-[1440px] px-6 lg:px-[60px] w-full flex flex-col-reverse gap-10 items-center lg:flex-row lg:justify-between ">
        <div className="lg:max-w-[450px] flex flex-col gap-10 lg:gap-32">
          <div className="flex flex-col gap-6 items-center lg:items-start">
            <div className="flex flex-col gap-4">
              <Title />
              <p className="text-[16px] lg:text-[24px] leading-6 font-normal text-text-secondary text-center lg:text-start">
                Create your own sleep-aid solution. <br />
                All natural and science-based.
              </p>
            </div>
            <Link url="/#nutratherapy">
              <Button
                className="try-now-start items-center h-[56px] text-xl lg:text-2xl py-2 lg:py-3 text-white-full text-center w-full"
                style={{
                  backgroundColor: colors.brand.secondary,
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  paddingLeft: '50px',
                  paddingRight: '50px',
                  fontWeight: 'bold',
                  color: colors.white.full,
                }}
              >
                Try Now
              </Button>
            </Link>
          </div>
          <Stamps />
        </div>
        <Image
          src={'/images/HomeSleepie.png'}
          width={749}
          height={636}
          alt="Image showing how to track your sleep by scanning the QR code on the packing"
        />
      </div>
      <NextLink href="/#how-it-works">
        <div className="flex flex-col items-center mt-[30px] lg:mt-[100px] hover:opacity-70 duration-200 cursor-pointer">
          <Text4 className="text-lg text-text-primary font-medium">how it works</Text4>
          <BlueArrowBottomIcon />
        </div>
      </NextLink>
    </div>
  );
}
