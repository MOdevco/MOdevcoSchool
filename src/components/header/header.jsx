import { Box , Heading , Flex , Button  , Avatar } from '@chakra-ui/react'
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
import { Goog } from '../../assets'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    const [ user , loading] = useAuthState(auth)
    const googleProvider = new GoogleAuthProvider
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const handleUser =  () => {
        try {
            const res = signInWithPopup(auth , googleProvider).then(() => {
                toast({
                    position: 'top-right',
                    render: () => (
                      <Box color='white' p={3} bg='green.300'>
                        RO'YXATDAN O'TDINGIZ
                      </Box>
                    ),
                })
            })
            
        } catch {
            console.log('error')
        }
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
    }
    return (
        <Box pt={'20px'} bg={'#050E17'}  h={{base: '11vh' , xl: '10vh'}}  px={{base: '20px' , md: '0'}}>
            
            <Box maxW={'1195px'} mx={'auto'} >
                <Flex alignItems={'center'} justifyContent={'space-between'} >
                    {/* <Box fontSize={'30px'} display={{base: 'block' , md: 'none'}}>
                        <HamburgerIcon />
                    </Box> */}
                    <Box>
                        <Link to={'/'}>
                            <Heading  fontSize={{base: '20px' , md: '40px'}}><span style={{color: 'red'}}>MO</span>devco Online Maktabi</Heading>
                        </Link>
                    </Box>
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
                            <Button onClick={onOpen} bg={'#0A1624'} color={'white'} _hover={{bg: '#222'}} width={{base: '90px' , md: '200px'}} fontSize={{base: '10px' , md: '20px'}}>Ro'yxatdan o'tish</Button>
                        </Box>
                        )
                    }
                    <Modal isOpen={isOpen}  onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent bg={'#233242'}>
                        <ModalHeader>Hoziroq boshlang!</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody bg={'#233242'}>
                            <Button onClick={handleUser} width={'100%'}>
                                <Image width={'30px'} src={Goog}></Image>
                                Google Yordamida Ro'yxatdan  O'tish
                            </Button>
                        </ModalBody>
                        </ModalContent>
                    </Modal>


                    
                </Flex>  
            </Box>

        </Box>
    )
}



export default Header