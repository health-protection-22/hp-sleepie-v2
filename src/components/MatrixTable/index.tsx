import React from 'react';
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';

import { DietarySupplement } from './components/DietarySupplement';
import { HealthGoal } from './components/HealthGoal';
import { EvidenceLevel } from './components/EvidenceLevel';
import { MagnitudeLevel } from './components/MagnitudeLevel';
import { ScientificArticles } from './components/ScientificArticles';

import { RelationProps } from '../../@types/RelationProps';

type MatrixTableProps = {
  columns: {
    key: string
    label: string
  }[]
  rows: RelationProps[]
}

export function MatrixTable({ columns, rows }: MatrixTableProps) {
  return (
    <SimpleGrid spacing={4}>
      <Flex display={['none', 'none', 'flex']} gap={4} fontSize="sm">
        {columns.map((column) => (
          <Flex
            key={column.key}
            flex="1"
            bg="gray.300"
            p={3}
            borderRadius="xl"
            alignItems="center"
          >
            <Text textTransform="uppercase" fontWeight="semibold">
              {column.label}
            </Text>
          </Flex>
        ))}
      </Flex>
      {rows.map((row, index) => (
        <Box key={index} mb={['12', '12', '0']}>
          <Flex direction={['column', 'column', 'row']} gap={4} fontSize="sm">
            {Object.entries(row)
              .filter(({ 0: key }) =>
                columns.map((column) => column.key).includes(key),
              )
              .map(({ 0: key, 1: value }) => {
                let component;

                switch (key) {
                  case 'dietarySupplement':
                    if (typeof value === 'object' && !Array.isArray(value)) {
                      component = (
                        <DietarySupplement
                          slug={value.slug}
                          title={value.title}
                          category={value.category}
                        />
                      );
                    }
                    break;

                  case 'healthGoal':
                    if (typeof value === 'object' && !Array.isArray(value)) {
                      component = (
                        <HealthGoal slug={value.slug} title={value.title} />
                      );
                    }
                    break;

                  case 'evidenceLevel':
                    component = (
                      <EvidenceLevel title={key} value={Number(value)} />
                    );
                    break;

                  case 'magnitudeLevel':
                    component = (
                      <MagnitudeLevel title={key} value={Number(value)} />
                    );
                    break;

                  case 'studies':
                    component = (
                      <ScientificArticles title={key} relation={row} />
                    );
                    break;

                  default:
                    component = <></>;
                }

                return (
                  <Flex
                    key={key}
                    flex="1"
                    bg="gray.100"
                    p={3}
                    borderRadius="xl"
                    alignItems="center"
                    fontWeight="semibold"
                  >
                    {component}
                  </Flex>
                );
              })}
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
}
