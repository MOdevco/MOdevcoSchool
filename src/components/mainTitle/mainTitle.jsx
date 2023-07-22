import { Box , Heading , Text } from '@chakra-ui/react'

const MainTitle = () => {
  return (
    <Box bg={'#050E17'} px={{base: '20px' , md: '0'}} width={'100%'} height={'50vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} pt={'100px'} >
        <Box maxW={'1633px'} mx={'auto'} display={'flex'} gap={4} flexDirection={'column'} justifyContent={'center'}  alignItems={'center'}>
            <Box  >
                <Heading fontSize={{base: '25px' , md: '50px'}}>
                    Dasturlashni juda osson yol bilan o’rganing
                </Heading>
            </Box>
            <Box>
                <Text>Bizning platformamizda bor tehnalogiyalarni mukammal darajada o’rganing</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default MainTitle