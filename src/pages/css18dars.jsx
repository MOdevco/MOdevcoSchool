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

const Css18dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Border Tomonlari</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />





            {/* 1 */}
    
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>CSS Borderi - Individual Tomonlar</Heading>
                <Text fontSize={'20px'}>Oldingi sahifalardagi misollardan siz har bir tomon uchun har xil chegara belgilash mumkinligini ko'rdingiz.</Text>
                <Text fontSize={'20px'}>CSS-da chegaralarning har birini belgilash uchun xususiyatlar ham mavjud (yuqori, o'ng, pastki va chap):</Text>

                <Box  width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'520px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'220px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-top-style:</span><span className='yellow'>dotted;</span> <br />  <span style={{paddingLeft:'20px'}} className='red'>border-right-color:</span><span className='yellow'>solid;</span> <br /> <span style={{paddingLeft:'20px'}} className='red'>border-bottom-color:</span> <span className='yellow'>dotted;</span><br /> <span style={{paddingLeft:'20px'}} className='red'>border-left-color:</span> <span className='yellow'>solid;</span>  <br />{`}`}</Text>

                      
                        
                    </Box>
                    <Text fontSize={'20px'}>Natija:</Text>
                    <Box width={'90%'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'}  overflow={'scroll'}  borderColor={'#7FFFD4'} height={'90px'} bg={'#0A1624'} pt={'10px'} gap={{base: '15px', md: '1rem'}}>
                        <BorderProps borderStyle={'dotted solid'} borderw={'5px'} text={'Turli xil chegara uslublari'} borderColor={'white'}  />
                    </Box>
                </Box>
            </Box>


            {/* 2 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Text fontSize={'20px'}>Yuqoridagi misol xuddi shunday natijani beradi:.</Text>

                <Box  width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'290px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'110px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span> <span className='yellow'>dotted solid;</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`p {border-style: dotted solid; }`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>

                </Box>
            </Box>

            {/* 3 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} minHeight={'50vh'}>
                 <Text fontSize={'20px'}>Shunday qilib, bu qanday ishlaydi:</Text>
                <Text fontSize={'20px'}>Agar chegara uslubidagi xususiyat to'rtta qiymatga ega bo'lsa:</Text>
                <Text fontSize={'20px'} display={'flex'} pl={'5px'} alignItems={'center'} gap={'10px'} fontWeight={'500'}><Text w={'8px'} h={'8px'} rounded={'50%'} bg={'rgba(217, 217, 217, 1)'}></Text> border-style: dotted solid double dashed;</Text>
                <ul className='ull'>
                    <li>top border dotted</li>
                    <li>right border solid</li>
                    <li>bottom border double</li>
                    <li>left border dashed</li>
                </ul>
                <Text fontSize={'20px'}>Agar chegara uslubidagi xususiyat uchta qiymatga ega bo'lsa:</Text>
                <Text fontSize={'20px'} display={'flex'} pl={'5px'} alignItems={'center'} gap={'10px'} fontWeight={'500'}><Text w={'8px'} h={'8px'} rounded={'50%'} bg={'rgba(217, 217, 217, 1)'}></Text>border-style: dotted solid double;</Text>
                <ul className='ull'>
                    <li>top border dotted</li>
                    <li>right va left border lar solid</li>
                    <li>bottom border double</li>
                </ul>

                <Text fontSize={'20px'}>Agar chegara uslubidagi xususiyat ikkita qiymatga ega bo'lsa:</Text>
                <Text fontSize={'20px'} display={'flex'} pl={'5px'} alignItems={'center'} gap={'10px'} fontWeight={'500'}><Text w={'8px'} h={'8px'} rounded={'50%'} bg={'rgba(217, 217, 217, 1)'}></Text>border-style: dotted solid;</Text>
                <ul className='ull'>
                    <li>top va bottom border lar dotted</li>
                    <li>right va left border lar  solid</li>
                </ul>
                <Text fontSize={'20px'}>Agar chegara uslubidagi xususiyat bitta qiymatga ega bo'lsa:</Text>
                <Text fontSize={'20px'} display={'flex'} pl={'5px'} alignItems={'center'} gap={'10px'} fontWeight={'500'}><Text w={'8px'} h={'8px'} rounded={'50%'} bg={'rgba(217, 217, 217, 1)'}></Text>border-style: dotted;</Text>
                <ul className='ull'>
                    <li>barcha to'rtta chegara nuqtali</li>
                </ul>

                <Box  width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'700px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'520px'} bg={'#0A1624'} pt={'10px'}>
                    

                    <Text fontSize={'20px'} className='purple'><span className='gray'>/* To'rt qiymat */ </span> <br /> p{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span> <span className='yellow'>dotted solid double doshed;</span> <br />{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'><span className='gray'>/* Uchta qiymat */ </span> <br />p{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span> <span className='yellow'>dotted solid double ;</span> <br />{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'><span className='gray'>/* Ikki qiymat */ </span> <br />p{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span> <span className='yellow'>dotted solid;</span> <br />{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'><span className='gray'>/* Bitta qiymat */ </span> <br />p{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span> <span className='yellow'>dotted;</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`/* To'rt qiymat */p {border-style: dotted solid double dashed; }/* Uchta qiymat */p {   border-style: dotted solid double; }/* Ikki qiymat */p {border-style: dotted solid; }/* Bitta qiymat */p {border-style: dotted; }`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>

                </Box>
            <Text fontSize={'20px'}>Chegara uslubidagi xususiyat yuqoridagi misolda ishlatilgan. Biroq, u chegara kengligi va chegara <br /> rangi bilan ham ishlaydi.</Text>
            </Box>
            <Divider mt={'20px'} />




            

            </Box>
    </Box>
  )
}

export default Css18dars
