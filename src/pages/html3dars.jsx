import { Box , Flex , Heading , Button , Text , Image} from '@chakra-ui/react'
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
    useToast,Divider
  } from '@chakra-ui/react'
import AccordionItenm from '../components/accordion/accordion'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useEffect, useState } from 'react'
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
    useEffect(() => {
        window.scroll(0,0)
      }, [])
  return (
    <Box pt={'300px'} width={'100%'} bg={'#1A202C'} height={'100%'}>
        <Box >
            <Flex >
                {onOpen && <Box>
                    <Sidebar title={'HTML DARSLARI'}   elementName={'Bosh sahifa'} />
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
                            <AccordionItenm />
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