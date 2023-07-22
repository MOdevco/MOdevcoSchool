import { Box ,Divider } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { MinusIcon , AddIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const AccordionItenm = ({Htmlbir , Htmlikki , Htmluch}) => {
  return (
    <Box minHeight={'150vh'}>
        <Accordion bg={'#0A1624'}  rounded={'10px'} display={'flex'} flexDirection={'column'} gap={'30px'} width={{base: '100%' , md: '304px'}} height={'50px'} allowMultiple>
            <AccordionItem border={'none'} >
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>
                        <Box as="span" fontSize={'25px'} flex='1' textAlign='left'>
                            1-MODUL
                        </Box>
                        {isExpanded ? (
                        <MinusIcon fontSize='12px' />
                        ) : (
                        <AddIcon fontSize='12px' />
                        )}
                    </AccordionButton>
                    </h2>
                    <Divider />
                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        1-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        <Link>
                            {Htmlbir}
                        </Link>
                        <Link>
                            {Htmlikki}
                        </Link>
                        <Link>
                            {Htmluch}
                        </Link>
                    </AccordionPanel>
                    <Divider height={'1px'} bg={'gray.200'} />
                    
                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        2-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        <Link>
                            1-Mavzu: HTML Formatlash
                        </Link>
                        <Link>
                            2-Mavzu: Html Komentariya
                        </Link>
                        <Link>
                            3-Mavzu: Html Link
                        </Link>
                    </AccordionPanel>
                    <Divider height={'1px'} bg={'gray.200'} />

                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        1-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        <Link>
                            1-Mavzu: Html Image
                        </Link>
                        <Link>
                            2-Mavzu: Html Favicon va Tittle
                        </Link>
                        <Link>
                            3-Mavzu: Html Table
                        </Link>
                    </AccordionPanel>
                    
                </>
                
                )}
            </AccordionItem>

            <AccordionItem border={'none'}bg={'#0A1624'} rounded={'10px'} >
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>
                        <Box as="span" fontSize={'25px'} flex='1' textAlign='left'>
                            2-MODUL
                        </Box>
                        {isExpanded ? (
                        <MinusIcon fontSize='12px' />
                        ) : (
                        <AddIcon fontSize='12px' />
                        )}
                    </AccordionButton>
                    </h2>
                    <Divider />
                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        1-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'} display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        <Link>
                            1-Mavzu: Html Listlar
                        </Link>
                        <Link>
                            2-Mavzu: Html Block va Inline
                        </Link>
                        <Link>
                            3-Mavzu: Html Emojilar 
                        </Link>
                    </AccordionPanel>
                    <Divider height={'1px'} bg={'gray.200'} />
                    
                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        2-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'} display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        <Link>
                            1-Mavzu: Html Formalar
                        </Link>
                        <Link>
                            2-Mavzu: Html Form Attributlari
                        </Link>
                        <Link>
                            3-Mavzu: Html Form Elemtlari
                        </Link>
                    </AccordionPanel>
                    <Divider height={'1px'} bg={'gray.200'} />

                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        3-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        <Link>
                            1-Mavzu: Html Input turlari
                        </Link>
                        <Link>
                            2-Mavzu: Html Input Attributlari
                        </Link>
                        <Link>
                            3-Mavzu: Html Input va Formla
                        </Link>
                    </AccordionPanel>
                    
                </>
                
                )}
            </AccordionItem>

            <AccordionItem border={'none'}bg={'#0A1624'} rounded={'10px'} >
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>
                        <Box as="span" fontSize={'25px'} flex='1' textAlign='left'>
                            3-MODUL
                        </Box>
                        {isExpanded ? (
                        <MinusIcon fontSize='12px' />
                        ) : (
                        <AddIcon fontSize='12px' />
                        )}
                    </AccordionButton>
                    </h2>
                    <Divider />
                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        1-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'} display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        <Link>
                            1-Mavzu: Html Medialar
                        </Link>
                        <Link>
                            2-Mavzu: Html Video
                        </Link>
                        <Link>
                            3-Mavzu: Html Audio      
                        </Link>
                        <Link>
                            4-Mavzu: Html YouTube 
                        </Link>
                    </AccordionPanel>
                </>
                
                )}
            </AccordionItem>

            <AccordionItem border={'none'}bg={'#0A1624'} rounded={'10px'} >
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>
                        <Box as="span" fontSize={'25px'} flex='1' textAlign='left'>
                            4-MODUL
                        </Box>
                        {isExpanded ? (
                        <MinusIcon fontSize='12px' />
                        ) : (
                        <AddIcon fontSize='12px' />
                        )}
                    </AccordionButton>
                    </h2>
                    <Divider />
                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        1-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'} display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        <Link>
                            1-Mavzu: Amaliyot
                        </Link>
                        <Link>
                            2-Mavzu: Amaliyot
                        </Link>
                    </AccordionPanel>
                </>
                
                )}
            </AccordionItem>
        </Accordion>
    </Box>
  )
}

export default AccordionItenm