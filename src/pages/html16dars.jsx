import { Box , Flex , Heading , Button , Text , Image , Input , FormLabel, HStack, Radio, RadioGroup} from '@chakra-ui/react'
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

const Html16dars = () => {
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
    <Box  width={'100%'} pt={'250px'} className={'bgImage'} height={'100%'}>
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
                            <AccordionItenm  />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Form Elementlari</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '20vh' , md: '15vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>Ushbu bob barcha turli HTML forma elementlarini tavsiflaydi.</Text>
            </Box>
            <Divider mt={'20px'} />
           
            
        


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'55vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML <span className='red'>{`<form>`}</span> Elementlari</Heading>
                <Text fontSize={'25px'}> HTML <span className='red'>{`<form> `}</span> elementi quyidagi shakl elementlaridan bir yoki bir nechtasini o'z ichiga olishi mumkin:</Text>
                
                <UnorderedList  fontSize={'20px'}>
                    <ListItem className='red'>{`<input>`}</ListItem>
                    <ListItem className='red'>{`<label>`}</ListItem>
                    <ListItem className='red'>{`<select>`}</ListItem>
                    <ListItem className='red'>{`<textarea>`}</ListItem>
                    <ListItem className='red'>{`<button>`}</ListItem>
                    <ListItem className='red'>{`<fieldset>`}</ListItem>
                    <ListItem className='red'>{`<legent>`}</ListItem>
                    <ListItem className='red'>{`<datalist>`}</ListItem>
                    <ListItem className='red'>{`<output>`}</ListItem>
                    <ListItem className='red'>{`<option>`}</ListItem>
                    <ListItem className='red'>{`<optgroup>`}</ListItem>
                </UnorderedList>

            </Box>
            <Divider mt={'20px'} />

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}><span className='red'>{`<input>`}</span> Element</Heading>
                <Text fontSize={'25px'}> Eng ko'p ishlatiladigan forma elementlaridan biri <span className='red'> {`<input>`}</span> elementidir.</Text>
                <Text fontSize={'25px'}> <span className='red'>{`<input>`}</span> elementi tip atributiga qarab bir necha usulda ko'rsatilishi mumkin.</Text>



                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'300px'} rounded={'20px'}>
                    <Heading>Misol</Heading>

                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'}>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<label`} <span style={{color: 'red'}}> for=</span> <span style={{color: 'yellow'}}>"fname"</span> {'>'} <span style={{color: 'white'}}>First name:</span> {`</label`} {'>'} {`<br>`}</Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<input`} <span style={{color: 'red'}}>type=</span> <span style={{color: 'yellow'}}>"text"</span> <span style={{color: 'red'}}>type=</span> <span style={{color: 'yellow'}}>"fname"</span> <span style={{color: 'red'}}>name=</span> <span style={{color: 'yellow'}}>"fname"</span> {'>'} <span style={{color: 'white'}}>First name:</span> {`</label`} {'>'} {`<br>`}</Text>
                    </Box>
                    <CopyToClipboard text={`<label for="fname">First name:</label><input type="text" id="fname" name="fname">`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'25px'}>Maslahat: Agar action atributi oʻtkazib yuborilsa, amal joriy sahifaga oʻrnatiladi.</Text>

            </Box>
            <Divider mt={'20px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'40vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> <span className='red'>{`<label> `}</span> Element</Heading>
                <Text fontSize={'25px'}> <span className='red'>{`<label>`}</span> elementi ekranni o'qish foydalanuvchilari uchun foydalidir, chunki foydalanuvchi <br /> e'tiborini kiritish elementiga qaratganda ekran o'quvchi yorliqni baland ovozda o'qiydi.</Text>
                <Text fontSize={'25px'}><span className='red'>{`<label>`}</span> elementi juda kichik hududlarni (masalan, radio tugmalar yoki belgilash katakchalari) <br /> bosishda qiynalayotgan foydalanuvchilarga ham yordam beradi - chunki foydalanuvchi <br /> <span className='red'>{`<label>`}</span> elementidagi matnni bosganda, radio tugma/tasdiqlash katagiga o'tadi.</Text>
                <Text fontSize={'25px'}> <span className='red'>{`<label>`}</span>  tegining for atributi ularni bir-biriga bog'lash uchun <span className='red'>{`<input>`}</span> elementining id atributiga teng bo'lishi kerak.</Text>
                   
            </Box>
            <Divider mt={'100px'} />




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}><span className='red'>{`<select>`}</span> Element</Heading>
                <Text fontSize={'25px'}><span className='red'>{`<select>`}</span> elementi ochiladigan ro'yxatni belgilaydi:</Text>



                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'450px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'290px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`<label `} <span className='red'>for=</span> <span className='yellow'>"cars"</span> {'>'} <span className='white'>Avtomobilni tanlang::</span> {`</label `} </Text>


                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`<select`} <span className='red'>id=</span> <span className='yellow'>"cars"</span> <span className='red'>name=</span> <span className='yellow'>"cars"</span> {'>'} </Text>

                        <Text color={'#9D5EBB'} pl={'20px'} fontSize={'25px'}> {`<option`} <span className='red'>value=</span> <span className='yellow'>"volvo"</span>  {'>'} <span className='white'>Volvo</span>  {`</option`} </Text>
                        <Text color={'#9D5EBB'} pl={'20px'} fontSize={'25px'}> {`<option`} <span className='red'>value=</span> <span className='yellow'>"saab"</span>  {'>'} <span className='white'>Saab</span>  {`</option`} </Text>
                        <Text color={'#9D5EBB'} pl={'20px'} fontSize={'25px'}> {`<option`} <span className='red'>value=</span> <span className='yellow'>"fiat"</span>  {'>'} <span className='white'>Fiat</span>  {`</option`} </Text>
                        <Text color={'#9D5EBB'} pl={'20px'} fontSize={'25px'}> {`<option`} <span className='red'>value=</span> <span className='yellow'>"audi"</span>  {'>'} <span className='white'>Audi</span>  {`</option`} </Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`</select>`} </Text>
                    </Box>
                    
                    <CopyToClipboard text={`<label for="cars">Avtomobilni tanlang::</label><select id="cars" name="cars"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'25px'}><span className='red'>{`<option>`}</span> elementlari tanlanishi mumkin bo'lgan variantni belgilaydi.</Text>
                <Text fontSize={'25px'}>Odatiy bo'lib, ochiladigan ro'yxatdagi birinchi element tanlanadi.</Text>
                <Text fontSize={'25px'}>Oldindan tanlangan variantni belgilash uchun tanlangan atributni option qo'shing:</Text>


                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'300px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'100px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'}  fontSize={'25px'}> {`<option`} <span className='red'>value=</span> <span className='yellow'>"volvo"</span>  {'>'} <span className='white'>Volvo</span>  {`</option`} </Text>
                    </Box>
                    
                    <CopyToClipboard text={`<option value="fiat" selected>Fiat</option>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

            </Box>
            <Divider mt={'100px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'40vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> <span className='red'>{`<textarea>`}</span> Element</Heading>
                <Text fontSize={'25px'}> <span className='red'> {`<textarea>`}</span> elementi ko'p qatorli kiritish maydonini (matn maydoni) belgilaydi:</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'130px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<textarea `} <span className='red'>name="</span> <span className='yellow'>"message"</span > <span className='red'>rows=</span> <span className='yellow'>"10"</span >  <span className='red'>cols=</span> <span className='yellow'>"30"</span > {`>`} </Text>
                        <Text color={'#fff'} fontSize={'20px'}>Mushuk bog'da o'ynadi. </Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</textarea >`}</Text>

                    </Box>
                    
                    <CopyToClipboard text={`<textarea name="message" rows="10" cols="30">Mushuk bog'da o'ynadi.</textarea>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'25px'}> Satrlar atributi matn maydonidagi satrlarning ko'rinadigan sonini belgilaydi.</Text>
                <Text fontSize={'25px'}> Cols atributi matn maydonining ko'rinadigan kengligini belgilaydi.</Text>
                <Text fontSize={'25px'}> Yuqoridagi HTML kodi brauzerda shunday ko'rsatiladi:</Text>
                <Textarea bg={'white'} color={'black'} width={{base: '100%' ,xl: '30%'}} height={'200px'} placeholder={"Mushuk bog'da o'ynadi. "}/>
                <Text color={'#fff'} fontSize={'20px'}>Matn maydonining o'lchamini CSS yordamida ham belgilashingiz mumkin:</Text>


                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'130px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<textarea `} <span className='red'>name="</span> <span className='yellow'>"message"</span >   <span className='red'>style=</span> <span className='yellow'>"width:200px;   height:600px;" </span > {`>`} </Text>
                        <Text color={'#fff'} fontSize={'20px'}>Mushuk bog'da o'ynadi. </Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</textarea >`}</Text>

                    </Box>
                    
                    <CopyToClipboard text={`<textarea name="message" style="width:200px; height:600px;">Mushuk bog'da o'ynadi.</textarea>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'100px'} />



            <Click />
            <Divider mt={'100px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Form Elementlar</Heading>

                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'45vh'}>
                        <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>Tag</Td>
                                        <Td>Tavsif</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>{`<form>`}</Td>
                                        <Td>Foydalanuvchi kiritish uchun HTML formasini belgilaydi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>{`<input>`}</Td>
                                        <Td>Kirish boshqaruvini belgilaydi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>{`<textarea> `}</Td>
                                        <Td>Ko'p qatorli kiritish boshqaruvini belgilaydi (matn maydoni)</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>{`<label>`}</Td>
                                        <Td> <span>{`<input>`}</span> elementi uchun tegni belgilaydi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>{`<selesct>`}</Td>
                                        <Td>Ochiladigan ro'yxatni belgilaydi</Td>
                                    </Tr>
                                    <Tr  bg={'#233242'}>
                                        <Td>{`<optgroup>`}</Td>
                                        <Td>Ochiladigan ro'yxatda tegishli variantlar guruhini belgilaydi</Td>
                                    </Tr>
                                    <Tr >
                                        <Td>{`<option>`}</Td>
                                        <Td>Ochiladigan ro'yxatdagi variantni belgilaydi</Td>
                                    </Tr>
                                    <Tr  bg={'#233242'}>
                                        <Td>{`<button>`}</Td>
                                        <Td>Bosiladigan tugmani belgilaydi</Td>
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

export default Html16dars