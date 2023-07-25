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
        <Box pt={'15px'} bg={'#050E17'}  h={{base: '9vh' , xl: '10vh' , md: '15vh' }}  px={{base: '20px' , md: '0'}}>
            
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
                            <Button onClick={handleUser} _hover={{bg: '#222'}} bg={'#050E17'} color={'white'} width={'100%'}>
                                <Image width={'30px'} src={Goog}></Image>
                                Google Yordamida Ro'yxatdan  O'tish
                            </Button>
                            
                            <ModalFooter display={'flex'} justifyContent={'flex-start'} gap={'10px'} alignItems={'flex-start'} flexDirection={'column'}>
                                <Text>Ichtimoiy tarmoqlarga obuna bo'ling</Text>
                                <Box display={'flex'} justifyContent={'flex-start'} gap={'20px'} alignItems={'flex-start'}>
                                    <Link to={'https://t.me/modevco_online_school'} target={'_blank'}>
                                        <Button bg={'#050E17'}  _hover={{bg: '#222'}}>
                                            <Image width={'25px'} src={Tg}></Image>
                                        </Button>
                                    </Link>
                                    <Link to={'https://youtube.com/@MOdevco'} target={'_blank'}>
                                        <Button bg={'#050E17'}  _hover={{bg: '#222'}}>
                                            <Image width={'25px'} src={You}></Image>
                                        </Button>                                
                                    </Link>
                                    <Link to={'https://instagram.com/mo_devco'} target={"_blank"}>                                  
                                        <Button bg={'#050E17'}  _hover={{bg: '#222'}}>
                                            <Image width={'25px'} src={Ins}></Image>
                                        </Button>
                                        
                                    </Link>                                        
                                </Box>
                            </ModalFooter>
                        </ModalBody>
                        </ModalContent>
                    </Modal>



                    
                </Flex>  
            </Box>

        </Box>
    )
}



export default Header