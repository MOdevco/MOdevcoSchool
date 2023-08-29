
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

const Css35dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '40px', lg: '50px'}}>CSS Text Spacing</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box className='css35' height={{'2xl':'28vh', md: '25vh',}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Heading fontSize={{base: '30px' , md: '40px', lg :'50px'}}>Text Spacing</Heading>
                <Text fontSize={'20px'}>Ushbu bo'limda siz quyidagi xususiyatlar haqida bilib olasiz:</Text>
                <ul className='ulll'>
                    <li>text-indent</li>
                    <li>letter-spacing</li>
                    <li>line-height</li>
                    <li>word-spacing</li>
                    <li>white-space</li>
                </ul>
            </Box>
            <Divider mt={'20px'} />






            {/* 1 */}
            
            
           
            
            <Box className='css35dars' pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '38vh'}}>
                <Heading fontSize={{base: '30px', md: '50px'}}>Text Indentation</Heading>
                <Text fontSize={'20px'}><span className='red'>Text-indent</span> xossasi matnning birinchi qatorining chekinishini belgilash uchun ishlatiladi:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'300px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>p {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>text-indent:</span> <span className='yellow'>50px;</span> <br /> {`}`}</Text>
                    </Box>
                    <CopyToClipboard text={`p { text-indent: 50px; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            {/* 2 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '42vh'}}>
                <Heading fontSize={{base: '30px', md: '50px'}}>Letter Spacing</Heading>
                <Text fontSize={'20px'}>Harf oralig'i xususiyati matndagi belgilar orasidagi bo'shliqni belgilash uchun ishlatiladi. <br />Quyidagi misol belgilar orasidagi bo'shliqni qanday oshirish yoki kamaytirishni ko'rsatadi:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'400px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'210px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>letter-spacing:</span> <span className='yellow'>5px;</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>h2 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>letter-spacing:</span> <span className='yellow'>-2px;</span> <br /> {`}`}</Text>
                    </Box>
                    <CopyToClipboard text={`h1 { letter-spacing: 5px; }h2 {letter-spacing: -2px; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            {/* 3 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '42vh'}}>
                <Heading fontSize={{base: '30px', md: '50px'}}>Line Height</Heading>
                <Text fontSize={'20px'}><span className='red'>Line-height</span> xususiyati qatorlar orasidagi bo'shliqni belgilash uchun ishlatiladi:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'400px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'205px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>p.small {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>line-height:</span> <span className='yellow'>0.8;</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>p.big {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>line-height:</span> <span className='yellow'>1.8;</span> <br /> {`}`}</Text>
                    </Box>
                    <CopyToClipboard text={`p.small { line-height: 0.8; }p.big {   line-height: 1.8; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            {/* 4 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '42vh'}}>
                <Heading fontSize={{base: '30px', md: '50px'}}>Word Spacing</Heading>
                <Text fontSize={'20px'}>So'z oralig'i xususiyati matndagi so'zlar orasidagi bo'shliqni ko'rsatish uchun ishlatiladi. <br /> Quyidagi misol so'zlar orasidagi bo'shliqni qanday oshirish yoki kamaytirishni ko'rsatadi:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'400px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'205px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>p.one {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>word-spacing:</span> <span className='yellow'>10px;</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>p.two {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>word-spacing:</span> <span className='yellow'>-2px;</span> <br /> {`}`}</Text>
                    </Box>
                    <CopyToClipboard text={`p.one { word-spacing: 10px; }p.two { word-spacing: -2px; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
            {/* 5 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '42vh'}}>
                <Heading fontSize={{base: '30px', md: '50px'}}>White Space</Heading>
                <Text fontSize={'20px'}>White-space xossasi element ichidagi bo'sh joy qanday ishlov berilishini belgilaydi. <br /> Ushbu misol element ichidagi matnni o'rashni qanday o'chirishni ko'rsatadi:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'300px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>p{`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>white-space:</span> <span className='yellow'>nowrap;</span> <br /> {`}`}</Text>
                    </Box>
                    <CopyToClipboard text={`p { white-space: nowrap; }` } onCopy={handleClip} >
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
                                        <Td>letter-spacing</Td>
                                        <Td>Matndagi belgilar orasidagi bo'shliqni belgilaydi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>line-height</Td>
                                        <Td>Chiziq balandligini belgilaydi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>text-indent</Td>
                                        <Td>Matn-blokdagi birinchi qatorning chekinishini belgilaydi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>white-space</Td>
                                        <Td>Element ichidagi bo'sh joyni qanday ishlatishni belgilaydi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>word-spacing</Td>
                                        <Td>Matndagi so'zlar orasidagi bo'shliqni belgilaydi</Td>
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

export default Css35dars
