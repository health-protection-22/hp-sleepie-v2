import { Box, Button, Flex, Heading, Link, Progress, Text } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import { When } from '../../shared/When';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import { DietarySupplementsList } from '../../DietarySupplementsList';
import useSupplementsList from './hooks/useSupplementsList';
import { lighten } from 'polished';
import { InputAutocomplete } from '../../shared/CustomInputs/InputAutocomplete';

export function SupplementsList() {
  const { categories, handleOrder, orders, dietarySupplementsList, handleSearch, isLoading } =
    useSupplementsList();

  return (
    <>
      <When value={isLoading}>
        <Progress size="xs" isIndeterminate colorScheme={'purple'} />
      </When>
      <When value={!isLoading}>
        <Box>
          <Text textAlign="justify">
            Sleep supplements are any food that can supplement and provide nutrition, sensory
            satisfaction, and beneficial physiological effects. More specifically, is defined as any
            product that can be taken by mouth that contains a dietary ingredient intended to
            supplement a diet. Can be split into thirteen categories and there are more than two
            hundred cataloged dietary supplement, the categories are detailed below, so you can find
            the nutraceutical according to the divisions.
          </Text>
        </Box>
        <Box>
          <InputAutocomplete
            list={dietarySupplementsList}
            dispatchActionOnSelect={handleSearch}
            placeholder="Search dietary supplement"
          />
        </Box>
        {categories.map(({ slug, name, color, dietarySupplements }) => {
          const order = orders.find((order) => order.category === slug)?.order || 'asc';
          return (
            <Box key={slug} textAlign="right">
              <Flex color={color} borderBottom={'2px'} mb={4} pb={1} justifyContent="space-between">
                <Heading
                  size="md"
                  textTransform="uppercase"
                  fontWeight={'bold'}
                  color={color}
                  textAlign="left"
                >
                  <NextLink href={`/dietary-supplements/${slug}`} passHref>
                    <Link color={color}>{name}</Link>
                  </NextLink>
                </Heading>
                <Button
                  onClick={() => {
                    handleOrder(slug);
                  }}
                  variant="ghost"
                  size="xs"
                  colorScheme={'gray'}
                  _hover={{ backgroundColor: lighten(0.2, color) }}
                >
                  <Text color={color} mr={1}>
                    A-Z
                  </Text>
                  <When value={order === 'desc'}>
                    <FaLongArrowAltUp />
                  </When>
                  <When value={order === 'asc'}>
                    <FaLongArrowAltDown />
                  </When>
                </Button>
              </Flex>

              <DietarySupplementsList dietarySupplements={dietarySupplements} order={order} />
            </Box>
          );
        })}
      </When>
    </>
  );
}
