import { Box , Heading } from '@chakra-ui/react'

const FrontCard = () => {
  return (
    <Box width={'100%'} height={'50vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} bg={'#E9967A'} mt={'100px'}>
        <Box textAlign={'center'}>
            <Heading fontSize={{base: '30px' , md: '90px'}}>
                FRONT-END
            </Heading>
            <Heading maxW={'800px'} fontSize={{base: '20px' , md: '30px'}}>
                dasturlovchi veb-saytning foydalanuvchiga ko’rinadigan qismini tayyorlash bilan shug’ullanadi.
            </Heading>
        </Box>
    </Box>
  )
}

export default FrontCard