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
import useProgres from '../../hooks/useProgres'
import { closeAudio } from '../../assets'
import UserProfile from '../userProfil/userProfile'


const Header = () => {
    const [ user , loading] = useAuthState(auth)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const completion = useProgres()
    const handleCloseAudio = () => {
        new Audio(closeAudio).play()
    }
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
        handleCloseAudio()
    }
    return (
        <Box pt={{base: '1px' , xl: '1px'}} className={'header'} bg={'#050E17'}  h={{base: '13vh' , xl: '10vh' }}  px={{base: '20px' , md: '0'}}>
            <Text  position={'absolute'} bg={'#7FFFD4'} className={'shadow'} width={'100%'} height={'5px'} style={{transform: `translateX(${completion - 100}%)`}}></Text>
            <Box maxW={'1195px'} mx={'auto'} mt={{base: '5px' , xl: '20px'}} classNam={'load'} >
                <Flex alignItems={'center'} justifyContent={'space-between'} >
                    
                    <Link to={'/'}>
                        <Box display={'flex'} alignItems={'center'}>
                                <Heading  fontSize={{base: '20px' , md: '40px'}}><span style={{color: 'red'}}>MO</span>devco Maktabi</Heading>
                        </Box>
                    </Link>
                    {user ? (
                        <Box display={{base: 'none' , xl: 'block'}}>
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
                        <Box display={{base: 'none' , xl: 'block'}} >
                            <Link to={'/register'}>
                                <Button bg={'#7FFFD4'} color={'#111'} _hover={{bg: '#1FFFD0'}} width={{base: '90px' , md: '200px'}} fontSize={{base: '10px' , md: '20px'}}>Ro'yxatdan o'tish</Button>
                            </Link>
                        </Box>
                        )

                    }

                    <Box display={{base: 'block' , xl: 'none'}}>
                        <UserProfile />
                    </Box>
                </Flex>  
            </Box>
        </Box>
    )
}



export default Header