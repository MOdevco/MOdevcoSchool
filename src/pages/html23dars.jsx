import { Box , Flex , Heading , Button , Text , Image , Input , FormLabel, HStack, Radio, RadioGroup} from '@chakra-ui/react'
import { HamburgerIcon , CloseIcon } from '@chakra-ui/icons'
import Sidebar from '../components/sidebarhtml/sidebarhtml'
import { AspectRatio } from '@chakra-ui/react'
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
import { useEffect, useRef, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'

const Html23dars = () => {
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
    // useEffect(() => {
    //     window.scroll(0,0)
    //   }, [])
  return (
    <Box pt={'240px'} width={'100%'} bg={'#1A202C'} height={'100%'}>
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
                            <AccordionItenm   />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML YouTube Video lar</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '20vh' , md: '15vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>HTML-da videolarni o'ynashning eng oson yo'li YouTube-dan foydalanishdir.</Text>
            </Box>
            <Divider mt={'20px'} />
           

            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'23vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Video formatlari bilan kurashyapsizmi?</Heading>
                <Text fontSize={'20px'}>Videolarni turli formatlarga aylantirish qiyin va ko'p vaqt talab qilishi mumkin.</Text>
                <Text fontSize={'20px'}>An easier solution is to let YouTube play the videos in your web page.</Text>
            </Box>
            <Divider mt={'20px'} />

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'23vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>YouTube Video Id</Heading>
                <Text fontSize={'20px'}>Videoni saqlaganingizda (yoki o'ynaganingizda) YouTube identifikatorni (masalan, tgbNymZ7vqY) ko'rsatadi.</Text>
                <Text fontSize={'20px'}>Siz ushbu identifikatordan foydalanishingiz va HTML kodidagi videongizga murojaat qilishingiz mumkin.</Text>
            </Box>
            <Divider mt={'20px'} />




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>YouTube Videosini HTML Formatida Ijro Etish</Heading>
                <Text fontSize={'25px'}>Videongizni veb-sahifada ijro etish uchun quyidagilarni bajaring:</Text>
                <UnorderedList fontSize={'25px'} pl={'30px'}>
                    <ListItem>Videoni YouTube-ga yuklang</ListItem>
                    <ListItem>Video identifikatoriga e'tibor bering</ListItem>
                    <ListItem>Veb-sahifangizda <span className='red'>{`<iframe>`}</span> elementini aniqlang</ListItem>
                    <ListItem>src atributi video URL manziliga ishora qilsin</ListItem>
                    <ListItem>Pleyerning o'lchamini belgilash uchun kenglik va balandlik atributlaridan foydalaning</ListItem>
                    <ListItem>URL manziliga boshqa parametrlarni qo'shing (pastga qarang)</ListItem>
                </UnorderedList>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'160px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<iframe `} <span className='red'>controls autoplay</span>  {'>'} </Text>
                        
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<iframe `} <span className='red'>width=</span>  <span className='yellow'>"420" </span> <span className='red'>height=</span>  <span className='yellow'>"315"</span>  <span className='red'>src=</span>  <span className='yellow'>"https://www.youtube.com/embed/tgbNymZ7vqY"</span> {'>'} </Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</iframe>`}</Text>

                       
                    </Box>
                    <CopyToClipboard text={`<iframe width="420" height="315"src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

                <Text fontSize={'25px'}>Eslatma: Chromium brauzerlari ko'p hollarda avtomatik ijroga ruxsat bermaydi. Biroq, ovozsiz avtomatik ijroga har doim ruxsat beriladi.</Text>
                <Text fontSize={'25px'}>Audio faylingiz avtomatik oʻynatila boshlashi uchun avtomatik ijrodan keyin ovozsiz qoʻshing (lekin ovozsiz):</Text>

                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'160px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<audio `} <span className='red'>controls autoplay muted</span>  {'>'} </Text>
                        
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<source `} <span className='red'>src=</span>  <span className='yellow'>"horse.ogg" </span> <span className='red'>type=</span>  <span className='yellow'>"audio/ogg"</span> {'>'} </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<source `} <span className='red'>src=</span>  <span className='yellow'>"horse.mp3"</span> <span className='red'>type=</span>  <span className='yellow'>"audio/mpeg"</span> {'>'} </Text>
                        <Text pl={'20px'} color={'white'} fontSize={'20px'}> Brauzeringiz video tegini qo'llab-quvvatlamaydi. </Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</audio>>`}</Text>

                       
                    </Box>
                    <CopyToClipboard text={`<audio controls autoplay muted><source src="horse.ogg" type="audio/ogg"><source src="horse.mp3" type="audio/mpeg">Brauzeringiz video tegini qo'llab-quvvatlamaydi.</audio>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />



            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'90vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>YouTube Autoplay + Mute</Heading>
                <Text fontSize={'25px'}>YouTube URL manziliga autoplay=1 qo‘shish orqali foydalanuvchi sahifaga tashrif <br /> buyurganida videongizni avtomatik o‘ynay boshlashiga ruxsat berishingiz mumkin. <br /> Biroq, videoni avtomatik ravishda boshlash tashrif buyuruvchilaringiz uchun zerikarli!</Text>
                <Text fontSize={'25px'}>Eslatma: Chromium brauzerlari ko'p hollarda avtomatik ijroga ruxsat bermaydi. <br /> Biroq, ovozsiz avtomatik ijroga har doim ruxsat beriladi.</Text>
                <Text fontSize={'25px'}>Videongiz avtomatik ijro etilishi uchun (lekin ovozi oʻchirilgan) <br /> uchun avtomatik ijro=1dan keyin ovozni oʻchirish=1 qoʻshing.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>YouTube - Autoplay + Muted</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'160px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<iframe  `} <span className='red'>controls autoplay</span>  {'>'} </Text>
                        
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<iframe `} <span className='red'>width=</span>  <span className='yellow'>"420" </span> <span className='red'>height=</span>  <span className='yellow'>"315"</span>  <span className='red'>src=</span>  <span className='yellow'>"https://www.youtube.com/embed/tgbNymZ7vqY"</span> {'>'} </Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</iframe>`}</Text>

                       
                    </Box>
                    <CopyToClipboard text={`<iframe width="420" height="315"src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

               
            </Box>
            <Divider mt={'20px'} />
            


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'23vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>YouTube Playlist</Heading>
                <Text fontSize={'20px'}>A comma separated list of videos to play (in addition to the original URL).</Text>
            </Box>
            <Divider mt={'20px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>YouTube Loop</Heading>
                <Text fontSize={'25px'}>Add loop=1 to let your video loop forever.</Text>
                <Text fontSize={'25px'}>Qiymat 0 (standart): Video faqat bir marta ijro etiladi.</Text>
                <Text fontSize={'25px'}>1-qiymat: video ko'chadan chiqadi (abadiy).</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>YouTube - Loop</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'160px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<iframe  `} <span className='red'>controls autoplay</span>  {'>'} </Text>
                        
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<iframe `} <span className='red'>width=</span>  <span className='yellow'>"420" </span> <span className='red'>height=</span>  <span className='yellow'>"315"</span>  <span className='red'>src=</span>  <span className='yellow'>"https://www.youtube.com/embed/tgbNymZ7vqY"</span> {'>'} </Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</iframe>`}</Text>

                       
                    </Box>
                    <CopyToClipboard text={`<iframe width="420" height="315"src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

               
            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>YouTube Controls</Heading>
                <Text fontSize={'25px'}>Video pleerda boshqaruv elementlarini ko‘rsatmaslik uchun boshqaruv elementlarini qo‘shing=0.</Text>
                <Text fontSize={'25px'}>Qiymat 0: Pleyer boshqaruvlari ko'rsatilmaydi.</Text>
                <Text fontSize={'25px'}>Qiymat 1 (standart): Pleyer boshqaruvlari ekrani.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>YouTube Controls</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'160px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<iframe  `} <span className='red'>controls autoplay</span>  {'>'} </Text>
                        
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<iframe `} <span className='red'>width=</span>  <span className='yellow'>"420" </span> <span className='red'>height=</span>  <span className='yellow'>"315"</span>  <span className='red'>src=</span>  <span className='yellow'>"https://www.youtube.com/embed/tgbNymZ7vqY"</span> {'>'} </Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</iframe>`}</Text>

                       
                    </Box>
                    <CopyToClipboard text={`<iframe width="420" height="315"src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

               
            </Box>
            <Divider mt={'20px'} />




        </Box>
    </Box>
  )
}

export default Html23dars