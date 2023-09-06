
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
import { icons, icons3, icons4, photo } from '../assets'

const Css46dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '40px', lg: '50px'}}>CSS Icons</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />
            <Box height={{'2xl':'6vh', md: '15vh',lg: '25h', xl: '8vh'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Text fontSize={'20px'}>Belgilar kutubxonasi yordamida <span className='red'>HTML</span> sahifangizga osongina qo'shilishi mumkin.</Text>
            </Box>
            <Divider mt={'20px'} />
            <Box height={{'2xl':'15vh', md: '15vh',lg: '25h', xl: '8vh'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pt={4} pl={{base: '20px' , md: '450px',}}>
                <Image w={{'2xl': '1022px', md: '100%'}} h={{md:'80px', '2xl': 'auto', base: '80px'}} src={photo} />
            </Box>
            <Divider mt={'20px'} />
            <Box height={{'2xl':'30vh', md: '15vh',lg: '25h', xl: '8vh'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} gap={'1rem'} flexDirection={'column'} pl={{base: '20px' , md: '450px',}}>
                <Heading fontSize={{md: '50px', base: '30px'}}>Iconlarni qanday qo'shish kerak</Heading>
                <Text fontSize={'20px'}><span className='red'>HTML</span> sahifangizga belgi qo'shishning eng oddiy usuli <span className='red'>Font Awesome</span> kabi piktogramma kutubxonasi.</Text>
                <Text fontSize={'20px'}>Belgilangan piktogramma sinfining nomini istalgan <span className='red'>HTML</span> elementiga qo'shing {`(`}masalan, <span className='red'>{`<i>`}</span> yoki <span className='red'>{`<span>`}</span>{`)`}.</Text>
                <Text fontSize={'20px'}>Quyidagi piktogramma kutubxonalaridagi barcha piktogrammalar kengaytiriladigan vektorlar bo'lib, ularni CSS (o'lcham, <br /> rang, soya va boshqalar) yordamida sozlash mumkin.</Text>
            </Box>
            <Divider mt={'20px'} />
           






            {/* 1 */}
            
            
           
            
            <Box className='media' pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh',base: '30vh'}}>
            <Heading fontSize={{md: '50px', base: '30px'}}>Font Awesome Icons</Heading>
                <Text fontSize={'20px'}>Font Awesome piktogrammalaridan foydalanish uchun fontawesome.com saytiga o‘ting, tizimga kiring va <span className='red'>HTML</span> <br /> sahifangizning <span className='red'>{`<head>`}</span> bo‘limiga qo‘shish uchun kodni oling:</Text>
                <Text fontSize={'20px'} className='purple'>{`<script`} <span className='red'>src="</span><span className='yellow'>"https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"</span><span className='red'>"</span> <span className='red'>crossorigin="</span><span className='yellow'>anonymous</span><span className='red'>"</span> {`>`}{`</script>`}</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '800px', md: '600px', '2xl': '850px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'480px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>{`<!DOCTYPE html>`} <br /> {`<html>`} <br /> {`<`}head{`>`} <br /> {`<`}script <span className='red'>src="</span><span className='yellow'>https://kit.fontawesome.com/a076d05399.js</span><span className='red'>"</span> <span className='red'>crossorigin="</span> <span className='yellow'>anonymus</span><span className='red'>"</span>{`>`} {`</script>`} <br /> {`</head>`} <br /> {`<body>`} <br /> <br /> {`<i`} <span className='red'>class="</span><span className='yellow'>fas fa-cloud</span><span className='red'>"</span> {`>`}{`</i>`} <br /> {`<i`} <span className='red'>class="</span><span className='yellow'>fas fa-heart</span><span className='red'>"</span> {`>`}{`</i>`} <br /> {`<i`} <span className='red'>class="</span><span className='yellow'>fas fa-car</span><span className='red'>"</span> {`>`}{`</i>`} <br /> {`<i`} <span className='red'>class="</span><span className='yellow'>fas fa-file</span><span className='red'>"</span> {`>`}{`</i>`} <br /> {`<i`} <span className='red'>class="</span><span className='yellow'>fas fa-bars</span><span className='red'>"</span> {`>`}{`</i>`} <br /> <br /> {`</body>`} <br /> {`</html>`}  </Text>
                     
                    </Box>
                    <Text fontSize={'20px'}>Natija:</Text>
                    <Image w={{'2xl': '959px', md: '90%', base: '90%'}} h={{md:'80px', '2xl': 'auto', base: '80px'}} src={icons}></Image>
                    <CopyToClipboard text={`<!DOCTYPE html> <html> <head> <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script> </head> <body> <i class="fas fa-cloud"></i <i class="fas fa-heart"></i <i class="fas fa-car"></i <i class="fas fa-file"></i <i class="fas fa-bars"></i> </body> </html>` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />




            {/* 2 */}
            <Box className='media' pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh',base: '30vh'}}>

            <Heading fontSize={{md: '50px', base: '30px'}}>Bootstrap Icons</Heading>
                <Text fontSize={'20px'}>Bootstrap glifikalaridan foydalanish uchun <span className='red'>HTML</span> sahifangizning <span className='red'>{`<head>`}</span> boʻlimi ga quyidagi qatorni qoʻshing:</Text>
                <Text fontSize={'20px'} className='purple'>{`<link`} <span className='red'>rel="</span><span className='yellow'>stylesheet</span><span className='red'>"</span> <span className='red'>href="</span><span className='yellow'>https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css</span>{`>`}</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '800px', md: '600px', '2xl': '850px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'480px'} bg={'#0A1624'} pt={'10px'}>

                    <Text fontSize={'20px'} className='purple'>{`<!DOCTYPE html>`} <br /> {`<html>`} <br /> {`<`}head{`>`} <br />                     <Text fontSize={'20px'} className='purple'>{`<link`} <span className='red'>rel="</span><span className='yellow'>stylesheet</span><span className='red'>"</span> <span className='red'>href="</span><span className='yellow'>https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css</span><span className='red'>"</span>{`>`}</Text> {`</head>`} <br /> {`<body>`} <br /> <br /> {`<i`} <span className='red'>class="</span><span className='yellow'>glyphicon glyphicon-cloud</span><span className='red'>"</span> {`>`}{`</i>`} <br /> {`<i`} <span className='red'>class="</span><span className='yellow'>fas fa-remove</span><span className='red'>"</span> {`>`}{`</i>`} <br /> {`<i`} <span className='red'>class="</span><span className='yellow'>fas fa-user</span><span className='red'>"</span> {`>`}{`</i>`} <br /> {`<i`} <span className='red'>class="</span><span className='yellow'>fas fa-envelope</span><span className='red'>"</span> {`>`}{`</i>`} <br /> {`<i`} <span className='red'>class="</span><span className='yellow'>fas fa-thumbs-up</span><span className='red'>"</span> {`>`}{`</i>`} <br /> <br /> {`</body>`} <br /> {`</html>`}  </Text>
                     
                    </Box>
                    <Text fontSize={'20px'}>Natija:</Text>
                    <Image w={{'2xl': '959px', md: '90%', base: '90%'}} h={{md:'80px', '2xl': 'auto', base: '80px'}} src={icons3}></Image>
                    <CopyToClipboard text={`<!DOCTYPE html <html <head> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" </head> <body> <i class="glyphicon glyphicon-cloud"></i> <i class="glyphicon glyphicon-remove"></i <i class="glyphicon glyphicon-user"></i <i class="glyphicon glyphicon-envelope"></i> <i class="glyphicon glyphicon-thumbs-up"></i> </body> </html>` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />




            {/* 4 */}
            <Box className='media' pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'30vh', md: '30vh',base: '30vh'}}>

            <Heading fontSize={{md: '50px', base: '30px'}}>Google Icons</Heading>
            

                <Text fontSize={'20px'}>Google piktogrammalaridan foydalanish uchun <span className='red'>HTML</span> sahifangizning <span className='red'>{`<head>`}</span> boʻlimiga quyidagi qatorni qoʻshing:</Text>
                <Text fontSize={'20px'} className='purple'>{`<link`} <span className='red'>rel="</span><span className='yellow'>stylesheet</span><span className='red'>"</span> <span className='red'>href="</span><span className='yellow'>https://fonts.googleapis.com/icon?family=Material+Icons</span>{`>`}</Text>
                <Text fontSize={'20px'}>Eslatma: Yuklab olish yoki o'rnatish shart emas!</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'550px', base: '800px', md: '600px', '2xl': '850px'}}  py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'480px'} bg={'#0A1624'} pt={'10px'}>

                    <Text fontSize={'20px'} className='purple'>{`<!DOCTYPE html>`} <br /> {`<html>`} <br /> {`<`}head{`>`} <br />                     <Text fontSize={'20px'} className='purple'>{`<link`} <span className='red'>rel="</span><span className='yellow'>stylesheet</span><span className='red'>"</span> <span className='red'>href="</span><span className='yellow'>https://fonts.googleapis.com/icon?family=Material+Icons</span><span className='red'>"</span>{`>`}</Text> {`</head>`} <br /> {`<body>`} <br /> <br /> {`<i`} <span className='red'>class="</span><span className='yellow'>material-icons</span><span className='red'>"</span>{`>`}<span className='white'>cloud</span>{`</i>`} <br /> {`<i`} <span className='red'>class="</span><span className='yellow'>material-icons</span><span className='red'>"</span>{`>`}<span className='white'>favorite</span>{`</i>`} <br /> {`<i`} <span className='red'>class="</span><span className='yellow'>material-icons</span><span className='red'>"</span>{`>`}<span className='white'>attachment</span>{`</i>`} <br /> {`<i`} <span className='red'>class="</span><span className='yellow'>material-icons</span><span className='red'>"</span>{`>`}<span className='white'>computer</span>{`</i>`} <br /> {`<i`} <span className='red'>class="</span><span className='yellow'>material-icons</span><span className='red'>"</span>{`>`}<span className='white'>traffic</span>{`</i>`} <br /> <br /> {`</body>`} <br /> {`</html>`}  </Text>
                     
                    </Box>
                    <Text fontSize={'20px'}>Natija:</Text>
                    <Image w={{'2xl': '959px', md: '90%', base: '90%'}} h={{md:'80px', '2xl': 'auto', base: '80px'}} src={icons4}></Image>
                    <CopyToClipboard text={`<!DOCTYPE html> <html> <head> <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> </head> <body> <i class="material-icons">cloud</i> <i class="material-icons">favorite</i> <i class="material-icons">attachment</i> <i class="material-icons">computer</i> <i class="material-icons">traffic</i> </body> </html>` } onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            </Box>



    </Box>
  )
}

export default Css46dars
