import { Box ,Divider , Button  } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { MinusIcon , AddIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { html1dars ,html2dars , html3dars , html4dars , html5dars , html6dars , html7dars ,html8dars} from '../../htmlDesc'


const AccordionItenm = () => {
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
                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        1-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        
                        {html1dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                    {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>
                    
                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        2-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {html2dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>

                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        3-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {html3dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                    {less.name}
                            </NavLink>
                        ))}
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
                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        1-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'} display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {html4dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>
                    
                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        2-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'} display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {html5dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>

                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        3-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {html6dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                {less.name}
                            </NavLink>
                        ))}
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
                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        1-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'} display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {html7dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                {less.name}
                            </NavLink>
                        ))}
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
                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        1-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'} display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {html8dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>
                </>
                
                )}
            </AccordionItem>
        </Accordion>
    </Box>
  )
}

export default AccordionItenm