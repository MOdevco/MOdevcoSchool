import { Box , Heading , Flex , Button  , Avatar , Text } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import { signInWithPopup , GoogleAuthProvider } from 'firebase/auth'
import { ArrowRightIcon } from '@chakra-ui/icons'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Image
  } from '@chakra-ui/react'
  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    useToast
  } from '@chakra-ui/react'
import { Goog, Ins, Logo, Tg, You } from '../../assets'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    const [ user , loading] = useAuthState(auth)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    const handleClose = () => {
        auth.signOut()
        toast({
            position: 'top-right',
            render: () => (
              <Box color='white' p={3} bg='red.400'>
                PROFILINGIZDAN CHIQTINGIZ
              </Box>
            ),
        })
    }
    return (
        <Box pt={{base: '30px' , xl: '15px'}} className={'header'} bg={'#050E17'}  h={{base: '13vh' , xl: '10vh' }}  px={{base: '20px' , md: '0'}}>
            
            <Box maxW={'1195px'} mx={'auto'} >
                <Flex alignItems={'center'} justifyContent={'space-between'} >
                    
                    <Link to={'/'}>
                        <Box display={'flex'} alignItems={'center'}>
                                <Heading  fontSize={{base: '20px' , md: '40px'}}><span style={{color: 'red'}}>MO</span>devco Maktabi</Heading>
                        </Box>
                    </Link>
                    {user ? (
                        <Box>
                        <Menu>
                            <MenuButton >
                                <Avatar src={user.photoURL} />
                            </MenuButton>
                            <MenuList bg={'#233242'} border={'none'}>
                                <MenuItem onClick={handleClose} bg={'#233242'}  display={'flex'} gap={'30px'} alignItems={'center'}>
                                    PRODILDAN CHIQISH
                                    <ArrowRightIcon />
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    ): (
                        <Box >
                            <Link to={'/register'}>
                                <Button bg={'#7FFFD4'} color={'#111'} _hover={{bg: '#1FFFD0'}} width={{base: '90px' , md: '200px'}} fontSize={{base: '10px' , md: '20px'}}>Ro'yxatdan o'tish</Button>
                            </Link>
                        </Box>
                        )
                    }
                </Flex>  
            </Box>

        </Box>
    )
}



export default Header