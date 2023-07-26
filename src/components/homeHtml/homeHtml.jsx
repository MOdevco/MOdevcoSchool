import { Box , Heading , Text , Button , useToast , useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'


const HomeHtml = () => {
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
    <Box width={'100%'}>

        <Box display={'flex'} justifyContent={{base: 'flex-start' , md: 'center'}} px={{base: '20px' , md: '0'}}  width={'100%'} flexWrap={'wrap'} gap={'20px'} mt={'100px'} alignItems={{base: 'flex-start' , md: 'center'}}>
            <Box display={'flex'} flexDirection={'column'}  alignItems={{base: 'flex-start' , md: 'center'}} gap={'20px'} >
                <Heading fontSize={{base: '40px' , md: '50px'}}>
                    HTML
                </Heading>
                <Text>
                    Veb-sahifalar yaratish uchun til 
                </Text>
                <Link to={'/html'}>
                    <Button width={'200px'} bg={'#233242'} color={'white'} _hover={{bg: '#222'}}>
                        BOSHLASH
                    </Button>
                </Link>
                <Link>
                    <Button onClick={onOpen} width={'200px'} bg={'#233242'} color={'white'} _hover={{bg: '#222'}}>
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
                    <Button onClick={onOpen} width={'200px'} bg={'#233242'} color={'white'} _hover={{bg: '#222'}}>
                        BARCHA KOD
                    </Button>
                </Link>
            </Box>
            <Box width={'507px'} rounded={'20px'} h={"483px"} bg={'#233242'} gap={'10px'} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} pl={3} justifyContent={'center'}>
                <Box>
                    <Heading>
                        Html Misol:
                    </Heading>
                </Box>
                <Box width={{base: '100%' , md: '469px'}} overflow={'scroll'} pl={'10px'} fontSize={{base: '17px' , md: '23px'}} color={'#9D5EBB'} height={'332px'} bg={'#0A1624'} borderLeft={'4px'} borderColor={'#7FFFD4'}>
                        <Text color={'#9D5EBB'}>{'<!DOCTYPE '}<span style={{color: 'red'}}>{`html>`}</span> </Text>
                        <Text color={'#9D5EBB'}>{'<html>'}</Text>
                        <Text pl={'30px'} color={'#9D5EBB'}>{'<title>'} <span style={{color: 'white'}}>HTML darslik</span>{'</title>'}</Text>
                        <Text color={'#9D5EBB'}>{'<body>'}</Text>
                        <br />
                        <Text pl={'30px'} color={'#9D5EBB'}>{'<h1>'} <span style={{color: 'white'}}>Bu sarlavha</span>{'</h1>'}</Text>
                        <Text pl={'30px'} color={'#9D5EBB'}>{'<p>'} <span style={{color: 'white'}}>Bu paragraf</span>{'</p>'}</Text>
                        <br />
                        <Text color={'#9D5EBB'} >{'<body>'}</Text>
                        <Text color={'#9D5EBB'} >{'<html>'}</Text>
                </Box>
                <Box>
                    <CopyToClipboard onCopy={handleClip}  text='<!DOCTYPE html><html><title>HTML Tutorial</title><body><h1>This is a heading</h1><p>This is a paragraph.</p></body></html> '>
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

export default HomeHtml