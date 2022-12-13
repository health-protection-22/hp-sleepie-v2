import { Button, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useAuthContext } from '../../../contexts/Auth';
import { Text4 } from '../Texts';
import { When } from '../When';

type Props = {
  isInProfilePage?: boolean;
};

export function ShortCardUser({ isInProfilePage }: Props) {
  const { user, isAuthenticated, signOut } = useAuthContext();

  return (
    <When value={isAuthenticated}>
      <div
        className={
          'flex justify-between items-center px-8 py-6 mb-4 bg-backgroundCart-primary rounded-lg min-w-fit'
        }
      >
        <div className={'flex gap-4 min-w-fit'}>
          <div className="flex justify-center items-center rounded-full  w-fit h-fit min-w-fit overflow-hidden">
            <Image
              width="61"
              height="61"
              src={user?.avatar ?? '/images/default-profile.png'}
              alt="Avatar Image"
              title="Avatar Image"
            />
          </div>
          <div className="flex flex-col justify-center items-start min-w-fit">
            <Text color={'textSecondary'} fontSize={14} lineHeight={4}>
              Wellcome
            </Text>
            <Text>{user?.name.split(' ')[0]}</Text>
          </div>
        </div>
        <When value={!isInProfilePage}>
          <Link href={'/account-details'}>
            <Button px={4} py={2} colorScheme={'red'}>
              <Text4 className="font-normal">My Account</Text4>
            </Button>
          </Link>
        </When>
        <When value={isInProfilePage}>
          <Button px={4} py={2} colorScheme={'red'} onClick={signOut}>
            <Text4 className="font-normal">Sign out</Text4>
          </Button>
        </When>
      </div>
    </When>
  );
}
