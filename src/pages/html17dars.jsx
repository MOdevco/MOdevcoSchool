import { Box , Flex , Heading , Button , Text , Image , Input , FormLabel, HStack, Radio, RadioGroup, FormControl} from '@chakra-ui/react'
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
    Textarea
  } from '@chakra-ui/react'
  import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import Click from '../components/click/click'

const Html17dars = () => {
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

    // useEffect(() => {
    //     window.scroll(0,0)
    //   }, [])
  return (
    <Box pt={'300px'} width={'100%'} bg={'#1A202C'} height={'100%'}>
        <Box >
            <Flex >
                {onOpen && <Box>
                    <Sidebar title={'HTML DARSLARI'} elementName={'Bosh sahifa'}html1={'/html1dars'} html2={'/html2dars'} html3={'/html3dars'} html4={'/html4dars'}  html5={'/html5dars'}  html6={'/html6dars'}  html7={'/html7dars'}  html8={'/html8dars'}  html9={'/html9dars'}  html10={'/html10dars'} html11={'/html11dars'} html12={'/html12dars'} html13={'/html13dars'}    lesson1={'1-Mavzu: Html O’rnatish'} lesson2={'2-Mavzu: Html Asosiy Misollar'} lesson3={'3-Mavzu: Html Hedinglar'} lesson4={'4-Mavzu: Html Paragraphlar'} lesson5={'1-Mavzu: HTML Formatlash'} lesson6={'2-Mavzu: Html Komentariya'} lesson7={'3-Mavzu: Html Link'} lesson8={'1-Mavzu: Html Image'} lesson9={'2-Mavzu: Html Favicon va Tittle'} lesson10={'3-Mavzu: Html Table'} lesson11={'1-Mavzu: Html Listlar'} lesson12={'2-Mavzu: Html Block va Inline'} lesson13={'3-Mavzu: Html Emojilar '} lesson14={'1-Mavzu: Html Formalar'}  lesson15={'2-Mavzu: Html Form Attributlari'} lesson16={'3-Mavzu: Html Form Elemtlari'} lesson17={'1-Mavzu: Html Input turlari'} lesson18={'2-Mavzu: Html Input Attributlari'} lesson19={'3-Mavzu: Html Input va Formla'} lesson20={'1-Mavzu: Html Medialar'} lesson21={'2-Mavzu: Html Video'} lesson22={'3-Mavzu: Html Audio '} lesson23={'4-Mavzu: Html YouTube '} amalyot1={'1-Mavzu: Amaliyot'} amalyot2={'2-Mavzu: Amaliyot'}  />
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Input Turlari</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '20vh' , md: '15vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>Ushbu bobda HTML <span className='red'> {`<input> `}</span> elementining har xil turlari tasvirlangan.</Text>
            </Box>
            <Divider mt={'20px'} />
           
        


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'55vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Input Turlari</Heading>
                <Text fontSize={'25px'}>HTMLda foydalanishingiz mumkin bo'lgan turli xil kiritish turlari:</Text>
                <UnorderedList  fontSize={'20px'}>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"button"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"checkbox"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"color"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"date"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"datetime-local"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"email"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"file"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"hidden"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"image"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"month"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"number"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"password"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"radio"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"range"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"reset"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"search"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"submit"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"tel"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"time"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"url"</span> </ListItem>
                    <ListItem color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"week"</span> </ListItem>
                </UnorderedList>
                <Text fontSize={'25px'}>Maslahat: type atributining standart qiymati <span className='red'>"matn"</span> dir.</Text>


            </Box>
            <Divider mt={'20px'} />





            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Text</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<label>`}</span> elementi bir nechta format uchun tegni tekshirish.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'430px'} rounded={'20px'}>
                    <Heading>Misol</Heading>

                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'250px'} bg={'#0A1624'}>
                        <Text  color={'#9D5EBB'} fontSize={'25px'}>{`<form>`} </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<label `} <span className='red'>for=</span> <span className='yellow'>"fname"</span>{'>'} <span className='white'>First name:</span> {`</label >`} {`<br>  `}  </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>"id="</span> <span className='yellow'>"fname"</span> <span className='red'>name=</span> <span className='yellow'>"fname"</span> {'>'} {`</input >`} {`<br>  `}  </Text>

                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<label `} <span className='red'>for=</span> <span className='yellow'>"fname"</span>{'>'} <span className='white'>Last name:</span> {`</label >`} {`<br>  `}  </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>"id="</span> <span className='yellow'>"fname"</span> <span className='red'>name=</span> <span className='yellow'>"fname"</span> {'>'} {`</input >`} {`<br>  `}  </Text>
                        <Text  color={'#9D5EBB'} fontSize={'25px'}>{`</form>`} </Text>

                        
                    </Box>
                    <CopyToClipboard text={`<form><label for= "fname"> First name: </label > <br><input type= "text" "id=" "fname" name= "fname" > </input > <br><label for="fname"> Last name: </label > <br><input type= "text" "id=" "fname" name= "fname" > </input > <br></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'25px'}> Yuqoridagi HTML kodi brauzerda shunday ko'rsatiladi:</Text>

                <FormControl fontSize={'30px'}>
                    <FormLabel>First name</FormLabel>
                    <Input bg={'white'} width={{base: '100%' , xl: '20%'}} type={'text'}></Input>
                    <FormLabel>Last name</FormLabel>
                    <Input bg={'white'} width={{base: '100%' , xl: '20%'}} type={'text'}></Input>
                </FormControl>

            </Box>
            <Divider mt={'20px'} />




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Password</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<input type="password">`}</span>  parol maydonini belgilaydi</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'430px'} rounded={'20px'}>
                    <Heading>Misol</Heading>

                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'250px'} bg={'#0A1624'}>
                        <Text  color={'#9D5EBB'} fontSize={'25px'}>{`<form>`} </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<label `} <span className='red'>for=</span> <span className='yellow'>"fname"</span>{'>'} <span className='white'>First name:</span> {`</label >`} {`<br>  `}  </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>"id="</span> <span className='yellow'>"fname"</span> <span className='red'>name=</span> <span className='yellow'>"fname"</span> {'>'} {`</input >`} {`<br>  `}  </Text>

                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<label `} <span className='red'>for=</span> <span className='yellow'>"pwd"</span>{'>'} <span className='white'>Password:</span> {`</label >`} {`<br>  `}  </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"password"</span> <span className='red'>"id="</span> <span className='yellow'>"pwd"</span> <span className='red'>name=</span> <span className='yellow'>"pwd"</span> {'>'} {`</input >`} {`<br>  `}  </Text>
                        <Text  color={'#9D5EBB'} fontSize={'25px'}>{`</form>`} </Text>

                        
                    </Box>
                    <CopyToClipboard text={`<form><label for="username">Username:</label><br><input type="text" id="username" name="username"><br><label for="pwd">Password:</abel><br><input type="password" id="pwd" name="pwd"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'25px'}> Yuqoridagi HTML kodi brauzerda shunday ko'rsatiladi:</Text>

                <FormControl fontSize={'30px'}>
                    <FormLabel>First name</FormLabel>
                    <Input bg={'white'} width={{base: '100%' , xl: '20%'}} type={'text'}></Input>
                    <FormLabel>Password:</FormLabel>
                    <Input bg={'white'} width={{base: '100%' , xl: '20%'}} type={'password'}></Input>
                </FormControl>
                <Text fontSize={'25px'}> Parol maydonidagi belgilar niqoblangan (yulduzcha yoki doira shaklida ko'rsatilgan).</Text>


            </Box>
            <Divider mt={'20px'} />




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Submit</Heading>
                <Text fontSize={'25px'}> <span className='red'>{` <input type="submit">`}</span> forma ma'lumotlarini forma ishlov beruvchisiga yuborish tugmachasini belgilaydi.</Text>
                <Text fontSize={'25px'}> Shakl ishlov beruvchisi odatda kiritilgan ma'lumotlarni qayta ishlash uchun skriptga ega bo'lgan server sahifasidir.</Text>
                <Text fontSize={'25px'}> Shakl ishlovchisi shaklning harakat atributida ko'rsatilgan:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'500px'} rounded={'20px'}>
                    <Heading>Misol</Heading>

                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'}>
                        <Text  color={'#9D5EBB'} fontSize={'25px'}>{`<form>`} </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<label `} <span className='red'>for=</span> <span className='yellow'>"fname"</span>{'>'} <span className='white'>First name:</span> {`</label >`} {`<br>  `}  </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>"id="</span> <span className='yellow'>"fname"</span> <span className='red'>name=</span> <span className='yellow'>"fname"</span> {'>'} {`</input >`} {`<br>  `}  </Text>

                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<label `} <span className='red'>for=</span> <span className='yellow'>"pwd"</span>{'>'} <span className='white'>Password:</span> {`</label >`} {`<br>  `}  </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"password"</span> <span className='red'>"id="</span> <span className='yellow'>"pwd"</span> <span className='red'>name=</span> <span className='yellow'>"pwd"</span> {'>'} {`</input >`} {`<br>  `}  </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"submit"</span> <span className='red'>"value"</span> <span className='yellow'>"Submit"</span>  {'>'} {`</input >`} {`<br>  `}  </Text>

                        <Text  color={'#9D5EBB'} fontSize={'25px'}>{`</form>`} </Text>

                        
                    </Box>
                    <CopyToClipboard text={`<form action="/action_page.php"><label for="fname">First name:</label><br><input type="text" id="fname" name="fname"value="John"><br><label for="lname">Last name:</label><br><input type="text" id="lname" name="lname" value="Doe"><br><br> <input type="submit" value="Submit"></form><form action="/action_page.php"><label for="fname">First name:</label><br><input type="text" id="fname" name="fname" value="John"><br> <label for="lname">Last name:</label><br><input type="text" id="lname" name="lname" value="Doe"><br><br> <input type="submit" value="Submit">   </form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'25px'}> Yuqoridagi HTML kodi brauzerda shunday ko'rsatiladi:</Text>

                <FormControl fontSize={'30px'}>
                    <FormLabel>First name</FormLabel>
                    <Input bg={'white'} width={{base: '100%' , xl: '20%'}} type={'text'} placeholder={'MOdevco'}></Input>
                    <FormLabel mt={'30px'}>Password:</FormLabel>
                    <Input  bg={'white'} width={{base: '100%' , xl: '20%'}} type={'password'} placeholder={'kode...'}></Input>
                    <Input width={{base: '100%' , xl: '20%'}} bg={'white'} value={'Submit'} display={'block'} mt={'30px'} type={'button'}></Input>
                </FormControl>
                <Text fontSize={'25px'}>Yuborish tugmasining qiymat atributini o‘tkazib yuborsangiz, tugma standart matnni oladi:</Text>



                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'500px'} rounded={'20px'}>
                    <Heading>Misol</Heading>

                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'}>
                        <Text  color={'#9D5EBB'} fontSize={'25px'}>{`<form>`} </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<label `} <span className='red'>for=</span> <span className='yellow'>"fname"</span>{'>'} <span className='white'>First name:</span> {`</label >`} {`<br>  `}  </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>"id="</span> <span className='yellow'>"fname"</span> <span className='red'>name=</span> <span className='yellow'>"fname"</span> {'>'} {`</input >`} {`<br>  `}  </Text>

                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<label `} <span className='red'>for=</span> <span className='yellow'>"pwd"</span>{'>'} <span className='white'>Password:</span> {`</label >`} {`<br>  `}  </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"password"</span> <span className='red'>"id="</span> <span className='yellow'>"pwd"</span> <span className='red'>name=</span> <span className='yellow'>"pwd"</span> {'>'} {`</input >`} {`<br>  `}  </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<input`} <span className='red'>type=</span>{'>'} {`</input >`} </Text>

                        <Text  color={'#9D5EBB'} fontSize={'25px'}>{`</form>`} </Text>

                        
                    </Box>
                    <CopyToClipboard text={`<form action="/action_page.php"><label for="fname">First name:</label><br><input type="text" id="fname" name="fname"value="John"><br><label for="lname">Last name:</label><br><input type="text" id="lname" name="lname" value="Doe"><br><br> <input type="submit" value="Submit"></form><form action="/action_page.php"><label for="fname">First name:</label><br><input type="text" id="fname" name="fname" value="John"><br> <label for="lname">Last name:</label><br><input type="text" id="lname" name="lname" value="Doe"><br><br> <input type="submit"  </form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

            </Box>
            <Divider mt={'20px'} />




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Reset</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<input type="reset">`}</span> barcha shakl qiymatlarini standart qiymatlariga qaytaradigan tiklash tugmachasini belgilaydi:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'500px'} rounded={'20px'}>
                    <Heading>Misol</Heading>

                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'}>
                        <Text  color={'#9D5EBB'} fontSize={'25px'}>{`<form>`} </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<label `} <span className='red'>for=</span> <span className='yellow'>"fname"</span>{'>'} <span className='white'>First name:</span> {`</label >`} {`<br>  `}  </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>"id="</span> <span className='yellow'>"fname"</span> <span className='red'>name=</span> <span className='yellow'>"fname"</span> {'>'} {`</input >`} {`<br>  `}  </Text>

                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<label `} <span className='red'>for=</span> <span className='yellow'>"pwd"</span>{'>'} <span className='white'>Password:</span> {`</label >`} {`<br>  `}  </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"password"</span> <span className='red'>"id="</span> <span className='yellow'>"pwd"</span> <span className='red'>name=</span> <span className='yellow'>"pwd"</span> {'>'} {`</input >`} {`<br>  `}  </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"submit"</span> <span className='red'>"value"</span> <span className='yellow'>"Submit"</span>  {'>'} {`</input >`} {`<br>  `}  </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'25px'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"reset"</span> {'>'} {`</input >`} {`<br>  `}  </Text>
                        <Text  color={'#9D5EBB'} fontSize={'25px'}>{`</form>`} </Text>

                        
                    </Box>
                    <CopyToClipboard text={`<form action="/action_page.php"><label for="fname">First name:</label><br><input type="text" id="fname" name="fname"value="John"><br><label for="lname">Last name:</label><br><input type="text" id="lname" name="lname" value="Doe"><br><br> <input type="submit" value="Submit"></form><form action="/action_page.php"><label for="fname">First name:</label><br><input type="text" id="fname" name="fname" value="John"><br> <label for="lname">Last name:</label><br><input type="text" id="lname" name="lname" value="Doe"><br><br> <input type="submit" value="Submit"> <input type="reset"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'25px'}>Yuqoridagi HTML kodi brauzerda shunday ko'rsatiladi:</Text>

                <FormControl fontSize={'30px'}>
                    <FormLabel>First name</FormLabel>
                    <Input bg={'white'} width={{base: '100%' , xl: '20%'}} type={'text'} placeholder={'MOdevco'}></Input>
                    <FormLabel mt={'30px'}>Password:</FormLabel>
                    <Input display={'block'}  bg={'white'} width={{base: '100%' , xl: '20%'}} type={'password'} placeholder={'kode...'}></Input>
                    <Input width={{base: '100%' , xl: '10%'}} mr={'10px'} bg={'white'} value={'Submit'}  mt={'30px'} type={'submit'}></Input>
                    <Input width={{base: '100%' , xl: '10%'}} bg={'white'} value={'Reset'}  mt={'30px'} type={'reset'}></Input>
                </FormControl>
                <Text fontSize={'25px'}>Agar siz kiritilgan qiymatlarni o'zgartirsangiz va keyin "Qayta tiklash" tugmasini <br /> bossangiz, forma-ma'lumotlar standart qiymatlarga qaytariladi.</Text>




            </Box>
            <Divider mt={'20px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Radio</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<input type="radio">`}</span>  radio tugmani belgilaydi.</Text>
                <Text fontSize={'25px'}> Radio tugmalari foydalanuvchiga cheklangan miqdordagi tanlovdan FAQAT BIRTANI tanlash imkonini beradi:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'550px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'}>
                        <Text  color={'#9D5EBB'}  fontSize={'25px'}>{'<p>'} <span style={{color: 'white'}}>Sevimli veb-tilingizni tanlang:</span>{`</p>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<form`} </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"radio"</span>
                        <span className='red'>id=</span> <span className='yellow'>"html"</span> <span className='red'>name=</span> <span className='yellow'>"sev_til" </span>
                        <span className='red'>value=</span> <span className='yellow'>"HTML"</span>{`>`}
                        </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'>type=</span> <span className='yellow'>"radio"</span>{`>`} <span className='white'>HTML</span> {`</label>`} {`<br>`}
                        </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"radio"</span>
                        <span className='red'>id=</span> <span className='yellow'>"html"</span> <span className='red'>name=</span> <span className='yellow'>"sev_til" </span>
                        <span className='red'>value=</span> <span className='yellow'>"CSS"</span>{`>`}
                        </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'>type=</span> <span className='yellow'>"radio"</span>{`>`} <span className='white'>CSS</span> {`</label>`} {`<br>`}
                        </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"radio"</span>
                        <span className='red'>id=</span> <span className='yellow'>"html"</span> <span className='red'>name=</span> <span className='yellow'>"sev_til" </span>
                        <span className='red'>value=</span> <span className='yellow'>"JAVASCRIPT"</span>{`>`}
                        </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'>type=</span> <span className='yellow'>"radio"</span>{`>`} <span className='white'>JAVASCRIPT</span> {`</label>`} {`<br>`}
                        </Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</form`}</Text>
                    </Box>
                    <CopyToClipboard text={`<form><input type="radio" id="html" name="sev_til" value="HTML"><label for="html">HTML</label><br><input type="radio" id="css"name="sev_til" value="CSS"><label for="css">CSS</label><br><input type="radio" id="javascript" name="sev_til" value="JavaScript"><labelfor="javascript">JavaScript</label><br></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

                <Text fontSize={'25px'}> Yuqoridagi HTML kodi brauzerda shunday ko'rsatiladi:</Text>
                <RadioGroup defaultValue='Itachi'>
                    <HStack spacing='24px'>
                    <Radio value='Sasuke'>HTMl</Radio>
                    <Radio value='Nagato'>CSS</Radio>
                    <Radio value='Itachi'>JavaScript</Radio>
                    </HStack>
                </RadioGroup>
            </Box>
            <Divider mt={'20px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Checkbox</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<input type="checkbox">`}</span>   belgilash katakchasini belgilaydi.</Text>
                <Text fontSize={'25px'}> Check boxlar foydalanuvchiga cheklangan miqdordagi tanlovdan 0 yoki KO'PROQ variantlarni tanlash imkonini beradi.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'550px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'25px'}>Check boxlar bo'lgan shakl:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<form`} </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>checkbox</span>
                        <span className='red'>id=</span> <span className='yellow'>"avtomobil 1"</span> <span className='red'>name=</span> <span className='yellow'>"avtomobil 1"</span>
                        <span className='red'>value=</span> <span className='yellow'>"Velli"</span>{`>`}
                        </Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>type=</span> <span className='yellow'>"radio"</span>{`>`} <span className='white'>Mening velosipedim bor</span> {`</label>`} {`<br>`}
                        </Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"checkbox"</span>
                        <span className='red'>id=</span> <span className='yellow'>"avtomobil 2"</span> <span className='red'>name=</span> <span className='yellow'>"avtomobil 2"</span>
                        <span className='red'>value=</span> <span className='yellow'>"Moshina"</span>{`>`}
                        </Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>type=</span> <span className='yellow'>"radio"</span>{`>`} <span className='white'>Mening moshinam bor</span> {`</label>`} {`<br>`}
                        </Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"checkbox"</span>
                        <span className='red'>id=</span> <span className='yellow'>"avtomobil 3" </span> <span className='red'>name=</span> <span className='yellow'>"avtomobil 3"</span>
                        <span className='red'>value=</span> <span className='yellow'>"Qayiq"</span>{`>`}
                        </Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>type=</span> <span className='yellow'>"radio"</span>{`>`} <span className='white'>Mening qayig’im  bor</span> {`</label>`} {`<br>`}
                        </Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form`}</Text>
                    </Box>
                    <CopyToClipboard text={`<form><input type="checkbox" id="avtomobil 1" name="avtomobil 1" value="Velli"><label for="avtomobil 1"> Mening velosipedim bor</abel><br><input type="checkbox" id="avtomobil 2" name="avtomobil 2" value="Moshina"><label for="avtomobil 2"> Mening moshinam bor</label><br><inputtype="checkbox" id="avtomobil 3" name="avtomobil 3" value="Qayiq"><label for="avtomobil 3"> Mening qayig’im  bor</label><br></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'25px'}>Yuqoridagi HTML kodi brauzerda shunday ko'rsatiladi:</Text>
                <Text fontSize={'25px'}>Sevimli veb-tilingizni tanlang:</Text>
                <Checkbox defaultChecked>Mening velosipedim bor</Checkbox>
                <Checkbox defaultChecked>Mening velosipedim bor</Checkbox>
                <Checkbox defaultChecked>Mening velosipedim bor</Checkbox>
            </Box>
            <Divider mt={'20px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Button</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<input type="button"> `}</span>defines a button:</Text>
                <Text fontSize={'25px'}> Check boxlar foydalanuvchiga cheklangan miqdordagi tanlovdan 0 yoki KO'PROQ variantlarni tanlash imkonini beradi.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'300px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'100px'} bg={'#0A1624'}>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"button" </span>
                        <span className='red'> onclick=</span> <span className='yellow'>"alert('Hello World!')" </span> <span className='red'>value=</span> <span className='yellow'>"Click Me!"</span>
                        {`>`}
                        </Text>
                    </Box>
                    <CopyToClipboard text={`<input type="button" onclick="alert('Hello World!')" value="Click Me!">`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'25px'}>Yuqoridagi HTML kodi brauzerda shunday ko'rsatiladi:</Text>
                <Text fontSize={'25px'}>Sevimli veb-tilingizni tanlang:</Text>
                <Button onClick={() => alert("Salom dunyo")} width={{base: '100%' , xl: '20%'}} >Meni bos!</Button>
            </Box>
            <Divider mt={'20px'} />




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Color</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<input type="color"> `}</span> rangni o'z ichiga olishi kerak bo'lgan kiritish maydonlari uchun ishlatiladi.</Text>
                <Text fontSize={'25px'}> Brauzer qo'llab-quvvatlashiga qarab, kiritish maydonida rang tanlash vositasi paydo bo'lishi mumkin..</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'300px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'100px'} bg={'#0A1624'}>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"color"</span>
                        <span className='red'>value=</span> <span className='yellow'>"color"</span>
                        {`>`}
                        </Text>
                    </Box>
                    <CopyToClipboard text={`<form><label for="favcolor">Select your favorite color:</label><input type="color" id="favcolor" name="favcolor"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Date</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<input type="date">  `}</span>sanani o'z ichiga olishi kerak bo'lgan kiritish maydonlari uchun ishlatiladi.</Text>
                <Text fontSize={'25px'}> Brauzer qo'llab-quvvatlashiga qarab, kiritish maydonida rang tanlash vositasi paydo bo'lishi mumkin.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'300px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'100px'} bg={'#0A1624'}>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"date"</span>
                        <span className='red'>id=</span> <span className='yellow'>"birthday" </span>
                        {`>`}
                        </Text>
                    </Box>
                    <CopyToClipboard text={`<form><label for="birthday">Birthday: </label><input type="date" id="birthday" name="favcolor"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Datetime-local</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<input type="datetime-local">  `}</span> vaqt mintaqasisiz sana va vaqtni kiritish maydonini belgilaydi.</Text>
                <Text fontSize={'25px'}>Brauzer qo'llab-quvvatlashiga qarab, sanani tanlash vositasi kiritish maydonida paydo bo'lishi mumkin.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'300px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'100px'} bg={'#0A1624'}>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"datetime-local"</span>
                        <span className='red'>id=</span> <span className='yellow'>"birthdaytime"</span>
                        {`>`}
                        </Text>
                    </Box>
                    <CopyToClipboard text={`<form><label for="birthdaytime">Birthday (date and time):</label><input type="datetime-local" id="birthdaytime" name="birthdaytime"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Email</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<input type="email">`}</span> elektron pochta manzilini o'z ichiga olishi kerak bo'lgan kiritish maydonlari uchun ishlatiladi.</Text>
                <Text fontSize={'25px'}>Depending on browser support, the e-mail address can be automatically validated when submitted.</Text>
                <Text fontSize={'25px'}>Ba'zi smartfonlar elektron pochta turini taniydi va elektron pochta kiritishiga mos kelish uchun klaviaturaga <span className='red'>".com"</span> ni qo'shadi.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'400px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'200px'} bg={'#0A1624'}>
                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"email"</span>
                        <span className='red'>id=</span> <span className='yellow'>"email"</span>
                        {`>`} <span className='white'>Enter your email:</span> {`</label>`}
                        </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"datetime-local"</span>
                        <span className='red'>id=</span> <span className='yellow'>"birthdaytime"</span> <span className='red'>name=</span> <span className='yellow'>"email"</span>
                        {`>`}
                        </Text>
                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                    </Box>
                    <CopyToClipboard text={`<form><label for="email">Enter your email:</label><input type="email" id="email" name="email"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'100px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Image</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<input type="image">`}</span> tasvirni yuborish tugmasi sifatida belgilaydi.</Text>
                <Text fontSize={'25px'}>Rasmga yo'l src atributida ko'rsatilgan.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'400px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'200px'} bg={'#0A1624'}>
                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"image" </span>
                        <span className='red'>src=</span> <span className='yellow'>"img_submit.gif"</span> <span className='red'>alt="</span> <span className='yellow'>"Yuborish"</span>
                        {`>`}
                        </Text>
                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                    </Box>
                    <CopyToClipboard text={`<form><input type="image" src="img_submit.gif" alt="Yuborish" kengligi="48" balandligi="48"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'100px'} />




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type File</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<input type="file">`}</span> faylni tanlash maydonini va fayllarni yuklash uchun <span className='red'>"Browse"</span> tugmasini belgilaydi.</Text>


                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'400px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'200px'} bg={'#0A1624'}>
                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"myfile"</span>
                        {`>`} <span className='white'>Select a file:</span> {`</label>`}
                        </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"file"</span>
                        <span className='red'>id=</span> <span className='yellow'>"myfile"</span> <span className='red'>name=</span> <span className='yellow'>"myfile"</span>
                        {`>`}
                        </Text>
                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                    </Box>
                    <CopyToClipboard text={`<form><label for="myfile">Select a file:</label><input type="file" id="myfile" name="myfile"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'100px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Hidden</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<input type="hidden">`}</span>  maxfiy kiritish maydonini belgilaydi (foydalanuvchiga ko'rinmaydi).</Text>
                <Text fontSize={'25px'}>Yashirin maydon veb-ishlab chiquvchilarga ariza topshirilganda foydalanuvchilar tomonidan <br /> ko'rilmaydigan yoki o'zgartirilmaydigan ma'lumotlarni kiritish imkonini beradi</Text>
                <Text fontSize={'25px'}>Yashirin maydon ko'pincha ariza topshirilganda yangilanishi kerak bo'lgan ma'lumotlar bazasi <br /> yozuvini saqlaydi.</Text>
                <Text fontSize={'25px'}>Eslatma: Qiymat foydalanuvchiga sahifa mazmunida ko'rsatilmasa ham, u istalgan brauzerning <br /> ishlab chiquvchi vositalari yoki "Manbani ko'rish" funksiyasidan foydalangan holda ko'rinadi <br /> (va tahrirlanishi mumkin). Yashirin ma'lumotlardan xavfsizlik shakli sifatida foydalanmang!</Text>


                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'400px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'200px'} bg={'#0A1624'}>



                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"fname"</span>
                        {`>`} <span className='white'>First name:</span> {`</label>`}
                        </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span>
                        <span className='red'>id=</span> <span className='yellow'>"fname"</span> <span className='red'>name=</span> <span className='yellow'>"fname"</span>
                        {`>`} {`<br>`}</Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`}  <span className='red'>type=</span> <span className='yellow'>"hidden"</span>
                        <span className='red'>id=</span> <span className='yellow'>"custId"</span> <span className='red'>name=</span> <span className='yellow'>"custId"</span>
                        {`>`} {`<br>`}</Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`}  <span className='red'>type=</span> <span className='yellow'>"submit"</span>
                         <span className='red'>value=</span> <span className='yellow'>"Submit"</span>
                        {`>`}</Text>
                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                    </Box>
                    <CopyToClipboard text={`<form><label for="fname">First name:</label><input type="text" id="fname" name="fname"><br><br><input type="hidden" id="custId"name="custId" value="3487"><input type="submit" value="Submit"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'100px'} />




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Month</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<input type="month">`}</span>  foydalanuvchiga oy va yilni tanlash imkonini beradi.</Text>
                <Text fontSize={'25px'}>YBrauzer qo'llab-quvvatlashiga qarab, sanani tanlash vositasi kiritish maydonida paydo bo'lishi mumkin.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'400px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'200px'} bg={'#0A1624'}>



                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"bdaymonth"</span>
                        {`>`} <span className='white'>Birthday (month and year):</span> {`</label>`}
                        </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"month"</span>
                        <span className='red'>id=</span> <span className='yellow'>"bdaymonth"</span> <span className='red'>name=</span> <span className='yellow'>"bdaymonth"</span>
                        {`>`}</Text>


                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                    </Box>
                    <CopyToClipboard text={`<form><label for="bdaymonth">Birthday (month and year):</label><input type="month" id="bdaymonth" name="bdaymonth"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Number</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<input type="raqam"> `}</span>raqamli kiritish maydonini belgilaydi.</Text>
                <Text fontSize={'25px'}>Shuningdek, qanday raqamlar qabul qilinishiga cheklovlar o'rnatishingiz mumkin.</Text>
                <Text fontSize={'25px'}>Quyidagi misolda 1 dan 5 gacha qiymat kiritishingiz mumkin bo'lgan raqamli kiritish maydoni ko'rsatilgan:</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'400px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'200px'} bg={'#0A1624'}>



                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"quantity"</span>
                        {`>`} <span className='white'>Quantity (between 1 and 5):</span> {`</label>`}
                        </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"number" </span>
                        <span className='red'>id=</span> <span className='yellow'>"quantity"</span> <span className='red'>name=</span> <span className='yellow'>"quantity" </span>
                        <span className='red'>min=</span> <span className='yellow'>"1" </span> <span className='red'>max=</span> <span className='yellow'>"20" </span> {`>`}</Text>


                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                    </Box>
                    <CopyToClipboard text={`<form><label for="quantity">Quantity (between 1 and 5):</label><input type="number" id="quantity" name="quantity" min="1" max="5"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'100px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Cheklovlari</Heading>
                <Text fontSize={'25px'}>Quyida ba'zi umumiy kirish cheklovlari ro'yxati keltirilgan:</Text>

                <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'45vh'}>
                        <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>Xususiyat</Td>
                                        <Td>Tavsif</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>checked</Td>
                                        <Td>Sahifa yuklanganda kiritish maydonini oldindan tanlash kerakligini bildiradi (tur = "checkbox" yoki type = "radio" uchun)</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>disabled</Td>
                                        <Td>Kirish maydonini o'chirib qo'yish kerakligini bildiradi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>max</Td>
                                        <Td>Specifies the maximum value for an input field</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>maxlength</Td>
                                        <Td> Kirish maydoni uchun maksimal belgilar sonini belgilaydi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>min</Td>
                                        <Td>Kirish maydoni uchun minimal qiymatni belgilaydi</Td>
                                    </Tr>
                                    <Tr  bg={'#233242'}>
                                        <Td>pattern</Td>
                                        <Td>Kirish qiymatini tekshirish uchun muntazam ifodani belgilaydi</Td>
                                    </Tr>
                                    <Tr >
                                        <Td>readonly</Td>
                                        <Td>Kirish maydoni faqat oʻqilishini bildiradi (oʻzgartirib boʻlmaydi)</Td>
                                    </Tr>
                                    <Tr  bg={'#233242'}>
                                        <Td>required</Td>
                                        <Td>Kirish maydoni zarurligini bildiradi (to'ldirilishi kerak)</Td>
                                    </Tr>
                                    <Tr  >
                                        <Td>size</Td>
                                        <Td>Kirish maydonining kengligini (belgilarda) belgilaydi</Td>
                                    </Tr>
                                    <Tr  bg={'#233242'}>
                                        <Td>step</Td>
                                        <Td>Kirish maydoni uchun qonuniy raqamlar oralig'ini belgilaydi</Td>
                                    </Tr>
                                    <Tr  >
                                        <Td>step</Td>
                                        <Td>Kirish maydoni uchun standart qiymatni belgilaydi</Td>
                                    </Tr>
                                </Tbody>
                                
                            </Table>
                        </TableContainer>
                </Box>
                <Text fontSize={'25px'}>Keyingi bobda kirish cheklovlari haqida ko'proq bilib olasiz.</Text>
                <Text fontSize={'25px'}>Quyidagi misolda siz 0 dan 100 gacha qiymatni 10 bosqichda kiritishingiz mumkin <br /> bo'lgan raqamli kiritish maydonini ko'rsatadi. Standart qiymat 30:</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'400px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'200px'} bg={'#0A1624'}>



                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"quantity"</span>
                        {`>`} <span className='white'>Quantity:</span> {`</label>`}
                        </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"number" </span>
                        <span className='red'>id=</span> <span className='yellow'>"quantity"</span> <span className='red'>name=</span> <span className='yellow'>"quantity" </span>
                        <span className='red'>min=</span> <span className='yellow'>"1" </span> <span className='red'>max=</span> <span className='yellow'>"20" </span> 
                        <span className='red'>step=</span> <span className='yellow'>"10" </span> <span className='red'> value=</span> <span className='yellow'>"20" </span> {`>`}
                        </Text>


                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                    </Box>
                    <CopyToClipboard text={`<form><label for="quantity">Quantity:</label><input type="number" id="quantity" name="quantity" min="0" max="100" step="10" value="30></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                
            </Box>
            <Divider mt={'100px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Range</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<input type="diapazon">  `}</span>aniq qiymati muhim bo'lmagan raqamni kiritish uchun boshqaruvni <br /> belgilaydi (slayder boshqaruvi kabi). Standart diapazon 0 dan 100 gacha. Biroq siz min, max va <br /> step atributlari bilan qanday raqamlar qabul qilinishiga cheklovlar o‘rnatishingiz mumkin:</Text>
    

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'400px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'200px'} bg={'#0A1624'}>



                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"vol"</span>
                        {`>`} <span className='white'>Volume (between 0 and 50):</span> {`</label>`}
                        </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"range" </span>
                        <span className='red'>id=</span> <span className='yellow'>"vol"</span> <span className='red'>name=</span> <span className='yellow'>"vol" </span>
                        <span className='red'>min=</span> <span className='yellow'>"1" </span> <span className='red'>max=</span> <span className='yellow'>"20" </span> {`>`}</Text>


                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                    </Box>
                    <CopyToClipboard text={`<form><label for="quantity">Quantity (between 1 and 5):</label><input type="number" id="quantity" name="quantity" min="1" max="5"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'100px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Search</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<input type="search">`}</span> qidiruv maydonlari uchun ishlatiladi (qidiruv maydoni odatdagi matn maydoni kabi ishlaydi).</Text>
    

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'400px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'200px'} bg={'#0A1624'}>



                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"gsearch"</span>
                        {`>`} <span className='white'>Search Google:</span> {`</label>`}
                        </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"search" </span>
                        <span className='red'>id=</span> <span className='yellow'>"gsearch"</span> <span className='red'>name=</span> <span className='yellow'>"gsearch"</span>
                        {`>`}</Text>


                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                    </Box>
                    <CopyToClipboard text={`<form><label for="gsearch">Search Google:</label><input type="search" id="gsearch" name="gsearch"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'100px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Tel</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<input type="tel">`}</span>  telefon raqami bo'lishi kerak bo'lgan kiritish maydonlari uchun ishlatiladi.</Text>
    

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'400px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'200px'} bg={'#0A1624'}>


                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"phone"</span>
                        {`>`} <span className='white'>Telefon Raqamingizni Kiriting</span> {`</label>`}
                        </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"tel" </span>
                        <span className='red'>id=</span> <span className='yellow'>"phone"</span> <span className='red'>name=</span> <span className='yellow'>"phone"</span>
                        {`>`}</Text>


                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                    </Box>
                    <CopyToClipboard text={`<form><label for="phone">Enter your phone number:</label><input type="tel" id="phone" name="phone"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'100px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Time</Heading>
                <Text fontSize={'25px'}> <span className='red'>{` <input type="time">`}</span> foydalanuvchiga vaqtni tanlash imkonini beradi (vaqt zonasi yo'q).</Text>
                <Text fontSize={'25px'}> Depending on browser support, a time picker can show up in the input field.</Text>
    

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'400px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'200px'} bg={'#0A1624'}>


                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"appt"</span>
                        {`>`} <span className='white'>Asosiy Vaqt</span> {`</label>`}
                        </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"time"  </span>
                        <span className='red'>id=</span> <span className='yellow'>"appt"</span> <span className='red'>name=</span> <span className='yellow'>"appt"</span>
                        {`>`}</Text>


                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                    </Box>
                    <CopyToClipboard text={`<form><label for="appt">Select a time:</label><input type="time" id="appt" name="appt"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'100px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Url</Heading>
                <Text fontSize={'25px'}> <span className='red'>{` <input type="url">`}</span> URL manzilini o'z ichiga olishi kerak bo'lgan kiritish maydonlari uchun ishlatiladi.</Text>
                <Text fontSize={'25px'}>Brauzer qo'llab-quvvatlashiga qarab, url maydoni yuborilganda avtomatik ravishda tasdiqlanishi mumkin.</Text>
                <Text fontSize={'25px'}>Ba'zi smartfonlar url turini taniydi va url kiritishiga mos kelish uchun klaviaturaga ".com" ni qo'shadi.</Text>
    

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'400px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'200px'} bg={'#0A1624'}>


                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"homepage"</span>
                        {`>`} <span className='white'>Asosiy Vaqt</span> {`</label>`}
                        </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"url"</span>
                        <span className='red'>id=</span> <span className='yellow'>"homepage"</span> <span className='red'>name=</span> <span className='yellow'>"homepage"</span>
                        {`>`}</Text>


                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                    </Box>
                    <CopyToClipboard text={`<form><label for="homepage">Add your homepage:</label><input type="url" id="homepage" name="homepage"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'100px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Input Type Week</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<input type="week">`}</span> foydalanuvchiga hafta va yilni tanlash imkonini beradi.</Text>
                <Text fontSize={'25px'}>Brauzer qo'llab-quvvatlashiga qarab, sanani tanlash vositasi kiritish maydonida paydo bo'lishi mumkin.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'400px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'200px'} bg={'#0A1624'}>


                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"week"</span>
                        {`>`} <span className='white'>Asosiy Hafta</span> {`</label>`}
                        </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"week"</span>
                        <span className='red'>id=</span> <span className='yellow'>"week"</span> <span className='red'>name=</span> <span className='yellow'>"week"</span>
                        {`>`}</Text>


                        <Text  fontSize={'20px'} color={'#9D5EBB'}>{`<form> `} </Text>

                    </Box>
                    <CopyToClipboard text={`<form><label for="homepage">Add your homepage:</label><input type="url" id="homepage" name="homepage"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'100px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'10vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML teglari</Heading>

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
                                    <Tr>
                                        <Td>{`<input type=" "> `}</Td>
                                        <Td>Ko'rsatish uchun kirish turini belgilaydi</Td>
                                    </Tr>
                                </Tbody>
                                
                            </Table>
                        </TableContainer>
                    </Box>
            </Box>
            <Divider mt={'100px'} />
        </Box>
            
    </Box> 
  )
}

export default Html17dars