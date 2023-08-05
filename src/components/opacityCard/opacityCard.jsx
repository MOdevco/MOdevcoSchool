import { Box, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

const OpacityCard = ({text, opacity}) => {
    const [clipboard , setClipboard] = useState(false)
    const toast = useToast()
    const handleClip = () => {
        setClipboard(true)
        toast({
            position: 'top-right',
            render: () => (
              <Box color='black' p={3} bg={'rgba(76, 175, 80, 1)'} >
               {text}dan Nusxa olindi!
              </Box>
            ),
        })
    }
  return (
    <CopyToClipboard onCopy={handleClip} text={text}>

    <Box>
      <Box display={'flex'} color={'#fff'} bg={'rgba(76, 175, 80, 1)'} opacity={opacity} height={'179px'} width={'250px'} justifyContent={'center'} alignItems={'center'}>
            <Text fontSize={'25px'}>{text}</Text>
      </Box>
    </Box>
    </CopyToClipboard>
  )
}

export default OpacityCard
