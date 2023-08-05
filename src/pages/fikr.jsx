import { AspectRatio, Box, Button, FormLabel, Heading, Input, Textarea, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { err, value, video } from "../assets"
import Particl from "../components/particl"
import { dataRef } from "../firebase"



const Fikr = () => {
  const [loading , setLoading] = useState(false)
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [desc , setDesc] = useState("")
  const [message , setMessage] = useState("")
  const toast = useToast()
  const playGo = () => {
    new Audio(err).play()
  }
  const playValue = () => {
    new Audio(value).play()
  }


  

  const handleMess = () => {
    if(name!== "" && email!=="" && desc!=="" && message!=="") {
      dataRef.ref().child("ism").push(name)
    } else {
      
    }
    if(email!== "" && name!== "" && desc!== "" && message!=="") {
      dataRef.ref().child("email").push(email)
    }
    if(desc!== "" && email!== "" && name!== "" && message!== "") {
      dataRef.ref().child("mavzu").push(desc)
    }
    if(message!== "" && name!== "" && email!== "" && desc!== "") {
      dataRef.ref().child("habar").push(message)
    }
    setLoading(true)
    setName("") 
    setEmail("")
    setDesc("")
    setMessage("")
    if(name === '' || email === "" || desc === "" || message === "") {
      toast({
        description: "Malumot xato kiritildi!!",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: "top-right"
      })
      playGo()
  
    } else {
      toast({
        description: "Malumot Yetkazildi!!",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: "top-right"
      })
      playValue()
    }

  }
  // useEffect(() => {
  //   dataRef.ref().child("ism").on('value' , data => {
  //     const getData = Object.values(data.val())
  //     setNameVal(getData)
  //   })
  // } , [])
  

  setTimeout(() => {
    setLoading(false)
  } , 500)

  return (
    <Box minHeight={'100vh'} display={'flex'} justifyContent='center' alignItems={'center'}>
      <Particl />

      <Box width={{base: '100%' , xl: '50%'}} mt={{base: '200px' , xl: '100px'}} className={'fikrTop'} rounded={'20px'} gap={'10px'}  display={'flex'} flexDirection={'column'} p={'40px'} alignItems={'flex-start'}justifyContent={'start'} bg={'#233242'}>

        
        <Box mb={'30px'} width={'100%'}>
          <Box>
            <Heading>Fikr va Taklif</Heading>
          </Box>


          <Box width={'100%'} display={'flex'} gap='20px' className="firkColumn" alignItems={'center'} justifyContent={'space-between'}>
            <Box width={'100%'}>
              <FormLabel fontSize={'20px'}>Ismingiz</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} color={'white'} bg={'#122435'} border={'none'} type={'text'}  width={'100%'} placeholder={'Ism...'}></Input>
              <FormLabel fontSize={'20px'}>Email</FormLabel>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} color={'white'} bg={'#122435'} border={'none'} type={'email'} width={'100%'} placeholder={'Email...'}></Input>
              <FormLabel fontSize={'20px'}>Mavzu</FormLabel>
              <Input value={desc} onChange={(e) => setDesc(e.target.value)} color={'white'} bg={'#122435'} border={'none'} type={'text'} width={'100%'} placeholder={'Mavzu...'}></Input>
              <FormLabel fontSize={'20px'}>Xabaringiz</FormLabel>
              <Textarea value={message} onChange={(e) => setMessage(e.target.value)} color={'white'} bg={'#122435'} border={'none'} placeholder="Xabar..."></Textarea>
              {!loading && <Button onClick={handleMess} bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}} width={'100%'} mt={'20px'}>Jo'natish</Button>}
              {loading && <Button
                isLoading
                loadingText="Jo'natilmoqda..."
                colorScheme='teal'
                variant='outline'
                spinnerPlacement='start'
                bg={'#7FFFD4'}
                _hover={{bg: '#4FFFD4'}}
                width={'100%'}
                mt={'20px'}

              >
                Submit
              </Button>}
            </Box>

            <Box >
              <video autoPlay muted loop src={video} style={{width: '700px' ,}}></video>
            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  )
}

export default Fikr