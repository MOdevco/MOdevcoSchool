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

const Css17dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Border Color</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />





            {/* 1 */}
    
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>CSS Border Color</Heading>
                <Text fontSize={'25px'}>Border-color xossasi to‘rtta chegara rangini o‘rnatish uchun ishlatiladi.</Text>
                <Text fontSize={'20px'}>Rangni quyidagicha sozlash mumkin:</Text>
                <ul className='ull'>
                    <li><span>name</span> - "qizil" kabi rang nomini belgilang</li>
                    <li><span>HEX</span> - "#ff0000" kabi HEX qiymatini belgilang</li>
                    <li><span>RGB</span> - RGB qiymatini belgilang, masalan, "rgb (255,0,0)"</li>
                    <li><span>HSL</span> - "hsl(0, 100%, 50%)" kabi HSL qiymatini belgilang shaffof</li>
                </ul>
                <Text fontSize={'20px'}>Eslatma: Agar chegara rangi o'rnatilmagan bo'lsa, u element rangini meros qilib oladi.</Text>

                <Box  width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'900px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Turli chegara ranglarini namoyish qilish:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'390px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p.one{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span><span className='yellow'>solid;</span> <br />  <span style={{paddingLeft:'20px'}} className='red'>border-color:</span><span className='yellow'>red;</span> <br />{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p.one{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span><span className='yellow'>solid;</span> <br />  <span style={{paddingLeft:'20px'}} className='red'>border-color:</span><span className='yellow'>green;</span> <br />{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p.one{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span><span className='yellow'>dotted;</span> <br />  <span style={{paddingLeft:'20px'}} className='red'>border-color:</span><span className='yellow'>blue;</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <Text fontSize={'20px'}>Natija:</Text>
                    <Box width={'90%'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'}  overflow={'scroll'}  borderColor={'#7FFFD4'} height={'270px'} bg={'#0A1624'} pt={'10px'} gap={{base: '15px', md: '1rem'}}>
                        <BorderProps borderStyle={'solid'} borderw={'2px'} text={'dotted border.'} borderColor={'red'}  />
                        <BorderProps borderStyle={'solid'} borderw={'2px'} text={'dashed border.'} borderColor={'green'}  />
                        <BorderProps borderStyle={'dotted'} borderw={'2px'} text={'dashed border.'} borderColor={'blue'} />
                    </Box>

                </Box>
            </Box>
            <Divider mt={'20px'} />


            {/* 2 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>Maxsus Yon Ranglar</Heading>
                <Text fontSize={'25px'}>Border-color xossasi to‘rtta chegara rangini o‘rnatish uchun ishlatiladi.</Text>
                <Text fontSize={'20px'}>border-color xossasi birdan toʻrtgacha qiymatga ega boʻlishi mumkin (yuqori chegara, oʻng <br /> chegara, pastki chegara va chap chegara uchun).</Text>

                <Box  width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'330px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'150px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p.one{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span> <span className='yellow'>solid;</span> <br />  <span style={{paddingLeft:'20px'}} className='red'>border-width:</span> <span className='yellow'>red green blue yellow;</span> <span className='gray'>/* yuqori va faqat 5px, yon tomonlarda 20px */</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`p.one {border-style: solid; border-width: red green blue yellow;   /* yuqori va faqat 5px, yon tomonlarda 20px */}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>

                </Box>
            </Box>
            <Divider mt={'20px'} />

            {/* 3 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>HEX Qiymatlari</Heading>
                <Text fontSize={'25px'}>Chegara rangini o'n oltilik qiymat (HEX) yordamida ham belgilash mumkin:</Text>

                <Box  width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'330px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'150px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p.one{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span> <span className='yellow'>solid;</span> <br />  <span style={{paddingLeft:'20px'}} className='red'>border-width:</span> <span className='yellow'>#ff0000;</span> <span className='gray'>/* red */</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`p.one {border-style: solid; border-width: #ff0000;   /* red */}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>

                </Box>
            </Box>
            <Divider mt={'20px'} />


            {/* 4 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>RGB Qiymatlari</Heading>
                <Text fontSize={'25px'}>Yoki RGB qiymatlari yordamida:</Text>

                <Box  width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'330px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'150px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p.one{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span> <span className='yellow'>solid;</span> <br />  <span style={{paddingLeft:'20px'}} className='red'>border-width:</span> <span className='yellow'>rgb(255, 0, 0);</span> <span className='gray'>/* red */</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`p.one {border-style: solid; border-width: rgb(255, 0, 0);   /* red */}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>

                </Box>
            </Box>
            <Divider mt={'20px'} />

            {/* 5 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>HSL Qiymatlari</Heading>
                <Text fontSize={'25px'}>HSL qiymatlaridan ham foydalanishingiz mumkin:</Text>

                <Box  width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'330px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'150px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p.one{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span> <span className='yellow'>solid;</span> <br />  <span style={{paddingLeft:'20px'}} className='red'>border-width:</span> <span className='yellow'>hsl(0, 100%, 50%);</span> <span className='gray'>/* red */</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`p.one {border-style: solid; border-width: hsl(0, 100%, 50%)n;   /* red */}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>

                </Box>
            </Box>
            <Divider mt={'20px'} />



            

            </Box>
    </Box>
  )
}

export default Css17dars
