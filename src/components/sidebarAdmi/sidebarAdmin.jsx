import { DragHandleIcon } from '@chakra-ui/icons'
import { Box, Button, useToast } from '@chakra-ui/react'
// import HodimQoshish from '../hodimQo\'shish/hodimQo\'shish'
import { FormControl, FormLabel, Input, useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { value } from '../../assets'

const SidebarAdmin = ({setData , data}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [user , setUser] = useState({name: '' , lastname: '' , phone: '' , email: ''})
    const API = 'http://localhost:3000/users'
    const toast = useToast()
    const audio = () => {
        new Audio(value).play()
    }
    const handleSubmit = async () => {
        await axios.post(API , user).then((res) => {
           axios.get(API).then((res) => {
                setData(res.data)
           })
            toast({
                position: 'top-right',
                duration: 3000,
                render: () => (
                <Box color='white' p={3} bg='green.300'>
                    Ma'lumot qo'shildi
                </Box>
                ),
            })
            audio()
        })
        setUser("")
    }
  return (
    <Box width={'350px'} position={'fixed'} top={'0'} left={'0'} borderRight={'2px'} borderColor={'#2D2D2D'} height={'100vh'} bg={'#050E17'}>
        <Box pt={'250px'} display={'flex'} gap={'20px'} px={'20px'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Button  bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}} width={'100%'} fontSize={'22px'}>BARCHASI</Button>
            <Button bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}} width={'100%'} fontSize={'22px'}>XODIMLAR</Button>
            <Button bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}} width={'100%'} fontSize={'22px'}>TAKLIFLAR</Button>
            <Button bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}} width={'100%'} fontSize={'22px'}>KOMMENTARIYALAR</Button>
            <Button onClick={onOpen} bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}} width={'100%'} fontSize={'22px'}>XODIM QO'SHISH</Button>

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
                            <Input color={'white'} onChange={(e) => setUser({...user , name: e.target.value})} ref={initialRef} placeholder='Ism...' type={'text'}/>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Familiya</FormLabel>
                            <Input color={'white'} onChange={(e) => setUser({...user , lastname: e.target.value})} placeholder='Familiya...' type={'text'} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Telefon Raqam</FormLabel>
                            <Input color={'white'} onChange={(e) => setUser({...user , phone: e.target.value})} placeholder='Telefon...' type={'number'} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Elektron Manzil</FormLabel>
                            <Input color={'white'} onChange={(e) => setUser({...user , email: e.target.value})} placeholder='Email...' type={'email'} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={() => {
                            onClose()
                            handleSubmit()
                        }} colorScheme='blue' mr={3}>
                            Saqlash
                        </Button>
                        <Button onClick={onClose}>Bekor Qilish</Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Box>
    </Box>
  )
}

export default SidebarAdmin