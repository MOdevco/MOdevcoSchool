import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    Button,
    useDisclosure,
    Avatar,
    Text
    ,Image
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useState , } from 'react'
import { HamburgerIcon , ArrowLeftIcon , EmailIcon , QuestionIcon , StarIcon} from '@chakra-ui/icons'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import { closeAudio} from '../../assets'
const UserProfile = () => {
    const handleCloseAudio = () => {
        new Audio(closeAudio).play()
    }
    const [size, setSize] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [user , loading] = useAuthState(auth)
    const [placement, setPlacement] = useState('right')
    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }

    const handleClose = () => {
        auth.signOut()
        handleCloseAudio()
    }

    const sizes = ['full']
  return (
    <Box >

        <Box >

            {sizes.map((size) => (
                <Button
                onClick={() => handleClick(size)}
                key={size}
                m={4}
                bg={''}
                _hover={{bg: ''}}
                ><HamburgerIcon fontSize={'30px'} /></Button>
            ))}

            <Drawer  placement={placement} onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay />
                <DrawerContent minHeight={'100vh'} bg={'#0A1624'}>
                <DrawerCloseButton />
                <DrawerHeader fontSize={'15px'}>{user ? user?.displayName : "Aniq bo'lmagan"}  Profili</DrawerHeader>
                <DrawerBody display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'column'} width={"100%"} gap={'30px'}>
                    
                    {user ? (
                        <Avatar src={user.photoURL}  width={'100px'} height={'100px'} />

                    ): (
                        <Avatar width={'100px'} height={'100px'} />
                    )
                    }
                    <Text>{user ? user.displayName : 'No aniq foidalanuvchi' }</Text>
                    {!user && <Button bg={'#233242'} color={'white'} onClick={onClose} width={'100%'} _hover={{bg: '#333242'}} >
                        <Link  to={'/register'}>
                            Ro'yxatdan O'tish
                        </Link>
                    </Button>}
                    <Button display={'flex'} gap={'10px'} bg={'#233242'} color={'white'} _hover={{bg: '#333242'}} width={'100%'}>
                        Firk va Takliflar
                        <EmailIcon />
                    </Button>
                    <Button onClick={onClose}  bg={'#233242'} color={'white'} _hover={{bg: '#333242'}} width={'100%'}>
                        <Link to={'/faq'} >
                            FAQ
                            <QuestionIcon fontSize={'30px'} pl={'10px'} />
                        </Link>
                    </Button>
                    <Button width={'100%'} display={'flex'}gap="10px" bg={'#233242'} color={'white'} _hover={{bg: '#333242'}} >
                        Qo'lab Quvatlash
                        <StarIcon />
                    </Button>
                    {user && <Button onClick={ () => {
                        handleClose() 
                        onClose()
                    } } bg={'red'}  color={'white'} display={'flex'} alignItems={'center'} gap={'20px'} _hover={{bg: 'red.400'}} width={'100%'}>
                        <ArrowLeftIcon />    
                        Profildan Chiqish
                    </Button>}

                    

                </DrawerBody>
                </DrawerContent>
            </Drawer>
            
        </Box>

    </Box>
  )
}

export default UserProfile