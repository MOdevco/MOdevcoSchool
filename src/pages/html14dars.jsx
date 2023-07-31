import { Box , Flex , Heading , Button , Text  , Input , FormLabel, HStack, Radio, RadioGroup} from '@chakra-ui/react'
import { HamburgerIcon , CloseIcon } from '@chakra-ui/icons'
import Sidebar from '../components/sidebar/sidebar'
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
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
    Tr,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
  import { Checkbox} from '@chakra-ui/react'
  
const Html14dars = () => {
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
    <Box  width={'100%'}pt={'250px'} className={'bgImage'} height={'100%'}>
        <Box >
            <Flex >
                {onOpen && <Box>
                    <Sidebar title={'HTML DARSLARI'} elementName={'Bosh sahifa'} />
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Formlar</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '20vh' , md: '15vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>HTML formasi foydalanuvchi ma'lumotlarini yig'ish uchun ishlatiladi. <br /> Foydalanuvchi ma'lumotlari ko'pincha qayta ishlash uchun serverga yuboriladi.</Text>
            </Box>
            <Divider mt={'20px'} />
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'400px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'250px'} bg={'#0A1624'}>

                        <FormLabel fontSize={'20px'}>Ismingiz</FormLabel>
                        <Input placeholder='Ism' bg={'white'} outline={0} width={{base: '100%' , xl: '30%'}}></Input>
                        <FormLabel fontSize={'20px'}>Familiyangiz</FormLabel>
                        <Input placeholder='Familiya' bg={'white'} outline={0} width={{base: '100%' , xl: '30%'}}></Input>
                        <Input bg={'white'} outline={0} color={'black'} mt={'20px'} width={{base: '100%' , xl: '30%'}} type={'button'} value={"Jo'natish"}></Input>
                    </Box>
                </Box>
            </Box>
            <Divider mt={'20px'} />


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}><span style={{color: 'red'}}>{`<form>`}</span> Elementi</Heading>
                <Text fontSize={'25px'}> HTML <span style={{color: 'red'}}>{`<form>`}</span> elementi foydalanuvchi kiritishi uchun HTML formasini yaratish uchun ishlatiladi:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'300px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'140px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<form`} </Text>
                        <Text color={'#9D5EBB'} pl={'10px'} fontSize={'20px'}><span>form elementlar.</span></Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</form`}</Text>
                    </Box>
                    <CopyToClipboard text={`<form>form elementlar.</form> `} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'25px'}> <span style={{color: 'red'}}>{`<form>`}</span> elementi har xil turdagi kiritish elementlari uchun konteynerdir, masalan: matn maydonlari, belgilash katakchalari, radio tugmalari, yuborish tugmalari va boshqalar.</Text>
                <Text fontSize={'25px'}> Barcha turli shakl elementlari ushbu bobda yoritilgan: HTML forma elementlari.</Text>
            </Box>
            <Divider mt={'20px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}><span style={{color: 'red'}}>{`<input> `}</span> Elementi</Heading>
                <Text fontSize={'25px'}> HTML <span style={{color: 'red'}}>{`<input> `}</span>elementi eng ko'p ishlatiladigan shakl elementidir.</Text>
                <Text fontSize={'25px'}> HTML <span style={{color: 'red'}}>{`<input> `}</span> elementi tip atributiga qarab ko'p usullarda ko'rsatilishi mumkin.</Text>
                <Text fontSize={'25px'}> Mana bir nechta misollar:</Text>



                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} minHeight={'45vh'}>
                        <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>Turi</Td>
                                        <Td>Tavsif</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>{`<input type="text">`}</Td>
                                        <Td>Bir qatorli matn kiritish maydonini ko'rsatadi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>{`<input type="radio">`}</Td>
                                        <Td>Radio tugmachasini ko'rsatadi (ko'p variantlardan birini tanlash uchun)</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>{`<input type="radio">`}</Td>
                                        <Td>Belgilash katakchasini ko'rsatadi (ko'p variantlardan nol yoki undan ko'pni tanlash uchun)</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>{`<input type="submit">`}</Td>
                                        <Td>Yuborish tugmachasini ko'rsatadi (shaklni yuborish uchun)</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>{`<input type="button">`}</Td>
                                        <Td>Bosiladigan tugmani ko'rsatadi</Td>
                                    </Tr>
                                </Tbody>
                                
                            </Table>
                        </TableContainer>
               
                    </Box>

                </Box>
            </Box>
            <Divider mt={'20px'} />
                    



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Matn maydonlari</Heading>
                <Text fontSize={'25px'}> <span style={{color: 'red'}}>{`<input type="text">`}</span> matn kiritish uchun bir qatorli kiritish maydonini belgilaydi.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'450px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'25px'}>Matn uchun kiritish maydonlari bo'lgan shakl:</Text>

                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'220px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<form`} </Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<label`} <span style={{color: 'red'}}> for=</span> <span style={{color: 'yellow'}}>"fname"</span> {'>'} <span style={{color: 'white'}}>First name:</span> {`</label`} {'>'} {`<br>`}</Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<input`} <span style={{color: 'red'}}>type=</span> <span style={{color: 'yellow'}}>"text"</span> <span style={{color: 'red'}}>type=</span> <span style={{color: 'yellow'}}>"fname"</span> <span style={{color: 'red'}}>name=</span> <span style={{color: 'yellow'}}>"fname"</span> {'>'} <span style={{color: 'white'}}>First name:</span> {`</label`} {'>'} {`<br>`}</Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<label`} <span style={{color: 'red'}}> for=</span> <span style={{color: 'yellow'}}>"fname"</span> {'>'} <span style={{color: 'white'}}>Last name:</span> {`</label`} {'>'} {`<br>`}</Text>
                        <Text pl={'20px'} color={'#9D5EBB'} fontSize={'20px'}>{`<input`} <span style={{color: 'red'}}>type=</span> <span style={{color: 'yellow'}}>"text"</span> <span style={{color: 'red'}}>type=</span> <span style={{color: 'yellow'}}>"fname"</span> <span style={{color: 'red'}}>name=</span> <span style={{color: 'yellow'}}>"fname"</span> {'>'} <span style={{color: 'white'}}>First name:</span> {`</label`} {'>'} {`<br>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</form`}</Text>
                    </Box>
                    <CopyToClipboard text={`<form><label for="fname">First name:</label><br><input type="text" id="fname" name="fname"><br><label for="lname">Last name:</label><br><input type="text" id="lname"name="lname"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'25px'}> Yuqoridagi HTML kodi brauzerda shunday ko'rsatiladi:</Text>
                <FormLabel>First name:</FormLabel>
                <Input width={{base: '100%' , xl: '30%'}} bg={"white"} placeholder={'First name'}></Input>
                <FormLabel>Last name:</FormLabel>
                <Input width={{base: '100%' , xl: '30%'}} bg={"white"} placeholder={'Last name'}></Input>

                <Text fontSize={'25px'}> Eslatma: Shaklning o'zi ko'rinmaydi. Shuni ham yodda tutingki, <br /> kiritish maydonining standart kengligi 20 belgidan iborat.</Text>
            </Box>
            <Divider mt={'20px'} />




            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> <span style={{color: 'red'}}>{`<label>`}</span>  Elementi</Heading>
                <Text fontSize={'20px'}> Yuqoridagi misolda <span style={{color: 'red'}}>{`<label>`}</span> elementidan foydalanishga e'tibor bering.</Text>
                <Text fontSize={'20px'}> <span style={{color: 'red'}}>{`<label>`}</span> elementi ekranni o'qiydigan foydalanuvchilar uchun foydalidir, chunki foydalanuvchi <br /> kirish elementiga e'tibor qaratganda ekran o'quvchi yorliqni baland ovozda o'qiydi.</Text>

                <Text fontSize={'20px'}> <span style={{color: 'red'}}>{`<label>`}</span> elementi juda kichik hududlarni (masalan, radio tugmalar yoki belgilash katakchalari) <br /> bosishda qiynalayotgan foydalanuvchilarga ham yordam beradi - chunki foydalanuvchi <span style={{color: 'red'}}>{`<label>`}</span> <br /> elementidagi matnni bosganda, radio tugma/tasdiqlash katagiga o'tadi.</Text>
                <Text fontSize={'20px'}> <span style={{color: 'red'}}>{`<label>`}</span> tegining for atributi ularni bir-biriga bog'lash uchun <span style={{color: 'red'}}>{`<input>`}</span> elementining id atributiga <br /> teng bo'lishi kerak.</Text>
            </Box>
            <Divider mt={'20px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Radio Buttonlari</Heading>
                <Text fontSize={'20px'}> <span style={{color: 'red'}}>{`<input type="radio">`}</span>  radio tugmani belgilaydi.</Text>
                <Text fontSize={'20px'}> Radio buttonlari foydalanuvchiga cheklangan miqdordagi tanlovdan BIRINChI tanlash imkonini beradi.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'550px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'25px'}>Matn uchun kiritish maydonlari bo'lgan shakl:</Text>
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
                <Text fontSize={'25px'}> Sevimli veb-tilingizni tanlang:</Text>
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
                <Heading fontSize={{base: '30px' , md: '50px'}}>Check boxlar</Heading>
                <Text fontSize={'20px'}> <span style={{color: 'red'}}>{` <input type="checkbox">`}</span>  belgilash katakchasini belgilaydi..</Text>
                <Text fontSize={'20px'}> Check boxlar foydalanuvchiga cheklangan miqdordagi tanlovdan 0 yoki <br /> KO'PROQ variantlarni tanlash imkonini beradi.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'550px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'25px'}>Check boxlar bo'lgan shakl:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<form`} </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>checkbox</span>
                        <span className='red'>id=</span> <span className='yellow'>"avtomobil 1"</span> <span className='red'>name=</span> <span className='yellow'>"avtomobil 1"</span>
                        <span className='red'>value=</span> <span className='yellow'>"Velli"</span>{`>`}
                        </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'>type=</span> <span className='yellow'>"radio"</span>{`>`} <span className='white'>Mening velosipedim bor</span> {`</label>`} {`<br>`}
                        </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"checkbox"</span>
                        <span className='red'>id=</span> <span className='yellow'>"avtomobil 2"</span> <span className='red'>name=</span> <span className='yellow'>"avtomobil 2"</span>
                        <span className='red'>value=</span> <span className='yellow'>"Moshina"</span>{`>`}
                        </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'>type=</span> <span className='yellow'>"radio"</span>{`>`} <span className='white'>Mening moshinam bor</span> {`</label>`} {`<br>`}
                        </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"checkbox"</span>
                        <span className='red'>id=</span> <span className='yellow'>"avtomobil 3" </span> <span className='red'>name=</span> <span className='yellow'>"avtomobil 3"</span>
                        <span className='red'>value=</span> <span className='yellow'>"Qayiq"</span>{`>`}
                        </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'>type=</span> <span className='yellow'>"radio"</span>{`>`} <span className='white'>Mening qayig’im  bor</span> {`</label>`} {`<br>`}
                        </Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</form`}</Text>
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
                <Heading fontSize={{base: '30px' , md: '50px'}}> Yuborish Buttoni</Heading>
                <Text fontSize={'25px'}> <span style={{color: 'red'}}>{` <input type="submit">`}</span> forma ma'lumotlarini forma ishlov beruvchisiga yuborish tugmachasini belgilaydi.</Text>
                <Text fontSize={'25px'}> Shakl ishlov beruvchisi odatda kirish ma'lumotlarini qayta ishlash uchun skriptga ega serverdagi fayldir.</Text>
                <Text fontSize={'25px'}> Shakl ishlovchisi shaklning active atributida ko'rsatilgan.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'550px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'25px'}>Yuborish buttoni bo'lgan shakl:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<form`} </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'> for=</span> <span className='yellow'>"fname"</span>{`>`} <span className='white'>First name:</span> {`</label>`} {`<br>`}
                        </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text" </span>
                        <span className='red'>id=</span> <span className='yellow'>"fname" </span> <span className='red'>name=</span> <span className='yellow'>"fname"</span>
                        <span className='red'>value=</span> <span className='yellow'>"John"</span>{`>`}
                        </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'> for=</span> <span className='yellow'>"fname"</span>{`>`} <span className='white'>Last name:</span> {`</label>`} {`<br>`}
                        </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text" </span>
                        <span className='red'>id=</span> <span className='yellow'>"fname" </span> <span className='red'>name=</span> <span className='yellow'>"fname"</span>
                        <span className='red'>value=</span> <span className='yellow'>"Doe"</span>{`>`}
                        </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"submit" </span>
                        <span className='red'>value=</span> <span className='yellow'>"Submit"</span>{`>`}
                        </Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</form`}</Text>
                    </Box>
                    

                    <CopyToClipboard text={`<form action="/action_page.php"><label for="fname">First name:</label><br><input type="text" id="fname" name="fname" value="John"><br><label for="lname">Last name:</label><br><input type="text" id="lname" name="lname" value="Doe"><br><br><input type="submit" value="Submit"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                    <Text fontSize={'25px'}>Yuqoridagi HTML kodi brauzerda shunday ko'rsatiladi:</Text>
                    <FormLabel>First name:</FormLabel>
                    <Input width={{base: '100%' , xl: '30%'}} bg={"white"} placeholder={'John'}></Input>
                    <FormLabel>Last name:</FormLabel>
                    <Input width={{base: '100%' , xl: '30%'}} bg={"white"} placeholder={'Doe'}></Input>
                    <Input width={{base: '100%' , xl: '7%'}} bg={"white"} color={'black'} value={'Submit'}></Input>
            </Box>
            <Divider mt={'20px'} />



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'80vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> <span className='red'>{`<input>`}</span> uchun Name Atributi</Heading>
                <Text fontSize={'25px'}> E'tibor bering, har bir kiritish maydonida yuboriladigan nom atributi bo'lishi kerak</Text>
                <Text fontSize={'25px'}>Agar <span className='red'>name </span> atributi qoldirilsa, kiritish maydonining qiymati umuman yuborilmaydi.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'450px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'25px'}>Ushbu misol <span className='red'>"Ism"</span> kiritish maydonining qiymatini kiritmaydi:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'200px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<form`} </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<label`} <span className='red'> for=</span> <span className='yellow'>"fname"</span>{`>`} <span className='white'>First name:</span> {`</label>`} {`<br>`}
                        </Text>
                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text" </span>
                        <span className='red'>id=</span> <span className='yellow'>"fname" </span> <span className='red'>name=</span> <span className='yellow'>"fname"</span>
                        <span className='red'>value=</span> <span className='yellow'>"John"</span>{`>`}
                        </Text>

                        <Text pl={'20px'} fontSize={'20px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"submit" </span>
                        <span className='red'>value=</span> <span className='yellow'>"Submit"</span>{`>`}
                        </Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</form`}</Text>
                    </Box>
                    

                    <CopyToClipboard text={`<form action="/action_page.php"><label for="fname">First name:</label><br><input type="text" id="fname" name="fname"value="John"><br><br><input type="submit" value="Submit"></form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
           
            
    </Box>
  )
}

export default Html14dars