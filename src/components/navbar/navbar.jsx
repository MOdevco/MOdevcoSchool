import { Box , Flex , Button, useDisclosure , Text } from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'
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
import { color } from 'framer-motion'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    

    
  return (
    <Box bg={'#122435'} px={{base: '20px' , md: '0'}}  className={'over'} width={'100%'}  h={{base: '10vh' , xl: '8vh'}} display={'flex'} flexDirection={'column'}  justifyContent={'space-between'} borderBottom={'1px'} borderColor={'#2D2D2D'}>
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
            <Flex fontSize={'20px'}   alignItems={'center'} pt={{base: '0px' , xl: '1px'}} gap={'40px'} minHeight={'7vh'}>
                <Flex display={{base: 'none' , md: 'block'}} >
                    <Box fontSize={{base: '20px' , xl: '25px'}} className={'nav'} display={'flex'}   alignItems={'center'} gap={{base: '15px' , xl: '40px'}}>
                            
                            <NavLink style={({isActive}) => {return{background: isActive ? '#7FFFD4' : '', color: isActive ? '#111' : 'white' , fontWeight: isActive ? 'bold' : 'normal' , padding: isActive ? '20px' : ''}}} className='link' to={'/html'}>
                                HTML
                            </NavLink>
                            <NavLink   onClick={onOpen} className='link'>
                                CSS
                            </NavLink>
                            <NavLink className='link' onClick={onOpen}>
                                JAVASCRIPT
                            </NavLink>
                            <NavLink  className='link' onClick={onOpen}>
                                BOOTSTRAP
                            </NavLink>
                            <NavLink  className='link' onClick={onOpen}>
                                REACT JS
                            </NavLink>
                            <NavLink  className='link' onClick={onOpen}>
                                NEXT JS
                            </NavLink>
                            <NavLink  className='link' onClick={onOpen}>
                                TYPESCRIPT
                            </NavLink>
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
                                Barcha Darsliklar To'plami
                            </MenuButton>
                            <MenuList border={'none'} bg={'#233242'}>
                                <MenuItem bg={'#233242'}>
                                    <NavLink style={({isActive}) => {return{color: isActive ? 'red' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} className='link' to={'/html'}>
                                        HTML
                                    </NavLink>
                                </MenuItem>
                                <MenuItem bg={'#233242'}>
                                    <NavLink onClick={onOpen} className='link'>
                                        CSS
                                    </NavLink>
                                </MenuItem>
                                <MenuItem bg={'#233242'}>
                                    <NavLink onClick={onOpen} className='link'>
                                        JAVASCRIPT
                                    </NavLink>
                                </MenuItem>
                                <MenuItem bg={'#233242'}>
                                    <NavLink onClick={onOpen} className='link'>
                                        BOOTSTRAP
                                    </NavLink>
                                </MenuItem>
                                <MenuItem bg={'#233242'}>
                                    <NavLink onClick={onOpen} className='link'>
                                        REACT JS
                                    </NavLink>
                                </MenuItem>
                                <MenuItem bg={'#233242'}>
                                    <NavLink onClick={onOpen} className='link'>
                                        NEXT JS
                                    </NavLink>
                                </MenuItem>
                                <MenuItem bg={'#233242'}>
                                    <NavLink onClick={onOpen} className='link'>
                                        TYPESCRIPT
                                    </NavLink>
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
                                <MenuItem   bg={'#233242'} _hover={{bg: ''}}>1.1.4</MenuItem>
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