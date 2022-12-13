import React, { useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Box, Flex, Text, Button, Tooltip, Spinner, useBreakpointValue } from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';
import { darken, transparentize } from 'polished';
import { useStatesUtils } from '../../../../../../../.././../utils/functions/states';

const Xarrow = dynamic(() => import('react-xarrows'), {
  ssr: false,
});

import { useNutratherapy } from '../../../../../../../../../contexts/Nutratherapy';
import { useSankey } from '../../../../../contexts/sankey';
import { When } from '../../../../../../../../shared/When';
import { useSubHealthGoal } from './hooks/useSubHealthGoal';
import { SubHealthGoalProps } from '../../../../@types/SubHealthGoalProps';
type Props = {
  subHealthGoal: SubHealthGoalProps;
};

export function SubHealthGoal({ subHealthGoal }: Props) {
  const nutratherapyContext = useNutratherapy();
  const { isLoading } = nutratherapyContext;

  const { forceUpdate } = useStatesUtils();

  const { BASE_HEIGHT, clickedSubHealthGoal } = useSankey();

  const isWideVersion = useBreakpointValue({
    lg: false,
    xl: true,
  });

  const { isActive, activeOption, relatedDietarySupplements, handleFineTuneClick } =
    useSubHealthGoal();

  const subConnections = useMemo(() => {
    return relatedDietarySupplements(subHealthGoal);
  }, [relatedDietarySupplements, subHealthGoal]);

  const containerWideHeight = useMemo(() => {
    return (subConnections.length || 1) * BASE_HEIGHT + 'px';
  }, [subConnections, BASE_HEIGHT]);

  const strokeWidth = useMemo(() => {
    return isWideVersion ? BASE_HEIGHT : BASE_HEIGHT / 4;
  }, [isWideVersion, BASE_HEIGHT]);

  const boxMobileBg = transparentize(0.2, 'white');

  useEffect(() => {
    forceUpdate();
  }, [subConnections, subHealthGoal]);

  return (
    <Box key={subHealthGoal.slug} position="relative">
      <Flex
        id={`sub_${subHealthGoal.slug}`}
        px={2}
        py={2}
        h={['auto', 'auto', 'auto', 'auto', containerWideHeight]}
        position="relative"
        flexDir={['column', 'column', 'column', 'column', 'row']}
        justifyContent="space-between"
        alignItems={['flex-start', 'flex-start', 'flex-start', 'flex-start', 'center']}
        bg={[
          boxMobileBg,
          boxMobileBg,
          boxMobileBg,
          boxMobileBg,
          isActive(subHealthGoal.slug) ? transparentize(0.8, subHealthGoal.color) : 'gray.200',
        ]}
        gap={[0, 0, 0, 0, 2]}
      >
        <Flex gap={1}>
          <When value={subHealthGoal.description}>
            <Tooltip
              label={subHealthGoal.description}
              aria-label={`${subHealthGoal.title} description`}
              bg={subHealthGoal.color}
              py={2}
              px={3}
              borderRadius="xl"
              textAlign="justify"
            >
              <QuestionIcon
                color={
                  isActive(subHealthGoal.slug) ? darken(0.05, subHealthGoal.color) : 'gray.600'
                }
                fontSize={14}
                _hover={{ cursor: 'pointer' }}
              />
            </Tooltip>
          </When>
          <Text
            fontSize="xs"
            flex={1}
            color={[
              darken(0.2, subHealthGoal.color),
              darken(0.2, subHealthGoal.color),
              darken(0.2, subHealthGoal.color),
              darken(0.2, subHealthGoal.color),
              isActive(subHealthGoal.slug) ? darken(0.2, subHealthGoal.color) : 'gray.600',
            ]}
            fontWeight="semibold"
            lineHeight={'base'}
          >
            {subHealthGoal.question || subHealthGoal.title}
          </Text>
        </Flex>
        <Box minW="24px" textAlign="center">
          <When value={isLoading && clickedSubHealthGoal === subHealthGoal.slug}>
            <Spinner
              color={subHealthGoal.color}
              emptyColor="gray.200"
              size="sm"
              thickness="2px"
              speed="0.75s"
            />
          </When>
        </Box>
        <Flex gap={[0.25, 0.5, 1, 1, 2]} bg="whiteAlpha.900" borderRadius="3xl" p={[0.5, 1]}>
          <Button
            onClick={() => {
              handleFineTuneClick(subHealthGoal.slug, 'no', []);
            }}
            variant={
              !activeOption(subHealthGoal.slug) || activeOption(subHealthGoal.slug) === 'no'
                ? 'solid'
                : 'ghost'
            }
            size="xs"
            fontSize={['xx-small', 'xx-small', 'xs', 'xs', 'xs']}
            textTransform="uppercase"
            fontWeight="semibold"
            lineHeight={1}
            colorScheme={subHealthGoal.parent}
            disabled={isLoading}
            className="sankey-fine-tune"
          >
            {subHealthGoal.parent === 'sleep' ? 'No' : 'Off'}
          </Button>
          {Object.entries(subHealthGoal.options).map(({ 0: option, 1: optionProps }) => (
            <Button
              key={option}
              onClick={() => {
                handleFineTuneClick(subHealthGoal.slug, option, optionProps.items);
              }}
              variant={activeOption(subHealthGoal.slug) === option ? 'solid' : 'ghost'}
              size="xs"
              fontSize={['xx-small', 'xx-small', 'xs', 'xs', 'xs']}
              textTransform="uppercase"
              fontWeight="semibold"
              lineHeight={1}
              colorScheme={subHealthGoal.parent}
              disabled={isLoading || !optionProps.items?.length}
              className="sankey-fine-tune"
            >
              {option}
            </Button>
          ))}
        </Flex>
      </Flex>
      <When value={!!subConnections.length}>
        <Box position="absolute" top={0} left={0}>
          {subConnections.map((dietarySupplement) => {
            return (
              <Box
                key={dietarySupplement.slug}
                id={`${dietarySupplement.slug}_sub_${subHealthGoal.slug}_${subHealthGoal.parent}`}
                height={`${BASE_HEIGHT}px`}
              />
            );
          })}
        </Box>
        <Box
          position="absolute"
          display={['flex', 'flex', 'flex', 'flex', 'block']}
          dir={'column'}
          alignItems={['center', 'center', 'center', 'center', 'flex-start']}
          top={0}
          right={0}
          bottom={0}
        >
          {subConnections.map((dietarySupplement) => (
            <React.Fragment key={dietarySupplement.slug}>
              <Box
                id={`sub_${subHealthGoal.slug}_${dietarySupplement.slug}`}
                height={`${BASE_HEIGHT}px`}
                position={['absolute', 'absolute', 'absolute', 'absolute', 'relative']}
              />
              <Xarrow
                start={`sub_${subHealthGoal.slug}_${dietarySupplement.slug}`}
                end={`${dietarySupplement.slug}_sub_${subHealthGoal.slug}`}
                showHead={false}
                strokeWidth={strokeWidth}
                curveness={0.6}
                startAnchor="right"
                endAnchor="left"
                color={transparentize(0.8, subHealthGoal.color)}
              />
            </React.Fragment>
          ))}
        </Box>
      </When>
    </Box>
  );
}
