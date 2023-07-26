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

const Html12dars = () => {
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
                    <Sidebar title={'HTML DARSLARI'} elementName={'Bosh sahifa'} html1={'/html1dars'} html2={'/html2dars'} html3={'/html3dars'} html4={'/html4dars'}  html5={'/html5dars'}  html6={'/html6dars'}  html7={'/html7dars'}  html8={'/html8dars'}  html9={'/html9dars'}  html10={'/html10dars'} html11={'/html11dars'} html12={'/html12dars'} html13={'/html13dars'}    lesson1={'1-Mavzu: Html O’rnatish'} lesson2={'2-Mavzu: Html Asosiy Misollar'} lesson3={'3-Mavzu: Html Hedinglar'} lesson4={'4-Mavzu: Html Paragraphlar'} lesson5={'1-Mavzu: HTML Formatlash'} lesson6={'2-Mavzu: Html Komentariya'} lesson7={'3-Mavzu: Html Link'} lesson8={'1-Mavzu: Html Image'} lesson9={'2-Mavzu: Html Favicon va Tittle'} lesson10={'3-Mavzu: Html Table'} lesson11={'1-Mavzu: Html Listlar'} lesson12={'2-Mavzu: Html Block va Inline'} lesson13={'3-Mavzu: Html Emojilar '} lesson14={'1-Mavzu: Html Formalar'}  lesson15={'2-Mavzu: Html Form Attributlari'} lesson16={'3-Mavzu: Html Form Elemtlari'} lesson17={'1-Mavzu: Html Input turlari'} lesson18={'2-Mavzu: Html Input Attributlari'} lesson19={'3-Mavzu: Html Input va Formla'} lesson20={'1-Mavzu: Html Medialar'} lesson21={'2-Mavzu: Html Video'} lesson22={'3-Mavzu: Html Audio '} lesson23={'4-Mavzu: Html YouTube '} amalyot1={'1-Mavzu: Amaliyot'} amalyot2={'2-Mavzu: Amaliyot'} />
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
                            <AccordionItenm html1={'/html1dars'} html2={'/html2dars'} html3={'/html3dars'} html4={'/html4dars'}  html5={'/html5dars'}  html6={'/html6dars'}  html7={'/html7dars'}  html8={'/html8dars'}  html9={'/html9dars'}  html10={'/html10dars'} html11={'/html11dars'} html12={'/html12dars'} html13={'/html13dars'}    lesson1={'1-Mavzu: Html O’rnatish'} lesson2={'2-Mavzu: Html Asosiy Misollar'} lesson3={'3-Mavzu: Html Hedinglar'} lesson4={'4-Mavzu: Html Paragraphlar'} lesson5={'1-Mavzu: HTML Formatlash'} lesson6={'2-Mavzu: Html Komentariya'} lesson7={'3-Mavzu: Html Link'} lesson8={'1-Mavzu: Html Image'} lesson9={'2-Mavzu: Html Favicon va Tittle'} lesson10={'3-Mavzu: Html Table'} lesson11={'1-Mavzu: Html Listlar'} lesson12={'2-Mavzu: Html Block va Inline'} lesson13={'3-Mavzu: Html Emojilar '} lesson14={'1-Mavzu: Html Formalar'}  lesson15={'2-Mavzu: Html Form Attributlari'} lesson16={'3-Mavzu: Html Form Elemtlari'} lesson17={'1-Mavzu: Html Input turlari'} lesson18={'2-Mavzu: Html Input Attributlari'} lesson19={'3-Mavzu: Html Input va Formla'} lesson20={'1-Mavzu: Html Medialar'} lesson21={'2-Mavzu: Html Video'} lesson22={'3-Mavzu: Html Audio '} lesson23={'4-Mavzu: Html YouTube '} amalyot1={'1-Mavzu: Amaliyot'} amalyot2={'2-Mavzu: Amaliyot'}  />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Bloki va Inline Elementlari</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '20vh' , md: '15vh'}} display={'flex'}  flexDirection={'column'} alignItems={'flex-start'} justifyContent={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={{base: '20px' , xl: '25px'}}>Har bir HTML elementi qaysi element turiga qarab standart ko'rsatish qiymatiga ega.</Text>
                <Text fontSize={{base: '20px' , xl: '25px'}}>Ikkita displey qiymati mavjud: blok va inline.</Text>
            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Blok darajasidagi elementlar</Heading>
                <Text fontSize={{base: '20px' , xl: '25px'}}> Blok darajasidagi element har doim yangi satrdan boshlanadi va brauzerlar avtomatik ravishda elementdan oldin va keyin biroz bo'sh joy (chekka) qo'shadi.</Text>
                <Text fontSize={{base: '20px' , xl: '25px'}}> Blok darajasidagi element har doim mavjud bo'lgan to'liq kenglikni egallaydi (iloji boricha chapga va o'ngga cho'ziladi).</Text>
                <Text fontSize={{base: '20px' , xl: '25px'}}>Ikkita keng tarqalgan blok elementlari: <span style={{color: 'red'}}>{`<p>`}</span> va <span style={{color: 'red'}}>{`<div>`}</span>.</Text>
                <Text fontSize={{base: '20px' , xl: '25px'}}> <span style={{color: 'red'}}>{`<p>`}</span>elementi HTML hujjatidagi paragrafni belgilaydi</Text>
                <Text fontSize={{base: '20px' , xl: '25px'}}> <span style={{color: 'red'}}>{`<div>`}</span>elementi HTML hujjatidagi bo'lim yoki bo'limni belgilaydi.</Text>


                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'284px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'}  gap={'30px'} borderLeft={'4px'} display={'flex'} pr={"50px"}  alignItems={'flex-start'}  flexDirection={'column'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={{base: '20px' , xl: '25px'}}>{`<p>`} <span style={{color :'white'}}> Salom dunyo </span> {`</p>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={{base: '20px' , xl: '25px'}}>{`<div>`} <span style={{color :'white'}}> Salom dunyo </span>{`</div>`}</Text>
                    </Box>
                    <CopyToClipboard text=" <p>Salom dunyo</p><div>Salom dunyo</div>" onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text  fontSize={{base: '20px' , xl: '25px'}}>HTML-da blok darajasidagi elementlar:</Text>
                
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} pl={'20px'}  gap={'30px'} borderLeft={'4px'} display={'flex'} pr={"50px"}  alignItems={'flex-start'}  flexDirection={'column'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'170px'} bg={'#0A1624'}>

                        <Box width={'100%'} display={'flex'} gap={'20px'} alignItems={'center'} justifyContent={'space-between'}>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<adrdess>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<article>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<aside>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<blockquote>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<canvas>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<dd>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<div>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<dl>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<dt>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<fieldset>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<figvaption>`}</Text>
                        </Box>

                        <Box width={'100%'} display={'flex'} gap={'20px'} alignItems={'center'} justifyContent={'space-between'}>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<figure>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<footer>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<form>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<h1-h6>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<header>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<hr>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<li>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<main>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<nav>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<noscript>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<ol>`}</Text>
                        </Box>

                        <Box width={'100%'} display={'flex'}  alignItems={'center'} justifyContent={'space-between'}>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<p>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<pre>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<section>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<table>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<tfoot>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<video>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<ul>`}</Text>
                        </Box>


                    </Box>
                </Box>

            </Box>
            <Divider mt={'100px'} />




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Inline elementlar</Heading>
                <Text fontSize={{base: '20px' , xl: '25px'}}> Inline element yangi satrdan boshlanmaydi.</Text>
                <Text fontSize={{base: '20px' , xl: '25px'}}> IInline element faqat kerakli darajada kenglikni egallaydi.</Text>
                <Text fontSize={{base: '20px' , xl: '25px'}}> Bu paragraf ichidagi <span style={{color: 'red'}}>{`<span>`}</span> elementidir.</Text>


                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'284px'} rounded={'20px'}>
                    <Heading>Misol</Heading>


                    <Box width={'90%'}  gap={'30px'} borderLeft={'4px'} display={'flex'} pr={"50px"}  alignItems={'flex-start'}  flexDirection={'column'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'80px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={{base: '20px' , xl: '25px'}}>{`<span>`} <span style={{color :'white'}}> Salom dunyo </span>{`</span>`}</Text>
                    </Box>
                        <CopyToClipboard text=" <p>Salom dunyo</p><div>Salom dunyo</div>" onCopy={handleClip} >
                            <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                        </CopyToClipboard>
                    </Box>
                    <Text  fontSize={{base: '20px' , xl: '25px'}}>Bu erda HTML-dagi inline elementlar</Text>


                
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} pl={'20px'}  gap={'30px'} borderLeft={'4px'} display={'flex'} pr={"50px"}  alignItems={'flex-start'}  flexDirection={'column'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'170px'} bg={'#0A1624'}>

                        <Box width={'100%'} display={'flex'} gap={'20px'} alignItems={'center'} justifyContent={'space-between'}>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<a>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<abbr>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<acronum>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<b>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<bdo>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<big>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<br>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<button>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<cite>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<code>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<bfn>`}</Text>
                        </Box>

                        <Box width={'100%'} display={'flex'} gap={'20px'} alignItems={'center'} justifyContent={'space-between'}>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<em>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<i>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<img>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<input>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<kbd>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<lable>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<map>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<object>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<output>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<q>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<samp>`}</Text>
                        </Box>

                        <Box width={'100%'} display={'flex'} gap={'20px'} alignItems={'center'} justifyContent={'space-between'}>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<script>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<select>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<small>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<span>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<strong>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<sub>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<textarea>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<time>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<tt>`}</Text>
                            <Text color={'#9D5EBB'} fontSize={{base: '10px' , xl: '15px'}}>{`<var>`}</Text>
                        </Box>


                    </Box>
                </Box>

            </Box>
            <Divider mt={'100px'} />

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'20vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Bo'lim Xulosasi  </Heading>
                <UnorderedList fontSize={'20px'}>
                    <ListItem>Ikkita displey qiymati mavjud: blok va inline</ListItem>
                    <ListItem>CBlok darajasidagi element har doim yangi satrdan boshlanadi va mavjud bo'lgan to'liq kenglikni egallaydi</ListItem>
                    <ListItem>Inline element yangi satrda boshlanmaydi va u faqat kerak bo'lganda shuncha kenglikni egallaydi</ListItem>
                    <ListItem> <span style={{color: 'red'}}>{`<div>`}</span> elementi blok darajasida bo'lib, ko'pincha boshqa HTML elementlari uchun konteyner sifatida ishlatiladi</ListItem>
                    <ListItem><span style={{color: 'red'}}>{`<span> `}</span> elementi matnning bir qismini yoki hujjatning bir qismini belgilash uchun ishlatiladigan ichki konteynerdir</ListItem>
                </UnorderedList>
            </Box>


            <Divider mt={'100px'} />

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'40vh'}>
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
                                <Td>{`<div>`}</Td>
                                <Td>Hujjatdagi bo'limni belgilaydi (blok darajasida)</Td>
                            </Tr>
                            <Tr bg={'#233242'}>
                                <Td>{`<span>`}</Td>
                                <Td>Hujjatdagi bo'limni belgilaydi (inline)</Td>
                            </Tr>
                        </Tbody>
                        
                    </Table>
                </TableContainer>
               
            </Box>

           
            
        </Box>
    </Box>
  )
}

export default Html12dars