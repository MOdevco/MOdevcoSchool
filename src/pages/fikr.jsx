import { AspectRatio, Box, Button, FormLabel, Heading, Input, Textarea, useToast } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { err, value, video } from "../assets"
import Particl from "../components/particl"



const Fikr = () => {
  const [data , setData] = useState({ism: '' , email: '' , mavzu: ' ' , xabar: ''})
  const toast = useToast()
  const playValue = () => {
    new Audio(value).play()
  }


  

  const handleSubmit = async () => {

    await axios.post('http://localhost:3000/taklif' , data).then((res) => {
      toast({
        description: "Malumot Yetkazildi!!",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: "top-right"
      })
      
    })
    playValue()

    setTimeout(() => {
      window.location.reload()
    } ,1000)
    
  }
 

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
              <Input  onChange={(e) => setData({...data, ism: e.target.value })} color={'white'} bg={'#122435'} border={'none'} type={'text'}  width={'100%'} placeholder={'Ism...'}></Input>
              <FormLabel fontSize={'20px'}>Email</FormLabel>
              <Input  onChange={(e) => setData({...data, email: e.target.value })} color={'white'} bg={'#122435'} border={'none'} type={'email'} width={'100%'} placeholder={'Email...'}></Input>
              <FormLabel fontSize={'20px'}>Mavzu</FormLabel>
              <Input   onChange={(e) => setData({...data, mavzu: e.target.value })} color={'white'} bg={'#122435'} border={'none'} type={'text'} width={'100%'} placeholder={'Mavzu...'}></Input>
              <FormLabel fontSize={'20px'}>Xabaringiz</FormLabel>
              <Textarea  onChange={(e) => setData({...data, xabar: e.target.value })} color={'white'} bg={'#122435'} border={'none'} placeholder="Xabar..."></Textarea>
              { <Button onClick={handleSubmit} bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}} width={'100%'} mt={'20px'}>Jo'natish</Button>}
              
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