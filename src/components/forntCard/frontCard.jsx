import { Box , Heading , Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const FrontCard = () => {
  return (
    <Box width={'100%'} height={'50vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} bg={'#E9967A'} mt={'100px'}>
        <Box textAlign={'center'} display={'flex'} flexDirection={'column'} gap={'20px'}>
            <Heading fontSize={{base: '30px' , md: '90px'}}>
                FRONT-END
            </Heading>
            <Heading maxW={'800px'} fontSize={{base: '20px' , md: '30px'}}>
                dasturlovchi veb-saytning foydalanuvchiga ko’rinadigan qismini tayyorlash bilan shug’ullanadi.
            </Heading>

            <Link to={'/frontMalumot'}>
              <Button>
                Ma'lumot olish
              </Button>
            </Link>
        </Box>
    </Box>
  )
}

export default FrontCard