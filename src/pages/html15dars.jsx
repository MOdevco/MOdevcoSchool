import { Box , Flex , Heading , Button , Text , Image , Input , FormLabel, HStack, Radio, RadioGroup} from '@chakra-ui/react'
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

const Html15dars = () => {
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
                    <Sidebar title={'HTML DARSLARI'} elementName={'Bosh sahifa'}html1={'/html1dars'} html2={'/html2dars'} html3={'/html3dars'} html4={'/html4dars'}  html5={'/html5dars'}  html6={'/html6dars'}  html7={'/html7dars'}  html8={'/html8dars'}  html9={'/html9dars'}  html10={'/html10dars'} html11={'/html11dars'} html12={'/html12dars'} html13={'/html13dars'}    lesson1={'1-Mavzu: Html O’rnatish'} lesson2={'2-Mavzu: Html Asosiy Misollar'} lesson3={'3-Mavzu: Html Hedinglar'} lesson4={'4-Mavzu: Html Paragraphlar'} lesson5={'1-Mavzu: HTML Formatlash'} lesson6={'2-Mavzu: Html Komentariya'} lesson7={'3-Mavzu: Html Link'} lesson8={'1-Mavzu: Html Image'} lesson9={'2-Mavzu: Html Favicon va Tittle'} lesson10={'3-Mavzu: Html Table'} lesson11={'1-Mavzu: Html Listlar'} lesson12={'2-Mavzu: Html Block va Inline'} lesson13={'3-Mavzu: Html Emojilar '} lesson14={'1-Mavzu: Html Formalar'}  lesson15={'2-Mavzu: Html Form Attributlari'} lesson16={'3-Mavzu: Html Form Elemtlari'} lesson17={'1-Mavzu: Html Input turlari'} lesson18={'2-Mavzu: Html Input Attributlari'} lesson19={'3-Mavzu: Html Input va Formla'} lesson20={'1-Mavzu: Html Medialar'} lesson21={'2-Mavzu: Html Video'} lesson22={'3-Mavzu: Html Audio '} lesson23={'4-Mavzu: Html YouTube '} amalyot1={'1-Mavzu: Amaliyot'} amalyot2={'2-Mavzu: Amaliyot'}  />
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
                            <AccordionItenm html1={'/html1dars'} html2={'/html2dars'} html3={'/html3dars'} html4={'/html4dars'}  html5={'/html5dars'}  html6={'/html6dars'}  html7={'/html7dars'}  html8={'/html8dars'}  html9={'/html9dars'}  html10={'/html10dars'} html11={'/html11dars'} html12={'/html12dars'} html13={'/html13dars'}    lesson1={'1-Mavzu: Html O’rnatish'} lesson2={'2-Mavzu: Html Asosiy Misollar'} lesson3={'3-Mavzu: Html Hedinglar'} lesson4={'4-Mavzu: Html Paragraphlar'} lesson5={'1-Mavzu: HTML Formatlash'} lesson6={'2-Mavzu: Html Komentariya'} lesson7={'3-Mavzu: Html Link'} lesson8={'1-Mavzu: Html Image'} lesson9={'2-Mavzu: Html Favicon va Tittle'} lesson10={'3-Mavzu: Html Table'} lesson11={'1-Mavzu: Html Listlar'} lesson12={'2-Mavzu: Html Block va Inline'} lesson13={'3-Mavzu: Html Emojilar '} lesson14={'1-Mavzu: Html Formalar'}  lesson15={'2-Mavzu: Html Form Attributlari'} lesson16={'3-Mavzu: Html Form Elemtlari'} lesson17={'1-Mavzu: Html Input turlari'} lesson18={'2-Mavzu: Html Input Attributlari'} lesson19={'3-Mavzu: Html Input va Formla'} lesson20={'1-Mavzu: Html Medialar'} lesson21={'2-Mavzu: Html Video'} lesson22={'3-Mavzu: Html Audio '} lesson23={'4-Mavzu: Html YouTube '} amalyot1={'1-Mavzu: Amaliyot'} amalyot2={'2-Mavzu: Amaliyot'}  />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Form Attributelari</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '20vh' , md: '15vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>Ushbu bobda HTML <span className='red'>{`<form>`}</span> elementining turli atributlari tasvirlangan.</Text>
            </Box>
            <Divider mt={'20px'} />
           
            
        


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Action Attribute</Heading>
                <Text fontSize={'25px'}> HAction atributi shakl topshirilganda bajariladigan harakatni belgilaydi.</Text>
                <Text fontSize={'25px'}> Odatda, foydalanuvchi yuborish buttonini bosganida forma ma'lumotlari serverdagi faylga yuboriladi.</Text>
                <Text fontSize={'25px'}> Quyidagi misolda forma ma'lumotlari <span className='red'> "action_page.php"</span> nomli faylga yuboriladi. Ushbu faylda forma ma'lumotlarini boshqaradigan server tomonidagi skript mavjud:</Text>


                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'450px'} rounded={'20px'}>
                    <Heading>Misol</Heading>

                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'220px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<form`} <span className='red'>action=</span> <span className='yellow'>"/action_page.php"</span> {`>`} </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<label`} <span style={{color: 'red'}}> for=</span> <span style={{color: 'yellow'}}>"fname"</span> {'>'} <span style={{color: 'white'}}>First name:</span> {`</label`} {'>'} {`<br>`}</Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<input`} <span style={{color: 'red'}}>type=</span> <span style={{color: 'yellow'}}>"text"</span> <span style={{color: 'red'}}>type=</span> <span style={{color: 'yellow'}}>"fname"</span> <span style={{color: 'red'}}>name=</span> <span style={{color: 'yellow'}}>"fname"</span> {'>'} <span style={{color: 'white'}}>First name:</span> {`</label`} {'>'} {`<br>`}</Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<label`} <span style={{color: 'red'}}> for=</span> <span style={{color: 'yellow'}}>"fname"</span> {'>'} <span style={{color: 'white'}}>Last name:</span> {`</label`} {'>'} {`<br>`}</Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<input`} <span style={{color: 'red'}}>type=</span> <span style={{color: 'yellow'}}>"text"</span> <span style={{color: 'red'}}>type=</span> <span style={{color: 'yellow'}}>"fname"</span> <span style={{color: 'red'}}>name=</span> <span style={{color: 'yellow'}}>"fname"</span> {'>'} <span style={{color: 'white'}}>First name:</span> {`</label`} {'>'} {`<br>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</form`} {`>`}</Text>
                    </Box>
                    <CopyToClipboard text={`<form action="/action_page.php"><label for="fname">First name:</label><br><input type="text" id="fname" name="fname" value="John"><br><label for="lname">Last name:</label><br><input type="text" id="lname" name="lname" value="Doe"><br><br><input type="submit" value="Submit"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'25px'}>Maslahat: Agar action atributi oʻtkazib yuborilsa, amal joriy sahifaga oʻrnatiladi.</Text>

            </Box>
            <Divider mt={'20px'} />

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Action Attribute</Heading>
                <Text fontSize={'25px'}> HAction atributi shakl topshirilganda bajariladigan harakatni belgilaydi.</Text>
                <Text fontSize={'25px'}> Odatda, foydalanuvchi yuborish buttonini bosganida forma ma'lumotlari serverdagi faylga yuboriladi.</Text>
                <Text fontSize={'25px'}> Quyidagi misolda forma ma'lumotlari <span className='red'> "action_page.php"</span> nomli faylga yuboriladi. Ushbu faylda forma ma'lumotlarini boshqaradigan server tomonidagi skript mavjud:</Text>


                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'450px'} rounded={'20px'}>
                    <Heading>Misol</Heading>

                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'220px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<form`} <span className='red'>action=</span> <span className='yellow'>"/action_page.php"</span> {`>`} </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<label`} <span style={{color: 'red'}}> for=</span> <span style={{color: 'yellow'}}>"fname"</span> {'>'} <span style={{color: 'white'}}>First name:</span> {`</label`} {'>'} {`<br>`}</Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<input`} <span style={{color: 'red'}}>type=</span> <span style={{color: 'yellow'}}>"text"</span> <span style={{color: 'red'}}>type=</span> <span style={{color: 'yellow'}}>"fname"</span> <span style={{color: 'red'}}>name=</span> <span style={{color: 'yellow'}}>"fname"</span> {'>'} <span style={{color: 'white'}}>First name:</span> {`</label`} {'>'} {`<br>`}</Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<label`} <span style={{color: 'red'}}> for=</span> <span style={{color: 'yellow'}}>"fname"</span> {'>'} <span style={{color: 'white'}}>Last name:</span> {`</label`} {'>'} {`<br>`}</Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<input`} <span style={{color: 'red'}}>type=</span> <span style={{color: 'yellow'}}>"text"</span> <span style={{color: 'red'}}>type=</span> <span style={{color: 'yellow'}}>"fname"</span> <span style={{color: 'red'}}>name=</span> <span style={{color: 'yellow'}}>"fname"</span> {'>'} <span style={{color: 'white'}}>First name:</span> {`</label`} {'>'} {`<br>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</form`} {`>`}</Text>
                    </Box>
                    <CopyToClipboard text={`<form action="/action_page.php"><label for="fname">First name:</label><br><input type="text" id="fname" name="fname" value="John"><br><label for="lname">Last name:</label><br><input type="text" id="lname" name="lname" value="Doe"><br><br><input type="submit" value="Submit"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'25px'}>Maslahat: Agar action atributi oʻtkazib yuborilsa, amal joriy sahifaga oʻrnatiladi.</Text>

            </Box>
            <Divider mt={'20px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Target Attribute</Heading>
                <Text fontSize={'25px'}>Target atributi shaklni yuborgandan so'ng olingan javobni qayerda ko'rsatishni belgilaydi.</Text>
                <Text fontSize={'25px'}>Target atributi quyidagi qiymatlardan biriga ega bo'lishi mumkin:.</Text>

                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'45vh'}>
                        <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>Qiymat</Td>
                                        <Td>Tavsif</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>{`<input type="text">`}</Td>
                                        <Td>Javob yangi oyna yoki yorliqda ko'rsatiladi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>{`_blank`}</Td>
                                        <Td>Javob joriy oynada ko'rsatiladi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>{`_self `}</Td>
                                        <Td>Javob asosiy ramkada ko'rsatiladi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>{`_parent`}</Td>
                                        <Td>Javob asosiy ramkada ko'rsatiladi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>{`_top`}</Td>
                                        <Td>Javob oynaning to'liq qismida ko'rsatiladi</Td>
                                    </Tr>
                                    <Tr  bg={'#233242'}>
                                        <Td>{`ramka nomi`}</Td>
                                        <Td>Javob nomli iframe-da ko'rsatiladi</Td>
                                    </Tr>
                                </Tbody>
                                
                            </Table>
                        </TableContainer>
                    </Box>

                    <Text fontSize={'25px'}>Target atributi quyidagi qiymatlardan biriga ega bo'lishi mumkin:.</Text>

                    <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'25px'}>Bu erda taqdim etilgan natija yangi brauzer yorlig'ida ochiladi:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'100px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<form`} <span className='red'>action=</span> <span className='yellow'>"/action_page.php"</span > <span className='red'>target=</span> <span className='yellow'>"_blank"</span> {`>`} </Text>
                    </Box>
                    

                    <CopyToClipboard text={`<form action="/action_page.php" target="_blank">`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'100px'} />




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Method Attribute</Heading>
                <Text fontSize={'25px'}>Metod atributi forma ma'lumotlarini yuborishda foydalaniladigan <span className='red'>HTTP</span> usulini belgilaydi.</Text>
                <Text fontSize={'25px'}>Shakl-ma'lumotlar URL o'zgaruvchilari <span className='red'>(metod="get" bilan)</span> yoki HTTP post tranzaksiyasi <span className='red'>(metod="post" bilan) </span> sifatida yuborilishi mumkin.</Text>
                <Text fontSize={'25px'}>Shakl ma'lumotlarini yuborishda standart <span className='red'>HTTP</span> usuli <span className='red'>GET</span> hisoblanadi.</Text>

                <Text fontSize={'25px'}>Target atributi quyidagi qiymatlardan biriga ega bo'lishi mumkin:.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'25px'}>Ushbu misol forma ma'lumotlarini yuborishda GET usulidan foydalanadi:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'100px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<form`} <span className='red'>action=</span> <span className='yellow'>"/action_page.php"</span > <span className='red'>method=</span> <span className='yellow'>"get"</span> {`>`} </Text>
                    </Box>
                    
                    <CopyToClipboard text={`<form action="/action_page.php" method="get">`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'25px'}>Ushbu misol forma ma'lumotlarini yuborishda POST usulidan foydalanadi:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'100px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<form`} <span className='red'>action=</span> <span className='yellow'>"/action_page.php"</span > <span className='red'>method=</span> <span className='yellow'>"post"</span> {`>`} </Text>
                    </Box>
                    
                    <CopyToClipboard text={`<form action="/action_page.php" method="post">`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Heading fontSize={{base: '20px' , md: '40px'}}>GET haqida eslatmalar:</Heading>
                <UnorderedList pl={{base: '0' , xl: '50px'}} fontSize={'20px'}>
                    <ListItem>Shakl ma'lumotlarini URL manziliga nom/qiymat juftliklarida qo'shadi</ListItem>
                    <ListItem>Nozik ma'lumotlarni yuborish uchun HECH QACHON GET dan foydalanmang! (yuborilgan shakl ma'lumotlari URL manzilida ko'rinadi!)</ListItem>
                    <ListItem>URL uzunligi cheklangan (2048 belgi)</ListItem>
                    <ListItem>Foydalanuvchi natijani belgilamoqchi bo'lgan shakllarni yuborish uchun foydalidir</ListItem>
                    <ListItem>GET xavfsiz bo'lmagan ma'lumotlar uchun yaxshi, masalan, Google so'rovlari qatorlari</ListItem>
                </UnorderedList>

                <Heading fontSize={{base: '20px' , md: '40px'}}>POST haqida eslatmalar:</Heading>
                <UnorderedList pl={{base: '0' , xl: '50px'}} fontSize={'20px'}>
                    <ListItem>Form ma'lumotlarini HTTP so'rovining asosiy qismiga qo'shadi (yuborilgan shakl ma'lumotlari URLda ko'rsatilmaydi)</ListItem>
                    <ListItem>POST hech qanday hajmda cheklovlarga ega emas va katta hajmdagi ma'lumotlarni yuborish uchun ishlatilishi mumkin.</ListItem>
                    <ListItem>POST bilan yuborilgan arizalarni xatcho‘p qilib bo‘lmaydi</ListItem>
                </UnorderedList>
                <Text fontSize={'25px'}>Maslahat: Agar forma ma'lumotlarida maxfiy yoki shaxsiy ma'lumotlar bo'lsa, har doim POST dan foydalaning!</Text>

            </Box>
            <Divider mt={'100px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'40vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Autocomplete Attribute</Heading>
                <Text fontSize={'25px'}> <span className='red'>Avtomatik</span> to'ldirish atributi shaklda avtomatik to'ldirishni yoqish yoki o'chirish kerakligini belgilaydi.</Text>
                <Text fontSize={'25px'}>Avtomatik to'ldirish yoqilgan bo'lsa, brauzer foydalanuvchi avval kiritgan qiymatlar asosida avtomatik ravishda qiymatlarni to'ldiradi.</Text>

                    <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'25px'}>Avtomatik toʻldirishga ega shakl:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'100px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<form`} <span className='red'>action=</span> <span className='yellow'>"/action_page.php"</span > <span className='red'>autocomplete=</span> <span className='yellow'>"on"</span> {`>`} </Text>
                    </Box>
                    
                    <CopyToClipboard text={`<form action="/action_page.php" autocomplete="on">`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'100px'} />

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Novalidate Attribute</Heading>
                <Text fontSize={'25px'}> <span className='red'>Novalidate </span> atributi mantiqiy atributdir.</Text>
                <Text fontSize={'25px'}>Mavjud bo'lsa, u topshirilganda shakl-ma'lumotlar (kirish) tasdiqlanmasligi kerakligini belgilaydi.</Text>

                    <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'25px'}>Novalidate atributiga ega shakl:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'100px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<form`} <span className='red'>action=</span> <span className='yellow'>"/action_page.php"</span > <span className='red'> novalidate</span> {`>`} </Text>
                    </Box>
                    
                    <CopyToClipboard text={`<form action="/action_page.php" novalidate> `} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'100px'} />





            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Barcha <span className='red'>{`<form>`}</span> atributlari ro'yxati</Heading>

                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'45vh'}>
                        <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>Xususiyat</Td>
                                        <Td>Tavsif</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>{`accept-charset`}</Td>
                                        <Td>Shaklni yuborish uchun ishlatiladigan belgilar kodlarini belgilaydi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>{`action`}</Td>
                                        <Td>Shakl yuborilganda forma ma'lumotlarini qaerga yuborish kerakligini belgilaydi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>{`autocomplete `}</Td>
                                        <Td>Shaklda avtomatik toʻldirishni yoqish yoki oʻchirish kerakligini belgilaydi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>{`enctype`}</Td>
                                        <Td>Form ma'lumotlarini serverga yuborishda qanday kodlash kerakligini belgilaydi (faqat method="post" uchun)</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>{`method`}</Td>
                                        <Td>Bosiladigan tugmani ko'rsatadi</Td>
                                    </Tr>
                                    <Tr  bg={'#233242'}>
                                        <Td>{`ramka nomi`}</Td>
                                        <Td>Shakl nomini belgilaydi</Td>
                                    </Tr>
                                    <Tr >
                                        <Td>{`name`}</Td>
                                        <Td>Shakl topshirilganda tasdiqlanmasligi kerakligini bildiradi</Td>
                                    </Tr>
                                    <Tr  bg={'#233242'}>
                                        <Td>{`novalidate`}</Td>
                                        <Td>Bog'langan manba va joriy hujjat o'rtasidagi munosabatni belgilaydi</Td>
                                    </Tr>
                                    <Tr >
                                        <Td>{`rel`}</Td>
                                        <Td>Shaklni yuborgandan so'ng qabul qilingan javobni ko'rsatish joyini belgilaydi</Td>
                                    </Tr>
                                    <Tr  bg={'#233242'}>
                                        <Td>{`target`}</Td>
                                        <Td>Javob nomli iframe-da ko'rsatiladi</Td>
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

export default Html15dars