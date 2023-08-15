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

const Css26dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Outline</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box height={'8vh'} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Text fontSize={'20px'}>Barcha HTML elementlarini qutilar deb hisoblash mumkin.</Text>
            </Box>
            <Divider mt={'20px'} />
            <Box pl={{base: '20px' , md: '450px',}} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} minH={'10vh'}>

            <Box mt={'20px'} w={{md: '90%', '2xl': '874px',lg: '100%', base: '100%',}} h={'69px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} pl={'10px'} border={'1px solid #008000'}>
                        <Text fontSize={{md:'15px', base:'15px', lg: '20px'}} >Ushbu elementning balandligi 50 piksel va kengligi 100% ni tashkil qiladi.</Text>
            </Box>
            </Box>
            <Divider mt={'20px'} />

            <Box className='css26' h={{md:'90vh',base: '50vh', lg: '140vh', xl: '100vh', '2xl': '75vh'}} pl={{base: '20px' , md: '450px'}} pt={4} display={'flex'} flexDirection={'column'} gap={'10px'}>
                <Heading>CSS Outline</Heading>
                <Text fontSize={'20px'}>Kontur - bu elementni "ajratib turishi" uchun chegaralardan TAShQARIDA elementlar atrofida chizilgan chiziq.</Text>
                <Box border={'2px dashed #fff'} w={{sm: '100%', md: '100%', '2xl': '865px'}}>
                <Box w={{sm: '100%', md: '100%', xl: '100%', '2xl': '861px'}} bg={'#3CB371'} h={{ base: '290px',md: '290px',xl:'300px', '2xl': '320px'}}>
                    <Text color={'#000'} textAlign={'center'} fontSize={'20px'} pb={'10px'} pt={'10px'}>Outline</Text>
                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} bg={'#fff'} border={'40px solid #fff'} w={{base: '90%', md: '90%', xl: '700px'}} h={{xl:'210px', base: '200px', md: '220px'}} m={'auto'}>
                            <Text textAlign={'center'} mt={{xl: '-35px', base: '-38px'}} fontSize={'20px'} color={'#000'}>Border</Text>
                            <Box m={'auto'} w={{xl:'480px', base: '80%'}} h={'120px'} border={'2px solid #000'} fontSize={'20px'} color={'#000'} display={'flex'} alignItems={'center'} justifyContent={'center'}>Content</Box>
                        </Box>
                </Box>
                </Box>
                <Text fontSize={'20px'}>CSS quyidagi kontur xususiyatlariga ega:</Text>
                <ul className='ulll'>
                    <li>outline-style</li>
                    <li>outline-color</li>
                    <li>outline-width</li>
                    <li>outline-offset</li>
                    <li>outline</li>
                </ul>
                <Text fontSize={'20px'}>Eslatma: kontur chegaralardan farq qiladi! Chegaradan farqli o'laroq, kontur element chegarasidan tashqarida <br /> chiziladi va boshqa tarkibni bir-biriga yopishi mumkin. Bundan tashqari, kontur element o'lchamlarining bir qismi <br /> EMAS; elementning umumiy kengligi va balandligi konturning kengligidan ta'sirlanmaydi.</Text>
                
            </Box>
            <Divider mt={{md:'20px', base: '290px'}} />





            {/* 1 */}
            
            
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Heading>CSS Outline Style</Heading>
                  <Text fontSize={'20px'}>Outline-style xususiyati kontur uslubini belgilaydi va quyidagi qiymatlardan biriga ega bo'lishi mumkin:</Text>
                  <ul className='ull'>
                    <li><span className='red'>dotted</span> - Nuqtali outline belgilaydi</li>
                    <li><span className='red'>dashed</span> - Chiziqli outline belgilaydi</li>
                    <li><span className='red'>solid</span> - Qattiq outline belgilaydi</li>
                    <li><span className='red'>double</span> - Ikki tomonlama outline belgilaydi</li>
                    <li><span className='red'>groove</span> -3D yivli outline di belgilaydi</li>
                    <li><span className='red'>ridge</span> - 3D chiziqli outline di belgilaydi.</li>
                    <li><span className='red'>inset</span> - 3D inset outline di belgilaydi</li>
                    <li><span className='red'>outset</span> - 3D boshlang‘ich outline di belgilaydi. </li>
                    <li><span className='red'>none</span> - Hech qanday outline di belgilamaydi</li>
                    <li><span className='red'>hidden</span> - Yashirin outline belgilaydi</li>
                  </ul>

                  <Text fontSize={'20px'}>Quyidagi misolda turli xil outline uslubi qiymatlari ko'rsatilgan:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'900px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Turli xil chegara uslublarini namoyish qilish:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'730px'} bg={'#0A1624'} pt={'10px'}>
                      
                      <Text className='purple' fontSize={'20px'}>p.dotted {`{`} <span className='red'>outline-style:</span> <span className='yellow'>dotted;</span> {`}`} </Text>
                      <Text className='purple' fontSize={'20px'}>p.dashed {`{`} <span className='red'>outline-style:</span> <span className='yellow'>dashed;</span> {`}`} </Text>
                      <Text className='purple' fontSize={'20px'}>p.solid {`{`} <span className='red'>outline-style:</span> <span className='yellow'>solid;</span> {`}`} </Text>
                      <Text className='purple' fontSize={'20px'}>p.double {`{`} <span className='red'>outline-style:</span> <span className='yellow'>double;</span> {`}`} </Text>
                      <Text className='purple' fontSize={'20px'}>p.groove {`{`} <span className='red'>outline-style:</span> <span className='yellow'>groove;</span> {`}`} </Text>
                      <Text className='purple' fontSize={'20px'}>p.ridge {`{`} <span className='red'>outline-style:</span> <span className='yellow'>ridge;</span> {`}`} </Text>
                      <Text className='purple' fontSize={'20px'}>p.inset {`{`} <span className='red'>outline-style:</span> <span className='yellow'>inset;</span> {`}`} </Text>
                      <Text className='purple' fontSize={'20px'}>p.outset {`{`} <span className='red'>outline-style:</span> <span className='yellow'>outet;</span> {`}`} </Text>
                    
                      <Box display={'flex'} flexDirection={'column'} gap={'10px'} pt={'20px'}>
                        <OutlineProps borderStyle={'dotted'} borderColor={'#fff'} text={'dotted outline.'} />
                        <OutlineProps borderStyle={'dashed'} borderColor={'#fff'} text={'dashed outline.'} />
                        <OutlineProps borderStyle={'solid'} borderColor={'#fff'} text={'solid outline.'} />
                        <OutlineProps borderStyle={'double'} borderColor={'#fff'} text={'double outline.'} />
                        <OutlineProps borderStyle={'groove'} borderColor={'#fff'} text={'groove outline. Effekt outline rangi qiymatiga bogliq.'} />
                        <OutlineProps borderStyle={'ridge'} borderColor={'#fff'} text={'groove outline. Effekt outline rangi qiymatiga bogliq.'} />
                        <OutlineProps borderStyle={'inset'} borderColor={'#fff'} text={'inset outline. Effekt outline rangi qiymatiga bogliq.'} />
                        <OutlineProps borderStyle={'outset'} borderColor={'#fff'} text={'outset outline. Effekt outline rangi qiymatiga bogliq.'} />
                      </Box>
                        
                    </Box>
                </Box>
                <Text fontSize={'20px'}>Eslatma: Boshqa kontur xususiyatlarining hech biri (keyingi boblarda bu haqda ko'proq bilib olasiz) agar <br /> kontur uslubi xususiyati o'rnatilmagan bo'lsa, HAR QANDAY ta'sir ko'rsatmaydi!</Text>
            </Box>
            <Divider mt={'20px'} />
            </Box>
    </Box>
  )
}

export default Css26dars
