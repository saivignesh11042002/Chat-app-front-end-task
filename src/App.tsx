import React, { useState, useEffect, useRef } from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import StatusBar from './components/Statusbar';
import Header from './components/Header';
import Mainchat from './components/Mainchat';
import Footer from './components/Footer'
import './App.css'

const App: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const loadMoreMessages = () => {
    setIsLoading(true);
    console.log(pageNumber)
    if(pageNumber>10)
    console.log("STOPPPPP")
    else
    {
    // Fetch API data for older messages
    fetch(`https://qa.corider.in/assignment/chat?page=${pageNumber}`)
      .then((response) => response.json())
      .then((data) => {
        const olderMessages: any[] = data.chats;
        setMessages((prevMessages) => [...olderMessages, ...prevMessages]);
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
        
        if (pageNumber === 0) {
          setFrom(data.from);
          setTo(data.to);
          setName(data.name);
        }
      })
      .catch((error) => console.log('Error fetching older messages:', error))
      .finally(() => setIsLoading(false));
    }
  };

  const handleScroll = () => {
    const chatContainer = chatContainerRef.current;

    if (chatContainer) {
      const { scrollTop, clientHeight, scrollHeight } = chatContainer;
      const threshold = 100;

      if (scrollTop < threshold && !isLoading && pageNumber > 0) {
        const nextPage = pageNumber - 1;
        setPageNumber(nextPage);
      }
    }
  };

  useEffect(() => {
    loadMoreMessages();
  }, [pageNumber]);

  return (
    
    <Flex direction="column" align="stretch" justify="flex-start" minHeight="100vh">
      {pageNumber > 1 && (
        <Flex justify="center" p={4}>
          
        </Flex>
      )}
      <StatusBar />
      <Header groupName={name} From={from} To={to} />
      
        <Mainchat messages={messages} />
       
      
    
    <Footer/>
    </Flex>
    
  );
};

export default App;






