import React, { useState } from 'react'
import {Box, Text, useToast} from '@chakra-ui/react'
import CopyToClipboard from 'react-copy-to-clipboard'
const RgbVal = ({bgColor, colorName, text}) => {
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

            <Box display={'flex'}  bg={bgColor} height={'66px'} w={{md:'400px', base: '270px'}} justifyContent={'center'} alignItems={'center'}>
                <Text textAlign={'center'} color={text} fontSize={'25px'}>{colorName}</Text>
            </Box>

        </CopyToClipboard>

    </Box>
  )
}

export default RgbVal
