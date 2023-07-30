import { signInWithPopup , GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import { useToast , Box , Button , Image , Text , Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { Goog } from '../../assets'
import { enterGoogle } from '../../assets'
const GoogleBtn = () => {
    const googleProvider = new GoogleAuthProvider
    const toast = useToast()
    const navigate = useNavigate()

    const handleEnterGoogle = () => {
      new Audio(enterGoogle).play()
    }

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
                navigate('/')
                handleEnterGoogle()
            })
            
        } catch {
            navigate('/register')
            console.log('error')
        }
    }
  return (
    <Box>
        <Button fontSize={{base: '10px' , xl: '20px'}} onClick={handleUser} mt={'30px'} width={'100%'} bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}}>
        <Image width={{base: '20px' , xl: '40px'}} src={Goog}></Image>
          Google yordamida ro’yxatdan o’tish
        </Button>
    </Box>
  )
}

export default GoogleBtn