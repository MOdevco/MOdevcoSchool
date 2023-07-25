import { Box , Flex , Button, useDisclosure , Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import {ChevronDownIcon } from '@chakra-ui/icons'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box bg={'#122435'} px={{base: '20px' , md: '0'}}  className={'over'} width={'100%'}  h={{base: '10vh' , xl: '11vh'}} display={'flex'} flexDirection={'column'}  justifyContent={'space-between'} borderBottom={'1px'} borderColor={'#2D2D2D'}>
        <Box maxW={'1633px'} mx={'auto'}  >
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
            <Flex fontSize={'20px'}   alignItems={'center'} pt={{base: '20px' , xl: '35px' , md: '30px'}} gap={'40px'} minHeight={'7vh'}>
                <Flex display={{base: 'none' , md: 'block'}} >
                    <Box   fontSize={{base: '12px' , xl: '20px'}} display={'flex'}   alignItems={'center'} gap={{base: '15px' , xl: '40px'}}>
                        <Link className='link' to={'/html'}>
                            HTML
                        </Link>
                        <Link onClick={onOpen} className='link'>
                            CSS
                        </Link>
                        <Link className='link' onClick={onOpen}>
                            JAVASCRIPT
                        </Link>
                        <Link className='link' onClick={onOpen}>
                            BOOTSTRAP
                        </Link>
                        <Link className='link' onClick={onOpen}>
                            REACT JS
                        </Link>
                        <Link className='link' onClick={onOpen}>
                            NEXT JS
                        </Link>
                        <Link className='link' onClick={onOpen}>
                            TYPESCRIPT
                        </Link>
                        {/* <Link className='link'>
                            TAILWINT
                        </Link>
                        <Link className='link'>
                            CHAKRA UI
                        </Link>
                        <Link className='link'>
                            MATERIAL UI
                        </Link> */}
                    </Box>
                </Flex>
                <Box display={'flex'} justifyContent={'space-between'}gap={'100px'}>
                    <Box display={{base: 'block' , md: 'none'}}>
                        <Menu  >
                            <MenuButton   bg={'#233242'} _hover={{bg: '#222'}} as={Button} rightIcon={<ChevronDownIcon />}>
                                Baecha Darsliklar To'plami
                            </MenuButton>
                            <MenuList border={'none'} bg={'#233242'}>
                                <MenuItem bg={'#233242'}>
                                    <Link onClick={onOpen} className='link' to={'/html'}>
                                        HTML
                                    </Link>
                                </MenuItem>
                                <MenuItem bg={'#233242'}>
                                    <Link onClick={onOpen} className='link'>
                                        CSS
                                    </Link>
                                </MenuItem>
                                <MenuItem bg={'#233242'}>
                                    <Link onClick={onOpen} className='link'>
                                        JAVASCRIPT
                                    </Link>
                                </MenuItem>
                                <MenuItem bg={'#233242'}>
                                    <Link onClick={onOpen} className='link'>
                                        BOOTSTRAP
                                    </Link>
                                </MenuItem>
                                <MenuItem bg={'#233242'}>
                                    <Link onClick={onOpen} className='link'>
                                        REACT JS
                                    </Link>
                                </MenuItem>
                                <MenuItem bg={'#233242'}>
                                    <Link onClick={onOpen} className='link'>
                                        NEXT JS
                                    </Link>
                                </MenuItem>
                                <MenuItem bg={'#233242'}>
                                    <Link onClick={onOpen} className='link'>
                                        TYPESCRIPT
                                    </Link>
                                </MenuItem>
                                {/* <MenuItem bg={'#233242'}>
                                    <Link className='link'>
                                        TAILWINT
                                    </Link>
                                </MenuItem>
                                <MenuItem bg={'#233242'}>
                                    <Link className='link'>
                                        CHAKRA UI
                                    </Link>
                                </MenuItem>
                                <MenuItem bg={'#233242'}>
                                    <Link className='link'>
                                        MATERIAL UI
                                    </Link>
                                </MenuItem> */}
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box display={{base: 'none' , xl: 'block'}}>
                        <Menu >
                            <MenuButton   bg={'#233242'} _hover={{bg: ''}} as={Button} rightIcon={<ChevronDownIcon />}>
                                Versiyalar
                            </MenuButton>
                            <MenuList border={'none'} bg={'#233242'}>
                                <MenuItem   bg={'#233242'} _hover={{bg: ''}}>1.0.0</MenuItem>
                                <MenuItem   bg={'#233242'} _hover={{bg: ''}}>1.0.1</MenuItem>
                                <MenuItem   bg={'#233242'} _hover={{bg: ''}}>1.0.2</MenuItem>
                                <MenuItem   bg={'#233242'} _hover={{bg: ''}}>1.0.3</MenuItem>
                                <MenuItem   bg={'#233242'} _hover={{bg: ''}}>1.0.4</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>

            </Flex>
        </Box>
    </Box>
  )
}

export default Navbar