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


const Html8dars = () => {
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
                    <Sidebar title={'HTML DARSLARI'} elementName={'Bosh sahifa'} html1={'/html1dars'} html2={'/html2dars'} html3={'/html3dars'} html4={'/html4dars'}  html5={'/html5dars'}  html6={'/html6dars'}  html7={'/html7dars'}  html8={'/html8dars'}  html9={'/html9dars'}  html10={'/html10dars'} html11={'/html11dars'} html12={'/html12dars'} html13={'/html13dars'}    lesson1={'1-Mavzu: Html O’rnatish'} lesson2={'2-Mavzu: Html Asosiy Misollar'} lesson3={'3-Mavzu: Html Hedinglar'} lesson4={'4-Mavzu: Html Paragraphlar'} lesson5={'1-Mavzu: HTML Formatlash'} lesson6={'2-Mavzu: Html Komentariya'} lesson7={'3-Mavzu: Html Link'} lesson8={'1-Mavzu: Html Image'} lesson9={'2-Mavzu: Html Favicon va Tittle'} lesson10={'3-Mavzu: Html Table'} lesson11={'1-Mavzu: Html Listlar'} lesson12={'2-Mavzu: Html Block va Inline'} lesson13={'3-Mavzu: Html Emojilar '} lesson14={'1-Mavzu: Html Formalar'}  lesson15={'2-Mavzu: Html Form Attributlari'} lesson16={'3-Mavzu: Html Form Elemtlari'} lesson17={'1-Mavzu: Html Input turlari'} lesson18={'2-Mavzu: Html Input Attributlari'} lesson19={'3-Mavzu: Html Input va Formla'} lesson20={'1-Mavzu: Html Medialar'} lesson21={'2-Mavzu: Html Video'} lesson22={'3-Mavzu: Html Audio '} lesson23={'4-Mavzu: Html YouTube '} amalyot1={'1-Mavzu: Amaliyot'} amalyot2={'2-Mavzu: Amaliyot'}  />
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
                            <AccordionItenm html1={'/html1dars'} html2={'/html2dars'} html3={'/html3dars'} html4={'/html4dars'}  html5={'/html5dars'}  html6={'/html6dars'}  html7={'/html7dars'}  html8={'/html8dars'}  html9={'/html9dars'}  html10={'/html10dars'} html11={'/html11dars'} html12={'/html12dars'} html13={'/html13dars'}    lesson1={'1-Mavzu: Html O’rnatish'} lesson2={'2-Mavzu: Html Asosiy Misollar'} lesson3={'3-Mavzu: Html Hedinglar'} lesson4={'4-Mavzu: Html Paragraphlar'} lesson5={'1-Mavzu: HTML Formatlash'} lesson6={'2-Mavzu: Html Komentariya'} lesson7={'3-Mavzu: Html Link'} lesson8={'1-Mavzu: Html Image'} lesson9={'2-Mavzu: Html Favicon va Tittle'} lesson10={'3-Mavzu: Html Table'} lesson11={'1-Mavzu: Html Listlar'} lesson12={'2-Mavzu: Html Block va Inline'} lesson13={'3-Mavzu: Html Emojilar '} lesson14={'1-Mavzu: Html Formalar'}  lesson15={'2-Mavzu: Html Form Attributlari'} lesson16={'3-Mavzu: Html Form Elemtlari'} lesson17={'1-Mavzu: Html Input turlari'} lesson18={'2-Mavzu: Html Input Attributlari'} lesson19={'3-Mavzu: Html Input va Formla'} lesson20={'1-Mavzu: Html Medialar'} lesson21={'2-Mavzu: Html Video'} lesson22={'3-Mavzu: Html Audio '} lesson23={'4-Mavzu: Html YouTube '} amalyot1={'1-Mavzu: Amaliyot'} amalyot2={'2-Mavzu: Amaliyot'} />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Images</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '20vh' , md: '15vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'25px'}>Rasmlar veb-sahifaning dizayni va ko'rinishini yaxshilashi mumkin.</Text>
            </Box>
            <Divider mt={'20px'} />
           

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'}flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'80vh'}>
               
                <Box minHeight={'40vh'} gap={'30px'} display={'flex'} flexDirection={{base: 'column' , xl: 'row'}}  alignItems={{base: 'self-start' , xl: 'center'}}justifyContent={'flex-start'}>
                    <Image position={'relative'} width={'300px'} src={'https://img.freepik.com/vetores-premium/placa-de-circuito-de-fundo-de-processador-de-chip-de-tecnologia-abstrata-e-html-code3d-ilustracao-azul-vetor-de-fundo-de-tecnologia_115579-1744.jpg'}></Image>
                    <Image width={'300px'} src={'https://img.freepik.com/vetores-premium/placa-de-circuito-de-fundo-de-processador-de-chip-de-tecnologia-abstrata-e-html-code3d-ilustracao-azul-vetor-de-fundo-de-tecnologia_115579-1765.jpg'}></Image>
                    <Image width={'300px'} src={'https://img.freepik.com/vetores-premium/placa-de-circuito-de-fundo-de-processador-de-chip-de-tecnologia-abstrata-e-html-code3d-ilustracao-azul-vetor-de-fundo-de-tecnologia_115579-1765.jpg'}></Image>
                    
                </Box>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'250px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'90px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`<img `} <span style={{color: 'red'}}>src=</span> <span style={{color: 'yellow'}}>"modevco_rasm1.jpg"</span> <span style={{color :'red'}}> alt=</span> <span style={{color: 'yellow'}}>"Italian Trulli"</span> {`>`} </Text>
                    </Box>

                    <CopyToClipboard text={`<img src="https://img.freepik.com/vetores-premium/placa-de-circuito-de-fundo-de-processador-de-chip-de-tecnologia-abstrata-e-html-code3d-ilustracao-azul-vetor-de-fundo-de-tecnologia_115579-1744.jpg" alt="Italian Trulli">`}onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>


                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'250px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'90px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`<img `} <span style={{color: 'red'}}>src=</span> <span style={{color: 'yellow'}}>"modevco_rasm2.jpg"</span> <span style={{color :'red'}}> alt=</span> <span style={{color: 'yellow'}}>"Italian Trulli"</span> {`>`} </Text>
                    </Box>

                    <CopyToClipboard text={`<img src="https://img.freepik.com/vetores-premium/placa-de-circuito-de-fundo-de-processador-de-chip-de-tecnologia-abstrata-e-html-code3d-ilustracao-azul-vetor-de-fundo-de-tecnologia_115579-1765.jpg" alt="Italian Trulli">`}onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>


                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'250px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'90px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`<img `} <span style={{color: 'red'}}>src=</span> <span style={{color: 'yellow'}}>"modevco_rasm3.jpg"</span> <span style={{color :'red'}}> alt=</span> <span style={{color: 'yellow'}}>"Italian Trulli"</span> {`>`} </Text>
                    </Box>

                    <CopyToClipboard text={`<img src="https://img.freepik.com/vetores-premium/placa-de-circuito-de-fundo-de-processador-de-chip-de-tecnologia-abstrata-e-html-code3d-ilustracao-azul-vetor-de-fundo-de-tecnologia_115579-1765.jpg" alt="Italian Trulli">`}onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

            </Box>
            <Divider mt={'100px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'80vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> HTML Images Syntax</Heading>
                <Text fontSize={'25px'}> HTML <span style={{color: 'red'}}>{`<img>`}</span> tegi rasmni veb-sahifaga joylashtirish uchun ishlatiladi.</Text>
                <Text fontSize={'25px'}> HTML Rasmlar texnik jihatdan veb-sahifaga kiritilmagan; <br /> tasvirlar veb-sahifalarga bog'langan. <span style={{color: 'red'}}>{`<img>`}</span> tegi havola qilingan tasvir uchun saqlash joyini yaratadi.</Text>
                <Text fontSize={'25px'}> HTML <span style={{color: 'red'}}>{`<img>`}</span>tegi bo'sh, u faqat atributlarni o'z ichiga oladi va yopish tegiga ega emas.</Text>
                <Text fontSize={'25px'}> HTML <span style={{color: 'red'}}>{`<img>`}</span> tegi ikkita zarur atributga ega:</Text>
                <UnorderedList fontSize={'20px'} pl={'20px'}>
                    <ListItem><span style={{color: 'red'}}>src</span> - tasvirga yo'lni belgilaydi</ListItem>
                    <ListItem><span style={{color: 'red'}}>alt</span> - tasvir uchun muqobil matnni belgilaydi</ListItem>
                </UnorderedList>
                

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'250px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'90px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`<img `} <span style={{color: 'red'}}>src=</span> <span style={{color: 'yellow'}}>"url"</span> <span style={{color :'red'}}> alt=</span> <span style={{color: 'yellow'}}>"alternatetext"</span> {`>`} </Text>
                    </Box>

                    <CopyToClipboard text={`<img src="" alt="Italian Trulli">`}onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'80vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> src Attribute</Heading>
                <Text fontSize={'25px'}>Kerakli src atributi tasvirga yo'lni (URL) belgilaydi.</Text>
                <Text fontSize={'25px'} maxWidth={'900px'}> Eslatma: Veb-sahifa yuklanganda, aynan brauzer veb-serverdan tasvirni oladi va uni sahifaga kiritadi. Shuning uchun, rasm haqiqatan ham veb-sahifaga nisbatan bir xil joyda qolishiga ishonch hosil qiling, aks holda tashrif buyuruvchilaringiz buzilgan havola belgisini olishadi. Brauzer tasvirni topa olmasa, buzilgan havola belgisi va alternativ matn ko'rsatiladi.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'250px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'90px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`<img `} <span style={{color: 'red'}}>src=</span> <span style={{color: 'yellow'}}>"img_chania.jpg"</span> <span style={{color :'red'}}> alt=</span> <span style={{color: 'yellow'}}>"Flowers in Chania"</span> {`>`} </Text>
                    </Box>

                    <CopyToClipboard text={`<img src="img_chania.jpg" alt="Flowers in Chania">`}onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
            



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> alt Attribute</Heading>
                <Text fontSize={'25px'}  maxWidth={'900px'}>Agar foydalanuvchi biron sababga ko'ra uni ko'ra olmasa (agar sekin ulanish, src atributidagi xatolik yoki foydalanuvchi ekranni o'qish vositasidan foydalansa) talab qilinadigan alt atribut tasvir uchun muqobil matnni taqdim etadi.</Text>
                <Text fontSize={'25px'} maxWidth={'900px'}>Alt atributining qiymati tasvirni tavsiflashi kerak:</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'250px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'90px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`<img `} <span style={{color: 'red'}}>src=</span> <span style={{color: 'yellow'}}>"img_chania.jpg"</span> <span style={{color :'red'}}> alt=</span> <span style={{color: 'yellow'}}>"Flowers in Chania"</span> {`>`} </Text>
                    </Box>

                    <CopyToClipboard text={`<img src="img_chania.jpg" alt="Flowers in Chania">`}onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>



                <Text fontSize={'25px'} maxWidth={'900px'}>Agar brauzer rasmni topa olmasa, u alt atributining qiymatini ko'rsatadi:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'250px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'90px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`<img `} <span style={{color: 'red'}}>src=</span> <span style={{color: 'yellow'}}>"wrongname.gif"</span> <span style={{color :'red'}}> alt=</span> <span style={{color: 'yellow'}}>"Flowers in Chania"</span> {`>`} </Text>
                    </Box>

                    <CopyToClipboard text={`<img src="wrongname.gif" alt="Flowers in Chania">`}onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'25px'}>Maslahat: Ekranni oʻqish dasturi HTML kodini oʻqiydi va foydalanuvchiga kontentni “tinglash” imkonini beradi. <br /> Ekranni o'qish moslamalari ko'rish qobiliyati zaif yoki o'rganish imkoniyati cheklangan odamlar uchun foydalidir.</Text>

            </Box>
            <Divider mt={'20px'} />

            

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'100px'} minHeight={'80vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Image Tags</Heading>
                <Text fontSize={'25px'}  maxWidth={'900px'}>Tasvirning kengligi va balandligini belgilash uchun siz kenglik va balandlik atributlaridan foydalanishingiz mumkin:</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'250px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'90px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`<img `} <span style={{color: 'red'}}>src=</span> <span style={{color: 'yellow'}}>"wrongname.gif"</span> <span style={{color :'red'}}> alt=</span> <span style={{color: 'yellow'}}>"Flowers in Chania"</span> {`>`} </Text>
                    </Box>

                    <CopyToClipboard text={`<img src="wrongname.gif" alt="Flowers in Chania">`}onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'25px'}>Kenglik va balandlik atributlari har doim tasvirning kengligi va balandligini piksellarda aniqlaydi.</Text>
                <Text fontSize={'25px'}>Eslatma: Har doim tasvirning kengligi va balandligini belgilang. Agar kenglik va balandlik <br /> ko'rsatilmagan bo'lsa, tasvir yuklanayotganda veb-sahifa miltillashi mumkin..</Text>

            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Umumiy Image formatlari</Heading>
                <Text fontSize={'25px'}  maxWidth={'900px'}>Bu erda barcha brauzerlarda <span style={{color: 'red'}}> (Chrome, Edge, Firefox, Safari, Opera)</span> qo'llab-quvvatlanadigan eng keng tarqalgan rasm fayl turlari:</Text>

                <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'50vh'}>
                <TableContainer>
                    <Table border={'1px'} variant='simple' width={'90%'}>
                        
                        <Thead>
                            <Tr fontWeight={'bold'} bg={'#233242'} >
                                <Td>Qisqartirish</Td>
                                <Td>Fayl formati</Td>
                                <Td>Fayl kengaytmasi</Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr fontWeight={'bold'}>
                                <Td>APNG </Td>
                                <Td>Animatsiyalangan portativ tarmoq grafikasi</Td>
                                <Td>.apng </Td>
                            </Tr>
                            <Tr fontWeight={'bold'} bg={'#233242'}>
                                <Td>GIF  </Td>
                                <Td>Ta'kidlangan matnni belgilaydi</Td>
                                <Td>.gif </Td>
                            </Tr>
                            <Tr fontWeight={'bold'} >
                                <Td>ICO  </Td>
                                <Td>Muqobil ovoz yoki kayfiyatdagi matn qismini belgilaydi</Td>
                                <Td>.ico, .cur </Td>
                            </Tr>
                            <Tr fontWeight={'bold'} bg={'#233242'}>
                                <Td>JPEG </Td>
                                <Td>Kichikroq matnni belgilaydi</Td>
                                <Td>.jpg, .jpeg, .jfif, .pjpeg, .pjp</Td>
                            </Tr>
                            <Tr fontWeight={'bold'}>
                                <Td>PNG </Td>
                                <Td>Muhim matnni belgilaydii</Td>
                                <Td>.png </Td>
                            </Tr>
                            <Tr fontWeight={'bold'} bg={'#233242'}>
                                <Td>SVG </Td>
                                <Td>Yozilgan matnni belgilaydi</Td>
                                <Td>.svg </Td>
                            </Tr>
                           

                            
                        </Tbody>
                        
                    </Table>
                </TableContainer>
               
            </Box>

            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'100px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Bo'lim xulosasi</Heading>
                <UnorderedList fontSize={'20px'}>
                    <ListItem>Tasvirni aniqlash uchun HTML <span style={{color: 'red'}}>{`<img>`}</span> elementidan foydalaning</ListItem>
                    <ListItem>Tasvirning URL manzilini aniqlash uchun HTML src atributidan foydalaning</ListItem>
                    <ListItem>Tasvirni ko'rsatish mumkin bo'lmasa, muqobil matnni belgilash uchun HTML alt atributidan foydalaning</ListItem>
                    <ListItem>Tasvir hajmini aniqlash uchun HTML kengligi va balandligi atributlaridan yoki CSS kengligi va balandligi xususiyatlaridan foydalaning</ListItem>
                    <ListItem>Tasvirni chapga yoki o'ngga suzib qo'yish uchun CSS float xususiyatidan foydalaning</ListItem>
                    <ListItem>Eslatma: Katta hajmdagi rasmlarni yuklash vaqt talab etadi va veb-sahifangizni sekinlashtirishi mumkin. Rasmlardan ehtiyotkorlik bilan foydalaning.</ListItem>
                </UnorderedList>

               
            </Box>
            <Divider mt={'20px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'30vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Image Tags</Heading>
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
                                    <Td>{`<img> `} </Td>
                                    <Td>Tasvirni belgilaydi</Td>
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


export default Html8dars