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
import RgbVal from '../components/rgbVal/rgbVal'
import CssAccordion from '../components/cssAccordion/cssAccordion'

const Css9dars = () => {
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
                <Box ml={{base: '30px' , md: '450px'}} display={'flex'}  alignItems={'center'} gap={'20px'}>
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
                            <CssAccordion  />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS HSL Colors</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '25vh' , md: '8vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>HSL rang, to'yinganlik va yorug'likni anglatadi.</Text>
            </Box>
            <Divider mt={'20px'} />


            {/* 1 */}
            
            
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'}  flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  
              <Heading fontSize={{base: '30px' , md: '50px'}}>HSL Value</Heading>
                <Text fontSize={'25px'}>CSS-da rangni quyidagi shaklda rang, to'yinganlik va yorug'lik (HSL) yordamida aniqlash mumkin:</Text>
                <Text fontWeight={'400'} color={'rgba(255, 255, 255, 1)'} fontSize={'20px'}>hsl(hue, saturation, lightness)</Text>
                <Text fontSize={'20px'}>Hue rang g'ildiragidagi 0 dan 360 gacha bo'lgan darajadir. 0 qizil, 120 yashil va 240 ko'k. <br /> To'yinganlik - bu foizli qiymat. 0% kulrang soyani, 100% esa to'liq rangni anglatadi. <br /> Yengillik ham foiz hisoblanadi. 0% qora, 50% ochiq yoki qorong'i emas, 100% oq <br /> Experiment by mixing the HSL values below:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'590px', base: '650px', xl:'500px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={{xl:'320px', base: '530px', md:'500px'}} bg={'#0A1624'} pt={'10px'}>
                      
                    <Box display={'flex'} flexDirection={{base: 'column', md: 'column', xl:'row'}} h={'100%'} gap={{base:'1rem', md: '1rem', xl:'0'}} alignItems={'center'} justifyContent={'space-around'}>
                        <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '1rem', xl:'2rem'}} pt={{md:'0px', base: '20px'}}>
                            <RgbVal bgColor={'hsl(0, 100%, 50%)'} colorName={'hsl(0, 100%, 50%)'} />
                            <RgbVal bgColor={'hsl(147, 50%, 47%)'} colorName={'hsl(147, 50%, 47%)'} />
                            <RgbVal bgColor={'hsl(39, 100%, 50%)'} colorName={'hsl(39, 100%, 50%)'} />
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '1rem', xl:'2rem'}}>
                            <RgbVal bgColor={'hsl(240, 100%, 50%)'} colorName={'hsl(240, 100%, 50%)'} />
                            <RgbVal bgColor={'hsl(300, 76%, 72%)'} colorName={'hsl(300, 76%, 72%)'} />
                            <RgbVal bgColor={'hsl(248, 53%, 58%)'} colorName={'hsl(248, 53%, 58%)'} />
                        </Box>
                    </Box>
                      
                        
                    </Box>
                </Box>
                <Text fontSize={'20px'}>Kulrang soyalar ko'pincha barcha 3 yorug'lik manbalari uchun teng qiymatlardan foydalangan holda aniqlanadi:</Text>
                
            </Box>
            <Divider mt={'20px'} />
            
            


            {/* 2 */}
                    


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'86vh'}>
              
            <Heading fontSize={{base: '30px' , md: '50px'}}>Saturation</Heading>
                <Text fontSize={'20px'}>To'yinganlikni rangning intensivligi deb ta'riflash mumkin.</Text>
                <Text fontSize={'20px'}>rgba(red, green, blue, alpha)</Text>
                <Text fontSize={'20px'}>50% 50% kulrang, lekin siz hali ham rangni ko'rishingiz mumkin.</Text>
                <Text fontSize={'20px'}>0% butunlay kulrang; endi rangni ko'ra olmaysiz.</Text>
                

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'590px', base: '650px', xl:'500px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={{xl:'320px', base: '530px', md:'500px'}} bg={'#0A1624'} pt={'10px'}>
                      
                    <Box display={'flex'} flexDirection={{base: 'column', md: 'column', xl:'row'}} gap={{base:'1rem', md: '1rem'}} alignItems={'center'} justifyContent={'space-around'}>
                        <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '1rem', xl:'2rem'}} pt={{md:'0px', base: '20px'}}>
                            <RgbVal bgColor={'hsl(0, 100%, 50%)'} colorName={'hsl(0, 100%, 50%)'} />
                            <RgbVal bgColor={'hsl(0, 60%, 50%)'} colorName={'rgba(255, 99, 71, 0.4)'} />
                            <RgbVal bgColor={'hsl(0, 20%, 50%)'} colorName={'rgba(255, 99, 71, 0.8)'} />
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '1rem', xl:'2rem'}}>
                            <RgbVal bgColor={'hsl(0, 80%, 50%)'} colorName={'hsl(0, 80%, 50%)'} />
                            <RgbVal bgColor={'hsl(0, 40%, 50%)'} colorName={'hsl(0, 40%, 50%)'} />
                            <RgbVal bgColor={'hsl(0, 0%, 50%)'} colorName={'hsl(0, 0%, 50%)'} />
                        </Box>
                    </Box>
                      
                        
                    </Box>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            </Box>

            {/* 3 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'}  flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  
                  <Heading fontSize={{base: '30px' , md: '50px'}}>Lightness</Heading>
                    <Text fontSize={'25px'}>CSS-da rangni quyidagi shaklda rang, to'yinganlik va yorug'lik (HSL) yordamida aniqlash mumkin:</Text>
                    <Text fontSize={'20px'}>Rangning ochiqligini rangga qanchalik yorug'lik berishni xohlayotganingizni tasvirlash mumkin, bu erda 0% yorug'lik yo'q (qora), 50% 50% yorug'lik (na qorong'i, na yorug'lik) <br /> va 100% to'liq ochiqlik (oq) degan ma'noni anglatadi. .</Text>
                    <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{xl:'500px', base: '650px', md:'590px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                        <Heading>Misol</Heading>
                        <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={{xl:'320px', base: '530px', md:'500px'}} bg={'#0A1624'} pt={'10px'}>
                          
                        <Box display={'flex'} flexDirection={{base: 'column', md: 'column', xl:'row'}} alignItems={'center'} justifyContent={'space-around'}>
                            <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '1rem', xl:'2rem'}}>
                                <RgbVal text={'#fff'} bgColor={'hsl(0, 100%, 0%)'} colorName={'hsl(0, 100%, 0%)'} />
                                <RgbVal text={'#fff'} bgColor={'hsl(0, 100%, 50%)'} colorName={'hsl(0, 100%, 50%)'} />
                                <RgbVal text={'#000'} bgColor={'hsl(0, 100%, 90%)'} colorName={'hsl(0, 100%, 90%)'} />
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '1rem', xl:'2rem'}} pt={{md:'0px', base: '20px'}}>
                                <RgbVal text={'#fff'} bgColor={'hsl(0, 100%, 25%)'} colorName={'hsl(0, 100%, 25%)'} />
                                <RgbVal text={'#fff'} bgColor={'hsl(0, 100%, 75%)'} colorName={'hsl(0, 100%, 75%)'} />
                                <RgbVal text={'#000'} bgColor={'hsl(0, 100%, 100%)'} colorName={'hsl(0, 100%, 100%)'} />
                            </Box>
                        </Box>
                          
                            
                        </Box>
                    </Box>
                    
                </Box>
            <Divider mt={'20px'} />



            {/* 4 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'}  flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  
                  <Heading fontSize={{base: '30px' , md: '50px'}}>Shades of Gray</Heading>
                    <Text fontSize={'25px'}>CSS-da rangni quyidagi shaklda rang, to'yinganlik va yorug'lik (HSL) yordamida aniqlash mumkin:</Text>
                    <Text fontSize={'20px'}>Kulrang soyalar ko'pincha rang va to'yinganlikni 0 ga o'rnatish orqali aniqlanadi va quyuqroq/ochiqroq soyalarni olish <br /> uchun yorug'likni 0% dan 100% gacha sozlang:</Text>
                    <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{xl:'500px', base: '650px', md:'590px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                        <Heading>Misol</Heading>
                        <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={{md:'500px', base: '530px', xl:'320px'}} bg={'#0A1624'} pt={'10px'}>
                          
                        <Box display={'flex'} flexDirection={{base: 'column', md: 'column', xl:'row'}} alignItems={'center'} justifyContent={'space-around'}>
                            <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '2rem', xl:'2rem'}}>
                                <RgbVal text={'#fff'} bgColor={'hsl(0, 0%, 0%)'} colorName={'hsl(0, 0%, 0%)'} />
                                <RgbVal text={'#fff'} bgColor={'hsl(0, 0%, 47%)'} colorName={'hsl(0, 0%, 47%)'} />
                                <RgbVal text={'#000'} bgColor={'hsl(0, 0%, 94%)'} colorName={'hsl(0, 0%, 94%)'} />
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '1rem', xl:'2rem'}} pt={{md:'0px', base: '20px'}}>
                                <RgbVal text={'#fff'} bgColor={'hsl(0, 0%, 24%)'} colorName={'hsl(0, 0%, 24%)'} />
                                <RgbVal text={'#fff'} bgColor={'hsl(0, 0%, 71%)'} colorName={'hsl(0, 0%, 71%)'} />
                                <RgbVal text={'#000'} bgColor={'hsl(0, 0%, 100%)'} colorName={'hsl(0, 0%, 100%)'} />
                            </Box>
                        </Box>
                          
                            
                        </Box>
                    </Box>
                    
                </Box>
            <Divider mt={'20px'} />



            {/* 5 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'}  flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  
                  <Heading fontSize={{base: '30px' , md: '50px'}}>HSLA Value</Heading>
                    <Text fontSize={'25px'}>HSLA rang qiymatlari HSL rang qiymatlarining alfa kanalli kengaytmasi bo'lib, u rang uchun shaffoflikni belgilaydi. <br /> An HSLA color value is specified with:</Text>
                    <Text fontSize={'20px'} fontWeight={'400'}>hsla(hue, saturation, lightness, alpha)</Text>
                    <Text fontSize={'20px'}>Alfa parametri 0,0 (to'liq shaffof) va 1,0 (umuman shaffof emas) orasidagi raqamdir: <br /> Quyidagi HSLA qiymatlarini aralashtirish orqali tajriba qiling:</Text>
                    <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{xl:'500px', base: '650px', md:'590px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                        <Heading>Misol</Heading>
                        <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={{xl:'320px', base: '530px', md:'500px'}} bg={'#0A1624'} pt={'10px'}>
                          
                        <Box display={'flex'} flexDirection={{base: 'column', md: 'column', xl:'row'}} alignItems={'center'} justifyContent={'space-around'}>
                            <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '1rem', xl:'2rem'}}>
                                <RgbVal text={'#fff'} bgColor={'hsla(9, 100%, 64%, 0)'} colorName={'hsla(9, 100%, 64%, 0)'} />
                                <RgbVal text={'#fff'} bgColor={'hsla(9, 100%, 64%, 0.4)'} colorName={'hsla(9, 100%, 64%, 0.4)'} />
                                <RgbVal text={'#000'} bgColor={'hsl(0, 0%, 94%)'} colorName={'hsla(9, 100%, 64%, 0.8)'} />
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '1rem', xl:'2rem'}} pt={{md:'0px', base: '20px'}}>
                                <RgbVal text={'#fff'} bgColor={'hsl(0, 0%, 24%)'} colorName={'hsla(9, 100%, 64%, 0.2)'} />
                                <RgbVal text={'rgba(0, 0, 0, 0.67)'} bgColor={'hsla(9, 100%, 64%, 0.6)'} colorName={'hsla(9, 100%, 64%, 0.6)'} />
                                <RgbVal text={'#000'} bgColor={'hsla(9, 100%, 64%, 1)'} colorName={'hsla(9, 100%, 64%, 1)'} />
                            </Box>
                        </Box>
                          
                            
                        </Box>
                    </Box>
                    
                </Box>
            <Divider mt={'20px'} />
    </Box>
  )
}

export default Css9dars
