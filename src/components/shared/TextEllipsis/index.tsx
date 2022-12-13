import React from 'react';

import { When } from '../When';
import { Text5 } from '../Texts';
import { doNothing } from '../../../utils/functions';

type Props = {
  text: string;
  className?: string;
  maxLength: number;
};

export function TextEllipsis({ className, text, maxLength }: Props) {
  const abreviate = text.length - 7 > maxLength;

  return (
    <div className="flex items-end">
      <div onClick={doNothing} className={`overflow-hidden h-full ${className ? className : ''}`}>
        <Text5>{abreviate ? text.substring(0, maxLength) : text}</Text5>
      </div>
      <When value={abreviate}>
        <span title={text}>
          <Text5>{' ( ... )'}</Text5>
        </span>
      </When>
    </div>
  );
}
