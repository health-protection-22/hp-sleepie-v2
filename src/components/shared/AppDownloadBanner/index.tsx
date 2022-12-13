import React from 'react';
import AppStoreDownloadIcon from '../../../assets/icon/AppStoreDownload';
import PlayStoreDownloadIcon from '../../../assets/icon/PlayStoreDownload';
import { useCartContext } from '../../../contexts/Cart';
import { QrCodeWithLabel } from '../QrCodeWithLabel';
import { Text4 } from '../Texts';
import { When } from '../When';

export function AppDownloadBanner() {
  const { tryToConvert } = useCartContext();
  return (
    <div className='flex xl:px-14 w-full h-full'>
      <div
        className={`flex justify-center w-full gap-6 xl:justify-between items-center`}
      >
        <QrCodeWithLabel
          qrCode={'https://www.google.com/'}
          className={`hidden xl:flex`}
          label={'iOs'}
          size={120}
        />
        <div
          className={`flex flex-col h-full gap-4 items-center w-full ${
            tryToConvert !== true ? 'justify-between' : 'justify-center'
          }`}
        >
          <When value={tryToConvert !== true}>
            <div className="flex w-full justify-center xl:w-[280px] h-fit">
              <Text4 className="text-center font-semibold">
                Meanwhile be sure to start tracking your sleep with the app
              </Text4>
            </div>
          </When>
          <div className={'grid xl:grid-cols-2 gap-6'}>
            <a className={'cursor-pointer'}>
              <AppStoreDownloadIcon />
            </a>
            <a className={'cursor-pointer'}>
              <PlayStoreDownloadIcon />
            </a>
          </div>
        </div>
        <QrCodeWithLabel
          qrCode={'https://www.google.com/'}
          className={`hidden xl:flex`}
          label={'Android'}
          size={120}
        />
      </div>
    </div>
  );
}
