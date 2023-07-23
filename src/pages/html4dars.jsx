import { Box , Flex , Heading , Button , Text , Image} from '@chakra-ui/react'
import { HamburgerIcon , CloseIcon } from '@chakra-ui/icons'
import Sidebar from '../components/sidebar/sidebar'
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
import AccordionItenm from '../components/accordion/accordion'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useState } from 'react'

const Html4dars = () => {
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
  return (
    <Box pt={'200px'} width={'100%'} bg={'#1A202C'} height={'100%'}>
        <Box >
            <Flex >
                {onOpen && <Box>
                    <Sidebar title={'HTML DARSLARI'} elementName={'Bosh sahifa'} html1={'/html1dars'} html2={'/html2dars'} html3={'/html3dars'} html4={'/html4dars'}  html5={'/html5dars'}  html6={'/html6dars'}  html7={'/html7dars'}  lesson1={'1-Mavzu: Html O’rnatish'} lesson2={'2-Mavzu: Html Asosiy Misollar'} lesson3={'3-Mavzu: Html Hedinglar'} lesson4={'4-Mavzu: Html Paragraphlar'} lesson5={'1-Mavzu: HTML Formatlash'} lesson6={'2-Mavzu: Html Komentariya'} lesson7={'3-Mavzu: Html Link'} lesson8={'1-Mavzu: Html Image'} lesson9={'2-Mavzu: Html Favicon va Tittle'} lesson10={'3-Mavzu: Html Table'} lesson11={'1-Mavzu: Html Listlar'} lesson12={'2-Mavzu: Html Block va Inline'} lesson13={'3-Mavzu: Html Emojilar '} lesson14={'1-Mavzu: Html Formalar'}  lesson15={'2-Mavzu: Html Form Attributlari'} lesson16={'3-Mavzu: Html Form Elemtlari'} lesson17={'1-Mavzu: Html Input turlari'} lesson18={'2-Mavzu: Html Input Attributlari'} lesson19={'3-Mavzu: Html Input va Formla'} lesson20={'1-Mavzu: Html Medialar'} lesson21={'2-Mavzu: Html Video'} lesson22={'3-Mavzu: Html Audio '} lesson23={'4-Mavzu: Html YouTube '} amalyot1={'1-Mavzu: Amaliyot'} amalyot2={'2-Mavzu: Amaliyot'} />
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
                            <AccordionItenm  html1={'/html1dars'} html2={'/html2dars'} html3={'/html3dars'} html4={'/html4dars'}  html5={'/html5dars'}  html6={'/html6dars'}  html7={'/html7dars'}  lesson1={'1-Mavzu: Html O’rnatish'} lesson2={'2-Mavzu: Html Asosiy Misollar'} lesson3={'3-Mavzu: Html Hedinglar'} lesson4={'4-Mavzu: Html Paragraphlar'} lesson5={'1-Mavzu: HTML Formatlash'} lesson6={'2-Mavzu: Html Komentariya'} lesson7={'3-Mavzu: Html Link'} lesson8={'1-Mavzu: Html Image'} lesson9={'2-Mavzu: Html Favicon va Tittle'} lesson10={'3-Mavzu: Html Table'} lesson11={'1-Mavzu: Html Listlar'} lesson12={'2-Mavzu: Html Block va Inline'} lesson13={'3-Mavzu: Html Emojilar '} lesson14={'1-Mavzu: Html Formalar'}  lesson15={'2-Mavzu: Html Form Attributlari'} lesson16={'3-Mavzu: Html Form Elemtlari'} lesson17={'1-Mavzu: Html Input turlari'} lesson18={'2-Mavzu: Html Input Attributlari'} lesson19={'3-Mavzu: Html Input va Formla'} lesson20={'1-Mavzu: Html Medialar'} lesson21={'2-Mavzu: Html Video'} lesson22={'3-Mavzu: Html Audio '} lesson23={'4-Mavzu: Html YouTube '} amalyot1={'1-Mavzu: Amaliyot'} amalyot2={'2-Mavzu: Amaliyot'} />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Paragraflari</Heading>
                    </Box>
                </Box>
            </Flex>
            
            <Divider mt={'20px'} />
           
            <Box pl={{base: '20px' , md: '450px'}} pt={'20px'} >
                <Text fontSize={'20px'}>Paragraf har doim yangi satrdan boshlanadi va odatda matn blokidir.</Text>
            </Box>
            <Divider mt={'20px'} />
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'}  minHeight={'60vh'} mt={'40px'} gap={"30px"}>
                <Heading  fontSize={{base: '30px' , md: '50px'}}>HTML Paragraflari</Heading>
                <Text fontSize={'20px'}>HTML <span style={{color: 'red'}}>{`<p>`}</span> elementi paragrafni belgilaydi.</Text>
                <Text fontSize={'20px'} maxWidth={'800px'}>Paragraf har doim yangi satrdan boshlanadi va brauzerlar avtomatik ravishda paragrafdan oldin va keyin biroz bo'sh joy (chekka) qo'shadi..</Text>

                <Box width={{base: '95%' , md: '80%'}} height={'273px'} bg={'#233242'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} gap={'20px'} alignItems={'flex-start'} justifyContent={'center'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} borderColor={'#7FFFD4'} height={'112px'} overflow={'scroll'} pt={4} bg={'#0A1624'}>
                        <Text fontSize={'25px'} color={'#9D5EBB'}>{`<p>`} <span style={{color: 'white'}}>Bu paragraf.</span> {`</p>`}</Text>
                        <Text fontSize={'25px'} color={'#9D5EBB'}>{`<p>`} <span style={{color: 'white'}}>Bu boshqa paragraf.</span> {`</p>`}</Text>
                    </Box>
                    <CopyToClipboard text='<p>This is a paragraph.</p><p>This is another paragraph.</p>' onCopy={handleClip}>
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>

            <Divider mt={'20px'} />

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'100vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML displey</Heading>
                <Text fontSize={'20px'}>HTML qanday ko'rsatilishiga ishonchingiz komil emas.</Text>
                <Text fontSize={'20px'}>Katta yoki kichik ekranlar va o'lchamlari o'zgartirilgan oynalar turli xil natijalarni yaratadi.</Text>
                <Text fontSize={'20px'}>HTML bilan siz HTML kodingizga qo'shimcha bo'shliqlar yoki qo'shimcha qatorlar qo'shish orqali displeyni o'zgartira olmaysiz.</Text>
                <Text fontSize={'20px'}>Brauzer sahifa ko'rsatilganda qo'shimcha bo'shliqlar va chiziqlarni avtomatik ravishda olib tashlaydi:</Text>

                <Box width={{base: '95%' , md: '80%'}} height={'609px'} bg={'#233242'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} gap={'20px'} alignItems={'flex-start'} justifyContent={'center'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} borderColor={'#7FFFD4'} height={'350px'} overflow={'scroll'} pt={4} bg={'#0A1624'}>

                        <Text fontSize={'25px'} color={'#9D5EBB'}>{`<p>`} </Text>
                        <Text pl={'30px'} fontSize={'25px'} color={'#fff'}>Ushbu paragraf juda ko'p narsalarni o'z ichiga oladi manba kodidagi satrlar, lekin brauzer buni e'tiborsizqoldiradi.</Text>
                        <Text fontSize={'25px'} color={'#9D5EBB'}>{`</p>`} </Text>

                        <Text fontSize={'25px'} color={'#9D5EBB'}>{`<p>`} </Text>
                        <Text pl={'30px'} fontSize={'25px'} color={'#fff'}>Ushbu paragraf juda ko'p narsalarni o'z ichiga oladi manba kodidagi satrlar, lekin brauzer buni e'tiborsizqoldiradi.</Text>
                        <Text fontSize={'25px'} color={'#9D5EBB'}>{`</p>`} </Text>

                    </Box>
                    <CopyToClipboard text="<p>Ushbu paragraf juda ko'p narsalarni o'z ichiga oladi manba kodidagi satrlar, lekin brauzer buni e'tiborsizqoldiradi.</p> <p>Ushbu paragraf juda ko'p narsalarni o'z ichiga oladi manba kodidagi satrlar, lekin brauzer buni e'tiborsizqoldiradi.</p> "onCopy={handleClip}>
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
            

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'90vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Gorizontal Qoidalari</Heading>
                <Text fontSize={'20px'}> <span style={{color: 'red'}}>{`<hr>`}</span> tegi HTML sahifasida tematik tanaffusni belgilaydi va ko'pincha gorizontal qoida sifatida ko'rsatiladi.</Text>
                <Text fontSize={'20px'}> <span style={{color: 'red'}}>{`<hr>`}</span> elementi HTML-sahifadagi tarkibni ajratish (yoki o'zgartirishni aniqlash) uchun ishlatiladi:</Text>

                <Box width={{base: '95%' , md: '80%'}} height={'609px'} bg={'#233242'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} gap={'20px'} alignItems={'flex-start'} justifyContent={'center'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} borderColor={'#7FFFD4'} height={'300px'} overflow={'scroll'} pt={'40px'} bg={'#0A1624'}>

                        <Text fontSize={'25px'} color={'#9D5EBB'}>{`<h1>`} <span style={{color: 'white'}}>Bu 1-sarlavha</span> {`</h1>`} </Text>
                        <Text fontSize={'25px'} color={'#9D5EBB'}>{`<p>`} <span style={{color: 'white'}}>Bu paragraph</span> {`</p>`} </Text>
                        <Text fontSize={'25px'} color={'#9D5EBB'}>{`<hr>`} </Text>
                        <Text fontSize={'25px'} color={'#9D5EBB'}>{`<h1>`} <span style={{color: 'white'}}>Bu 1-sarlavha</span> {`</h1>`} </Text>
                        <Text fontSize={'25px'} color={'#9D5EBB'}>{`<p>`} <span style={{color: 'white'}}>Bu paragraph</span> {`</p>`} </Text>
                        <Text fontSize={'25px'} color={'#9D5EBB'}>{`<hr>`} </Text>

                    </Box>
                    <CopyToClipboard text="<h1>This is heading 1</h1><p>This is heading 1</p><hr><h1>This is heading 1</h1><p>This is heading 1</p><hr> "onCopy={handleClip}>
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'20px'}> <span style={{color: 'red'}}>{`<hr>`}</span> tegi bo'sh teg bo'lib, uning yakuniy tegi yo'qligini bildiradi.</Text>
            </Box>
            <Divider mt={'20px'} />
            

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'40vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Qator Uzilishlari</Heading>
                <Text fontSize={'20px'}> HTML <span style={{color: 'red'}}>{`<br> `}</span> elementi qator uzilishini belgilaydi.</Text>
                <Text fontSize={'20px'}> Agar siz yangi paragrafni boshlamasdan qator uzilishini <span style={{color: 'red'}}>(yangi qatorni)</span> xohlasangiz, <span style={{color: 'red'}}>{`<br> `}{`<br>`}</span> dan foydalaning:</Text>

                <Box width={{base: '95%' , md: '80%'}} height={'100px'} bg={'#233242'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} gap={'20px'} alignItems={'flex-start'} justifyContent={'center'} rounded={'20px'}>
                    <Box width={'90%'} borderLeft={'4px'} borderColor={'#7FFFD4'} height={'50px'} overflow={'scroll'} pt={'2px'} bg={'#0A1624'}>

                        <Text fontSize={'25px'} color={'#9D5EBB'}>{`<p>`} <span style={{color: 'white'}}>This is</span> {`<br>`} <span style={{color: 'white'}}>a paragraph</span> {`<br>`} <span style={{color: 'white'}}>with line breaks.</span> {`</p>`}</Text>

                    </Box>
                </Box>
                <Text fontSize={'20px'}> <span style={{color: 'red'}}>{`<br> `}</span> tegi bo'sh teg bo'lib, uning yakuniy tegi yo'qligini bildiradi.</Text>
            </Box>
            <Divider mt={'20px'} />
            

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Tegiga Havola</Heading>
                <Text fontSize={'20px'}> MOdevco teg ma'lumotnomasida HTML elementlari va ularning atributlari haqida qo'shimcha ma'lumotlar mavjud.</Text>
                <TableContainer>
                    <Table border={'1px'} variant='simple' width={'90%'}>
                        
                        <Thead>
                        <Tr fontWeight={'bold'} bg={'#233242'} >
                            <Td>Tag</Td>
                            <Td>Description</Td>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td>{`<p>`}</Td>
                            <Td>Paragrafni belgilaydi</Td>
                        </Tr>
                        <Tr bg={'#233242'}>
                            <Td>{`<hr> `}</Td>
                            <Td>Tarkibdagi tematik o'zgarishlarni belgilaydi</Td>
                        </Tr>
                        <Tr>
                            <Td>{`<br> `}</Td>
                            <Td>Bitta qatorli tanaffusni kiritadi</Td>
                        </Tr>
                        </Tbody>
                        
                    </Table>
                </TableContainer>
               
            </Box>
            
        </Box>
    </Box>
  )
}

export default Html4dars