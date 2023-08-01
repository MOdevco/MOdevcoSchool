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
    ListItem
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
import { media } from '../assets'

const Html20dars = () => {
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
                    <Sidebar title={'HTML DARSLARI'} elementName={'Bosh sahifa'}  />
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
                            <AccordionItenm />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Multimedia</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '20vh' , md: '15vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>Internetdagi multimedia tovush, musiqa, videolar, filmlar va animatsiyalardir.</Text>
            </Box>
            <Divider mt={'20px'} />
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'25vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Multimedia nima?</Heading>
                <Text fontSize={'20px'}>Multimedia juda ko'p turli formatlarda keladi. Bu siz eshitishingiz yoki ko'rishingiz mumkin bo'lgan deyarli hamma <br /> narsa bo'lishi mumkin, masalan, tasvirlar, musiqa, ovoz, videolar, yozuvlar, filmlar, animatsiyalar va boshqalar.</Text>
                <Text fontSize={'20px'}>Veb-sahifalarda ko'pincha turli xil va formatdagi multimedia elementlari mavjud.</Text>

               
            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'25vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Browser Support</Heading>
                <Text fontSize={'20px'}>Birinchi veb-brauzerlar faqat matnni qo'llab-quvvatlagan, bitta rangdagi bitta shrift bilan cheklangan.</Text>
                <Text fontSize={'20px'}>Keyinchalik ranglar, shriftlar, tasvirlar va multimediyalarni qo'llab-quvvatlaydigan brauzerlar paydo bo'ldi!</Text>

               
            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'25vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Multimedia Format lari</Heading>
                <Text fontSize={'20px'}>Multimedia elementlari (masalan, audio yoki video) media fayllarda saqlanadi.</Text>
                <Text fontSize={'20px'}>Fayl turini aniqlashning eng keng tarqalgan usuli bu fayl kengaytmasiga qarashdir.</Text>
                <Text fontSize={'20px'}>Multimedia fayllari formatlari va turli kengaytmalariga ega: .wav, .mp3, .mp4, .mpg, .wmv va .avi.</Text>
            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'20vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Common Video Format lari</Heading>
                <Box display={'flex'} alignItems={'center'} gap={'50px'} flexWrap={'wrap'}>
                    <Box>
                        <Image src={media}></Image>
                    </Box>
                    <Box>
                        <Text fontSize={'20px'}>U erda ko'plab video formatlari mavjud</Text>
                        <Text fontSize={'20px'}>MP4, WebM va Ogg formatlari HTML tomonidan qo'llab-quvvatlanadi.</Text>
                        <Text fontSize={'20px'}>MP4 formati YouTube tomonidan tavsiya etiladi.</Text>
                    </Box>
                </Box>
            </Box>


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'95vh'}>


                <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'45vh'}>
                    <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>Format</Td>
                                        <Td>File</Td>
                                        <Td>Tavsif</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>MPEG</Td>
                                        <Td>.mpeg</Td>
                                        <Td>MPEG. Moving Pictures Expert Group tomonidan ishlab chiqarilgan. <br /> Internetdagi birinchi mashhur video formati. HTMLda endi qo'llab-quvvatlanmaydi.</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>AVI</Td>
                                        <Td>.avi</Td>
                                        <Td>AVI (Audio Video Interleave). Microsoft tomonidan ishlab chiqarilgan. <br /> tez videokameralar va televizorida qo'shimcha qurilmalar. Windows kompyuterlarida yaxshi o'ynaydi, <br /> lekin veb-brauzerlarda emas.</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>WMV</Td>
                                        <Td>.wmv</Td>
                                        <Td>WMV (Windows Media Video). Microsoft tomonidan ishlab chiqarilgan. <br /> tez videokameralar va televizorida qo'shimcha qurilmalar. <br /> Windows kompyuterlarida yaxshi o'ynaydi, lekin veb-brauzerlarda emas.</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>QuickTime</Td>
                                        <Td>.mov</Td>
                                        <Td>QuickTime. Apple tomonidan ishlab chiqarilgan. <br /> tez videokameralar va televizorida qo'shimcha qurilmalar. <br /> Apple kompyuterlarida yaxshi o'ynaydi, lekin veb-brauzerlarda emas.</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>RealVideo</Td>
                                        <Td>.rm .ram</Td>
                                        <Td>RealVideo. Real Media tomonidan ishlab chiqarilgan, o'tgan o'tkazuvchanlik bilan <br /> video o'tkazishga ruxsat berish. Veb-brauzerlarda o'ynamaydi.</Td>
                                    </Tr>

                                    <Tr >
                                        <Td>Flash</Td>
                                        <Td>.swf .flv</Td>
                                        <Td>Flash. Macromedia tomonidan ishlab chiqariladi. <br /> Ko'pincha veb-brauzerlarda o'ynash uchun qo'shimcha komponent (plagin) talab.</Td>
                                    </Tr>

                                    <Tr bg={'#233242'}>
                                        <Td>Ogg</Td>
                                        <Td>.ogg</Td>
                                        <Td>Teora Ogg. Xiph.Org jamg'armasi tomonidan ishlab chiqarilgan. HTML qo'llab-quvvatlanadi.</Td>
                                    </Tr>

                                    <Tr >
                                        <Td>WebM</Td>
                                        <Td>.webm</Td>
                                        <Td>WebM. Mozilla, Opera, Adobe va Google tomonidan ishlab chiqarilgan. HTML qo'llab-quvvatlanadi.</Td>
                                    </Tr>

                                    <Tr bg={'#233242'}>
                                        <Td>MPEG-4 or MP4</Td>
                                        <Td>.mp4</Td>
                                        <Td>MP4. Moving Pictures Expert Group tomonidan ishlab chiqarilgan. <br /> kompyuter videokameralar va televizorida qo'shimcha qurilmalar. <br /> Barcha brauzerlar qo'llab-quvvatlanadi va YouTube tomonidan tavsiya etilgan.</Td>
                                    </Tr>
                                </Tbody>
                                
                            </Table>
                    </TableContainer>
                    <Text fontSize={'20px'}>Eslatma: HTML standarti faqat MP4, WebM va Ogg videolarini qo'llab-quvvatlaydi.</Text>
                </Box>

            </Box>
            
            <Divider mt={'20px'} />

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'95vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Umumiy audio formatlari</Heading>
                <Text fontSize={'20px'}>MP3 siqilgan yozilgan musiqa uchun eng yaxshi formatdir. MP3 atamasi raqamli musiqa bilan sinonimga aylandi.</Text>
                <Text fontSize={'20px'}>Agar veb-saytingiz yozilgan musiqa haqida bo'lsa, MP3 tanlovdir.</Text>



                <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'45vh'}>
                    <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>Format</Td>
                                        <Td>File</Td>
                                        <Td>Tavsif</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr bg={'#233242'}>
                                        <Td>MIDI</Td>
                                        <Td>..mid .midi</Td>
                                        <Td>MIDI (musiqa asboblari raqamli interfeysi). Sintezatorlar va kompyuter ovoz kartalari kabi barcha <br /> elektron musiqa qurilmalari uchun asosiy format. MIDI fayllari ovozni o'z ichiga olmaydi, lekin elektronika tomonidan ijro etilishi mumkin <br /> bo'lgan raqamli notalar. Barcha kompyuterlar va musiqa qurilmalarida yaxshi o'ynaydi, lekin veb-brauzerlarda emas.</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>RealAudio</Td>
                                        <Td>.rm .ram</Td>
                                        <Td>RealAudio. Ovozni past o'tkazish qobiliyati bilan uzatish <br /> imkonini berish uchun Real Media tomonidan ishlab chiqilgan. Veb-brauzerlarda o'ynamaydi.</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>WMV</Td>
                                        <Td>.wmv</Td>
                                        <Td>WMA (Windows Media Audio). Microsoft tomonidan ishlab chiqilgan. <br /> Windows kompyuterlarida yaxshi o'ynaydi, lekin veb-brauzerlarda emas.</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>AAC</Td>
                                        <Td>.aac</Td>
                                        <Td>AAC (Kengaytirilgan audio kodlash). Apple tomonidan iTunes uchun standart format sifatida ishlab chiqilgan. <br /> Apple kompyuterlarida yaxshi o'ynaydi, lekin veb-brauzerlarda emas.</Td>
                                    </Tr>

                                    <Tr >
                                        <Td>WAV</Td>
                                        <Td>.wav</Td>
                                        <Td>WAV. IBM va Microsoft tomonidan ishlab chiqilgan. Windows, Macintosh va Linux <br /> operatsion tizimlarida yaxshi o'ynaydi. HTML tomonidan qo'llab-quvvatlanadi.</Td>
                                    </Tr>

                                    <Tr bg={'#233242'}>
                                        <Td>Ogg</Td>
                                        <Td>.ogg</Td>
                                        <Td>Ogg. Xiph.Org jamg'armasi tomonidan ishlab chiqilgan. HTML tomonidan qo'llab-quvvatlanadi.</Td>
                                    </Tr>

                                    <Tr >
                                        <Td>MP3</Td>
                                        <Td>.mp3</Td>
                                        <Td>MP3 fayllari aslida MPEG fayllarining ovozli qismidir. MP3 musiqa pleyerlari uchun eng mashhur formatdir. <br /> Yaxshi siqishni (kichik fayllar) yuqori sifat bilan birlashtiradi. Barcha brauzerlar tomonidan qo'llab-quvvatlanadi.</Td>
                                    </Tr>

                                    <Tr bg={'#233242'}>
                                        <Td>MP4</Td>
                                        <Td>.mp4</Td>
                                        <Td>MP4 video formatidir, lekin audio uchun ham foydalanish mumkin. Barcha brauzerlar tomonidan qo'llab-quvvatlanadi.</Td>
                                    </Tr>
                                </Tbody>
                                
                            </Table>
                    </TableContainer>
                </Box>

            </Box>
        
        </Box>
            
    </Box>
  )
}

export default Html20dars