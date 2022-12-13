import React from 'react';
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';

export function JoinOurTeam() {
  return (
    <Flex flexDir={['column', 'column', 'column', 'row']} gap={8} alignItems="center">
      <Box flex={1}>
        <Heading as="h3" size="md" mb={4} fontWeight="medium" color="primary.600">
          How about helping the world to sleep better?
        </Heading>
        <Text textAlign="justify">
          Here at <Text as="strong">&quot;Sleepie By HealthProtection&quot;</Text> - We are building
          a team where you can develop intrapreneurship! Here, you can discover multiple ways to use
          your best skills and see results happen. Be a part of it.
        </Text>
      </Box>
      <Flex
        bgImage="/images/bg-work-with-us.png"
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPosition="center"
        mt={12}
        minH={540}
        direction="column"
        justify="center"
        alignItems="center"
        flex={1}
      >
        <Heading as="h3" size="md" mb={4} textAlign="center" color="gray.600">
          Work with us
        </Heading>
        <Stack maxW={480} mx="auto" gap={4}>
          <FormControl isRequired>
            <Input type="text" placeholder="Name*" variant="filled" />
            <FormErrorMessage>Name is required</FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <Input type="email" placeholder="E-mail*" variant="filled" />
            <FormErrorMessage>E-mail is required</FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <Input type="tel" placeholder="Phone*" variant="filled" />
            <FormErrorMessage>Phone is required</FormErrorMessage>
          </FormControl>
          <FormControl>
            <Textarea placeholder="Message" variant="filled" />
          </FormControl>
          <Button type="submit">Send</Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
