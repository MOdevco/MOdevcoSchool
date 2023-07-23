import { Box , Heading , Text , Button , useToast ,  useDisclosure } from '@chakra-ui/react'
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

const HomeCss = () => {
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
    <Box width={'100%'} bg={'#5981AA'} py={'20px'} mt={'40px'}>

        <Box display={'flex'} justifyContent={{base: 'flex-start' , md: 'center'}} px={{base: '20px' , md: '0'}}  width={'100%'} flexWrap={'wrap'} gap={'20px'} mt={'100px'} alignItems={{base: 'flex-start' , md: 'center'}}>
            <Box display={'flex'} flexDirection={'column'}  alignItems={{base: 'flex-start' , md: 'center'}} gap={'20px'} >
                <Heading fontSize={{base: '40px' , md: '50px'}}>
                    CSS
                </Heading>
                <Text>
                    Veb-sahifalarni uslublash tili 
                </Text>
                <Link>
                    <Button bg={'#233242'} _hover={{bg: '#222'}} color={'white'} width={'200px'}>
                        BOSHLASH
                    </Button>
                </Link>
                <Link>
                    <Button onClick={onOpen} bg={'#233242'} _hover={{bg: '#222'}} color={'white'} width={'200px'}>
                        VIDEO DARSLIK
                    </Button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent bg={'#233242'}>
                        <ModalHeader>ESLATIB O'TAMIZ</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            BU BO'LIMDA HOZIRCHA HECHNARSA MAVJUD EMAS ILTMOS KUTING! NOQULAYLIK UCHUN UZUR SO'RAYMIZ
                        </ModalBody>
                        </ModalContent>
                    </Modal>
                </Link>
                <Link>
                    <Button onClick={onOpen} bg={'#233242'} _hover={{bg: '#222'}} color={'white'} width={'200px'}>
                        BARCHA KOD
                    </Button>
                </Link>
            </Box>
            <Box width={'507px'} rounded={'20px'} h={"483px"} bg={'#233242'} gap={'10px'} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} pl={3} justifyContent={'center'}>
                <Box>
                    <Heading>Css Misol:</Heading>
                </Box>
                <Box width={{base: '100%' , md: '469px'}} fontSize={{base: '17px' , md: '20px'}} color={'#9D5EBB'} height={'332px'} bg={'#0A1624'} borderLeft={'4px'} borderColor={'#7FFFD4'}>
                    <Text >{'<body> { '}</Text>
                    <Text pl={'20px'} color={'red'} >{'background-color:'} <span style={{color: 'blue'}}>lightblue;</span></Text>
                    <Text >{'}'}</Text>

                    <Text >{'h1 { '}</Text>
                    <Text pl={'20px'} color={'red'} >{'color:'} <span style={{color: 'blue'}}>white;</span></Text>
                    <Text pl={'20px'} color={'red'} >{' text-align:'} <span style={{color: 'blue'}}>center;</span></Text>
                    <Text >{'}'}</Text>

                    <Text >{'p { '}</Text>
                    <Text pl={'20px'} color={'red'} >{'font-family:'} <span style={{color: 'blue'}}>verdana;</span></Text>
                    <Text >{'}'}</Text>
                </Box>
                <Box>
                    <CopyToClipboard onCopy={handleClip}  text='body { background-color: lightblue;} h1 { color: white;text-align: center;} p { font-family: verdana;} '>
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

export default HomeCss