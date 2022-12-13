import React from 'react';
import { Button } from '../../../shared/Button';
import { Link } from '../../../shared/Link';

type Props = {
  onClick?: () => void;
  style?: object;
};

export function TryNowButton({ onClick, style }: Props) {
  return (
    <Link url="/#nutratherapy">
      <Button style={style} onClick={onClick} className="try-now-header">
        Try now
      </Button>
    </Link>
  );
}
