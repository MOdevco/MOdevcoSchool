
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

const Css38dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '40px', lg: '50px'}}>CSS Web Safe Fonts</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box className='css38' height={{'2xl':'13vh', md: '10vh',lg: '25vh', xl: '18vh'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Heading fontSize={{base: '30px' , md: '40px', lg :'50px'}}>Veb-safe Font lar nima?</Heading>
                <Text fontSize={'20px'}>Veb-xavfsiz shriftlar barcha brauzerlar va qurilmalarda universal tarzda o'rnatiladigan shriftlardir.</Text>
            </Box>
            <Divider mt={'20px'} />






            {/* 1 */}
            
            
           
            
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '50vh'}}>
                <Heading fontSize={{base: '30px', md: '50px'}}>Fallback Fonts</Heading>
                <Text fontSize={'20px'}>Biroq, 100% to'liq veb-xavfsiz shriftlar mavjud emas. Har doim shrift topilmasligi yoki to'g'ri <br /> o'rnatilmaganligi ehtimoli bor.</Text>
                <Text fontSize={'20px'}>Shuning uchun har doim zaxira shriftlardan foydalanish juda muhimdir.</Text>
                <Text fontSize={'20px'}>Bu font-family xususiyatiga o'xshash "zaxira shriftlar" ro'yxatini qo'shishingiz kerakligini anglatadi. Agar <br /> birinchi shrift ishlamasa,   brauzer keyingisini, keyingisini va hokazolarni sinab ko'radi. Roʻyxatni har doim <br /> umumiy shrift familiyasi bilan yakunlang.</Text>
                <Box className='css38dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'370px'}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text>Bu erda uchta shrift turi mavjud: Tahoma, Verdana va sans-serif. Ikkinchi va uchinchi shriftlar, agar <br /> birinchisi topilmasa, zaxira nusxasi.</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-family:</span> <span className='yellow'>Tahoma, Verdana, sans-serif;</span> <br /> {`}`}</Text>
                    </Box>
                    <CopyToClipboard text={`p { font-famil: Tahoma, Verdana, sans-serif; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                
            </Box>
            

            {/* 2 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '42vh'}}>
                <Heading>HTML va CSS Uchun Eng Yaxshi <br /> Web-safe Fontlar</Heading>
                <Text fontSize={'20px'}>Quyidagi ro'yxat HTML va CSS uchun eng yaxshi veb-xavfsiz shriftlardir:</Text>
                <ul className='ull'>
                    <li>Arial (sans-serif)</li>
                    <li>Verdana (sans-serif)</li>
                    <li>Tahoma (sans-serif)</li>
                    <li>Trebuchet MS (sans-serif)</li>
                    <li>Times New Roman (serif)</li>
                    <li>Georgia (serif)</li>
                    <li>Garamond (serif)</li>
                    <li>Courier New (monospace)</li>
                    <li>Brush Script MT (cursive)</li>
                </ul>
            </Box>
            <Divider  mt={'20px'}/>



            {/* 2 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '42vh'}}>
                <Heading fontSize={{md:'50px', base: '30px'}}>Arial (sans-serif)</Heading>
                <Text fontSize={'20px'}>Arial ham onlayn, ham bosma ommaviy axborot vositalari uchun eng keng tarqalgan shriftdir. Arial ham <br /> Google Docs-dagi standart shriftdir.</Text>
                <Text fontSize={'20px'}>Arial eng xavfsiz veb-shriftlardan biri bo'lib, u barcha asosiy operatsion tizimlarda mavjud.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'370px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box className='font1' width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'170px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={{md:'40px', base: '30px'}}>Lorem ipsum dolor sit amet</Text>
                    <Text fontSize={{md:'30px', base: '25px'}}>Lorem ipsum dolor sit amet</Text>
                    <Text fontSize={{md:'20px', base: '20px'}}>0 1 2 3 4 5 6 7 8 9</Text>
                    </Box>
                    <CopyToClipboard text={`Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 0 1 2 3 4 5 6 7 8 9` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            {/* 3 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '42vh'}}>
                <Heading fontSize={{md:'50px', base: '30px'}}>Verdana (sans-serif)</Heading>
                <Text fontSize={'20px'}>Verdana - juda mashhur shrift. Verdana hatto kichik shrift o'lchamlari uchun ham oson o'qilishi mumkin.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'370px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box className='font2' width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'170px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={{md:'40px', base: '30px'}}>Lorem ipsum dolor sit amet</Text>
                    <Text fontSize={{md:'30px', base: '25px'}}>Lorem ipsum dolor sit amet</Text>
                    <Text fontSize={{md:'20px', base: '20px'}}>0 1 2 3 4 5 6 7 8 9</Text>
                    </Box>
                    <CopyToClipboard text={`Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 0 1 2 3 4 5 6 7 8 9` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />


            {/* 4 */}

            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '42vh'}}>
                <Heading fontSize={{md:'50px', base: '30px'}}>Tahoma (sans-serif)</Heading>
                <Text fontSize={'20px'}>Tahoma shriftida belgilar orasidagi bo'sh joy kamroq.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'370px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box className='font3' width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'170px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={{md:'40px', base: '30px'}}>Lorem ipsum dolor sit amet</Text>
                    <Text fontSize={{md:'30px', base: '25px'}}>Lorem ipsum dolor sit amet</Text>
                    <Text fontSize={{md:'20px', base: '20px'}}>0 1 2 3 4 5 6 7 8 9</Text>
                    </Box>
                    <CopyToClipboard text={`Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 0 1 2 3 4 5 6 7 8 9` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            {/* 5 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '42vh'}}>
                <Heading fontSize={{md:'50px', base: '30px'}}>Trebuchet MS (sans-serif)</Heading>
                <Text fontSize={'20px'}>Trebuchet MS 1996 yilda Microsoft tomonidan ishlab chiqilgan. Ushbu shriftdan ehtiyotkorlik bilan <br /> foydalaning. Barcha mobil operatsion tizimlar tomonidan qo'llab-quvvatlanmaydi.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'370px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box className='font4' width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'170px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={{md:'40px', base: '30px'}}>Lorem ipsum dolor sit amet</Text>
                    <Text fontSize={{md:'30px', base: '25px'}}>Lorem ipsum dolor sit amet</Text>
                    <Text fontSize={{md:'20px', base: '20px'}}>0 1 2 3 4 5 6 7 8 9</Text>
                    </Box>
                    <CopyToClipboard text={`Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 0 1 2 3 4 5 6 7 8 9` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
            


            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '42vh'}}>
                <Heading fontSize={{md:'50px', base: '30px'}}>Times New Roman (serif)</Heading>
                <Text fontSize={'20px'}>Times New Roman - dunyodagi eng taniqli shriftlardan biri. Bu professional ko'rinadi va ko'plab <br /> gazetalarda va "yangiliklar" veb-saytlarida qo'llaniladi. Shuningdek, u Windows qurilmalari va ilovalari <br /> uchun asosiy shrift hisoblanadi.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'370px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box className='font5' width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'170px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={{md:'40px', base: '30px'}}>Lorem ipsum dolor sit amet</Text>
                    <Text fontSize={{md:'30px', base: '25px'}}>Lorem ipsum dolor sit amet</Text>
                    <Text fontSize={{md:'20px', base: '20px'}}>0 1 2 3 4 5 6 7 8 9</Text>
                    </Box>
                    <CopyToClipboard text={`Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 0 1 2 3 4 5 6 7 8 9` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />



            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '42vh'}}>
                <Heading fontSize={{md:'50px', base: '30px'}}>Georgia (serif)</Heading>
                <Text fontSize={'20px'}>Gruziya nafis serif shrifti. Turli xil shrift o'lchamlarida juda o'qilishi mumkin, shuning uchun u mobil <br /> qurilmalar uchun javob beradigan dizayn uchun yaxshi nomzoddir.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'370px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box className='font6' width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'170px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={{md:'40px', base: '30px'}}>Lorem ipsum dolor sit amet</Text>
                    <Text fontSize={{md:'30px', base: '25px'}}>Lorem ipsum dolor sit amet</Text>
                    <Text fontSize={{md:'20px', base: '20px'}}>0 1 2 3 4 5 6 7 8 9</Text>
                    </Box>
                    <CopyToClipboard text={`Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 0 1 2 3 4 5 6 7 8 9` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />



            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '42vh'}}>
                <Heading fontSize={{md:'50px', base: '30px'}}>Garamond (serif)</Heading>
                <Text fontSize={'20px'}>Garamond - ko'plab bosma kitoblar uchun ishlatiladigan klassik shrift. U abadiy ko'rinishga ega va yaxshi o'qilishi mumkin.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'370px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box className='font7' width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'170px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={{md:'40px', base: '30px'}}>Lorem ipsum dolor sit amet</Text>
                    <Text fontSize={{md:'30px', base: '25px'}}>Lorem ipsum dolor sit amet</Text>
                    <Text fontSize={{md:'20px', base: '20px'}}>0 1 2 3 4 5 6 7 8 9</Text>
                    </Box>
                    <CopyToClipboard text={`Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 0 1 2 3 4 5 6 7 8 9` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />



            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '42vh'}}>
                <Heading fontSize={{md:'50px', base: '30px'}}>Courier New (monospace)</Heading>
                <Text fontSize={'20px'}>Courier New - eng keng tarqalgan monospace serif shrifti. Courier New ko'pincha kodlash displeylari bilan <br /> ishlatiladi va ko'plab elektron pochta provayderlari undan standart shrift sifatida foydalanadilar. Courier New ham <br /> kino ssenariylari uchun standart shrift hisoblanadi.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'370px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box className='font8' width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'170px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={{md:'40px', base: '30px'}}>Lorem ipsum dolor sit amet</Text>
                    <Text fontSize={{md:'30px', base: '25px'}}>Lorem ipsum dolor sit amet</Text>
                    <Text fontSize={{md:'20px', base: '20px'}}>0 1 2 3 4 5 6 7 8 9</Text>
                    </Box>
                    <CopyToClipboard text={`Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 0 1 2 3 4 5 6 7 8 9` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />



            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '42vh'}}>
                <Heading fontSize={{md:'50px', base: '30px'}}>Brush Script MT (cursive)</Heading>
                <Text fontSize={'20px'}>Brush Script MT shrifti qo'l yozuviga taqlid qilish uchun yaratilgan. Bu oqlangan va murakkab, ammo o'qish qiyin bo'lishi mumkin. Ehtiyotkorlik bilan foydalaning.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'370px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box className='font9' width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'170px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={{md:'40px', base: '30px'}}>Lorem ipsum dolor sit amet</Text>
                    <Text fontSize={{md:'30px', base: '25px'}}>Lorem ipsum dolor sit amet</Text>
                    <Text fontSize={{md:'20px', base: '20px'}}>0 1 2 3 4 5 6 7 8 9</Text>
                    </Box>
                    <CopyToClipboard text={`Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 0 1 2 3 4 5 6 7 8 9` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
                
            </Box>



    </Box>
  )
}

export default Css38dars
