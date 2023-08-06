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

const Css16dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Border Width</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />





            {/* 1 */}
    
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>CSS Border Width</Heading>
                <Text fontSize={'25px'}>Border-width xossasi to‘rtta chegaraning kengligini belgilaydi.</Text>
                <Text fontSize={'20px'}>Kenglik ma'lum o'lcham sifatida (px, pt, sm, em, va hokazo) yoki oldindan belgilangan uchta <br /> qiymatdan biri yordamida o'rnatilishi mumkin: ingichka, o'rta yoki qalin:</Text>
                

                <Box  width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'1100px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Turli chegara kengliklarining namoyishi:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'530px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p.one{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span><span className='yellow'>solid;</span> <br />  <span style={{paddingLeft:'20px'}} className='red'>border-width:</span><span className='yellow'>5px;</span> <br />{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p.one{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span><span className='yellow'>solid;</span> <br />  <span style={{paddingLeft:'20px'}} className='red'>border-width:</span><span className='yellow'>medium;</span> <br />{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p.one{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span><span className='yellow'>dotted;</span> <br />  <span style={{paddingLeft:'20px'}} className='red'>border-width:</span><span className='yellow'>2px;</span> <br />{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p.one{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span><span className='yellow'>doshed;</span> <br />  <span style={{paddingLeft:'20px'}} className='red'>border-width:</span><span className='yellow'>thick;</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                    <Text fontSize={'20px'}>Natija:</Text>
                    <Box width={'90%'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'}  overflow={'scroll'}  borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'} pt={'10px'} gap={{base: '15px', md: '1rem'}}>
                        <BorderProps borderStyle={'solid'} borderw={'5px'} text={'dotted border.'}  />
                        <BorderProps borderStyle={'solid'} borderw={'medium'} text={'dashed border.'}  />
                        <BorderProps borderStyle={'dotted'} borderw={'2px'} text={'dashed border.'}  />
                        <BorderProps borderStyle={'dotted'} borderw={'thick'} text={'double border.'}  />
                    </Box>

                </Box>
            </Box>
            <Divider mt={'20px'} />


            {/* 2 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  <Heading>Maxsus Yon Kengliklari</Heading>
                <Text fontSize={'25px'}>Chegara kengligi xususiyati birdan toʻrtgacha qiymatga ega boʻlishi mumkin (yuqori chegara, oʻng chegara, pastki chegara va chap chegara uchun):</Text>

            <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                

                <Box  width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'690px'}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'510px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p.one{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span><span className='yellow'>solid;</span> <br />  <span style={{paddingLeft:'20px'}} className='red'>border-width:</span><span className='yellow'>5px 20px;</span> <span className='gray'>/* yuqori va pastki 5px, yon tomonlarda 20px */</span> <br />{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p.one{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span><span className='yellow'>solid;</span> <br />  <span style={{paddingLeft:'20px'}} className='red'>border-width:</span><span className='yellow'>20px 5px;</span> <span className='gray'>/* yuqori va pastda 20px, yon tomonlarda 5px */</span> <br />{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p.one{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span><span className='yellow'>dotted;</span> <br />  <span style={{paddingLeft:'20px'}} className='red'>border-width:</span><span className='yellow'>2px;</span> <br />{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p.one{`{`} <br /> <span style={{paddingLeft:'20px'}} className='red'>border-style:</span><span className='yellow'>doshed;</span> <br />  <span style={{paddingLeft:'20px'}} className='red'>border-width:</span><span className='yellow'>25px 10px 4px 35px;</span> <span className='gray'>/* 25px tepada, 10px oʻngda, 4px pastda va 35px chapda */</span> <br />{`}`}</Text>
                      
                        
                    </Box>
                <CopyToClipboard text={`p.one {border-style: solid; border-width: 5px 20px;   /* yuqori va pastki 5px, yon tomonlarda 20px */}p.two {   border-style: solid;    border-width: 20px 5px;    /* yuqori va pastda 20px, yon tomonlarda 5px */}p.three {  border-style: dotted;   border-width: 2px;}p.four {   border-style: solid; border-width: 25px 10px 4px 35px;    /* 25px tepada, 10px oʻngda, 4px pastda va 35px chapda */}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            </Box>
            

            <Divider mt={'20px'} />



            

            </Box>
    </Box>
  )
}

export default Css16dars
