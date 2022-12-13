import React from 'react';
import MailIcon from '../../../../../assets/icon/MailIcon';
import TelephoneIcon from '../../../../../assets/icon/Telephone';

export function Address() {
  return (
    <address className="flex flex-col items-start gap-6 not-italic">
      <div className="flex flex-col items-start gap-2">
        <span className="text-sm font-semibold text-text-secondary">Contact</span>
        <div className="flex items-center gap-2">
          <MailIcon />
          <span className="text-sm font-normal text-text-secondary">info@healthprotection.com</span>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <span className="text-sm font-semibold text-text-secondary">
          Support / Viber / Telegram
        </span>
        <div className="flex items-center gap-2">
          <TelephoneIcon />
          <span className="text-sm font-normal text-text-secondary">+ 34 699 810 469</span>
        </div>
      </div>
    </address>
  );
}
