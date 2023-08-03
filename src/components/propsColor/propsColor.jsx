import {Box , Text} from '@chakra-ui/react'


const PropsColor = ({bgColor , colorName}) => {
  return (
    <Box>
      <Box display={'flex'} color={'#fff'} bg={bgColor} height={'97px'} width={'216px'} justifyContent={'center'} alignItems={'center'}>
            <Text fontSize={'25px'}>{colorName}</Text>
      </Box>
    </Box>
  )
}

export default PropsColor
