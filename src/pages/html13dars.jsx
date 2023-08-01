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
const Html13dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTMLda Kulgichlardan Foydalanish</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '20vh' , md: '15vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'25px'}>Emojilar UTF-8 belgilar to‘plamidagi belgilar: 😄 😍 💗</Text>
            </Box>
            <Divider mt={'20px'} />
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'30vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> Emojilar nima?</Heading>
                <Text fontSize={'25px'}>Emojilar tasvir yoki piktogramma kabi ko'rinadi, lekin ular unday emas.</Text>
                <Text fontSize={'25px'}>Ular UTF-8 (Unicode) belgilar to'plamidagi harflar (belgilar).</Text>
            </Box>
            <Divider mt={'20px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'45vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Emojilar nima?</Heading>
                <Text fontSize={'25px'}> HTML sahifani to'g'ri ko'rsatish uchun veb-brauzer sahifada ishlatiladigan belgilar to'plamini bilishi kerak.</Text>
                <Text fontSize={'25px'}> Bu <span style={{color: 'red'}}>{`<meta>`}</span> tegida ko'rsatilgan:</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'100px'} rounded={'20px'}>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'70px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`<meta `} <span style={{color: 'red'}}> charset=</span> <span  style={{color: 'yellow'}}>"UTF-8"</span> {`>`}</Text>
                    </Box>

                </Box>
               
            </Box>
            <Divider mt={'20px'} />
            

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>UTF-8 belgilar</Heading>
                <Text fontSize={'25px'}>Ko'pgina UTF-8 belgilarini klaviaturada yozib bo'lmaydi, lekin ular har doim raqamlar yordamida ko'rsatilishi mumkin (ob'ekt raqamlari deb ataladi):</Text>
                <UnorderedList fontSize={'20px'}>
                    <ListItem>A is 65</ListItem>
                    <ListItem>B is 66</ListItem>
                    <ListItem>C is 67</ListItem>
                </UnorderedList>


                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'610px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'430px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<!DOCTYPE `} <span style={{color: 'red'}}>html</span> {`>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<html>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<head>`}</Text>

                        <Text pl={'30px'} color={'#9D5EBB'} fontSize={'25px'}> {`<meta `} <span style={{color: 'red'}}> charset=</span> <span  style={{color: 'yellow'}}>"UTF-8"</span> {`>`}</Text>

                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`</head>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<body>`}</Text>

                        <Text pl={'30px'} color={'#9D5EBB'} fontSize={'25px'}> {`<p>`} <span style={{color: 'white'}}>Men A B C ko'rsataman</span> {`</p>`}</Text>
                        <Text pl={'30px'} color={'#9D5EBB'} fontSize={'25px'}> {`<p>`} <span style={{color: 'white'}}>Men ko'rsatadi & # 65; &#66; &#67;</span> {`</p>`}</Text>


                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`</body>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`</html>`}</Text>
                    </Box>

                    <CopyToClipboard text={` <!DOCTYPE html><html><head><meta charset="UTF-8"></head><body><p>Men A B C ko'rsataman</p><p>Men ko'rsatadi & # 65; &#66; &#67;</p></body></html>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'40vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> Misol tushuntirildi</Heading>
                <Text fontSize={'25px'}> <span style={{color: 'red'}}>{`<meta charset="UTF-8"> `}</span> elementi belgilar to'plamini belgilaydi.</Text>
                <Text fontSize={'25px'}>A, B va C belgilar 65, 66 va 67 raqamlari bilan ko'rsatiladi.</Text>
                <Text fontSize={'25px'}>Brauzerga belgi ko'rsatayotganingizni tushunishi uchun ob'ekt raqamini &# dan boshlashingiz va uni bilan tugatishingiz kerak; (nuqta vergul).</Text>
            </Box>
            <Divider mt={'20px'} />

            

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Emoji belgilar</Heading>
                <Text fontSize={'25px'}>Emojilar ham UTF-8 alifbosidagi belgilardir:</Text>
                <UnorderedList fontSize={'20px'}>
                    <ListItem>😄 is 128516</ListItem>
                    <ListItem>😍 is 128525</ListItem>
                    <ListItem>💗 is 128151</ListItem>
                </UnorderedList>


                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'610px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'430px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<!DOCTYPE `} <span style={{color: 'red'}}>html</span> {`>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<html>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<head>`}</Text>

                        <Text pl={'30px'} color={'#9D5EBB'} fontSize={'25px'}> {`<meta `} <span style={{color: 'red'}}> charset=</span> <span  style={{color: 'yellow'}}>"UTF-8"</span> {`>`}</Text>

                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`</head>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<body>`}</Text>

                        <Text pl={'30px'} color={'#9D5EBB'} fontSize={'25px'}> {`<p>`} <span style={{color: 'white'}}>Mening birinchi kulgichim</span> {`</p>`}</Text>
                        <Text pl={'30px'} color={'#9D5EBB'} fontSize={'25px'}> {`<p>`} <span style={{color: 'white'}}>{`&#128512;`}</span> {`</p>`}</Text>


                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`</body>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`</html>`}</Text>
                    </Box>

                    <CopyToClipboard text={` <!DOCTYPE html><html><head><meta charset="UTF-8"></head><body><p>Mening birinchi kulgichim</p><p>&#128512;</p></body></html>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
           


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'85vh'}>
                <Text fontSize={'25px'}>Emojilar belgilar bo'lgani uchun ularni HTML-dagi har qanday boshqa belgilar kabi nusxalash, ko'rsatish va o'lchash mumkin.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'610px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'430px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<!DOCTYPE `} <span style={{color: 'red'}}>html</span> {`>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<html>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<head>`}</Text>

                        <Text pl={'30px'} color={'#9D5EBB'} fontSize={'25px'}> {`<meta `} <span style={{color: 'red'}}> charset=</span> <span  style={{color: 'yellow'}}>"UTF-8"</span> {`>`}</Text>

                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`</head>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<body>`}</Text>

                        <Text pl={'30px'} color={'#9D5EBB'} fontSize={'25px'}> {`<p>`} <span style={{color: 'white'}}>Oʻlchamli kulgichlar</span> {`</p>`}</Text>
                        <Text pl={'30px'} color={'#9D5EBB'} fontSize={'25px'}> {`<p`} <span style={{color: 'red'}}>style=</span> <span style={{color: 'yellow'}}>"font-size:48px"</span> {`>`} <span style={{color: 'white'}}>{`&#128512; &#128516; &#128525; &#128151; `}</span> {`</p>`}</Text>


                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`</body>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`</html>`}</Text>
                    </Box>

                    <CopyToClipboard text={`<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body><p>Oʻlchamli kulgichlar</p><p  style="font-size:48px">&#128512; &#128516; &#128525; &#128151; </p></body></html>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
                    

            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'100vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>UTF-8-dagi ba'zi kulgichlar belgilari</Heading>
                <TableContainer>
                    <Table border={'1px'} variant='simple' width={'90%'}>
                        
                        <Thead>
                            <Tr fontWeight={'bold'} bg={'#233242'} >
                                <Td>Emoji</Td>
                                <Td>Qiymat</Td>
                                <Td>Olish</Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>{`🗻 `}</Td>
                                <Td>{`&#128507;`}</Td>
                                <CopyToClipboard text={'&#128507;'} onCopy={handleClip}>
                                    <Td>
                                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                                    </Td>
                                </CopyToClipboard>
                            </Tr>

                            <Tr bg={'#233242'}>
                                <Td>{`🗼 `}</Td>
                                <Td>{`&#128508;`}</Td>
                                <CopyToClipboard text={'&#128508;'} onCopy={handleClip}>
                                    <Td>
                                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                                    </Td>
                                </CopyToClipboard>
                            </Tr>

                            <Tr>
                                <Td>{`🗽  `}</Td>
                                <Td>{`&#128509;`}</Td>
                                <CopyToClipboard text={'&#128509;'} onCopy={handleClip}>
                                    <Td>
                                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                                    </Td>
                                </CopyToClipboard>
                            </Tr>

                            <Tr bg={'#233242'}>
                                <Td>{`🗾`}</Td>
                                <Td>{`&#128510;`}</Td>
                                <CopyToClipboard text={'&#128510;'} onCopy={handleClip}>
                                    <Td>
                                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                                    </Td>
                                </CopyToClipboard>
                            </Tr>

                            <Tr>
                                <Td>{`🗿`}</Td>
                                <Td>{`&#128511;`}</Td>
                                <CopyToClipboard text={'&#128511;'} onCopy={handleClip}>
                                    <Td>
                                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                                    </Td>
                                </CopyToClipboard>
                            </Tr>

                            <Tr bg={'#233242'}>
                                <Td>{`😀`}</Td>
                                <Td>{`&#128512;`}</Td>
                                <CopyToClipboard text={'&#128512;'} onCopy={handleClip}>
                                    <Td>
                                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                                    </Td>
                                </CopyToClipboard>
                            </Tr>

                            <Tr>
                                <Td>{`😁 `}</Td>
                                <Td>{`&#128513;`}</Td>
                                <CopyToClipboard text={'&#128513;'} onCopy={handleClip}>
                                    <Td>
                                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                                    </Td>
                                </CopyToClipboard>
                            </Tr>

                            <Tr bg={'#233242'}>
                                <Td>{`😂`}</Td>
                                <Td>{`&#128514;`}</Td>
                                <CopyToClipboard text={'&#128514;'} onCopy={handleClip}>
                                    <Td>
                                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                                    </Td>
                                </CopyToClipboard>
                            </Tr>

                            <Tr>
                                <Td>{`😃`}</Td>
                                <Td>{`&#128515;`}</Td>
                                <CopyToClipboard text={'&#128515;'} onCopy={handleClip}>
                                    <Td>
                                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                                    </Td>
                                </CopyToClipboard>
                            </Tr>

                            <Tr bg={'#233242'}>
                                <Td>{`😄`}</Td>
                                <Td>{`&#128516;`}</Td>
                                <CopyToClipboard text={'&#128516;'} onCopy={handleClip}>
                                    <Td>
                                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                                    </Td>
                                </CopyToClipboard>
                            </Tr>

                            <Tr>
                                <Td>{`😅`}</Td>
                                <Td>{`&#128517;`}</Td>
                                <CopyToClipboard text={'&#128517;'} onCopy={handleClip}>
                                    <Td>
                                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                                    </Td>
                                </CopyToClipboard>
                            </Tr>
                            
                        </Tbody>
                        
                    </Table>
                </TableContainer>
               
            </Box>



            
        </Box>
    </Box>
  )
}

export default Html13dars