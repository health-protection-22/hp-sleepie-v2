import React from 'react';
import IndicateArrow from '../../../assets/icon/IndicateArrow';
import colors from '../../../styles/Theme/colors';
import { Link } from '../Link';

type Props = {
  text: string;
  url: string;
};

export function IndicationArrow({ text, url }: Props) {
  return (
    <Link url={url}>
      <button className="flex flex-col items-center gap-2 hover:opacity-70 duration-200">
        <span className="text-base font-medium text-text-primary">{text}</span>
        <IndicateArrow hoverAnimate fill={colors.brand.secondary} />
      </button>
    </Link>
  );
}
