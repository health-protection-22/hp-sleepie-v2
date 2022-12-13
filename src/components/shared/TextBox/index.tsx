import React from 'react';
import { Text4 } from '../Texts';

type Props = {
  title?: string;
  children: React.ReactNode;
};

export function TextBox({ title, children }: Props) {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-lg bg-backgroundCart-primary ">
      <Text4 className="font-semibold">{title}</Text4>
      <Text4 className="font-light text-textSecondary">{children}</Text4>
    </div>
  );
}
