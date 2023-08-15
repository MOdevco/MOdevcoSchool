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

const Css25dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Box Model</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box height={'8vh'} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Text fontSize={'20px'}>Barcha HTML elementlarini qutilar deb hisoblash mumkin.</Text>
            </Box>
            <Divider mt={'20px'} />

            <Box className='minii' h={{md:'90vh',base: '50vh', lg: '100vh', xl: '65vh', '2xl': '55vh'}} pl={{base: '20px' , md: '450px'}} pt={4} display={'flex'} flexDirection={'column'} gap={'10px'}>
                <Heading fontSize={{base: '30px', md: '50px'}}>CSS Box Mode</Heading>
                <Text fontSize={'20px'}>CSS-da dizayn va tartib haqida gapirganda "quti modeli" atamasi ishlatiladi.</Text>
                <Text fontSize={'20px'}>CSS qutisi modeli aslida har bir HTML elementini o'rab oladigan qutidir. U quyidagilardan iborat: <br /> chegaralar, chegaralar, to'ldirish va haqiqiy tarkib. Quyidagi rasmda quti modeli ko'rsatilgan:</Text>
                <Box w={{sm: '100%', md: '100%', xl: '861px'}} bg={'#FFFFFF'} h={{ base: '290px',md: '290px',xl:'300px', '2xl': '300px'}}>
                    <Text color={'#000'} textAlign={'center'} fontSize={'20px'} pt={'10px'}>Margin</Text>
                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} border={'40px solid #00803BC9'} w={{base: '90%', md: '90%', xl: '700px'}} h={{xl:'230px', base: '200px', md: '220px'}} m={'auto'}>
                            <Text textAlign={'center'} mt={{xl: '-35px', base: '-38px'}} fontSize={'20px'} color={'#000'}>Border</Text>
                            <Text textAlign={'center'} fontSize={'20px'} color={'#000'} pt={'10px'}>Padding</Text>
                            <Box m={'auto'} w={{xl:'480px', base: '80%'}} h={'60px'} border={'4px dashed #000'} fontSize={'20px'} color={'#000'} display={'flex'} alignItems={'center'} justifyContent={'center'}>Content</Box>
                        </Box>

                </Box>
            </Box>
            <Divider mt={'20px'} />





            {/* 1 */}
            
            
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Text fontSize={'20px'}>Turli qismlarni  tushuntirish:</Text>
                  <ul className='ull'>
                    <li>Kontent - matn va tasvirlar paydo bo'ladigan qutining mazmuni</li>
                    <li>Padding - To'ldirish - kontent atrofidagi maydonni tozalaydi. Qoplama shaffof</li>
                    <li>Border - to'ldirish va tarkibni aylanib o'tadigan chegara</li>
                    <li>Chegara - chegaradan tashqaridagi maydonni tozalaydi. Chegara shaffof</li>
                  </ul>
                  <Text fontSize={'20px'}>Box modeli bizga elementlar atrofida chegara qo'shish va elementlar orasidagi bo'shliqni aniqlash imkonini beradi.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'450px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Quti modelining namoyishi:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'215px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>div{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>width:</span> <span className='yellow'>300px;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>border:</span> <span className='yellow'>15px solid green;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>padding:</span> <span className='yellow'>50px;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>margin:</span> <span className='yellow'>20px;</span> <br /> {`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`div { width: 300px;  border:  15px solid green; padding: 50px; margin: 20px;}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
            



            {/* 2 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Heading>Elementning kengligi va balandligi</Heading>
                <Text fontSize={'20px'}>Barcha brauzerlarda elementning kengligi va balandligini to'g'ri belgilash uchun siz quti modeli qanday <br /> ishlashini bilishingiz kerak.</Text>
                <Text fontSize={'20px'}>Muhim: CSS bilan elementning kengligi va balandligi xususiyatlarini o'rnatganingizda, siz shunchaki kontent <br /> maydonining kengligi va balandligini o'rnatasiz. Elementning to'liq hajmini hisoblash uchun siz to'ldirish, <br /> chegaralar va chekkalarni ham qo'shishingiz kerak.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'440px', base: '440px', md: '490px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Ushbu <span className='red'>{`<div>`}</span> elementining umumiy kengligi 350px bo'ladi:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'210px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>div{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>wifdth:</span> <span className='yellow'>320px;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>padding:</span> <span className='yellow'>50px;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>border:</span ><span className='yellow'>15px solid green;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>margin:</span ><span className='yellow'>20px;</span> <br /> {`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`div { width: 320px;  padding: 50px; border:  15px solid green; margin: 20px;}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'}   flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{lg:'40vh', md: '36vh'}}>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} border={'2px solid #008000'} display={'flex'} flexDirection={'row'} pl={{base: '20px' , md: '00px'}} justifyContent={'center'} alignItems={'flex-start'}  height={'300px'} py={{base: '15px', md :'0px'}} >
                    <Box h={'100%'} border={'4px solid #008000'} >

                    </Box>
                    <Box width={'90%'}  pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  height={'180px'} pt={'10px'} h={'100%'} gap={'1rem'}>
                    
                      
                    <Text fontSize={'20px'}>320px (width) </Text>
                    <Text fontSize={'20px'}>+ 20px (left + right padding) </Text>
                    <Text fontSize={'20px'}>+ 10px (left + right border)</Text>
                    <Text fontSize={'20px'}>0px (left + right margin)</Text>
                    <Text fontSize={'20px'}>= 350px</Text>
                      
                        
                    </Box>
                </Box>
                <Text fontSize={'20px'}>Elementning umumiy kengligi quyidagicha hisoblanishi kerak:</Text>
                <Text fontSize={'20px'}>Elementning umumiy kengligi = kenglik + chap to'ldirish + o'ng to'ldirish + chap chegara + o'ng chegara <br /> + chap chet + o'ng chet</Text>
                <Text fontSize={'20px'}>Elementning umumiy balandligini quyidagicha hisoblash kerak:</Text>
                <Text fontSize={'20px'}>Jami element balandligi = balandlik + yuqori toʻldirish + pastki toʻldirish + yuqori chegara <br /> + pastki chegara + yuqori chet + pastki chet</Text>
            </Box>
            <Divider mt={'20px'} />






            

            </Box>
    </Box>
  )
}

export default Css25dars
