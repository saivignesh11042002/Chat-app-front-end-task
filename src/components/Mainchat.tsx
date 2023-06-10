/*import React from 'react';
import { Flex, Avatar, Box, Text } from '@chakra-ui/react';
import {useEffect,useRef} from 'react'

interface MainchatProps {
  messages: any[];
  
  isLoading:boolean;
}

const MainChat: React.FC<MainchatProps> = ({ messages,isLoading }) => {
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        const chatContainer = chatContainerRef.current;
    
        if (chatContainer) {
          const { scrollTop, clientHeight, scrollHeight } = chatContainer;
          const threshold = 200;
    
          if (scrollTop < threshold && !isLoading) {
            loadMore();
          }
        }
      };
    
      useEffect(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.addEventListener('scroll', handleScroll);
        }

    
    
        

    
  return (
    <Flex direction="column" align="flex-start" justify="flex-start" mt={12} p={4}>
      {messages.map((message: any, index) => (
        <Flex key={index} align="center" marginBottom="2">
          <Avatar size="sm" src={message.sender.image} />
          <Box boxShadow='xl' p='6' rounded='md' bg='white' padding="20px 20px 20px 20px" marginBottom="20px">
            <Text>{message.message}</Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default MainChat;
*/
import React from 'react';
import { Flex, Avatar, Box, Text } from '@chakra-ui/react';

interface MainChatProps {
  messages: any[];
}

const MainChat: React.FC<MainChatProps> = ({ messages }) => {
  return (
    <Flex direction="column" align="flex-start" justify="flex-start" mt={12} p={4}>
      {messages.map((message: any, index) => (
        <Flex key={index} align="center" marginBottom="2">
          <Avatar size="sm" src={message.sender.image} />
          <Box boxShadow="xl" p="6" rounded="md" bg="white" padding="20px 20px 20px 20px" marginBottom="20px">
            <Text>{message.message}</Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default MainChat;

