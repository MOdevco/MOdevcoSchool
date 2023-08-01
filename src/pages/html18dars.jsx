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

const Html18dars = () => {
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
                            <AccordionItenm  />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Input Attributelari</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '20vh' , md: '8vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>Ushbu bob HTML <span className='red'>{`<input>`}</span>  elementi uchun turli atributlarni tavsiflaydi.</Text>
            </Box>
            <Divider mt={'20px'} />


            {/* 1 */}
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  
              <Heading fontSize={{base: '30px' , md: '50px'}}>Value Attribute</Heading>
                <Text fontSize={'20px'}>Kirish qiymati atributi kirish maydoni uchun boshlang'ich qiymatni belgilaydi:</Text>
                

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'440px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'250px'} bg={'#0A1624'} pt={'9px'}>
                      
                      <Text fontSize={'25px'} color={'#9D5EBB'}>{`<form>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"fname"</span> {`>`}<span className='white'>First name:</span>{`</label>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>value=</span><span className='yellow'>"John"</span> <span className='red'>id=</span><span className='yellow'>"fname"</span> <span className='red'>name=</span> <span className='yellow'>"fname"</span> {`>`}{`</input>`} <span className='red'>{`<br/>`}</span> </Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"lname"</span> {`>`}<span className='white'>Last name:</span>{`</label>`} <span className='red'>{`<br/>`}</span></Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>value=</span><span className='yellow'>"Doe"</span> <span className='red'>id=</span><span className='yellow'>"lname"</span> <span className='red'>name=</span> <span className='yellow'>"lname"</span> {`>`}{`</input>`} </Text>
                      
                      <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                        
                    </Box>
                    <CopyToClipboard text={`<form> <label for= "fname" >First name:</label> <input type= "text" value="John" id="fname" name= "fname" ></input> <br/> <br/> <label for= "lname" >Last name:</label> <input type= "text" value="Doe" id="lname" name= "lname" ></input> <br/> <br/> </form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
            
            


            {/* 2 */}
                    


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              
            <Heading fontSize={{base: '30px' , md: '50px'}}>Faqat o'qish uchun atribut</Heading>
                <Text fontSize={'20px'}>Input only readonly atributi kiritish maydoni faqat o‘qish uchun ekanligini bildiradi.</Text>
                <Text fontSize={'20px'}>Faqat o'qish uchun kiritish maydonini o'zgartirib bo'lmaydi (lekin foydalanuvchi unga <br /> tegishi, uni ajratib ko'rsatishi va undan matnni nusxalashi mumkin).</Text>
                <Text fontSize={'20px'}>Shaklni yuborishda faqat o'qish uchun kiritish maydonining qiymati yuboriladi!</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'440px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'250px'} bg={'#0A1624'} pt={'8px'}>
                      
                    <Text fontSize={'25px'} color={'#9D5EBB'}>{`<form>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"fname"</span> {`>`}<span className='white'>First name:</span>{`</label>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>value=</span><span className='yellow'>"John"</span> <span className='red'>readonly</span> <span className='red'>id=</span><span className='yellow'>"fname"</span> <span className='red'>name=</span> <span className='yellow'>"fname"</span> {`>`}{`</input>`} <span className='red'>{`<br/>`}</span> </Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"lname"</span> {`>`}<span className='white'>Last name:</span>{`</label>`} <span className='red'>{`<br/>`}</span></Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>value=</span><span className='yellow'>"Doe"</span> <span className='red'>id=</span><span className='yellow'>"lname"</span> <span className='red'>name=</span> <span className='yellow'>"lname"</span> {`>`}{`</input>`} </Text>
                      
                      <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`<form> <label for= "fname" >First name:</label> <input type= "text" value="John" readonly id="fname" name= "fname" ></input> <br/> <label for= "lname" >Last name:</label> <br/> <input type= "text" value="Doe" id="lname" name= "lname" ></input> </form>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            

            

            
            
                
                {/* 3 */}
                


              <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              <Heading fontSize={{base: '30px' , md: '50px'}}>Disabled Attribute</Heading>
                <Text fontSize={'20px'}>Input disabled atributi kiritish maydonini o'chirib qo'yish kerakligini bildiradi.</Text>
                <Text fontSize={'20px'}>O'chirilgan kiritish maydonidan foydalanish mumkin emas va uni bosish mumkin emas.</Text>
                <Text fontSize={'20px'}>Shaklni yuborishda o'chirilgan kiritish maydonining qiymati yuborilmaydi!</Text>
                  
  
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={"440px"} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'250px'} bg={'#0A1624'} pt={'8px'}>
                        
                      <Text fontSize={'25px'} color={'#9D5EBB'}>{`<form>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"fname"</span> {`>`}<span className='white'>First name:</span>{`</label>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>value=</span><span className='yellow'>"John"</span> <span className='red'>disabled</span> <span className='red'>id=</span><span className='yellow'>"fname"</span> <span className='red'>name=</span> <span className='yellow'>"fname"</span> {`>`}{`</input>`} <span className='red'>{`<br/>`}</span> </Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"lname"</span> {`>`}<span className='white'>Last name:</span>{`</label>`} <span className='red'>{`<br/>`}</span></Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>value=</span><span className='yellow'>"Doe"</span> <span className='red'>id=</span><span className='yellow'>"lname"</span> <span className='red'>name=</span> <span className='yellow'>"lname"</span> {`>`}{`</input>`} </Text>
                      
                      <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                        
                          
                      </Box>
                      <CopyToClipboard text={`<form> <label for="fname" >First name:</label> <input type="text" value="John" disabled id="fname"    name="fname" ></input> <br/> <label for="lname" >Last name:</label> <br/> <input type="text" value="Doe" id="lname" name="lname" ></input> </form>`} onCopy={handleClip} >
                      <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
              </Box>
            </Box>
            <Divider mt={'20px'} />
            

           
                 
                    

            {/* 4 */}

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              <Heading fontSize={{base: '30px' , md: '50px'}}>Size Attribute</Heading>
                <Text fontSize={'20px'}>Kirish hajmi atributi kirish maydonining belgilar bilan ko'rinadigan kengligini belgilaydi.</Text>
                <Text fontSize={'20px'}>Hajmi uchun standart qiymat 20 dir.</Text>
                <Text fontSize={'20px'}>Eslatma: Size atributi quyidagi kiritish turlari bilan ishlaydi: matn, qidiruv, tel, url, elektron pochta va parol.</Text>
                  
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={"440px"} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'250px'} bg={'#0A1624'} pt={'8px'}>
                        
                      <Text fontSize={'25px'} color={'#9D5EBB'}>{`<form>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"fname"</span> {`>`}<span className='white'>First name:</span>{`</label>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>value=</span><span className='yellow'>"John"</span> <span className='red'>disabled</span> <span className='red'>id=</span><span className='yellow'>"fname"</span> <span className='red'>name=</span> <span className='yellow'>"fname"</span> <span className='red'>size=</span><span className='yellow'>"50"</span> {`>`}{`</input>`} <span className='red'>{`<br/>`}</span> </Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"pin"</span> {`>`}<span className='white'>PIN:</span>{`</label>`} <span className='red'>{`<br/>`}</span></Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>id=</span><span className='yellow'>"pin"</span> <span className='red'>name=</span> <span className='yellow'>"pin"</span> <span className='red'>size=</span><span className='yellow'>"4"</span> {`>`}{`</input>`} </Text>
                      
                      <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                        
                          
                      </Box>
                      <CopyToClipboard text={`<form> <label for= "fname" >First name:</label> <input type= "text" value="John" disabled id="fname" name= "fname" size="50" ></input> <br/> <label for= "pin" >PIN:</label> <br/> <input type= "text" id="pin" name= "pin" size="4" ></input> </form>`} onCopy={handleClip} >
                      <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
              </Box>
            <Divider mt={'20px'} />

            
            
            {/* 5 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              <Heading fontSize={{base: '30px' , md: '50px'}}>Maxlength Attribute</Heading>
                <Text fontSize={'20px'}>Input maxlength atributi kiritish maydonida ruxsat etilgan belgilarning maksimal sonini belgilaydi.</Text>
                <Text fontSize={'20px'}>Eslatma: Maksimal uzunlik o'rnatilganda, kiritish maydoni belgilangan belgilar sonidan ko'pini qabul <br /> qilmaydi. Biroq, bu atribut hech qanday fikr bildirmaydi. Shunday qilib, agar siz foydalanuvchini <br /> ogohlantirmoqchi bo'lsangiz, JavaScript kodini yozishingiz kerak.</Text>
                  
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={"480px"} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Kirish maydoni uchun maksimal uzunlikni o'rnating:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'250px'} bg={'#0A1624'} pt={'8px'}>
                        
                      <Text fontSize={'25px'} color={'#9D5EBB'}>{`<form>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"fname"</span> {`>`}<span className='white'>First name:</span>{`</label>`}<span className='red'>{`<br/>`}</span></Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>value=</span><span className='yellow'>"John"</span> <span className='red'>disabled</span> <span className='red'>id=</span><span className='yellow'>"fname"</span> <span className='red'>name=</span> <span className='yellow'>"fname"</span> <span className='red'>size=</span><span className='yellow'>"50"</span> {`>`}{`</input>`} <span className='red'>{`<br/>`}</span> </Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"pin"</span> {`>`}<span className='white'>PIN:</span>{`</label>`} <span className='red'>{`<br/>`}</span></Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>id=</span><span className='yellow'>"pin"</span> <span className='red'>name=</span> <span className='yellow'>"pin"</span> <span className='red'>maxlength=</span><span className='yellow'>"4"</span> <span className='red'>size=</span><span className='yellow'>"4"</span> {`>`}{`</input>`} </Text>
                      
                      <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                        
                          
                      </Box>
                      <CopyToClipboard text={`<form> <label for= "fname" >First name:</label><br/> <input type= "text" value="John" disabled id="fname" name= "fname" size="50" ></input> <br/> <label for= "pin" >PIN:</label> <br/> <input type= "text" id="pin" name= "pin" maxlength="4" size="4" ></input> </form>`} onCopy={handleClip} >
                      <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
              </Box>
            <Divider mt={'20px'} />
            

            


            {/* 6 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              <Heading fontSize={{base: '30px' , md: '50px'}}>Minimal va Maksimal Atributlar</Heading>
                <Text fontSize={'20px'}>Kirish min va max atributlari kiritish maydoni uchun minimal va maksimal qiymatlarni belgilaydi.</Text>
                <Text fontSize={'20px'}>Min va max atributlari quyidagi kiritish turlari bilan ishlaydi: raqam, diapazon, sana, sana-mahalliy, <br /> oy, vaqt va hafta.</Text>
                <Text>Maslahat: Bir qator qonuniy qiymatlarni yaratish uchun maksimal va min atributlaridan birgalikda foydalaning.</Text>
                  
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={"480px"} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Maksimal sana, minimal sana va bir qator qonuniy qiymatlarni belgilang:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'250px'} bg={'#0A1624'} pt={'8px'}>
                        
                      <Text fontSize={'25px'} color={'#9D5EBB'}>{`<form>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"datemax"</span> {`>`}<span className='white'>Enter a date before 1980-01-01:</span>{`</label>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"date"</span> <span className='red'>id=</span><span className='yellow'>"datemax"</span>  <span className='red'>name=</span> <span className='yellow'>"datemax"</span> <span className='red'>max=</span><span className='yellow'>"1979-12-31"</span> {`>`}{`</input>`} <span className='red'>{`<br/> <br/>`}</span> </Text><br />

                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span><span className='yellow'>"datemin"</span> {`>`}<span className='white'>Enter a date after 2000-01-01:</span>{`</label>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span><span className='yellow'>"date"</span> <span className='red'>id=</span><span className='yellow'>"datemin"</span>  <span className='red'>name=</span><span className='yellow'>"datemin"</span><span className='red'>min=</span><span className='yellow'>"2000-01-02"</span> {`>`}{`</input>`} <span className='red'>{`<br/> <br/>`}</span> </Text><br />

                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span><span className='yellow'>"quantity"</span> {`>`}<span className='white'>Quantity (between 1 and 5):</span>{`</label>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span><span className='yellow'>"number"</span> <span className='red'>id=</span><span className='yellow'>"quantity"</span>  <span className='red'>name=</span><span className='yellow'>"quantity"</span> <span className='red'>min=</span><span className='yellow'>"1"</span> <span className='red'>max=</span><span className='yellow'>"5"</span> {`>`}{`</input>`} </Text>
                      
                      
                      <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                        
                          
                      </Box>
                      <CopyToClipboard text={`<form> <label for="datemax" >Enter a date before 1980-01-01:</label> <input type= "date" id="datemax" name= "datemax" max="1979-12-31" ></input> <br/> <br/> <label for="datemin" >Enter a date after 2000-01-01:</label> <input type= "date" id="datemin" name= "datemin" min="2000-01-02" ></input> <br/> <br/> <label for="quantity" >Quantity (between 1 and 5):</label> <input type= "number" id="quantity" name= "quantity" min="1" max="5" ></input> </form>`} onCopy={handleClip} >
                      <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
              </Box>
            <Divider mt={'20px'} />
            
            
            



            {/* 7 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              <Heading fontSize={{base: '30px' , md: '50px'}}>Multiple Attribute</Heading>
                <Text fontSize={'20px'}>Input multiple atributi foydalanuvchiga kirish maydoniga bir nechta qiymat kiritishga ruxsat berishini bildiradi.</Text>
                <Text fontSize={'20px'}>Bir nechta atribut quyidagi kiritish turlari bilan ishlaydi: elektron pochta va fayl.</Text>                  
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={"430px"} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Bir nechta qiymatlarni qabul qiladigan fayl yuklash maydoni:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'200px'} bg={'#0A1624'} pt={'20px'}>
                        
                      <Text fontSize={'25px'} color={'#9D5EBB'}>{`<form>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"files"</span> {`>`}<span className='white'>Select files: </span>{`</label>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"file"</span> <span className='red'>id=</span><span className='yellow'>"files"</span>  <span className='red'>name=</span> <span className='yellow'>"files"</span>{`>`}{`</input>`}</Text>
                      
                      <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                        
                          
                      </Box>
                      <CopyToClipboard text={`<form> <label for="datemax" >Enter a date before 1980-01-01:</label> <input type= "date" id="datemax" name= "datemax" max="1979-12-31" ></input> <br/> <br/> <label for="datemin" >Enter a date after 2000-01-01:</label> <input type= "date" id="datemin" name= "datemin" min="2000-01-02" ></input> <br/> <br/> <label for="quantity" >Quantity (between 1 and 5):</label> <input type= "number" id="quantity" name= "quantity" min="1" max="5" ></input> </form>`} onCopy={handleClip} >
                      <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
              </Box>
            <Divider mt={'20px'} />

            {/* 8 */}

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              <Heading fontSize={{base: '30px' , md: '50px'}}>Multiple Attribute</Heading>
                <Text fontSize={'20px'}>Input multiple atributi foydalanuvchiga kirish maydoniga bir nechta qiymat kiritishga ruxsat berishini bildiradi.</Text>
                <Text fontSize={'20px'}>Bir nechta atribut quyidagi kiritish turlari bilan ishlaydi: elektron pochta va fayl.</Text>                  
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={"460px"} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Bir nechta qiymatlarni qabul qiladigan fayl yuklash maydoni:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'220px'} bg={'#0A1624'} pt={'13px'}>
                        
                      <Text fontSize={'25px'} color={'#9D5EBB'}>{`<form>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"country_code"</span> {`>`}<span className='white'>Country code</span>{`</label>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>id=</span><span className='yellow'>"country_code"</span> <span className='red'>name=</span> <span className='yellow'>"country_code"</span> <span className='red'>pattern=</span> <span className='yellow'>"[A-Za-z]{3}"</span> <span className='red'>title=</span> <span className='yellow'>"Three letter country code"</span> {`>`}{`</input>`}</Text>
                      
                      <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                        
                          
                      </Box>
                      <CopyToClipboard text={`<form> <label for= "country_code" >Country code</label> <input type= "text" id="country_code" name= "country_code" pattern= "[A-Za-z]3" title= "Three letter country code" ></input> </form>`} onCopy={handleClip} >
                      <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
              </Box>
              <Divider mt={'20px'} />


              {/* 9 */}
              <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              <Heading fontSize={{base: '30px' , md: '50px'}}>Placeholder Attribute</Heading>
                <Text fontSize={'20px'}>Input placeholder atributi kiritish maydonining kutilayotgan qiymatini tavsiflovchi qisqa maslahatni <br />bildiradi (namuna qiymati yoki kutilgan formatning qisqa tavsifi).</Text>
                <Text fontSize={'20px'}>Qisqa ko'rsatma foydalanuvchi qiymat kiritishdan oldin kirish maydonida ko'rsatiladi.</Text>                  
                <Text fontSize={'20px'}>To'ldiruvchi atributi quyidagi kiritish turlari bilan ishlaydi: matn, qidiruv, url, tel, elektron pochta va parol.</Text>
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={"460px"} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>To'ldiruvchi matnli kiritish maydoni:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'220px'} bg={'#0A1624'} pt={'13px'}>
                        
                      <Text fontSize={'25px'} color={'#9D5EBB'}>{`<form>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"phone"</span> {`>`}<span className='white'>Enter a phone number:</span>{`</label>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"tel"</span> <span className='red'>id=</span><span className='yellow'>"phone"</span> <span className='red'>name=</span> <span className='yellow'>"phone"</span>  <span className='red'>placeholder=</span> <span className='yellow'>"123-45-678"</span> <span className='red'>pattern=</span> <span className='yellow'>"[0-9]{3}-[0-9]{2}-[0-9]{3}"</span>{`>`}{`</input>`}</Text>
                      
                      <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                        
                          
                      </Box>
                      <CopyToClipboard text={`<form> <label for= "phone" >Enter a phone number:</label> <input type= "tel" id="phone" name= "phone" placeholder= "123-45-678" pattern= "[0-9]3-[0-9]2-[0-9]3"></input> </form>`} onCopy={handleClip} >
                      <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
              </Box>
              <Divider mt={'20px'} />


              {/* 10 */}
              <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              <Heading fontSize={{base: '30px' , md: '50px'}}>Required Attribute</Heading>
                <Text fontSize={'20px'}>Kirish talab qilinadigan atribut shaklni yuborishdan oldin kiritish maydonini to'ldirish kerakligini bildiradi.</Text>
                <Text fontSize={'20px'}>Qisqa ko'rsatma foydalanuvchi qiymat kiritishdan oldin kirish maydonida ko'rsatiladi.</Text>                  
                <Text fontSize={'20px'}>Kerakli atribut quyidagi kiritish turlari bilan ishlaydi: matn, qidiruv, url, tel, elektron pochta, parol, sana <br /> tanlash, raqam, tasdiqlash qutisi, radio va fayl.</Text>
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={"430px"} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Bir nechta qiymatlarni qabul qiladigan fayl yuklash maydoni:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'190px'} bg={'#0A1624'} pt={'15px'}>
                        
                      <Text fontSize={'25px'} color={'#9D5EBB'}>{`<form>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"phone"</span> {`>`}<span className='white'>Username:</span>{`</label>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>id=</span><span className='yellow'>"username"</span> <span className='red'>name=</span> <span className='yellow'>"username"</span> <span className='red'>required</span> {`>`}{`</input>`}</Text>
                      
                      <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                        
                          
                      </Box>
                      <CopyToClipboard text={`<form> <label for= "phone" >Username:</label> <input type= "text" id="username" name= "username" required ></input> </form>`} onCopy={handleClip} >
                      <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
              </Box>
              <Divider mt={'20px'} />  



              {/* 11 */}
              <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              <Heading fontSize={{base: '30px' , md: '50px'}}>Step Attribute</Heading>
                <Text fontSize={'20px'}>Kirish qadami atributi kiritish maydoni uchun qonuniy raqamlar oralig'ini belgilaydi.</Text>
                <Text fontSize={'20px'}>Misol: agar step="3" bo'lsa, qonuniy raqamlar -3, 0, 3, 6 va hokazo bo'lishi mumkin.</Text>                
                <Text fontSize={'20px'}>Maslahat: Bu atributdan maksimal va min atributlari bilan birgalikda bir qator qonuniy qiymatlarni yaratish uchun foydalanish mumkin.</Text>  
                <Text>Step atributi quyidagi kiritish turlari bilan ishlaydi: raqam, diapazon, sana, sana-mahalliy, oy, vaqt va hafta.</Text>
                <Text fontSize={'20px'}>Kerakli atribut quyidagi kiritish turlari bilan ishlaydi: matn, qidiruv, url, tel, elektron pochta, parol, sana <br /> tanlash, raqam, tasdiqlash qutisi, radio va fayl.</Text>
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={"420px"} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Belgilangan qonuniy raqamlar oralig'iga ega kirish maydoni:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'180px'} bg={'#0A1624'} pt={'12px'}>
                      <Text fontSize={'25px'} color={'#9D5EBB'}>{`<form>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"points"</span> {`>`}<span className='white'>Points:</span>{`</label>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"number"</span> <span className='red'>id=</span><span className='yellow'>"points"</span> <span className='red'>name=</span> <span className='yellow'>"points"</span> <span className='red'>step=</span> <span className='yellow'>"3"</span>{`>`}{`</input>`}</Text>
                      
                      <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                        
                          
                      </Box>
                      <CopyToClipboard text={`<form> <label for="points" >Points:</label> <input type="number" id="points" name="points" step="3"></input> </form>`} onCopy={handleClip} >
                      <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
              </Box>
              <Divider mt={'20px'} />  


              {/* 12 */}
              <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              <Heading fontSize={{base: '30px' , md: '50px'}}>Autofocus Attribute</Heading>
                <Text fontSize={'20px'}>Kirish avtofokus atributi sahifa yuklanganda kirish maydoni avtomatik ravishda fokuslanishi kerakligini bildiradi.</Text>
                <Text fontSize={'20px'}>Step atributi quyidagi kiritish turlari bilan ishlaydi: raqam, diapazon, sana, sana-mahalliy, oy, vaqt va hafta.</Text>
                <Text fontSize={'20px'}>Kerakli atribut quyidagi kiritish turlari bilan ishlaydi: matn, qidiruv, url, tel, elektron pochta, parol, sana <br /> tanlash, raqam, tasdiqlash qutisi, radio va fayl.</Text>
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={"490px"} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Sahifa yuklanganda <span className='red'>"Ism"</span> kiritish maydoniga diqqat markazida bo'lishiga ruxsat bering:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'250px'} bg={'#0A1624'} pt={'10px'}>
                      <Text fontSize={'25px'} color={'#9D5EBB'}>{`<form>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"fname"</span>{`>`}<span className='white'>First name:</span>{`</label>`} <span className='red'>{`<br/>`}</span></Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>id=</span><span className='yellow'>"fname"</span> <span className='red'>name=</span> <span className='yellow'>"fname"</span> <span className='red'>autofocus</span>{`>`}{`</input>`} <span className='red'>{`<br/>`}</span></Text>

                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"lname"</span> {`>`}<span className='white'>Last name:</span>{`</label>`} <span className='red'>{`<br/>`}</span></Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>id=</span><span className='yellow'>"lname"</span> <span className='red'>name=</span> <span className='yellow'>"lname"</span> {`>`}{`</input>`}</Text>
                      
                      <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                        
                          
                      </Box>
                      <CopyToClipboard text={` <form> <label for="fname">First name:</label> <br/> <input type="text" id="fname" name="fname" autofocus></input> <br/> <label for="lname" >Last name:</label> <br/> <input type="text" id="lname" name="lname" ></input> </form>`} onCopy={handleClip} >
                      <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
              </Box>
              <Divider mt={'20px'} />   




                {/* 13 */}
              <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              <Heading fontSize={{base: '30px' , md: '50px'}}>Height and Width Attributeslari</Heading>
                <Text fontSize={'20px'}>Kirish balandligi va kengligi atributlari <span className='purple'>{`<input`}</span><span className='red'>type=</span> <span className='yellow'>"image"</span> <span className='purple'>{`>`}</span> elementining balandligi va kengligini belgilaydi.</Text>
                <Text fontSize={'20px'}>Maslahat: Har doim tasvirlar uchun balandlik va kenglik atributlarini belgilang. Agar balandlik va kenglik <br /> o'rnatilgan bo'lsa, sahifa yuklanganda rasm uchun zarur bo'sh joy ajratiladi. Ushbu atributlarsiz brauzer <br /> tasvir hajmini bilmaydi va unga tegishli joy ajrata olmaydi. Buning ta'siri shundaki, yuklash paytida sahifa <br /> tartibi o'zgaradi (tasvirlar yuklanganda).</Text>
                
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={"520px"} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Tasvirni balandlik va kenglik atributlari bilan yuborish tugmasi sifatida belgilang:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'290px'} bg={'#0A1624'} pt={'10px'}>
                      <Text fontSize={'25px'} color={'#9D5EBB'}>{`<form>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"fname"</span>{`>`}<span className='white'>First name:</span>{`</label>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>id=</span><span className='yellow'>"fname"</span> <span className='red'>name=</span> <span className='yellow'>"fname"</span>{`>`}{`</input>`} <span className='red'>{`<br/> <br/>`}</span></Text>

                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"lname"</span> {`>`}<span className='white'>Last name:</span>{`</label>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"text"</span> <span className='red'>id=</span><span className='yellow'>"lname"</span> <span className='red'>name=</span> <span className='yellow'>"lname"</span>  {`>`}{`</input>`}<span className='red'>{`<br/> <br/>`}</span></Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span> <span className='yellow'>"image"</span> <span className='red'>src=</span><span className='yellow'>"img_submit_gif"</span> <span className='red'>alt=</span><span className='purple'>"Submit"</span> <span className='red'>width=</span> <span className='purple'>"48"</span> <span className='red'>height=</span> <span className='purple'>"48"</span>{`>`}{`</input>`}</Text>

                      
                      <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                        
                          
                      </Box>
                      <CopyToClipboard text={`<form> <label for="fname">First name:</label> <input type="text" id="fname" name="fname"></input> <br/> <br/> <label for="lname" >Last name:</label> <input type="text" id="lname" name="lname" ></input><br/> <br/> <input type="image" src="img_submit_gif" alt="Submit" width="48" height="48"></input> </form>`} onCopy={handleClip} >
                      <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
              </Box>
              <Divider mt={'20px'} />  


                {/* 14 */}
              <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              <Heading fontSize={{base: '30px' , md: '50px'}}>List Attribute</Heading>
                <Text fontSize={'20px'}>Kirish ro'yxati atributi <span className='red'>{`<input>`}</span>elementi uchun oldindan belgilangan variantlarni o'z ichiga olgan <span className='red'>{`<datalist>`}</span>elementiga ishora qiladi.</Text>
                
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={"610px"} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Tasvirni balandlik va kenglik atributlari bilan yuborish tugmasi sifatida belgilang:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'400px'} bg={'#0A1624'} pt={'9px'}>
                      <Text fontSize={'25px'} color={'#9D5EBB'}>{`<form>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>list=</span><span className='yellow'>"browsers"</span>{`>`}{`</input>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<datalist`} <span className='red'>id=</span><span className='yellow'>"browsers"</span>{`>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<option`} <span className='red'>value=</span><span className='yellow'>"Internet Explorer"</span>{`>`}{`</option>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<option`} <span className='red'>value=</span><span className='yellow'>"Firefox"</span>{`>`}{`</option>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<option`} <span className='red'>value=</span><span className='yellow'>"Chrome"</span>{`>`}{`</option>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<option`} <span className='red'>value=</span><span className='yellow'>"Opera"</span>{`>`}{`</option>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<option`} <span className='red'>value=</span><span className='yellow'>"Safari"</span>{`>`}{`</option>`} <br /> {`</datalist>`}</Text>
                      
                      <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                        
                          
                      </Box>
                      <CopyToClipboard text={`<form> <input list="browsers"></input> <datalist id="browsers"> <option value="Internet Explorer"></option> <option value="Firefox"></option> <option value="Chrome"></option> <option value="Opera"></option> <option value="Safari"></option></datalist> </form> `} onCopy={handleClip} >
                      <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
              </Box>
              <Divider mt={'20px'} />      
               


               {/* 15 */}
              <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              <Heading fontSize={{base: '30px' , md: '50px'}}>Autocomplete Attribute</Heading>
                <Text fontSize={'20px'}>Input autocomplete atributi shakl yoki kiritish maydonida avtomatik toʻldirishni yoqish yoki <br /> oʻchirish kerakligini belgilaydi.</Text>
                <Text fontSize={'20px'}>Avtomatik to'ldirish brauzerga qiymatni taxmin qilish imkonini beradi. Agar foydalanuvchi maydonga yozishni <br /> boshlaganida, brauzer oldingi kiritilgan qiymatlar asosida maydonni to'ldirish variantlarini ko'rsatishi kerak.</Text>
                <Text fontSize={'20px'}>Kerakli atribut quyidagi kiritish turlari bilan ishlaydi: matn, qidiruv, url, tel, elektron pochta, parol, sana <br /> tanlash, raqam, tasdiqlash qutisi, radio va fayl.</Text>
                <Text>Avtomatik toʻldirish atributi <span className='red'>{`<form>`}</span> va quyidagi <span className='red'>{`<input>`}</span> turlari bilan ishlaydi: matn, qidiruv, url, <br /> tel, elektron pochta, parol, sana tanlash, diapazon va rang.</Text>
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={"580px"} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Bitta kiritish maydoni uchun avtomatik toʻldirish yoqilgan va oʻchirilgan HTML formasi:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'370px'} bg={'#0A1624'} pt={'10px'}>
                      <Text fontSize={'25px'} color={'#9D5EBB'}>{`<form`} <span className='red'>action=</span><span className='yellow'>"/action_page.php"</span> <span className='red'>autocomplete=</span><span className='yellow'>"on"</span>{`>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"fname"</span>{`>`}<span className='white'>First name:</span>{`</label>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span><span className='yellow'>"text"</span> <span className='red'>id=</span><span className='yellow'>"fname"</span> <span className='red'>name=</span><span className='yellow'>"fname"</span>{`>`}{`</input>`} <span className='red'>{`<br/> <br/>`}</span></Text>

                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"lname"</span> {`>`}<span className='white'>Last name:</span>{`</label>`}</Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span><span className='yellow'>"text"</span> <span className='red'>id=</span><span className='yellow'>"lname"</span> <span className='red'>name=</span><span className='yellow'>"lname"</span> {`>`}{`</input>`} <span className='red'>{`<br/> <br/>`}</span></Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<label`} <span className='red'>for=</span> <span className='yellow'>"email"</span> {`>`}<span className='white'>Email:</span>{`</label>`} <span className='red'>{`<br/>`}</span></Text>
                      <Text pl={'20px'} fontSize={'25px'} color={'#9D5EBB'}>{`<input`} <span className='red'>type=</span><span className='yellow'>"email"</span> <span className='red'>id=</span><span className='yellow'>"email"</span> <span className='red'>name=</span><span className='yellow'>"email"</span> <span className='red'>autocomplete=</span><span className='yellow'>"off"</span> {`>`}{`</input>`}<span className='red'>{`<br/> <br/>`}</span></Text>
                      <Text pl={'20px'} fontSize={'25px'} className='purple'>{`<input`} <span className='red'>type=</span><span className='yellow'>"submit"</span> <span className='red'>value=</span><span className='yellow'>"Submit"</span>{`>`}{`</input>`}</Text>
                      
                      <Text color={'#9D5EBB'} fontSize={'25px'}>{`</form>`}</Text>
                        
                          
                      </Box>
                      <CopyToClipboard text={`<form action="/action_page.php" autocomplete="on"> <label for= "fname">First name:</label> <input type="text" id="fname" name="fname"></input> <br/> <br/> <label for= "lname" >Last name:</label> <input type="text" id="lname" name="lname" ></input> <br/> <br/> <label for= "email" >Email:</label> <br/> <input type="email" id="email" name="email" autocomplete="off" ></input><br/> <br/> <input type="submit" value="Submit"></input> </form>`} onCopy={handleClip} >
                      <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
                  <Text fontSize={'20px'}>Maslahat: Ba'zi brauzerlarda buning ishlashi uchun siz avtomatik to'ldirish funksiyasini faollashtirishingiz <br /> kerak bo'lishi mumkin (brauzer menyusidagi "Sozlamalar" bo'limiga qarang).</Text>
              </Box>
              <Divider mt={'20px'} /> 
              
              
                   
            


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'10vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Form va Input Elementlari</Heading>

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

export default Html18dars
