import { Box , Flex , Heading , Button , Text , Image , Input , FormLabel, HStack, Radio, RadioGroup} from '@chakra-ui/react'
import { HamburgerIcon , CloseIcon } from '@chakra-ui/icons'
import Sidebar from '../components/sidebarhtml/sidebarhtml'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    useToast,Divider,
    UnorderedList,
    ListItem
  } from '@chakra-ui/react'
import AccordionItenm from '../components/accordion/accordion'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useEffect, useState } from 'react'
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
import { Search2Icon } from '@chakra-ui/icons'
import { data } from '../htmlCode'
const HtmlCode = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('left')
    const [size, setSize] = useState('')
    const [clipboard , setClipboard] = useState(false)
    const toast = useToast()
    const [search , setSearch] = useState("")
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
    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }
    const nandleClose = () => {
        onClose()
    }
    const sizes = ['md']
    useEffect(() => {
        window.scroll(0,0)
      }, [])
  return (
    <Box pt={'300px'} width={'100%'} bg={'#1A202C'} height={'100%'}>
        <Box >
            <Flex >
                {onOpen && <Box>
                    <Sidebar title={'HTML DARSLARI'} elementName={'Bosh sahifa'} />
                </Box>}
                <Box ml={{base: '30px' , md: '450px'}}   display={'flex'}  alignItems={'center'} gap={'20px'}>
                    {sizes.map((size , i) => (
                        <Button key={i} onClick={ () => handleClick(size)} bg={'#233242'} _hover={{bg: '#222'}} display={{base: 'block' , md: 'none'}}>
                            <HamburgerIcon />
                        </Button>
                        
                    ))}
                    <Drawer placement={placement}  onClose={onClose} size={size} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                        <DrawerBody bg={'#0A1624'} display={'flex'} justifyContent={'center'} minHeight={'100vh'} >
                        <CloseIcon onClick={nandleClose} position={'absolute'} right={'10px'} />
                            <AccordionItenm   />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Teglari Alifbo Tartibida Tartiblangan</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
                    <Box border={'1px'} display={'flex'} color={'black'}  bg={'#233242'} alignItems={'center'} width={{base: '100%' , xl: '90%'}} p={'10px'} borderColor={'white'}>
                        <Search2Icon fontSize={'30px'}  />
                        <input placeholder='Qidirish' className='outline' onChange={e => setSearch(e.target.value)}></input>
                    </Box>

                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'45vh'}>
                        <TableContainer>
                                <Table border={'1px'} variant='simple' width={{base: '100%' , xl: '90%'}}>
                                    
                                    <Thead>
                                        <Tr fontWeight={'bold'} bg={'#233242'} >
                                            <Td>Turi</Td>
                                            <Td>Tavsif</Td>
                                        </Tr>
                                    </Thead>
                                    <Tbody width={'100%'}>
                                        {data.filter((item => {
                                            return search.toLowerCase() == '' ? item : item.tag.toLowerCase().includes(search)
                                        })).map((item) => (
                                            <Tr width={'100%'} key={item.id} >
                                                <Td width={'100%'} >{item.tag}</Td>
                                                <Td width={'100%'}>{item.desc}</Td>
                                            </Tr>
                                            
                                        ))}
                                    </Tbody>
                                    
                                </Table>
                        </TableContainer>
                        
                        <Box height={'10vh'}>
                            <Heading fontSize={{base: '20px' ,xl: '50px'}}>Taglar soni {data.length} ta dan iborat</Heading>
                        </Box>
                    </Box>

                </Box>
            </Box>
                    



            
    </Box>
  )
}

export default HtmlCode