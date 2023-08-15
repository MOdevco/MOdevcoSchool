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

const Css24dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Height, Width va Max-width</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box className='miniw' height={{lg:'38vh', md: '25vh', base: '50vh', xl :'21vh', '2xl': '18vh'}} display={'flex'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Text fontSize={'20px'}>CSS height va width xususiyatlari elementning balandligi va kengligini o'rnatish uchun ishlatiladi. <br /> CSS max-width xususiyati elementning maksimal kengligini belgilash uchun ishlatiladi.</Text>
                <Box w={{md: '90%', '2xl': '874px',lg: '100%', base: '100%'}} h={'69px'} border={'1px solid #008000'}>
                        <Text fontSize={{md:'15px', base:'15px', lg: '20px'}} p={'7px'}>Ushbu elementning balandligi 50 piksel va kengligi 100% ni tashkil qiladi.</Text>
                </Box>
            </Box>
            <Divider mt={{md:'20px', base: '140px'}} />

            <Box className='minih' h={{xl:'31vh', md: '48vh', lg: '74vh', '2xl': '25vh'}} pl={{base: '20px' , md: '450px'}} pt={4} display={'flex'} flexDirection={'column'} gap={'10px'}>
                <Heading fontSize={{base: '30px', md: '50px'}}>CSS Height va Width ni Sozlash</Heading>
                <Text fontSize={'20px'}>Balandlik va kenglik xususiyatlari elementning balandligi va kengligini o'rnatish uchun ishlatiladi.</Text>
                <ul className='ull'>
                    <li><span className='red'>auto</span> - Bu standart. Brauzer balandlik va kenglikni hisoblab chiqadi</li>
                    <li><span className='red'>length</span> - px, sm va hokazolarda balandlik/kenglikni belgilaydi.</li>
                    <li><span className='red'>%</span> - O'z ichiga olgan blokning foizida balandlik/kenglikni belgilaydi</li>
                    <li><span className='red'>inherit</span> - Balandlik/kenglik uning asosiy qiymatidan meros qilib olinadi</li>
                </ul>
            </Box>
            <Divider mt={{md:'20px', base: '180px'}} />





            {/* 1 */}
            
            
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>CSS height va width ga Misollar</Heading>
                        <Box w={{base: '100%', lg: '452px', md: '100%'}} h={'219px'} bg={'#B0E0E6'} >
                            <Text fontSize={'20px'} p={'10px'} color={'#000'}>Ushbu element balandligi 200 piksel va kengligi 50%</Text>
                        </Box>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'420px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}> <span className='red'>{`<div>`}</span> elementining balandligi va kengligini o'rnating:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'180px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>div{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>height:</span> <span className='yellow'>200px;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>border-radius:</span> <span className='yellow'>50%;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>background-color:</span> <span className='yellow'>powderblue;</span> <br /> {`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`div { height: 200px;  border-radius: 50%; background-color: powderblue;}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>



            {/* 2 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Box w={{base: '100%', lg: '452px', md: '100%'}} h={'119px'} bg={'#B0E0E6'} >
                    <Text fontSize={'20px'} p={'10px'} color={'#000'}>Ushbu elementning balandligi 100 piksel va kengligi 500 piksel.</Text>
                </Box>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'420px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Boshqa <span className='red'>{`<div>`}</span> elementining balandligi va kengligini o'rnating:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'180px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>div{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>height:</span> <span className='yellow'>100px;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>border-radius:</span> <span className='yellow'>500px;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>background-color:</span ><span className='yellow'>powderblue;</span> <br /> {`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`div { height: 100px;  border-radius: 500px; background-color: powderblue;}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'20px'}>Eslatma: Esda tutingki, balandlik va kenglik xususiyatlari to'ldirish, chegaralar yoki chekkalarni o'z ichiga olmaydi! <br /> Ular elementning to'ldirish, chegara va chetidagi maydonning balandligi/kengligini o'rnatadilar!</Text>
            </Box>
            <Divider mt={'20px'} />




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>Setting max-width</Heading>
                  <Text fontSize={'20px'}>Max-width xususiyati elementning maksimal kengligini belgilash uchun ishlatiladi.</Text>
                  <Text fontSize={'20px'}>Maksimal kenglik px, sm, va hokazo kabi uzunlik qiymatlarida yoki o'z ichiga olgan blokning foizida (%) <br />ko'rsatilishi yoki hech biriga o'rnatilishi mumkin (bu sukut bo'yicha. Maksimal kenglik yo'qligini bildiradi).</Text>
                  <Text fontSize={'20px'}>Yuqoridagi {`<div>`} bilan bog'liq muammo brauzer oynasi element kengligidan (500px) kichikroq bo'lganda <br /> yuzaga keladi. Keyin brauzer sahifaga gorizontal aylantirish paneli qo'shadi.</Text>
                  <Text fontSize={'20px'}>Buning o'rniga maksimal kenglikdan foydalanish, bu holatda, brauzerning kichik oynalar bilan ishlashini yaxshilaydi.</Text>
                  <Text fontSize={'20px'}>Maslahat: Ikki div o'rtasidagi farqni ko'rish uchun brauzer oynasini kengligi 500px dan kichikroq joyga torting!</Text>
                  <Box w={{base: '100%', lg: '452px', md: '100%'}} h={'119px'} bg={'#B0E0E6'} >
                    <Text fontSize={'20px'} p={'10px'} color={'#000'}>Ushbu elementning balandligi 100 piksel va kengligi 500 piksel.</Text>
                </Box>
                <Text fontSize={'20px'}>Eslatma: Agar siz biron sababga ko'ra bir xil elementda width xususiyatidan ham, max-width xususiyatidan ham <br /> foydalansangiz va width xususiyatining qiymati max-width xususiyatidan kattaroq bo'lsa; max-width xususiyatidan <br /> foydalaniladi (va width xususiyati e'tiborga olinmaydi).</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{xl:'420px',lg: '500px', md: '580px', base: '420px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Ushbu <span className='red'>{`<div>`}</span> elementining balandligi 100 piksel va maksimal kengligi 500 piksel:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'180px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>div{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>max-width:</span> <span className='yellow'>500px;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>height:</span>  <span className='yellow'>100px;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>background-color:</span> <span className='yellow'>powderblue;</span> <br /> {`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`div { max-width: 500px;  height: 100px; background-color: powderblue;}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>




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
                                        <Td>height</Td>
                                        <Td>Element balandligini o'rnatadi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>max-height</Td>
                                        <Td>Elementning maksimal balandligini o'rnatadi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>max-width</Td>
                                        <Td>Elementning maksimal kengligini o'rnatadi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>min-height</Td>
                                        <Td>Elementning minimal balandligini belgilaydi</Td>
                                    </Tr >
                                    <Tr>
                                        <Td>min-width</Td>
                                        <Td>Elementning minimal kengligini o'rnatadi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>width</Td>
                                        <Td>Elementning kengligini o'rnatadi</Td>
                                    </Tr >
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

export default Css24dars
