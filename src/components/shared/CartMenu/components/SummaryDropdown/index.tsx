import React from 'react';

import { DropdownDisplay } from '../../../DropdownDisplay';
import { useCartMenu } from '../../hooks/useCartMenu';
import { Text } from '@chakra-ui/react';
import { When } from '../../../When';

export function SummaryDropdown() {
  const { itemSummaryElements } = useCartMenu();
  const itemsLength = itemSummaryElements.length;

  return (
    <When value={itemsLength}>
      <DropdownDisplay
        ItemsElements={itemSummaryElements}
        defaultTextElementDisplay={
          <Text>
            {'Your pill pack contains '}
            <strong>
              {itemsLength} {itemsLength > 1 ? 'items' : 'item'}
            </strong>
          </Text>
        }
      />
    </When>
  );
}
