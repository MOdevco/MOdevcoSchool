import { Box ,Divider , Button  } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
} from '@chakra-ui/react'
import { MinusIcon , AddIcon } from '@chakra-ui/icons'
import { css10dars, css11dars, css12dars, css13dars, css14dars, css15dars, css16dars, css17dars, css18dars, css19dars, css1dars, css20dars, css21dars, css22dars, css2dars, css3dars, css4dars, css5dars, css6dars, css7dars, css8dars, css9dars } from '../../cssDesc'

const CssAccordion = () => {
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
                        
                        {css1dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                    {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>
                    
                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        2-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {css2dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>

                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        3-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {css3dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                    {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>


                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        4-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {css4dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                    {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>

                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        5-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {css5dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                    {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>

                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        6-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {css6dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                    {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>

                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        7-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {css7dars.map((less , i) => (
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
                        {css8dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>
                    
                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        2-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'} display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {css9dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>

                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        3-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {css10dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>

                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        4-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {css11dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        5-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {css12dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>

                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        6-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {css13dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>

                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        7-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'}  display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {css14dars.map((less , i) => (
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
                        {css15dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>

                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        2-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'} display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {css16dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>

                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        3-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'} display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {css17dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>

                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        4-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'} display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {css18dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>

                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        5-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'} display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {css19dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>


                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        6-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'} display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {css20dars.map((less , i) => (
                            <NavLink  to={less.link}>
                                {less.name}
                            </NavLink>
                        ))}
                    </AccordionPanel>

                    <AccordionPanel width={'100%'} fontSize={'25px'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        7-Dars
                    </AccordionPanel>
                    <AccordionPanel width={'100%'} fontSize={'20px'} display={'flex'} flexDirection={'column'} bg={'#0A1624'} pb={4} textAlign={'start'}>
                        {css21dars.map((less , i) => (
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
                        {css22dars.map((less , i) => (
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

export default CssAccordion