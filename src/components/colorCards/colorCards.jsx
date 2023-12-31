import { Box , Heading , Text , useToast} from '@chakra-ui/react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useState } from 'react'


const ColorCards = ({cardBg , title , colorName , textColor , copyColor  , copy}) => {
    const [clipboard , setClipboard] = useState(false)
    const toast = useToast()
    const handleClip = () => {
        setClipboard(true)
        toast({
            position: 'top-right',
            render: () => (
              <Box color='black' p={3} bg={copy} >
               {title}dan Nusxa olindi!
              </Box>
            ),
        })
    }
  return (
    <Box width={'100%'}  mt={{base: '60px' , xl: '100px'}} display={'flex'} flexWrap={'wrap'} gap={0} justifyContent={'center'}alignItems={'center'}>
        <CopyToClipboard onCopy={handleClip} text={copyColor} >
            <Box bg={cardBg}  height={'200px'} width={{base: '1000px' , md: '100%'}}  rounded={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Heading color={textColor} fontSize={{base: '20px' , md: '25px'}}>{title}</Heading>
                <Text color={textColor}>{colorName}</Text>
            </Box>
        </CopyToClipboard>
    </Box>
  )
}

export default ColorCards