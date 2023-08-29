
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

const Css41dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '40px', lg: '50px'}}>CSS Font Size</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box className='css41' height={{'2xl':'67vh', md: '10vh',lg: '25vh', xl: '18vh'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Heading fontSize={{base: '30px' , md: '40px', lg :'50px'}}>Font Size</Heading>
                <Text fontSize={'20px'}> <span className='red'>Font-size</span> xossasi matn hajmini belgilaydi.</Text>
                <Text>Matn hajmini boshqarish qobiliyati veb-dizaynda muhim ahamiyatga ega. Biroq, paragraflarni sarlavhalarga <br /> o'xshatish yoki sarlavhalarni paragraflarga o'xshatish uchun shrift o'lchamini o'zgartirishdan foydalanmaslik kerak.</Text>
                <Text fontSize={'20px'}>Har doim tegishli HTML teglaridan foydalaning, masalan, sarlavhalar uchun <span className='red'>{`<h1> - <h6>`}</span> va paragraflar uchun {`<p>`}.</Text>
                <Text fontSize={'20px'}>Shrift o'lchami qiymati mutlaq yoki nisbiy o'lcham bo'lishi mumkin.</Text>
                <Text flex={'20px'}>Absolute size:</Text>
                <ul className='ull'>
                        <li>Matnni belgilangan hajmga o'rnatadi</li>
                        <li>Foydalanuvchiga barcha brauzerlarda matn hajmini o'zgartirishga ruxsat bermaydi <br /> (mavjud sabablarga ko'ra yomon)</li>
                        <li>Chiqarishning jismoniy hajmi ma'lum bo'lganda, mutlaq o'lcham foydalidir</li>
                </ul>
                <Text fontSize={'20px'}>Relative size:</Text>
                <ul className='ull'>
                    <li>Atrofdagi elementlarga nisbatan o'lchamni o'rnatadi</li>
                        <li>Foydalanuvchiga brauzerlarda matn hajmini o'zgartirish imkonini beradi</li>
                </ul>
                <Text fontSize={'20px'}>Eslatma: Agar siz shrift o'lchamini belgilamasangiz, oddiy matn uchun, masalan, paragraflar uchun standart o'lcham <br />  16px (16px=1em) dir.</Text>
            </Box>
            <Divider mt={'20px'} />
           






            {/* 1 */}
            
            
           
            
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px', md: '50px'}}>Font Size ni Piksellar Bilan O'rnating</Heading>
                <Text fontSize={'20px'}>Matn o'lchamini piksellar bilan belgilash sizga matn hajmini to'liq boshqarish imkonini beradi:</Text>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'500px', base: '550px', md: '600px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-size:</span> <span className='yellow'>40px;</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>h2 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-size:</span> <span className='yellow'>30px;</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>p {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-size:</span> <span className='yellow'>14px;</span> <br /> {`}`}</Text>
                    </Box>
                    <CopyToClipboard text={`h1 { font-size: 40px; }h2 { font-size: 30px; }p { font-size: 14px; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'20px'}>Maslahat: Agar siz piksellardan foydalansangiz, butun sahifa hajmini o'zgartirish uchun masshtablash vositasidan <br /> foydalanishingiz mumkin.</Text>
            </Box>
            <Divider mt={'20px'} />
            

            {/* 2 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '50vh'}}>
                <Heading fontSize={{base: '30px', md: '50px'}}>Font Size ni  Em Bilan O'rnating</Heading>
                <Text fontSize={'20px'}>Foydalanuvchilarga matn hajmini o'zgartirishga ruxsat berish uchun (brauzer menyusida) ko'plab ishlab <br /> chiquvchilar piksel o'rniga em-dan foydalanadilar.</Text>
                <Text fontSize={'20px'}>1em joriy shrift hajmiga teng. Brauzerlarda standart matn hajmi 16px. <br /> <br /> Shunday qilib, 1em ning standart o'lchami 16px.</Text>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'500px', base: '550px', md: '600px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-size:</span> <span className='yellow'>2.5em;</span>    <span className='gray'>/* 40px/16=2.5em */ </span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>h2 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-size:</span> <span className='yellow'>1.785em;</span>    <span className='gray'>/* 30px/16=1.875em */ </span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>p {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-size:</span> <span className='yellow'>0.875em;</span>    <span className='gray'>/* 14px/16=0.875em */ </span> <br /> {`}`}</Text>
                    </Box>
                    <CopyToClipboard text={`h1 { font-size: 2.5em;    /* 40px/16=2.5em */}h2 { font-size: 1.875em;   /* 30px/16=1.875em */}p {font-size: 0.875em;   /* 14px/16=0.875em */ }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'20px'}>Yuqoridagi misolda emdagi matn hajmi piksellardagi oldingi misol bilan bir xil. Biroq, em hajmi bilan barcha <br /> brauzerlarda matn hajmini sozlash mumkin.</Text>
                <Text fontSize={'20px'}>Afsuski, Internet Explorer-ning eski versiyalarida muammo hali ham mavjud. Matn kattalashtirilganda kerakli <br /> darajadan kattaroq bo'ladi va kichikroq qilinganda kichikroq bo'ladi.</Text>
            </Box>
            <Divider mt={'20px'} />

            {/* 3 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '50vh'}}>
                <Heading fontSize={{base: '30px', md: '50px'}}>Foiz va Em Birikmasidan Foydalaning</Heading>
                <Text fontSize={'20px'}>Barcha brauzerlarda ishlaydigan yechim <span className='red'>{`<body>`}</span> elementi uchun foizda standart shrift o'lchamini o'rnatishdir:</Text>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'590px', base: '550px', md: '600px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'390px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>body {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-size:</span> <span className='yellow'>100%;</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-size:</span> <span className='yellow'>2.5em;</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>h2 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-size:</span> <span className='yellow'>1.785em;</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>p {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-size:</span> <span className='yellow'>0.875em;</span> <br /> {`}`}</Text>
                    </Box>
                    <CopyToClipboard text={`body { font-size: 100%;  }h1 { font-size: 2.5em }h2 { font-size: 1.875em; }p  font-size: 0.875em; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                
                <Text fontSize={'20px'}>Bizning kodimiz endi ajoyib ishlaydi! U barcha brauzerlarda bir xil matn hajmini ko'rsatadi va barcha brauzerlarga <br /> matnni kattalashtirish yoki o'lchamini o'zgartirish imkonini beradi!</Text>
            </Box>


            {/* 4 */}

            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '50vh'}}>
                <Heading fontSize={{base: '30px', md: '50px'}}>Responsive Font Size</Heading>
                <Text fontSize={'20px'}>Matn o'lchamini <span className='red'>vw</span> birligi bilan o'rnatish mumkin, bu <span className='red'>"viewport width"</span> degan ma'noni anglatadi.</Text>
                <Text fontSize={'20px'}>Shunday qilib, matn hajmi brauzer oynasining o'lchamiga mos keladi:</Text>
                <Box display={'flex'} flexDirection={'column'} pl={{md: '40px', base: '10px'}} justifyContent={'center'} w={{xl: '900px', md: '100%', base: '100%'}} h={'230px'} bg={'#D9D9D9'}>
                        <Text color={'#000'} fontWeight={'400'} fontSize={{md: '60px', base: '30px'}}>Hello world</Text>
                        <Text color={'#000'} fontSize={'20px'}>Shrift o'lchami qanday o'lchamini ko'rish uchun brauzer oynasining o'lchamini o'zgartiring.</Text>
                </Box>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'240px'}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'60px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'><span>{`<h1`} </span> <span className='blue'>style="</span><span className='red'>font-size:</span> <span className='yellow'>10vw;</span> <span className='blue'>"</span> <span>{`>`}</span><span>Hello World</span> {`<h1/>`}</Text>
                    </Box>
                    <CopyToClipboard text={`<h1 style="font-size:10vw">Hello World</h1>` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                
                <Text fontSize={'20px'}>Viewport - bu brauzer oynasining o'lchamidir. 1vw = ko'rish maydoni kengligining 1%. Agar ko'rish maydoni <br /> 50 sm kengligida bo'lsa, 1vw 0,5 sm.</Text>
            </Box>
            <Divider mt={'20px'} />


            </Box>



    </Box>
  )
}

export default Css41dars
