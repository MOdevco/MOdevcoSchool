import { Box , Heading , Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import AccordionItem from '../accordion/accordion'

const Sidebar = ({title , elementName}) => {
  return (
    <Box  display={{base: 'none' , md: 'block'}}>
        <Box position={'fixed'} zIndex={'1'} display={'flex'} borderRight={'2px'} overflowY={'scroll'} borderColor={'#2D2D2D'} justifyContent={'center'} alignItems={'flex-start'} textAlign={'center'} pt={'40px'}  width={'365.02px'} height={'100vh'} bg={'#050E17'} top={'160px'}>
            <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                <Box>
                    <Heading fontSize={'35px'}>{title}</Heading>
                </Box>
                <Box>
                    <Link>
                        <Button bg={'#0A1624'} width={'304px'} height='50px' fontSize={'25px'}>{elementName}</Button>
                    </Link>
                </Box>
                <Box>
                    <AccordionItem Htmlbir={'1-Mavzu: Html o’rnatish'} Htmlikki={'2-Mavzu: Html asosiy misollar'} Htmluch={'3-Mavzu: Html Paragraphlar'}/>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Sidebar