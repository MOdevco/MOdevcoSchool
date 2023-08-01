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
import { favicon } from '../assets'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'
const Html10dars = () => {
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
                    <Sidebar title={'HTML DARSLARI'} elementName={'Bosh sahifa'}   />
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
                            <AccordionItenm  />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Tables</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '20vh' , md: '15vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'25px'}>HTML jadvallari veb-ishlab chiquvchilarga ma'lumotlarni qatorlar va ustunlarga ajratish <br /> imkonini beradi.</Text>
            </Box>
            <Divider mt={'20px'} />
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'80vh'}>

                <Box width={{base: '100%' , md: '85%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'650px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'490px'} bg={'#0A1624'} fontSize={'25px'}>

                        <Box pl={{base: '20px' , md: '40px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'10px'} minHeight={'30vh'}>
                            <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} >
                                <TableContainer>
                                    <Table border={'1px'} fontSize={'15px'} variant='simple' width={'95%'}>
                                        
                                        <Thead>
                                            <Tr  fontWeight={'bold'} bg={'#233242'} >
                                                <Td border={'1px'}>Kompaniya</Td>
                                                <Td border={'1px'}>Aloqa</Td>
                                                <Td border={'1px'}>Mamlakat</Td>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr  fontWeight={'bold'}>
                                                <Td border={'1px'}>Alfreds Futterkiste</Td>
                                                <Td border={'1px'}>Maria Anders</Td>
                                                <Td border={'1px'}>Germany</Td>
                                            </Tr>
                                            <Tr  fontWeight={'bold'}>
                                                <Td border={'1px'}>Centro comercial Moctezuma</Td>
                                                <Td border={'1px'}>Francisco Chang</Td>
                                                <Td border={'1px'}>Mexico</Td>
                                            </Tr>
                                            <Tr  fontWeight={'bold'}>
                                                <Td border={'1px'}>Ernst Handel</Td>
                                                <Td border={'1px'}>Roland Mendel</Td>
                                                <Td border={'1px'}>Austria</Td>
                                            </Tr>
                                            <Tr  fontWeight={'bold'}>
                                                <Td border={'1px'}>Island Trading</Td>
                                                <Td border={'1px'}>Helen Bennett</Td>
                                                <Td border={'1px'}>UK</Td>
                                            </Tr>
                                            <Tr  fontWeight={'bold'}>
                                                <Td border={'1px'}>Laughing Bacchus Winecellars</Td>
                                                <Td border={'1px'}>Yoshi Tannamuri</Td>
                                                <Td border={'1px'}>Canada</Td>
                                            </Tr>
                                            <Tr  fontWeight={'bold'}>
                                                <Td border={'1px'}>Magazzini Alimentari Riuniti</Td>
                                                <Td border={'1px'}>Giovanni Rovelli</Td>
                                                <Td border={'1px'}>Italy</Td>
                                            </Tr>
                                        </Tbody>
                                        
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML jadvalini aniqlang</Heading>
                <Text fontSize={'25px'}>HTML tilidagi jadval qatorlar va ustunlar ichidagi jadval kataklaridan iborat.</Text>
                <Box width={{base: '100%' , md: '85%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'1150px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'990px'} bg={'#0A1624'} >

                        <Box  pl={{base: '20px' , md: '0px'}} display={'flex'} flexDirection={'column'}  >
                            <Box  display={'flex'} flexDirection={'column'} gap={'20px'}  >
                                <Text  fontSize={'25px'} color={'#9D5EBB'}>{`<table>`}</Text>
                                <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<tr> `}</Text>
                                <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<th> `} <span style={{color: 'white'}}>Company</span>  {`</th> `}</Text>
                                <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<th> `} <span style={{color: 'white'}}>Company</span>  {`</th> `}</Text>
                                <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<th> `} <span style={{color: 'white'}}>Company</span>  {`</th> `}</Text>
                                <Text pl={'20px'}  fontSize={'25px'} color={'#9D5EBB'}>{`</tr> `}</Text>
                                <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<tr> `}</Text>
                                <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>Alfreds Futterkiste</span>  {`</td> `}</Text>
                                <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>Maria Anders</span>  {`</td> `}</Text>
                                <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>Germany</span>  {`</td> `}</Text>
                                <Text pl={'20px'}  fontSize={'25px'} color={'#9D5EBB'}>{`</tr> `}</Text>
                                <Text pl={'20px'}  fontSize={'25px'} color={'#9D5EBB'}>{`</tr> `}</Text>
                                <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>Centro comercial Moctezuma</span>  {`</td> `}</Text>
                                <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>Francisco Chang</span>  {`</td> `}</Text>
                                <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>Mexico</span>  {`</td> `}</Text>
                                <Text pl={'20px'}  fontSize={'25px'} color={'#9D5EBB'}>{`</tr> `}</Text>
                                <Text  fontSize={'25px'} color={'#9D5EBB'}>{`<table>`}</Text>
                            </Box>
                        </Box>
                    </Box>
                    <CopyToClipboard text={`<table><tr><th>Company</th><th>Contact</th><th>Country</th></tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td> </tr><tr><td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td></tr></table>`} onCopy={handleClip} >
                            <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'80vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Table Cell lari</Heading>
                <Text fontSize={'25px'}>Har bir jadval katakchasi <span style={{color: 'red'}}>{`<td>`}</span> va <span style={{color: 'red'}}>{`</td>`}</span> teglari bilan belgilanadi.</Text>
                <Text fontSize={'25px'}><span style={{color: 'red'}}>td </span>jadval ma'lumotlarini anglatadi.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'450px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'} fontSize={'25px'}>
                            <Text  fontSize={'25px'} color={'#9D5EBB'}>{`<table>`}</Text>
                            <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<tr> `}</Text>
                            <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>Emil</span>  {`</td> `}</Text>
                            <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>Tobias</span>  {`</td> `}</Text>
                            <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>Linus</span>  {`</td> `}</Text>
                            <Text pl={'20px'}  fontSize={'25px'} color={'#9D5EBB'}>{`</tr> `}</Text>
                            <Text  fontSize={'25px'} color={'#9D5EBB'}>{`<table>`}</Text>
                    </Box>

                    <CopyToClipboard text={` <table><tr><td>Emil</td><td>Tobias</td><td>Linus</td></tr></table>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

                <Text fontSize={'25px'}>Jadvalda siz xohlagancha ko'p qatorga ega bo'lishingiz mumkin; faqat hujayralar soni har bir satrda bir xil ekanligiga ishonch hosil qiling.</Text>
                <Text fontSize={'25px'}>Eslatma: Ba'zida qatorda boshqasiga qaraganda kamroq yoki ko'proq hujayralar bo'lishi mumkin. Bu haqda keyingi bobda bilib olasiz.</Text>
            </Box>
            <Divider mt={'20px'} />

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Table Row lari</Heading>
                <Text fontSize={'25px'}>Har bir jadval qatori <span style={{color: 'red'}}>{`<tr>`}</span> bilan boshlanadi va <span style={{color: 'red'}}>{`</tr>`}</span> tegi bilan tugaydi.</Text>
                <Text fontSize={'25px'}><span style={{color: 'red'}}>tr</span> jadval qatorini bildiradi.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'750px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'550px'} bg={'#0A1624'} fontSize={'25px'}>
                            <Text  fontSize={'25px'} color={'#9D5EBB'}>{`<table>`}</Text>
                            <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<tr> `}</Text>
                            <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>Emil</span>  {`</td> `}</Text>
                            <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>Tobias</span>  {`</td> `}</Text>
                            <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>Linus</span>  {`</td> `}</Text>
                            <Text pl={'20px'}  fontSize={'25px'} color={'#9D5EBB'}>{`</tr> `}</Text>
                            <Text pl={'20px'}  fontSize={'25px'} color={'#9D5EBB'}>{`</tr> `}</Text>
                            <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>16</span>  {`</td> `}</Text>
                            <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>14</span>  {`</td> `}</Text>
                            <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>10</span>  {`</td> `}</Text>
                            <Text pl={'20px'}  fontSize={'25px'} color={'#9D5EBB'}>{`</tr> `}</Text>
                            <Text  fontSize={'25px'} color={'#9D5EBB'}>{`<table>`}</Text>
                    </Box>

                    <CopyToClipboard text={` <table><tr><td>Emil</td><td>Tobias</td><td>Linus</td></tr><tr><td>16</td><td>14</td><td>10</td></tr></table>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

                <Text fontSize={'25px'}>Jadvalda siz xohlagancha ko'p qatorga ega bo'lishingiz mumkin; faqat hujayralar soni har bir satrda bir xil ekanligiga ishonch hosil qiling.</Text>
                <Text fontSize={'25px'}>Eslatma: Ba'zida qatorda boshqasiga qaraganda kamroq yoki ko'proq hujayralar bo'lishi mumkin. Bu haqda keyingi bobda bilib olasiz.</Text>
            </Box>
            <Divider mt={'20px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Table Header lari</Heading>
                <Text fontSize={'25px'}>Ba'zan siz hujayralaringiz jadval sarlavhasi hujayralari bo'lishini xohlaysiz. Bunday hollarda <span style={{color: 'red'}}>{`<td> `}</span> tegi o'rniga <span style={{color: 'red'}}>{`<th> `}</span>      tegidan foydalaning:</Text>
                <Box width={{base: '100%' , md: '85%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'1150px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'990px'} bg={'#0A1624'} >

                        <Box  pl={{base: '20px' , md: '0px'}} display={'flex'} flexDirection={'column'}  >
                            <Box  display={'flex'} flexDirection={'column'} gap={'20px'}  >
                                <Text  fontSize={'25px'} color={'#9D5EBB'}>{`<table>`}</Text>
                                <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<tr> `}</Text>
                                <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<th> `} <span style={{color: 'white'}}>Person 1</span>  {`</th> `}</Text>
                                <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<th> `} <span style={{color: 'white'}}>Person 2</span>  {`</th> `}</Text>
                                <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<th> `} <span style={{color: 'white'}}>Person 3</span>  {`</th> `}</Text>
                                <Text pl={'20px'}  fontSize={'25px'} color={'#9D5EBB'}>{`</tr> `}</Text>
                                <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<tr> `}</Text>
                                <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>Emil</span>  {`</td> `}</Text>
                                <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>Tobias</span>  {`</td> `}</Text>
                                <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>Linus</span>  {`</td> `}</Text>
                                <Text pl={'20px'}  fontSize={'25px'} color={'#9D5EBB'}>{`</tr> `}</Text>
                                <Text pl={'20px'}  fontSize={'25px'} color={'#9D5EBB'}>{`</tr> `}</Text>
                                <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>16</span>  {`</td> `}</Text>
                                <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>14</span>  {`</td> `}</Text>
                                <Text fontSize={'25px'} pl={'40px'} color={'#9D5EBB'}>{`<td> `} <span style={{color: 'white'}}>10</span>  {`</td> `}</Text>
                                <Text pl={'20px'}  fontSize={'25px'} color={'#9D5EBB'}>{`</tr> `}</Text>
                                <Text  fontSize={'25px'} color={'#9D5EBB'}>{`<table>`}</Text>
                            </Box>
                        </Box>
                    </Box>
                    <CopyToClipboard text={`<table><tr><th>Person 1</th><th>Person 2</th><th>Person 3</th></tr><tr><td>Emil</td><td>Tobias</td><td>Linus</td></tr><tr><td>16</td><td>14</td><td>10</td></tr></table>`} onCopy={handleClip} >
                            <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                    
                </Box>
                <Text fontSize={'25px'}>Odatiy bo'lib, <span style={{color: 'red'}}>{`<th>`}</span> elementlardagi matn qalin va markazlashtirilgan, ammo siz buni CSS yordamida o'zgartirishingiz mumkin.</Text>
            </Box>
            <Divider mt={'20px'} />

            

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'90vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Table Taglari</Heading>
                <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} >
                    <TableContainer>
                        <Table border={'1px'} variant='simple' width={'90%'}>
                            
                            <Thead>
                                <Tr fontWeight={'bold'} bg={'#233242'} >
                                    <Td>Tag</Td>
                                    <Td>Description</Td>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr fontWeight={'bold'}>
                                    <Td><span>{`<table> `}</span></Td>
                                    <Td>Jadvalni belgilaydi</Td>
                                 
                                </Tr>
                                <Tr fontWeight={'bold'} bg={'#233242'}>
                                    <Td><span>{`<th> `}</span></Td>
                                    <Td>Jadvaldagi sarlavha katakchasini belgilaydi</Td>
                                </Tr>
                                <Tr fontWeight={'bold'}>
                                    <Td><span>{`<tr> `}</span> </Td>
                                    <Td>Jadvaldagi qatorni belgilaydi</Td>
                                    </Tr>

                                <Tr fontWeight={'bold'} bg={'#233242'}> 
                                    <Td><span>{`<td>`}</span> </Td>
                                    <Td>Jadvaldagi katakchani belgilaydi</Td>

                                </Tr>
                                <Tr fontWeight={'bold'}>
                                    <Td><span>{`<caption> `}</span> </Td>
                                    <Td>Jadval sarlavhasini belgilaydi</Td>
                                </Tr>
                                <Tr fontWeight={'bold'}  bg={'#233242'}>
                                    <Td><span>{`<colgroup> `}</span> </Td>
                                    <Td>Formatlash uchun jadvaldagi bir yoki bir nechta ustunlar guruhini belgilaydi</Td>
                                </Tr>
                                <Tr fontWeight={'bold'}>
                                    <Td><span>{`<col> `}</span> </Td>
                                    <Td>elementidagi har bir ustun uchun ustun xususiyatlarini belgilaydi</Td>
                                </Tr>
                                <Tr fontWeight={'bold'}  bg={'#233242'}>
                                    <Td><span>{`<thead> `}</span> </Td>
                                    <Td>Sarlavha tarkibini jadvalda guruhlarga ajratadi</Td>
                                </Tr>
                                <Tr fontWeight={'bold'}>
                                    <Td><span>{`<tbody> `}</span> </Td>
                                    <Td>Jadvaldagi asosiy tarkibni guruhlarga ajratadi</Td>
                                </Tr>
                                <Tr fontWeight={'bold'}  bg={'#233242'}>
                                    <Td><span>{`<tfoot> `}</span> </Td>
                                    <Td>Jadvaldagi altbilgi tarkibini guruhlaydi</Td>
                                </Tr>
                            </Tbody>
                            
                        </Table>
                    </TableContainer>
                </Box>

            </Box>
            <Divider mt={'20px'} />


             {/* <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'20vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Bo'lim xulosasi</Heading>
                <UnorderedList>
                    <ListItem>
                        <Text fontSize={'25px'}>Favi kiritish uchun HTML <span style={{color: 'red'}}>{`<link>`}</span> elementidan foydalaning</Text>
                    </ListItem>
                </UnorderedList>
            </Box>
            <Divider mt={'20px'} /> */}

        

            


        </Box>
    </Box>
  )
}

export default Html10dars