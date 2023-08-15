import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const OutlineProps = ({borderStyle, text, borderColor, width, top, left, right, bottom}) => {
  return (
    <Box border={'2px'} borderColor={borderColor} borderStyle={borderStyle} borderTop={top} borderLeft={left} borderRight={right} borderBottom={bottom} borderWidth={width} display={'flex'} alignItems={'center'} w={{base: '100%',xl: '100%', md: '100%', lg: '100%', '2xl': '874px'}} h={'50px'} >
        <Text fontSize={{base:'15px', '2xl': '20px'}} pl={'15px'}>{text}</Text>
    </Box>
  )
}

export default OutlineProps
