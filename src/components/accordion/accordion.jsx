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

const AccordionItenm = ({ lesson1 , lesson2 , lesson3 , lesson4 , lesson5 , lesson6 , lesson7 , lesson8 , lesson9 , lesson10 , lesson11 , lesson12 , lesson13 , lesson14 , lesson15 , lesson16 , html1 , html2, html3 , html4 , html5 , html6 , html7 , html11, html12 , html13  , lesson17 , lesson18 , lesson19 , lesson20 , lesson21 , lesson22 , lesson23 , amalyot1 , amalyot2}) => {
  return (
    <Box minHeight={'150vh'}>
        <Accordion bg={'#0A1624'}  rounded={'10px'} display={'flex'} flexDirection={'column'} gap={'30px'} width={{base: '240px' , md: '304px'}} height={'50px'} allowMultiple>

            {/* ==============1-MODUL============ */}
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
                        <Link to={html1}>
                            {lesson1}
                        </Link>
                        <Link to={html2}>
                            {lesson2}
                        </Link>
                        <Link to={html3}>
                            {lesson3}
                        </Link>
                        <Link to={html4}>
                            {lesson4}
                        </Link>
                    </AccordionPanel>
                    <Divider height={'1px'} bg={'gray.200'} />
                    
                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        2-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        <Link to={html5}>
                            {lesson5}
                        </Link>
                        <Link to={html6}>
                            {lesson6}
                        </Link>
                        <Link to={html7}>
                            {lesson7}
                        </Link>
                    </AccordionPanel>
                    <Divider height={'1px'} bg={'gray.200'} />

                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        1-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        <Link>
                            {lesson8}
                        </Link>
                        <Link>
                            {lesson9}
                        </Link>
                        <Link>
                            {lesson10}
                        </Link>
                    </AccordionPanel>
                    
                </>
                
                )}
            </AccordionItem>
            

            {/* =============2-MUDUL============== */}
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
                        <Link to={html11}>
                            {lesson11}
                        </Link>
                        <Link to={html12}>
                            {lesson12}
                        </Link>
                        <Link to={html13}>
                            {lesson13}
                        </Link>
                    </AccordionPanel>
                    <Divider height={'1px'} bg={'gray.200'} />
                    
                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        2-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'} display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        <Link>
                            {lesson14}
                        </Link>
                        <Link>
                            {lesson15}
                        </Link>
                        <Link>
                            {lesson16}
                        </Link>
                    </AccordionPanel>
                    <Divider height={'1px'} bg={'gray.200'} />

                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        3-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        <Link>
                            {lesson17}
                        </Link>
                        <Link>
                            {lesson18}
                        </Link>
                        <Link>
                            {lesson19}
                        </Link>
                    </AccordionPanel>
                    
                </>
                
                )}
            </AccordionItem>


            {/* ================3-MODUL================ */}
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
                            {lesson20}
                        </Link>
                        <Link>
                            {lesson21}
                        </Link>
                        <Link>
                            {lesson22}
                        </Link>
                        <Link>
                            {lesson23}
                        </Link>
                    </AccordionPanel>
                </>
                
                )}
            </AccordionItem>


            {/* =================4-MODUL===================== */}

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
                            {amalyot1}
                        </Link>
                        <Link>
                            {amalyot2}
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