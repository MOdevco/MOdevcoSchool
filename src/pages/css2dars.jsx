import { Box , Flex , Heading , Button , Text , Image , Input , FormLabel, HStack, Radio, RadioGroup} from '@chakra-ui/react'
import { HamburgerIcon , CloseIcon, ArrowUpIcon } from '@chakra-ui/icons'
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
import SidebarCss from '../components/sidebarCss/sidebarCss'

const Css2dars = () => {
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
                    <SidebarCss title={'HTML DARSLARI'} elementName={'Bosh sahifa'}/>
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
                            <AccordionItenm  />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Syntax</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '20vh' , md: '8vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>CSS qoidasi selektor va deklaratsiya blokidan iborat.</Text>
            </Box>
            <Divider mt={'20px'} />


            {/* 1 */}
            
            
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
                  
              <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Syntax</Heading>
                

                <Box mt={'10px'} width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} overflow={'scroll'} alignItems={'flex-start'} bg={'#D9D9D9'} h={'180px'} py={{base: '15px', md :'0px'}} >
                    <Box display={'flex'} alignItems={{base:'center', md: 'flex-start'}}  gap={'15rem'}>

                    <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
                        <Text fontSize={'20px'} color={'#000'}>Selector</Text>
                        <Text w={'71px'} h={'48px'} rounded={'40px'} bg={'#90EE90'} textAlign={'center'} fontSize={'30px'}>h1</Text>
                    </Box>
                    <Box>
                        <Box pb={'7px'} display={'flex'} gap={'4em'} alignItems={'center'} justifyContent={'center'} fontSize={'15px'}>
                            <Text color={'#000'}>Declaration</Text>
                            <Text color={'#000'}>Declaration</Text>
                        </Box>
                        <Text w={'338px'} h={'48px'} display={'flex'} alignItems={'center'} justifyContent={'center'} bg={'#90EE90'} rounded={'40px'} fontSize={'25px'} textAlign={'center'}>{`color:blue;  font-size:12px;`}</Text>
                        <Box  fontSize={'11px'} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} >
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                <ArrowUpIcon fontSize={'20px'}  />
                                <Text color={'#000'}>Property</Text>
                            </Box>
                            <Box  display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                <ArrowUpIcon fontSize={'20px'} />
                                <Text color={'#000'}>Value</Text>
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                <ArrowUpIcon fontSize={'20px'} />
                                <Text color={'#000'}>Property</Text>
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                <ArrowUpIcon fontSize={'20px'}/>
                                <Text color={'#000'}>Value</Text>
                            </Box>
                        </Box>
                    </Box>
                    </Box>
                </Box>
                <Text fontSize={'20px'}>Selektor siz uslublashni xohlagan HTML elementiga ishora qiladi. <br /> Deklaratsiya blokida nuqta-vergul bilan ajratilgan bir yoki bir nechta deklaratsiyalar mavjud. <br /> Har bir deklaratsiyada CSS mulk nomi va ikki nuqta bilan ajratilgan qiymat mavjud. <br /> Bir nechta CSS deklaratsiyasi nuqta-vergul bilan ajratilgan va deklaratsiya bloklari jingalak qavslar bilan o'ralgan.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'380px', base: '430px'}}  rounded={'20px'} >
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Ushbu misolda barcha <span className='red'>{`<p>`}</span> elementlar qizil matn rangi bilan markazga tekislanadi:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'150px'} bg={'#0A1624'} pt={'10px'}>
                      
                      <Text fontSize={'20px'} className='purple'>p{`{`} <br /> <span style={{paddingLeft: '15px'}} className='red'>color:</span> <span className='yellow'>red</span>; <br /> <span className='red' style={{paddingLeft: '15px'}}>text-align:</span> <span className='yellow'>center</span>; <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`p{color: red; text-align: center;}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

                <Box>
                    <Text fontSize={'30px'}>Misol tushuntirildi</Text>
                    <ul className='ull'>
                        <li><span className='red'>p</span> - CSS-dagi selektor (u siz uslublashni xohlagan HTML elementiga ishora qiladi: <span className='red'>{`<p>`}</span>).</li>
                        <li><span className='red'>color</span> - bu xususiyat, <span className='red'>red</span> - xususiyat qiymati</li>
                        <li><span className='red'>text-align</span> - bu xususiyat, <span className='red'>center</span> esa xususiyat qiymati</li>
                    </ul>
                    <Text pt={'10px'} fontSize={'20px'}>Keyingi boblarda CSS selektorlari va CSS xususiyatlari haqida ko'proq bilib olasiz!</Text>
                </Box>
                


            </Box>
            <Divider mt={'20px'} />

            </Box>
    </Box>
  )
}

export default Css2dars
