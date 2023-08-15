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

const Css23dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Padding</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box className='duo' height={{lg:'55vh', md: '35vh', base: '40vh', xl :'38vh', '2xl': '32vh'}} display={'flex'} alignItems={'flex-start'} gap={'3rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Text fontSize={'20px'}>To'ldirish element tarkibi atrofida, har qanday belgilangan chegaralar ichida bo'sh joy <br /> yaratish uchun ishlatiladi.</Text>
                <Box w={{md: '100%', '2xl': '874px',lg: '100%', base: '100%'}} h={'170px'} border={'1px solid #008000'}>
                        <Text fontSize={'20px'} padding={'70px'}>Ushbu element 70px hajmga ega.</Text>
                </Box>
            </Box>
            <Divider mt={{md:'20px', base: '220px'}} />

            <Box className='padding' h={{md:'32vh', lg: '50vh', xl: '23vh'}} pl={{base: '20px' , md: '450px'}} pt={4} display={'flex'} flexDirection={'column'} gap={'10px'}>
                <Heading fontSize={{base: '30px', md: '50px'}}>CSS Padding</Heading>
                <Text fontSize={'20px'}>CSS to'ldirish xususiyatlari har qanday belgilangan chegaralar ichida element tarkibi <br /> atrofida bo'sh joy yaratish uchun ishlatiladi.</Text>
                <Text fontSize={'20px'}>CSS yordamida siz to'ldirishni to'liq boshqarishingiz mumkin. Elementning har bir tomoni (yuqori, <br /> o'ng, pastki va chap) uchun to'ldirishni o'rnatish uchun xususiyatlar mavjud.</Text>
            </Box>
            <Divider mt={{md:'20px', base: '130px'}} />





            {/* 1 */}
            
            
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>Padding - Individual Tomonlar</Heading>
                <Text fontSize={'25px'}>CSS elementning har bir tomoni uchun to'ldirishni belgilash uchun xususiyatlarga ega:</Text>
                <ul className='ull'>
                    <li>padding-top</li>
                    <li>padding-right</li>
                    <li>padding-botom</li>
                    <li>padding-left</li>
                </ul>
                <Text>Barcha to'ldirish xususiyatlari quyidagi qiymatlarga ega bo'lishi mumkin:</Text>
                <ul className='ull'>
                    <li>length - px, pt, sm va hokazolarda to'ldirishni belgilaydi</li>
                    <li>% - o'z ichiga olgan element kengligining % da to'ldirishni belgilaydi</li>
                    <li>inherit  - to'ldirish asosiy elementdan meros bo'lishi kerakligini bildiradi</li>
                </ul>
                <Text fontSize={'20px'}>Eslatma: Salbiy qiymatlarga ruxsat berilmaydi.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{xl:'400px',lg: '480px', md: '560px', base: '440px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}> <span className='red'>{`<div>`}</span> elementining barcha to'rt tomoni uchun turli xil to'ldirishni o'rnating:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'210px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>div{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>margin-top:</span><span className='yellow'>50px;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>margin-bottom</span><span className='yellow'>30px;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>margin-right</span><span className='yellow'>50px;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>margin-left</span><span className='yellow'>80px;</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`div { padding-top: 50px;  padding-right: 30px; padding-bottom: 50px;  margin-left: 80px;}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />



            {/* 2 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>Padding - Shorthand Xususiyati</Heading>
                  <Text fontSize={'20px'}>Kodni qisqartirish uchun barcha to'ldirish xususiyatlarini bitta xususiyatda ko'rsatish mumkin.</Text>
                <Text fontSize={'25px'}>To'ldirish xususiyati quyidagi individual to'ldirish xususiyatlari uchun qisqartma xususiyatdir:</Text>
                <ul className='ull'>
                    <li>padding-top</li>
                    <li>padding-right</li>
                    <li>padding-botom</li>
                    <li>padding-left</li>
                </ul>
                <Text fontSize={'20px'}>Shunday qilib, bu qanday ishlaydi:</Text>
                <Text fontSize={'20px'}>Agar padding xususiyati to'rtta qiymatga ega bo'lsa:</Text>
                <Text fontSize={'20px'} display={'flex'} pl={'5px'} alignItems={'center'} gap={'10px'} fontWeight={'500'}><Text w={'8px'} h={'8px'} rounded={'50%'} bg={'rgba(217, 217, 217, 1)'}></Text>padding: 25px 50px 75px 100px;</Text>
                <ul style={{paddingLeft: '60px', fontSize: '20px'}}>
                    <li>top padding 25px</li>
                    <li>right padding 50px</li>
                    <li>bottom padding 75px</li>
                    <li>left padding 100px</li>
                </ul>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{xl:'350px',lg:'400px', md: '470px', base: '350px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Padding stenografiya xususiyatidan to'rtta qiymat bilan foydalaning:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>div{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>padding:</span><span className='yellow'>25px 50px 75px 100px;</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`div {padding: 25px 50px 75px 100px; }`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'20px'}>Agar padding xususiyati uchta qiymatga ega bo'lsa:</Text>
                <Text fontSize={'20px'} display={'flex'} pl={'5px'} alignItems={'center'} gap={'10px'} fontWeight={'500'}><Text w={'8px'} h={'8px'} rounded={'50%'} bg={'rgba(217, 217, 217, 1)'}></Text>padding: 25px 50px 75px;</Text>
                <ul style={{paddingLeft: '60px', fontSize: '20px'}}>
                    <li>top padding 25px</li>
                    <li>right left padding 50px</li>
                    <li>bottom padding is 75px</li>
                </ul>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{xl:'350px',lg: '400', md: '470px', base: '350px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Padding stenografiya xususiyatidan uchta qiymat bilan foydalaning:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>div{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>padding:</span><span className='yellow'>25px 50px 75px;</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`div {padding: 25px 50px 75px; }`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text>Agar margin xususiyati ikki qiymatga ega bo'lsa:</Text>
                <Text fontSize={'20px'} display={'flex'} pl={'5px'} alignItems={'center'} gap={'10px'} fontWeight={'500'}><Text w={'8px'} h={'8px'} rounded={'50%'} bg={'rgba(217, 217, 217, 1)'}></Text>padding: 25px 50px</Text>
                <ul style={{paddingLeft: '60px', fontSize: '20px'}}>
                    <li>top va bottom padding lari 25px</li>
                    <li>right va left padding lari  50px</li>
                </ul>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{xl:'350px',lg: '400', md: '480px', base: '350px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Padding stenografiya xususiyatidan ikkita qiymat bilan foydalaning:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>div{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>padding:</span><span className='yellow'>25px 50px;</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`p {margin: 25px 50px; }`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'20px'}>Agar padding xususiyati bitta qiymatga ega bo'lsa:</Text>
                <Text fontSize={'20px'} display={'flex'} pl={'5px'} alignItems={'center'} gap={'10px'} fontWeight={'500'}><Text w={'8px'} h={'8px'} rounded={'50%'} bg={'rgba(217, 217, 217, 1)'}></Text>padding: 25px</Text>
                <ul style={{paddingLeft: '60px', fontSize: '20px'}}>
                    <li>to'rtta chekkaning hammasi 25px</li>
                </ul>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{xl:'350px',lg: '400px', md: '480px', base: '350px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Padding stenografiya xususiyatidan bitta qiymat bilan foydalaning:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>div{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>padding:</span><span className='yellow'>25px;</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`div {padding: 25px; }`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>Padding va Element Width</Heading>
                  <Text fontSize={'20px'}>CSS width xususiyati elementning kontent maydonining kengligini belgilaydi. Kontent <br /> maydoni - bu elementning to'ldirish, chegara va chetidagi qism (box modeli).</Text>
                  <Text fontSize={'20px'}>Shunday qilib, agar element belgilangan kenglikka ega bo'lsa, ushbu elementga qo'shilgan to'ldirish <br /> elementning umumiy kengligiga qo'shiladi. Bu ko'pincha istalmagan natijadir.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{xl:'420px',lg: '500px', md: '580px', base: '420px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Bu yerda {`<div>`} elementiga 300px kenglik berilgan. Biroq, {`<div>`} elementining haqiqiy kengligi 350px <br /> (300px + 25px chap toʻldirish + 25px oʻng toʻldirish) boʻladi:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'180px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>div{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>width:</span><span className='yellow'>300px;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>padding:</span><span className='yellow'>25px;</span> <br /> {`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`div { width: 300px;  padding: 25px; }`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                
                        <Text>Kenglikni 300px da saqlash uchun, toʻldirish miqdoridan qatʼiy nazar, box-sizing xususiyatidan foydalanishingiz <br />mumkin. Bu elementning haqiqiy kengligini saqlab qolishiga olib keladi; agar siz to'ldirishni oshirsangiz, mavjud <br /> kontent maydoni kamayadi.</Text>
            </Box>



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{xl:'400px',lg: '480px', md: '530px', base: '400px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>To'ldirish miqdoridan qat'i nazar, kengligi 300 pikselda ushlab turish uchun box-sizing xususiyatidan foydalaning:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'180px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>div{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>width:</span><span className='yellow'>300px;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>padding:</span><span className='yellow'>25px;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>box-sizing:</span><span className='yellow'>border-box;</span> <br /> {`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`div { width: 300px;  padding: 25px;     box-sizing: border-box; }`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                

            </Box>
            <Divider mt={'20px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'10vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Barcha CSS Border Xususiyatlari</Heading>

                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} >
                        <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>Property</Td>
                                        <Td>Description</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>padding</Td>
                                        <Td>Bitta deklaratsiyada barcha to'ldirish xususiyatlarini o'rnatish uchun <br /> stenografiya xususiyati</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>padding-bottom</Td>
                                        <Td>Elementning pastki qoplamasini o'rnatadi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>padding-left</Td>
                                        <Td>Elementning chap toʻldirishini oʻrnatadi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>padding-right</Td>
                                        <Td>Elementning to'g'ri to'ldirishini o'rnatadi</Td>
                                    </Tr >
                                    <Tr>
                                        <Td>padding-top</Td>
                                        <Td>Elementning yuqori toʻldirishini oʻrnatadi</Td>
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

export default Css23dars
