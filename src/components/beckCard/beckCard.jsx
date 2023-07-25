import { Box , Heading , Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const BeckCard = () => {
  return (
    <Box width={'100%'} height={'50vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} bg={'#48D1CC'} mt={'100px'}>
        <Box textAlign={'center'} color={'#000'} display={'flex'} flexDirection={'column'} gap={'20px'}>
            <Heading fontSize={{base: '30px' , md: '90px'}}>
                BACK-END
            </Heading>
            <Heading  maxW={'800px'} fontSize={{base: '20px' , md: '30px'}}>
                dasturlovchi veb-saytning bazasi, serveri va shunga o’xshash ishlari bilan shug’ullanandi.
            </Heading>

            <Link to={'/beckMalumot'}>
              <Button>
                Ma'lumot olish
              </Button>
            </Link>
        </Box>
    </Box>
  )
}

export default BeckCard