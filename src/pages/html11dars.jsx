import { Box , Flex , Heading , Button , Text , Image} from '@chakra-ui/react'
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
  } from '@chakra-ui/react'
import AccordionItenm from '../components/accordion/accordion'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useEffect, useState } from 'react'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'
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

const Html11dars = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('left')
    const [size, setSize] = useState('')
    const [clipboard , setClipboard] = useState(false)
    const toast = useToast()

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
                    <Sidebar title={'HTML DARSLARI'} elementName={'Bosh sahifa'}  />
                </Box>}
                <Box ml={{base: '30px' , md: '450px'}}   display={'flex'}  alignItems={'center'} gap={'20px'}>
                    {sizes.map((size) => (
                        <Button  onClick={ () => handleClick(size)} bg={'#233242'} _hover={{bg: '#222'}} display={{base: 'block' , md: 'none'}}>
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Ro'yxatlari</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '20vh' , md: '15vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'25px'}>HTML ro'yxatlari veb-ishlab chiquvchilarga ro'yxatlardagi tegishli elementlar to'plamini guruhlash imkonini beradi.</Text>
            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'450px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} pl={'50px'} gap={'30px'} borderLeft={'4px'} display={'flex'} pr={"50px"} flexDirection={{base: 'column' , xl: 'row'}} alignItems={'center'}  justifyContent={'space-between'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'282px'} bg={'#0A1624'}>
                        <Box>
                            <Heading fontSize={{base: '15px' , xl: '25px'}}>Tartibsiz HTML ro'yxati:</Heading>
                            <UnorderedList fontSize={'15px'}>
                                <ListItem>Element</ListItem>
                                <ListItem>Element</ListItem>
                                <ListItem>Element</ListItem>
                                <ListItem>Element</ListItem>
                                <ListItem>Element</ListItem>
                                <ListItem>Element</ListItem>
                            </UnorderedList>
                        </Box>

                        <Box>
                            <Heading fontSize={{base: '15px' , xl: '25px'}}>Buyurtma qilingan HTML ro'yxati:</Heading>
                            <OrderedList>
                                <ListItem>Birinchi Element</ListItem>
                                <ListItem>Ikkinchi Element</ListItem>
                                <ListItem>Uchinchi Element</ListItem>
                                <ListItem>To’rtinchi Element</ListItem>
                                <ListItem>Beshinchi Element</ListItem>
                                <ListItem>Oltinchi Element</ListItem>
                            </OrderedList>
                        </Box>

                    </Box>

                    <CopyToClipboard text=" Element , Birinchi Element" onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

            </Box>
            <Divider mt={'20px'} />

           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'80vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Tartibsiz HTML Ro'yxati</Heading>
                <Text fontSize={'25px'}> Tartibsiz ro'yxat <span style={{color: 'red'}}>{`<ul>`}</span> tegi bilan boshlanadi. Har bir ro'yxat elementi <span style={{color: 'red'}}>{`<li>`}</span> tegi bilan boshlanadi.</Text>
                <Text fontSize={'25px'}> Ro'yxat elementlari sukut bo'yicha o'qlar (kichik qora doiralar) bilan belgilanadi:</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'420px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'245px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<ul>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'} pl={'30px'}>{`<li>`} <span style={{color: 'white'}}>Kofe</span>{`</li>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'} pl={'30px'}>{`<li>`} <span style={{color: 'white'}}>Choy</span>{`</li>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'} pl={'30px'}>{`<li>`} <span style={{color: 'white'}}>Sut</span>{`</li>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`</ul>`}</Text>

                    </Box>

                    <CopyToClipboard text=" <ul><li>Kofe</li><li>Choy</li><li>Sut</li></ul>" onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

            </Box>
            <Divider mt={'20px'} />

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'80vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Buyurtma Qilingan HTML Ro'yxati</Heading>
                <Text fontSize={'25px'}> Tartibsiz ro'yxat <span style={{color: 'red'}}>{`<ol>`}</span> Tartiblangan ro'yxat  tegi bilan boshlanadi. Har bir ro'yxat elementi <span style={{color: 'red'}}>{`<li>`}</span> tegi bilan boshlanadi.</Text>
                <Text fontSize={'25px'}> Ro'yxat elementlari sukut bo'yicha raqamlar bilan belgilanadi:</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'420px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'245px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<ol>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'} pl={'30px'}>{`<li>`} <span style={{color: 'white'}}>Kofe</span>{`</li>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'} pl={'30px'}>{`<li>`} <span style={{color: 'white'}}>Choy</span>{`</li>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'} pl={'30px'}>{`<li>`} <span style={{color: 'white'}}>Sut</span>{`</li>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`</0l>`}</Text>

                    </Box>

                    <CopyToClipboard text=" <ol><li>Kofe</li><li>Choy</li><li>Sut</li></ol>" onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>BHTML Tavsif Ro'yxati</Heading>
                <Text fontSize={'25px'}> HTML shuningdek tavsif ro'yxatini qo'llab-quvvatlaydi.</Text>
                <Text fontSize={'25px'}>Ta'riflar ro'yxati - bu har bir atama tavsifi bilan atamalar ro'yxati.</Text>
                <Text fontSize={'25px'}><span style={{color:' red'}}>{`<dl>`}</span> tegi tavsif ro'yxatini,<span style={{color:' red'}}>{`<dt>`}</span>  tegi atamani (ism) va <span style={{color:' red'}}>{`<dd>`}</span>  tegi har bir atamani tavsiflaydi:</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'500px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<dl>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'} pl={'30px'}>{`<dt>`} <span style={{color: 'white'}}>Kofe</span>{`</dt>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'} pl={'30px'}>{`<dd>`} <span style={{color: 'white'}}>- qora issiq ichimlik</span>{`</dd>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'} pl={'30px'}>{`<dt>`} <span style={{color: 'white'}}>Sut</span>{`</dt>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'} pl={'30px'}>{`<dd>`} <span style={{color: 'white'}}>- oq sovuq ichimlik</span>{`</dd>`}</Text>

                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`</dl>`}</Text>

                    </Box>

                    <CopyToClipboard text=" <dl><dt>Kofe</dt><dd>- qora issiq ichimlik</dd><dt>Sut</dt><dd>- oq sovuq ichimlik</dd></dl>" onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'80vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Ro'yxati Teglari</Heading>
                <TableContainer>
                    <Table border={'1px'} variant='simple' width={'90%'}>
                        
                        <Thead>
                            <Tr fontWeight={'bold'} bg={'#233242'} >
                                <Td>Tag</Td>
                                <Td>Description</Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>{`<ul>  `}</Td>
                                <Td>Tartibsiz ro'yxatni belgilaydi</Td>
                            </Tr>
                            <Tr bg={'#233242'}>
                                <Td>{`<ol>   `}</Td>
                                <Td>Tartiblangan ro'yxatni belgilaydi</Td>
                            </Tr>
                            <Tr>
                                <Td>{`<li>  `}</Td>
                                <Td>Ro'yxat elementini belgilaydi</Td>
                            </Tr>
                            <Tr bg={'#233242'}>
                                <Td>{`<dl> `}</Td>
                                <Td>Tavsif ro'yxatini belgilaydi</Td>
                            </Tr>
                            <Tr>
                                <Td>{`<dt>  `}</Td>
                                <Td>Ta'riflar ro'yxatidagi atamani belgilaydi</Td>
                            </Tr>
                            <Tr bg={'#233242'}>
                                <Td>{`<dd> `}</Td>
                                <Td>Ta'riflar ro'yxatida atamani tavsiflaydi</Td>
                            </Tr>
                        </Tbody>
                        
                    </Table>
                </TableContainer>
               
            </Box>

           
            
        </Box>
    </Box>
  )
}

export default Html11dars