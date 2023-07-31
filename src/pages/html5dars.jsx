import { Box , Flex , Heading , Button , Text , Image} from '@chakra-ui/react'
import { HamburgerIcon , CloseIcon } from '@chakra-ui/icons'
import Sidebar from '../components/sidebar/sidebar'
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
  import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'
import AccordionItenm from '../components/accordion/accordion'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useEffect, useState } from 'react'

const Html5dars = () => {
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
    <Box width={'100%'}  pt={'250px'} className={'bgImage'} height={'100%'}>
        <Box >
            <Flex>
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Matnni Formatlash</Heading>
                    </Box>
                </Box>
            </Flex>
            
            <Divider mt={'20px'} />
           
            <Box pl={{base: '20px' , md: '450px'}} pt={'20px'} >
                <Text fontSize={'20px'}>HTML maxsus ma'noga ega bo'lgan matnni aniqlash uchun bir nechta elementlarni o'z ichiga oladi.</Text>
            </Box>
            <Divider mt={'20px'} />

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                
                <Box width={{base: '95%' , md: '80%'}} height={'409px'} bg={'#233242'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} gap={'20px'} alignItems={'flex-start'} justifyContent={'center'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} borderColor={'#7FFFD4'} height={'200px'} overflow={'scroll'} pt={'40px'} bg={'#0A1624'}>

                       <Text fontSize={'25px'}>Bu matn <span style={{color: '#9D5EBB'}}>bold</span></Text>
                       <Text fontSize={'25px'}>Ushbu matn  <span style={{color: '#9D5EBB'}}>italic</span></Text>
                       <Box display={'flex'} gap={'20px'}>
                            <Text fontSize={'25px'}>Bu</Text>
                            <Text pt={'10px'} fontSize={'25px'} color={'#9D5EBB'}>suberscript</Text>
                            <Text fontSize={'25px'}> va </Text>
                            <Text mt={'-10px'} fontSize={'25px'} color={'#9D5EBB'}>superscript</Text>
                       </Box>

                    </Box>
                    <CopyToClipboard text="Bu matn bold Ushbu matn italic Bu va superscript superscript   "onCopy={handleClip}>
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Formatlash Elementlari</Heading>
                <Text>Formatlash elementlari matnning maxsus turlarini ko'rsatish uchun mo'ljallangan:</Text>
                <UnorderedList fontSize={'20px'}>
                    <ListItem> <span style={{color: 'red'}}>{`<b>`}</span> - Bold matn</ListItem>
                    <ListItem><span style={{color: 'red'}}>{`<strong>`}</span> - Strong matn</ListItem>
                    <ListItem><span style={{color: 'red'}}>{`<i>`}</span> - Italic matn</ListItem>
                    <ListItem><span style={{color: 'red'}}>{`<em>`}</span> - Emphasized matn</ListItem>
                    <ListItem><span style={{color: 'red'}}>{`<mark>`}</span> - Marked matn</ListItem>
                    <ListItem><span style={{color: 'red'}}>{`<small>`}</span> - Smaller matn</ListItem>
                    <ListItem> <span style={{color: 'red'}}n>{`<del>`}</span> - Deleted matn</ListItem>
                    <ListItem><span style={{color: 'red'}}>{`<ins>`}</span> - Inserted matn</ListItem>
                    <ListItem><span style={{color: 'red'}}>{`<sub>`}</span> - Subscript matn</ListItem>
                    <ListItem><span style={{color: 'red'}}>{`<sup>`}</span> - Supscript matn</ListItem>
                </UnorderedList>
            </Box>
            <Divider mt={'20px'} />
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'80vh'}>
                <Heading fontSize={{base: '30px', md: '50px'}}>HTML <span style={{color: 'red'}}>{`<b>`}</span > va <span style={{color: 'red'}}>{`<strong>`}</span> Elementlari</Heading>
                <Text fontSize={'25px'}>HTML <span style={{color: 'red'}}>{`<b>`}</span> elementi hech qanday ortiqcha ahamiyatsiz qalin matnni belgilaydi.</Text>

                <Box width={{base: '100%' , md: '80%'}} height={'250px'} display={'flex'} gap={'20px'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'center'} pl={{base: '20px' , md: '100px'}} bg={'#233242'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} height={'90px'} display={'flex'} gap={'20px'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'center'}  overflow='scroll' bg={'#0A1624'} borderLeft={'4px'} borderColor={'#7FFFD4'}>
                        <Text fontSize={'25px'} color={'white'}> <span  style={{color: '#9D5EBB'}}>{`<b>`}</span> Bu matn bold <span style={{color: '#9D5EBB'}}>{`</b>`}</span></Text>
                    </Box>

                    <CopyToClipboard text='<b>Bu matn bold</b>' onCopy={handleClip}>
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

                <Text fontSize={'20px'}>HTML <span style={{color: 'red'}}>{`<strong>`}</span> elementi katta ahamiyatga ega bo'lgan matnni belgilaydi. Ichkaridagi kontent odatda qalin qilib ko'rsatiladi.</Text>

                <Box  width={{base: '100%' , md: '80%'}}  height={'250px'} display={'flex'} gap={'20px'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'center'} pl={{base: '20px' , md: '100px'}} bg={'#233242'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} height={'90px'} display={'flex'} gap={'20px'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'center'}  overflow='scroll' bg={'#0A1624'} borderLeft={'4px'} borderColor={'#7FFFD4'}>
                        <Text fontSize={'25px'} color={'white'}> <span  style={{color: '#9D5EBB'}}>{`<strong>`}</span> Bu matn muhim!<span style={{color: '#9D5EBB'}}>{`</strong>`}</span></Text>
                    </Box>

                    <CopyToClipboard text='<strong> Bu matn muhim!</strong>' onCopy={handleClip}>
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'90vh'}>
                <Heading fontSize={{base: '30px', md: '50px'}}>HTML <span style={{color: 'red'}}>{`<i>`}</span > va <span style={{color: 'red'}}>{`<em>`}</span> Elementlari</Heading>
                <Text fontSize={'25px'}>HTML <span style={{color: 'red'}}>{`<i>`}</span> elementi matnning bir qismini muqobil ovoz yoki kayfiyatda belgilaydi. Ichkaridagi tarkib odatda kursiv bilan ko'rsatiladi.</Text>
                <Text fontSize={'25px'}>Maslahat: <span style={{color: 'red'}}>{`<i>`}</span>  tegi koʻpincha texnik atama, boshqa tildagi ibora, fikr, kema nomi va hokazolarni koʻrsatish uchun ishlatiladi.</Text>

                <Box  width={{base: '100%' , md: '80%'}}  height={'250px'} display={'flex'} gap={'20px'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'center'} pl={{base: '20px' , md: '100px'}} bg={'#233242'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} height={'90px'} display={'flex'} gap={'20px'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'center'}  overflow='scroll' bg={'#0A1624'} borderLeft={'4px'} borderColor={'#7FFFD4'}>
                        <Text fontSize={'25px'} color={'white'}> <span  style={{color: '#9D5EBB'}}>{`<i>`}</span> Ushbu matn italic bilan yozilgan<span style={{color: '#9D5EBB'}}>{`</i>`}</span></Text>
                    </Box>

                    <CopyToClipboard text='<i>Ushbu matn italic bilan yozilgan</i>' onCopy={handleClip}>
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

                <Text fontSize={'20px'}>HTML <span style={{color: 'red'}}>{`<em>`}</span>  elementi ta'kidlangan matnni belgilaydi. Ichkaridagi tarkib odatda kursiv bilan ko'rsatiladi.</Text>

                <Text fontSize={'20px'}>Maslahat: Ekran oʻquvchisi <span style={{color:'red'}}>{`<em>`}</span> dagi soʻzlarni ogʻzaki urgʻudan foydalanib, urgʻu bilan talaffuz qiladi.</Text>

                <Box  width={{base: '100%' , md: '80%'}}  height={'250px'} display={'flex'} gap={'20px'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'center'} pl={{base: '20px' , md: '100px'}} bg={'#233242'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} height={'90px'} display={'flex'} gap={'20px'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'center'}  overflow='scroll' bg={'#0A1624'} borderLeft={'4px'} borderColor={'#7FFFD4'}>
                        <Text fontSize={'25px'} color={'white'}> <span  style={{color: '#9D5EBB'}}>{`<em>`}</span> Ushbu matn emphasized<span style={{color: '#9D5EBB'}}>{`</em>`}</span></Text>
                    </Box>

                    <CopyToClipboard text='<em>Ushbu matn emphasized</em>' onCopy={handleClip}>
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> HTML <span style={{color: 'red'}}>{`<small>`}</span> Elementi</Heading>
                <Text fontSize={'25px'}> HTML <span style={{color: 'red'}}>{`<small>`}</span> elementi kichikroq matnni belgilaydi:</Text>

                <Box width={{base: '100%' , md: '80%'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} pl={{base: '20px', md: '100px'}} flexDirection={'column'} gap={'20px'} height={'250px'} bg={'#233242'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} height={'90px'} bg={'#0A1624'} display={'flex'} flexDirection={'column'} justifyContent={'center'} borderLeft={'4px'} borderColor={'#7FFFD4'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<small>`} <span style={{color: 'white'}}>Bu smaller matn</span> {`</small>`}</Text>
                    </Box>
                    <CopyToClipboard text='<small>Bu smaller matn</small>' onCopy={handleClip}>
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> HTML <span style={{color: 'red'}}>{`<mark>`}</span> Elementi</Heading>
                <Text fontSize={'25px'}> HTML  <span style={{color: 'red'}}>{` <mark> `}</span> elementi belgilanishi yoki ta'kidlanishi kerak bo'lgan matnni belgilaydi:</Text>

                <Box width={{base: '100%' , md: '80%'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} pl={{base: '20px', md: '100px'}} flexDirection={'column'} gap={'20px'} height={'250px'} bg={'#233242'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} height={'90px'} bg={'#0A1624'} display={'flex'} flexDirection={'column'} justifyContent={'center'} borderLeft={'4px'} borderColor={'#7FFFD4'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<p>`} <span style={{color: 'white'}}>Bugun</span> {`<mark>`}<span style={{color: 'white'}}>sut</span> {`</mark>`} {`</p>`}</Text>
                    </Box>
                    <CopyToClipboard text='<p>Bugun <mark>sut</mark> sotib olishni unutmang.</p>' onCopy={handleClip}>
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
            

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> HTML <span style={{color: 'red'}}>{`<del>`}</span> Elementi</Heading>
                <Text fontSize={'25px'}> HTML <span style={{color:' red'}}>{`<del>`}</span> elementi hujjatdan o'chirilgan matnni belgilaydi. Brauzerlar odatda o'chirilgan matn bo'ylab qatorni ko'rsatadi:</Text>

                <Box width={{base: '100%' , md: '80%'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} pl={{base: '20px', md: '100px'}} flexDirection={'column'} gap={'20px'} height={'250px'} bg={'#233242'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} height={'90px'} bg={'#0A1624'} display={'flex'} flexDirection={'column'} justifyContent={'center'} borderLeft={'4px'} borderColor={'#7FFFD4'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<p>`} <span style={{color: 'white'}}>Mening sevimli rangim</span> {`<del>`}<span style={{color: 'white'}}>ko'k</span> {`</del>`} <span style={{color: '#fff'}}>qizil.</span> {`</p>`}</Text>
                    </Box>
                    <CopyToClipboard text="<p>Mening sevimli rangim <del>ko'k</del> qizil.</p>" onCopy={handleClip}>
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
            

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> HTML <span style={{color: 'red'}}>{`<ins>`}</span> Elementi</Heading>
                <Text fontSize={'25px'}> HTML <span style={{color:' red'}}>{`<ins>`}</span> elementi hujjatga kiritilgan matnni belgilaydi. Brauzerlar odatda kiritilgan matnni tagiga chizadilar:</Text>

                <Box width={{base: '100%' , md: '80%'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} pl={{base: '20px', md: '100px'}} flexDirection={'column'} gap={'20px'} height={'250px'} bg={'#233242'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} height={'90px'} bg={'#0A1624'} display={'flex'} flexDirection={'column'} justifyContent={'center'} borderLeft={'4px'} borderColor={'#7FFFD4'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<p>`} <span style={{color: 'white'}}>Mening sevimli rangim</span> {`<del>`}<span style={{color: 'white'}}>ko'k</span> {`</del>`} {`<ins>`} <span style={{color: 'white'}}>qizil</span> {`</ins>.`} {`</p>`}</Text>
                    </Box>
                    <CopyToClipboard text="<p>Mening sevimli rangim <del>ko‘k</del> <ins>qizil</ins>.</p>" onCopy={handleClip}>
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
            

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> HTML <span style={{color: 'red'}}>{`<sub>`}</span> Elementi</Heading>
                <Text fontSize={'25px'} maxWidth={'1300px'}> HTML <span style={{color:' red'}}>{`<sub>`}</span>  elementi pastki chiziq matnini belgilaydi. Subscript matni oddiy satrdan yarim belgi ostida ko'rinadi va ba'zan kichikroq shriftda ko'rsatiladi. Pastki matn H O kabi kimyoviy formulalar uchun ishlatilishi mumkin:</Text>

                <Box width={{base: '100%' , md: '80%'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} pl={{base: '20px', md: '100px'}} flexDirection={'column'} gap={'20px'} height={'250px'} bg={'#233242'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} height={'90px'} bg={'#0A1624'} display={'flex'} flexDirection={'column'} justifyContent={'center'} borderLeft={'4px'} borderColor={'#7FFFD4'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<p>`} <span style={{color: 'white'}}>Bu</span> {`<sub>`} <span style={{color: 'white'}}> subscripted</span> {`</sub>`} <span style={{color: 'white'}}>matn.</span> {`</p>`}</Text>
                    </Box>
                    <CopyToClipboard text="<p>Bu <sub>subscripted</sub> matn.</p>" onCopy={handleClip}>
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
            

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> HTML <span style={{color: 'red'}}>{`<sup>`}</span> Elementi</Heading>
                <Text fontSize={'25px'} maxWidth={'1300px'}> HTML <span style={{color:' red'}}>{` <sup> `}</span> elementi yuqoridagi matnni belgilaydi. Yuqori skript matni oddiy satrdan yarim belgi yuqorida ko'rinadi va ba'zan kichikroq shriftda ko'rsatiladi. Yuqori skript matni WWW   kabi izohlar uchun ishlatilishi mumkin:</Text>

                <Box width={{base: '100%' , md: '80%'}} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} pl={{base: '20px', md: '100px'}} flexDirection={'column'} gap={'20px'} height={'250px'} bg={'#233242'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} height={'90px'} bg={'#0A1624'} display={'flex'} flexDirection={'column'} justifyContent={'center'} borderLeft={'4px'} borderColor={'#7FFFD4'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<p>`} <span style={{color: 'white'}}>Bu</span> {`<sup>`} <span style={{color: 'white'}}> subscripted</span> {`</sup>`} <span style={{color: 'white'}}>matn.</span> {`</p>`}</Text>
                    </Box>
                    <CopyToClipboard text="<p>Bu <sup>subscripted</sup> matn.</p>" onCopy={handleClip}>
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'80vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML matnni formatlash elementlari</Heading>
                <Text fontSize={'20px'}> MOdevco teg ma'lumotnomasida HTML elementlari va ularning atributlari haqida qo'shimcha ma'lumotlar mavjud.</Text>
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
                                <Td>{`<b> `}</Td>
                                <Td>Qalin matnni belgilaydi</Td>
                            </Tr>
                            <Tr bg={'#233242'}>
                                <Td>{`<em>  `}</Td>
                                <Td>Ta'kidlangan matnni belgilaydi</Td>
                            </Tr>
                            <Tr>
                                <Td>{`<i> `}</Td>
                                <Td>Muqobil ovoz yoki kayfiyatdagi matn qismini belgilaydi</Td>
                            </Tr>
                            <Tr bg={'#233242'}>
                                <Td>{`<small>`}</Td>
                                <Td>Kichikroq matnni belgilaydi</Td>
                            </Tr>
                            <Tr>
                                <Td>{`<strong>`}</Td>
                                <Td>Muhim matnni belgilaydii</Td>
                            </Tr>
                            <Tr bg={'#233242'}>
                                <Td>{`<sub>`}</Td>
                                <Td>Yozilgan matnni belgilaydi</Td>
                            </Tr>
                            <Tr>
                                <Td>{`<sup>`}</Td>
                                <Td>Yuqori chiziqli matnni belgilaydi</Td>
                            </Tr>
                            <Tr bg={'#233242'}>
                                <Td>{`<ins>`}</Td>
                                <Td>Kiritilgan matnni belgilaydi</Td>
                            </Tr>
                            <Tr>
                                <Td>{`<del>`}</Td>
                                <Td>O'chirilgan matnni belgilaydi</Td>
                            </Tr>
                            <Tr bg={'#233242'}>
                                <Td>{`<mark>`}</Td>
                                <Td>Belgilangan/ta'kidlangan matnni belgilayd</Td>
                            </Tr>
                        </Tbody>
                        
                    </Table>
                </TableContainer>
               
            </Box> 
            
        </Box>
    </Box>
  )
}

export default Html5dars