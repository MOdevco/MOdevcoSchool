import { EditIcon, UpDownIcon } from '@chakra-ui/icons'
import { Box, Button, Input, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'


const HodimUpdet = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  return (
    <Box>

        <Button onClick={onOpen} bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}}><EditIcon /></Button>

        <Box>
            <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent bg={'#122435'}>
                    <ModalHeader>Hodim Qo'shish</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6} >
                        <FormControl>
                            <FormLabel>Ism</FormLabel>
                            <Input color={'white'}  ref={initialRef} placeholder='Ism...' type={'text'}/>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Familiya</FormLabel>
                            <Input color={'white'}  placeholder='Familiya...' type={'text'} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Telefon Raqam</FormLabel>
                            <Input color={'white'}  placeholder='Telefon...' type={'number'} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Elektron Manzil</FormLabel>
                            <Input color={'white'}  placeholder='Email...' type={'email'} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Saqlash
                        </Button>
                        <Button onClick={onClose}>Bekor Qilish</Button>
                    </ModalFooter>
                    </ModalContent>
            </Modal>
        </Box>

    </Box>
  )
}

export default HodimUpdet