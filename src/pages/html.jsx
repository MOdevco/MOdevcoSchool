import { Box , Flex ,Button , Heading , Text} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
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
    useEffect(() => {
        window.scroll(0,0)
    }, [])

  return (
    <Box pt={'300px'} width={'100%'} className={'bgImage'} height={'100%'}>
        <Box >
            <Flex >
                {onOpen && <Box>
                    <Sidebar title={'HTML DARSLARI'} elementName={'Bosh sahifa'}  />
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
                            <AccordionItenm   />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML DARSLARI</Heading>
                    </Box>

                </Box>
            </Flex>
            <Box mt={'20px'} width={'100%'} bg={'#233242'} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'center'} height={{base: '40vh' , xl: '40vh'}}>
                <Box pl={{base: '10px' , md: '450px'}} fontSize={{base: '20px' , md: '25px'}} display={'flex'} flexDirection={'column'} gap={'30px'} py={'50px'}>
                    <Text >HTML veb-sahifalar uchun standart belgilash tilidir.</Text>
                    <Text >HTML yordamida siz o'z veb-saytingizni yaratishingiz mumkin.</Text>
                    <Text >HTMLni o'rganish juda oson - bu sizga yoqadi!</Text>
                </Box>
            </Box>
            <Box pl={{base: '10px' , md: '450px'}} mt={'20px'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML nima?</Heading>
            </Box>
            <Box mt={'20px'} width={'100%'} bg={'#233242'} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'center'} height={{base: '65vh' , md: '65vh'}}>
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
               <Box width={'100%'} borderLeft={'4px'} overflow={'scroll'} borderColor={'#7FFFD4'} height={'30vh'} bg={'#0A1624'}>
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