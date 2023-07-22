import { Box , Heading , Text , Button ,  useToast , useDisclosure} from '@chakra-ui/react'
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

const HomeReact = () => {
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
    <Box width={'100%'}  bg={'#8FBC8F'} py={'20px'} mt={'40px'}>

    <Box display={'flex'} justifyContent={{base: 'flex-start' , md: 'center'}} px={{base: '20px' , md: '0'}}  width={'100%'} flexWrap={'wrap'} gap={'20px'} mt={'100px'} alignItems={{base: 'flex-start' , md: 'center'}}>
        <Box display={'flex'} flexDirection={'column'}  alignItems={{base: 'flex-start' , md: 'center'}} gap={'20px'} >
            <Heading color={'black'} fontSize={{base: '40px' , md: '50px'}}>
                REACT JS 
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
                <Button onClick={onOpen} bg={'#233242'}_hover={{bg: '#222'}} color={'white'} width={{base: '100%' , md: '200px'}}>
                    BARCHA KOD
                </Button>
            </Link>
        </Box>
        <Box width={'507px'} rounded={'20px'} h={"483px"} bg={'#233242'} gap={'10px'} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} pl={3} justifyContent={'center'}>
            <Box>
                <Heading>
                    REACT JS  Misol:
                </Heading>
            </Box>
            <Box width={{base: '100%' , md: '469px'}} fontSize={{base: '17px' , md: '20px'}} color={'#9D5EBB'} height={'332px'} bg={'#0A1624'} borderLeft={'4px'} borderColor={'#7FFFD4'}>
                        <Text color={'red'}>{"import "} <span style={{color: 'white'}}>React from 'react'</span></Text>
                        <Text>{"const Header = () => {"}</Text>
                        <Text pl={'30px'} color={'blue'}>{"return ("}</Text>
                        <Text pl={'50px'} color={'#9ACD32'}>{"<div>"}</Text>
                        <Text pl={'70px'}> {`<h1>`} <span style={{color:' white'}}>Salom Dunyo</span> {`</h1>`}</Text>
                        <Text pl={'50px'} color={'#9ACD32'}>{"<div>"}</Text>
                        <Text pl={'20px'} color={'blue'}>{")"}</Text>
                        <Text >{'}'}</Text>
                        <Text  color={'red'}>{'export'} <span style={{color: 'orange'}}>default</span> <span style={{color: 'white'}}>Header</span></Text>
                </Box>
                <Box>
                    <CopyToClipboard onCopy={handleClip}  text="import React from 'react'const Header = () => {return (<div><h1>Hello World</h1></div>)}export default Header">
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

export default HomeReact