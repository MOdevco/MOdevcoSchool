import { Box , Flex , Heading , Button , Text , Image , Input , FormLabel, HStack, Radio, RadioGroup, Grid} from '@chakra-ui/react'
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
import SidebarCss from '../components/sidebarCss/sidebarCss'
import CssAccordion from '../components/cssAccordion/cssAccordion'

const Css14dars = () => {
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
                    <SidebarCss title={'CSS DARSLARI'} elementName={'Bosh sahifa'}/>
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Background Shorthand</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />





            {/* 1 */}
    
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>CSS background - Shorthand Xususiyati</Heading>
                <Text fontSize={'25px'}>Kodni qisqartirish uchun barcha fon xususiyatlarini bitta xususiyatda ko'rsatish ham <br /> mumkin. Bu stenografiya xususiyati deb ataladi. <br /> Yozish o'rniga:</Text>
                

                <Box  width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'400px', lg: '450px', md: '530px', xl: '440px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Orqa fon tasvirini tuzatish kerakligini belgilang:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'210px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>body {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>background-color:</span><span className='yellow'>#ffffff;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>background-image:</span><span className='yellow'>url("img_tree.png");</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>background-positon:</span><span className='yellow'>right-top;</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>background-repeat:</span><span className='yellow'>no-repeat;</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`body { background-color: #ffffff;  background-image: : url("img_tree.png"); background-repeat: : no-repeat; background-position: : right top;}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'20px'}>Qisqartirilgan xususiyat fonidan foydalanishingiz mumkin:</Text>



                <Box mt={'20px'} width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'340px', md: '500px', lg: '340px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Orqa fon tasviri sahifaning qolgan qismi bilan aylanishi kerakligini belgilang:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>body {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>background:</span><span className='yellow'>#ffffff;</span> <span style={{paddingLeft: '20px'}} className='red'>background:</span><span className='yellow'>url("img_tree.png")</span> <span className='yellow'>no-repeat</span> <span>right top;</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`body {background: #ffffff url("img_tree.png") no-repeat right top; }`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>


                <Text fontSize={'20px'}>Qisqartirilgan xususiyatdan foydalanganda xususiyat qiymatlarining tartibi quyidagicha:</Text>
                <ul className='ulll' >
                    <li>background-color</li>
                    <li>background-image</li>
                    <li>background-repeat</li>
                    <li>background-attachment</li>
                    <li>background-position</li>
                </ul>
                <Text>Boshqalari shu tartibda bo'lsa, mulk qiymatlaridan biri etishmayotganligi muhim emas. E'tibor bering, <br /> biz yuqoridagi misollarda fon-ilova xususiyatidan foydalanmaymiz, chunki u qiymatga ega emas.</Text>
            </Box>
            <Divider mt={'20px'} />






            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'10vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Barcha CSS Background Xususiyatlari</Heading>

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
                                        <Td>background</Td>
                                        <Td>Barcha fon xususiyatlarini bitta deklaratsiyada o'rnatadi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>background-attachment</Td>
                                        <Td>Fon rasmi oʻzgarmasligini yoki sahifaning qolgan qismi bilan <br /> aylantirilishini oʻrnatadi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>background-clip</Td>
                                        <Td>Fonning bo'yash maydonini belgilaydi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>background-color</Td>
                                        <Td>Elementning fon rangini o'rnatadi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>background-image</Td>
                                        <Td>Element uchun fon tasvirini o'rnatadi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>background-origin</Td>
                                        <Td>Fon rasm(lar)i qayerda joylashganligini belgilaydi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>background-position</Td>
                                        <Td>Fon rasmining boshlang'ich pozitsiyasini o'rnatadi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>background-repeat</Td>
                                        <Td>Fon tasviri qanday takrorlanishini belgilaydi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>background-size</Td>
                                        <Td>Fon rasm(lar)ining hajmini belgilaydi</Td>
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

export default Css14dars
