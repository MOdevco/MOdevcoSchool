
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

const Css40dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '40px', lg: '50px'}}>CSS Font Style</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
           






            {/* 1 */}
            
            
           
            
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '50vh'}}>
                <Heading fontSize={{base: '30px', md: '50px'}}>Font Style</Heading>
                <Text fontSize={'20px'}>Shrift uslubi xususiyati asosan kursiv matnni belgilash uchun ishlatiladi.</Text>
                <Text fontSize={'20px'}>Bu xususiyat uchta qiymatga ega:</Text>
                <ul className='ull'>
                    <li><span className='red'>normal</span> - matn an'anaviy tarzda ko'rsatiladi</li>
                    <li><span className='red'>italic</span>- matn kursiv bilan ko'rsatiladi</li>
                    <li><span className='red'>oblique</span> - matn "egilgan" (qiyshiq kursivga juda o'xshaydi, lekin kamroq qo'llab-quvvatlanadi)</li>
                </ul>
                <Box className='css40dars' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '550px', md: '600px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text>Bu erda uchta shrift turi mavjud: Tahoma, Verdana va sans-serif. Ikkinchi va uchinchi shriftlar, agar <br /> birinchisi topilmasa, zaxira nusxasi.</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>p.normal {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-style:</span> <span className='yellow'>normal;</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>p.italic {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-style:</span> <span className='yellow'>italic;</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>p.oblique {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-style:</span> <span className='yellow'>oblique;</span> <br /> {`}`}</Text>
                    </Box>
                    <CopyToClipboard text={`p.normal { font-style: normal; }p.italic { font-style: italic; }p.oblique { font-style: oblique; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                
            </Box>
            <Divider mt={'20px'} />
            

            {/* 2 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '50vh'}}>
                <Heading fontSize={{base: '30px', md: '50px'}}>Font Weight</Heading>
                <Text fontSize={'20px'}><span className='red'>Font-weight</span> xususiyati shrift og'irligini belgilaydi:</Text>
                <Box className='css40' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'450px', base: '450px', md: '520px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text>Bu erda uchta shrift turi mavjud: Tahoma, Verdana va sans-serif. Ikkinchi va uchinchi shriftlar, agar <br /> birinchisi topilmasa, zaxira nusxasi.</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'205px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>p.normal {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-wight:</span> <span className='yellow'>normal;</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>p.thick {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-weight:</span> <span className='yellow'>thick;</span> <br /> {`}`}</Text>
                    </Box>
                    <CopyToClipboard text={`p.normal { font-weight: normal; }p.thick {  font-weight: bold; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                
            </Box>
            <Divider mt={'20px'} />

            {/* 3 */}
            <Box  pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '50vh'}}>
                <Heading fontSize={{base: '30px', md: '50px'}}>Font Variant</Heading>
                <Text fontSize={'20px'}><span className='red'>Font-variant</span> xususiyati matnni kichik bosh harflar bilan ko'rsatish yoki ko'rsatmaslik kerakligini belgilaydi.</Text>
                <Text fontSize={'20px'}>Kichik boshli shriftda barcha kichik harflar katta harflarga aylantiriladi. Biroq, o'zgartirilgan katta harflar matndagi <br /> asl bosh harflarga qaraganda kichikroq shrift o'lchamida ko'rinadi.</Text>
                <Box className='csss40' width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'450px', base: '450px', md: '520px'}}   py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text>Bu erda uchta shrift turi mavjud: Tahoma, Verdana va sans-serif. Ikkinchi va uchinchi shriftlar, agar <br /> birinchisi topilmasa, zaxira nusxasi.</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'205px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>p.normal {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-variant:</span> <span className='yellow'>normal;</span> <br /> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>p.small {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>font-small-caps:</span> <span className='yellow'>thick;</span> <br /> {`}`}</Text>
                    </Box>
                    <CopyToClipboard text={`p.normal {  font-variant: normal; }p.small {  font-variant: small-caps; }` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                
            </Box>
            <Divider mt={'20px'} />
                
            </Box>



    </Box>
  )
}

export default Css40dars
