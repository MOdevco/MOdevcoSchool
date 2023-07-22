import { Box , Heading } from '@chakra-ui/react'


const BeckCard = () => {
  return (
    <Box width={'100%'} height={'50vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} bg={'#48D1CC'} mt={'100px'}>
        <Box textAlign={'center'} color={'#000'}>
            <Heading fontSize={{base: '30px' , md: '90px'}}>
                BACK-END
            </Heading>
            <Heading  maxW={'800px'} fontSize={{base: '20px' , md: '30px'}}>
                dasturlovchi veb-saytning bazasi, serveri va shunga o’xshash ishlari bilan shug’ullanandi.
            </Heading>
        </Box>
    </Box>
  )
}

export default BeckCard