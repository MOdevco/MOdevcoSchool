
import { Box , Flex , Heading , Button , Text , Image , Input , FormLabel, HStack, Radio, RadioGroup, Grid, border} from '@chakra-ui/react'
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
import CssAccordion from '../components/cssAccordion/cssAccordion'
import BorderProps from '../components/borderProps/borderProps'
import OutlineProps from '../components/outlineProps/OutlineProps'

const Css44dars = () => {
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
                    <Sidebar title={'CSS DARSLARI'} elementName={'Bosh sahifa'}/>
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
                            <CssAccordion  />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '40px', lg: '50px'}}>CSS Ajoyib Font Pairings</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box className='top' height={{'2xl':'6vh', md: '15vh',lg: '25h', xl: '8vh'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Text fontSize={'20px'}>Ajoyib shrift juftligi ajoyib dizayn uchun zarurdir.</Text>
            </Box>
            <Divider mt={'20px'} />
           






            {/* 1 */}
            
            
           
            
            <Box className='media' pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh',base: '30vh'}}>
                <Heading fontSize={{md: '50px', base: '30px'}}>Font Pairing Qoidalari</Heading>
                <Text fontSize={'20px'}>Ajoyib shrift juftlarini yaratish uchun bir necha asosiy qoidalar:</Text>
                <Heading fontSize={{md: '50px', base: '30px'}}>1. To‘ldiruvchi</Heading>
                <Text fontSize={'20px'}>Bir-birini to'ldiradigan shrift juftlarini topish har doim xavfsizdir.</Text>
                <Text fontSize={'20px'}>Ajoyib shrift kombinatsiyasi juda o'xshash yoki juda farq qilmasdan uyg'unlashishi kerak.</Text>
                <Heading fontSize={{md: '50px', base: '30px'}}>2. Shrift Superfamilies dan foydalaning</Heading>
                <Text fontSize={'20px'}>Shrift superfamily - bu birgalikda yaxshi ishlash uchun mo'ljallangan shriftlar to'plami. Shunday <br /> qilib, bitta superoilada turli shriftlardan foydalanish xavfsizdir.</Text>
                <Text>Masalan, Lucida superfamiliyasida quyidagi shriftlar mavjud: Lucida Sans, Lucida Serif, Lucida <br /> Typewriter Sans, Lucida Typewriter Serif va Lucida Math.</Text>
                <Heading fontSize={{base: '30px', md: '50px'}}>3. Kontrast - King</Heading>
                <Text fontSize={'20px'}>Juda o'xshash ikkita shrift ko'pincha ziddiyatli bo'ladi. Biroq, to'g'ri bajarilgan kontrastlar har bir <br /> shriftda eng yaxshisini keltirib chiqaradi.</Text>
                <Text fontSize={'20px'}>Masalan, Lucida superfamiliyasida quyidagi shriftlar mavjud: Lucida Sans, Lucida Serif, Lucida <br /> Typewriter Sans, Lucida Typewriter SeriMisol: Serifni sans serif bilan birlashtirish yaxshi ma'lum <br /> kombinatsiyadir.f va Lucida Math.</Text>
                <Text fontSize={'20px'}>Kuchli superoilaga bir xil shriftning serif va sans serif turlari kiradi (masalan, Lucida va Lucida Sans).</Text>
                <Heading fontSize={{base: '30px', md: '50px'}}>4. Faqat bitta xo'jayinni tanlang</Heading>
                <Text>Bitta shrift boss bo'lishi kerak. Bu sizning sahifangizdagi shriftlar uchun ierarxiyani o'rnatadi. <br /> Bunga hajmi, vazni va rangini o'zgartirish orqali erishish mumkin.</Text>
                <Box className='css44dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '580px', md: '600px', '2xl': '600px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Shubhasiz, "Georgiya" bu erda xo'jayin:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'360px'} bg={'#0A1624'} pt={'10px'}>
                      
                      <Text fontSize={'20px'} className='purple'>body {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>background-color:</span> <span className='yellow'>black;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>font-family:</span> <span className='yellow'>Verdana, sans-serif;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>font-size:</span> <span className='yellow'>16px;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>color:</span> <span className='yellow'>gray;</span> <br /> {`}`} </Text>
                      <Text fontSize={'20px'} className='purple'>
                        h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-family:</span> <span className='yellow'>Georgia, serif;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>font-size:</span> <span className='yellow'>60px;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>color:</span> <span className='yellow'>white;</span> <br /> {`}`}
                      </Text>
                     
                    </Box>
                    <CopyToClipboard text={`body { background-color: black; font-family: Verdana, sans-serif; font-size: 16px; color: gray;}h1 { font-family: Georgia, serif; font-size: 60px; color: white;}` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'20px'}>Quyida biz ko'plab brendlar va kontekstlarga mos keladigan mashhur shrift juftlarini ko'rsatdik.</Text>
            </Box>
            <Divider mt={'20px'} />



            {/* 2 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{'2xl':'30vh', md: '30vh',base: '30vh',}}>
                <Heading fontSize={{md: '50px', base: '30px'}}>Georgia va Verdana</Heading>
                <Text fontSize={'20px'}>Georgiya va Verdana klassik kombinatsiyadir. Shuningdek, u veb-xavfsiz shrift standartlariga amal qiladi:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'300px',xl: '530px', base: '500px', md: '600px', '2xl': '530px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Shubhasiz, "Georgiya" bu erda xo'jayin:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'340px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text className='molengo' fontSize={{base: '30px', md: '50px'}}>Beautiful Norway</Text> <br />
                     <Text className='molengo' fontSize={'20px'}>Norway has a total area of 385,252 square kilometers and a population of 5,438,657 (December 2020). <br /> Norway is bordered by Sweden, Finland and Russia to the north-east, and the Skagerrak to the south, <br /> with Denmark on the other side. <br />  <br />

                    Norway has beautiful mountains, glaciers and stunning fjords. Oslo, the capital, is a city of green <br /> spaces and museums. Bergen, with colorful wooden houses, is the starting point for cruises to the <br /> dramatic Sognefjord. Norway is also known for fishing, hiking and skiing.</Text>
                     
                    </Box>
                </Box>
            </Box>
            <Divider mt={'20px'} />


            {/* 3 */}

            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh',base: '30vh'}}>
                <Heading fontSize={{md: '50px', base: '30px'}}>Helvetica va Garamond</Heading>
                <Text fontSize={'20px'}>Helvetica va Garamond - bu veb-xavfsiz shriftlardan foydalanadigan yana bir klassik kombinatsiya:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '530px', md: '600px', '2xl': '560px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Sarlavhalar uchun “Helvetica” shriftidan, matn uchun esa “Garamond” shriftidan foydalaning:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'370px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text className='boogalo' fontSize={{base: '30px', md: '50px'}}>Beautiful Norway</Text> <br />
                     <Text className='boogalo' fontSize={'20px'}>Norway has a total area of 385,252 square kilometers and a population of 5,438,657 (December 2020). Norway is <br /> bordered by Sweden, Finland and Russia to the north-east, and the Skagerrak to the south, with Denmark on the other <br />side. <br /> <br />

                    Norway has beautiful mountains, glaciers and stunning fjords. Oslo, the capital, is a city of green spaces and museums. <br /> Bergen, with colorful woode houses, is the starting point for <br /> cruises to the dramatic Sognefjord. Norway is also known for fishing, hiking and skiing.</Text>
                     
                    </Box>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            {/* 4 */}
            <Box className='css44' height={{'2xl':'20vh', md: '30vh',lg: '25h', xl: '30vh'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Heading fontSize={{base:'30px', md: '50px'}}>Mashhur Google Font lari</Heading>
                <Text fontSize={'20px'}>Agar siz HTML-da standart shriftlardan foydalanishni xohlamasangiz, Google Fonts-dan foydalanishingiz mumkin.</Text>
                <Text fontSize={'20px'}>Google Shriftlardan foydalanish bepul va 1000 dan ortiq shriftlardan tanlash mumkin.</Text>
                <Text fontSize={'20px'}>Below are some popular Google Web Font Pairings.</Text>
            </Box>
            <Divider mt={'20px'} />


            {/* 5 */}

            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh',base: '30vh'}}>
                <Heading fontSize={{md: '50px', base: '30px'}}>Merriweather va Open Sans</Heading>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', xl: '530px', base: '900px', md: '600px', '2xl': '600px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Helvetica va Garamond - bu veb-xavfsiz shriftlardan foydalanadigan yana bir klaskombinatsiya:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'420px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text className='merri' fontSize={{base: '30px', md: '50px'}}>Beautiful Norway</Text> <br />
                     <Text className='merri' fontSize={'20px'}>Norway has a total area of 385,252 square kilometers and a population of 5,438,657 (December 2020).<br /> Norway is  bordered by Sweden, Finland and Russia to the north-east, and the Skagerrak to the south, with Denmark on the other <br />side. <br /> <br />

                    Norway has beautiful mountains, glaciers and stunning fjords. Oslo, the capital, is a city of green spaces and museums. <br /> Bergen, with colorful woode houses, is the starting point for <br /> cruises to the dramatic Sognefjord. Norway is also known for fishing, hiking and skiing.</Text>
                     
                    </Box>
                </Box>
            </Box>
            <Divider mt={'20px'} />
            

            {/* 6 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh',base: '30vh'}}>
                <Heading fontSize={{md: '50px', base: '30px'}}>Ubuntu va Lora</Heading>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '550px', md: '600px', '2xl': '590px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Sarlavhalar uchun "Ubuntu" shrifti va matn uchun "Lora" dan foydalaning:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'400px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text className='ubuntu' fontSize={{base: '30px', md: '50px'}}>Beautiful Norway</Text> <br />
                     <Text className='ubuntu' fontSize={'20px'}>Norway has a total area of 385,252 square kilometers and a population of 5,438,657 (December 2020). <br /> Norway is bordered by Sweden, Finland and Russia to the north-east, and the Skagerrak to the south, with Denmark on the other <br />side. <br /> <br />

                    Norway has beautiful mountains, glaciers and stunning fjords. Oslo, the capital, is a city of green spaces and museums. <br /> Bergen, with colorful woode houses, is the starting point for <br /> cruises to the dramatic Sognefjord. Norway is also known for fishing, hiking and skiing.</Text>
                     
                    </Box>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            {/* 7 */}

            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh',base: '30vh'}}>
                <Heading fontSize={{md: '50px', base: '30px'}}>Abril Fatface va Poppins</Heading>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '550px', md: '600px', '2xl': '580px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Sarlavhalar uchun “Abril Fatface” shriftidan, matn uchun esa “Poppins” shriftidan foydalaning:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'380px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text className='abril' fontSize={{base: '30px', md: '50px'}}>Beautiful Norway</Text> <br />
                     <Text className='abril' fontSize={'20px'}>Norway has a total area of 385,252 square kilometers and a population of 5,438,657 (December 2020).<br /> Norway is bordered by Sweden, Finland and Russia to the north-east, and the Skagerrak to the south, with Denmark on the other <br />side. <br /> <br />

                    Norway has beautiful mountains, glaciers and stunning fjords. Oslo, the capital, is a city of green spaces and museums. <br /> Bergen, with colorful woode houses, is the starting point for <br /> cruises to the dramatic Sognefjord. Norway is also known for fishing, hiking and skiing.</Text>
                     
                    </Box>
                </Box>
            </Box>
            <Divider mt={'20px'} />
            {/* 8 */}

            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh',base: '30vh'}}>
                <Heading fontSize={{md: '50px', base: '30px'}}>Cinzel va Fauna One</Heading>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '550px', md: '600px', '2xl': '580px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Sarlavhalar uchun “Cinzel” shriftidan, matn uchun esa “Fauna One” shriftidan foydalaning:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'380px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text className='cinzel' fontSize={{base: '30px', md: '50px'}}>Beautiful Norway</Text> <br />
                     <Text className='cinzel' fontSize={'20px'}>Norway has a total area of 385,252 square kilometers and a population of 5,438,657 (December 2020). <br /> Norway is bordered by Sweden, Finland and Russia to the north-east, and the Skagerrak to the south, with Denmark on the other <br />side. <br /> <br />

                    Norway has beautiful mountains, glaciers and stunning fjords. Oslo, the capital, is a city of green spaces and museums. <br /> Bergen, with colorful woode houses, is the starting point for <br /> cruises to the dramatic Sognefjord. Norway is also known for fishing, hiking and skiing.</Text>
                     
                    </Box>
                </Box>
            </Box>
            <Divider mt={'20px'} />


            {/* 9 */}

            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh',base: '30vh'}}>
                <Heading fontSize={{md: '50px', base: '30px'}}>Fjalla One va Libre Baskerville</Heading>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '550px', md: '600px', '2xl': '610px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Sarlavhalar uchun "Fjalla One" shrifti va matn uchun "Libre Baskerville" dan foydalaning:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'430px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text className='libre' fontSize={{base: '30px', md: '50px'}}>Beautiful Norway</Text> <br />
                     <Text className='libre' fontSize={'20px'}>Norway has a total area of 385,252 square kilometers and a population of 5,438,657 (December 2020). <br /> Norway is bordered by Sweden, Finland and Russia to the north-east, and the Skagerrak to the south, with Denmark on the other <br />side. <br /> <br />

                    Norway has beautiful mountains, glaciers and stunning fjords. Oslo, the capital, is a city of green spaces and museums. <br /> Bergen, with colorful woode houses, is the starting point for <br /> cruises to the dramatic Sognefjord. Norway is also known for fishing, hiking and skiing.</Text>
                     
                    </Box>
                </Box>
            </Box>
            <Divider mt={'20px'} />


            {/* 10 */}

            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh',base: '30vh'}}>
                <Heading fontSize={{md: '50px', base: '30px'}}>Space Mono va Muli</Heading>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '550px', md: '600px', '2xl': '580px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Sarlavhalar uchun "Fjalla One" shrifti va matn uchun "Libre Baskerville" dan foydalaning:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'380px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text className='mono' fontSize={{base: '30px', md: '50px'}}>Beautiful Norway</Text> <br />
                     <Text className='mono' fontSize={'20px'}>Norway has a total area of 385,252 square kilometers and a population of 5,438,657 (December 2020). <br /> Norway is bordered by Sweden, Finland and Russia to the north-east, and the Skagerrak to the south, with Denmark on the other <br />side. <br /> <br />

                    Norway has beautiful mountains, glaciers and stunning fjords. Oslo, the capital, is a city of green spaces and museums. <br /> Bergen, with colorful woode houses, is the starting point for <br /> cruises to the dramatic Sognefjord. Norway is also known for fishing, hiking and skiing.</Text>
                     
                    </Box>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            {/* 11 */}

            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh',base: '30vh'}}>
                <Heading fontSize={{md: '50px', base: '30px'}}>Space Mono va Muli</Heading>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '550px', md: '600px', '2xl': '580px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Sarlavhalar uchun "Fjalla One" shrifti va matn uchun "Libre Baskerville" dan foydalaning:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'380px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text className='spectral' fontSize={{base: '30px', md: '50px'}}>Beautiful Norway</Text> <br />
                     <Text className='spectral' fontSize={'20px'}>Norway has a total area of 385,252 square kilometers and a population of 5,438,657 (December 2020). <br /> Norway is bordered by Sweden, Finland and Russia to the north-east, and the Skagerrak to the south, with Denmark on the other <br />side. <br /> <br />

                    Norway has beautiful mountains, glaciers and stunning fjords. Oslo, the capital, is a city of green spaces and museums. <br /> Bergen, with colorful woode houses, is the starting point for <br /> cruises to the dramatic Sognefjord. Norway is also known for fishing, hiking and skiing.</Text>
                     
                    </Box>
                </Box>
            </Box>
            <Divider mt={'20px'} />




            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh',base: '30vh'}}>
                <Heading fontSize={{md: '50px', base: '30px'}}>Space Mono va Muli</Heading>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '550px', md: '600px', '2xl': '530px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Sarlavhalar uchun "Fjalla One" shrifti va matn uchun "Libre Baskerville" dan foydalaning:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'340px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text className='oswald' fontSize={{base: '30px', md: '50px'}}>Beautiful Norway</Text> <br />
                     <Text className='oswald' fontSize={'20px'}>Norway has a total area of 385,252 square kilometers and a population of 5,438,657 (December 2020). Norway is <br /> bordered by Sweden, Finland and Russia to the north-east, and the Skagerrak to the south, with Denmark on the other <br />side. <br /> <br />

                    Norway has beautiful mountains, glaciers and stunning fjords. Oslo, the capital, is a city of green spaces and museums. <br /> Bergen, with colorful woode houses, is the starting point for <br /> cruises to the dramatic Sognefjord. Norway is also known for fishing, hiking and skiing.</Text>
                     
                    </Box>
                </Box>
            </Box>
            <Divider mt={'20px'} />
            



            
            
            
                
            </Box>



    </Box>
  )
}

export default Css44dars
