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
import { vsc, vsp } from '../assets'
const Html1dars = () => {
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
    <Box pt={'250px'} className={'bgImage'} width={'100%'} height={'100%'}>
        <Box >
            <Flex >
                {onOpen && <Box>
                    <Sidebar title={'HTML DARSLARI'} elementName={'Bosh sahifa'} />
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML O’rnatish</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'40px'} />
            <Box mt={'20px'} width={'100%'}  height={{base: '40vh' , md: '30vh'}}  >
                <Box pl={{base: '10px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'}>
                    <Heading fontSize={{base: '20px' , md: '50px'}}>1-Qadam</Heading>
                    <Text fontSize={'20px'}>Visuale studio dasturini yusklash</Text>
                    <Image width={{base: '100%' , md: '600px'}} src={vsp}></Image>
                </Box>
            </Box>
            <Divider mt={{base: '10px' , xl: '300px'}} />


            <Box mt={'20px'} width={'100%'}  height={{base: '40vh' , md: '30vh'}}  >
                <Box pl={{base: '10px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'}>
                    <Heading fontSize={{base: '20px' , md: '50px'}}>2-Qadam</Heading>
                    <Text fontSize={'20px'}>VS code ga kirish va papka ochish</Text>
                    <Image width={{base: '100%' , md: '600px'}} src={vsc}></Image>
                </Box>
            </Box>
            <Divider mt={{base: '10px' , xl: '430px'}} />



            <Box mt={'20px'} width={'100%'}  height={{base: '40vh' , md: '30vh'}} minHeight={{base: '70vh' , md: '60vh'}}  >
                <Box pl={{base: '10px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'}>
                    <Heading fontSize={{base: '20px' , md: '50px'}}>3-Qadam</Heading>
                    <Text fontSize={'20px'} maxWidth={"900px"}>Papkadan so’ng file ochish fileni nomi har doim projectda bitta index.html bo’lish kerak bo’ladi chunki brouser faqar index filenigina tushunadi html tehnalogiyasini o’rganyotdanizda file nomi ohiri tehnalogiya nomi bilan tugashi shart bo’ladi yani index.html </Text>
                    <Image width={{base: '100%' , md: '600px'}} src={vsc}></Image>
                </Box>
            </Box>
            <Divider mt={{base: '10px' , xl: '200px'}} />
        


            <Box mt={'20px'} width={'100%'}  height={{base: '40vh' , md: '30vh'}} minHeight={{base: '90vh' , md: '100vh'}}  >
                <Box pl={{base: '10px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} >
                    <Heading fontSize={{base: '20px' , md: '50px'}}>4-Qadam</Heading>
                    <Text fontSize={'20px'} maxWidth={"900px"}>File ichiga kiriladi va boshlang’ich kodlar chaqirildi kodlarni ! shu belgi yoki html5 buyrug’i yordamida chiqiriladi.</Text>
                    <Box rounded={'20px'} overflow={'scroll'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'} gap={'30px'} width={{base: '100%' , md: '80%'}} height={'60vh'} p={{base: '40px' , md: '80px'}} bg={'#233242'}>
                        <Heading>Misol</Heading>
                        <Box overflowX={'scroll'} borderLeft={'4px'}  borderColor={'#7FFFD4'} width={'100%'} height={'100vh'} bg={'#0A1624'}>
                            <Text color={'#9D5EBB'}>{`<!DOCTYPE `}<span style={{color:'red'}}>{`html`}</span> <span style={{color: '#9D5EBB'}}>{`>`}</span> </Text>
                            <Text color={'#9D5EBB'}>{`<html `} <span style={{color: 'red'}}>lang=</span> <span style={{color: 'yellow'}}>"en"</span> <span style={{color: '#9D5EBB'}}>{`>`}</span> </Text>
                            <Text color={'#9D5EBB'}>{`<head> `} </Text>

                            <Text pl={'30px'} color={'#9D5EBB'}>{`<meta charset=`} <span style={{color: 'yellow'}}>{`"UTF-8"`}</span> <span style={{color: '#9D5EBB'}}>{`>`}</span> </Text>
                            <Text pl={'30px'} color={'#9D5EBB'}>{`<meta http-equiv=`} <span  style={{color: 'yellow'}} >{`"X-UA-Compatible"`}</span> <span style={{color: '#9D5EBB'}}>{`content=`}</span> <span  style={{color: 'yellow'}}>{`"IE=edge"`}</span> <span  style={{color: '#9D5EBB'}}>{`>`}</span> </Text>
                            <Text pl={'30px'} color={'#9D5EBB'}>{`<meta name=`} <span style={{color: 'yellow'}}>"viewport"</span> <span style={{color: '#9D5EBB'}}>content=</span> <span style={{color: 'yellow'}}>"width=device-width, initial-scale=1.0"</span> <span style={{color: '#9D5EBB'}}>{`>`}</span> </Text>
                            <Text pl={'30px'} color={'#9D5EBB'}>{`<title> `} <span style={{color: 'white'}}> Document</span> {`</title>`} </Text>
                            <Text color={'#9D5EBB'}>{`<head> `} </Text>
                            <Text color={'#9D5EBB'}>{`<body> `} </Text>
                            <Text pl={'30px'}>Kod yoziladi</Text>
                            <Text color={'#9D5EBB'}>{`<body> `} </Text>
                            <Text color={'#9D5EBB'}>{`</head> `} </Text>
                            
                        </Box>
                        <CopyToClipboard onCopy={handleClip} text='<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible"content="IE=edge"><meta name="viewport"content="width=device-width, initial-scale=1.0"><title>Document</title></head><body>kod yozilish joyi</body></html>'>
                            <Button height={'120px'} bg={'#7FFFD4'}>Nusxa olish</Button>
                        </CopyToClipboard>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Html1dars