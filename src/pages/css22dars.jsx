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

const Css22dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Margin Collapse</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box height={{md:'8vh', base: '16vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>Border-radius xususiyati elementga yumaloq chegaralar qo'shish uchun ishlatiladi:</Text>
            </Box>
            <Divider mt={'20px'} />

            <Box className='margin' h={{md:'29vh', base: '50vh',lg: '45vh', xl: '28vh', '2xl': '24vh'}} pl={{base: '20px' , md: '450px'}} pt={4} display={'flex'} flexDirection={'column'} gap={'10px'}>
                <Heading fontSize={{base: '30px', md: '50px'}}>Margin Collapse</Heading>
                <Text fontSize={'20px'}>Elementlarning yuqori va pastki chetlari ba'zan ikkita chekkaning eng kattasiga teng <br /> bo'lgan bitta chekkaga yig'iladi.</Text>
                <Text fontSize={'20px'}>Bu chap va o'ng chekkalarda sodir bo'lmaydi! Faqat yuqori va pastki chegaralar! <br /> Quyidagi misolga qarang:</Text>
            </Box>
            <Divider mt={'20px'} />





            {/* 1 */}
            
            
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'500px', lg: '440px', base: '440px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Marjaning qulashi namoyishi:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'210px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>h1{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>margin:</span> <span className='yellow'>0 0 50px 0;</span><br />{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>h2{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>margin:</span> <span className='yellow'>20px 0 0 0;</span><br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`h1 {   margin: 0 0 50px 0; }h2 {   margin: 20px 0 0 0; }`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text>Yuqoridagi misolda {`<h1>`} elementining pastki cheti 50px, {`<h2>`} elementi esa 20px ga oʻrnatilgan yuqori chetiga ega.</Text>
                <Text>Sog'lom fikr {`<h1>`} va {`<h2>`} orasidagi vertikal chegara jami 70px (50px + 20px) bo'lishini taxmin qiladi. Ammo <br /> marjaning yiqilishi tufayli haqiqiy chegara 50px ni tashkil qiladi.</Text>
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

export default Css22dars
