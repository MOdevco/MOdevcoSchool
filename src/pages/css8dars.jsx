import { Box , Flex , Heading , Button , Text , Image , Input , FormLabel, HStack, Radio, RadioGroup} from '@chakra-ui/react'
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
import AccordionItenm from '../components/accordion/accordion'
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
  import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import SidebarCss from '../components/sidebarCss/sidebarCss'
import RgbVal from '../components/rgbVal/rgbVal'

const Css8dars = () => {
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
                    <SidebarCss title={'HTML DARSLARI'} elementName={'Bosh sahifa'}/>
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
                            <AccordionItenm  />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS HEX Colors</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '25vh' , md: '8vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>O'n oltilik rang quyidagilar bilan belgilanadi: #RRGGBB, bu erda RR (qizil), GG (yashil) va BB (ko'k) <br /> o'n oltilik butun sonlar rang komponentlarini belgilaydi.</Text>
            </Box>
            <Divider mt={'20px'} />


            {/* 1 */}
            
            
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'}  flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  
              <Heading fontSize={{base: '30px' , md: '50px'}}>HEX Value</Heading>
                <Text fontSize={'25px'}>CSS-da rangni quyidagi shaklda o'n oltilik qiymatdan foydalanib belgilash mumkin:</Text>
                <Text fontWeight={'400'} color={'rgba(255, 255, 255, 1)'} fontSize={'20px'}>#rrggbb</Text>
                <Text fontSize={'20px'}>Bu erda rr (qizil), gg (yashil) va bb (ko'k) 00 va ff o'rtasidagi o'n oltilik qiymatlardir (o'nlik kasr 0-255 bilan bir xil). <br /> Masalan, #ff0000 qizil rangda ko'rsatiladi, chunki qizil rang eng yuqori qiymatga (ff), qolganlari esa eng <br /> past qiymatga (00) o'rnatiladi. <br /> Qora rangni ko'rsatish uchun barcha qiymatlarni 00 ga o'rnating, masalan: #000000. <br /> Oq rangni ko'rsatish uchun barcha qiymatlarni ff ga o'rnating, masalan: #ffffff. <br /> Quyidagi HEX qiymatlarini aralashtirish orqali tajriba o'tkazing:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'500px', base: '650px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={{md:'320px', base: '530px'}} bg={'#0A1624'} pt={'0px'}>
                      
                    <Box display={'flex'} flexDirection={{base: 'column', md: 'row'}} gap={{base:'1rem', md: '0rem'}} alignItems={'center'} justifyContent={'space-around'}>
                        <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '2rem'}} pt={{md:'0px', base: '20px'}}>
                            <RgbVal bgColor={'#ff0000'} colorName={'#ff0000'} />
                            <RgbVal bgColor={'#3cb371'} colorName={'#3cb371'} />
                            <RgbVal bgColor={'#ffa500'} colorName={'#ffa500'} />
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '2rem'}}>
                            <RgbVal bgColor={'#0000ff'} colorName={'#0000ff'} />
                            <RgbVal bgColor={'#ee82ee'} colorName={'#ee82ee'} />
                            <RgbVal bgColor={'#6a5acd'} colorName={'#6a5acd'} />
                        </Box>
                    </Box>
                      
                        
                    </Box>
                </Box>
                <Text fontSize={'20px'}>Kulrang soyalar ko'pincha barcha 3 yorug'lik manbalari uchun teng qiymatlardan foydalangan holda aniqlanadi:</Text>




                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'500px', base: '650px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={{md:'320px', base: '530px'}} bg={'#0A1624'} pt={'10px'}>
                      
                    <Box display={'flex'} flexDirection={{base: 'column', md: 'row'}}  alignItems={'center'} justifyContent={'space-around'}>
                        <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '2rem'}}>
                            <RgbVal text={'#fff'} bgColor={'#3c3c3c'} colorName={'#3c3c3c'} />
                            <RgbVal text={'#fff'} bgColor={'#3c3c3c'} colorName={'#3c3c3c'} />
                            <RgbVal text={'#000'} bgColor={'#f0f0f0'} colorName={'#f0f0f0'} />
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '2rem'}} pt={{md:'0px', base: '20px'}}>
                            <RgbVal text={'#fff'} bgColor={'#616161'} colorName={'#616161'} />
                            <RgbVal text={'#fff'} bgColor={'#b4b4b4'} colorName={'#b4b4b4'} />
                            <RgbVal text={'#000'} bgColor={'#f9f9f9'} colorName={'#f9f9f9'} />
                        </Box>
                    </Box>
                      
                        
                    </Box>
                </Box>
                
            </Box>
            <Divider mt={'20px'} />
            
            


            {/* 2 */}
                    


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
              
            <Heading fontSize={{base: '30px' , md: '50px'}}>3 Digit HEX Value</Heading>
                <Text fontSize={'20px'}>Ba'zan siz CSS manbasida 3 xonali hex kodini ko'rasiz.</Text>
                <Text fontSize={'20px'}>3-raqamli hex-kod ba'zi 6-raqamli hex kodlarining qisqartmasi hisoblanadi.</Text>
                <Text fontSize={'20px'}>3 xonali hex kod quyidagi shaklga ega:</Text>
                <Text fontSize={'20px'} color={'rgba(255, 255, 255, 1)'}>#rgb</Text>
                <Text fontSize={'20px'}>Bu erda r, g va b qizil, yashil va ko'k komponentlarni 0 dan f gacha bo'lgan qiymatlari bilan ifodalaydi. <br /> 3 xonali olti burchakli koddan faqat ikkala qiymat (RR, GG va BB) har bir komponent uchun bir xil bo'lganda <br /> foydalanish mumkin. Shunday qilib, agar bizda #ff00cc bo'lsa, u shunday yozilishi mumkin: #f0c. <br /> Mana bir misol:</Text>
                

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'flex-start'} alignItems={'flex-start'} bg={'#233242'} height={'500px'} py={{base: '15px', md :'15px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'330px'} bg={'#0A1624'} pt={{md:'10px', base: '20px'}}>
                      
                        <Text fontSize={'20px'} className='purple'>body {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>background-color:</span><span className='yellow'> #fc9;</span> <span className='gray'>/* same as #ffcc99 */</span> <br /> {`}`}</Text>
                        <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>color:</span><span className='yellow'> #fof;</span> <span className='gray'>/* same as #ffooff */</span> <br /> {`}`}</Text>
                        <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>color:</span><span className='yellow'> #b58;</span> <span className='gray'>/* same as #bb5588 */</span> <br /> {`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`body { background-color: #fc9; /* same as #ffcc99 */ } h1 { color: #fof; /* same as #ffooff */ }h1 {color: #b58; /* same as #bb5588 */}`} onCopy={handleClip}>
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            </Box>


    </Box>
  )
}

export default Css8dars
