import { Box , Flex , Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
  import {ChevronDownIcon } from '@chakra-ui/icons'

const Navbar = () => {
  return (
    <Box bg={'#122435'} px={{base: '20px' , md: '0'}}  h={{base: '10vh' , xl: '7vh'}} display={'flex'} flexDirection={'column'}  justifyContent={'center'} borderBottom={'1px'} borderColor={'#2D2D2D'}>
        <Box maxW={'1633px'} mx={'auto'}  >
            <Flex fontSize={'20px'}  alignItems={'center'} gap={'40px'} minHeight={'7vh'}>
                <Flex display={{base: 'none' , md: 'block'}}>
                    <Box   fontSize={'20px'} display={'flex'}  alignItems={'center'} gap={'40px'}>
                        <Link className='link' to={'/html'}>
                            HTML
                        </Link>
                        <Link className='link'>
                            CSS
                        </Link>
                        <Link className='link'>
                            JAVASCRIPT
                        </Link>
                        <Link className='link'>
                            BOOTSTRAP
                        </Link>
                        <Link className='link'>
                            REACT JS
                        </Link>
                        <Link className='link'>
                            NEXT JS
                        </Link>
                        <Link className='link'>
                            TYPESCRIPT
                        </Link>
                        <Link className='link'>
                            TAILWINT
                        </Link>
                        <Link className='link'>
                            CHAKRA UI
                        </Link>
                        <Link className='link'>
                            MATERIAL UI
                        </Link>
                    </Box>
                </Flex>
                <Box display={{base: 'block' , md: 'none'}}>
                    <Menu  >
                        <MenuButton   bg={'#233242'} _hover={{bg: '#222'}} as={Button} rightIcon={<ChevronDownIcon />}>
                            Baecha Darsliklar To'plami
                        </MenuButton>
                        <MenuList border={'none'} bg={'#233242'}>
                            <MenuItem bg={'#233242'}>
                                <Link className='link' to={'/html'}>
                                    HTML
                                </Link>
                            </MenuItem>
                            <MenuItem bg={'#233242'}>
                                <Link className='link'>
                                    CSS
                                </Link>
                            </MenuItem>
                            <MenuItem bg={'#233242'}>
                                <Link className='link'>
                                    JAVASCRIPT
                                </Link>
                            </MenuItem>
                            <MenuItem bg={'#233242'}>
                                <Link className='link'>
                                    BOOTSTRAP
                                </Link>
                            </MenuItem>
                            <MenuItem bg={'#233242'}>
                                <Link className='link'>
                                    REACT JS
                                </Link>
                            </MenuItem>
                            <MenuItem bg={'#233242'}>
                                <Link className='link'>
                                    NEXT JS
                                </Link>
                            </MenuItem>
                            <MenuItem bg={'#233242'}>
                                <Link className='link'>
                                    TYPESCRIPT
                                </Link>
                            </MenuItem>
                            <MenuItem bg={'#233242'}>
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
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>

            </Flex>
        </Box>
    </Box>
  )
}

export default Navbar