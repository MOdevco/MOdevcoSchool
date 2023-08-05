import { Box , Flex , Heading , Button , Text , Image , Input , FormLabel, HStack, Radio, RadioGroup, Grid} from '@chakra-ui/react'
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
import OpacityCard from '../components/opacityCard/opacityCard'
import SidebarCss from '../components/sidebarCss/sidebarCss'

const Css10dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Background-color</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />





            {/* 1 */}
            
            
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  
                <Text fontSize={'25px'}> <span className='red'>Background-color</span>  xususiyati elementning fon rangini belgilaydi.</Text>
                

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'350px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Sahifaning background rangi quyidagicha o'rnatiladi:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'110px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>body {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>background-color:</span><span className='yellow'>lightblue;</span>  <br />{`}`}</Text>
                      
                        
                    </Box>
                    <CopyToClipboard text={`body {background-color: lightblue; }`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'25px'}>CSS-da rang ko'pincha quyidagilar bilan belgilanadi:</Text>
                <ul className='ull'>
                    <li>haqiqiy rang nomi - "qizil" kabi</li>
                    <li>HEX qiymati - "#ff0000" kabi</li>
                    <li>RGB qiymati - "rgb (255,0,0)" kabi</li>
                </ul>
            </Box>
            <Divider mt={'20px'} />
            
            


            {/* 2 */}
                    


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              
            <Heading fontSize={{base: '30px' , md: '50px'}}>Boshqa Elementlar</Heading>
                <Text fontSize={'25px'}>Har qanday HTML elementlari uchun fon rangini o'rnatishingiz mumkin:</Text>
                

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={'480px'} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'20px'}>Bu erda <span className='red'>{`<h1>, <p>`}</span> va <span className='red'>{`<div>`}</span> elementlari turli fon ranglariga ega bo'ladi:</Text>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'290px'} bg={'#0A1624'} pt={'0'}>
                      
                    <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>background-color:</span><span className='yellow'>green;</span>  <br />{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>div {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>background-color:</span><span className='yellow'>lightblue;</span>  <br />{`}`}</Text>
                    <Text fontSize={'20px'} className='purple'>p {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>background-color:</span><span className='yellow'>yellow;</span>  <br />{`}`}</Text>
                        
                    </Box>
                    <CopyToClipboard text={`h1 {  background-color: green; }div {   background-color: lightblue; } p {   background-color: yellow; }`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            

            
            
                
                {/* 3 */}
                


              <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '170vh'}}>
              <Heading fontSize={{base: '30px' , md: '50px'}}>Opacity / Transparency</Heading>
                <Text fontSize={'25px'}>Opacity xususiyati elementning opacity/transparency ligini belgilaydi. U 0,0 dan 1,0 gacha qiymat olishi mumkin. <br /> Qiymat qanchalik past bo'lsa, shunchalik opacity bo'ladi:</Text>
                <Grid w={'80%'} margin={'auto'} gridTemplateColumns={{base: 'repeat(1, 1fr)',md: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)',  xl:'repeat(2, 1fr)', '2xl': 'repeat(4, 1fr)'}} alignItems={'center'} justifyContent={'center'}>

                <OpacityCard text={'opacity1'} opacity={1} />
                <OpacityCard text={'opacity0.6'} opacity={0.6} />
                <OpacityCard text={'opacity.3'} opacity={0.3} />
                <OpacityCard text={'opacity0.1'} opacity={0.1} />
                </Grid>
                        
                  
  
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'770px', base: '590px', lg: '500px', xl: '400px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Ikkita yuborish tugmasi bo'lgan shakl. Birinchisi forma ma'lumotlarini standart kodlash bilan yuboradi,<br /> ikkinchisi "ko'p qismli/forma-ma'lumotlar" sifatida kodlangan shakl-ma'lumotlarni yuboradi:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={{ md: '250px', base: '250px', lg:'150px',}} bg={'#0A1624'} pt={'10px'}>
                        
                      <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>background-color:</span><span className='yellow'>green;</span>  <br /> <span style={{paddingLeft: '20px'}} className='red'>opacity:</span><span className='yellow'>0.3;</span> <br />{`}`}</Text>
                        
                          
                      </Box>
                      <CopyToClipboard text={`body {background-color: green; opacity: 0.3;  }`} onCopy={handleClip} >
                          <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                      
                  </Box>
                  <Text fontSize={'25px'}>Eslatma: Element foniga shaffoflikni qo'shish uchun shaffoflik xususiyatidan foydalanilganda, uning <br /> barcha asosiy elementlari bir xil shaffoflikni meros qilib oladi. Bu to'liq shaffof element ichidagi <br /> matnni o'qishni qiyinlashtirishi mumkin.</Text>
              </Box>
            </Box>
            <Divider mt={'20px'} />


           
                 
                    

            {/* 4 */}

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{xl:'50vh', md: '170vh'}}>
              <Heading fontSize={{base: '30px' , md: '50px'}}>RGBA Yordamida Transparency</Heading>
                <Text fontSize={'25px'}>Yuqoridagi misolimizda bo'lgani kabi, pastki elementlarga shaffoflikni qo'llashni xohlamasangiz, RGBA rang qiymatlaridan foydalaning. Quyidagi misol matnning emas, balki fon rangining shaffofligini belgilaydi:</Text>
                <Grid  gridTemplateColumns={{base: 'repeat(1, 1fr)',md: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)',  xl:'repeat(2, 1fr)', '2xl': 'repeat(4, 1fr)'}}>

                <OpacityCard text={'opacity1'} opacity={'100%'} />
                <OpacityCard text={'opacity1'} opacity={'60%'} />
                <OpacityCard text={'opacity1'} opacity={'30%'} />
                <OpacityCard text={'opacity1'} opacity={'10%'} />
                </Grid>
                <Text fontSize={'20px'}>Siz bizning CSS Ranglar bo'limidan RGB dan rang qiymati sifatida foydalanishingiz mumkinligini bilib <br />oldingiz. RGB-ga qo'shimcha ravishda siz rangning shaffofligini belgilaydigan alfa-kanal (RGBA) bilan RGB <br /> rang qiymatidan foydalanishingiz mumkin.</Text>
                <Text >RGBA rang qiymati quyidagi bilan belgilanadi: rgba (qizil, yashil, ko'k, alfa). Alfa parametri 0,0 (to'liq shaffof) <br /> va 1,0 (to'liq shaffof) orasidagi raqamdir.</Text>
                <Text fontSize={'20px'}>Maslahat: RGBA ranglari haqida ko'proq ma'lumotni CSS Ranglar bo'limida bilib olasiz.</Text>
                  
  
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'770px', base: '590px', lg: '500px', xl: '400px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Ikkita yuborish tugmasi bo'lgan shakl. Birinchisi forma ma'lumotlarini standart kodlash bilan yuboradi,<br /> ikkinchisi "ko'p qismli/forma-ma'lumotlar" sifatida kodlangan shakl-ma'lumotlarni yuboradi:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={{ md: '250px', base: '250px', lg:'150px',}} bg={'#0A1624'} pt={'10px'}>
                        
                      <Text fontSize={'20px'} className='purple'>h1 {`{`} <br /> <span style={{paddingLeft: '20px'}} className='red'>background-color:</span><span className='yellow'>rgba(0, 128, 0, 0.3);</span>  <br /> <span style={{paddingLeft: '20px'}} className='red'>opacity:</span><span className='yellow'>0.3;</span> <span>/* Green background with 30% opacity */</span> <br />{`}`}</Text>
                        
                          
                      </Box>
                      <CopyToClipboard text={`body {background: rgba(0, 128, 0, 0.3);    /* Green background with 30% opacity */}`} onCopy={handleClip} >
                          <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                      
                  </Box>
              </Box>
            <Divider mt={'20px'} />
            



            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'10vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Background Color Xususiyati</Heading>

                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'} pt={'20px'} >
                        <TableContainer>
                            <Table border={'1px'} variant='simple' width={'90%'}>
                                
                                <Thead>
                                    <Tr fontWeight={'bold'} bg={'#233242'} >
                                        <Td>Property</Td>
                                        <Td>Description</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>background-color</Td>
                                        <Td>Elementning fon rangini o'rnatadi</Td>
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

export default Css10dars
