import React from 'react';
import { Flex, Text, Spacer } from '@chakra-ui/react';
import { MdNetworkWifi, MdSignalCellular4Bar,MdBatteryChargingFull } from 'react-icons/md';


const StatusBar: React.FC = () => {
    return (
      <Flex
        align="center"
        justify="space-between"
        bg="white"
        p={2}
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex="sticky"
      >
        <b><Text ml={2}>10:30 AM</Text></b>
        <Spacer />
        <MdNetworkWifi size={20} />
        <MdSignalCellular4Bar size={20} />
        <MdBatteryChargingFull size={20} />
      </Flex>
    );
  };
  
  

export default StatusBar
