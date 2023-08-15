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

const Css32dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Text Alignment</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box  height={{lg:'50vh',xl: '35vh', md: '36vh','2xl': '30vh'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Heading fontSize={'20px'}>Text Alignment va Text Direction</Heading>
                <Text fontSize={'20px'}>Ushbu bo'limda siz quyidagi xususiyatlar haqida bilib olasiz:</Text>

                <ul className='ulll'>
                    <li>text-align</li>
                    <li>text-align-last</li>
                    <li>direction</li>
                    <li>unicode-bidi</li>
                    <li>vertical-align</li>
                </ul>
                <Text fontSize={'20px'}>Sahifa uchun standart matn rangi tana selektorida aniqlanadi.</Text>
            </Box>






            {/* 1 */}
            
            
           
            
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', base: '50vh', md: '80vh'}}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Text Alignment</Heading>
                <Text fontSize={'20px'}>Text-align xususiyati matnning gorizontal tekislanishini o'rnatish <br /> uchun ishlatiladi.</Text>
                <Text fontSize={'20px'}>Matn chap yoki o'ngga tekislangan, markazlashtirilgan yoki <br /> tekislangan bo'lishi mumkin.</Text>
                <Text fontSize={'20px'}>Quyidagi misol markazga tekislangan va chapga va o'ngga tekislangan matnni ko'rsatadi (agar matn yo'nalishi <br /> chapdan o'ngga bo'lsa, chapga tekislash sukut bo'yicha, matn yo'nalishi o'ngdan chapga bo'lsa, o'ngga tekislash <br /> sukut bo'yicha hisoblanadi):</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'490px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-align:</span> <span className='yellow'>center;</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>h2 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-align:</span> <span className='yellow'>left;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>h3 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-align:</span> <span className='yellow'>right;</span> <br /> {`}`}</Text> 

                     
                        
                    </Box>
                    <CopyToClipboard text={`div { text-align: justify; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'20px'}>Matnni tekislash xususiyati "oqlash" ga o'rnatilganda, har bir satr har bir satrning kengligi teng bo'lishi va chap va  <br /> o'ng chetlari to'g'ri bo'lishi uchun cho'ziladi (jurnal va gazetalardagi kabi):</Text>
            </Box>



            {/* 2 */}
            <Box className='css32' pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={{xl:'38vh', md: '25vh', base: '50vh'}}>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'300px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>div {`{`} <br />  <span style={{paddingLeft: '20px'}} className='red'>text-align:</span> <span className='yellow'>justify;</span> <br /> {`}`}</Text> 
                        
                    </Box>
                    <CopyToClipboard text={`body { background-color: lightgrey;  color: blue; } h1 { background-color: black;  color: white; } div { background-color: blue;  color: white; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            {/* 3 */}

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Text Align Last</Heading>
                <Text fontSize={'20px'}>text-align-last xossasi matnning oxirgi qatorini tekislash usulini belgilaydi.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{xl:'530px', base: '530px', md: '590px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Matnning oxirgi qatorini uchta <span className='red'>{`<p>`}</span> elementga tekislang:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>p.a {`{`} <br />  <span style={{paddingLeft: '20px'}} className='red'>text-align-last:</span> <span className='yellow'>right;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>p.b {`{`} <br />  <span style={{paddingLeft: '20px'}} className='red'>text-align-last:</span> <span className='yellow'>center;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>p.c {`{`} <br />  <span style={{paddingLeft: '20px'}} className='red'>text-align-last:</span> <span className='yellow'>justify;</span> <br /> {`}`}</Text> 
                        
                    </Box>
                    <CopyToClipboard text={`p.a { text-align-last: right; }p.b {  text-align-last center; }p.c {text-align-last: justify; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            {/* 4 */}

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'38vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Text Direction</Heading>
                <Text fontSize={'20px'}>Direction va unicode-bidi xususiyatlari elementning matn yo'nalishini o'zgartirish uchun ishlatilishi mumkin:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'320px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'150px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>p {`{`} <br />  <span style={{paddingLeft: '20px'}} className='red'>direction:</span> <span className='yellow'>rtl;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>unicode-bidi:</span> <span className='yellow'>bidi-evveride;</span>  <br />{`}`}</Text> 
                        
                    </Box>
                    <CopyToClipboard text={`p { direction: rtl;  unicode-bidi: bidi-override; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            {/* 5 */}

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Vertical Alignment</Heading>
                <Text fontSize={'20px'}>Vertical-align xususiyati elementning vertikal tekislanishini o'rnatadi.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{xl:'710px', md: '790px', base: '710px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Matndagi rasmning vertikal tekislanishini o'rnating:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'480px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>img.a {`{`} <br />  <span style={{paddingLeft: '20px'}} className='red'>vertical-align:</span> <span className='yellow'>baseline;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>img.b {`{`} <br />  <span style={{paddingLeft: '20px'}} className='red'>text-top:</span> <span className='yellow'>baseline;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>img.c {`{`} <br />  <span style={{paddingLeft: '20px'}} className='red'>text-bottom;</span> <span className='yellow'>baseline;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>img.d {`{`} <br />  <span style={{paddingLeft: '20px'}} className='red'>sub:</span> <span className='yellow'>baseline;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>img.e {`{`} <br />  <span style={{paddingLeft: '20px'}} className='red'>super:</span> <span className='yellow'>baseline;</span> <br /> {`}`}</Text> 
 
                        
                    </Box>
                    <CopyToClipboard text={`img.a { vertical-align: baseline; }img.b {vertical-align: text-top; }img.c { vertical-align: text-bottom; }img.d { vertical-align: sub; }img.e {vertical-align: super; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
                

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'10vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Barcha CSS Border Xususiyatlari</Heading>

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
                                        <Td>directioon</Td>
                                        <Td>Matn yo'nalishini/yozish yo'nalishini belgilaydi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>text-align</Td>
                                        <Td>Matnning gorizontal tekislanishini belgilaydi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>text-align-last</Td>
                                        <Td>Matnning oxirgi qatorini tekislash usulini belgilaydi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>unicode-bide</Td>
                                        <Td>Bir hujjatda bir nechta tillarni qo'llab-quvvatlash uchun matnni bekor <br /> qilish kerakligini belgilash yoki qaytarish uchun yo'nalish xususiyati <br /> bilan birga ishlatiladi</Td>
                                    </Tr >
                                    <Tr>
                                        <Td>vertical-align</Td>
                                        <Td>Elementning vertikal tekislanishini o'rnatadi</Td>
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

export default Css32dars
