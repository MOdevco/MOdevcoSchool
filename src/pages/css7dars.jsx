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

const Css7dars = () => {
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS RGB Colors</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '25vh' , md: '8vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>RGB rang qiymati QIZIL, YASIL va KO'K yorug'lik manbalarini ifodalaydi.</Text>
            </Box>
            <Divider mt={'20px'} />


            {/* 1 */}
            
            
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'}  flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                  
              <Heading fontSize={{base: '30px' , md: '50px'}}>RGB Value</Heading>
                <Text fontSize={'25px'}>In CSS, a color can be specified as an RGB value, using this formula:</Text>
                <Text fontWeight={'400'} color={'rgba(255, 255, 255, 1)'} fontSize={'20px'}>rgb(red, green, blue)</Text>
                <Text fontSize={'20px'}>Har bir parametr (qizil, yashil va ko'k) rangning intensivligini 0 dan 255 gacha belgilaydi. <br /> Masalan, rgb(255, 0, 0) qizil rangda ko'rsatiladi, chunki qizil rang eng yuqori qiymatga (255), qolganlari esa 0 ga o'rnatiladi. <br /> Qora rangni ko'rsatish uchun barcha rang parametrlarini 0 ga o'rnating, masalan: rgb(0, 0, 0). <br /> Oq rangni ko'rsatish uchun barcha rang parametrlarini 255 ga o'rnating, masalan: rgb(255, 255, 255).<br /> Quyidagi RGB qiymatlarini aralashtirish orqali tajriba qiling:</Text>
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'500px', base: '650px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={{md:'320px', base: '530px'}} bg={'#0A1624'} pt={{md:'10px', base:'0'}}>
                      
                    <Box display={'flex'} flexDirection={{base: 'column', md: 'row'}} gap={{base:'1rem', md: '0rem'}} alignItems={'center'} justifyContent={'space-around'}>
                        <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '2rem'}} pt={{md:'0px', base: '20px'}}>
                            <RgbVal bgColor={'rgba(255, 0, 0)'} colorName={'rgb(255, 0, 0)'} />
                            <RgbVal bgColor={'rgb(60, 179, 113)'} colorName={'rgb(60, 179, 113)'} />
                            <RgbVal bgColor={'rgb(255, 165, 0)'} colorName={'rgb(255, 165, 0)'} />
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '2rem'}}>
                            <RgbVal bgColor={'rgb(0, 0, 255)'} colorName={'rgb(0, 0, 255)'} />
                            <RgbVal bgColor={'rgb(238, 130, 238)'} colorName={'rgb(238, 130, 238)'} />
                            <RgbVal bgColor={'rgb(106, 90, 205)'} colorName={'rgb(106, 90, 205)'} />
                        </Box>
                    </Box>
                      
                        
                    </Box>
                </Box>
                <Text fontSize={'20px'}>Kulrang soyalar ko'pincha barcha 3 yorug'lik manbalari uchun teng qiymatlardan foydalangan holda aniqlanadi:</Text>




                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'500px', base: '650px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={{md:'320px', base: '530px'}} bg={'#0A1624'} pt={'10px'}>
                      
                    <Box display={'flex'} flexDirection={{base: 'column', md: 'row'}} alignItems={'center'} justifyContent={'space-around'}>
                        <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '2rem'}}>
                            <RgbVal text={'#fff'} bgColor={'rgb(60, 60, 60)'} colorName={'rgb(60, 60, 60)'} />
                            <RgbVal text={'#fff'} bgColor={'rgb(120, 120, 120)'} colorName={'rgb(120, 120, 120)'} />
                            <RgbVal text={'#000'} bgColor={'rgb(210, 210, 210)'} colorName={'rgb(210, 210, 210)'} />
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '2rem'}} pt={{md:'0px', base: '20px'}}>
                            <RgbVal text={'#fff'} bgColor={'rgb(90, 90, 90)'} colorName={'rgb(90, 90, 90)'} />
                            <RgbVal text={'#fff'} bgColor={'rgb(180, 180, 180)'} colorName={'rgb(180, 180, 180)'} />
                            <RgbVal text={'#000'} bgColor={'rgb(240, 240, 240)'} colorName={'rgb(240, 240, 240)'} />
                        </Box>
                    </Box>
                      
                        
                    </Box>
                </Box>
                
            </Box>
            <Divider mt={'20px'} />
            
            


            {/* 2 */}
                    


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'100vh'}>
              
            <Heading fontSize={{base: '30px' , md: '50px'}}>RGBA Value</Heading>
                <Text fontSize={'20px'}>RGBA rang qiymatlari alfa kanali bilan RGB rang qiymatlarining kengaytmasi bo'lib, u rang uchun shaffoflikni belgilaydi. <br /> An RGBA color value is specified with:</Text>
                <Text fontSize={'20px'} color={'rgba(255, 255, 255, 1)'}>rgba(red, green, blue, alpha)</Text>
                <Text fontSize={'20px'}>Alfa parametri 0,0 (to'liq shaffof) va 1,0 (umuman shaffof emas) orasidagi raqamdir: <br /> Quyidagi RGBA qiymatlarini aralashtirish orqali tajriba o'tkazing:</Text>
                

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{md:'500px', base: '650px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={{md:'320px', base: '530px'}} bg={'#0A1624'} pt={'10px'}>
                      
                    <Box display={'flex'} flexDirection={{base: 'column', md: 'row'}} gap={{base:'1rem', md: '0rem'}} alignItems={'center'} justifyContent={'space-around'}>
                        <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '2rem'}} pt={{md:'0px', base: '20px'}}>
                            <RgbVal bgColor={'rgba(255, 99, 71, 0)'} colorName={'rgba(255, 99, 71, 0)'} />
                            <RgbVal bgColor={'rgba(255, 99, 71, 0.4)'} colorName={'rgba(255, 99, 71, 0.4)'} />
                            <RgbVal bgColor={'rgba(255, 99, 71, 0.8)'} colorName={'rgba(255, 99, 71, 0.8)'} />
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={{base:'1rem', md: '2rem'}}>
                            <RgbVal bgColor={'rgba(255, 99, 71, 0.2)'} colorName={'rgba(255, 99, 71, 0.2)'} />
                            <RgbVal bgColor={'rgba(255, 99, 71, 0.6)'} colorName={'rgba(255, 99, 71, 0.6)'} />
                            <RgbVal bgColor={'rgba(255, 99, 71, 1)'} colorName={'rgba(255, 99, 71, 1)'} />
                        </Box>
                    </Box>
                      
                        
                    </Box>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            </Box>


    </Box>
  )
}

export default Css7dars
