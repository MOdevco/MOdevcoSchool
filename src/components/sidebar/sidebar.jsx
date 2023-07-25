import { Box , Heading , Button , Divider  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Sidebar = ({title , elementName , lesson1 , lesson2 , lesson3 , lesson4 , lesson5 , lesson6 , lesson7 , lesson8 , lesson9 , lesson10 , lesson11 , lesson12 , lesson13 , lesson14 , lesson15 , lesson16 , html1 , html2, html3 , html4,  html5 , html6 , html7 , html11, html12 , html13 , lesson17 , lesson18 , lesson19 , lesson20 , lesson21 , lesson22 , lesson23 , amalyot1 , amalyot2}) => {
    
   
  return (
    <Box  display={{base: 'none' , md: 'block'}}>
        <Box position={'fixed'} zIndex={'1'} display={'flex'} borderRight={'2px'} overflowY={'scroll'} borderColor={'#2D2D2D'} justifyContent={'center'} alignItems={'flex-start'} textAlign={'center'} pt={'250px'}  width={'365.02px'} height={'100vh'} bg={'#050E17'} top={{base: '100px' , xl: '50px'}}>
            <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                <Box>
                    <Heading color={'white'} fontSize={'35px'}>{title}</Heading>
                </Box>
                <Box>
                    
                    <Link to={'/'}>
                        <Button bg={'#0A1624'} color={'white'} _hover={{bg : ''}} width={'304px'} height='50px' fontSize={'25px'}>{elementName}</Button>
                    </Link>
                </Box>
                <Box>
                    {/* <AccordionItem  /> */}
                    {/* =============1-MODUL================== */}
                    <Box display={'flex'} flexDirection={'column'}   gap={'20px'}>
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'25px'} color={'white'}>1-Modul</Button>
                            <Divider />
                            <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'25px'} color={'white'}>1-Dars</Button>
                            <Link to={html1}>
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson1}</Button>
                            </Link>
                            <Link to={html2}>
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson2}</Button>
                            </Link>
                            <Link to={html3}>
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson3}</Button>
                            </Link>
                            <Link to={html4}>
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson4}</Button>
                            </Link>
                            
                            <Divider />
                        </Box>

                        {/* =================2-dars===================== */}
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'25px'} color={'white'}>2-Dars</Button>
                            <Link to={html5}>
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson5}</Button>
                            </Link>
                            <Link to={html6}>
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson6}</Button>
                            </Link>
                            <Link to={html7}>
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson7}</Button>
                            </Link>
                            <Divider />
                        </Box>

                        {/* ===========3-dars================ */}
                        <Box  display={'flex'} flexDirection={'column'} gap={'20px'} minHeight={'40vh'}>
                            <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'25px'} color={'white'}>3-Dars</Button>
                            <Link >
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson8}</Button>
                            </Link>
                            <Link>
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson9}</Button>
                            </Link>
                            <Link >
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson10}</Button>
                            </Link>
                        </Box>
                    </Box>


                    {/* =========2-MODUL======================== */}
                    <Box display={'flex'} flexDirection={'column'}   gap={'20px'}>
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'25px'} color={'white'}>2-Modul</Button>
                            <Divider />
                            <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'25px'} color={'white'}>1-Dars</Button>
                            <Link to={html11}>
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson11}</Button>
                            </Link>
                            <Link to={html12}>
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson12}</Button>
                            </Link>
                            <Link to={html13}>
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson13}</Button>
                            </Link>
                            <Divider />
                        </Box>

                        {/* =================2-dars===================== */}
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'25px'} color={'white'}>2-Dars</Button>
                            <Link >
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson14}</Button>
                            </Link>
                            <Link >
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson15}</Button>
                            </Link>
                            <Link >
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson16}</Button>
                            </Link>
                            <Divider />
                        </Box>

                        {/* ===========3-dars================ */}
                        <Box  display={'flex'} flexDirection={'column'} gap={'20px'} minHeight={'40vh'}>
                            <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'25px'} color={'white'}>3-Dars</Button>
                            <Link >
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson17}</Button>
                            </Link>
                            <Link >
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson18}</Button>
                            </Link>
                            <Link >
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson19}</Button>
                            </Link>
                            <Divider />
                        </Box>
                    </Box>
                    
                    
                    {/* ===============3-MODUL============== */}
                    <Box display={'flex'} flexDirection={'column'}   gap={'20px'} minHeight={'50vh'}>
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'25px'} color={'white'}>3-Modul</Button>
                            <Divider />
                            <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'25px'} color={'white'}>1-Dars</Button>
                            <Link >
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson20}</Button>
                            </Link>
                            <Link >
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson21}</Button>
                            </Link>
                            <Link >
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson22}</Button>
                            </Link>
                            <Link >
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{lesson23}</Button>
                            </Link>
                        </Box>

                    </Box>

                    {/* ==========4-MODUL============ */}
                    <Box display={'flex'} flexDirection={'column'}   gap={'20px'} minHeight={'50vh'}>
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'25px'} color={'white'}>4-Modul</Button>
                            <Divider />
                            <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'25px'} color={'white'}>1-Dars</Button>
                            <Link >
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{amalyot1}</Button>
                            </Link>
                            <Link >
                                <Button bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>{amalyot2}</Button>
                            </Link>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Sidebar