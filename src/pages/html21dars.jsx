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
import { video } from '../assets'

const Html21dars = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('left')
    const [size, setSize] = useState('')
    const [clipboard , setClipboard] = useState(false)
    const toast = useToast()
    const [bigVideo , setBigVideo] = useState(true)
    const [smallVideo , setSmallVideo] = useState(false)
    const [normalVideo , setNormalVideo] = useState(false)
    const videoRef = useRef()
    const [videoShow , setVideoShow] = useState(true)

    const playVideo = () => {
        videoRef.current.play()
        setVideoShow(false)
    }
    const pauseVideo = () => {
        videoRef.current.pause()
        setVideoShow(true)
    }

    const handleBig = () =>{
        setBigVideo(true)
        setNormalVideo(false)
        setSmallVideo(false)
    }
    const handleNormal = () =>{
        setBigVideo(false)
        setNormalVideo(true)
        setSmallVideo(false)
    }
    const handleSmall = () =>{
        setBigVideo(false)
        setNormalVideo(false)
        setSmallVideo(true)
    }

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
                    <Sidebar title={'HTML DARSLARI'} elementName={'Bosh sahifa'} />
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Video</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '20vh' , md: '15vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>HTML <span className='red'>{`<video>`}</span> elementi veb-sahifada videoni ko'rsatish uchun ishlatiladi.</Text>
            </Box>
            <Divider mt={'20px'} />
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'600px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'450px'} bg={'#0A1624'}>
                        <video src={video} style={{width: '1000px' , height: '450px'}} controls></video>
                    </Box>
                </Box>
            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML<span style={{color: 'red'}}>{` <video>`}</span> Element</Heading>
                <Text fontSize={'25px'}> HTML <span style={{color: 'red'}}>{`<video> `}</span> Videoni HTMLda ko'rsatish uchun elementidan foydalaning:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'160px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<video`} <span className='red'>width=</span>  <span className='yellow'>"320"</span> <span className='red'>height=</span>  <span className='yellow'>"240"</span> <span className='red'> controls</span>{'>'} </Text>
                        
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<source `} <span className='red'>src=</span>  <span className='yellow'>"movie.mp4"</span> <span className='red'>type=</span>  <span className='yellow'>"video/mp4"</span> {'>'} </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<source `} <span className='red'>src=</span>  <span className='yellow'>"movie.ogg"</span> <span className='red'>type=</span>  <span className='yellow'>"video/ogg"</span> {'>'} </Text>
                        <Text pl={'20px'} color={'white'} fontSize={'20px'}> Brauzeringiz video tegini qo'llab-quvvatlamaydi. </Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</video>`}</Text>

                       
                    </Box>
                    <CopyToClipboard text={`<video width="320" height="240" controls><source src="movie.mp4" type="video/mp4"><source src="movie.ogg" type="video/ogg">  Brauzeringiz video tegini qo'llab-quvvatlamaydi.</video>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />



            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'45vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>U Qanday Ishlaydi</Heading>
                <Text fontSize={'25px'}>Controls atributi oʻynash, toʻxtatib turish va ovoz balandligi kabi video boshqaruv elementlarini qoʻshadi.</Text>
                <Text fontSize={'25px'}>Har doim kenglik va balandlik atributlarini kiritish yaxshi fikr. <br /> Agar balandlik va kenglik o'rnatilmagan bo'lsa, video yuklanayotganda sahifa miltillashi mumkin.</Text>
                <Text fontSize={'25px'}> <span className='red'>{`<source>`}</span> elementi brauzer tanlashi mumkin bo'lgan muqobil video fayllarni belgilash imkonini beradi. Brauzer birinchi tan olingan formatdan foydalanadi.</Text>
                <Text fontSize={'25px'}> <span className='red'>{`<video>`}</span> va  <span className='red'>{`</video>`}</span> teglari orasidagi matn faqat <span className='red'>{`<video>`}</span> elementini qo'llab-quvvatlamaydigan brauzerlarda ko'rsatiladi.</Text>
                
            </Box>
            <Divider mt={'20px'} />




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML<span style={{color: 'red'}}>{` <video>`}</span> Autoplay</Heading>
                <Text fontSize={'25px'}> Videoni avtomatik boshlash uchun avtomatik ijro atributidan foydalaning:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'160px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<video`} <span className='red'>width=</span>  <span className='yellow'>"320"</span> <span className='red'>height=</span>  <span className='yellow'>"240"</span> <span className='red'> autoplay</span>{'>'} </Text>
                        
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<source `} <span className='red'>src=</span>  <span className='yellow'>"movie.mp4"</span> <span className='red'>type=</span>  <span className='yellow'>"video/mp4"</span> {'>'} </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<source `} <span className='red'>src=</span>  <span className='yellow'>"movie.ogg"</span> <span className='red'>type=</span>  <span className='yellow'>"video/ogg"</span> {'>'} </Text>
                        <Text pl={'20px'} color={'white'} fontSize={'20px'}> Brauzeringiz video tegini qo'llab-quvvatlamaydi. </Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</video>`}</Text>

                       
                    </Box>
                    <CopyToClipboard text={`<video width="320" height="240" autoplay><source src="movie.mp4" type="video/mp4"><source src="movie.ogg" type="video/ogg">  Brauzeringiz video tegini qo'llab-quvvatlamaydi.</video>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'25px'}>Eslatma: Chromium brauzerlari ko'p hollarda avtomatik ijroga ruxsat bermaydi. <br /> Biroq, ovozsiz avtomatik ijroga har doim ruxsat beriladi.</Text>
                <Text fontSize={'25px'}>Videoni avtomatik ijro etishni boshlash uchun avtomatik ijrodan keyin ovozsiz qo‘shing (lekin ovozsiz):</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'160px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<video`} <span className='red'>width=</span>  <span className='yellow'>"320"</span> <span className='red'>height=</span>  <span className='yellow'>"240"</span> <span className='red'> autoplay muted</span>{'>'} </Text>
                        
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<source `} <span className='red'>src=</span>  <span className='yellow'>"movie.mp4"</span> <span className='red'>type=</span>  <span className='yellow'>"video/mp4"</span> {'>'} </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<source `} <span className='red'>src=</span>  <span className='yellow'>"movie.ogg"</span> <span className='red'>type=</span>  <span className='yellow'>"video/ogg"</span> {'>'} </Text>
                        <Text pl={'20px'} color={'white'} fontSize={'20px'}> Brauzeringiz video tegini qo'llab-quvvatlamaydi. </Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</video>`}</Text>

                       
                    </Box>
                    <CopyToClipboard text={`<video width="320" height="240" autoplay muted><source src="movie.mp4" type="video/mp4"><source src="movie.ogg" type="video/ogg">  Brauzeringiz video tegini qo'llab-quvvatlamaydi.</video>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'10vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Brauzerni Qo'llab-Quvvatlash</Heading>
                <Text fontSize={'25px'}>Jadvaldagi raqamlar  <span style={{color: 'red'}}>{`<video> `}</span> elementini to'liq qo'llab-quvvatlaydigan birinchi brauzer versiyasini ko'rsatadi.</Text>



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
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Video Format lari</Heading>
                <Text fontSize={'25px'}>Uchta qo'llab-quvvatlanadigan video formatlari mavjud: MP4, WebM va Ogg. Turli formatlar uchun brauzerni qo'llab-quvvatlash:</Text>



                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'45vh'}>
                        <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>Browser</Td>
                                        <Td>MP4</Td>
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


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'20vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML video - Media turlari</Heading>

                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'35vh'}>
                        <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>File Format</Td>
                                        <Td>video/mp4</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>MP4</Td>
                                        <Td>video/webm</Td>
                                    </Tr>
                                    <Tr bg={'#233242'} > 
                                        <Td>WebM </Td>
                                        <Td>video/webm</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Ogg  </Td>
                                        <Td>video/ogg</Td>
                                    </Tr>
                                </Tbody>
                                
                            </Table>
                        </TableContainer>
               
                    </Box>

                </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Video - Method lari, Property lari, va Event lari</Heading>
                <Text fontSize={'25px'}>HTML DOM <span className='red'>{`<video>`}</span> elementi uchun usullar, xususiyatlar va hodisalarni belgilaydi.</Text>
                <Text fontSize={'25px'}>Bu sizga videolarni yuklash, ijro etish va to‘xtatib turish, <br /> shuningdek, davomiylik va ovoz balandligini sozlash imkonini beradi.</Text>
                <Text fontSize={'25px'}>Shuningdek, video o'ynay boshlaganda, to'xtatilganda va hokazolarda <br /> sizni xabardor qiladigan DOM hodisalari mavjud.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'750px'} rounded={'20px'}>
                    <Heading>Misol: JavaScript-dan foydalanish</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} gap={'30px'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'600px'} bg={'#0A1624'}>
                        <Box display={'flex'} alignItems={'center'} gap={'30px'}>
                            {videoShow &&<Button onClick={playVideo} >Boshlash/To'htatish</Button>}
                            {!videoShow &&<Button onClick={pauseVideo} >Boshlash/To'htatish</Button>}
                            <Button onClick={handleBig}>Katta holat</Button>
                            <Button onClick={handleNormal}>O'rta holat</Button>
                            <Button onClick={handleSmall}>Kichik holat</Button>
                        </Box>
                       {bigVideo && <video ref={videoRef} src={video} style={{width: '800px' , height: '450px'}} controls></video>}
                       {smallVideo && <video ref={videoRef} src={video} style={{width: '400px' , height: '450px'}} controls></video>}
                       {normalVideo && <video ref={videoRef} src={video} style={{width: '600px' , height: '450px'}} controls></video>}
                    </Box>
                </Box>
            </Box>
            <Divider mt={'100px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'20vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Form va Input Element lari</Heading>

                <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'35vh'}>
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
                                    <Td>{`<video>`}</Td>
                                    <Td>Video yoki filmni belgilaydi</Td>
                                </Tr>
                                <Tr bg={'#233242'}> 
                                    <Td>{`<source>`}</Td>
                                    <Td>{`<video> va <audio> kabi media elementlari uchun bir nechta  media resurslarini belgilaydi`}</Td>
                                </Tr>
                                <Tr>
                                    <Td>{`<track>`}</Td>
                                    <Td>Media pleerlarda matn treklarini belgilaydi</Td>
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

export default Html21dars