import { Box , Heading , Text , Button, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const LessonCards = ({title ,text , bg , color , cardBg , cardColor , linkLess}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box display={'flex'} width={'100%'}   alignItems={'center'} justifyContent={'center'} mt={'100px'}>
        <Box bg={cardBg}  rounded={'10px'} px={{base: '0' , md: '60px'}} display={'flex'} width={{base:'900px' ,xl: '60%'}} height={'350px '}  flexDirection={'column'} justifyContent={'center'}alignItems={'center'} gap={'20px'} color={cardColor} textAlign={'center'}>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={'#233242'}>
                <ModalHeader>Ma'lumot</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>
                        Bu bo'limda hozircha darsliklar mavjut emas , tez orada bo'lim to'ldiriladi😊
                    </Text>
                </ModalBody>
                </ModalContent>
            </Modal>
            <Heading>{title}</Heading>
            <Text maxW={'400px'}>{text}</Text>
            <Link to={linkLess}>
              <Button onClick={onOpen} bg={bg} _hover={{bg: '#2222'}} color={color}>BOSHLASH</Button>
            </Link>
        </Box>
    </Box>
  )
}

export default LessonCards