import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const BorderProps = ({borderColor, bottom, borderStyle,borderw, borderLeft,borderLeftw, borderRight, borderTop, text, rounded, bg}) => {
  return (
    <Box w={{base:'95%', md: '90%', lg: '85%'}} border={'2px'} borderStyle={borderStyle} borderWidth={borderw} borderLeftWidth={borderLeftw} borderLeft={borderLeft} rounded={rounded} bg={bg} borderBottom={bottom} borderRight={borderRight} borderTop={borderTop} borderColor={borderColor} h={{base: '55px', md: '75px', lg: '69px'}} display={'flex'} alignItems={'center'}><Text pl={'20px'} fontSize={{base:'20px', md: '15px', lg: '20px'}}>{text}</Text>
    </Box>
  )
}

export default BorderProps
