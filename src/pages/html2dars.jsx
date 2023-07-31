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
import { useEffect, useState } from 'react'

const Html2dars = () => {
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
    <Box pt={'250px'} width={'100%'} className={'bgImage'} height={'100%'}>
        <Box >
            <Flex >
                {onOpen && <Box>
                    <Sidebar title={'HTML DARSLARI'}   elementName={'Bosh sahifa'}/>
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
                            <AccordionItenm/>
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML asosiy misollar</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'40px'} />

            <Box mt={'20px'} width={'100%'}  height={{base: '40vh' , md: '30vh'}}  >
                <Box pl={{base: '10px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'}>
                    <Heading fontSize={{base: '20px' , md: '50px'}}>HTML hujjatlar</Heading>
                    <Text fontSize={'20px'}>Barcha HTML hujjatlari hujjat turi deklaratsiyasi bilan boshlanishi kerak: <span style={{color: 'red'}}>{`<!DOCTYPE html>.`} </span></Text>
                    <Text fontSize={'20px'}>HTML hujjatining o'zi <span style={{color: 'red'}}>{`<html> bilan boshlanadi va </html>`}</span> bilan tugaydi. </Text>
                    <Text fontSize={'20px'}>HTML hujjatining ko'rinadigan qismi <span style={{color: 'red'}}>{`<body> va </body>`}</span> orasida joylashgan. </Text>

                    <Box mt={'20px'} width={'100%'}  height={{base: '40vh' , md: '30vh'}} minHeight={{base: '90vh' , md: '100vh'}}  >
                        <Box  display={'flex'} flexDirection={'column'} gap={'20px'} >
                            
                            <Box rounded={'20px'} overflow={'scroll'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'} gap={'30px'} width={{base: '100%' , md: '80%'}} height={'57vh'} p={{base: '40px' , md: '80px'}} bg={'#233242'}>
                                <Heading>Misol</Heading>
                                <Box overflowX={'scroll'} borderLeft={'4px'}  borderColor={'#7FFFD4'} width={'100%'} height={'100vh'} bg={'#0A1624'}>
                                    <Text color={'#9D5EBB'}>{`<!DOCTYPE `}<span style={{color:'red'}}>{`html`}</span> <span style={{color: '#9D5EBB'}}>{`>`}</span> </Text>
                                    <Text color={'#9D5EBB'}>{`<html `} <span style={{color: 'red'}}>lang=</span> <span style={{color: 'yellow'}}>"en"</span> <span style={{color: '#9D5EBB'}}>{`>`}</span> </Text>
                                    <Text color={'#9D5EBB'}>{`<head> `} </Text>

                                    <Text pl={'30px'} color={'#9D5EBB'}>{`<title> `} <span style={{color: 'white'}}> Document</span> {`</title>`} </Text>
                                    <Text color={'#9D5EBB'}>{`<head> `} </Text>
                                    <Text color={'#9D5EBB'}>{`<body> `} </Text>

                                    <Text pl={'30px'} color={'#9D5EBB'}>{`<h1> `} <span style={{color: 'white'}}>Shu holatda </span> {`</h1>`} </Text>
                                    <Text pl={'30px'} color={'#9D5EBB'}>{`<p> `}<span style={{color: 'white'}}>Shu holatda </span> {`</p>`} </Text>

                                    <Text color={'#9D5EBB'}>{`<body> `} </Text>
                                    <Text color={'#9D5EBB'}>{`</head> `} </Text>
                                    
                                </Box>
                                <CopyToClipboard onCopy={handleClip} text='<!DOCTYPE html><html lang="en"><head><title>Document</title></head><body><p>Shu holatda</p><h1>Shuholatda</h1></body></html>'>
                                    <Button height={'120px'} bg={'#7FFFD4'}>Nusxa olish</Button>
                                </CopyToClipboard>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Divider mt={{base: '570px' , md: '600px'}} />


            <Box mt={'20px'} width={'100%'}  height={{base: '40vh' , md: '30vh'}}  >
                <Box pl={{base: '10px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'}>
                    <Heading fontSize={{base: '20px' , md: '50px'}}>{`<!DOCTYPE> Deklaratsiyasi`}</Heading>
                    <Text fontSize={'20px'}><span style={{color: 'red'}}>{`<!DOCTYPE>`}</span> deklaratsiyasi hujjat turini ifodalaydi va brauzerlarga veb-sahifalarni to'g'ri ko'rsatishga yordam beradi.</Text>
                    <Text fontSize={'20px'}>U faqat bir marta, sahifaning yuqori qismida (har qanday HTML teglaridan oldin) paydo bo'lishi kerak.</Text>
                    <Text fontSize={'20px'}><span style={{color: 'red'}}>{`<!DOCTYPE>`}</span> deklaratsiyasi katta-kichik harflarga sezgir emas.</Text>
                    <Text fontSize={'20px'}>HTML5 uchun <span style={{color: 'red'}}>{`<!DOCTYPE>`}</span> deklaratsiyasi:</Text>
                </Box>
            </Box>
            
            <Box mt={'100px'} width={'100%'}  height={{base: '40vh' , md: '40vh'}}  >
                <Box pl={{base: '10px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'}>
                    <Box rounded={'20px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'flex-start'} gap={'30px'} width={{base: '100%' , md: '80%'}} height={'20vh'} p={{base: '40px' , md: '80px'}} bg={'#233242'}>
                        <Box borderLeft={'4px'}   width={'100%'} p={'20px'} bg={'#0A1624'}  borderColor={'#7FFFD4'}>
                            <Text color={"#9D5EBB"}>{`<!DOCTYPE `} <span style={{color: 'red'}}> {`html `}</span> <span style={{color: '#9D5EBB'}}>{`>`}</span></Text>
                        </Box>
                    </Box>
                </Box>
            </Box>


           


            
        </Box>
    </Box>
  )
}

export default Html2dars