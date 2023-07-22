import { Box , Heading , Text , Button ,  useToast , useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

const HomeJavascipt = () => {
    const [clipboard , setClipboard] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const handleClip = () => {
        setClipboard(true)
        toast({
            position: 'top-right',
            render: () => (
              <Box color='white' p={3} bg='blue.500'>
                Nusxa olindi!
              </Box>
            ),
        })
    }
  return (
    <Box width={'100%'}  bg={'#DDF1A3'} py={'20px'} mt={'40px'}>

        <Box display={'flex'} justifyContent={{base: 'flex-start' , md: 'center'}} px={{base: '20px' , md: '0'}}  width={'100%'} flexWrap={'wrap'} gap={'20px'} mt={'100px'} alignItems={{base: 'flex-start' , md: 'center'}}>
            <Box display={'flex'} flexDirection={'column'}  alignItems={{base: 'flex-start' , md: 'center'}} gap={'20px'} >
                <Heading color={'black'} fontSize={{base: '40px' , md: '50px'}}>
                    JAVASCRIPT
                </Heading>
                <Text color={'black'}>
                    Veb-sahifalarni uslublash tili 
                </Text>
                <Link>
                    <Button bg={'#233242'}_hover={{bg: '#222'}} color={'white'} width={{base: '100%' , md: '200px'}}>
                        BOSHLASH
                    </Button>
                </Link>
                <Link>
                    <Button onClick={onOpen} bg={'#233242'}_hover={{bg: '#222'}} color={'white'} width={{base: '100%' , md: '200px'}}>
                        VIDEO DARSLIK
                    </Button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader>ESLATIB O'TAMIZ</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            BU BO'LIMDA HOZIRCHA HECHNARSA MAVJUD EMAS ILTMOS KUTING! NOQULAYLIK UCHUN UZUR SO'RAYMIZ
                        </ModalBody>
                        </ModalContent>
                    </Modal>
                </Link>
                <Link>
                    <Button onClick={onOpen} bg={'#233242'}_hover={{bg: '#222'}} color={'white'} width={{base: '100%' , md: '200px'}}>
                        BARCHA KOD
                    </Button>
                </Link>
            </Box>
            <Box width={'507px'} rounded={'20px'} h={"483px"} bg={'#233242'} gap={'10px'} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} pl={3} justifyContent={'center'}>
                <Box>
                    <Heading>
                        JavaScipt Misol:
                    </Heading>
                </Box>
                <Box width={{base: '100%' , md: '469px'}} fontSize={{base: '17px' , md: '20px'}} color={'#9D5EBB'} height={'332px'} bg={'#0A1624'} borderLeft={'4px'} borderColor={'#7FFFD4'}>
                        <Text >{'<button'} <span style={{color: 'red'}}>{` onclick=`}</span> <span style={{color: 'blue'}}>{`"myFunction()">`}</span> </Text>
                        <Text pl={'20px'} color={'white'} >{'Click Me!'}</Text>
                        <Text >{'</button>'}</Text>
                        <br />
                        <Text >{'<script>'}</Text>
                        <Text pl={'20px'} color={'blue'} >{'function '} <span style={{color: 'white'}}>{` myFunction() `}</span> <span style={{color: '#9D5EBB'}}>{`{`}</span></Text>
                        <Text pl={'20px'} fontSize={{base: '13px' , md: '20px'}} color={'blue'}>{'let  '} <span style={{color: 'white'}}>{`x = document.getElementById(`}</span> <span style={{color: 'yellow'}}>{`"demo"`}</span> <span style={{color: 'white'}}>{`);`}</span></Text>
                        <Text pl={'20px'} color={'white'}>{'x.style.fontSize = '} <span style={{color: 'yellow'}}>{`"25px";`}</span></Text>
                        <Text pl={'20px'} color={'white'}>{'x.style.color =  '} <span style={{color: 'yellow'}}>{`"red";`}</span></Text>
                        <Text>{'}'}</Text>
                        <Text>{'</script>'}</Text>
                </Box>
                <Box>
                    <CopyToClipboard onCopy={handleClip}  text='<button onclick="myFunction()">Click Me!</button> <script>function myFunction() {et x = document.getElementById("demo");x.style.fontSize = "25px";x.style.color = "red";}</script>'>
                        <Button bg={'#7FFFD4'} color={'black'}>
                            Nusxa olish
                        </Button>
                    </CopyToClipboard>
                </Box>
            </Box>
        </Box>

    </Box>
  )
}

export default HomeJavascipt