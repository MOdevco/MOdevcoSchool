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
import AccordionItenm from '../components/accordion/accordion'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useEffect, useState } from 'react'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
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

const Html7dars = () => {
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
                <Sidebar title={'HTML DARSLARI'} elementName={'Bosh sahifa'} html1={'/html1dars'} html2={'/html2dars'} html3={'/html3dars'} html4={'/html4dars'}  html5={'/html5dars'}  html6={'/html6dars'}  html7={'/html7dars'} html11={'/html11dars'} html12={'/html12dars'} html13={'/html13dars'}    lesson1={'1-Mavzu: Html O’rnatish'} lesson2={'2-Mavzu: Html Asosiy Misollar'} lesson3={'3-Mavzu: Html Hedinglar'} lesson4={'4-Mavzu: Html Paragraphlar'} lesson5={'1-Mavzu: HTML Formatlash'} lesson6={'2-Mavzu: Html Komentariya'} lesson7={'3-Mavzu: Html Link'} lesson8={'1-Mavzu: Html Image'} lesson9={'2-Mavzu: Html Favicon va Tittle'} lesson10={'3-Mavzu: Html Table'} lesson11={'1-Mavzu: Html Listlar'} lesson12={'2-Mavzu: Html Block va Inline'} lesson13={'3-Mavzu: Html Emojilar '} lesson14={'1-Mavzu: Html Formalar'}  lesson15={'2-Mavzu: Html Form Attributlari'} lesson16={'3-Mavzu: Html Form Elemtlari'} lesson17={'1-Mavzu: Html Input turlari'} lesson18={'2-Mavzu: Html Input Attributlari'} lesson19={'3-Mavzu: Html Input va Formla'} lesson20={'1-Mavzu: Html Medialar'} lesson21={'2-Mavzu: Html Video'} lesson22={'3-Mavzu: Html Audio '} lesson23={'4-Mavzu: Html YouTube '} amalyot1={'1-Mavzu: Amaliyot'} amalyot2={'2-Mavzu: Amaliyot'} />
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
                        <AccordionItenm html1={'/html1dars'} html2={'/html2dars'} html3={'/html3dars'} html4={'/html4dars'}  html5={'/html5dars'}  html6={'/html6dars'}  html7={'/html7dars'} html11={'/html11dars'} html12={'/html12dars'} html13={'/html13dars'}    lesson1={'1-Mavzu: Html O’rnatish'} lesson2={'2-Mavzu: Html Asosiy Misollar'} lesson3={'3-Mavzu: Html Hedinglar'} lesson4={'4-Mavzu: Html Paragraphlar'} lesson5={'1-Mavzu: HTML Formatlash'} lesson6={'2-Mavzu: Html Komentariya'} lesson7={'3-Mavzu: Html Link'} lesson8={'1-Mavzu: Html Image'} lesson9={'2-Mavzu: Html Favicon va Tittle'} lesson10={'3-Mavzu: Html Table'} lesson11={'1-Mavzu: Html Listlar'} lesson12={'2-Mavzu: Html Block va Inline'} lesson13={'3-Mavzu: Html Emojilar '} lesson14={'1-Mavzu: Html Formalar'}  lesson15={'2-Mavzu: Html Form Attributlari'} lesson16={'3-Mavzu: Html Form Elemtlari'} lesson17={'1-Mavzu: Html Input turlari'} lesson18={'2-Mavzu: Html Input Attributlari'} lesson19={'3-Mavzu: Html Input va Formla'} lesson20={'1-Mavzu: Html Medialar'} lesson21={'2-Mavzu: Html Video'} lesson22={'3-Mavzu: Html Audio '} lesson23={'4-Mavzu: Html YouTube '} amalyot1={'1-Mavzu: Amaliyot'} amalyot2={'2-Mavzu: Amaliyot'} />
                    </DrawerBody>
                    </DrawerContent>
                </Drawer>
                
                <Box>
                    <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Links</Heading>
                </Box>
            </Box>
        </Flex>
        <Divider mt={'20px'} />


        <Box height={{base: '30vh' , md: '10vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}} >
            <Text fontSize={{base: '20px' , xl: '25px'}} maxWidth>Linklar deyarli barcha veb-sahifalarda mavjud. Havolalar foydalanuvchilarga sahifadan sahifaga o'z yo'lini bosish imkonini beradi.</Text>
        </Box>
        <Divider mt={'20px'} />



        <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'35vh'}>
            <Heading fontSize={{base: '30px' , md: '50px'}}> HTML havolalari - giperhavolalar</Heading>
            <Text fontSize={'25px'}> HTML linklar giperlinklardir.</Text>
            <Text fontSize={'25px'}> Siz linkni bosishingiz va boshqa hujjatga o'tishingiz mumkin.</Text>
            <Text fontSize={'25px'}> Sichqonchani havola ustiga olib borganingizda, sichqoncha o'qi kichik qo'lga aylanadi.</Text>
            <Text fontSize={'25px'}> Eslatma: link matn bo'lishi shart emas. Link rasm yoki boshqa HTML elementi bo'lishi mumkin!</Text>
        </Box>
        <Divider mt={'20px'} />


        

        <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
            <Heading fontSize={{base: '30px' , md: '50px'}}> HTML Links - Syntax</Heading>
            <Text fontSize={'25px'}> HTML <span style={{color: 'red'}}>{`<a>`}</span> tegi giperlinkni belgilaydi. U quyidagi sintaksisga ega:</Text>

            <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'320px'} rounded={'20px'}>
                <Heading>Misol</Heading>
                <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'100px'} bg={'#0A1624'}>
                    <Text color={'#9D5EBB'} fontSize={'25px'}> {`<a `} <span style={{color: 'red'}}>{`href=`}</span> <span style={{color: 'yellow'}}>"url"</span> {`>`} <span> link matn</span> {`</a>`}</Text>
                </Box>

                <CopyToClipboard text={ `<a href="url">link matn</a>`} onCopy={handleClip} >
                    <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                </CopyToClipboard>
            </Box>

            <Text fontSize={'25px'}><span style={{color: 'red'}}>{`<a>`}</span>  elementining eng muhim atributi href atributi bo'lib, u linkni manzilini bildiradi.</Text>
            <Text fontSize={'25px'}>Linkni matni o'quvchiga ko'rinadigan qismdir.</Text>
            <Text fontSize={'25px'}>Link matnini bosish o'quvchini belgilangan URL manziliga yuboradi.</Text>
            <Text fontSize={'25px'}>Odatiy bo'lib, barcha brauzerlarda linklar quyidagicha ko'rinadi:</Text>
            <UnorderedList pl={'50px'} fontSize={'25px'}>
                <ListItem>Ko'rilmagan link tagiga chizilgan va ko'k rangda</ListItem>
                <ListItem>Tashrif buyurilgan linkning tagiga chizilgan va binafsha rang</ListItem>
                <ListItem>Faol havolaning tagiga chizilgan va qizil rangda</ListItem>
            </UnorderedList>
            <Text fontSize={'25px'}>Maslahat: Boshqa ko'rinishga ega bo'lish uchun havolalar, albatta, CSS bilan tuzilishi mumkin!</Text>

        </Box>
        
        
        <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
            <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Linklar - Target Attribute</Heading>
            <Text fontSize={'25px'} maxWidth={'1000px'}>Odatiy bo'lib, bog'langan sahifa joriy brauzer oynasida ko'rsatiladi. Buni o'zgartirish uchun link uchun boshqa maqsadni belgilashingiz kerak.</Text>
            <Text fontSize={'25px'} maxWidth={'1000px'}>Target atributi bog'langan hujjatni qayerda ochishni belgilaydi</Text>
            <Text fontSize={'25px'} maxWidth={'1000px'}>Target atributi quyidagi qiymatlardan biriga ega bo'lishi mumkin:</Text>
            <UnorderedList pl={'50px'} fontSize={'25px'}>
                <ListItem><span style={{color: 'red'}}>_self</span> - Standart. Hujjatni bosilgan oynada/tabda ochadi</ListItem>
                <ListItem><span style={{color: 'red'}}>_blank</span> - hujjatni yangi oyna yoki yorliqda ochadi</ListItem>
                <ListItem><span style={{color: 'red'}}>_parent</span> - hujjatni asosiy ramkada ochadi</ListItem>
                <ListItem><span style={{color: 'red'}}>_top</span> - Hujjatni oynaning to'liq qismida ochadi</ListItem>
            </UnorderedList>

            <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'400px'} rounded={'20px'}>

                <Heading>Misol</Heading>
                <Text fontSize={'25px'} maxWidth={'1000px'}>Bog'langan hujjatni yangi brauzer oynasida yoki yorliqda ochish uchun <span style={{color: 'red'}}>target=</span> <span style={{color: 'yellow'}}>"_blank"</span> dan foydalaning:</Text>

                <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'100px'} bg={'#0A1624'}>
                    <Text color={'#9D5EBB'} fontSize={'25px'}> {`<a `} <span style={{color: 'red'}}>{`href=`}</span> <span style={{color: 'yellow'}}>"https://modevco-online-school.uz" _blank</span> {`>`} <span>modevco-online-school.uz</span> {`</a>`}</Text>
                </Box>

                <CopyToClipboard text={ `<a href=""https://modevco-online-school.uz" " _blank>modevco-online-school.uz</a>`} onCopy={handleClip} >
                    <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                </CopyToClipboard>
            </Box>

        </Box>
        <Divider mt={'20px'} />

        <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
            <Heading fontSize={{base: '30px' , md: '50px'}}>Absolute URLs vs. Relative URLs</Heading>
            <Text fontSize={'25px'} >Yuqoridagi ikkala misolda <span style={{color: 'red'}}>href</span> atributida absolute URL (to'liq veb-manzil) qo'llaniladi.</Text>
            <Text fontSize={'25px'} >Mahalliy link (xuddi shu veb-saytdagi sahifaga havola) relative URL bilan ko'rsatilgan (<span style={{color: 'red'}}>"https://www" </span> qismisiz):</Text>


            <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'411px'} rounded={'20px'}>

                <Heading>Misol</Heading>

                <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'250px'} bg={'#0A1624'}>
                    <Text color={'#9D5EBB'} fontSize={'25px'}> {`<h2>`} <span style={{color: 'white'}}>Absolute URLs</span> {`</h2>`}</Text>
                    <Text color={'#9D5EBB'} fontSize={'25px'}> {`<p>`}{`<a>`} <span style={{color: 'red'}}>href=</span> <span style={{color: 'yellow'}}>"https://www.google.com/"</span> <span style={{color: 'white'}}>Google</span> {`</a>`} {`</p>`}</Text>
                    <Text color={'#9D5EBB'} fontSize={'25px'}> {`<h2>`} <span style={{color: 'white'}}>Relative URL</span> {`</h2>`}</Text>
                    <Text color={'#9D5EBB'} fontSize={'25px'}> {`<p>`}{`<a>`} <span style={{color: 'red'}}>href=</span> <span style={{color: 'yellow'}}>"html_images.asp"</span> <span style={{color: 'white'}}>HTML Rasmlar</span> {`</a>`} {`</p>`}</Text>
                    <Text color={'#9D5EBB'} fontSize={'25px'}> {`<p>`}{`<a>`} <span style={{color: 'red'}}>href=</span> <span style={{color: 'yellow'}}>"/css/default.asp"</span> <span style={{color: 'white'}}>CSS darslik</span> {`</a>`} {`</p>`}</Text>
                </Box>

                <CopyToClipboard text={ `<p><a href="https://www.google.com/">Google</a></p><h2>Absolute URLs</h2><h2>Relative URL</h2><p><a href="html_images.asp">HTML Rasmlar</a></p><p><a href="/css/default.asp">CSS darslik</a></p>`} onCopy={handleClip} >
                    <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                </CopyToClipboard>
            </Box>

        </Box>
        <Divider mt={'20px'} />

        <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'55vh'}>
            <Heading fontSize={{base: '30px' , md: '50px'}}>HTML linklar - Rasmdan link sifatida foydalaning</Heading>
            <Text fontSize={'25px'} >Tasvirni link sifatida ishlatish uchun <span style={{color: 'red'}}>{`<a>`}</span> tegining ichiga <span style={{color: 'red'}}>{`<img>`}</span> tegini qo'yish kifoya:</Text>


            <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'311px'} rounded={'20px'}>

                <Heading>Misol</Heading>

                <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'150px'} bg={'#0A1624'}>
                    <Text color={'#9D5EBB'} fontSize={'25px'}>{`<a>`} <span style={{color: 'red'}}>href=</span> <span style={{color: 'yellow'}}>"default.asp"</span> <span style={{color: 'white'}}>Google</span> {`</a>`}</Text>
                    
                    <Text color={'#9D5EBB'} fontSize={'25px'}>{`<img`} <span>src=</span> <span style={{color: 'yellow'}}>"smiley.gif"</span> <span>alt=</span> <span style={{color: 'yellow'}}>"HTML darslik"</span> {`>`} </Text>


                    <Text color={'#9D5EBB'} fontSize={'25px'}>{`</a>`}</Text>
                </Box>

                <CopyToClipboard text={ `<a href="default.asp"><img src="smiley.gif" alt="HTML darslik" style="width:42px;height:42px;"></a>`} onCopy={handleClip} >
                    <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                </CopyToClipboard>
            </Box>

        </Box>
        <Divider mt={'20px'} />
        

        <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
            <Heading fontSize={{base: '30px' , md: '50px'}}>Elektron pochta manziliga link</Heading>
            <Text fontSize={'25px'} >Foydalanuvchining elektron pochta dasturini ochadigan link yaratish uchun <span style={{color: 'red'}}>href</span> atributi ichida mailto: dan foydalaning (ularga yangi elektron pochta xabarini yuborish uchun):</Text>


            <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'300px'} rounded={'20px'}>

                <Heading>Misol</Heading>

                <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'110px'} bg={'#0A1624'}>
                    
                    <Text color={'#9D5EBB'} fontSize={'25px'}>{`<a `} <span style={{color: 'red'}}>href=</span> <span style={{color: 'yellow'}}>"mailto:someone@example.com"</span> {`>`} Email Jo’natish {`</a>`} </Text>

                </Box>

                <CopyToClipboard text={ `<a href="mailto:someone@example.com">Email Jo’natish</a>`} onCopy={handleClip} >
                    <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                </CopyToClipboard>
            </Box>

        </Box>
        <Divider mt={'20px'} />

        
        <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'65vh'}>
            <Heading fontSize={{base: '30px' , md: '50px'}}>Button Link sifatida</Heading>
            <Text fontSize={'25px'} >HTML tugmasidan link sifatida foydalanish uchun siz ba'zi JavaScript kodlarini qo'shishingiz kerak.</Text>
            <Text fontSize={'25px'} >JavaScript tugmani bosish kabi muayyan hodisalarda nima sodir bo'lishini belgilash imkonini beradi:</Text>


            <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'300px'} rounded={'20px'}>

                <Heading>Misol</Heading>

                <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'110px'} bg={'#0A1624'}>
                    
                    <Text color={'#9D5EBB'} fontSize={'25px'}>{`<button  `} <span style={{color: 'red'}}>onclick=</span> <span style={{color: 'yellow'}}>"document.location='default.asp'"</span> {`>`}HTML Darslik {`</button>`} </Text>

                </Box>

                <CopyToClipboard text={ `<a href="mailto:someone@example.com">Email Jo’natish</a>`} onCopy={handleClip} >
                    <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                </CopyToClipboard>
            </Box>
            <Text fontSize={'25px'} >Maslahat: JavaScript haqida koʻproq maʼlumotni bizning JavaScript darsimizda oʻrganing.</Text>
        </Box>
        <Divider mt={'20px'} />


        <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
            <Heading fontSize={{base: '30px' , md: '50px'}}>Button Link sifatida</Heading>
            <Text fontSize={'25px'} maxWidth={'1200px'}>Sarlavha atributi element haqida qo'shimcha ma'lumotni belgilaydi. Ma'lumot ko'pincha sichqonchani element ustida harakatlantirganda asboblar maslahati matni sifatida ko'rsatiladi.</Text>


            <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'300px'} rounded={'20px'}>

                <Heading>Misol</Heading>

                <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'110px'} bg={'#0A1624'}>
                    
                    <Text color={'#9D5EBB'} fontSize={'25px'}>{`<a  `} <span style={{color: 'red'}}>href=</span> <span style={{color: 'yellow'}}>"https://www.MOdevco.com/html/"</span> <span style={{color: 'red'}}>title=</span> <span style={{color: 'yellow'}}>" HTML bo’limiga o’ting"</span> {`>`} <span style={{color: 'white'}}>HTML Darsimizga O’ting</span> {`</a>`} </Text>

                </Box>

                <CopyToClipboard text={ `<a href="https://www.MOdevco.com/html/" title=" HTML bo’limiga o’ting">HTML Darsimizga O’ting</a>`} onCopy={handleClip} >
                    <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                </CopyToClipboard>
            </Box>
        </Box>
        <Divider mt={'20px'} />


        <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
            <Heading fontSize={{base: '30px' , md: '50px'}}>Button Link sifatida</Heading>
            <Text fontSize={'25px'} maxWidth={'1200px'}>Sarlavha atributi element haqida qo'shimcha ma'lumotni belgilaydi. Ma'lumot ko'pincha sichqonchani element ustida harakatlantirganda asboblar maslahati matni sifatida ko'rsatiladi.</Text>


            <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>

                <Heading>Misol</Heading>
                <Text fontSize={'25px'}>Veb-sahifaga link qilish uchun to'liq URL manzilidan foydalaning:</Text>
                <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'110px'} bg={'#0A1624'}>
                    
                    <Text color={'#9D5EBB'} fontSize={'25px'}>{`<a  `} <span style={{color: 'red'}}>href=</span> <span style={{color: 'yellow'}}>"https://www.MOdevco.com/html/default.asp"</span>  {`>`} <span style={{color: "white"}}>HTML darslik</span> {`</a>`} </Text>

                </Box>

                <CopyToClipboard text={ `<a href="https://www.MOdevco.com/html/default.asp">HTML darslik</a>`} onCopy={handleClip} >
                    <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                </CopyToClipboard>
            </Box>


            <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>

                <Heading>Misol</Heading>
                <Text fontSize={'25px'}>Joriy veb-saytdagi html jildida joylashgan sahifaga link:</Text>
                <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'110px'} bg={'#0A1624'}>
                    
                    <Text color={'#9D5EBB'} fontSize={'25px'}>{`<a  `} <span style={{color: 'red'}}>href=</span> <span style={{color: 'yellow'}}>"/html/default.asp"</span>  {`>`} <span style={{color: "white"}}>HTML darslik</span> {`</a>`} </Text>

                </Box>

                <CopyToClipboard text={ `<a href="/html/default.asp">HTML darslik</a>`} onCopy={handleClip} >
                    <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                </CopyToClipboard>
            </Box>


            <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>

                <Heading>Misol</Heading>
                <Text fontSize={'25px'}>Joriy sahifa bilan bir xil papkada joylashgan sahifaga link:</Text>
                <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'110px'} bg={'#0A1624'}>
                    
                    <Text color={'#9D5EBB'} fontSize={'25px'}>{`<a  `} <span style={{color: 'red'}}>href=</span> <span style={{color: 'yellow'}}>"default.asp"</span>  {`>`} <span style={{color: "white"}}>HTML darslik</span> {`</a>`} </Text>

                </Box>

                <CopyToClipboard text={ `<a href="/html/default.asp">HTML darslik</a>`} onCopy={handleClip} >
                    <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                </CopyToClipboard>
            </Box>
            
        </Box>
        <Divider mt={'100px'}  />
       

        <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'30vh'}>
            <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Linklar - Target Attribute</Heading>
            <UnorderedList pl={'50px'} fontSize={'25px'}>
                <ListItem>Bog'lanishni aniqlash uchun <span style={{color: 'red'}}>{` <a>`}</span> elementidan foydalaning</ListItem>
                <ListItem>Linkni manzilini aniqlash uchun <span style={{color: 'red'}}> href</span> atributidan foydalaning</ListItem>
                <ListItem>Bog'langan hujjatni qayerda ochishni aniqlash uchun <span style={{color: 'red'}}> target</span> atributidan foydalaning</ListItem>
                <ListItem>Tasvirni link sifatida ishlatish uchun <span style={{color: 'red'}}>{`<img>`}</span> elementidan (<span style={{color: 'red'}}>{`<a>`}</span> ichidagi) foydalaning</ListItem>
                <ListItem>Foydalanuvchining elektron pochta dasturini ochadigan link yaratish uchun href atributidagi mailto: sxemasidan foydalaning</ListItem>
            </UnorderedList>
        </Box>
        <Divider mt={'100px'}  />

        
        <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'30vh'}>
            <Heading fontSize={{base: '30px' , md: '50px'}}>HTML link teglari</Heading>
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
                                <Td>{`<a>`}</Td>
                                <Td>Giperlinkni belgilaydi</Td>
                            </Tr>
                        </Tbody>
                        
                    </Table>
                </TableContainer>
        </Box>

        
    </Box>
</Box>
  )
}

export default Html7dars