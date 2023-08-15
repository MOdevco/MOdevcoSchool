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

const Css27dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Outline Width</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box height={{'2xl':'50vh', xl: '64vh'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Text fontSize={'20px'}>Outline-width xususiyati konturning kengligini belgilaydi va quyidagi qiymatlardan biriga ega bo'lishi mumkin:</Text>
                <ul className='ull'>
                    <li>thin (odatda 1px)</li>
                    <li>medium (odatda 3px)</li>
                    <li>thick (odatda 5px)</li>
                    <li>A specific size (in px, pt, cm, em, etc)</li>
                </ul>
                <Text fontSize={'20px'}>Quyidagi misolda turli xil kenglikdagi ba'zi konturlar ko'rsatilgan:</Text>
                <Box display={'flex'} flexDirection={'column'} gap={'20px'} w={'100%'}>
                    <OutlineProps borderStyle={'solid'} text={'thin outline.'} width={'thin'} borderColor={'red'} outline={'thin'} />
                    <OutlineProps borderStyle={'solid'} text={'medium outline.'} width={'medium'} borderColor={'red'} outline={'medium'} />
                    <OutlineProps borderStyle={'solid'} text={'thick outline.'} width={'thick'} borderColor={'red'} outline={'thick'} />
                    <OutlineProps borderStyle={'solid'} text={'4px thick outline.'} width={'4px thick'} borderColor={'red'} outline={'4px sick'} />
                </Box>
            </Box>






            {/* 1 */}
            
            
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'900px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'740px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>p.ex1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>border:</span> <span className='yellow'>1px solid back</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>outline-style:</span> <span  className='yellow'>solid</span> <br /> <span style={{paddingLeft: '20px'}}  className='red'>outline-color:</span> <span className='yellow'>red</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>outline-width:</span> <span className='yellow'>thin</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>p.ex2 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>border:</span> <span className='yellow'>1px solid back</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>outline-style:</span> <span  className='yellow'>solid</span> <br /> <span style={{paddingLeft: '20px'}}  className='red'>outline-color:</span> <span className='yellow'>red</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>outline-width:</span> <span className='yellow'>medium</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>p.ex3 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>border:</span> <span className='yellow'>1px solid back</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>outline-style:</span> <span  className='yellow'>solid</span> <br /> <span style={{paddingLeft: '20px'}}  className='red'>outline-color:</span> <span className='yellow'>red</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>outline-width:</span> <span className='yellow'>thick</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>p.ex4 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>border:</span> <span className='yellow'>1px solid back</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>outline-style:</span> <span  className='yellow'>solid</span> <br /> <span style={{paddingLeft: '20px'}}  className='red'>outline-color:</span> <span className='yellow'>red</span> <br /> <span style={{paddingLeft: '20px'}} className='red'>outline-width:</span> <span className='yellow'>4px</span> <br /> {`}`}</Text>
                        
                    </Box>
                    <CopyToClipboard text={`p.ex1 { border: 1px solid black;  outline-style: solid; outline-color: red; outline-width: thin; } p.ex2 { border: 1px solid black;  outline-style: solid; outline-color: red; outline-width: medium; p.ex3 { border: 1px solid black;  outline-style: solid; outline-color: red; outline-width: thick;}p.ex1 { border: 1px solid black;  outline-style: solid; outline-color: red; outline-width: 4px;}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                
            </Box>
            <Divider mt={'20px'} />
            </Box>
    </Box>
  )
}

export default Css27dars
