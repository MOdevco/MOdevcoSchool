import { Box , Heading ,Text , Button , Input , Image , useToast , InputRightElement} from '@chakra-ui/react'
import {
    FormControl,
    InputGroup
  } from '@chakra-ui/react'
import { ViewIcon , ViewOffIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Goog, Ins, Tg, You } from '../assets'
import GoogleBtn from '../components/googleBtn/googleBtn'
import { auth } from '../firebase'
const Register = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [register , setRegister] = useState(true)
    const [registerEmail , setRegisterEmail] = useState("")
    const [registerPassword , setRegisterPassword] = useState("")
    const [loginEmail , setLoginEmail] = useState("")
    const [loginPassword , setLoginPassword] = useState("")
    const [emailValid , setEmailValid] = useState()
    const [passwordLeng , setPasswordLeng] = useState(false)
    const [passwordValid , setPasswordValid] = useState(false)
    const navigate = useNavigate()
    const toast = useToast()
    const openRegister = () => {
        setRegister(false)
    }
    const closeRegister = () => {
        setRegister(true)
    }

    const Register = async () => {
        if(registerEmail.length == '') {
            setEmailValid(true)
        } else {
            setEmailValid(false)
        }

        if(registerPassword.length == '') {
            setPasswordValid(true)
            
        } else {
            setPasswordValid(false)
        }

        try {
            const user = await createUserWithEmailAndPassword(auth , registerEmail , registerPassword).then((user) => {
                toast({
                    position: 'top-right',
                    render: () => (
                      <Box color='white' p={3} bg='green.300'>
                        Ro'yxatdan O'tdingiz!!!
                      </Box>
                    ),
                })
                navigate('/')
            })

        } catch (error) {
            toast({
                position: 'top-right',
                render: () => (
                  <Box color='white' p={3} bg='red.500'>
                    Eslatib O'tamiz Ma'lumot Xato!!!
                  </Box>
                ),
            })
        }

        setRegisterEmail("")
        setRegisterPassword("")
    }
    
    const Login = async () => {

        if(loginEmail.length == '') {
            setEmailValid(true)
        } else {
            setEmailValid(false)
        }

        if(loginPassword.length == '') {
            setPasswordValid(true)
        } else {
            setPasswordValid(false)
        }
        try {
            const user = await signInWithEmailAndPassword(auth , loginEmail , loginPassword).then((user) => {
                toast({
                    position: 'top-right',
                    render: () => (
                      <Box color='white' p={3} bg='green.300'>
                        Profilingizga Kirdingiz!!!
                      </Box>
                    ),
                })
                navigate('/')
            })

        } catch (error) {
            toast({
                position: 'top-right',
                render: () => (
                  <Box color='white' p={3} bg='red.500'>
                    Bu Email ro'yxatdan O'tmagan!!!
                  </Box>
                ),
            })
        }
        setLoginEmail("")
        setLoginPassword("")
    }
    
    




  return (
    <Box minHeight={'100vh'} width={'100%'}>


        <Box display={'flex'} width={'100%'} flexDirection={'column'} alignItems="center" justifyContent={'center'} minHeight={'100vh'}> 

            {register ? (
                <Box height={'675px'} mt={'100px'} width={'600px'} className={'register'} bg={'#233242'} borderTop={'4px'} p={{base: '30px' , xl: '40px'}} borderColor={'#7FFFD4'}>


                    <Box width={'100%'} height={'100%' }   rounded={'20px'} alignItems="center" p={'20px'} bg={'#0A1624'}>
                        <Heading fontSize={{base: '20px' , xl: '40px'}}>
                            Ro’yxatdan O’tish
                        </Heading>
                    <Box display={'flex'} flexDirection={{base: 'column' ,xl: 'row'}} alignItems={{base: 'flex-start' , xl: 'center'}}>
                        <Text>
                            Akauntingiz mavjud bo’lsa
                        </Text>
                        <Button onClick={openRegister} bg={'transparent'} _hover={{bg: ''}} _active={{bg: ''}} color={'#7FFFD4'}>
                            Dasturga kirish
                        </Button>
                    </Box>

                        <Box >
                            <FormControl  display={'flex'} flexDirection={'column'} gap={'10px'}>
                                <Input color={'white'} type='email' height={'50px'} placeholder={'Email manzil...'} value={registerEmail} onChange={ e => setRegisterEmail(e.target.value) } />
                               {emailValid && <Text fontSize={'15px'} color={'red'}>Maydon To'lmagan</Text>}
                                <InputGroup size='md'>
                                    <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Parol...'
                                        onChange={e => setRegisterPassword(e.target.value)}
                                        color={'white'}
                                        height={'50px'} 
                                        value={registerPassword}
                                    />
                                    <InputRightElement width='4.5rem' mt={'5px'}>
                                        <Button bg={'transparent'} _hover={{bg: ''}}  h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? <ViewOffIcon /> : <ViewIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                {passwordValid && <Text fontSize={'15px'} color={'red'}>Maydon To'lmagan</Text>}
                                {passwordLeng && <Text fontSize={'15px'} color={'red'}>Parol Juda Qisqa</Text>}
                                

                                <Button onClick={Register} bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}}>
                                    Emailni Tasdiqlash
                                </Button>
                            </FormControl>
                            <Text fontSize={'20px'} mt={'30px'} textAlign={'center'}>
                                Yoki
                            </Text>
                           <GoogleBtn />
                        </Box>

                        <Box>
                            <Text textAlign={'center'} mt={'30px'}>Ijtimoiy tarmoqlarga obuna bo’lish</Text>

                            <Box mt={'20px'} display={'flex'} justifyContent={'center'} gap={'20px'}> 
                                <Link to={'https://t.me/modevco_online_school'}>
                                    <Button>
                                        <Image width={'30px'} src={Tg}></Image>
                                    </Button>
                                </Link>
                                <Link to={'https://youtube.com/@MOdevco'} >
                                    <Button>
                                        <Image width={'30px'} src={You}></Image>
                                    </Button>
                                </Link>
                                
                                <Link to={'https://instagram.com/mo_devco'}>
                                    <Button>
                                        <Image width={'30px'} src={Ins}></Image>
                                    </Button>
                                </Link>
                            </Box>
                        </Box>

                    </Box>

                </Box>

            ): (
                <Box height={'675px'} mt={'100px'} width={'600px'} className={'register'} bg={'#233242'} borderTop={'4px'} p={{base: '30px' , xl: '40px'}} borderColor={'#7FFFD4'}>


                <Box width={'100%'} height={'100%' }   rounded={'20px'} alignItems="center" p={'20px'} bg={'#0A1624'}>
                    <Heading fontSize={{base: '20px' , xl: '40px'}}>
                        Kirish !
                    </Heading>
                <Box display={'flex'} flexDirection={{base: 'column' ,xl: 'row'}} alignItems={{base: 'flex-start' , xl: 'center'}}>
                    <Text>
                        Akauntingiz yo’q bo’lsa
                    </Text>
                    <Button onClick={closeRegister} bg={'transparent'} _hover={{bg: ''}} _active={{bg: ''}} color={'#7FFFD4'}>
                        Ro’yxatdan o’tish
                    </Button>
                </Box>

                    <Box >
                        <FormControl  display={'flex'} flexDirection={'column'} gap={'10px'}>
                            <Input color={'white'} type='email' height={'50px'} placeholder={'Email manzil...'} value={loginEmail} onChange={ e => setLoginEmail(e.target.value)} />
                            {emailValid && <Text fontSize={'15px'} color={'red'}>Maydon To'lmagan</Text>}
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Parol...'
                                    onChange={e => setLoginPassword(e.target.value)}
                                    color={'white'}
                                    height={'50px'}
                                    value={loginPassword}
                                />
                                <InputRightElement width='4.5rem'mt={'5px'} >
                                    <Button bg={'transparent'} _hover={{bg: ''}}  h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? <ViewOffIcon /> : <ViewIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            {passwordValid && <Text fontSize={'15px'} color={'red'}>Maydon To'lmagan</Text>}
                            <Button onClick={Login} bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}}>
                                Kirish
                            </Button>
                        </FormControl>
                        <Text fontSize={'20px'} mt={'30px'} textAlign={'center'}>
                            Yoki
                        </Text>
                        <GoogleBtn />
                    </Box>

                    <Box>
                        <Text textAlign={'center'} mt={'30px'}>Ijtimoiy tarmoqlarga obuna bo’lish</Text>

                        <Box mt={'20px'} display={'flex'} justifyContent={'center'} gap={'20px'}> 
                            <Link to={'https://t.me/modevco_online_school'}>
                                <Button>
                                    <Image width={'30px'} src={Tg}></Image>
                                </Button>
                            </Link>
                            <Link to={'https://youtube.com/@MOdevco'} >
                                <Button>
                                    <Image width={'30px'} src={You}></Image>
                                </Button>
                            </Link>
                            
                            <Link to={'https://instagram.com/mo_devco'}>
                                <Button>
                                    <Image width={'30px'} src={Ins}></Image>
                                </Button>
                            </Link>
                        </Box>
                    </Box>

                </Box>

            </Box>
            ) 
            }





        </Box>

    </Box>
  )
}

export default Register