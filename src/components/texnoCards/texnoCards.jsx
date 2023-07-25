import { Box , Image , Text , Heading, useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'


const TexnoCards = ({cardImg  , cardTitle , modalTitle }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg={'#233242'}>
            <ModalHeader>Ma'lumot</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Text>{modalTitle}</Text>
            </ModalBody>
            </ModalContent>
        </Modal>

        <Box display={'flex'} onClick={onOpen} flexDirection={'column'} alignItems={'center'}>
            <Image title={cardTitle} width={'200px'} height={'200px'} src={cardImg}></Image>
            <Heading>{cardTitle}</Heading>
        </Box>

    </Box>
  )
}

export default TexnoCards