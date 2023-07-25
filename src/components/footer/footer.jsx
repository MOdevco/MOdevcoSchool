import { Box , Heading , Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Ins, Tg, You } from '../../assets'


const Footer = () => {
  return (
    <Box width={'100%'} height={{base: '15vh' , md: "13vh"}} position={'absolute'} zIndex={'10'} bg={'#050E17'} borderTop={'1px'} borderColor={'#2D2D2D'}>
        <Box pt={5} maxW={'1633px'} mx={'auto'} flexDirection={{base: 'column' , md: 'row'}}  display={'flex'} justifyContent={'space-between'} alignItems={'center'}minHeight={'10vh'}>
            <Heading fontSize={{base: '18px' , md: '40px'}}><span style={{color: 'red'}}>MO</span>devco Online Maktabi</Heading>
            <Box display={'flex '} alignItems={'center'} gap={{base: '10px' , md: '50px'}}>
              <Link to={'https://t.me/modevco_online_school'} target={'_blank'}>
                <Image width={'40px'} src={Tg}></Image>
              </Link>
              <Link to={'https://youtube.com/@MOdevco'} target={'_blank'}>
                <Image width={'40px'} src={You}></Image>
              </Link>
              <Link to={'https://instagram.com/mo_devco'} target={"_blank"}>
                <Image width={'40px'} src={Ins}></Image>
              </Link>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer