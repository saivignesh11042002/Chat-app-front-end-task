import React from 'react';
import { Flex, IconButton, Text, Spacer, Avatar, Box } from '@chakra-ui/react';
import { ArrowBackIcon, EditIcon } from '@chakra-ui/icons';

interface HeaderProps {
  groupName: string;
  From:string;
  To:string
}

const Header: React.FC<HeaderProps> = ({ groupName,From,To }) => {
  return (
    <Flex direction="column" bg="white" boxShadow="md" top={6}
    left={10}
    right={10}
    mt={8}>
      <Flex align="center" p={2}>
        <Flex align="center" flex="1">
          <IconButton
            icon={<ArrowBackIcon />}
            aria-label="Back"
            mr={2}
            variant="ghost"
            onClick={() => {
              // Handle back button click
            }}
          />
          <Text fontWeight="bold">{groupName}</Text>
        </Flex>
        <Flex align="center">
          <IconButton
            icon={<EditIcon />}
            aria-label="Edit"
            mr={2}
            variant="ghost"
            onClick={() => {
              // Handle edit button click
            }}
          />
        </Flex>
      </Flex>
      <Flex align="center" p={2}>
        <Box>
          <Avatar size="sm" src="https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o"  />
        </Box>
        <b><Text ml={2} isTruncated={false}>From</Text></b>&nbsp;&nbsp;<Text>{From}</Text><br/><br/>
        </Flex>
        <Flex align="center">
        <b><Text ml={2} isTruncated={false}>To</Text></b>&nbsp;&nbsp;<Text>{To}</Text>
        </Flex>
      
    </Flex>
  );
};

export default Header;





