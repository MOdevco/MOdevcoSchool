import { AspectRatio, Box, Button, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import { video } from "../assets"


const Fikr = () => {
  const [loading , setLoading] = useState(false)
  return (
    <Box minHeight={'100vh'} display={'flex'} justifyContent='center' alignItems={'center'}>
      <Box width={{base: '100%' , xl: '50%'}} mt={{base: '200px' , xl: '100px'}} className={'fikrTop'} rounded={'20px'} gap={'10px'}  display={'flex'} flexDirection={'column'} p={'40px'} alignItems={'flex-start'}justifyContent={'start'} bg={'#233242'}>

        
        <Box mb={'30px'} width={'100%'}>
          <Box>
            <Heading>Fikr va Taklif</Heading>
          </Box>

          <Box width={'100%'} display={'flex'} gap='20px' className="firkColumn" alignItems={'center'} justifyContent={'space-between'}>
            <Box width={'100%'}>
              <FormLabel fontSize={'20px'}>Ismingiz</FormLabel>
              <Input bg={'#122435'} border={'none'} type={'text'}  width={'100%'} placeholder={'Ism...'}></Input>
              <FormLabel fontSize={'20px'}>Email</FormLabel>
              <Input bg={'#122435'} border={'none'} type={'email'} width={'100%'} placeholder={'Familiya...'}></Input>
              <FormLabel fontSize={'20px'}>Mavzu</FormLabel>
              <Input bg={'#122435'} border={'none'} type={'text'} width={'100%'} placeholder={'Mavzu...'}></Input>
              <FormLabel fontSize={'20px'}>Habaringiz</FormLabel>
              <Textarea bg={'#122435'} border={'none'} placeholder="Habar..."></Textarea>
              <Button bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}} width={'100%'} mt={'20px'}>Jo'natish</Button>
              {loading && <Button
                isLoading
                loadingText='Loading'
                colorScheme='teal'
                variant='outline'
                spinnerPlacement='start'
                bg={'#7FFFD4'}
                _hover={{bg: '#4FFFD4'}}
                width={'100%'}

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