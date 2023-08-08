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

const Css19dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Shorthand Border Xususiyati</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />





            {/* 1 */}
    
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>CSS Shorthand - Border Xususiyati</Heading>
                <Text fontSize={'25px'}>Oldingi sahifada ko'rganingizdek, chegaralar bilan ishlashda ko'plab xususiyatlarni hisobga olish kerak.</Text>
                <Text fontSize={'20px'}>Kodni qisqartirish uchun barcha individual chegara xususiyatlarini bitta xususiyatda ko'rsatish ham mumkin.</Text>
                <Text fontSize={'20px'}>Kodni qisqartirish uchun barcha individual chegara xususiyatlarini bitta xususiyatda ko'rsatish ham mumkin.</Text>
                <ul className='ull'>
                    <li>border-width</li>
                    <li>border-style (majburiy)</li>
                    <li>border-color</li>
                </ul>

                <Box  width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'410px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border:</span><span className='yellow'>5px solid red;</span> <br />{`}`}</Text>

                      
                        
                    </Box>
                    <Text fontSize={'20px'}>Natija:</Text>
                    <Box width={'90%'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'}  overflow={'scroll'}  borderColor={'#7FFFD4'} height={{md:'90px', base: '80px'}} bg={'#0A1624'} pt={'10px'} gap={{base: '15px', md: '1rem'}}>
                        <BorderProps borderStyle={'solid'} borderw={'5px'} text={'Ba`zi matn'} borderColor={'red'}  />
                    </Box>

                </Box>
                <Text fontSize={'20px'}>Siz faqat bir tomon uchun barcha individual chegara xususiyatlarini belgilashingiz mumkin:</Text>


                <Box  width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'410px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-left:</span><span className='yellow'>6px solid red;</span> <br />{`}`}</Text>

                      
                        
                    </Box>
                    <Text fontSize={'20px'}>Natija:</Text>
                    <Box width={'90%'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'}  overflow={'scroll'}  borderColor={'#7FFFD4'} height={{md:'90px', base: '80px'}} bg={'#0A1624'} pt={'10px'} gap={{base: '15px', md: '1rem'}}>
                        <BorderProps borderStyle={'solid'} borderw={'6px'} borderTop={'none'} borderRight={'none'} bottom={'none'} text={'Ba`zi matn'} borderColor={'red'}  />
                    </Box>

                </Box>



                <Box  width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'410px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-bottom:</span><span className='yellow'>6px solid red;</span> <br />{`}`}</Text>

                      
                        
                    </Box>
                    <Text fontSize={'20px'}>Natija:</Text>
                    <Box width={'90%'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'}  overflow={'scroll'}  borderColor={'#7FFFD4'} height={{md:'90px', base: '80px'}} bg={'#0A1624'} pt={'10px'} gap={{base: '15px', md: '1rem'}}>
                        <BorderProps borderStyle={'solid'} borderw={'6px'} borderTop={'none'} borderRight={'none'} borderLeft={'none'} text={'Ba`zi matn'} borderColor={'red'}  />
                    </Box>

                </Box>
            </Box>
            <Divider mt={'20px'} />





            

            </Box>
    </Box>
  )
}

export default Css19dars
