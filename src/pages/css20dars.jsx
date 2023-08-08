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
import CssAccordion from '../components/cssAccordion/cssAccordion'
import BorderProps from '../components/borderProps/borderProps'

const Css20dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Rounded Borders</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />





            {/* 1 */}
    
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>CSS Rounded Borders</Heading>
                <Text fontSize={'25px'}>Border-radius xususiyati elementga yumaloq chegaralar qo'shish uchun ishlatiladi:</Text>
                <BorderProps borderColor={'red'} text={'Normal border'} />
                <BorderProps borderColor={'red'} rounded={'6px'} text={'Round border'} />
                <BorderProps borderColor={'red'} rounded={'11px'} text={'Rounder border'} />
                <BorderProps borderColor={'red'} rounded={'16px'} text={'Roundest border'} />

                <Box  width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'340px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'150px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border:</span><span className='yellow'>2px solid red;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>border-radius:</span><span className='yellow'>5px;</span> <br />{`}`}</Text>

                      
                        
                    </Box>
                    <CopyToClipboard text={`p {border: 2px solid red; border-radius: : 5px;}`} onCopy={handleClip} >
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
                                        <Td>border</Td>
                                        <Td>Barcha chegara xususiyatlarini bitta deklaratsiyada o'rnatadi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>border-bottom</Td>
                                        <Td>Barcha pastki chegara xususiyatlarini bitta deklaratsiyada o'rnatadi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>border-bottom-color</Td>
                                        <Td>Pastki chegara rangini o'rnatadi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>border-bottom-width</Td>
                                        <Td>Pastki chegaraning kengligini o'rnatadi</Td>
                                    </Tr >
                                    <Tr>
                                        <Td>border-color</Td>
                                        <Td>To'rtta chegara rangini o'rnatadi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>border-left</Td>
                                        <Td>Barcha chap chegara xususiyatlarini bitta deklaratsiyada o'rnatadi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>border-left-color</Td>
                                        <Td>Chap chegara rangini o'rnatadi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>border-left-style</Td>
                                        <Td>Chap chegaraning uslubini o'rnatadi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>border-left-width</Td>
                                        <Td>Chap chegaraning kengligini o'rnatadi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>border-radius</Td>
                                        <Td>Dumaloq burchaklar uchun to'rtta chegara-*-radius xususiyatlarini o'rnatadi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>border-right</Td>
                                        <Td>Barcha to'g'ri chegara xususiyatlarini bitta deklaratsiyada o'rnatadi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>border-bottom-color</Td>
                                        <Td>O'ng chegara rangini o'rnatadi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>border-right-style</Td>
                                        <Td>O'ng chegara uslubini o'rnatadi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>border-right-width</Td>
                                        <Td>O'ng chegaraning kengligini o'rnatadi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>border-style</Td>
                                        <Td>To'rt chegaraning uslubini o'rnatadi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>border-top</Td>
                                        <Td>Barcha yuqori chegara xususiyatlarini bitta deklaratsiyada o'rnatadi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>border-top-color</Td>
                                        <Td>Yuqori chegara rangini o'rnatadi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>border-top-style</Td>
                                        <Td>Yuqori chegara uslubini o'rnatadi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>border-top-width</Td>
                                        <Td>Yuqori chegaraning kengligini o'rnatadi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>border-width</Td>
                                        <Td>To'rtta chegaraning kengligini o'rnatadi</Td>
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

export default Css20dars
