import { Box , Flex , Heading , Button , Text , Image , Input , FormLabel, HStack, Radio, RadioGroup} from '@chakra-ui/react'
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

const Css3dars = () => {
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
                    <SidebarCss title={'CSS DARSLARI'} elementName={'Bosh sahifa'}/>
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Selectors </Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '20vh' , md: '8vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>CSS selektori siz uslublashni xohlagan HTML element(lar)ni tanlaydi.</Text>
            </Box>
            <Divider mt={'20px'} />


            {/* 1 */}
            
            
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'}  flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  
              <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Selectors</Heading>
                <Text fontSize={'25px'}>CSS selektorlari siz uslub qilmoqchi bo'lgan HTML elementlarini "topish" (yoki tanlash) uchun ishlatiladi. <br /> Biz CSS selektorlarini besh toifaga ajratishimiz mumkin:</Text>

                <ul className='ull'>
                    <li><span className='red'>Simple selektorlar</span> (nom, id, sinf asosida elementlarni tanlang)</li>
                    <li><span className='red'>Combinator selektorlari</span> (elementlarni ular orasidagi ma'lum munosabatga qarab tanlang)</li>
                    <li><span className='red'>Pseudo-class selektorlari</span> (ma'lum bir holatga asoslangan elementlarni tanlash)</li>
                    <li><span className='red'>Pseudo-element selektorlari</span> (elementning bir qismini tanlash va uslublash)</li>
                    <li><span className='red'>Attribute selektorlari</span> (atribut yoki atribut qiymati asosida elementlarni tanlang)</li>
                </ul>
                <Text fontSize={'20px'}>Ushbu sahifada eng asosiy CSS selektorlari tushuntiriladi.</Text>
                <Divider mt={'20px'} />
                <Heading>CSS element selektori</Heading>
                <Text fontSize={'20px'}>Element selektori element nomi asosida HTML elementlarini tanlaydi.</Text>
                
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'380px', base: '430px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Bu yerda sahifadagi barcha <span className='red'>{`<p>`}</span> elementlar qizil matn rangi bilan markazga tekislanadi:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'150px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>p{`{`} <br /> <span style={{paddingLeft: '15px'}} className='red'>color:</span> <span className='yellow'>red</span>; <br /> <span className='red' style={{paddingLeft: '15px'}}>text-align:</span> <span className='yellow'>center</span>; <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`p { text-align: center; color: red;}`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />
            
            


            {/* 2 */}
                    


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              
            <Heading fontSize={{base: '30px' , md: '50px'}}>CSS id selektori</Heading>
                <Text fontSize={'25px'}>Id selektori muayyan elementni tanlash uchun HTML elementining id atributidan foydalanadi. <br /> <span>Elementning identifikatori sahifada noyobdir, shuning uchun id selektori bitta noyob elementni tanlash uchun ishlatiladi!</span> <br /> <span>Muayyan identifikatorga ega elementni tanlash uchun xesh (#) belgisini va undan keyin element identifikatorini yozing.</span></Text>
                

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'430px', md: '420px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Quyidagi CSS qoidasi <span className='red'>id=</span><span className='yellow'>"para1</span> bilan HTML elementiga qo'llaniladi:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'145px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>{`#para1`}{`{`} <br /> <span style={{paddingLeft: '15px'}} className='red'>color:</span> <span className='yellow'>red</span>; <br /> <span className='red' style={{paddingLeft: '15px'}}>text-align:</span> <span className='yellow'>center</span>; <br />{`}`}</Text>
                        
                    </Box>
                    <Text fontSize={'20px'}>Eslatma: ID nomi raqam bilan boshlanmaydi!</Text>
                    <CopyToClipboard text={`#para1{ color: red; text-align: center; }`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            

            
            
                
                {/* 3 */}
                


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              
              <Heading fontSize={{base: '30px' , md: '50px'}}>CSS class selektori</Heading>
                  <Text fontSize={'25px'}>Sinf selektori muayyan sinf atributiga ega HTML elementlarini tanlaydi. <br /> <span>Muayyan sinfga ega elementlarni tanlash uchun nuqta <span className='red'>(.)</span> belgisini va undan keyin sinf nomini yozing.</span></Text>
                  
  
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'430px', md: '380px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Ushbu misolda <span className='red'>class=</span><span className='yellow'>"center"</span> ga ega bo'lgan barcha HTML elementlari qizil rangda bo'ladi va markazga tekislanadi:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'145px'} bg={'#0A1624'} pt={'10px'}>
                        
                      <Text fontSize={'20px'} className='purple'>{`.center`}{`{`} <br /> <span style={{paddingLeft: '15px'}} className='red'>color:</span> <span className='yellow'>red</span>; <br /> <span className='red' style={{paddingLeft: '15px'}}>text-align:</span> <span className='yellow'>center</span>; <br />{`}`}</Text>
                          
                      </Box>
                      <CopyToClipboard text={`.center{ color: red; text-align: center; }`} onCopy={handleClip} >
                          <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
                  <Text fontSize={'20px'}>Bundan tashqari, sinf faqat maxsus HTML elementlariga ta'sir qilishi kerakligini belgilashingiz mumkin.</Text>

                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'430px', md: '380px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Bu misolda faqat <span className='red'>class=</span><span>"center"</span>li <span className='red'>{`<p>`}</span> ​​elementlar qizil rangda va markazga hizalanadi:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'145px'} bg={'#0A1624'} pt={{md:'10px', base: '8px'}}>
                        
                      <Text fontSize={'20px'} className='purple'>{`p.center`}{`{`} <br /> <span style={{paddingLeft: '15px'}} className='red'>color:</span> <span className='yellow'>red</span>; <br /> <span className='red' style={{paddingLeft: '15px'}}>text-align:</span> <span className='yellow'>center</span>; <br />{`}`}</Text>
                          
                      </Box>
                      <CopyToClipboard text={`p.center{ color: red; text-align: center; }`} onCopy={handleClip} >
                          <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
                  <Text fontSize={'20px'}>HTML elementlari bir nechta sinflarga ham murojaat qilishi mumkin.</Text>



                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'320px', md: '300px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Ushbu misolda <span className='red'>{`<p>`}</span> elementi <span className='red'>class=</span><span className='yellow'>"center"</span> va <span className='red'>class=</span><span className='yellow'>"center"</span>large</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'60px'} bg={'#0A1624'} pt={'12px'}>
                        
                      <Text fontSize={'20px'} className='purple'>{`<p`} <span className='red'>class=</span><span className='yellow'>centre large</span>{`>`}<span className='white'>This paragraph refers to two classes.</span>{`</p>`}</Text>
                          
                      </Box>
                      <CopyToClipboard text={`<p class="center large">This paragraph refers to two classes.</p>`} onCopy={handleClip} >
                          <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
                  <Text fontSize={'20px'}>Eslatma: sinf nomi raqam bilan boshlanmaydi!</Text>
              </Box>
            </Box>
            <Divider mt={'20px'} />


           
                 
                    

            {/* 4 */}

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              
              <Heading fontSize={{base: '30px' , md: '50px'}}>CSS universal selektori</Heading>
                  <Text fontSize={'25px'}>Universal selektor <span className='red'>(*)</span> sahifadagi barcha HTML elementlarini tanlaydi.</Text>
                  
  
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'460px', md: '420px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Quyidagi CSS qoidasi sahifadagi har bir HTML elementiga ta'sir qiladi:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={{md:'145px', base: '170px'}} bg={'#0A1624'} pt={{md:'8px', base: '10px'}}>
                        
                      <Text fontSize={'20px'} className='purple'>{`*`}{`{`} <br /> <span style={{paddingLeft: '15px'}} className='red'>color:</span> <span className='yellow'>blue</span>; <br /> <span className='red' style={{paddingLeft: '15px'}}>text-align:</span> <span className='yellow'>center</span>; <br />{`}`}</Text>
                          
                      </Box>
                      <Text fontSize={'20px'}>Eslatma: ID nomi raqam bilan boshlanmaydi!</Text>
                      <CopyToClipboard text={`*{ color: red; text-align: center; }`} onCopy={handleClip} >
                          <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
              </Box>
              <Divider mt={'20px'} />


            
            {/* 5 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              
              <Heading fontSize={{base: '30px' , md: '50px'}}>CSS universal selektoriCSS grouping selektori</Heading>
                  <Text fontSize={'25px'}>Guruhlash selektori bir xil uslub ta'riflari bilan barcha HTML elementlarini tanlaydi. <br /> Quyidagi CSS kodiga qarang (h1, h2 va p elementlari bir xil uslub ta'riflariga ega):</Text>
                  
  
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'710px', base:'610px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Quyidagi CSS qoidasi sahifadagi har bir HTML elementiga ta'sir qiladi:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={{md:'440px', base: '280px'}} bg={'#0A1624'} pt={'10px'}>
                        
                      <Text fontSize={'20px'} className='purple'>{`h1`}{`{`} <br /> <span style={{paddingLeft: '15px'}} className='red'>color:</span> <span className='yellow'>red</span>; <br /> <span className='red' style={{paddingLeft: '15px'}}>text-align:</span> <span className='yellow'>center</span>; <br />{`}`}</Text> <br />

                      <Text fontSize={'20px'} className='purple'>{`h2`}{`{`} <br /> <span style={{paddingLeft: '15px'}} className='red'>color:</span> <span className='yellow'>red</span>; <br /> <span className='red' style={{paddingLeft: '15px'}}>text-align:</span> <span className='yellow'>center</span>; <br />{`}`}</Text> <br />

                      <Text fontSize={'20px'} className='purple'>{`p`}{`{`} <br /> <span style={{paddingLeft: '15px'}} className='red'>color:</span> <span className='yellow'>red</span>; <br /> <span className='red' style={{paddingLeft: '15px'}}>text-align:</span> <span className='yellow'>center</span>; <br />{`}`}</Text>
                          
                      </Box>
                      <Text fontSize={'20px'}>Eslatma: ID nomi raqam bilan boshlanmaydi!</Text>
                      <CopyToClipboard text={`h1 {text-align: center;color: red;} h2 {text-align: center;color: red;} p {text-align: center;color: red;}`} onCopy={handleClip} >
                          <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
                  <Text fontSize={'20px'}>Kodni minimallashtirish uchun selektorlarni guruhlash yaxshi bo'ladi. <br /> Tanlovchilarni guruhlash uchun har bir selektorni vergul bilan ajrating.</Text>

                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'430px', base:'490px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Quyidagi CSS qoidasi sahifadagi har bir HTML elementiga ta'sir qiladi:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'150px'} bg={'#0A1624'} pt={'10px'}>
                        
                      <Text fontSize={'20px'} className='purple'>{`h1, h2, p`}{`{`} <br /> <span style={{paddingLeft: '15px'}} className='red'>color:</span> <span className='yellow'>blue</span>; <br /> <span className='red' style={{paddingLeft: '15px'}}>text-align:</span> <span className='yellow'>center</span>; <br />{`}`}</Text>
                          
                      </Box>
                      <Text fontSize={'20px'}>Eslatma: ID nomi raqam bilan boshlanmaydi!</Text>
                      <CopyToClipboard text={`h1, h2, p { text-align: center; color: blue; }`} onCopy={handleClip} >
                          <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
              </Box>
              <Divider mt={'20px'} />

            


            {/* 6 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              
              <Heading fontSize={{base: '30px' , md: '50px'}}>CSS universal selektoriCSS grouping selektori</Heading>
                  <Text fontSize={'25px'}>Guruhlash selektori bir xil uslub ta'riflari bilan barcha HTML elementlarini tanlaydi. <br /> Quyidagi CSS kodiga qarang (h1, h2 va p elementlari bir xil uslub ta'riflariga ega):</Text>
                  
  
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'710px', base:'610px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Quyidagi CSS qoidasi sahifadagi har bir HTML elementiga ta'sir qiladi:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={{md:'440px', base: '280px'}} bg={'#0A1624'} pt={'10px'}>
                        
                      <Text fontSize={'20px'} className='purple'>{`h1`}{`{`} <br /> <span style={{paddingLeft: '15px'}} className='red'>color:</span> <span className='yellow'>red</span>; <br /> <span className='red' style={{paddingLeft: '15px'}}>text-align:</span> <span className='yellow'>center</span>; <br />{`}`}</Text> <br />

                      <Text fontSize={'20px'} className='purple'>{`h2`}{`{`} <br /> <span style={{paddingLeft: '15px'}} className='red'>color:</span> <span className='yellow'>red</span>; <br /> <span className='red' style={{paddingLeft: '15px'}}>text-align:</span> <span className='yellow'>center</span>; <br />{`}`}</Text> <br />

                      <Text fontSize={'20px'} className='purple'>{`p`}{`{`} <br /> <span style={{paddingLeft: '15px'}} className='red'>color:</span> <span className='yellow'>red</span>; <br /> <span className='red' style={{paddingLeft: '15px'}}>text-align:</span> <span className='yellow'>center</span>; <br />{`}`}</Text>
                          
                      </Box>
                      <Text fontSize={'20px'}>Eslatma: ID nomi raqam bilan boshlanmaydi!</Text>
                      <CopyToClipboard text={`*{ color: red; text-align: center; }`} onCopy={handleClip} >
                          <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
              </Box>
              <Divider mt={'20px'} />
            
            



            
            



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'10vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>Barcha CSS oddiy selektorlari</Heading>

                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} >
                        <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>Selector</Td>
                                        <Td>Misol</Td>
                                        <Td>Misol description</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>#id </Td>
                                        <Td>#firstname</Td>
                                        <Td>Id = "firstname" bilan elementni tanlaydi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>.class </Td>
                                        <Td>.intro</Td>
                                        <Td>class="intro" bilan barcha elementlarni tanlaydi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>element.class</Td>
                                        <Td>p.intro</Td>
                                        <Td>Faqat class="intro" bilan {`<p>`} elementlarni tanlaydi</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>*</Td>
                                        <Td>*</Td>
                                        <Td>Barcha elementlarni tanlaydi</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>element</Td>
                                        <Td>p</Td>
                                        <Td>Selects all {`<p>`} elements</Td>
                                    </Tr>
                                    <Tr bg={'#233242'}>
                                        <Td>element, element, ... </Td>
                                        <Td>div, p</Td>
                                        <Td>Selects all {`<div>`} elements and all {`<p>`} elements</Td>
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

export default Css3dars
