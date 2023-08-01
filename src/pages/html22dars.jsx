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

const Html22dars = () => {
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
    <Box pt={'240px'} width={'100%'} bg={'#1A202C'} height={'100%'}>
        <Box >
            <Flex >
                {onOpen && <Box>
                    <Sidebar title={'HTML DARSLARI'} elementName={'Bosh sahifa'}/>
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Audio</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '20vh' , md: '15vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>HTML <span className='red'>{`<audio>`}</span>elementi veb-sahifadagi audio faylni ijro etish uchun ishlatiladi.</Text>
            </Box>
            <Divider mt={'20px'} />
           


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML<span style={{color: 'red'}}>{` <audio>`}</span> Element</Heading>
                <Text fontSize={'20px'}>Ovoz faylini HTML formatida ijro etish uchun<span style={{color: 'red'}}>{` <audio`}</span> elementidan foydalaning:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'160px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<audio `} <span className='red'>controls</span>  {'>'} </Text>
                        
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<source `} <span className='red'>src=</span>  <span className='yellow'>"horse.ogg" </span> <span className='red'>type=</span>  <span className='yellow'>"audio/ogg"</span> {'>'} </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<source `} <span className='red'>src=</span>  <span className='yellow'>"horse.mp3"</span> <span className='red'>type=</span>  <span className='yellow'>"audio/mpeg"</span> {'>'} </Text>
                        <Text pl={'20px'} color={'white'} fontSize={'20px'}> Brauzeringiz video tegini qo'llab-quvvatlamaydi. </Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</audio>>`}</Text>

                       
                    </Box>
                    <CopyToClipboard text={`<audio controls><source src="horse.ogg" type="audio/ogg"><source src="horse.mp3" type="audio/mpeg">Brauzeringiz video tegini qo'llab-quvvatlamaydi.</audio>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />



            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'40vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Audio - U qanday ishlaydi</Heading>
                <Text fontSize={'20px'}>Controls atributi ijro, pauza va ovoz balandligi kabi audio boshqaruv elementlarini qo‘shadi.</Text>
                <Text fontSize={'20px'}><span className='red'>{`<source>`}</span> elementi brauzer tanlashi mumkin bo'lgan muqobil audio fayllarni belgilash imkonini beradi. <br /> Brauzer birinchi tan olingan formatdan foydalanadi.</Text>
                <Text fontSize={'20px'}> <span className='red'>{`<source>`}</span> elementi brauzer tanlashi mumkin bo'lgan muqobil video fayllarni belgilash imkonini beradi. Brauzer birinchi tan olingan formatdan foydalanadi.</Text>
                <Text fontSize={'20px'}><span className='red'>{`<audio>`}</span> va <span className='red'>{`</audio>`}</span> teglari orasidagi matn faqat <span className='red'>{`<audio>`}</span> elementini qo'llab-quvvatlamaydigan brauzerlarda ko'rsatiladi.</Text>
                
            </Box>
            <Divider mt={'20px'} />




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML<span style={{color: 'red'}}>{` <audio>`}</span> Autoplay</Heading>
                <Text fontSize={'25px'}>Audio faylni avtomatik ravishda ishga tushirish uchun autoplay atributidan foydalaning:</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'160px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<audio `} <span className='red'>controls autoplay</span>  {'>'} </Text>
                        
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<source `} <span className='red'>src=</span>  <span className='yellow'>"horse.ogg" </span> <span className='red'>type=</span>  <span className='yellow'>"audio/ogg"</span> {'>'} </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<source `} <span className='red'>src=</span>  <span className='yellow'>"horse.mp3"</span> <span className='red'>type=</span>  <span className='yellow'>"audio/mpeg"</span> {'>'} </Text>
                        <Text pl={'20px'} color={'white'} fontSize={'20px'}> Brauzeringiz video tegini qo'llab-quvvatlamaydi. </Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</audio>>`}</Text>

                       
                    </Box>
                    <CopyToClipboard text={`<audio controls autoplay><source src="horse.ogg" type="audio/ogg"><source src="horse.mp3" type="audio/mpeg">Brauzeringiz video tegini qo'llab-quvvatlamaydi.</audio>`} onCopy={handleClip} >
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



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'10vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Brauzerni Qo'llab-Quvvatlash</Heading>
                <Text fontSize={'25px'}>Jadvaldagi raqamlar  <span style={{color: 'red'}}>{`<audio> `}</span> elementini to'liq qo'llab-quvvatlaydigan birinchi brauzer versiyasini ko'rsatadi.</Text>



                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'25vh'}>
                        <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>Element</Td>
                                        <Td>
                                            <Image width={'40px'} src='https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png'></Image>
                                        </Td>
                                        <Td>
                                            <Image width={'40px'} rounded={'50%'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLaHbeRYxvTBd4BE_yVmP2oGDQsCmC5k69OueIriIXiMBjfKmhUgPoLYCQR0-4DFuGPY&usqp=CAU'></Image>
                                        </Td>
                                        <Td>
                                            <Image width={'40px'} src='https://upload.wikimedia.org/wikipedia/commons/1/16/Firefox_logo%2C_2017.png'></Image>
                                        </Td>
                                        <Td>
                                            <Image width={'40px'} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/2057px-Safari_browser_logo.svg.png'></Image>
                                        </Td>
                                        <Td>
                                            <Image width={'40px'} src='https://cdn.freebiesupply.com/logos/large/2x/opera-2-logo-png-transparent.png'></Image>
                                        </Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>{`<video>`}</Td>
                                        <Td>4.0</Td>
                                        <Td>9.0</Td>
                                        <Td>3.5</Td>
                                        <Td>4.0</Td>
                                        <Td>10.5</Td>
                                    </Tr>
                                </Tbody>
                                
                            </Table>
                        </TableContainer>
               
                    </Box>

                </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'20vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Audio Format lari</Heading>
                <Text fontSize={'25px'}>Uchta qo'llab-quvvatlanadigan audio formatlari mavjud: MP3, WAV va OGG. Turli formatlar uchun brauzerni qo'llab-quvvatlash:</Text>

                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'45vh'}>
                        <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>Browser</Td>
                                        <Td>MP3</Td>
                                        <Td>WebM</Td>
                                        <Td>Ogg</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Chrome</Td>
                                        <Td>YES</Td>
                                        <Td>YES</Td>
                                        <Td>YES</Td>
                                    </Tr>
                                    <Tr bg={'#233242'} > 
                                        <Td>Firefox </Td>
                                        <Td>YES</Td>
                                        <Td>YES</Td>
                                        <Td>YES</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Firefox </Td>
                                        <Td>YES</Td>
                                        <Td>YES</Td>
                                        <Td>YES</Td>
                                    </Tr>
                                    <Tr bg={'#233242'} >
                                        <Td>Safari</Td>
                                        <Td>YES</Td>
                                        <Td>YES</Td>
                                        <Td>NO</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Opera</Td>
                                        <Td>YES</Td>
                                        <Td>YES</Td>
                                        <Td>YES</Td>
                                    </Tr>
                                </Tbody>
                                
                            </Table>
                        </TableContainer>
               
                    </Box>

                </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'10vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Audio - Media turlari</Heading>

                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'30vh'}>
                        <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>File Format</Td>
                                        <Td>audio/mpeg</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>MP3</Td>
                                        <Td>audio/mpeg</Td>
                                    </Tr>
                                    <Tr bg={'#233242'} > 
                                        <Td>OGG </Td>
                                        <Td>audio/ogg</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>WAV  </Td>
                                        <Td>audio/wav</Td>
                                    </Tr>
                                </Tbody>
                                
                            </Table>
                        </TableContainer>
               
                    </Box>

            </Box>
            <Divider mt={'20px'} />

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'30vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Audio - Method lari, Property lari, va Event lari</Heading>
                <Text fontSize={'20px'}>HTML DOM <span className='red'>{`<audio>`}</span> elementi uchun usullar, xususiyatlar va hodisalarni belgilaydi.</Text>
                <Text fontSize={'20px'}>Bu sizga audiolarni yuklash, ijro etish va pauza qilish, shuningdek, davomiylik va ovoz balandligini belgilash imkonini beradi.</Text>
                <Text fontSize={'20px'}>Bundan tashqari, audio o'ynay boshlaganda, to'xtatilganda va hokazolarda sizga xabar beradigan DOM hodisalari mavjud.</Text>
                
            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'20vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML audio teglar</Heading>

                <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'30vh'}>
                    <TableContainer>
                        <Table border={'1px'} variant='simple' width={'90%'}>
                            
                            <Thead>
                                <Tr fontWeight={'bold'} bg={'#233242'} >
                                    <Td>Tag</Td>
                                    <Td>Tavsif</Td>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>{`<audio>`}</Td>
                                    <Td>Video yoki filmni belgilaydi</Td>
                                </Tr>
                                <Tr bg={'#233242'}> 
                                    <Td>{`<source>`}</Td>
                                    <Td>{`<video> va <audio> kabi media elementlari uchun bir nechta media resurslarini belgilaydi`}</Td>
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

export default Html22dars