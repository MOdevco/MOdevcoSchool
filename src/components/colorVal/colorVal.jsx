import React, { useState } from 'react'
import {Box, Text, useToast} from '@chakra-ui/react'
import CopyToClipboard from 'react-copy-to-clipboard'
const ColorVal = ({bgColor, colorName}) => {
    const [clipboard , setClipboard] = useState(false)
    const toast = useToast()
    const handleClip = () => {
        setClipboard(true)
        toast({
            position: 'top-right',
            render: () => (
              <Box color='black' p={3} bg={bgColor} >
               {colorName}dan Nusxa olindi!
              </Box>
            ),
        })
    }
  return (
    <Box>
        
        <CopyToClipboard onCopy={handleClip} text={colorName} >

            <Box display={'flex'} color={'#fff'} bg={bgColor} height={'66px'} w={{md:'80%', base: '95%'}} justifyContent={'center'} alignItems={'center'}>
                <Text textAlign={'center'} fontSize={'25px'}>{colorName}</Text>
            </Box>

        </CopyToClipboard>

    </Box>
  )
}

export default ColorVal
