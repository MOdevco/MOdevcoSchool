import { Box , Flex ,Button , Heading , Text} from '@chakra-ui/react'
import { useState } from 'react'
import Sidebar from '../components/sidebar/sidebar'
import { HamburgerIcon , CloseIcon} from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    useToast
  } from '@chakra-ui/react'
import AccordionItenm from '../components/accordion/accordion'
import CopyToClipboard from 'react-copy-to-clipboard'
const Html = () => {
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
                    <Sidebar title={'HTML DARSLARI'}   elementName={'Bosh sahifa'} html1={'/html1dars'} html2={'/html2dars'} html3={'/html3dars'} html4={'/html4dars'}  lesson1={'1-Mavzu: Html O’rnatish'} lesson2={'2-Mavzu: Html Asosiy Misollar'} lesson3={'3-Mavzu: Html Hedinglar'} lesson4={'4-Mavzu: Html Paragraphlar'} lesson5={'1-Mavzu: HTML Formatlash'} lesson6={'2-Mavzu: Html Komentariya'} lesson7={'3-Mavzu: Html Link'} lesson8={'1-Mavzu: Html Image'} lesson9={'2-Mavzu: Html Favicon va Tittle'} lesson10={'3-Mavzu: Html Table'} lesson11={'1-Mavzu: Html Listlar'} lesson12={'2-Mavzu: Html Block va Inline'} lesson13={'3-Mavzu: Html Emojilar '} lesson14={'1-Mavzu: Html Formalar'}  lesson15={'2-Mavzu: Html Form Attributlari'} lesson16={'3-Mavzu: Html Form Elemtlari'} lesson17={'1-Mavzu: Html Input turlari'} lesson18={'2-Mavzu: Html Input Attributlari'} lesson19={'3-Mavzu: Html Input va Formla'} lesson20={'1-Mavzu: Html Medialar'} lesson21={'2-Mavzu: Html Video'} lesson22={'3-Mavzu: Html Audio '} lesson23={'4-Mavzu: Html YouTube '} amalyot1={'1-Mavzu: Amaliyot'} amalyot2={'2-Mavzu: Amaliyot'} />
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
                            <AccordionItenm  html1={'/html1dars'} html2={'/html2dars'} html3={'/html3dars'}  lesson1={'1-Mavzu: Html O’rnatish'} lesson2={'2-Mavzu: Html Asosiy Misollar'} lesson3={'3-Mavzu: Html Hedinglar'} lesson4={'3-Mavzu: Html Paragraphlar'} lesson5={'1-Mavzu: HTML Formatlash'} lesson6={'2-Mavzu: Html Komentariya'} lesson7={'3-Mavzu: Html Link'} lesson8={'1-Mavzu: Html Image'} lesson9={'2-Mavzu: Html Favicon va Tittle'} lesson10={'3-Mavzu: Html Table'} lesson11={'1-Mavzu: Html Listlar'} lesson12={'2-Mavzu: Html Block va Inline'} lesson13={'3-Mavzu: Html Emojilar '} lesson14={'1-Mavzu: Html Formalar'}  lesson15={'2-Mavzu: Html Form Attributlari'} lesson16={'3-Mavzu: Html Form Elemtlari'} lesson17={'1-Mavzu: Html Input turlari'} lesson18={'2-Mavzu: Html Input Attributlari'} lesson19={'3-Mavzu: Html Input va Formla'} lesson20={'1-Mavzu: Html Medialar'} lesson21={'2-Mavzu: Html Video'} lesson22={'3-Mavzu: Html Audio '} lesson23={'4-Mavzu: Html YouTube '} amalyot1={'1-Mavzu: Amaliyot'} amalyot2={'2-Mavzu: Amaliyot'} />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML DARSLARI</Heading>
                    </Box>

                </Box>
            </Flex>
            <Box mt={'20px'} width={'100%'} bg={'#233242'} height={{base: '40vh' , md: '30vh'}}>
                <Box pl={{base: '10px' , md: '450px'}} fontSize={{base: '20px' , md: '25px'}} display={'flex'} flexDirection={'column'} gap={'30px'} py={'50px'}>
                    <Text >HTML veb-sahifalar uchun standart belgilash tilidir.</Text>
                    <Text >HTML yordamida siz o'z veb-saytingizni yaratishingiz mumkin.</Text>
                    <Text >HTMLni o'rganish juda oson - bu sizga yoqadi!</Text>
                </Box>
            </Box>
            <Box pl={{base: '10px' , md: '450px'}} mt={'20px'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML nima?</Heading>
            </Box>
            <Box mt={'20px'} width={'100%'} bg={'#233242'} height={{base: '65vh' , md: '50vh'}}>
                <Box pl={{base: '10px' , md: '450px'}} fontSize={{base: '20px' , md: '25px'}} display={'flex'} flexDirection={'column'} gap={'30px'} py={'50px'}>
                    <ul style={{display: 'flex' , flexDirection: 'column' , gap: '10px'}}>
                        <li>HTML stands for Hyper Text Markup Language</li>
                        <li>HTML veb-sahifalarni yaratish uchun standart belgilash tilidir</li>
                        <li>HTML Web-sahifaning tuzilishini tavsiflaydi</li>
                        <li>HTML bir qator elementlardan iborat</li>
                        <li>HTML elementlari brauzerga kontentni qanday ko'rsatishni aytadi</li>
                        <li>HTML elementlari "bu sarlavha", "bu paragraf", <br /> "bu havola" va boshqalar kabi kontent qismlarini belgilaydi.</li>
                    </ul>
                </Box>
            </Box>

            <Box pl={{base: '10px' , md: '450px'}} fontSize={{base: '20px' , md: '25px'}} display={'flex'} flexDirection={'column'} gap={'30px'} py={'50px'}>
               <Heading fontSize={{base: '30px' , md: '50px'}}>
                    HTML bilan oson o'rganish "O'zingiz sinab ko'ring"
               </Heading>
               <Text>
                    "O'zingiz sinab ko'ring" muharririmiz yordamida siz HTML kodni tahrirlashingiz va natijani ko'rishingiz mumkin:
               </Text>
            </Box>

            <Box  pl={{base: '10px' , md: '450px'}} bg={'#233242'} fontSize={{base: '20px' , md: '25px'}} display={'flex'} flexDirection={'column'} gap={'30px'} py={'50px'}>
                <Heading>Misol</Heading>
               <Box width={'100%'} borderLeft={'4px'} borderColor={'#7FFFD4'} height={'30vh'} bg={'#0A1624'}>
                    <Text color={'#9D5EBB'}>{`<!DOCTYPE `} <span style={{color:'red'}}>{`html>`}</span> </Text>
                    <Text color={'#9D5EBB'}>{`<html>`}</Text>
                    <Text pl={'30px'} color={'#9D5EBB'}>{`<title>`} <span style={{color: 'white'}}>Html darslari</span> {`</title>`} </Text>
                    <Text color={'#9D5EBB'}>{`<body>`}</Text>
                    <Text pl={'30px'} color={'#9D5EBB'}>{`<h1>`} <span style={{color: 'white'}}>Bu heading</span> {`</h1>`} </Text>
                    <Text pl={'30px'} color={'#9D5EBB'}>{`<p>`} <span style={{color: 'white'}}>Bu paragraph</span> {`</p>`} </Text>
                    <Text color={'#9D5EBB'}>{`</body>`}</Text>
                    <Text color={'#9D5EBB'}>{`<html>`}</Text>
               </Box>
               <CopyToClipboard onCopy={handleClip} text='<!DOCTYPE html><html><title>HTML Tutorial</title><body><h1>This is a heading</h1><p>This is a paragraph.</p></body></html> '>
                    <Box>
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </Box>
               </CopyToClipboard>
            </Box>
        </Box>
    </Box>
  )
}

export default Html