import React from 'react';
import { Text, Highlight } from '@chakra-ui/react';

interface MessageProps {
  text: string;
  query: string;
  color: string;
}

export function Message({ text, query, color = 'gray.600' }: MessageProps) {
  return (
    <Text
      borderWidth="2px"
      display="inline-block"
      px={4}
      borderRadius="3xl"
      borderColor={color}
      color="gray.600"
      fontSize="sm"
    >
      <Highlight
        query={query}
        styles={{ fontWeight: 'semibold', color: color, whiteSpace: 'normal' }}
      >
        {text}
      </Highlight>
    </Text>
  );
}
