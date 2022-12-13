import { useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { EFSA } from '../../../../assets/stamps/EFSA';
import { FDAStamp } from '../../../../assets/stamps/FDA';
import { GoogleSafeStamp } from '../../../../assets/stamps/GoogleSafe';
import { SSLSecuredStamp } from '../../../../assets/stamps/SSLSecured';
import { USDAorganic } from '../../../../assets/stamps/USDAorganic';

export function Stamps() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <div className="flex items-center gap-5 lg:gap-6 flex-wrap justify-center lg:justify-start">
      <FDAStamp width={isWideVersion ? '104' : '54'} height={isWideVersion ? '44' : '24'} />
      <USDAorganic width={isWideVersion ? '63' : '30'} height={isWideVersion ? '63' : '30'} />
      <EFSA width={isWideVersion ? '127' : '66'} height={isWideVersion ? '60' : '31'} />
      <GoogleSafeStamp width={isWideVersion ? '193' : '100'} height={isWideVersion ? '59' : '30'} />
      <SSLSecuredStamp width={isWideVersion ? '49' : '25'} height={isWideVersion ? '60' : '31'} />
    </div>
  );
}
