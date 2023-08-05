import { Box , Flex , Heading , Button , Text , Image , Input , FormLabel, HStack, Radio, RadioGroup} from '@chakra-ui/react'
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
import SidebarCss from '../components/sidebarCss/sidebarCss'

const Css5dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Komment lari</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '25vh' , md: '12vh', lg: '8vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>CSS Komentariyalari kodni tushuntirish uchun ishlatiladi va keyinroq manba kodini tahrir qilganingizda yordam berishi mumkin. brauzerda ko'rsatilmaydi, lekin ular manba kodingizni hujjatlashtirishga yordam beradi.</Text>
            </Box>
            <Divider mt={'20px'} />


            {/* 1 */}
            
            
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'}  flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  
              <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Komment lari</Heading>
                <Text fontSize={'25px'}>Kommentariya kodni tushuntirish uchun ishlatiladi va keyinroq manba kodini tahrir qilganingizda yordam berishi mumkin. <br />Kommentariya kodni tushuntirish uchun ishlatiladi va keyinroq manba kodini tahrir qilganingizda yordam berishi mumkin. brauzerlar tomonidan e'tiborga olinmaydi. <br />CSS izohi <span className='red'>{`<style>`}</span> elementiga joylashtiriladi va <span className='red'>/*</span> bilan boshlanadi va <span className='red'>*/</span> bilan tugaydi:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'320px', base: '330px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'150px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'><span className='gray'>/* Bu bir qatorli izoh */</span> <br /> p{`{`} <br /> <span style={{paddingLeft: '15px'}} className='red'>color:</span> <span className='yellow'>red</span>;<br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`/* Bu bir qatorli izoh */ p{ color: red;}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'20px'}>Kodning istalgan joyiga kommentariya qo'shishingiz mumkin:</Text>




                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'340px', base: '350px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p{`{`} <br /> <span style={{paddingLeft: '15px'}} className='red'>color:</span> <span className='yellow'>red</span>; <span className='gray'> /* Matn rangini qizil rangga o'rnating */</span><br />{`}`}</Text>
                      
                        
                    </Box>
                    <Text fontSize={'20px'}>Kodning istalgan joyiga kommentariya qo'shishingiz mumkin:</Text>
                    <CopyToClipboard text={`p{ color: red; /* Matn rangini qizil rangga o'rnating */}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'20px'}>Kommentariyalar bir nechta qatorlarni ham qamrab olishi mumkin:</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'410px', base: '420px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'200px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'><span className='gray'>/* Bu <br /> bir qatorli <br /> izoh */</span> <br /> p{`{`} <br /> <span style={{paddingLeft: '15px'}} className='red'>color:</span> <span className='yellow'>red</span>;<br />{`}`}</Text>
                      
                        
                    </Box>
                    <Text fontSize={'20px'}>Kodning istalgan joyiga kommentariya qo'shishingiz mumkin:</Text>
                    <CopyToClipboard text={`/* Bu bir qatorli izoh */ p{color: red;}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
            
            


            {/* 2 */}
                    


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
              
            <Heading fontSize={{base: '30px' , md: '50px'}}>HTML va CSS Komment lari</Heading>
                <Text fontSize={'25px'}>HTML darsligidan siz <span className='red'>{`<!--...-->`}</span> sintaksisidan foydalanib, HTML manbangizga sharhlar <br /> qo'shishingiz mumkinligini bilib oldingiz.br <br /> Quyidagi misolda biz HTML va CSS izohlarining kombinatsiyasidan foydalanamiz:</Text>
                

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'670px', md: '800px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Quyidagi CSS qoidasi <span className='red'>id=</span><span className='yellow'>"para1</span> bilan HTML elementiga qo'llaniladi:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'555px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>{`<`}!DOCTYPE <span className='red'>html</span>{`>`} <br /> <span className='purple'>{`<html>`}</span> <br /> <span className='purple'>{`<head>`}</span> <br /> <span className='purple'>{`<style>`}</span> <br /> p{`{`} <br /> <span style={{paddingLeft: '15px'}} className='red'>color:</span> <span className='yellow'>red</span>; <span className='gray'>/* Bu bir qatorli izoh */</span> <br />{`}`} <br /><span className='purple'>{`</head>`}</span> <br /> <span className='purple'>{`</style>`}</span> </Text> <br />
                    <Text fontSize={'20px'} className='purple'>{`<h2`}{`>`}My Heading{`</h1>`}</Text> <br />

                    <Text fontSize={'20px'} className='gray'>{`<--`} These paragraphs will be red {`-->`}</Text>
                    <Text className='purple' fontSize={'20px'}>{`<p`}{`>`}Hello World!{`</p>`}</Text>
                    <Text className='purple' fontSize={'20px'}>{`<p`}{`>`}This paragraph is styled with CSS.{`</p>`}</Text>
                    <Text className='purple' fontSize={'20px'}>{`<p`}{`>`}CSS comments are not shown in the output.{`</p>`}<br /> <br /> {`</body>`}</Text> 
                    
                    


                        
                    </Box>
                    <CopyToClipboard text={`<!DOCTYPE html> <html> <head> <style> p{ color: red; /* Bu bir qatorli izoh */ } </head> </style> <h2>My Heading</h1> <-- These paragraphs will be red --> <p>Hello World!</p> <p>This paragraph is styled with CSS.</p> <p>CSS comments are not shown in the output.</p> </body>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            </Box>


    </Box>
  )
}

export default Css5dars
