
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

const Css36dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '40px', lg: '50px'}}>CSS Text Shadow</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box className='css36' height={{'2xl':'28vh', md: '20vh',lg: '47vh'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Heading fontSize={{base: '30px' , md: '40px', lg :'50px'}}>Text Shadow</Heading>
                <Text fontSize={'20px'}>Text-shadow xususiyati matnga soya qo‘shadi.</Text>
                <Text fontSize={'20px'}>Eng oddiy foydalanishda siz faqat gorizontal soyani (2px) va vertikal soyani (2px) belgilaysiz:</Text>
                <Text fontSize={{base: '30px', md:" 50px"}} className='shadow'>Text shadow effect!</Text>
            </Box>
            <Divider mt={'20px'} />






            {/* 1 */}
            
            
           
            
            <Box className='css35dars' pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '40vh'}}>
                <Heading fontSize={{base: '30px', md: '50px'}}>Text Indentation</Heading>
                <Text fontSize={'20px'}><span className='red'>Text-indent</span> xossasi matnning birinchi qatorining chekinishini belgilash uchun ishlatiladi:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'300px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-shadow:</span> <span className='yellow'>2px 2px;</span> <br /> {`}`}</Text>
                    </Box>
                    <CopyToClipboard text={`h1 { text-shadow: 2px 2px; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                
            </Box>
            

            {/* 2 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '42vh'}}>
                 <Text fontSize={'20px'}>Keyin soyaga rang (qizil) qo'shing:</Text>
                <Text fontSize={{base: '30px', md: '50px'}} textShadow={'2px 2px red'}>Text shadow effect!</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'300px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-shadow:</span> <span className='yellow'>2px 2px red;</span> <br /> {`}`}</Text>

                    </Box>
                    <CopyToClipboard text={`h1 { text-shadow: 2px 2px red; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>

            {/* 3 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '42vh'}}>
                <Heading fontSize={'20px'}>Keyin soyaga loyqalik effektini (5px) qo'shing:</Heading>
                <Text fontSize={{base:'30px', md: '50px'}} textShadow={'2px 2px 5px red'}>Text shadow effect!</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'300px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-shadow:</span> <span className='yellow'>2px 2px 5px red;</span> <br /> {`}`}</Text>
                    </Box>
                    <CopyToClipboard text={`h1 { text-shadow: 2px 2px 5px red; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            {/* 4 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '42vh'}}>
                <Heading fontSize={{base: '30px', md: '50px'}}>Ko'proq Text Shadow ga Misollar</Heading>
                <Text fontSize={'20px'}>So'z oralig'i xususiyati matndagi so'zlar orasidagi bo'shliqni ko'rsatish uchun ishlatiladi. <br /> Quyidagi misol so'zlar orasidagi bo'shliqni qanday oshirish yoki kamaytirishni ko'rsatadi:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'390px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol1</Heading>
                    <Text fontSize={'20px'}>Oq matndagi matn soyasi:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'150px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>color:</span> <span className='yellow'>white;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>text-shadow:</span> <span className='yellow'>2px 2px 4px #000000;</span> <br /> {`}`}</Text>
                    </Box>
                    <CopyToClipboard text={`h1 { color: white;  text-shadow: 2px 2px 4px #000000; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
          
            {/* 5 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{'2xl':'50vh',xl: '50vh', md: '42vh'}}>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'350px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol2</Heading>
                    <Text fontSize={'20px'}>Qizil neon nurli matn soyasi:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>h1{`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-shadow:</span> <span className='yellow'>0 0 3px #ff0000;</span> <br /> {`}`}</Text>
                    </Box>
                    <CopyToClipboard text={`h1 { text-shadow: 0 0 3px #ff0000; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Box className='css36dars' pl={{base: '20px' , md: '450px'}}  display={'flex'} mt={{'2xl': '-60px', xl: '40px',md: '-120px'}} flexDirection={'column'} gap={'20px'} pt={'0'} minHeight={{'2xl':'100%',xl: '50vh', md: '30vh'}}>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'350px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol3</Heading>
                    <Text fontSize={'20px'}>Qizil va ko'k neon nurli matn soyasi:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>h1{`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-shadow:</span> <span className='yellow'>0 0 3px #ff0000, 0 0 50px #0000ff;</span> <br /> {`}`}</Text>
                    </Box>
                    <CopyToClipboard text={`h1 {  text-shadow: 0 0 3px #ff0000, 0 0 5px #0000ff; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            
            <Box  pl={{base: '20px' , md: '450px'}}  display={'flex'} flexDirection={'column'} pt={{'2xl': '40px'}} gap={'20px'}  minHeight={{'2xl':'50vh', xl: '50vh',  md: '42vh'}}>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'340px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol4</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'150px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>h1{`{`} <br />  <span style={{paddingLeft: '20px'}} className='red'>color:</span> <span className='yellow'>white;</span> <br />  <span style={{paddingLeft: '20px'}} className='red'>text-shadow:</span> <span className='yellow'>1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;</span> <br /> {`}`}</Text>
                    </Box>
                    <CopyToClipboard text={`h1 { color: white;  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
                

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'10vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Barcha CSS Text-decoration Xususiyatlari</Heading>

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
                                        <Td>text-shadow</Td>
                                        <Td>Matnga qo'shilgan soya effektini belgilaydi</Td>
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

export default Css36dars
