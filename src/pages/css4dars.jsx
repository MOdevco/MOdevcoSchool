import { Box , Flex , Heading , Button , Text , Image , Input , FormLabel, HStack, Radio, RadioGroup, OrderedList} from '@chakra-ui/react'
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
import SidebarCss from '../components/sidebarCss/sidebarCss'

const Css4dars = () => {
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
                <SidebarCss title={'HTML DARSLARI'} elementName={'Bosh sahifa'}/>
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
                    <Heading fontSize={{base: '30px' , md: '50px'}}>CSS-ni Qanday Qo'shish Kerak</Heading>
                </Box>
            </Box>
        </Flex>
        <Divider mt={'20px'} />


        <Box height={{base: '20vh' , md: '8vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
            <Text fontSize={'20px'}>Brauzer uslublar jadvalini o'qiganda, HTML hujjatni uslublar jadvalidagi ma'lumotlarga muvofiq formatlaydi.</Text>
        </Box>
        <Divider mt={'20px'} />


        {/* 1 */}
        
        
       
        
        <Box pl={{base: '20px' , md: '450px'}} display={'flex'}  flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'20vh'}>
              
          <Heading fontSize={{base: '30px' , md: '50px'}}>CSS-ni Kiritishning Uchta Usuli</Heading>
            <Text fontSize={'25px'}>CSS-ni kiritishning uchta usuli</Text>

            <UnorderedList fontSize={'20px'} pl={'20px'}>
                <ListItem>External CSS</ListItem>
                <ListItem>Internal CSS</ListItem>
                <ListItem>Inline CSS</ListItem>
            </UnorderedList>
        </Box>
        <Divider mt={'20px'} />
        
        


        {/* 2 */}
                


        <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
          
            <Heading fontSize={{base: '30px' , md: '50px'}}>External CSS</Heading>
            <Text fontSize={'25px'}>Tashqi uslublar jadvali yordamida siz faqat bitta faylni o'zgartirish orqali butun veb-sayt ko'rinishini o'zgartirishingiz mumkin!</Text>
            <Text fontSize={'25px'}>Har bir HTML sahifasi bosh qismidagi <span className='red'>{`<link>`}</span> elementi ichidagi tashqi uslublar jadvali fayliga havolani o'z ichiga olishi kerak.</Text>
            

            <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'430px', md: '620px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                <Heading>Misol</Heading>
                <Text fontSize={'20px'}>Tashqi uslublar HTML sahifasining <span className='red'> {`<link>`}</span> elementida, <span className='red'> {`<head>`}</span> boʻlimida aniqlanadi:</Text>
                <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'345px'} bg={'#0A1624'} pt={'10px'}>
                  
                <Text fontSize={'20px'} className='purple'>{`<!DOCTYPE`} <span className='red'>html</span>{`>`} </Text>
                <Text fontSize={'20px'}   className='purple'>{`<html>`} </Text>
                <Text fontSize={'20px'} pl={'20px'}  className='purple'>{`<head>`} </Text>
                <Text fontSize={'20px'} pl={'40px'} className='purple'>{`<link `} <span className='red'>rel=</span><span className='yellow'>"stylesheet"</span> <span className='red'>href=</span><span className='yellow'>"mystyle.css"</span>{`>`} </Text>
                <Text fontSize={'20px'} pl={'20px'}  className='purple'>{`</head>`} </Text>
                <Text fontSize={'20px'}  className='purple'>{`<body>`} </Text>
                <Text fontSize={'20px'} pl={'20px'} className='purple'>{`<h1>`} <span className='white'>Bu heading</span>{`</h1>`}  </Text>
                <Text fontSize={'20px'} pl={'20px'} className='purple'>{`<p>`} <span className='white'>Bu paragraf</span>{`</p>`}  </Text>
                <Text fontSize={'20px'}  className='purple'>{`</body>`} </Text>
                <Text fontSize={'20px'}   className='purple'>{`</html>`} </Text>
                </Box>

                <CopyToClipboard text={`<!DOCTYPE html><html><head><link rel="stylesheet" href="mystyle.css"></head><body><h1>This is a heading</h1><p>This is a paragraph.</p></body></html><!DOCTYPE html><html><head><link rel="stylesheet" href="mystyle.css"></head><body><h1>This is a heading</h1><p>This is a paragraph.</p></body></html>`} onCopy={handleClip} >
                    <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                </CopyToClipboard>
            </Box>

            <Text fontSize={'25px'}>Tashqi uslublar jadvali har qanday matn muharririda yozilishi mumkin va .css kengaytmasi bilan saqlanishi kerak.</Text>
            <Text fontSize={'25px'}>Tashqi .css faylida HTML teglar bo'lmasligi kerak.</Text>
            <Text fontSize={'25px'}><span className='red'>"mystyle.css"</span> fayli quyidagicha ko'rinadi:</Text>

            <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'430px', md: '500px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                <Heading>"mystyle.css"</Heading>
             
                <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'245px'} bg={'#0A1624'} pt={'10px'}>
                  
                    <Text fontSize={'20px'} className='purple'>{`body {`} </Text>
                    <Text fontSize={'20px'} pl={'20px'}  className='red'>{`background-color:`}<span className='yellow'> lightblue;</span> </Text>
                    <Text fontSize={'20px'} className='purple'>{`}`} </Text>
                    <Text fontSize={'20px'} className='purple'>{`h1 {`} </Text>
                    <Text fontSize={'20px'} pl={'20px'}  className='red'>{`color:`}<span className='yellow'> aqua;</span> </Text>
                    <Text fontSize={'20px'} pl={'20px'}  className='red'>{`margin-left: `}<span className='yellow'>20px;</span> </Text>
                    <Text fontSize={'20px'} className='purple'>{`}`} </Text>
                    

                </Box>

                <CopyToClipboard text={`body { background-color: lightblue;}h1 {color: navy;margin-left: 20px;}`} onCopy={handleClip} >
                    <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                </CopyToClipboard>
            </Box>

            <Text fontSize={'25px'}>Eslatma: Xususiyat qiymati (20) va birlik (px) o'rtasida bo'sh joy qo'shmang:</Text>
            <Text fontSize={'25px'}>Noto'g'ri (bo'shliq): <span className='red'>margin-left:</span><span className='yellow'>20  px;</span> </Text>
            <Text fontSize={'25px'}>NTo'g'ri (bo'sh joy yo'q): <span className='red'>margin-left: </span><span className='yellow'>20px;</span> </Text>
            
                    
        </Box>
        <Divider mt={'20px'} />

        

        
        
            
            {/* 3 */}

        <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
          
          <Heading fontSize={{base: '30px' , md: '50px'}}>Internal CSS</Heading>
          <Text fontSize={'25px'}>Agar bitta HTML sahifasi o'ziga xos uslubga ega bo'lsa, ichki uslublar jadvalidan foydalanish mumkin.</Text>
          <Text fontSize={'25px'}>Ichki uslub <span className='red'>{`<style>`}</span> elementi ichida, bosh qismi ichida aniqlanadi.</Text>
          

          <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'430px', md: '920px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
              <Heading>Misol</Heading>
              <Text fontSize={'20px'}>Ichki uslublar HTML sahifasining<span className='red'> {`<style>`}</span> elementida, <span className='red'> {`<head>`}</span> boʻlimida aniqlanadi:</Text>
              <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'645px'} bg={'#0A1624'} pt={'10px'}>
                
              <Text fontSize={'20px'} className='purple'>{`<!DOCTYPE`} <span className='red'>html</span>{`>`} </Text>
              <Text fontSize={'20px'} className='purple'>{`<html>`} </Text>
              <Text fontSize={'20px'} className='purple'>{`<head>`} </Text>
              <Text fontSize={'20px'} className='purple'>{`<link `} <span className='red'>rel=</span><span className='yellow'>"stylesheet"</span> <span className='red'>href=</span><span className='yellow'>"mystyle.css"</span>{`>`}  </Text>
              <Text fontSize={'20px'} className='purple'>{`<style>`} </Text>
              <Text fontSize={'20px'} className='purple'>{`body {`} </Text>
              <Text fontSize={'20px'} className='red'>{`background-color:`}<span className='yellow'> lightblue;</span> </Text>
              <Text fontSize={'20px'} className='purple'>{`}`} </Text>
              <Text fontSize={'20px'} className='purple'>{`h1 {`} </Text>
              <Text fontSize={'20px'} className='red'>{`color:`}<span className='yellow'> aqua;</span> </Text>
              <Text fontSize={'20px'} className='red'>{`margin-left: `}<span className='yellow'>20px;</span> </Text>
              <Text fontSize={'20px'} className='purple'>{`}`} </Text>
              <Text fontSize={'20px'} className='purple'>{`</style>`} </Text>

              <Text fontSize={'20px'} className='purple'>{`</head>`} </Text>
              <Text fontSize={'20px'} className='purple'>{`<body>`} </Text>
              <Text fontSize={'20px'} className='purple'>{`<h1>`} <span className='white'>Bu heading</span>{`</h1>`}  </Text>
              <Text fontSize={'20px'} className='purple'>{`<p>`} <span className='white'>Bu paragraf</span>{`</p>`}  </Text>
              <Text fontSize={'20px'} className='purple'>{`</body>`} </Text>
              <Text fontSize={'20px'} className='purple'>{`</html>`} </Text>
              </Box>

              <CopyToClipboard text={`<!DOCTYPE html><html><head><link rel="stylesheet" href="mystyle.css"></head><body><h1>This is a heading</h1><p>This is a paragraph.</p></body></html><!DOCTYPE html><html><head><link rel="stylesheet" href="mystyle.css"></head><body><h1>This is a heading</h1><p>This is a paragraph.</p></body></html>`} onCopy={handleClip} >
                  <Button bg={'#7FFFD4'}>Nusxa olish</Button>
              </CopyToClipboard>
          </Box>

                  
        </Box>
        <Divider mt={'20px'} />


        <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
          
          <Heading fontSize={{base: '30px' , md: '50px'}}>Inline CSS</Heading>
          <Text fontSize={'25px'}>Inline uslubi bitta element uchun noyob uslubni qo'llash uchun ishlatilishi mumkin.</Text>
          <Text fontSize={'25px'}>Inline uslublardan foydalanish uchun tegishli elementga uslub atributini qo'shing. <br /> Style atributi har qanday CSS xususiyatini o'z ichiga olishi mumkin.</Text>
          

          <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'430px', md: '520px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
              <Heading>Misol</Heading>
              <Text fontSize={'20px'}>Inline uslublari tegishli elementning "style" atributida aniqlanadi:</Text>
              <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'245px'} bg={'#0A1624'} pt={'10px'}>
                
              <Text fontSize={'20px'} className='purple'>{`<!DOCTYPE`} <span className='red'>html</span>{`>`} </Text>
              <Text fontSize={'20px'} className='purple'>{`<html>`} </Text>

              <Text fontSize={'20px'} className='purple'>{`<body>`} </Text>
              <Text fontSize={'20px'} className='purple'>{`<h1`} <span style={{color: '#00FFFF'}}>style="</span> <span className='red'>color:</span><span className='yellow'>blue;</span> <span className='red'>text-align:</span><span className='yellow'>center;</span> <span style={{color: '#00FFFF'}}>"</span>{`>`}   <span className='white'>Bu heading</span>{`</h1>`}  </Text>
              <Text fontSize={'20px'} className='purple'>{`<p`} <span style={{color: '#00FFFF'}}>style="</span> <span className='red'>color:</span> <span className='yellow'>red;</span> <span style={{color: '#00FFFF'}}>"</span> {`>`} <span className='white'>Bu paragraf</span> {`</p>`}  </Text>
              <Text fontSize={'20px'} className='purple'>{`</body>`} </Text>
              <Text fontSize={'20px'} className='purple'>{`</html>`} </Text>
              </Box>

              <CopyToClipboard text={`<!DOCTYPE html><html><body><h1 style="color:blue; text-align:center;">This is a heading</h1><p style="color:red;">This is a paragraph.</p>
            </body></html>`} onCopy={handleClip} >
                  <Button bg={'#7FFFD4'}>Nusxa olish</Button>
              </CopyToClipboard>
          </Box>
          <Text fontSize={'25px'}>Maslahat: Inline uslub uslublar jadvalining ko'pgina afzalliklarini yo'qotadi <br /> (tarkibni taqdimot bilan aralashtirish orqali). Ushbu usuldan tejamkorlik bilan foydalaning.</Text>

                  
        </Box>
        <Divider mt={'20px'} />


        <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
          
          <Heading fontSize={{base: '30px' , md: '50px'}}>Bir Nechta Uslublar Jadvallari</Heading>
          <Text fontSize={'25px'}>Agar turli uslublar jadvallarida bir xil selektor (element) uchun ba'zi <br /> xususiyatlar aniqlangan bo'lsa, oxirgi o'qilgan uslublar jadvalidagi qiymatdan foydalaniladi.</Text>

          <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'430px', md: '300px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
              <Text fontSize={'20px'}>Tasavvur qiling, tashqi uslublar jadvali <span className='red'>{`<h1>`}</span> elementi uchun quyidagi uslubga ega:</Text>

              <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                
                <Text fontSize={'20px'} className='purple'>{`h1 {`}  </Text>
                <Text fontSize={'20px'} pl={'20px'} className='red'>{` color: `} <span className='yellow'>navy;</span> </Text>
                <Text fontSize={'20px'} className='purple'>{`}`}  </Text>

              </Box>

              <CopyToClipboard text={`h1 { color: navy;}`} onCopy={handleClip} >
                  <Button bg={'#7FFFD4'}>Nusxa olish</Button>
              </CopyToClipboard>
          </Box>

          <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'430px', md: '300px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
              <Text fontSize={'20px'}>Keyin, ichki uslublar jadvalida <span className='red'>{`<h1>`}</span> elementi uchun quyidagi uslub ham mavjud deb faraz qiling:</Text>

              <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                
                <Text fontSize={'20px'} className='purple'>{`h1 {`}  </Text>
                <Text fontSize={'20px'} pl={'20px'} className='red'>{` color: `} <span className='yellow'>orange;</span> </Text>
                <Text fontSize={'20px'} className='purple'>{`}`}  </Text>

              </Box>

              <CopyToClipboard text={`h1 { color: orange;}`} onCopy={handleClip} >
                  <Button bg={'#7FFFD4'}>Nusxa olish</Button>
              </CopyToClipboard>
          </Box>


          <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'430px', md: '520px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
              <Heading>Misol</Heading>
              <Text fontSize={'20px'}>Agar ichki uslub tashqi uslublar jadvaliga havoladan keyin aniqlansa, <span className='red'>{`<h1>`}</span> elementlari "to'q sariq" bo'ladi:</Text>
              <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'270px'} bg={'#0A1624'} pt={'10px'}>

                <Text fontSize={'20px'} className='purple'>{`<head>`}</Text>
                <Text fontSize={'20px'} className='purple'>{`<link`} <span className='red'>rel=</span><span className='yellow'>"stylesheet"</span>
                <span className='red'>type=</span><span className='yellow'>"text/css"</span> <span className='red'>href=</span><span className='yellow'>"mystyle.css"</span>{`>`}
                </Text>
                <Text fontSize={'20px'} className='purple'>{`<style>`}</Text>
                <Text fontSize={'20px'} className='purple'>{`h1 {`}</Text>
                <Text fontSize={'20px'} className='red'>{`color:`} <span className='yellow'>orange;</span></Text>
                <Text fontSize={'20px'} className='purple'>{`}`}</Text>
                <Text fontSize={'20px'} className='purple'>{`</style>`}</Text>
                <Text fontSize={'20px'} className='purple'>{`</head>`}</Text>


              
              </Box>

              <CopyToClipboard text={`<head><link rel="stylesheet" type="text/css" href="mystyle.css"><style>h1 { color: orange;}</style></head>`} onCopy={handleClip} >
                  <Button bg={'#7FFFD4'}>Nusxa olish</Button>
              </CopyToClipboard>
          </Box>


          <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'430px', md: '520px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
              <Heading>Misol</Heading>
              <Text fontSize={'20px'}>Biroq, agar ichki uslub tashqi uslublar jadvaliga havoladan oldin aniqlangan bo'lsa, <span className='red'>{`<h1>`}</span> elementlari "dengiz" bo'ladi:</Text>
              <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'270px'} bg={'#0A1624'} pt={'10px'}>

                <Text fontSize={'20px'} className='purple'>{`<head>`}</Text>

                <Text fontSize={'20px'} className='purple'>{`<style>`}</Text>
                <Text fontSize={'20px'} className='purple'>{`h1 {`}</Text>
                <Text fontSize={'20px'} className='red'>{`color:`} <span className='yellow'>orange;</span></Text>
                <Text fontSize={'20px'} className='purple'>{`}`}</Text>
                <Text fontSize={'20px'} className='purple'>{`</style>`}</Text>
                <Text fontSize={'20px'} className='purple'>{`<link`} <span className='red'>rel=</span><span className='yellow'>"stylesheet"</span>
                <span className='red'>type=</span><span className='yellow'>"text/css"</span> <span className='red'>href=</span><span className='yellow'>"mystyle.css"</span> {`>    `}
                </Text>
                <Text fontSize={'20px'} className='purple'>{`</head>`}</Text>


              
              </Box>

              <CopyToClipboard text={`<head><style>h1 { color: orange;}</style><link rel="stylesheet" type="text/css" href="mystyle.css"></head>`} onCopy={handleClip} >
                  <Button bg={'#7FFFD4'}>Nusxa olish</Button>
              </CopyToClipboard>
          </Box>

                  
        </Box>
        <Divider mt={'20px'} />


        <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
          
            <Heading fontSize={{base: '30px' , md: '50px'}}>Cascading Order</Heading>
            <Text fontSize={'25px'}>HTML elementi uchun bir nechta uslublar belgilansa, qaysi uslub ishlatiladi?</Text>
            <Text fontSize={'25px'}>Sahifadagi barcha uslublar quyidagi qoidalarga ko'ra yangi "virtual" uslublar jadvaliga "kaskad" <br /> qiladi, bunda birinchi raqam eng yuqori ahamiyatga ega:</Text>
            <OrderedList fontSize={'20px'} pl={'20px'}>
                <ListItem>Inline uslub (HTML elementi ichida)</ListItem>
                <ListItem>External va internal uslublar jadvallari (bosh qismida)</ListItem>
                <ListItem>Browser default</ListItem>
            </OrderedList>
            <Text fontSize={'25px'}>Shunday qilib, inline uslub eng yuqori ustuvorlikka ega va tashqi va ichki uslublarni hamda <br /> brauzerning standart sozlamalarini bekor qiladi.</Text>
                  
        </Box>
            


    
    </Box>
        
    </Box>
  )
}

export default Css4dars