import React from 'react';
import EmailIcon from '../../../assets/icon/Email';
import PasswordIcon from '../../../assets/icon/Password';
import ProfileIcon from '../../../assets/icon/ProfileIcon';
import RefreshIcon from '../../../assets/icon/Refresh';
import { Button } from '../../shared/Button';
import { SelectDate } from '../../shared/CustomSelects/SelectDate';
import { Input } from '../../shared/Input';

export function ChangeInfosForm() {
  return (
    <form>
      <div className="flex flex-col gap-4">
        <span className="text-xl font-semibold">Personal Data</span>
        <Input onLeftIcon={<ProfileIcon />} placeholder="Name" />
        <span className="text-xl font-semibold">Date of Birth</span>
        <div className="flex gap-2 items-center">
          <SelectDate />
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <span className="text-xl font-semibold">Account Data</span>
        <Input onLeftIcon={<EmailIcon />} placeholder="email@healthprotection.com" />
        <Input onLeftIcon={<PasswordIcon />} placeholder="New Password" type={'password'} />
        <Input onLeftIcon={<PasswordIcon />} placeholder="Confirm New Password" type={'password'} />
        <Button className="w-full justify-center items-center h-[50px]">
          <RefreshIcon />
          <span className="font-bold text-sm text-white-full">Update Indormation</span>
        </Button>
      </div>
    </form>
  );
}
