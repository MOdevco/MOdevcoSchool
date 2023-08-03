import { Box, Button, FormControl, FormLabel, Input, useToast , Image, Flex, Heading, Divider, Avatar, useDisclosure } from "@chakra-ui/react"
import { useEffect, useRef, useState  } from "react"
import { barchasi, Logo, messImg, taklif, user } from "../assets"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, dataRef } from "../firebase"
import { AddIcon, EmailIcon, PlusSquareIcon } from '@chakra-ui/icons'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'


const AdminModevcoAdmin = () => {
    const [admin , setAdmin] = useState("")
    const [password , setPassword] = useState("")
    const [showPanel , setShowPanel] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const toast = useToast()
    // const [nameVal , setNameVal] = useState("")
    const handleClose = () => {
        if(admin === "modevco" && password === '1122') {
            setShowPanel(false)
        } else {
            toast({
                title: 'Nimadur xato!!',
                status: 'error',
                position: 'top-right',
                duration: 3000,
                isClosable: true,
            })
        }
    }
//     useEffect(() => {
//     dataRef.ref().child("ism").on('value' , data => {
//       const getData = Object.values(data.val())
//       setNameVal(getData)
//     })
//   } , [])

  

    return (

        <Box minHeight={'100vh'}>
            <Box  className="hide">

                {showPanel && <Box position={'fixed'} width={'100%'} height={'100vh'} top={0} left={'0'} display={'flex'} justifyContent={'center'} alignItems={'center'} bg={'black'} zIndex={10}>
                    <Box width={'30%'} bg={'#122435'} p={'30px'} rounded={'10px'}>
                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                            <Image width={'100px'} src={Logo}></Image>
                        </Box>
                        <FormControl isRequired>
                            <FormLabel>Admin</FormLabel>
                            <Input color={'white'} onChange={e => setAdmin(e.target.value)} placeholder='First name' />

                            <FormLabel pt={'20px'}>Parol</FormLabel >
                            <Input color={'white'} onChange={e => setPassword(e.target.value)} placeholder='First name' />

                            <Button className="btn" onClick={handleClose} bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}} mt={'20px'}>Kirish</Button>
                        </FormControl>
                    </Box>



                </Box>}

                <Box width={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box width={'350px'} zIndex={'9'} position={'fixed'} top={'180px'} px={'20px'} display={'flex'} pt={'70px'}  borderRight={'2px'} borderColor={'#2D2D2D'} height={'100vh'} bg={'#050E17'}>
                        <Box display={'flex'} flexDirection="column" width={'100%'} gap={'20px'}>
                                <Button bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}} width={'100%'}>
                                    <Image width={'30px'} src={barchasi}></Image>
                                    Barchasi
                                </Button>
                                <Button bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}} width={'100%'}>
                                    <Image width={'30px'} src={user}></Image>
                                    Xodimlar
                                </Button>
                                <Button bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}} width={'100%'}>
                                    <Image width={'30px'} src={taklif}></Image>
                                    Takliflar
                                </Button>
                                <Button bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}} width={'100%'}>
                                    <Image width={'30px'} src={messImg}></Image>
                                    Komentariya
                                </Button>
                                <Button onClick={onOpen} bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}} width={'100%'}>
                                    <AddIcon  width={'30px'}/>
                                    Xotim qo'shish
                                </Button>

                                <Modal
                                    initialFocusRef={initialRef}
                                    finalFocusRef={finalRef}
                                    isOpen={isOpen}
                                    onClose={onClose}
                                   
                                >
                                    <ModalOverlay />
                                    <ModalContent  bg={'#122435'}>
                                    <ModalHeader>Create your account</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody pb={6}>
                                        <FormControl>
                                        <FormLabel>Ism</FormLabel>
                                        <Input type={'text'} color={'white'} ref={initialRef} placeholder='Ism...' />
                                        </FormControl>

                                        <FormControl mt={4}>
                                        <FormLabel>Familiya</FormLabel>
                                        <Input type={'text'} color={'white'} placeholder='Familiya...' />
                                        </FormControl>

                                        <FormControl mt={4}>
                                        <FormLabel>Telefon nomer</FormLabel>
                                        <Input color={'white'} placeholder='Tel...' type={'number'} />
                                        </FormControl>

                                        <FormControl mt={4}>
                                        <FormLabel>Electron manzil</FormLabel>
                                        <Input color={'white'} placeholder='Email...' type={'email'} />
                                        </FormControl>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button colorScheme='blue' mr={3}>
                                            Saqlash
                                        </Button>
                                        <Button onClick={onClose}>Bekor qilish</Button>
                                    </ModalFooter>
                                    </ModalContent>
                                </Modal>
                        </Box>
                    </Box>
                </Box>
                <Box pt={'260px'} pl={'500px'}>
                    <Heading>Xodimlar Ro'yxati</Heading>
                </Box>
                <Divider width={'100%'} mt={'30px'} />

                <Box pt={'50px'} pl={'500px'}>
                    <TableContainer p={'10px'}  bg={'#fff'} width={'90%'}>
                        <Table  variant='simple'>
                            <Thead>
                                <Tr borderBottom={'2px'} borderColor={'black'}>
                                    <Th>Avatar</Th>
                                    <Th>Ism</Th>
                                    <Th>Familiya</Th>
                                    <Th>Telefon</Th>
                                    <Th>Email</Th>
                                    <Th>Qo'shimcha</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr borderBottom={'2px'} borderColor={'black'}>
                                    <Td  color={'black'}>
                                        <Avatar  width={'40px'} height={'40px'}/>
                                    </Td>
                                    <Td  color={'black'}>millimetres (mm)</Td>
                                    <Td  color={'black'}>millimetres (mm)</Td>
                                    <Td  color={'black'}>millimetres (mm)</Td>
                                    <Td  color={'black'}>millimetres (mm)</Td>
                                    <Td  color={'black'}>millimetres (mm)</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>


        </Box>

    )
}


export default AdminModevcoAdmin