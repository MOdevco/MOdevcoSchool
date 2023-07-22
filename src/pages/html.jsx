import { Box , Flex ,Button} from '@chakra-ui/react'
import { useState } from 'react'
import Sidebar from '../components/sidebar/sidebar'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
  } from '@chakra-ui/react'
import AccordionItenm from '../components/accordion/accordion'
const Html = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('left')
    const [size, setSize] = useState('')

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }
    const sizes = ['md']

  return (
    <Box pt={'200px'} minHeight={'100vh'}>
        <Box >
            <Flex >
                {onOpen && <Box>
                    <Sidebar title={'HTML DARSLARI'} elementName={'Html bosh sahifa'} />
                </Box>}
                <Box ml={{base: '30px' , md: '450px'}}   display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'20px'}>
                    {sizes.map((size) => (
                        <Button  onClick={ () => handleClick(size)} bg={'#233242'} _hover={{bg: '#222'}} display={{base: 'block' , md: 'none'}}>
                            <HamburgerIcon />
                        </Button>
                        
                    ))}
                    <Drawer placement={placement}  onClose={onClose} size={size} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                        <DrawerBody bg={'#0A1624'} display={'flex'} justifyContent={'center'} minHeight={'100vh'} width={'100%'} >
                            <AccordionItenm />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    html
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}

export default Html