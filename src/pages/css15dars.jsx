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

const Css15dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Borders</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box height={{md:'8vh', base: '11vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>CSS chegarasi xususiyatlari element chegarasining uslubi, kengligi va rangini belgilash imkonini beradi.</Text>
            </Box>
            <Divider mt={'20px'} />





            {/* 1 */}
    
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{lg:'40vh', base: '40vh', md: '100%'}} className='border'>
                
                <BorderProps text={"Mening har tomondan chegaralarim bor."}  />
                <BorderProps text={"Mening har tomondan chegaralarim bor."} borderLeft={'none'} borderTop={'none'} borderRight={'none'} bottom={'2px'} borderColor={'red'} />
                <BorderProps text={"Menda yumaloq chegaralar bor."} rounded={'20px'} />
                <BorderProps text={"Mening har tomondan chegaralarim bor."}  borderLeftw={'10px'} borderTop={'none'} borderRight={'none'} bottom={'none'} borderColor={'rgba(30, 144, 255, 1)'} bg={'rgba(176, 224, 230, 1)'} />
            </Box>
            <Divider mt={{md:'45px', base: '20px', lg: '40px', xl: '40px', '2xl': '20px'}} />


            {/* 2 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>CSS Border Style</Heading>
                <Text fontSize={'25px'}>Chegara uslubi xossasi qanday chegarani ko'rsatishni belgilaydi. <br /> Quyidagi qiymatlarga ruxsat beriladi:</Text>
                <ul className='ull' >
                    <li><span className='red'>dotted</span> - Nuqtali chegarani belgilaydi</li>
                    <li><span className='red'>dashed</span> - Chiziqli chegarani belgilaydi</li>
                    <li><span className='red'>solid</span> - Qattiq chegarani belgilaydi</li>
                    <li><span className='red'>double</span> - Ikki tomonlama chegarani belgilaydi</li>
                    <li><span className='red'>groove</span> - 3D yivli konturni belgilaydi</li>
                    <li><span className='red'>ridge</span> - 3D chiziqli chegarani belgilaydi. Effekt chegara rangi qiymatiga bog'liq</li>
                    <li><span className='red'>inset</span> - 3D ichki chegarani belgilaydi. Effekt chegara rangi qiymatiga bog'liq</li>
                    <li><span className='red'>hidden</span> - 3D boshlang‘ich chegarasini belgilaydi. Effekt chegara rangi qiymatiga bog'liq</li>
                    <li><span className='red'>none</span> - Chegarani belgilamaydi</li>
                    <li><span className='red'>hidden</span> - Yashirin chegarani belgilaydi</li>
                </ul>
                <Text>Border-style xususiyat birdan to'rtgacha qiymatga ega bo'lishi mumkin (yuqori chegara, o'ng chegara, pastki <br /> chegara va chap chegara uchun).</Text>


                
            </Box>
            

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                

                <Box  width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'1600px', base: '1450px', xl: '1500px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Turli xil chegara uslublarini namoyish qilish:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'350px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p.dotted{`{`}<span className='red'>border-style:</span><span className='yellow'>dotted;</span>{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p.dotted{`{`}<span className='red'>border-style:</span><span className='yellow'>doshed;</span>{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p.dotted{`{`}<span className='red'>border-style:</span><span className='yellow'>solid;</span>{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p.dotted{`{`}<span className='red'>border-style:</span><span className='yellow'>double;</span>{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p.dotted{`{`}<span className='red'>border-style:</span><span className='yellow'>groove;</span>{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p.dotted{`{`}<span className='red'>border-style:</span><span className='yellow'>ridge;</span>{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p.dotted{`{`}<span className='red'>border-style:</span><span className='yellow'>inset;</span>{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p.dotted{`{`}<span className='red'>border-style:</span><span className='yellow'>outset;</span>{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p.dotted{`{`}<span className='red'>border-style:</span><span className='yellow'>none;</span>{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p.dotted{`{`}<span className='red'>border-style:</span><span className='yellow'>hidden;</span>{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p.dotted{`{`}<span className='red'>border-style:</span><span className='yellow'>dotted doshed solid double;</span>{`}`}</Text>
                      
                        
                    </Box>
                    <Text fontSize={'20px'}>Natija:</Text>
                    <Box width={'90%'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'}  overflow={'scroll'}  borderColor={'#7FFFD4'} height={{md:'900px', base: '760px'}} bg={'#0A1624'} pt={'10px'} gap={{base: '15px', md: '1rem'}}>
                        <BorderProps borderStyle={'dotted'} text={'dotted border.'}  />
                        <BorderProps borderStyle={'dashed'} text={'dashed border.'}  />
                        <BorderProps borderStyle={'solid'} text={'dashed border.'}  />
                        <BorderProps borderStyle={'double'} text={'double border.'}  />
                        <BorderProps borderStyle={'groove'} text={'groove border. Effekt border rangi qiymatiga bogliq.'}  />
                        <BorderProps borderStyle={'ridge'} text={'ridge border. Effekt border rangi qiymatiga bogliq.'}  />
                        <BorderProps borderStyle={'inset'} text={'inset border. Effekt border rangi qiymatiga bogliq.'}  />
                        <BorderProps borderStyle={'outset'} text={'outset border. Effekt border rangi qiymatiga bogliq.'}  />
                        <BorderProps borderStyle={'none'} text={'border yoq.'}  />
                        <BorderProps borderStyle={'hidden'} text={'hidden border.'}  />
                        <BorderProps borderStyle={'dotted dashed solid double'} text={'mixed border.'}  />
                      
                    
                      
                        
                    </Box>
                </Box>
                <Text fontSize={'20px'}>Eslatma: BOSHQA CSS chegara xususiyatlarining hech biri (keyingi boblarda ko‘proq bilib <br /> olasiz) chegara uslubi xususiyati o‘rnatilmasa, HECH QANDAY ta’sirga ega bo‘lmaydi!</Text>
            </Box>
            <Divider mt={'20px'} />



            

            </Box>
    </Box>
  )
}

export default Css15dars
