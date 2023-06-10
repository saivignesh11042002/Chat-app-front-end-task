import React from 'react';
import { Flex, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { AttachmentIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const Footer: React.FC = () => {
  const handleSendMessage = () => {
    // Your logic to send the new message goes here
  };

  return (
    <Flex align="center" p={4} >
      <IconButton aria-label="Attach files" icon={<AttachmentIcon />} variant="ghost" colorScheme="gray" mr={2} />
      <InputGroup>
        <Input placeholder="Type a message..." />
        <InputRightElement width="auto" pr={0}>
          <IconButton
            aria-label="Send message"
            icon={<ArrowForwardIcon />}
            variant="ghost"
            colorScheme="blue"
            onClick={handleSendMessage}
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default Footer;

