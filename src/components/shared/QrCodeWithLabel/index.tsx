import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Text4 } from '../Texts';

type Props = {
  qrCode: string;
  label?: string;
  size?: number;
  className?: string;
};

export function QrCodeWithLabel({ label, qrCode, size = 100, className = '' }: Props) {
  return (
    <div className={`flex gap-2 flex-col items-center ${className}`}>
      <QRCodeSVG value={qrCode} size={size} />
      <Text4>{label}</Text4>
    </div>
  );
}
