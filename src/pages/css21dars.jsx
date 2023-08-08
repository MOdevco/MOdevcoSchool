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
import OpacityCard from '../components/opacityCard/opacityCard'
import CssAccordion from '../components/cssAccordion/cssAccordion'

const Css21dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Margins</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box height={'8vh'} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>Cheklar har qanday belgilangan chegaralardan tashqarida elementlar atrofida bo'sh joy yaratish uchun ishlatiladi.</Text>
            </Box>
            <Divider mt={'20px'} />


            <Box minH={'8vh'} pt={'10px'} pl={{base: '20px' , md: '450px'}} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                <Box w={{base: '90%', md: '874px'}} h={'41px'} border={'1px'} borderColor={'rgba(0, 128, 0, 1)'}>
                <Text fontSize={'20px'} pl={{md:'10px', base: '10px'}} pt={'2px'}>Bu element 70px chetiga ega.</Text>
            </Box>
                </Box>           
            <Divider mt={'20px'} />

            <Box h={'24vh'} pl={{base: '20px' , md: '450px'}} pt={4} display={'flex'} flexDirection={'column'} gap={'10px'}>
                <Heading fontSize={{base: '30px', md: '50px'}}>CSS Margins</Heading>
                <Text fontSize={'20px'}>CSS margin xususiyatlari har qanday belgilangan chegaralardan tashqarida elementlar atrofida bo'sh joy yaratish <br /> uchun ishlatiladi.</Text>
                <Text fontSize={'20px'}>CSS yordamida siz chekkalarni to'liq nazorat qilasiz. Elementning har bir tomoni (yuqori, o'ng, pastki <br /> va chap) uchun chekka o'rnatish xususiyatlari mavjud.</Text>
            </Box>
            <Divider mt={'20px'} />





            {/* 1 */}
            
            
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>Margin - Individual Tomonlar</Heading>
                <Text fontSize={'25px'}>CSS elementning har bir tomoni uchun chegarani belgilash uchun xususiyatlarga ega:</Text>
                <ul className='ull'>
                    <li>margin-top</li>
                    <li>margin-right</li>
                    <li>margin-botom</li>
                    <li>margin-left</li>
                </ul>
                <Text>Barcha marj xususiyatlari quyidagi qiymatlarga ega bo'lishi mumkin:</Text>
                <ul className='ull'>
                    <li>auto - brauzer chegarani hisoblab chiqadi</li>
                    <li>length - px, pt, sm va hokazolarda chegarani belgilaydi.</li>
                    <li>% - o'z ichiga olgan element kengligining % da chetini belgilaydi</li>
                    <li>inherit - chekka asosiy elementdan meros bo'lishi kerakligini bildiradi</li>
                </ul>
                <Text fontSize={'20px'}>Maslahat: Salbiy qiymatlarga ruxsat beriladi.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'440px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>{`<p>`} elementining barcha to'rt tomoni uchun turli chekkalarni o'rnating:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'210px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>margin-top:</span><span className='yellow'>100px;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>margin-bottom</span><span className='yellow'>100px;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>margin-right</span><span className='yellow'>150px;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>margin-left</span><span className='yellow'>80px;</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`p { margin-top: 100px;  margin-bottom: 100px; margin-right: 150px;  margin-left: 80px;}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />



            {/* 2 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>Margin - Shorthand Xususiyati</Heading>
                  <Text fontSize={'20px'}>Kodni qisqartirish uchun barcha chegara xususiyatlarini bitta xususiyatda ko'rsatish mumkin.</Text>
                <Text fontSize={'25px'}>Margin xususiyati quyidagi individual marja xususiyatlari uchun stenografiya xususiyatidir:</Text>
                <ul className='ull'>
                    <li>margin-top</li>
                    <li>margin-right</li>
                    <li>margin-botom</li>
                    <li>margin-left</li>
                </ul>
                <Text fontSize={'20px'}>Shunday qilib, bu qanday ishlaydi:</Text>
                <Text fontSize={'20px'}>Agar margin xususiyati to'rtta qiymatga ega bo'lsa:</Text>
                <Text fontSize={'20px'} display={'flex'} pl={'5px'} alignItems={'center'} gap={'10px'} fontWeight={'500'}><Text w={'8px'} h={'8px'} rounded={'50%'} bg={'rgba(217, 217, 217, 1)'}></Text>margin: 25px 50px 75px 100px;</Text>
                <ul style={{paddingLeft: '60px', fontSize: '20px'}}>
                    <li>top margin 25px</li>
                    <li>right margin 50px</li>
                    <li>bottom margin 75px</li>
                    <li>left margin 100px</li>
                </ul>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'350px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Sahifa uchun fon rasmini o'rnating:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>margin:</span><span className='yellow'>25px 50px 75px 100px;</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`p {margin: 25px 50px 75px 100px; }`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'20px'}>Agar margin xususiyati uchta qiymatga ega bo'lsa:</Text>
                <Text fontSize={'20px'} display={'flex'} pl={'5px'} alignItems={'center'} gap={'10px'} fontWeight={'500'}><Text w={'8px'} h={'8px'} rounded={'50%'} bg={'rgba(217, 217, 217, 1)'}></Text>margin: 25px 50px 75px;</Text>
                <ul style={{paddingLeft: '60px', fontSize: '20px'}}>
                    <li>top margin 25px</li>
                    <li>right left margin 50px</li>
                    <li>bottom margin is 75px</li>
                </ul>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'350px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Margin stenografiya xususiyatidan uchta qiymat bilan foydalaning:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>margin:</span><span className='yellow'>25px 50px 75px;</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`p {margin: 25px 50px 75px; }`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text>Agar margin xususiyati ikkita qiymatga ega bo'lsa:</Text>
                <Text fontSize={'20px'} display={'flex'} pl={'5px'} alignItems={'center'} gap={'10px'} fontWeight={'500'}><Text w={'8px'} h={'8px'} rounded={'50%'} bg={'rgba(217, 217, 217, 1)'}></Text>margin: 25px 50px</Text>
                <ul style={{paddingLeft: '60px', fontSize: '20px'}}>
                    <li>top va bottom margin lari 25px</li>
                    <li>right va left margin lari  50px</li>
                </ul>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'350px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Margin stenografiya xususiyatidan ikkita qiymat bilan foydalaning:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>margin:</span><span className='yellow'>25px 50px;</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`p {margin: 25px 50px; }`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'20px'}>Agar margin xususiyati bitta qiymatga ega bo'lsa:</Text>
                <Text fontSize={'20px'} display={'flex'} pl={'5px'} alignItems={'center'} gap={'10px'} fontWeight={'500'}><Text w={'8px'} h={'8px'} rounded={'50%'} bg={'rgba(217, 217, 217, 1)'}></Text>margin: 25px</Text>
                <ul style={{paddingLeft: '60px', fontSize: '20px'}}>
                    <li>to'rtta chekkaning hammasi 25px</li>
                </ul>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'350px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Margin stenografiya xususiyatidan bitta qiymat bilan foydalaning:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>margin:</span><span className='yellow'>25px;</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`p {margin: 25px; }`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>Auto Qiymat</Heading>
                  <Text fontSize={'20px'}>Elementni konteyner ichida gorizontal markazlashtirish uchun margin xususiyatini <br /> avtomatik qilib sozlashingiz mumkin.</Text>
                  <Text fontSize={'20px'}>Keyin element belgilangan kenglikni egallaydi va qolgan bo'sh joy chap va o'ng chekkalar orasida <br /> teng ravishda bo'linadi.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'420px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Margin: auto dan foidalaning</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'180px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>div{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>width:</span><span className='yellow'>300px;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>margin:</span><span className='yellow'>auto;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>border:</span><span className='yellow'>1px solid red;</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`div { width: 300px;  margin: auto;  border: 1px solid red; }`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                

            </Box>
            <Divider mt={'20px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>Inherit Qiymati</Heading>
                  <Text fontSize={'20px'}>Bu misol <span className='purple'>{`<p`}</span> <span className='red'>class=</span> <span className='yellow'>"ex1"</span> {`>`} elementining chap chetini asosiy elementdan {`(<div>)`} meros qilib <br /> olish imkonini beradi:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'500px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Margin: auto dan foidalaning</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>div{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border:</span><span className='yellow'>1px solid red;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>margin-left:</span><span className='yellow'>auto;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>border:</span><span className='yellow'>1px solid red;</span> <br />{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p.ex1{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>margin-left:</span><span className='yellow'>inerhit;</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`div {border: px solid red; margin-left: auto; }p.ex1 {   margin-left: inherit; }`} onCopy={handleClip} >
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
                                        <Td>margin</Td>
                                        <Td>Bitta deklaratsiyada barcha marj xususiyatlarini o'rnatish uchun <br /> stenografiya xususiyati</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>margin-bottom</Td>
                                        <Td>Elementning pastki chetini o'rnatadi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>margin-left</Td>
                                        <Td>Elementning chap chetini o'rnatadi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>margin-left</Td>
                                        <Td>Elementning o'ng chetini o'rnatadi</Td>
                                    </Tr >
                                    <Tr>
                                        <Td>margin-top</Td>
                                        <Td>Elementning yuqori chetini o'rnatadi</Td>
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

export default Css21dars
