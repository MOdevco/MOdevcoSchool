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

const Css28dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Outline Color</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box className='outlinecolor' height={{'2xl':'65vh',md: '85vh',base: '100vh', xl: '80vh', lg: '110vh'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Heading >CSS Outline Color</Heading>
                <Text fontSize={'20px'}>Outline-color xossasi kontur rangini belgilash uchun ishlatiladi.</Text>
                <Text fontSize={'20px'}>Rangni quyidagicha sozlash mumkin:</Text>
                <ul className='ull'>
                    <li><span className='red'>name</span> - "qizil" kabi rang nomini belgilang</li>
                    <li><span className='red'>HEX</span> - "#ff0000" kabi olti burchakli qiymatni belgilang</li>
                    <li><span className='red'>RGB</span> - specify a RGB value, like "rgb(255,0,0)"</li>
                    <li><span className='red'>HSL</span> - "hsl(0, 100%, 50%)" kabi HSL qiymatini belgilang</li>
                    <li><span className='red'>invert</span> - rangni o'zgartirishni amalga oshiradi (bu rang <br /> fonidan    qat'iy nazar konturning ko'rinishini ta'minlaydi)</li>
                </ul>
                <Text fontSize={'20px'}>Quyidagi misolda turli xil ranglarga ega turli xil konturlar ko'rsatilgan. Shuningdek, ushbu elementlarning <br /> kontur ichida ingichka qora chegarasi borligiga e'tibor bering:</Text>
                <Box display={'flex'} flexDirection={'column'} gap={'20px'} w={'100%'}>
                    <OutlineProps borderStyle={'solid red outline.'} text={'solid red outline.'} width={'thin'} borderColor={'red'} outline={'thin'} />
                    <OutlineProps borderStyle={'dotted'} text={'dotted blue outline.'}  borderColor={'#0000FF'} outline={'medium'} />
                    <OutlineProps borderStyle={'solid'} text={'outset grey outline.'} top={'2px solid #808080'} left={'2px solid #808080'} bottom={'2px solid #000'} right={'1px solid #000'} outline={'thick'} />
                </Box>
            </Box>






            {/* 1 */}
            
            
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'}  pt={'40px'} minHeight={'50vh'}>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'680px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'480px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>p.ex1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>border:</span> <span className='yellow'>1px solid back</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>outline-style:</span> <span  className='yellow'>solid</span> <br /> <span style={{paddingLeft: '20px'}}  className='red'>outline-color:</span> <span className='yellow'>red</span> <br />  {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>p.ex2 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>border:</span> <span className='yellow'>1px solid back</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>outline-style:</span> <span  className='yellow'>dotted</span> <br /> <span style={{paddingLeft: '20px'}}  className='red'>outline-color:</span> <span className='yellow'>blue</span> <br />  {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>p.ex3 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>border:</span> <span className='yellow'>1px solid back</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>outline-style:</span> <span  className='yellow'>outset</span> <br /> <span style={{paddingLeft: '20px'}}  className='red'>outline-color:</span> <span className='yellow'>gray</span> <br /> {`}`}</Text>
                     
                        
                    </Box>
                    <CopyToClipboard text={`p.ex1 { border: 2px solid black;  outline-style: solid; outline-color: red;}p.ex2 { border: 1px solid black;  outline-style: dotted; outline-color: blue;} p.ex3 { border: 1px solid black outline-style: outset; outline-color: grey;}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                
            </Box>
            <Divider mt={'20px'} />

                {/* 2 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} h={{md: '45vh',base: '65vh',  xl:'50vh', '2xl': '50vh'}}>
                <Heading>HEX Qiymatlari</Heading>
                <Text>Kontur rangini o'n oltilik qiymat (HEX) yordamida ham belgilash mumkin:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'330px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'150px'} bg={'#0A1624'} pt={'10px'}>
                    
                    <Text fontSize={'20px'} className='purple'>p.ex1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>outline-style:</span> <span  className='yellow'>solid</span> <br /> <span style={{paddingLeft: '20px'}}  className='red'>outline-color:</span> <span className='yellow'>#ff0000</span> <span className='gray'>/* red */</span> <br />  {`}`}</Text>
                    
                        
                </Box>
                <CopyToClipboard text={`p.ex1 { outline-style: solid; outline-color: #ff0000;    /* red */}`} onCopy={handleClip} >
                    <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                </CopyToClipboard>
            </Box>

            </Box>
            <Divider  mt={'20px'} />


            {/* 3 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{md: '43vh',base: '50vh', xl:'50vh'}}>
                <Heading>RGB Qiymatlari</Heading>
                <Text>Yoki RGB qiymatlari yordamida</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'330px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'150px'} bg={'#0A1624'} pt={'10px'}>
                    
                    <Text fontSize={'20px'} className='purple'>p.ex1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>outline-style:</span> <span  className='yellow'>solid</span> <br /> <span style={{paddingLeft: '20px'}}  className='red'>outline-color:</span> <span className='yellow'>rgb(255, 0, 0)</span> <span className='gray'>/* red */</span> <br />  {`}`}</Text>
                    
                        
                </Box>
                <CopyToClipboard text={`p.ex1 { outline-style: solid; outline-color: rgb(255, 0 ,0);    /* red */}`} onCopy={handleClip} >
                    <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                </CopyToClipboard>
            </Box>

            </Box>
            <Divider mt={'20px'} />

            {/* 4 */}
            <Box className='teight' pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{md: '43vh',base: '50vh', xl:'50vh'}}>
                <Heading>HSL Qiymatlari</Heading>
                <Text>HSL qiymatlaridan ham foydalanishingiz mumkin:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'330px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'150px'} bg={'#0A1624'} pt={'10px'}>
                    
                    <Text fontSize={'20px'} className='purple'>p.ex1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>outline-style:</span> <span  className='yellow'>solid</span> <br /> <span style={{paddingLeft: '20px'}}  className='red'>outline-color:</span> <span className='yellow'>hsl(0, 100%, 50%)</span> <span className='gray'>/* red */</span> <br />  {`}`}</Text>
                    
                        
                </Box>
                <CopyToClipboard text={`p.ex1 { outline-style: solid; outline-color: hsl(0, 100%, 50%);    /* red */}`} onCopy={handleClip} >
                    <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                </CopyToClipboard>
            </Box>

            </Box>
            <Divider  mt={'20px'} />
        </Box>
    </Box>
  )
}

export default Css28dars
