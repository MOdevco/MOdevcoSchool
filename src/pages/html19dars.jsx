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
    ListItem,
   
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
  import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

const Html19dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Input form* Attributes</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '20vh' , md: '8vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>Ushbu bobda HTML <span className='red'> {`<input> `}</span> elementi uchun turli shakl* atributlari tasvirlangan.</Text>
            </Box>
            <Divider mt={'20px'} />


            {/* 1 */}
            
            
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  
              <Heading fontSize={{base: '30px' , md: '50px'}}>Form Attribute</Heading>
                <Text fontSize={'25px'}>Input form atributi <span className='red'> {`<input> `}</span> elementi tegishli bo'lgan shaklni belgilaydi. <br /> Bu atributning qiymati u tegishli bo'lgan <span className='red'> {`<form> `}</span> elementining id atributiga teng bo'lishi kerak.</Text>
                

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'480px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>HTML formasidan tashqarida joylashgan kiritish maydoni (lekin shaklning bir qismi):</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'250px'} bg={'#0A1624'} pt={'10px'}>
                      
                      <Text fontSize={'25px'} color={'#9D5EBB'}>{`<form`} <span className='red'>action=</span> <span className='yellow'>"/action_page.php"</span>   <span className='red'>id=</span> <span className='yellow'>"form1"</span> {`>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"fname"</span> {`>`}<span className='white'>First name:</span>{`</label>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>id=</span> <span className='yellow'>"fname"</span>  <span className='red'>name=</span> <span className='yellow'>"fname"</span> {`>`}{`</input>`} {`<br/>`} {`<br/>`}  </Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"submit"</span> <span className='red'>value=</span> <span className='yellow'>"Submit"</span> {`>`} {`</input>`} </Text>
                      <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>

                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"lname"</span> {`>`}<span className='white'>Last name:</span>{`</label>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>id=</span> <span className='yellow'>"lname"</span> <span className='red'>form=</span> <span className='yellow'>"form1"</span> {`>`}{`</input>`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`<form action= "/action_page.php" id= "form1" > <label for= "fname" >First name:</label> <input type= "text" id= "fname" name= "fname" ></input> <br/> <br/> <input type= "submit" value= "Submit" > </input> </form> <label for= "lname" >Last name:</label> <input type= "text" id= "lname" form= "form1" ></input>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
            
            


            {/* 2 */}
                    


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              
            <Heading fontSize={{base: '30px' , md: '50px'}}> Formaction Attribute</Heading>
                <Text fontSize={'25px'}>Input formation atributi forma yuborilganda kirishni qayta ishlovchi faylning URL manzilini belgilaydi. <br /> <span>Eslatma: Bu atribut <span className='red'>{`<form>`}</span> elementining harakat atributini bekor qiladi.</span> <br /> <span >Shakllanish atributi quyidagi kiritish turlari bilan ishlaydi: yuborish va tasvir.</span></Text>
                

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'480px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Har xil amallarga ega ikkita yuborish tugmasi boʻlgan HTML formasi:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'250px'} bg={'#0A1624'} pt={'0'}>
                      
                    <Text mt={'10px'} fontSize={'25px'} color={'#9D5EBB'}>{`<form`} <span className='red'>action=</span> <span className='yellow'>"/action_page.php"</span> {`>`}</Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"fname"</span> {`>`}<span className='white'>First name:</span>{`</label>`}</Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>id=</span> <span className='yellow'>"fname"</span> <span className='red'>name=</span> <span className='yellow'>"fname"</span> {`>`}{`</label>`} <span className='red'>{`<br/> <br/>`}</span></Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"lname"</span> {`>`}<span className='white'>Last name:</span>{`</label>`}</Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>id=</span> <span className='yellow'>"lname"</span> <span className='red'>name=</span> <span className='yellow'>"lname"</span> {`>`}{`</input>`} <span className='red'>{`<br/> <br/>`}</span></Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"submit"</span> <span className='red'>value=</span> <span className='yellow'>"Submit"</span> {`>`}{`</input>`} </Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"submit"</span> <span className='red'>formaction=</span> <span className='yellow'>"/action_page2.php"</span> <span className='red'>value=</span> <span className='yellow'>"Submit as Admin"</span> {`>`}{`</input>`} </Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`<form action= "/action_page.php" > <label for= "fname" >First name:</label> <label type= "text" id= "fname" name= "fname" ></label> <br/> <br/> <label for= "lname" >Last name:</label> <input type= "text" id= "lname" name="lname" ></input> <br/> <br/> <input type= "submit" value= "Submit" ></input> <input type= "submit" formaction= "/action_page2.php" value= "Submit as Admin" ></input> </form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            

            
            
                
                {/* 3 */}
                


              <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              <Heading fontSize={{base: '30px' , md: '50px'}}>Formenctype Attribute</Heading>
                <Text fontSize={'25px'}>Input formenctype atributi shakl ma'lumotlari yuborilganda qanday kodlanishi kerakligini belgilaydi <br /> (faqat <span className='red'>method=</span> <span className='yellow'>"post"</span> bilan shakllar uchun).<br /> <span>Eslatma: Bu atribut <span className='red'>{`<form>`}</span> elementining enctype atributini bekor qiladi.</span> <br /> <span >Shakllanish atributi quyidagi kiritish turlari bilan ishlaydi: yuborish va tasvir.</span></Text>
                        
                  
  
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'500px', base: '590px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Ikkita yuborish tugmasi bo'lgan shakl. Birinchisi forma ma'lumotlarini standart kodlash bilan yuboradi,<br /> ikkinchisi "ko'p qismli/forma-ma'lumotlar" sifatida kodlangan shakl-ma'lumotlarni yuboradi:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'250px'} bg={'#0A1624'} pt={'10px'}>
                        
                      <Text fontSize={'25px'} color={'#9D5EBB'}>{`<form`} <span className='red'>action=</span> <span className='yellow'>"/action_page_binary.asp"</span> {`>`}</Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"fname"</span> {`>`}<span className='white'>First name:</span>{`</label>`}</Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"submit"</span> <span className='red'>value=</span> <span className='yellow'>"Submit"</span> {`>`}{`</input>`} </Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"submit"</span> <span className='red'>formaction=</span> <span className='yellow'>"Multipart/form-data"</span> <span className='red'>value=</span> <span className='yellow'>"Submit as Multipart/form-data"</span> {`>`}{`</input>`} </Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                        
                          
                      </Box>
                      <CopyToClipboard text={`<form action= "/action_page_binary.asp" > <label for= "fname" >First name:</label> <input type= "submit" value= "Submit" ></input> <input type= "submit" formaction= "Multipart/form-data" value= "Submit as Multipart/form-data" ></input> </form>`} onCopy={handleClip} >
                          <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
              </Box>
            </Box>
            <Divider mt={'20px'} />


           
                 
                    

            {/* 4 */}

              <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                    <Heading fontSize={{base: '30px' , md: '50px'}}>Formmethod Attribute</Heading>
                      <Text fontSize={'25px'}>Eslatma: Input formmethod atributi amal URL manziliga forma ma'lumotlarini yuborish uchun HTTP usulini belgilaydi. <br />Eslatma: Bu atribut {`<form>`} elementining metod atributini bekor qiladi. <br /> Formmethod atributi quyidagi kiritish turlari bilan ishlaydi: yuborish va tasvir. <br /> Shakl-ma'lumotlar URL o'zgaruvchilari (<span className='red'>method=</span><span className='yellow'>"get"</span>) yoki HTTP post tranzaksiyasi (metod="post") sifatida yuborilishi mumkin.</Text>
                      <Text fontSize={'25px'} fontWeight={'400'}>"Get" usuli bo'yicha eslatmalar:</Text>
                      <Box fontSize={'20px'} pl={'50px'}>
                        <ul className='ul'>
                          <li>Ushbu usul forma ma'lumotlarini URL manziliga nom/qiymat juftliklarida qo'shadi</li>
                          <li>Bu usul foydalanuvchi natijani belgilamoqchi bo'lgan shakllarni yuborish uchun foydalidir</li>
                          <li>URL manziliga qancha maʼlumot joylashtirishingiz mumkin boʻlgan chegara mavjud (brauzerlar orasida <br /> farq qiladi), shuning uchun barcha shakl maʼlumotlari toʻgʻri uzatilishiga ishonchingiz komil emas.</li>
                          <li>Nozik ma'lumotlarni uzatish uchun hech qachon "olish" usulidan foydalanmang! (parol yoki boshqa <br /> maxfiy ma'lumotlar brauzerning manzil satrida ko'rinadi)</li>
                        </ul>
                      </Box>

                      <Text fontSize={'25px'} fontWeight={'400'}>"Post" usuli bo'yicha eslatmalar:</Text>
                      <Box fontSize={'20px'} pl={'50px'}>
                        <ul className='ul'>
                          <li>Ushbu usul forma ma'lumotlarini HTTP post tranzaksiyasi sifatida yuboradi</li>
                          <li>“Post” usuli bilan ariza topshirishni xatcho‘p qilib bo‘lmaydi</li>
                          <li>"Post" usuli "olish" dan ko'ra mustahkamroq va xavfsizroqdir va "post" o'lchamida cheklovlarga ega emas.</li>
                        </ul>
                      </Box>
                        
                  
  
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'510px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Ikkita yuborish tugmasi bo'lgan shakl. Birinchisi, forma ma' <span className='red'>method=</span> <span className='yellow'>"get"</span>  bilan yuboradi.br <br /> Ikkinchisi form-ma'lumotlarini method="post" bilan yuboradi:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'250px'} bg={'#0A1624'} pt={'10px'}>
                      <Text color={'#9D5EBB'} fontSize={'25px'}>{`<form>`} <span className='red'>action=</span> <span className='yellow'>"/action_page.php"</span> <span className='red'>method=</span> <span className='yellow'>"get"</span> </Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"fname"</span> {`>`}<span className='white'>First name:</span>{`</label>`}</Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span><span className='yellow'>"text"</span> <span className='red'>id=</span> <span className='yellow'>"fname"</span> <span className='red'>name=</span> <span className='yellow'>"fname"</span> {`>`}{`</input>`} <span className='red'>{`<br/> <br/>`}</span></Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"lname"</span> {`>`}<span className='white'>Last name:</span>{`</label>`}</Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>id=</span><span className='yellow'>"lname"</span> <span className='red'>name=</span><span className='yellow'>"lname"</span> {`>`}{`</label>`} <span className='red'>{`<br/> <br/>`}</span></Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"submit"</span> <span className='red'>value=</span> <span className='yellow'>"Submit using Get"</span> {`>`}{`</input>`} </Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span><span className='yellow'>"submit"</span> <span className='red'>formmethod=</span><span className='yellow'>"post"</span>   <span className='red'>value=</span><span className='yellow'>"Submit using Post"</span> {`>`}{`</input>`} </Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                        
                          
                      </Box>
                      <CopyToClipboard text={`<form> action= "/action_page.php" method= "get" <label for= "fname" >First name:</label> <input type="text" id= "fname" name="fname" ></input> <br/> <br/> <label for= "lname" >Last name:</label> <label type= "text" id="lname" name="lname" ></label> <br/> <br/> <input type= "submit" value= "Submit using Get" ></input> <input type="submit" formmethod="post" value="Submit using Post" ></input> </form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
              </Box>
            <Divider mt={'20px'} />


            
            {/* 5 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              
            <Heading fontSize={{base: '30px' , md: '50px'}}>Formtarget Attribute</Heading>
                <Text fontSize={'25px'}>Input formattarget atributi forma yuborilgandan so'ng olingan javobni qayerda ko'rsatishni <br /> ko'rsatadigan nom yoki kalit so'zni belgilaydi.<br /> </Text>
                <Text fontSize={'20px'}>Eslatma: Bu atribut <span className='red'>{`<form>`}</span> elementining maqsad atributini bekor qiladi.</Text>
                <Text fontSize={'20px'}>Formtarget atributi quyidagi kiritish turlari bilan ishlaydi: yuborish va tasvir.</Text>
                

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'480px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>HTML formasidan tashqarida joylashgan kiritish maydoni (lekin shaklning bir qismi):</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'250px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text mt={'10px'} fontSize={'25px'} color={'#9D5EBB'}>{`<form`} <span className='red'>action=</span> <span className='yellow'>"/action_page.php"</span> {`>`}</Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"fname"</span> {`>`}<span className='white'>First name:</span>{`</label>`}</Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>id=</span> <span className='yellow'>"fname"</span> <span className='red'>name=</span> <span className='yellow'>"fname"</span> {`>`}{`</label>`} <span className='red'>{`<br/> <br/>`}</span></Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"lname"</span> {`>`}<span className='white'>Last name:</span>{`</label>`}</Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>id=</span> <span className='yellow'>"lname"</span> <span className='red'>name=</span> <span className='yellow'>"lname"</span> {`>`}{`</input>`} <span className='red'>{`<br/> <br/>`}</span></Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"submit"</span> <span className='red'>value=</span> <span className='yellow'>"Submit"</span> {`>`}{`</input>`} </Text>
                        <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"submit"</span> <span className='red'>formtrget=</span> <span className='yellow'>"_blank"</span> <span className='red'>value=</span> <span className='yellow'>"Submit to a new window/tab"</span> {`>`}{`</input>`} </Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`<form action= "/action_page.php" > <label for= "fname" >First name:</label> <label type= "text" id= "fname" name= "fname" ></label> <br/> <br/> <label for= "lname" >Last name:</label> <input type= "text" id= "lname" name="lname" ></input> <br/> <br/> <input type= "submit" value= "Submit" ></input> <input type= "submit" formtrget= "_blank" value= "Submit to a new window/tab" ></input> </form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            


            {/* 6 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Formnovalidate Attribute</Heading>
                <Text fontSize={'20px'}>Input formnovalidate atributi <span className='red'>{`<input>`}</span> elementi yuborilganda tasdiqlanmasligi kerakligini bildiradi.</Text>
                <Text fontSize={'20px'}>Eslatma: Bu atribut <span className='red'>{`<form>`}</span> elementining novalidate atributini bekor qiladi.</Text>
                <Text fontSize={'20px'}>Formnovalidate atributi quyidagi kiritish turlari bilan ishlaydi: yuborish.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={{md:'550px', base: '590px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'25px'}>Ikkita yuborish tugmasi bo'lgan shakl (tasdiqlangan va tasdiqlanmagan):</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'300px'} bg={'#0A1624'} pt={'8px'}>
                    <Text fontSize={'25px'} color={'#9D5EBB'}>{`<form`} <span className='red'>action=</span> <span className='yellow'>"/action_page.php"</span> {`>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"email"</span> {`>`}<span className='white'>Enter Your Email</span>{`</label>`}</Text>

                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"email"</span> <span className='red'>id=</span> <span className='yellow'>"email"</span>  <span className='red'>name=</span> <span className='yellow'>"email"</span> {`>`}{`</input>`} <span className='red'>{`<br/>`} {`<br/>`}</span> </Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"submit"</span> <span className='red'>value=</span> <span className='yellow'>"Submit"</span> {`>`}{`</input>`} </Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"submit"</span> <span className='red'>formnovalidate=</span> <span className='yellow'>"formnovalidate"</span> <span className='red'>value=</span> <span className='yellow'>"Submit whithout validation"</span> {`>`}{`</input>`} </Text>
                      <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>

                      
                    </Box>
                    <CopyToClipboard text={`<form action= "/action_page.php" > <label for= "email" >Enter Your Email</label> <input type= "email" id= "email" name= "email" ></input> <br/> <br/> <input type= "submit" value= "Submit" ></input> <input type= "submit" formnovalidate= "formnovalidate" value= "Submit whithout validation" ></input> </form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
            
            



            {/* 7 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'70vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Novalidate Attribute</Heading>
                <Text fontSize={'20px'}>Novalidate atributi <span className='red'>{`<form>`}</span> atributidir.</Text>
                <Text fontSize={'20px'}>Agar mavjud bo'lsa, novalidate barcha shakl ma'lumotlari yuborilganda tasdiqlanmasligi kerakligini bildiradi.</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={{md:'470px',base:'550px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'25px'}>Taqdim etilganda hech qanday shakl ma'lumotlari tasdiqlanmasligi kerakligini belgilang:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'220px'} bg={'#0A1624'} pt={'10px'}>
                    <Text fontSize={'25px'} color={'#9D5EBB'}>{`<form`} <span className='red'>action=</span> <span className='yellow'>"/action_page.php"</span> {`>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"email"</span> {`>`}<span className='white'>Enter Your Email</span>{`</label>`}</Text>

                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"email"</span> <span className='red'>id=</span> <span className='yellow'>"email"</span>  <span className='red'>name=</span> <span className='yellow'>"email"</span> {`>`}{`</input>`} <span className='red'>{`<br/>`} {`<br/>`}</span>  </Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"submit"</span> <span className='red'>value=</span> <span className='yellow'>"Submit"</span> {`>`}{`</input>`} </Text>
                      <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                    </Box>
                    <CopyToClipboard text={`<form action= "/action_page.php" > <label for= "email" >Enter Your Email</label> <input type= "email" id= "email" name= "email" ></input> <br/> <br/> <input type= "submit" value= "Submit" ></input> </form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                
            </Box>
            <Divider mt={'20px'} />
            



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'10vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Form and Input Element lari</Heading>

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
                                        <Td>{`<form> `}</Td>
                                        <Td>Foydalanuvchi kiritish uchun HTML formasini belgilaydi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>{`<input> `}</Td>
                                        <Td>Kirish boshqaruvini belgilaydi</Td>
                                    </Tr>
                                </Tbody>
                                
                            </Table>
                        </TableContainer>
                    </Box>
            </Box>
            <Divider mt={'100px'} />



            
           
            
    </Box>
  )
}

export default Html19dars
