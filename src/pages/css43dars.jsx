
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

const Css43dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '40px', lg: '50px'}}>CSS Google Fonts</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box className='css43' height={{'2xl':'17vh', md: '20vh',lg: '35h', xl: '24vh'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
            <Heading fontSize={{base: '30px', md: '50px'}}>Google Fonts</Heading>
                <Text fontSize={'20px'}>Agar siz HTML-da standart shriftlardan foydalanishni xohlamasangiz, Google Shriftlaridan foydalanishingiz mumkin.</Text>
                <Text fontSize={'20px'}>Google Shriftlardan foydalanish bepul va 1000 dan ortiq shriftlardan tanlash mumkin.</Text>
            </Box>
            <Divider mt={'30px'} />
           






            {/* 1 */}
            
            
           
            
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh',base: '30vh'}}>
                <Heading fontSize={{md: '50px', base: '30px'}}>Google Fontdan Qanday Foydalanish</Heading>
                <Text fontSize={'20px'}>Faqat <span className='red'>{`<head>`}</span> bo'limiga maxsus uslublar jadvali havolasini qo'shing va keyin CSS-dagi shriftga murojaat qiling.</Text>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '550px', md: '600px', '2xl': '750px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Bu erda biz Google Fonts-dan "Sofiya" nomli shriftdan foydalanmoqchimiz:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'270px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>{`<`}head{`>`} <br /> {`<`}link <span className='red'>rel=</span><span className='yellow'>"stylesheet"</span> <span className='red'>href=</span> <span className='yellow'>"https://fonts.googleapis.com/css?family=Sofia"</span> {`>`} <br /> {`<style>`} <br /> body{`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-family:</span> <span className='yellow'>"Sofia", sans-serif;</span> <br /> {`}`} <br /> {`</style>`} <br /> {`</head>`} </Text>
                    </Box>
                    <Text fontSize={'30px'}>Natija:</Text>

                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'220px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text className='sofia' fontSize={{base: '40px', md: '60px'}}>Sofia Font</Text>
                     <Text className='sofia' fontSize={{base: '30px', md: '40px'}}>Lorem ipsum dolor sit amet.</Text>
                     <Text className='sofia' fontSize={{base: '20px', md: '30px'}}>123456790</Text>
                    </Box>
                </Box>
                
            </Box>


            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh'}}>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '550px', md: '600px', '2xl': '750px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Bu erda biz Google Fonts-dan "Trirong" nomli shriftdan foydalanmoqchimiz:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'270px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>{`<`}head{`>`} <br /> {`<`}link <span className='red'>rel=</span><span className='yellow'>"stylesheet"</span> <span className='red'>href=</span> <span className='yellow'>"https://fonts.googleapis.com/css?family=Trirong"</span> {`>`} <br /> {`<style>`} <br /> body{`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-family:</span> <span className='yellow'>"Trirong", serif;</span> <br /> {`}`} <br /> {`</style>`} <br /> {`</head>`} </Text>
                    </Box>
                    <Text fontSize={'30px'}>Natija:</Text>

                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'220px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text className='trirong' fontSize={{base: '40px', md: '60px'}}>Trirong Font</Text>
                     <Text className='trirong' fontSize={{base: '30px', md: '40px'}}>Lorem ipsum dolor sit amet.</Text>
                     <Text className='trirong' fontSize={{base: '20px', md: '30px'}}>123456790</Text>
                    </Box>
                </Box>
                
            </Box>



            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh'}}>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '550px', md: '600px', '2xl': '750px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Bu erda biz Google Fonts-dan "Audiowide" nomli shriftdan foydalanmoqchimiz:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'270px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>{`<`}head{`>`} <br /> {`<`}link <span className='red'>rel=</span><span className='yellow'>"stylesheet"</span> <span className='red'>href=</span> <span className='yellow'>"https://fonts.googleapis.com/css?family=Audiowide"</span> {`>`} <br /> {`<style>`} <br /> body{`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-family:</span> <span className='yellow'>"Audiowide", serif;</span> <br /> {`}`} <br /> {`</style>`} <br /> {`</head>`} </Text>
                    </Box>
                    <Text fontSize={'30px'}>Natija:</Text>

                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'220px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text className='audiowide' fontSize={{base: '40px', md: '60px'}}>Audiowide Font</Text>
                     <Text className='audiowide' fontSize={{base: '30px', md: '40px'}}>Lorem ipsum dolor sit amet.</Text>
                     <Text className='audiowide' fontSize={{base: '20px', md: '30px'}}>123456790</Text>
                    </Box>
                </Box>
                <Text fontSize={'20px'}>Eslatma: CSS-da shriftni belgilashda har doim kamida bitta zaxira shrift ro'yxatini kiriting (kutilmagan xatti- <br /> harakatlarning oldini olish uchun). Shunday qilib, bu erda ham ro'yxatning oxiriga umumiy shrift oilasini (masalan, <br />    serif yoki sans-serif) qo'shishingiz kerak.</Text>
            </Box>
            <Divider mt={'20px'} />



            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh'}}>
                <Heading fontSize={{base: '30px', md: '50px'}}>Bir nechta Google Fontdan Foydalaning</Heading>
                <Text fontSize={'20px'}>Bir nechta Google shriftlaridan foydalanish uchun shrift nomlarini chiziqli belgi <span className='red'>(|)</span> bilan ajrating, masalan:</Text>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '550px', md: '600px', '2xl': '860px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Bir nechta shriftlarni talab qiling:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'270px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>{`<`}head{`>`} <br /> {`<`}link <span className='red'>rel=</span><span className='yellow'>"stylesheet"</span> <span className='red'>href=</span> <span className='yellow'>"https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong"</span> {`>`} <br /> {`<style>`} <br /> <span className='purple' style={{paddingLeft: '20px'}}>h1.a</span>{`{`}<span className='red'>font-family:</span> <span className='yellow'>"Audiowide", sans-serif;</span>{`}`} <br /> <span className='purple' style={{paddingLeft: '20px'}}>h1.a</span>{`{`} <span  className='red'>font-family:</span> <span className='yellow'>"Sofia", sans-serif;</span>{`}`} <br /> <span className='purple' style={{paddingLeft: '20px'}}>h1.a</span>{`{`}<span className='red'>font-family:</span> <span className='yellow'>"Trirong", sans-serif;</span>{`}`} <br /> {`</style>`} <br /> {`</head>`} </Text>
                    </Box>
                    <Text fontSize={'30px'}>Natija:</Text>

                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'290px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text className='audiowide' fontSize={{base: '40px', md: '60px'}}>Audiowide Font</Text>
                     <Text className='sofia' fontSize={{base: '30px', md: '60px'}}>Sofia Font</Text>
                     <Text className='trirong' fontSize={{base: '30px', md: '60px'}}>Trirong Font</Text>
                     
                    </Box>
                </Box>
                <Text fontSize={'20px'}>Eslatma: Bir nechta shriftlarni so'rash veb-sahifalaringizni sekinlashtirishi mumkin! <br /> Shuning uchun bundan ehtiyot bo'ling.</Text>
            </Box>
            <Divider mt={'20px'} />


            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh'}}>
                <Heading fontSize={{base: '30px', md: '50px'}}>Styling Google Fonts</Heading>
                <Text fontSize={'20px'}>Albatta, siz CSS yordamida Google shriftlarini xohlaganingizcha uslublashingiz mumkin!</Text>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '550px', md: '600px', '2xl': '800px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>"Sofiya" shriftini yarating:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>{`<`}head{`>`} <br /> {`<`}link <span className='red'>rel=</span><span className='yellow'>"stylesheet"</span> <span className='red'>href=</span> <span className='yellow'>"https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong"</span> {`>`} <br /> {`<style>`} <br /> body{`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-family:</span> <span className='yellow'>"Sofia", sans-serif;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>font-size:</span> <span className='yellow'>30px;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>text-shadow:</span> <span className='yellow'>3px 3px 3px #ababab;</span> <br /> {`}`} <br /> {`</style>`} <br /> {`</head>`} </Text>
                    </Box>
                    <Text fontSize={'30px'}>Natija:</Text>

                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'240px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text className='sofia' fontSize={{base: '40px', md: '60px'}}>Sofia Font</Text>
                     <Text className='sofia' fontSize={{base: '30px', md: '40px'}}>Lorem ipsum dolor sit amet.</Text>
                     <Text className='sofia' fontSize={{base: '20px', md: '30px'}}>123456790</Text>
                     
                    </Box>
                </Box>
            </Box>
            <Divider mt={'20px'} />



            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh'}}>
                <Heading fontSize={{base: '30px', md: '50px'}}>Enabling Font Effects</Heading>
                <Text fontSize={'20px'}>Google siz foydalanishingiz mumkin bo'lgan turli xil shrift effektlarini ham yoqdi.</Text>
                <Text fontSize={'20px'}>Avval Google API-ga effekt=effekt nomini qo'shing, so'ngra maxsus effektdan foydalanmoqchi <br /> bo'lgan elementga maxsus sinf nomini qo'shing. Sinf nomi har doim font-effect- bilan boshlanadi <br /> va effekt nomi bilan tugaydi.</Text>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '550px', md: '600px', '2xl': '700px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>"Sofiya" shriftiga olov effektini qo'shing:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>{`<`}head{`>`} <br /> {`<`}link <span className='red'>rel=</span><span className='yellow'>"stylesheet"</span> <span className='red'>href=</span> <span className='yellow'>"https://fonts.googleapis.com/css?family=Sofia&effect=fire"</span> {`>`} <br /> {`<style>`} <br /> body{`{`}<span className='red'>font-family:</span> <span className='yellow'>"Sofia", sans-serif;</span>{`}`} <br /> <span className='red'>font-size:</span> <span className='yellow'>30px;</span>{`</style>`} <br /> {`</head>`} <br /> {`<body>`} <br /> <span className='purple'>{`<`}<span className='purple'>h1</span> </span> <span className='red'>class=</span><span className='white'>"font-effect-fire"</span>{`>`}Sofia on Fire{`</h1>`} <br /> {`</body>`} </Text>
                    </Box>
                    <Text fontSize={'30px'}>Natija:</Text>

                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={{md:'115px', base: '90px'}} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={{base: '40px', md: '60px'}} className='sofia' color={'#FFCC00'} textShadow={'-5px -10px 20px #FFCC00'}>Sofia on Fire</Text>
                     
                    </Box>
                </Box>
                <Text fontSize={'20px'}>Bir nechta shrift effektlarini so'rash uchun effekt nomlarini chiziq belgisi (|) bilan ajrating, shunga o'xshash:</Text>
            </Box>


            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh'}}>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '550px', md: '600px', '2xl': '1100px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>"Sofiya" shriftiga olov effektini qo'shing:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'420px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>{`<`}head{`>`} <br /> {`<`}link <span className='red'>rel=</span><span className='yellow'>"stylesheet"</span> <span className='red'>href=</span> <span className='yellow'>https://fonts.googleapis.com/css? <br /> family=Sofia&effect=neon|outline|emboss|shadow-multiple"</span> {`>`} <br /> {`<style>`} <br /> body{`{`}<span className='red'>font-family:</span> <span className='yellow'>"Sofia", sans-serif;</span>{`}`} <br /> <span className='red'>font-size:</span> <span className='yellow'>30px;</span>{`</style>`} <br /> {`</head>`} <br /> {`<body>`} </Text>
                     <Text pl={'20px'} fontSize={'20px'} className='purple'>{`<`}<span className='purple'>h1</span> <span className='red'>class=</span><span className='yellow'>"font-effect-neon"</span>{`>`}<span className='white'>Neon Effect</span>{`</h1>`} <br /> {`<`}<span className='purple'>h1</span> <span className='red'>class=</span><span className='yellow'>"font-effect-outline"</span>{`>`}<span className='white'>Outline Effect </span>{`</h1>`} <br /> {`<`}<span className='purple'>h1</span> <span className='red'>class=</span><span className='yellow'>"font-effect-emboss"</span>{`>`}<span className='white'>Emboss Effect</span>{`</h1>`} <br /> {`<`}<span className='purple'>h1</span> <span className='red'>class=</span><span className='yellow'>"font-effect-shadow-multiple"</span>{`>`}<span className='white'>Multiple Shadow Effect</span>{`</h1>`} <br /></Text>
                     <span style={{fontSize: '20px'}}> <span className='purple'>{`</body>`}</span></span>
                    </Box>
                    <Text fontSize={'30px'}>Natija:</Text>

                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'390px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text className='sofia' fontSize={{base: '40px', md: '60px'}} textShadow={'3px 0px 5px #FF77FF'} color={'#FF77FF'}>Neon Effect</Text>
                     <Text className='sofia' fontSize={{base: '40px', md: '60px'}}>Outline Effect</Text>
                     <Text className='sofia' fontSize={{base: '40px', md: '60px'}}>Emboss Effect</Text>
                     <Text className='sofia' fontSize={{base: '40px', md: '60px'}}>Multiple Shadow Effect</Text>
                     
                    </Box>
                </Box>
            </Box>
            <Divider mt={'20px'} />
            
            
                
            </Box>



    </Box>
  )
}

export default Css43dars
