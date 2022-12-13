import React from 'react';
import colors from '../../../../styles/Theme/colors';
import { Button } from '../../../shared/Button';
import { Link } from '../../../shared/Link';

type Props = {
  mt?: number;
  mb?: number;
};

export function TryNowButton({ mb, mt }: Props) {
  return (
    <Link url="/#nutratherapy">
      <Button
        className="items-center h-[56px] try-now-middle"
        style={{
          backgroundColor: colors.brand.secondary,
          paddingTop: '18px',
          paddingBottom: '18px',
          paddingLeft: '62px',
          paddingRight: '62px',
          marginTop: mt,
          marginBottom: mb,
          color: colors.white.full,
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        Try Now
      </Button>
    </Link>
  );
}
