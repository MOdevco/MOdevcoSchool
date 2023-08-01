import { Box , Flex , Heading , Button , Text , Image} from '@chakra-ui/react'
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
  } from '@chakra-ui/react'
  import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
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
import { favicon } from '../assets'

const Html9dars = () => {
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
                    <Sidebar title={'HTML DARSLARI'} elementName={'Bosh sahifa'}   />
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Favicon</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '20vh' , md: '15vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'25px'}>Favikon - bu brauzer yorlig'ida sahifa sarlavhasi yonida ko'rsatiladigan kichik rasm.</Text>
            </Box>
            <Divider mt={'20px'} />
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> HTML-da Favikonni qanday qo'shish mumkin</Heading>
                <Text fontSize={'25px'}> Favikon sifatida o'zingizga yoqqan har qanday rasmdan foydalanishingiz mumkin. Shuningdek, https://www.fabicon.cc kabi saytlarda o'z favikoningizni yaratishingiz mumkin.</Text>
                <Text fontSize={'25px'}> Maslahat: Favikon kichik rasm, shuning uchun u yuqori kontrastli oddiy tasvir bo'lishi kerak.</Text>
                <Text fontSize={'25px'} style={{color: '#7FFFD4'}}>Favikon tasviri brauzer yorlig'ida sahifa sarlavhasining chap tomonida ko'rsatiladi, masalan:</Text>
                <Box>
                    <Image src={favicon}></Image>
                </Box>

                <Text fontSize={'25px'}> Veb-saytingizga favikon qo'shish uchun favikon tasviringizni veb-serveringizning asosiy katalogiga saqlang yoki ildiz katalogida tasvirlar deb nomlangan papka yarating va favikon tasviringizni ushbu jildga saqlang. Favikon tasvirining umumiy nomi "favicon.ico" dir.</Text>
                <Text fontSize={'25px'}> Keyin, "index.html" faylingizga <span style={{color: 'red'}}>{` <title>`}</span> elementidan keyin quyidagi kabi <span style={{color: 'red'}}>{` <link>`}</span> elementini qo'shing:</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'650px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'490px'} bg={'#0A1624'} fontSize={'25px'}>
                        <Text color={'#9D5EBB'}>{`<!DOCTYPE `} <span style={{color:'red'}}>{`html>`}</span> </Text>
                        <Text color={'#9D5EBB'}>{`<html>`}</Text>
                        <Text color={'#9D5EBB'}>{`<head>`}</Text>
                        <Text pl={'30px'} color={'#9D5EBB'}>{`<title>`} <span style={{color: 'white'}}>Html darslari</span> {`</title>`} </Text>
                        <Text pl={'30px'} color={'#9D5EBB'}>{`<link`} <span style={{color: 'red'}}>{`rel=`}</span> <span style={{color: 'yellow'}}>{`"icon"`}</span> <span style={{color: 'red'}}>type=</span> <span style={{color: 'yellow'}}>"image/x-icon"</span> <span style={{color: 'red'}}> href=</span> <span style={{color: 'yellow'}}>"/images/favicon.ico"</span> {`>`} {`</link>`} </Text>
                        <Text color={'#9D5EBB'}>{`</head>`}</Text>
                        <Text color={'#9D5EBB'}>{`<body>`}</Text>
                        <Text pl={'30px'} color={'#9D5EBB'}>{`<h1>`} <span style={{color: 'white'}}>Bu heading</span> {`</h1>`} </Text>
                        <Text pl={'30px'} color={'#9D5EBB'}>{`<p>`} <span style={{color: 'white'}}>Bu paragraph</span> {`</p>`} </Text>
                        <Text color={'#9D5EBB'}>{`</body>`}</Text>
                        <Text color={'#9D5EBB'}>{`<html>`}</Text>
                    </Box>

                    <CopyToClipboard text={` !DOCTYPE html><html><head><title>My Page Title</title><link rel="icon" type="image/x-icon" href="/images/favicon.ico"></head><body> <h1>This is a Heading</h1><p>This is a paragraph.</p></body></html>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

                <Text fontSize={'25px'}>Endi <span style={{color: 'red'}}>"index.html"</span> faylini saqlang va uni brauzeringizga qayta yuklang. Brauzeringiz yorlig'i endi sahifa <br /> sarlavhasining chap tomonida favikon tasviringizni ko'rsatishi kerak.</Text>
                
            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'30vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Favicon File Format Support</Heading>
                <Text fontSize={'25px'}>Quyidagi jadvalda favikon tasviri uchun fayl formatini qo'llab-quvvatlash ko'rsatilgan:</Text>

                <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} >
                    <TableContainer>
                        <Table border={'1px'} variant='simple' width={'90%'}>
                            
                            <Thead>
                                <Tr fontWeight={'bold'} bg={'#233242'} >
                                    <Td>Browser</Td>
                                    <Td>Browser</Td>
                                    <Td>Browser</Td>
                                    <Td>Browser</Td>
                                    <Td>Browser</Td>
                                    <Td>Browser</Td>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr fontWeight={'bold'}>
                                    <Td>Edge</Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                </Tr>
                                <Tr fontWeight={'bold'} bg={'#233242'}>
                                    <Td>Chrome</Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                </Tr>
                                <Tr fontWeight={'bold'}>
                                    <Td>Firefoxx </Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                </Tr>
                                <Tr fontWeight={'bold'} bg={'#233242'}> 
                                    <Td>opera </Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                </Tr>
                                <Tr fontWeight={'bold'}>
                                    <Td>Safari </Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                    <Td>Yes</Td>
                                </Tr>
                            </Tbody>
                            
                        </Table>
                    </TableContainer>
                </Box>

            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'20vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Bo'lim xulosasi</Heading>
                <UnorderedList>
                    <ListItem>
                        <Text fontSize={'25px'}>Favi kiritish uchun HTML <span style={{color: 'red'}}>{`<link>`}</span> elementidan foydalaning</Text>
                    </ListItem>
                </UnorderedList>
            </Box>
            <Divider mt={'20px'} />

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'30vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Link Tag</Heading>

                <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} >
                    <TableContainer>
                        <Table border={'1px'} variant='simple' width={'90%'}>
                            
                            <Thead>
                                <Tr fontWeight={'bold'} bg={'#233242'} >
                                    <Td>Tag</Td>
                                    <Td>Description</Td>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr fontWeight={'bold'}>
                                    <Td><span>{`<link>`}</span></Td>
                                    <Td>Hujjat va tashqi manba o'rtasidagi munosabatni belgilaydi</Td>
                                </Tr>
                            </Tbody>
                            
                        </Table>
                    </TableContainer>
                </Box>

            </Box>
            <Divider mt={'20px'} />

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'20vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Page Title</Heading>
                <Text fontSize={'25px'}>Har bir veb-sahifada sahifaning ma'nosini tavsiflovchi sahifa sarlavhasi bo'lishi kerak.</Text>
            </Box>
            <Divider mt={'20px'} />

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Text fontSize={'25px'}><span style={{color: 'red'}}>{`<title>`}</span> elementi sahifangizga sarlavha qo'shadi:</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'650px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'450px'} bg={'#0A1624'} fontSize={'25px'}>
                        <Text color={'#9D5EBB'}>{`<!DOCTYPE `} <span style={{color:'red'}}>{`html>`}</span> </Text>
                        <Text color={'#9D5EBB'}>{`<html>`}</Text>
                        <Text color={'#9D5EBB'}>{`<head>`}</Text>
                        <Text pl={'30px'} color={'#9D5EBB'}>{`<title>`} <span style={{color: 'white'}}>Html darslari</span> {`</title>`} </Text>
                        <Text color={'#9D5EBB'}>{`</head>`}</Text>
                        <Text color={'#9D5EBB'}>{`<body>`}</Text>
                        <Text pl={'30px'} color={'#9D5EBB'}>{`<h1>`} <span style={{color: 'white'}}>Bu heading</span> {`</h1>`} </Text>
                        <Text pl={'30px'} color={'#9D5EBB'}>{`<p>`} <span style={{color: 'white'}}>Bu paragraph</span> {`</p>`} </Text>
                        <Text color={'#9D5EBB'}>{`</body>`}</Text>
                        <Text color={'#9D5EBB'}>{`<html>`}</Text>
                    </Box>

                    <CopyToClipboard text={` !DOCTYPE html><html><head><title>My Page Title</title></head><body> <h1>This is a Heading</h1><p>This is a paragraph.</p></body></html>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

                <Text fontSize={'25px'}>Sarlavha sahifaning mazmuni va ma'nosini tavsiflashi kerak.</Text>
                <Text fontSize={'25px'}>Sahifaning sarlavhasi qidiruv tizimini optimallashtirish (SEO) uchun juda muhimdir. Matn qidiruv tizimi <br /> algoritmlari tomonidan qidiruv natijalarida sahifalarni ro'yxatga olish tartibini aniqlash uchun ishlatiladi.</Text>
                <Text fontSize={'25px'}><span style={{color: 'red'}}>{`<title>`}</span> elementi:</Text>
                <UnorderedList fontSize={'20px'} pl={{base: '0px' , xl: '30px'}}>
                    <ListItem>brauzer asboblar panelidagi sarlavhani belgilaydi</ListItem>
                    <ListItem>sahifa sevimlilarga qo'shilganda uning sarlavhasini beradi</ListItem>
                    <ListItem>qidiruv tizimi natijalarida sahifa sarlavhasini ko'rsatadi</ListItem>
                </UnorderedList>
                <Text fontSize={'25px'}>Shunday ekan, sarlavhani iloji boricha aniq va mazmunli qilishga harakat qiling!</Text>
            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'30vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Title Tag</Heading>

                <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} >
                    <TableContainer>
                        <Table border={'1px'} variant='simple' width={'90%'}>
                            
                            <Thead>
                                <Tr fontWeight={'bold'} bg={'#233242'} >
                                    <Td>Tag</Td>
                                    <Td>Description</Td>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr fontWeight={'bold'}>
                                    <Td><span>{`<title>`}</span></Td>
                                    <Td>Hujjatning sarlavhasini belgilaydi</Td>
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

export default Html9dars