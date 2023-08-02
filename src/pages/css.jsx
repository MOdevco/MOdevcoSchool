import { Box , Flex ,Button , Heading , Text, Divider} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Sidebar from '../components/sidebarhtml/sidebarhtml'
import { HamburgerIcon , CloseIcon} from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    useToast
  } from '@chakra-ui/react'
import AccordionItenm from '../components/accordion/accordion'
import CopyToClipboard from 'react-copy-to-clipboard'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'
import SidebarCss from '../components/sidebarCss/sidebarCss'
const Html = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('left')
    const [size, setSize] = useState('')
    const [clipboard , setClipboard] = useState(false)
    const toast = useToast()
    const [res1  , setRes1] = useState(true)
    const [res2  , setRes2] = useState(false)
    const [res3  , setRes3] = useState(false)
    const [res4  , setRes4] = useState(false)
    const [res5  , setRes5] = useState(false)


    const toSetRes1 = () => {
        setRes1(true)
        setRes2(false)
        setRes3(false)
        setRes4(false)
        setRes5(false)
    }
    const toSetRes3 = () => {
        setRes1(false)
        setRes2(false)
        setRes3(true)
        setRes4(false)
        setRes5(false)
    }
    const toSetRes6 = () => {
        setRes1(false)
        setRes2(false)
        setRes3(false)
        setRes4(true)
        setRes5(false)
    }
    const toSetRes4 = () => {
        setRes1(false)
        setRes2(false)
        setRes3(false)
        setRes4(true)
        setRes5(false)
    }
    const toSetRes5 = () => {
        setRes1(false)
        setRes2(false)
        setRes3(false)
        setRes4(false)
        setRes5(true)
    }
    const toSetRes7 = () => {
        setRes1(false)
        setRes2(true)
        setRes3(false)
        setRes4(false)
        setRes5(false)
    }


    
    const handleRes2 = () => {
        setRes1(false)
        setRes2(true)
        setRes3(false)
        setRes4(false)
        setRes5(false)
    }
    

    const handleRes3 = () => {
        setRes1(false)
        setRes2(false)
        setRes3(true)
        setRes4(false)
        setRes5(false)
    }
    const handleRes4 = () => {
        setRes1(false)
        setRes2(false)
        setRes3(false)
        setRes4(true)
        setRes5(false)
    }
    const handleRes5 = () => {
        setRes1(false)
        setRes2(false)
        setRes3(false)
        setRes4(false)
        setRes5(true)
    }
    const handleRes6 = () => {
        setRes1(true)
        setRes2(false)
        setRes3(false)
        setRes4(false)
        setRes5(false)
    }




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
    // }, [])

  return (
    <Box pt={'300px'} width={'100%'} bg={'#1A202C'} height={'100%'}>
        <Box >
            <Flex >
                {onOpen && <Box>
                    <SidebarCss title={'CSS DARSLARI'} elementName={'Bosh sahifa'}  />
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
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS DARSLARI</Heading>
                    </Box>

                </Box>
            </Flex>
            <Divider mt={'40px'} />


            <Box pl={{base: '10px' , md: '450px'}} fontSize={{base: '20px' , md: '25px'}} display={'flex'} flexDirection={'column'} gap={'30px'} py={'50px'}>
              <Text>CSS - bu veb-sahifani uslublash uchun foydalanadigan til</Text>
            </Box>
            <Divider mt={'0px'} />


            <Box pl={{base: '10px' , md: '450px'}} fontSize={{base: '20px' , md: '25px'}} minHeight={'45vh'} display={'flex'} flexDirection={'column'} gap={'30px'} py={'50px'}>
                <Heading  fontSize={{base: '30px' , md: '50px'}}>CSS nima?</Heading>
                <UnorderedList lineHeight={'40px'}>
                    <ListItem>CSS qisqartmasi Cascading Style Sheets degan ma'noni anglatadi</ListItem>
                    <ListItem>CSS HTML elementlari ekranda, qog'ozda yoki boshqa ommaviy axborot vositalarida <br /> qanday ko'rsatilishini tavsiflaydi</ListItem>
                    <ListItem>CSS ko'p ishlarni tejaydi. U bir vaqtning o'zida bir nechta veb-sahifalar <br /> tartibini boshqarishi mumkin</ListItem>
                    <ListItem>Tashqi uslublar jadvallari CSS fayllarida saqlanadi</ListItem>
                </UnorderedList>
            </Box>
            <Divider mt={'0px'} />


            <Box pl={{base: '10px' , md: '450px'}}  fontSize={{base: '20px' , md: '25px'}} minHeight={'45vh'} display={'flex'} flexDirection={'column'} gap={'30px'} py={'50px'}>
                <Heading  fontSize={{base: '20px' , md: '35px'}}>CSS demo - bitta HTML sahifasi - bir nechta uslublar!</Heading>
                <Text>Bu erda biz to'rt xil uslublar jadvallari bilan ko'rsatilgan bitta HTML sahifasini ko'rsatamiz. <br /> Turli uslublarni koʻrish uchun quyidagi “Uslublar jadvali 1”, “Uslublar jadvali 2”, “Uslublar jadvali 3”, <br /> “Uslublar jadvali 4” havolalarini bosing:</Text>


                <Box width={{base: '100%' , xl:'90%'}} p={'30px'} overflow="scroll"  bg={'#233242'}>
                   {res1 && <Box width={'100%'}   p={'30px'} height={'100%'} overflow="scroll" bg={'white'} display={'flex'} flexDirection={'column'} gap={'30px'}>
                        <Box width={'100%'} justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={'column'} height={'20vh'} bg={'#90EE90'}>
                            <Heading fontSize={{base: '20px' , xl: "25px"}}>Mening bosh sahifamga xush kelibsiz</Heading>
                            <Text fontSize={{base: '20px' , xl: "25px"}}>Turli uslublar jadvallarini tanlash uchun menyudan foydalaning</Text>
                        </Box>
                        <Box display={'flex'} justifyContent={'space-between'} className={'wrap'} gap={'30px'}>
                            <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                                <Button onClick={toSetRes1} width={{base: '100%' , xl: '300px'}} bg={'#90EE90'} _hover={{bg: ''}} color={'white'}>Uslublar jadvali 1</Button>
                                <Button onClick={handleRes2} width={{base: '100%' , xl: '300px'}} bg={'#D9D9D9'} _hover={{bg: ''}} >Uslublar jadvali 2</Button>
                                <Button onClick={toSetRes3} width={{base: '100%' , xl: '300px'}} bg={'#D9D9D9'} _hover={{bg: ''}} >Uslublar jadvali 3</Button>
                                <Button onClick={toSetRes4} width={{base: '100%' , xl: '300px'}} bg={'#D9D9D9'} _hover={{bg: ''}} >Uslublar jadvali 4</Button>
                                <Button onClick={toSetRes5} width={{base: '100%' , xl: '300px'}} bg={'#D9D9D9'} _hover={{bg: ''}} >Uslublar jadvali yo’q</Button>
                            </Box>

                            <Box lineHeight={'55px'}>
                                <Heading  color={'black'}>Xuddi shu sahifa turli uslublar jadvallari</Heading>
                                <Text  color={'black'}>Bu turli uslublar jadvallari sizning HTML sahifangiz tartibini qanday o'zgartirishi mumkinligini ko'rsatadi. Menyuda turli uslublar jadvallarini tanlash yoki quyidagi havolalardan birini tanlash orqali ushbu sahifaning tartibini o'zgartirishingiz mumkin.</Text>

                                <Box display={'flex'} gap={"20px"}>
                                    <Text onClick={toSetRes1} cursor={'pointer'} textDecoration={'underline'} color={'black'}>Uslublar jadvali 1</Text>
                                    <Text cursor={'pointer'} onClick={handleRes2} textDecoration={'underline'} color={'black'}>Uslublar jadvali 2</Text>
                                </Box>
                                <Box display={'flex'} gap={"20px"}>
                                    <Text onClick={toSetRes3} cursor={'pointer'} textDecoration={'underline'} color={'black'}>Uslublar jadvali 3</Text>
                                    <Text onClick={toSetRes4} cursor={'pointer'} textDecoration={'underline'} color={'black'}>Uslublar jadvali 4</Text>
                                </Box>

                                <Box>
                                    <Heading color={'black'}>Uslublar yo'q</Heading>
                                    <Text color={'black'}>Ushbu sahifa HTML sahifasining turli bo'limlarini guruhlash uchun DIV elementlaridan foydalanadi. Uslublar jadvalisiz sahifa qanday ko'rinishini ko'rish uchun shu yerni bosing:</Text>
                                    <Text onClick={toSetRes5}  cursor={'pointer'} textDecoration={'underline'} color={'black'}>Uslublar jadvali yo’q</Text>
                                </Box>
                            </Box>

                            <Box p={'20px'} width={'100%'} className={'side'} height={{base: '20%' , xl: '50%'}} bg={'#32A4E7'}>
                                <Heading>Side Bar</Heading>
                                <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Text>
                            </Box>

                        </Box>
                        <Box width={'100%'}  height={'20vh'}  color={'black'}>
                            <Text bg={'#D9D9D9'} p={'30px'}border={'2px'}  color={'black'} fontSize={'20px'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</Text>
                        </Box>
                    </Box> }   
                    
                   {res2 && <Box width={'100%'} overflow={'scroll'}  p={'30px'} height={'50%'} bg={'#D14836'} display={'flex'} flexDirection={'column'} gap={'1px'}>
                        <Box >
                            <Heading>Mening bosh sahifamga xush kelibsiz</Heading>
                            <Text>Turli uslublar jadvallarini tanlash uchun menyudan foydalaning</Text>
                        </Box>
                        

                        <Box   mt={'60px'}>
                            <Box display={'flex'} className="wrap2">
                                <Box bg={'white'} width={"100%"} p={'30px'}>
                                    <Heading fontWeight={'bold'} color={'#D14836'}>Xuddi shu sahifa turli uslublar jadvallari</Heading>
                                    <Text color={'black'} fontSize={'20px'}>Bu turli uslublar jadvallari sizning HTML sahifangiz tartibini qanday o'zgartirishi mumkinligini ko'rsatadi. Menyuda turli uslublar jadvallarini tanlash yoki quyidagi havolalardan birini tanlash orqali ushbu sahifaning tartibini o'zgartirishingiz mumkin:</Text>
                                    <Box display={'flex'} alignItems={'center'}>
                                        <Text onClick={toSetRes1} cursor={'pointer'} textDecoration={'underline'} color={'#D14836'}>Uslublar jadvali 1,</Text>
                                        <Text onClick={toSetRes7} cursor={'pointer'} textDecoration={'underline'} color={'#D14836'}>Uslublar jadvali 2,</Text>
                                        <Text cursor={'pointer'} onClick={handleRes3} textDecoration={'underline'} color={'#D14836'}>Uslublar jadvali 3,</Text>
                                        <Text onClick={toSetRes6} cursor={'pointer'} textDecoration={'underline'} color={'#D14836'}>Uslublar jadvali 4,</Text>
                                    </Box>
                                    <Box>
                                        <Heading color={'#D14836'} fontWeight={'bold'}>Uslublar yo'q</Heading>
                                        <Text color={'black'}>Ushbu sahifa HTML sahifasining turli bo'limlarini guruhlash uchun DIV elementlaridan foydalanadi. Uslublar jadvalisiz sahifa qanday ko'rinishini ko'rish uchun shu yerni bosing:</Text>
                                        <Text cursor={'pointer'} textDecoration={'underline'} color={'#D14836'}>
                                            Uslublar jadvali yo’q.
                                        </Text>
                                    </Box>
                                </Box>
                                <Box display={'flex'}p={'30px'} bg={'white'} flexDirection={'column'} gap={'20px'}>
                                    <Button onClick={toSetRes1} bg={'#D14836'} _hover={{bg: ''}}color={'white'}>Uslublar jadvali 1</Button>
                                    <Button onClick={toSetRes7} border={'2px'} _hover={{bg: ''}}bg={'#fff'} color={'black'}>Uslublar jadvali 2</Button>
                                    <Button onClick={handleRes3} bg={'#D14836'} _hover={{bg: ''}}color={'white'}>Uslublar jadvali 3</Button>
                                    <Button onClick={toSetRes6} bg={'#D14836'} _hover={{bg: ''}}color={'white'}>Uslublar jadvali 4</Button>
                                    <Button bg={'#D14836'} _hover={{bg: ''}}color={'white'}>Uslublar jadvali yo’q</Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box p={'20px'} width={'100%'} height={'55%'} bg={'#F6DAD7'}>
                            <Heading color={'#D14836'} fontWeight={'bold'}>Side-Bar</Heading>
                            <Text color={'#D14836'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Text>
                            
                        </Box>
                        <Box>
                            <Text fontSize={'20px'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at ve eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</Text>
                        </Box>
                    </Box> }




                  {res3 &&  <Box width={'100%'} overflow={'scroll'}  p={'30px'} height={'50%'} bg={'#fff'} display={'flex'} flexDirection={'column'} gap={'1px'}>
                        <Box >
                            <Heading color={'#90EE90'}>Mening bosh sahifamga xush kelibsiz</Heading>
                            <Text color={'#000'}>Turli uslublar jadvallarini tanlash uchun menyudan foydalaning</Text>
                        </Box>
                        

                        <Box   mt={'60px'} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'20px'} >
                            <Box display={'flex'} flexWrap={'wrap'} width={'100%'} gap={'20px'} className="wrap2">
                               <Button onClick={toSetRes1} width={{base: '100%' , xl: '150px'}} bg={'#666'} _hover={{bg: ''}} color={'white'}>Uslublar jadvali 1</Button>
                               <Button onClick={toSetRes7} width={{base: '100%' , xl: '150px'}} bg={'#666'} _hover={{bg: ''}} color={'white'}>Uslublar jadvali 2</Button>
                               <Button onClick={toSetRes3} width={{base: '100%' , xl: '150px'}} bg={'#90EE90'} _hover={{bg: ''}} color={'white'}>Uslublar jadvali 3</Button>
                               <Button onClick={handleRes4} width={{base: '100%' , xl: '150px'}} bg={'#666'} _hover={{bg: ''}} color={'white'}>Uslublar jadvali 4</Button>
                            </Box>
                            <Button bg={'#666'} width={{base: '100%' , xl: '150px'}} _hover={{bg: ''}} color={'white'}>Uslublar jadvali yo’q,</Button>
                        </Box>

                        <Box>
                            <Heading color={'#90EE90'}>Xuddi shu sahifa turli uslublar jadvallari</Heading>
                            <Text color={'#000'} fontSize={'20px'}>Bu turli uslublar jadvallari sizning HTML sahifangiz tartibini qanday o'zgartirishi mumkinligini ko'rsatadi. Menyuda turli uslublar jadvallarini tanlash yoki quyidagi havolalardan birini tanlash orqali ushbu sahifaning tartibini o'zgartirishingiz mumkin:</Text>
                            <Box display={'flex'} gap="20px">
                                <Text onClick={toSetRes1} cursor={'pointer'} textDecoration={'underline'} color={'#D14836'} fontSize={'20px'}>Uslublar jadvali 1,</Text>
                                <Text onClick={toSetRes7} cursor={'pointer'} textDecoration={'underline'} color={'#D14836'} fontSize={'20px'}>Uslublar jadvali 2,</Text>
                                <Text onClick={toSetRes3} cursor={'pointer'} textDecoration={'underline'} color={'#D14836'} fontSize={'20px'}>Uslublar jadvali 3,</Text>
                                <Text onClick={handleRes4} cursor={'pointer'} textDecoration={'underline'} color={'#D14836'} fontSize={'20px'}>Uslublar jadvali 4,</Text>
                            </Box>
                        </Box>

                        <Box>
                            <Heading color={'#90EE90'} fontWeight={'bold'}>Uslublar yo'q</Heading>
                            <Text color={'black'} fontSize={'20px'}>Ushbu sahifa HTML sahifasining turli bo'limlarini guruhlash uchun DIV elementlaridan foydalanadi. Uslublar jadvalisiz sahifa qanday ko'rinishini ko'rish uchun shu yerni bosing:</Text>
                            <Text cursor={'pointer'} color={'#D14836'} fontSize={'20px'} textDecoration={'underline'}>Uslublar jadvali yo’q,</Text>
                        </Box>

                        <Box width={'100%'} p={'30px'} bg={'#D9D9D9'} mt={'30px'}>
                            <Heading fontWeight={'bold'} color={'#90EE90'}>Side-Bar</Heading>
                            <Text color={'#000'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Text>
                        </Box>

                        <Box>
                            <Text color={'#000'} fontSize={'20px'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
                            eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</Text>
                        </Box>
                       
                    </Box> }





                   {res4 && <Box width={'100%'} overflow={'scroll'}  p={'30px'} height={'50%'} bg={'#000'} display={'flex'} flexDirection={'column'} gap={'1px'}>
                        <Box >
                            <Heading color={'#90EE90'}>Mening bosh sahifamga xush kelibsiz</Heading>
                            <Text color={'#90EE90'}>Turli uslublar jadvallarini tanlash uchun menyudan foydalaning</Text>
                        </Box>
                        <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'}>
                            <Box mt={'20px'}>
                                <UnorderedList fontSize={'20px'}>
                                    <ListItem onClick={toSetRes1} cursor={'pointer'} color={'#90EE90'}>Uslublar jadvali 1</ListItem>
                                    <ListItem onClick={toSetRes7} cursor={'pointer'} color={'#90EE90'}>Uslublar jadvali 2</ListItem>
                                    <ListItem cursor={'pointer'} color={'#90EE90'}>Uslublar jadvali 3</ListItem>
                                    <ListItem onClick={toSetRes3}  cursor={'pointer'} color={'#fff'}>Uslublar jadvali 4</ListItem>
                                    <ListItem onClick={handleRes5} cursor={'pointer'} color={'#90EE90'}>Uslublar jadvali yo’q</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box mt={'20px'} border={'2px'} p={'10px'}>
                                <Heading>Side-Bar</Heading>
                                <Text fontSize={'20px'}>Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit, sed diam nonummy nibh <br /> euismod tincidunt ut laoreet dolore magna <br /> aliquam erat volutpat.</Text>
                            </Box>
                        </Box>

                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Heading color={'#90EE90'}>Xuddi shu sahifa turli uslublar jadvallari</Heading>
                            <Text color={'#90EE90'} fontSize={'20px'}>Bu turli uslublar jadvallari sizning HTML sahifangiz tartibini qanday o'zgartirishi mumkinligini ko'rsatadi. Menyuda turli uslublar jadvallarini tanlash yoki quyidagi havolalardan birini tanlash orqali ushbu sahifaning tartibini o'zgartirishingiz mumkin:</Text>

                            <Box display={'flex'} gap={'20px'} flexWrap={'wrap'}>
                                <Text onClick={toSetRes1} cursor={'pointer'} color={'white'} textDecoration={'underline'} fontSize={'20px'}>Uslublar jadvali 1,</Text>
                                <Text onClick={toSetRes7} cursor={'pointer'} color={'white'} textDecoration={'underline'} fontSize={'20px'}>Uslublar jadvali 2,</Text>
                                <Text onClick={toSetRes3} cursor={'pointer'} color={'white'} textDecoration={'underline'} fontSize={'20px'}>Uslublar jadvali 3,</Text>
                                <Text onClick={toSetRes4} cursor={'pointer'} color={'white'} textDecoration={'underline'} fontSize={'20px'}>Uslublar jadvali 4,</Text>
                            </Box>
                        </Box>

                        <Box>
                            <Heading color={'#90EE90'}>Uslublar yo'q</Heading>
                            <Text fontSize={'20px'} color={'#90EE90'}>Ushbu sahifa HTML sahifasining turli bo'limlarini guruhlash uchun DIV elementlaridan foydalanadi. Uslublar jadvalisiz sahifa qanday ko'rinishini ko'rish uchun shu yerni bosing:</Text>
                            <Text onClick={handleRes5} cursor={'pointer'} textDecoration={'underline'} fontSize={'20px'}>Uslublar jadvali yo’q,</Text>
                        </Box>

                        <Box border={'2px'} p={'20px'} mt={'10px'}>
                            <Text fontSize={'20px'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</Text>
                        </Box>
                        

                      

                       
                    </Box>}
                    


                    { res5 &&<Box width={'100%'} overflow={'scroll'}  p={'30px'} height={'50%'} bg={'#fff'} display={'flex'} flexDirection={'column'} gap={'1px'}>
                        <Box >
                            <Heading color={'#000'}>Mening bosh sahifamga xush kelibsiz</Heading>
                            <Text color={'#000'}>Turli uslublar jadvallarini tanlash uchun menyudan foydalaning</Text>
                        </Box>
                        <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'}>
                            <Box mt={'20px'}>
                                <UnorderedList fontSize={'20px'}>
                                    <ListItem onClick={toSetRes1} cursor={'pointer'} color={'#000'}>Uslublar jadvali 1</ListItem>
                                    <ListItem onClick={toSetRes7} cursor={'pointer'} color={'#000'}>Uslublar jadvali 2</ListItem>
                                    <ListItem onClick={toSetRes3} cursor={'pointer'} color={'#000'}>Uslublar jadvali 3</ListItem>
                                    <ListItem onClick={toSetRes6} cursor={'pointer'} color={'#000'}>Uslublar jadvali 4</ListItem>
                                    <ListItem onClick={handleRes6} cursor={'pointer'} color={'#000'}>Uslublar jadvali yo’q</ListItem>
                                </UnorderedList>
                            </Box>
                        </Box>

                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Heading color={'#000'}>Xuddi shu sahifa turli uslublar jadvallari</Heading>
                            <Text color={'#000'} fontSize={'20px'}>Bu turli uslublar jadvallari sizning HTML sahifangiz tartibini qanday o'zgartirishi mumkinligini ko'rsatadi. Menyuda turli uslublar jadvallarini tanlash yoki quyidagi havolalardan birini tanlash orqali ushbu sahifaning tartibini o'zgartirishingiz mumkin:</Text>

                            <Box display={'flex'} gap={'20px'} flexWrap={'wrap'}>
                                <Text onClick={toSetRes1} cursor={'pointer'} color={'#000'} textDecoration={'underline'} fontSize={'20px'}>Uslublar jadvali 1,</Text>
                                <Text onClick={toSetRes7} cursor={'pointer'} color={'#000'} textDecoration={'underline'} fontSize={'20px'}>Uslublar jadvali 2,</Text>
                                <Text onClick={toSetRes3} cursor={'pointer'} color={'#000'} textDecoration={'underline'} fontSize={'20px'}>Uslublar jadvali 3,</Text>
                                <Text onClick={toSetRes6} cursor={'pointer'} color={'#000'} textDecoration={'underline'} fontSize={'20px'}>Uslublar jadvali 4,</Text>
                            </Box>
                        </Box>

                        <Box>
                            <Heading color={'#000'}>Uslublar yo'q</Heading>
                            <Text fontSize={'20px'} color={'#000'}>Ushbu sahifa HTML sahifasining turli bo'limlarini guruhlash uchun DIV elementlaridan foydalanadi. Uslublar jadvalisiz sahifa qanday ko'rinishini ko'rish uchun shu yerni bosing:</Text>
                            <Text onClick={handleRes6} cursor={'pointer'} textDecoration={'underline'}  color={'#000'} fontSize={'20px'}>Uslublar jadvali yo’q,</Text>
                        </Box>

                        <Box>
                            <Heading color={'#000'}>Side-Bar</Heading>
                            <Text color={'#000'} fontSize={'20px'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Text>
                        </Box>

                        <Box border={'2px'} p={'20px'} mt={'10px'}>
                            <Text fontSize={'20px'} color={'#000'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</Text>
                        </Box>
                        

                      

                       
                    </Box> }
                                        
                </Box>
            </Box>
            <Divider mt={'0px'} />


            <Box pl={{base: '10px' , md: '450px'}} fontSize={{base: '20px' , md: '25px'}} minHeight={'45vh'} display={'flex'} flexDirection={'column'} gap={'30px'} py={'50px'}>
                <Heading  fontSize={{base: '30px' , md: '50px'}}>Nima uchun CSS dan foydalanish kerak?</Heading>
                <Text>CSS veb-sahifalaringiz uchun uslublarni, jumladan, turli qurilmalar va ekran o'lchamlari uchun dizayn, tartib va ​​displeydagi o'zgarishlarni aniqlash uchun ishlatiladi.</Text>


                
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'650px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'450px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>body {`{`} </Text>
                        <Text pl={'30px'} color={'red'} fontSize={'25px'}>background-color: <span className='yellow'>lightblue;</span> </Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`}`} </Text>


                        <Text color={'#9D5EBB'} fontSize={'25px'}>h1  {`{`} </Text>
                        <Text pl={'30px'} color={'red'} fontSize={'25px'}>color:<span className='yellow'> white;</span> </Text>
                        <Text pl={'30px'} color={'red'} fontSize={'25px'}>text-align:<span className='yellow'>  center;</span> </Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`}`} </Text>


                        <Text color={'#9D5EBB'} fontSize={'25px'}>p {`{`} </Text>
                        <Text pl={'30px'} color={'red'} fontSize={'25px'}>font-family:<span className='yellow'>verdana;</span> </Text>
                        <Text pl={'30px'} color={'red'} fontSize={'25px'}>  font-size:<span className='yellow'>20px;</span> </Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`}`} </Text>


                    </Box>
                    
                    <CopyToClipboard text={`body {background-color: lightblue;}h1 {color: white;text-align: center;}p {font-family: verdana;font-size: 20px;}`} onCopy={handleClip} ><Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>

            <Divider mt={'40px'} />

            <Box pl={{base: '10px' , md: '450px'}} fontSize={{base: '20px' , md: '25px'}} minHeight={'45vh'} display={'flex'} flexDirection={'column'} gap={'10px'} py={'50px'}>
                <Heading  fontSize={{base: '30px' , md: '50px'}}>CSS katta muammoni hal qildi</Heading>
                <Text>HTML hech qachon veb-sahifani formatlash uchun teglarni o'z ichiga olmaydi!</Text>
                <Text>HTML veb-sahifa mazmunini tavsiflash uchun yaratilgan, masalan:</Text>
                <Text> <span className='red'>{`<h1>`}</span> Bu sarlavha <span className='red'>{`</h1>`}</span> </Text>
                <Text> <span className='red'>{`<p>`}</span> Bu paragraf <span className='red'>{`</p>`}</span> </Text>
                <Text> HTML 3.2 spetsifikatsiyasiga <span className='red'>{`<font>`}</span> kabi teglar va rang atributlari qo'shilgach, bu veb-ishlab chiquvchilar uchun dahshatli tushni boshladi. Har bir sahifaga shriftlar va rang ma'lumotlari qo'shiladigan yirik veb-saytlarni yaratish uzoq va qimmat jarayonga aylandi.</Text>
                <Text> CSS HTML sahifasidan uslub formatini olib tashladi!</Text>
                <Text> Agar siz HTML nima ekanligini bilmasangiz, HTML darsligimizni o'qib chiqishingizni tavsiya qilamiz.</Text>


                
            </Box>
            <Divider mt={'0px'} />


            <Box pl={{base: '10px' , md: '450px'}} fontSize={{base: '20px' , md: '25px'}} minHeight={'25vh'} display={'flex'} flexDirection={'column'} gap={'10px'} py={'10px'}>
                <Heading  fontSize={{base: '30px' , md: '50px'}}>CSS ko'p ishni tejaydi!</Heading>
                <Text>Uslub ta'riflari odatda tashqi .css fayllarida saqlanadi.</Text>
                <Text>Tashqi uslublar jadvali fayli yordamida siz faqat bitta faylni o'zgartirish <br /> orqali butun veb-sayt ko'rinishini o'zgartirishingiz mumkin!</Text>
            </Box>

        </Box>
    </Box>
  )
}

export default Html