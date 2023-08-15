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

const Css30dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Outline Offset</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box className='offset' height={{lg:'40vh',xl: '35vh', md: '28vh','2xl': '24vh'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Heading fontSize={'20px'}>CSS Outline Offset</Heading>
                <Text fontSize={'20px'}>Outline-offset xususiyati kontur va elementning cheti/chegarasi o'rtasida bo'sh joy qo'shadi. Element va <br />uning konturlari orasidagi bo'shliq shaffofdir.</Text>
                <Text fontSize={'20px'}>Quyidagi misol chegara chetidan tashqarida 15px konturni belgilaydi:</Text>
                    <Box display={'flex'} flexDirection={'column'} gap={'20px'} w={'100%'}>
                    <OutlineProps borderStyle={'solid'} text={'Ushbu paragraf chegara chetidan tashqarida 15px konturga ega.'} borderColor={'red'} outline={'medium'} />
                </Box>
            </Box>






            {/* 1 */}
            
            
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'390px', xl: '390px', md: '400px', lg: '400px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'210px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>p {`{`} <br /> <span className='red'>margin:</span> <span className='yellow'>30px</span> <br /> <span className='red'>border:</span> <span className='yellow'>1px solid black</span> <br /> <span className='red'>outline:</span> <span>1px solid red</span> <br /> <span className='red'>outline-offset:</span> <span className='yellow'>15px</span> <br /> {`}`}</Text>
                     
                        
                    </Box>
                    <CopyToClipboard text={`p { margin: 30px;  border: 1px solid black; outline: 1px solid red; outline-offset: 15px ;}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'20px'}>Quyidagi misol element va uning konturlari orasidagi bo'shliq shaffof ekanligini ko'rsatadi:</Text>
            </Box>




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'30px'} minHeight={{lg:'50vh', md: '40vh', base: '50vh'}}>
                        <Box w={{base: '100%', md: '100%', lg: '100%', '2xl': '838px'}} minH={'23px'} bg={'#FFFF00'}><Text fontSize={{base: '15px', md: '15px', lg: '20px'}} color={'#000'} pl={'20px'}>Ushbu paragraf chegaradan tashqarida 15px konturga ega.</Text></Box>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'390px', xl: '410px', md: '420px', lg: '400px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'240px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>p {`{`} <br /> <span className='red'>margin:</span> <span className='yellow'>30px</span> <br /> <span className='red'>background:</span> <span className='yellow'>yellow</span> <br /> <span className='red'>border:</span> <span className='yellow'>1px solid black</span> <br /> <span className='red'>outline:</span> <span>1px solid red</span> <br /> <span className='red'>outline-offset:</span> <span className='yellow'>15px</span> <br /> {`}`}</Text>
                     
                        
                    </Box>
                    <CopyToClipboard text={`p { margin: 30px;  border: 1px solid black; outline: 1px solid red; outline-offset: 15px ;}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
                <Divider mt={'20px'} />






                

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'10vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Barcha CSS Outline Xususiyatlari</Heading>

                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} >
                        <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>Property</Td>
                                        <Td>Description</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>outline</Td>
                                        <Td>Bitta deklaratsiyada outline-kenglik, outline-uslub va outline <br /> rangini belgilash uchun stenografiya xususiyati.</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>outline-color</Td>
                                        <Td>outline rangini o'rnatadi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>outline-offset</Td>
                                        <Td>outline va elementning cheti yoki chegarasi orasidagi bo'shliqni belgilaydi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>outline-style</Td>
                                        <Td>outline uslubini o'rnatadi</Td>
                                    </Tr >
                                    <Tr>
                                        <Td>outline-width</Td>
                                        <Td>outline ning kengligini o'rnatadi</Td>
                                    </Tr>
                                </Tbody>
                                
                            </Table>
                        </TableContainer>
                    </Box>
            </Box>
            <Divider mt={'100px'} />
            </Box>



    </Box>
  )
}

export default Css30dars
