import { signInWithPopup , GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import { useToast , Box , Button , Image , Text , Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { Goog } from '../../assets'
import { enterGoogle } from '../../assets'
import { useState } from 'react'
const GoogleBtn = () => {
    const googleProvider = new GoogleAuthProvider
    const toast = useToast()
    const navigate = useNavigate()
    const [load , setLoad] = useState(false)

    const handleEnterGoogle = () => {
      new Audio(enterGoogle).play()
    }

    const handleUser =  () => {
        setLoad(true)

        try {
            const res = signInWithPopup(auth , googleProvider).then((res) => {
                toast({
                    position: 'top-right',
                    duration: 3000,
                    render: () => (
                      <Box color='white' p={3} bg='green.300'>
                        RO'YXATDAN O'TDINGIZ
                      </Box>
                    ),
                })
                console.log(res)
                navigate('/')
                handleEnterGoogle()
            })
            
        } catch {
            navigate('/register')
            console.log('error')
            setLoad(false)
        }
    }
  return (
    <Box>
       {!load && <Button fontSize={{base: '10px' , xl: '20px'}} onClick={handleUser} mt={'30px'} width={'100%'} bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}}>
          <Image width={{base: '20px' , xl: '40px'}} src={Goog}></Image>
          Google yordamida ro’yxatdan o’tish
        </Button>}
       {load && <Button  fontSize={{base: '10px' , xl: '20px'}} onClick={handleUser} mt={'30px'} width={'100%'} bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}}
          isLoading
          loadingText="Ro'yxatdan O'tmoqda"
          colorScheme='teal'
          variant='outline'
          spinnerPlacement='start'
        >
          Submit
        </Button>}
        
    </Box>
  )
}

export default GoogleBtn