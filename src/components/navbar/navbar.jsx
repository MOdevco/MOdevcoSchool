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
    <Box bg={'#122435'} px={{base: '20px' , md: '0'}}  h={'7vh'} borderBottom={'1px'} borderColor={'#2D2D2D'}>
        <Box maxW={'1633px'} mx={'auto'}  >
            <Flex fontSize={'20px'}  alignItems={'center'} gap={'40px'} minHeight={'7vh'}>
                <Flex display={{base: 'none' , md: 'block'}}>
                    <Box   fontSize={'20px'} display={'flex'}  alignItems={'center'} gap={'40px'}>
                        <Link className='link'>
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
                    <Menu >
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Actions
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Link className='link'>
                                    HTML
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link className='link'>
                                    CSS
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link className='link'>
                                    JAVASCRIPT
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link className='link'>
                                    BOOTSTRAP
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link className='link'>
                                    REACT JS
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link className='link'>
                                    NEXT JS
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link className='link'>
                                    TYPESCRIPT
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link className='link'>
                                    TAILWINT
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link className='link'>
                                    CHAKRA UI
                                </Link>
                            </MenuItem>
                            <MenuItem>
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