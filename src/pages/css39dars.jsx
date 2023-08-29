
import { Box , Flex , Heading , Button , Text , Image , Input , FormLabel, HStack, Radio, RadioGroup, Grid, border} from '@chakra-ui/react'
import { HamburgerIcon , CloseIcon } from '@chakra-ui/icons'
import Sidebar from '../components/sidebarhtml/sidebarhtml'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    useToast,Divider,
    UnorderedList,
    ListItem,
   
  } from '@chakra-ui/react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import CssAccordion from '../components/cssAccordion/cssAccordion'
import BorderProps from '../components/borderProps/borderProps'
import OutlineProps from '../components/outlineProps/OutlineProps'

const Css39dars = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('left')
    const [size, setSize] = useState('')
    const [clipboard , setClipboard] = useState(false)
    const toast = useToast()

    const handleClip = () => {
        setClipboard(true)
        toast({
            position: 'top-right',
            render: () => (
              <Box color='white' p={3} bg='blue.500'>
                Nusxa olindi!
              </Box>
            ),
        })
    }
    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }
    const nandleClose = () => {
        onClose()
    }
    const sizes = ['md']
    useEffect(() => {
        window.scroll(0,0)
      }, [])
  return (
    <Box pt={'300px'} width={'100%'} bg={'#1A202C'} height={'100%'}>
        <Box >
            <Flex >
                {onOpen && <Box>
                    <Sidebar title={'CSS DARSLARI'} elementName={'Bosh sahifa'}/>
                </Box>}
                <Box ml={{base: '30px' , md: '450px'}}   display={'flex'}  alignItems={'center'} gap={'20px'}>
                    {sizes.map((size) => (
                        <Button  onClick={ () => handleClick(size)} bg={'#233242'} _hover={{bg: '#222'}} display={{base: 'block' , md: 'none'}}>
                            <HamburgerIcon />
                        </Button>
                        
                    ))}
                    <Drawer placement={placement}  onClose={onClose} size={size} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                        <DrawerBody bg={'#0A1624'} display={'flex'} justifyContent={'center'} minHeight={'100vh'} >
                        <CloseIcon onClick={nandleClose} position={'absolute'} right={'10px'} />
                            <CssAccordion  />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '40px', lg: '50px'}}>CSS Font Fallbacks</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box className='css39' height={{'2xl':'30vh', md: '30vh',lg: '60vh', xl: '50vh'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Heading fontSize={{base: '30px' , md: '40px', lg :'50px'}}>Tez-tez Ishlatiladigan Shriftlarni Tiklash</Heading>
                <Text fontSize={'20px'}>Quyida 5 ta umumiy shrift oilalari tomonidan tashkil etilgan ba'zi tez-tez ishlatiladigan shrift zaxiralari keltirilgan:</Text>
                <ul className='ull'>
                    <li>Serif</li>
                    <li>Sans-serif</li>
                    <li>Monospace</li>
                    <li>Cursive</li>
                    <li>Fantasy</li>
                </ul>
            </Box>
            <Divider mt={'20px'} />






            {/* 1 */}
            
            
           
            
            <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '50vh'}}>
                
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'10vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Sans-Serif Fonts</Heading>

                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} >
                        <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>font-family</Td>
                                        <Td>Misol matn</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr className='font5'>
                                        <Td>"Times New Roman", Times, serif</Td>
                                        <Td><Text fontSize={'30px'}>This is a Heading</Text> <br /> This is a paragraph.</Td>
                                    </Tr>
                                    <Tr className='font10' bg={'#233242'}>
                                        <Td>Sans-serif</Td>
                                        <Td><Text fontSize={'30px'}>This is a Heading</Text> <br /> This is a paragraph.</Td>
                                    </Tr>
                                    <Tr className='font6'>
                                        <Td>Georgia, serif</Td>
                                        <Td><Text fontSize={'30px'}>This is a Heading</Text> <br /> This is a paragraph.</Td>
                                    </Tr>
                                </Tbody>
                                
                            </Table>
                        </TableContainer>
                    </Box>
            </Box>
            <Divider  mt={'20px'} />
            {/* 2table */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'10vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Monospace Fonts</Heading>

                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} >
                        <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>font-family</Td>
                                        <Td>Misol matn</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr className='font1'>
                                        <Td>Arial, Helvetica, sans-serif</Td>
                                        <Td><Text fontSize={'30px'}>This is a Heading</Text> <br /> This is a paragraph.</Td>
                                    </Tr>
                                    <Tr className='font3' bg={'#233242'}>
                                        <Td>Tahoma, Verdana, sans-serif</Td>
                                        <Td><Text fontSize={'30px'}>This is a Heading</Text> <br /> This is a paragraph.</Td>
                                    </Tr>
                                    <Tr className='font4'>
                                        <Td>"Trebuchet MS", Helvetica, sans-serif</Td>
                                        <Td><Text fontSize={'30px'}>This is a Heading</Text> <br /> This is a paragraph.</Td>
                                    </Tr>
                                    <Tr className='font2' bg={'#233242'}>
                                        <Td>Geneva, Verdana, sans-serif</Td>
                                        <Td><Text fontSize={'30px'}>This is a Heading</Text> <br /> This is a paragraph.</Td>
                                    </Tr>
                                </Tbody>
                                
                            </Table>
                        </TableContainer>
                    </Box>
            </Box>
            <Divider mt={'20px'} />

            {/* 3table */}

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'10vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Cursive Fonts</Heading>

                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} >
                        <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>font-family</Td>
                                        <Td>Misol matn</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr className='font8'>
                                        <Td>"Courier New", Courier, monospace</Td>
                                        <Td><Text fontSize={'30px'}>This is a Heading</Text> <br /> This is a paragraph.</Td>
                                    </Tr>
                                </Tbody>
                                
                            </Table>
                        </TableContainer>
                    </Box>
            </Box>
            <Divider mt={'20px'} />

            {/* 4table */}

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'10vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Fantasy Fonts</Heading>

                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} >
                        <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>font-family</Td>
                                        <Td>Misol matn</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr className='font11'>
                                        <Td>Copperplate, Papyrus, fantasy</Td>
                                        <Td><Text fontSize={'30px'}>This is a Heading</Text> <br /> This is a paragraph.</Td>
                                    </Tr>
                                </Tbody>
                                
                            </Table>
                        </TableContainer>
                    </Box>
            </Box>
            <Divider mt={'100px'} />
                
            </Box>
        
                
            </Box>



    </Box>
  )
}

export default Css39dars
