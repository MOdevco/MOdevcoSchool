
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

const Css33dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Text Decoration</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box className='css33'  height={{lg:'50vh',xl: '35vh', md: '24vh','2xl': '28vh'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Text Decoration</Heading>
                <Text fontSize={'20px'}>Ushbu bo'limda siz quyidagi xususiyatlar haqida bilib olasiz:</Text>

                <ul className='ulll'>
                    <li>text-decoration-line</li>
                    <li>text-decoration-color</li>
                    <li>text-decoration-style</li>
                    <li>text-decoration-thickness</li>
                    <li>text-decoration</li>
                </ul>
            </Box>
            <Divider mt={'20px'} />






            {/* 1 */}
            
            
           
            
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', base: '50vh', md: '80vh'}}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Matnga Decoration Line di Qo'shish</Heading>
                <Text fontSize={'20px'}>Matnga bezak chizig'ini qo'shish uchun text-decoration-line xususiyatidan foydalaniladi.</Text>
                <Text fontSize={'20px'}>Maslahat: Matn ustidagi va ostidagi satrlarni koʻrsatish uchun bir nechta qiymatlarni birlashtira <br /> olasiz, masalan, ustiga chizish va tagiga chizish.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'580px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'390px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>overline;</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>h2 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>line-through;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>h3 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>underline;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>h3 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>overline underline;</span> <br /> {`}`}</Text> 

                     
                        
                    </Box>
                    <CopyToClipboard text={`h1 { text-decoration-line: overline; }h2 { text-decoration-line: line-through; }h3 { text-decoration-line: underline; }p { text-decoration-line: overline underline; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'20px'}>Eslatma: havola bo'lmagan matnning tagiga chizish tavsiya etilmaydi, chunki bu ko'pincha o'quvchini <br />chalkashtirib yuboradi.</Text>
            </Box>
            <Divider mt={'20px'} />


            {/* 2 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', base: '50vh', md: '80vh'}}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Decoration Line Uchun Rangni Belgilang</Heading>
                <Text fontSize={'20px'}>Bezatish chizig'ining rangini belgilash uchun matn-dekoratsiya-rang xususiyatidan foydalaniladi.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'700px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'510px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>overline;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-color:</span> <span className='yellow'>red;</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>h2 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>line-through;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-color:</span> <span className='yellow'>blue;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>h3 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>underline;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-color:</span> <span className='yellow'>green;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>p {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>overline underline;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-color:</span> <span className='yellow'>purple;</span> <br /> {`}`}</Text> 

                     
                        
                    </Box>
                    <CopyToClipboard text={`h1 { text-decoration-line: overline;  text-decoration-color: red; }h2 { text-decoration-line: line-through;  text-decoration-color: blue; }h3 { text-decoration-line: underline;  text-decoration-color: green; }p {text-decoration-line: overline underline;text-decoration-color: purple;  }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'20px'}>Eslatma: havola bo'lmagan matnning tagiga chizish tavsiya etilmaydi, chunki bu ko'pincha o'quvchini <br />chalkashtirib yuboradi.</Text>
            </Box>
            <Divider mt={'20px'} />

            {/* 3 */}

            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', base: '50vh', md: '80vh'}}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Decoration Line Uchun Style di Belgilang</Heading>
                <Text fontSize={'20px'}>Matn-dekoration-style xossasi bezak chizig'ining uslubini o'rnatish uchun ishlatiladi.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'980px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'780px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>overline;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-style:</span> <span className='yellow'>solid;</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>h2 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>line-through;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-style:</span> <span className='yellow'>double;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>h3 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>underline;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-style:</span> <span className='yellow'>dotted;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>p.ex1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>overline underline;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-style:</span> <span className='yellow'>dashed;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>p.ex2 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>overline underline;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-style:</span> <span className='yellow'>wavy;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>p.ex3 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>overline underline;</span> <br />  <span style={{paddingLeft: '20px'}} className='red'>text-decoration-color:</span> <span className='yellow'>red;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-style:</span> <span className='yellow'>wavy;</span> <br /> {`}`}</Text> 

                     
                        
                    </Box>
                    <CopyToClipboard text={`h1 { text-decoration-line: underline;  text-decoration-style: solid;  }h2 { text-decoration-line: underline;  text-decoration-style: double;  }h3 { text-decoration-line: underline;  text-decoration-style: dotted;  }p.ex1 { text-decoration-line: underline; text-decoration-style: dashed;   }p.ex2 { text-decoration-line: underline; text-decoration-style: wavy;  }p.ex3 { text-decoration-line: underline; text-decoration-color: red; text-decoration-style: wavy;  }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            {/* 4 */}

            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', base: '50vh', md: '80vh'}}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Decoration Line Uchun Thickness di Belgilang</Heading>
                <Text fontSize={'20px'}>Matn-dekoratsiya-qalinligi xossasi bezak chizig'ining qalinligini o'rnatish uchun ishlatiladi.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'750px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'570px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>overline;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-thickness:</span> <span className='yellow'>auto;</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>h2 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>line-through;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-thickness:</span> <span className='yellow'>5px;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>h3 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>underline;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-thickness:</span> <span className='yellow'>25%;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>p.ex1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>overline underline;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-color:</span> <span className='yellow'>red;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-style:</span> <span className='yellow'>double;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-thickness:</span> <span className='yellow'>5px;</span> <br /> {`}`}</Text> 
                     
                        
                    </Box>
                    <CopyToClipboard text={`h1 { text-decoration-line: underline;  text-decoration-thickness: auto; }h2 { text-decoration-line: underline;  text-decoration-thickness: 5px;  }h3 { text-decoration-line: underline;  text-decoration-thickness: 25%; }p. { text-decoration-line: underline; text-decoration-color: red; text-decoration-style: double;  text-decoration-thickness: 5px; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            {/* 5 */}

            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', base: '50vh', md: '80vh'}}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Shorthand Xususiyati</Heading>
                <Text fontSize={'20px'}>Matn-dekoratsiya xususiyati quyidagilar uchun stenografiya xususiyati hisoblanadi:</Text>
                <ul className='ulll'>
                    <li>text-decoration-line (majburiy)</li>
                    <li>text-decoration-color (ihtiyoriy)</li>
                    <li>text-decoration-style  (ihtiyoriy)</li>
                    <li>text-decoration-thickness (ihtiyoriy)</li>
                </ul>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'580px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'390px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>underline red;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>h2 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>underline red double;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>h3 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>underline red double;</span> <br /> {`}`}</Text> 
                     <Text fontSize={'20px'} className='purple'>p {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-line:</span> <span className='yellow'>underline red double 5px;</span> <br /> {`}`}</Text> 
                     
                        
                    </Box>
                    <CopyToClipboard text={`h1 {text-decoration-line: underline; }h2 { text-decoration-line: underline red; }h3 {   text-decoration-line: underline red double; }p. {text-decoration-line: underline red double 5px};` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />


            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Kichik maslahat</Heading>
                <Text fontSize={'20px'}>HTML-dagi barcha havolalar sukut bo'yicha chizilgan. Ba'zan havolalar tagiga chizilmagan tarzda yaratilganligini <br /> ko'rasiz. Matn-bezatish: yo'q; havolalardan pastki chiziqni olib tashlash uchun ishlatiladi, masalan:</Text>
                <ul className='ulll'>
                    <li>text-decoration-line (majburiy)</li>
                    <li>text-decoration-color (ihtiyoriy)</li>
                    <li>text-decoration-style  (ihtiyoriy)</li>
                    <li>text-decoration-thickness (ihtiyoriy)</li>
                </ul>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'330px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'150px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>a {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration:</span> <span className='yellow'>none;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>text-decoration-thickness:</span> <span className='yellow'>auto;</span> <br /> {`}`}</Text>  
                     
                        
                    </Box>
                    <CopyToClipboard text={`a {text-decoration: none; text-decoration-thickness: auto; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
                

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'10vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Barcha CSS Text-decoration Xususiyatlari</Heading>

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
                                        <Td>text-decoration</Td>
                                        <Td>Bitta deklaratsiyada barcha matnni bezash xususiyatlarini o'rnatadi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>text-decoration-color</Td>
                                        <Td>Matn-bezatish rangini belgilaydi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>text-decoration-line</Td>
                                        <Td>Foydalaniladigan matnni bezash turini belgilaydi (tagini chizish, ustiga <br /> chizish va h.k.)</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>text-decoration-style</Td>
                                        <Td>Matnni bezash uslubini belgilaydi (qattiq, nuqta va boshqalar).</Td>
                                    </Tr >
                                    <Tr>
                                        <Td>text-decoration-thickness</Td>
                                        <Td>Matnni bezash chizig'ining qalinligini belgilaydi</Td>
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

export default Css33dars
