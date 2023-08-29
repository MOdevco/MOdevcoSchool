
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

const Css37dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '40px', lg: '50px'}}>CSS Fonts</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box className='css37' height={{'2xl':'37vh', md: '40vh',lg: '72vh', xl: '55vh'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Heading fontSize={{base: '30px' , md: '40px', lg :'50px'}}>Generic Font Families</Heading>
                <Text fontSize={'20px'}>CSS-da beshta umumiy shrift oilasi mavjud:</Text>
                <ol className='ull'>
                    <li><span className='red'>Serif</span> shriftlari har bir harfning chetida kichik chiziqqa ega. Ular rasmiyatchilik va nafislik tuyg'usini yaratadilar.</li>
                    <li><span className='red'>Sans-serif</span> shriftlari toza chiziqlarga ega (kichik chiziqlar biriktirilmagan). Ular zamonaviy va minimalistik ko'rinish <br /> yaratadilar.</li>
                    <li><span className='red'>Monospace</span> shriftlari - bu erda barcha harflar bir xil sobit kenglikka ega. Ular mexanik ko'rinish hosil qiladi.</li>
                    <li><span className='red'>Cursive</span> shriftlar inson qo'l yozuviga taqlid qiladi.</li>
                    <li><span className='red'>Fantasy</span> shriftlari dekorativ/o'ynoqi shriftlardir.</li>
                </ol>
                <Text fontSize={'20px'}>Barcha turli shrift nomlari umumiy shrift oilalaridan biriga tegishli.</Text>
            </Box>
            <Divider mt={'20px'} />






            {/* 1 */}
            
            
           
            
            <Box className='css35dars' pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '38vh'}}>
                <Heading fontSize={{base: '30px', md: '50px'}}>Serif va Sans-serif Shriftlari O'rtasidagi Farq</Heading>
                <Box className='black' w={{lg: '557px',md: '100%', base: '100%'}} h={'168px'} bg={'#D9D9D9'} display={'flex'} >
                        <Box w={'100px'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                            <Heading  className='sanserif' textAlign={'center'} fontSize={{md: '50px', base: '30px'}}>F</Heading>
                            <Text color={'#000'} textAlign={'center'} fontSize={'20px'}>sans-serif</Text>
                        </Box>
                        <Box w={'100px'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                            <Heading className='serif' textAlign={'center'} fontSize={{md: '50px', base: '30px'}}>F</Heading>
                            <Text color={'#000'} textAlign={'center'} fontSize={'20px'}>serif</Text>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                            <Heading className='redserif' textAlign={'center'} fontSize={{md: '50px', base: '30px'}}>F</Heading>
                            <Text color={'#000'} textAlign={'center'} fontSize={'20px'}>serif(<span className='red'>red</span> serifs)</Text>
                        </Box>
                </Box>
                <Text mb={'100px'} fontSize={'20px'}>Eslatma: Kompyuter ekranlarida sans-serif shriftlari serif shriftlariga qaraganda osonroq o'qiladi.</Text>
            </Box>
                <Box className='mt' pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} mt={{'2xl': '-120px', lg: '-80px'}} minHeight={'10vh'}>

                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'0px'} >
                        <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>Generic Font Family</Td>
                                        <Td>Shrift nomlariga misollar</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr className='serif'>
                                        <Td>Serif</Td>
                                        <Td>Times New Roman <br /> Georgia <br /> Garamond</Td>
                                    </Tr>
                                    <Tr className='sanserif' bg={'#233242'}>
                                        <Td>Sans-serif</Td>
                                        <Td>Arial <br /> Verdana <br /> Helvetica</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Monospace</Td>
                                        <Td><span className='courier'>Courier New </span><br /><span className='lucida'>Lucida Console</span> <br /> <span className='monda'>Monaco</span></Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>Cursive</Td>
                                        <Td><span className='pacific'>Brush Script MT</span> <br /> <span className='hand'>Lucida Handwriting</span></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Fantasy</Td>
                                        <Td><span className='monda'>Copperplate</span> <br /> <span className='cutive'>Papyrus</span></Td>
                                    </Tr>
                                </Tbody>
                                
                            </Table>
                        </TableContainer>
                    </Box>
            </Box>
            <Divider mt={'100px'} />

            

            {/* 1 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '42vh'}}>
                <Heading fontSize={{base: '30px', md: '50px'}}>CSS Font-family Xususiyati</Heading>
                <Text fontSize={'20px'}>CSS-da biz matn shriftini belgilash uchun <span className='red'>font-family</span> xususiyatidan foydalanamiz.</Text>
                <Text fontSize={'20px'}>Eslatma: Agar shrift nomi bir nechta so'zlardan iborat bo'lsa, u tirnoq ichida bo'lishi kerak, masalan: "Times New Roman".</Text>
                <Text fontSize={'20px'} w={{'2xl': '900px'}}>Maslahat: Brauzerlar/operatsion tizimlar o'rtasida maksimal muvofiqlikni ta'minlash uchun font-family xususiyati "qayta" tizim sifatida bir nechta shrift nomlariga ega bo'lishi kerak. O'zingiz xohlagan shriftdan boshlang va umumiy oila bilan yakunlang (agar boshqa shriftlar mavjud bo'lmasa, brauzerga umumiy oilada o'xshash shriftni tanlashiga ruxsat berish uchun). Shrift nomlari vergul bilan ajratilishi kerak. Qayta shriftlar haqida keyingi bobda o'qing.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'500px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>.p1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-family:</span> <span className='yellow'>Times New Roman", Times, serif; </span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>.p2 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-family:</span> <span className='yellow'> Arial, Helvetica, sans-serif; </span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>.p3 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-family:</span> <span className='yellow'>"Lucida Console", "Courier New", monospace;</span> <br /> {`}`}</Text>
                     
                    </Box>
                    <CopyToClipboard text={`.p1 { font-family: "Times New Roman", Times, serif; }.p2 {  font-family: Arial, Helvetica, sans-serif; }.p3 { font-family: "Lucida Console", "Courier New", monospace; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />




                

            
            </Box>



    </Box>
  )
}

export default Css37dars
