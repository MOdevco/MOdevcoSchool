import { Box , Flex , Heading , Button , Text , Image} from '@chakra-ui/react'
import { HamburgerIcon , CloseIcon } from '@chakra-ui/icons'
import Sidebar from '../components/sidebar/sidebar'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    useToast,Divider
  } from '@chakra-ui/react'
import AccordionItenm from '../components/accordion/accordion'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useState } from 'react'
import { vsc, vsp } from '../assets'

const Html3dars = () => {
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
  return (
    <Box pt={'200px'} width={'100%'} bg={'#1A202C'} height={'100%'}>
        <Box >
            <Flex >
                {onOpen && <Box>
                    <Sidebar title={'HTML DARSLARI'}   elementName={'Bosh sahifa'} html1={'/html1dars'} html2={'/html2dars'} html3={'/html3dars'} html4={'/html4dars'}  html5={'/html5dars'}  html6={'/html6dars'}  html7={'/html7dars'}  lesson1={'1-Mavzu: Html O’rnatish'} lesson2={'2-Mavzu: Html Asosiy Misollar'} lesson3={'3-Mavzu: Html Hedinglar'} lesson4={'4-Mavzu: Html Paragraphlar'} lesson5={'1-Mavzu: HTML Formatlash'} lesson6={'2-Mavzu: Html Komentariya'} lesson7={'3-Mavzu: Html Link'} lesson8={'1-Mavzu: Html Image'} lesson9={'2-Mavzu: Html Favicon va Tittle'} lesson10={'3-Mavzu: Html Table'} lesson11={'1-Mavzu: Html Listlar'} lesson12={'2-Mavzu: Html Block va Inline'} lesson13={'3-Mavzu: Html Emojilar '} lesson14={'1-Mavzu: Html Formalar'}  lesson15={'2-Mavzu: Html Form Attributlari'} lesson16={'3-Mavzu: Html Form Elemtlari'} lesson17={'1-Mavzu: Html Input turlari'} lesson18={'2-Mavzu: Html Input Attributlari'} lesson19={'3-Mavzu: Html Input va Formla'} lesson20={'1-Mavzu: Html Medialar'} lesson21={'2-Mavzu: Html Video'} lesson22={'3-Mavzu: Html Audio '} lesson23={'4-Mavzu: Html YouTube '} amalyot1={'1-Mavzu: Amaliyot'} amalyot2={'2-Mavzu: Amaliyot'} />
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
                            <AccordionItenm  html1={'/html1dars'} html2={'/html2dars'} html3={'/html3dars'} html4={'/html4dars'}  html5={'/html5dars'}  html6={'/html6dars'}  html7={'/html7dars'}  lesson1={'1-Mavzu: Html O’rnatish'} lesson2={'2-Mavzu: Html Asosiy Misollar'} lesson3={'3-Mavzu: Html Hedinglar'} lesson4={'4-Mavzu: Html Paragraphlar'} lesson5={'1-Mavzu: HTML Formatlash'} lesson6={'2-Mavzu: Html Komentariya'} lesson7={'3-Mavzu: Html Link'} lesson8={'1-Mavzu: Html Image'} lesson9={'2-Mavzu: Html Favicon va Tittle'} lesson10={'3-Mavzu: Html Table'} lesson11={'1-Mavzu: Html Listlar'} lesson12={'2-Mavzu: Html Block va Inline'} lesson13={'3-Mavzu: Html Emojilar '} lesson14={'1-Mavzu: Html Formalar'}  lesson15={'2-Mavzu: Html Form Attributlari'} lesson16={'3-Mavzu: Html Form Elemtlari'} lesson17={'1-Mavzu: Html Input turlari'} lesson18={'2-Mavzu: Html Input Attributlari'} lesson19={'3-Mavzu: Html Input va Formla'} lesson20={'1-Mavzu: Html Medialar'} lesson21={'2-Mavzu: Html Video'} lesson22={'3-Mavzu: Html Audio '} lesson23={'4-Mavzu: Html YouTube '} amalyot1={'1-Mavzu: Amaliyot'} amalyot2={'2-Mavzu: Amaliyot'} />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Hedinglar</Heading>
                    </Box>
                </Box>
            </Flex>

            <Divider mt={'40px'} />
            <Box mt={'20px'} width={'100%'}    >
                <Box pl={{base: '10px' , md: '450px'}} pt={'20px'} display={'flex'} flexDirection={'column'}  gap={'20px'}>
                    <Text fontSize={'20px'}>HTML sarlavhalari veb-sahifada ko'rsatmoqchi bo'lgan sarlavhalar yoki subtitrlardir.</Text>
                </Box>
            </Box>
            <Divider mt={'40px'} />

            <Box mt={'20px'} width={'100%'}   >
                <Box pl={{base: '10px' , md: '450px'}} display={'flex'} flexDirection={'column'}  >
                   <Box width={{base: '100%' , md: '80%'}} display={"flex"} flexDirection={'column'} alignItems={'flex-start'} gap={'20px'} height={'500px'} rounded={'20px'} p={{base: '50px' , md: '30px'}} bg={'#233242'}>
                        <Heading>Misol</Heading>
                        <Box width={'100%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} overflow={'scroll'} gap={'10px'} borderColor={'#7FFFD4'} height={'340px'} bg={'#0A1624'}>
                            <Heading fontSize={'60px'}>Heading 1</Heading>
                            <Heading fontSize={'50px'}>Heading 2</Heading>
                            <Heading fontSize={'40px'}>Heading 3</Heading>
                            <Heading fontSize={'30px'}>Heading 4</Heading>
                            <Heading fontSize={'20px'}>Heading 5</Heading>
                            <Heading fontSize={'15px'}>Heading 6</Heading>
                        </Box>
                        <CopyToClipboard text='Heading 1Heading 2Heading 3Heading 4Heading 5Heading 5' onCopy={handleClip}>
                            <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                        </CopyToClipboard>
                   </Box>
                </Box>
            </Box>
            <Divider mt={'40px'} />


            <Box mt={'20px'} width={'100%'}    >
                <Box pl={{base: '10px' , md: '450px'}} pt={'20px'} display={'flex'} flexDirection={'column'}  gap={'20px'}>
                    <Heading fontSize={'50px'}>HTML Hedinglar</Heading>
                    <Text>HTML sarlavhalari <span style={{color: 'red'}}>{`<h1> dan <h6>`}</span> teglari bilan belgilanadi.</Text>
                    <Text> <span style={{color: 'red'}}>{`<h1> eng muhim sarlavhani belgilaydi. <h6> `}</span> eng muhim sarlavhani belgilaydi.</Text>
                </Box>
            </Box>
            <Box mt={'20px'} width={'100%'}   >
                <Box pl={{base: '10px' , md: '450px'}} display={'flex'} flexDirection={'column'} minHeight={'60vh'}  >
                   <Box width={{base: '100%' , md: '80%'}} display={"flex"} flexDirection={'column'} alignItems={'flex-start'} gap={'20px'} height={'500px'} rounded={'20px'} p={{base: '50px' , md: '30px'}} bg={'#233242'}>
                        <Heading>Misol</Heading>
                        <Box width={'100%'} borderLeft={'4px'} pt={4} display={'flex'} flexDirection={'column'} overflow={'scroll'} gap={'10px'} borderColor={'#7FFFD4'} height={'340px'} bg={'#0A1624'}>
                           <Text fontSize={'25px'} color={"#9D5EBB"}>{`<h1>`} <span style={{color: 'white'}}> Heading 1</span> {`</h1>`}</Text>
                           <Text fontSize={'25px'} color={"#9D5EBB"}>{`<h2>`} <span style={{color: 'white'}}> Heading 2</span> {`</h2>`}</Text>
                           <Text fontSize={'25px'} color={"#9D5EBB"}>{`<h3>`} <span style={{color: 'white'}}> Heading 3</span> {`</h3>`}</Text>
                           <Text fontSize={'25px'} color={"#9D5EBB"}>{`<h4>`} <span style={{color: 'white'}}> Heading 4</span> {`</h4>`}</Text>
                           <Text fontSize={'25px'} color={"#9D5EBB"}>{`<h5>`} <span style={{color: 'white'}}> Heading 5</span> {`</h5>`}</Text>
                           <Text fontSize={'25px'} color={"#9D5EBB"}>{`<h6>`} <span style={{color: 'white'}}> Heading 6</span> {`</h6>`}</Text>
                        </Box>
                        <CopyToClipboard text='<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5><h6>Heading 6</h6>' onCopy={handleClip}>
                            <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                        </CopyToClipboard>
                   </Box>
                </Box>
            </Box>
                    
            
        </Box>
    </Box>
  )
}

export default Html3dars