import PastClockIcon from '../../../assets/icon/PastClock';
import React from 'react';
import { Text4, Text5 } from '../../shared/Texts';
import { Button } from '@chakra-ui/react';

export function PastRecommendations() {
  return (
    <div className="w-full rounded-2xl px-8 py-4 bg-brand-lightPurple flex items-center justify-between">
      <div className="flex items-center gap-2">
        <PastClockIcon />
        <Text4 className="font-normal">Past Recommendations</Text4>
      </div>
      <Button px={4} py={2} colorScheme={'red'}>
        <Text5>View</Text5>
      </Button>
    </div>
  );
}
