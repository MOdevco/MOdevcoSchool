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

const Css29dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Outline Shorthand</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box height={{'2xl':'60vh', xl: '80vh'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Heading fontSize={'20px'}>CSS Outline Shorthand</Heading>
                <Text fontSize={'20px'}>Outline xususiyati quyidagi individual kontur xususiyatlarini o'rnatish uchun stenografiya xususiyatidir:</Text>
                <ul className='ulll'>
                    <li>outline-width </li>
                    <li>outline-style (required)</li>
                    <li>outline-color</li>
                </ul>
                <Text fontSize={'20px'}>Kontur xususiyati yuqoridagi roʻyxatdagi bir, ikki yoki uchta qiymat sifatida koʻrsatilgan. Qiymatlarning <br /> tartibi muhim emas.</Text>
                <Text>Quyidagi misolda stenogramma kontur xususiyati bilan belgilangan ba'zi konturlar ko'rsatilgan:</Text>
                <Box display={'flex'} flexDirection={'column'} gap={'20px'} w={'100%'}>
                    <OutlineProps borderStyle={'dashed'} text={'dashed outline.'} borderColor={'white'} outline={'thin'} />
                    <OutlineProps borderStyle={'dotted'} text={'dotted red outline.'} width={'5px'} borderColor={'red'} outline={'medium'} />
                    <OutlineProps borderStyle={'solid'} text={'5px solid yellow outline.'} width={'5px'} borderColor={'#FFFF00'} outline={'thick'} />
                    <OutlineProps borderStyle={'ridge'} text={'thick ridge pink outline.'} width={'thick'} borderColor={'#B24D4D'} outline={'4px sick'} />
                </Box>
            </Box>






            {/* 1 */}
            
            
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'390px', xl: '390px', md: '450px', lg: '400px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}> <span className='red'>{`<div>`}</span>  elementining balandligi va kengligini o'rnating:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'150px'} bg={'#0A1624'} pt={'10px'}>
                      
                     <Text fontSize={'20px'} className='purple'>p.ex1 {`{`} <span className='red'>outline:</span> <span className='yellow'>dashed</span> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>p.ex2 {`{`} <span className='red'>outline:</span> <span className='yellow'>dotted red</span> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>p.ex3 {`{`} <span className='red'>outline:</span> <span className='yellow'>5ps solid yellow</span> {`}`}</Text>
                     <Text fontSize={'20px'} className='purple'>p.ex3 {`{`} <span className='red'>outline:</span> <span className='yellow'>thick ridge pink</span> {`}`}</Text>
                     
                        
                    </Box>
                    <CopyToClipboard text={`p.ex1 {outline: dashed; p.ex2 {outline: dotted red; p.ex3 {outline: 5px solid yellow; p.ex4 {outline: thick ridge pink;}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                
            </Box>
            <Divider mt={'20px'} />
            </Box>
    </Box>
  )
}

export default Css29dars
