import { Box , Flex , Heading , Button , Text , Image} from '@chakra-ui/react'
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
  } from '@chakra-ui/react'
import AccordionItenm from '../components/accordion/accordion'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useState } from 'react'

const Html6dars = () => {
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
  return (
    <Box pt={'200px'} width={'100%'} bg={'#1A202C'} height={'100%'}>
        <Box >
            <Flex >
                {onOpen && <Box>
                    <Sidebar title={'HTML DARSLARI'} elementName={'Bosh sahifa'} html1={'/html1dars'} html2={'/html2dars'} html3={'/html3dars'} html4={'/html4dars'}  html5={'/html5dars'}  html6={'/html6dars'}  html7={'/html7dars'} html11={'/html11dars'} html12={'/html12dars'} html13={'/html13dars'}    lesson1={'1-Mavzu: Html O’rnatish'} lesson2={'2-Mavzu: Html Asosiy Misollar'} lesson3={'3-Mavzu: Html Hedinglar'} lesson4={'4-Mavzu: Html Paragraphlar'} lesson5={'1-Mavzu: HTML Formatlash'} lesson6={'2-Mavzu: Html Komentariya'} lesson7={'3-Mavzu: Html Link'} lesson8={'1-Mavzu: Html Image'} lesson9={'2-Mavzu: Html Favicon va Tittle'} lesson10={'3-Mavzu: Html Table'} lesson11={'1-Mavzu: Html Listlar'} lesson12={'2-Mavzu: Html Block va Inline'} lesson13={'3-Mavzu: Html Emojilar '} lesson14={'1-Mavzu: Html Formalar'}  lesson15={'2-Mavzu: Html Form Attributlari'} lesson16={'3-Mavzu: Html Form Elemtlari'} lesson17={'1-Mavzu: Html Input turlari'} lesson18={'2-Mavzu: Html Input Attributlari'} lesson19={'3-Mavzu: Html Input va Formla'} lesson20={'1-Mavzu: Html Medialar'} lesson21={'2-Mavzu: Html Video'} lesson22={'3-Mavzu: Html Audio '} lesson23={'4-Mavzu: Html YouTube '} amalyot1={'1-Mavzu: Amaliyot'} amalyot2={'2-Mavzu: Amaliyot'} />
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
                            <AccordionItenm  html1={'/html1dars'} html2={'/html2dars'} html3={'/html3dars'} html4={'/html4dars'}  html5={'/html5dars'}  html6={'/html6dars'}  html7={'/html7dars'} html11={'/html11dars'} html12={'/html12dars'} html13={'/html13dars'}    lesson1={'1-Mavzu: Html O’rnatish'} lesson2={'2-Mavzu: Html Asosiy Misollar'} lesson3={'3-Mavzu: Html Hedinglar'} lesson4={'4-Mavzu: Html Paragraphlar'} lesson5={'1-Mavzu: HTML Formatlash'} lesson6={'2-Mavzu: Html Komentariya'} lesson7={'3-Mavzu: Html Link'} lesson8={'1-Mavzu: Html Image'} lesson9={'2-Mavzu: Html Favicon va Tittle'} lesson10={'3-Mavzu: Html Table'} lesson11={'1-Mavzu: Html Listlar'} lesson12={'2-Mavzu: Html Block va Inline'} lesson13={'3-Mavzu: Html Emojilar '} lesson14={'1-Mavzu: Html Formalar'}  lesson15={'2-Mavzu: Html Form Attributlari'} lesson16={'3-Mavzu: Html Form Elemtlari'} lesson17={'1-Mavzu: Html Input turlari'} lesson18={'2-Mavzu: Html Input Attributlari'} lesson19={'3-Mavzu: Html Input va Formla'} lesson20={'1-Mavzu: Html Medialar'} lesson21={'2-Mavzu: Html Video'} lesson22={'3-Mavzu: Html Audio '} lesson23={'4-Mavzu: Html YouTube '} amalyot1={'1-Mavzu: Amaliyot'} amalyot2={'2-Mavzu: Amaliyot'}/>
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '50px'}}>HTML Comments</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box height={{base: '20vh' , md: '15vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'25px'}>HTML sharhlari brauzerda ko'rsatilmaydi, lekin ular HTML manba kodingizni hujjatlashtirishga yordam beradi.</Text>
            </Box>
            <Divider mt={'20px'} />
           
            
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> HTML Comment Tag</Heading>
                <Text fontSize={'25px'}> Quyidagi sintaksisdan foydalanib, HTML manbangizga sharhlar qo'shishingiz mumkin:</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'250px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'90px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<!--`} <span style={{color: 'white'}}>Commentlarizi shu yerga yozing</span> {`-->`}</Text>
                    </Box>

                    <CopyToClipboard text=" <!-- Commentlarizi shu yerga yozing -->" onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

                <Text fontSize={'25px'}>E'tibor bering, boshlang'ich tegda undov belgisi <span style={{color: 'red'}}>(!)</span> bor, lekin oxirgi tegda emas.</Text>
                <Text fontSize={'25px'}><span style={{color: '#7FFFD4'}}>Eslatma:</span> Sharhlar brauzer tomonidan ko'rsatilmaydi, lekin ular HTML manba kodingizni hujjatlashtirishga yordam beradi.</Text>
                
            </Box>
            <Divider mt={'20px'} />

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> Comment Qo’shish</Heading>
                <Text fontSize={'25px'}> Commentlar bilan siz HTML kodingizga bildirishnomalar va eslatmalarni joylashtirishingiz mumkin:</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'340px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'170px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`<p>`}<span> Bu paragraph.</span> {`</p>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`<!--`} {`<p>`}<span> Bu boshqa paragraph.</span> {`</p>`} {`-->`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`<!--`}<span> Qo'shimcha ma'lumotni bu yerga qo'shishni unutmang </span>  {`-->`}</Text>
                    </Box>

                    <CopyToClipboard text="<!-- <p>Bu boshqa paragraf </p> --><!-- Qo'shimcha ma'lumotni bu yerga qo'shishni unutmang --><p>Bu paragraph.</p>" onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                
                <Text color={'#fff'} fontSize={'25px'}>Bundan tashqari, bir nechta qatorni yashirishingiz mumkin. <span style={{color: 'red'}}>{`<!-- va -->`}</span> orasidagi hamma narsa displeydan yashiriladi.</Text>
                
                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'470px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'25px'}>HTML kod qismini yashirish</Text>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'260px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`<p>`}<span> Bu paragraph.</span> {`</p>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`<!--`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`<p>`}<span>Ushbu ajoyib rasmga qarang:</span> {`</p>`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`<img`} <span style={{color: 'red'}}>border=</span><span style={{color: 'yellow'}}>"#"</span> <span style={{color: 'red'}}>src</span> <span style={{color: 'yellow'}}>"pic_trulli.jpg"</span> <span style={{color: 'red'}}>alt</span> <span style={{color: 'yellow'}}>"Trulli"</span> {'>'} </Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`-->`}</Text>
                        <Text color={'#9D5EBB'} fontSize={'25px'}> {`<p>`}<span> Bu paragraph.</span> {`</p>`}</Text>
                        
                    </Box>

                    <CopyToClipboard text={`<p>Bu paragraph</p><p>Bu paragraph</p><!--<p>Look at this cool image:</p><img border="0" src="pic_trulli.jpg" alt="Trulli">-->`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>

            </Box>
            <Divider mt={'20px'} />
            

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'60vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> Inline Content Yashirish</Heading>
                <Text fontSize={'25px'}> Comentlar HTML kodining o'rtasida joylashgan qismlarni yashirish uchun ishlatilishi mumkin.</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'320px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Text fontSize={'25px'}> Paragrafning bir qismini yashirish:</Text>
                    <Box width={'90%'} borderLeft={'4px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'} pt={4} borderColor={'#7FFFD4'} height={'100px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'25px'}>{`<p>`} <span>Bu</span> <span style={{color: 'red'}}>{`<!-- A'lo yozuv -->`}</span> <span>paragraph.</span> {`</p>`}</Text>
                    </Box>

                    <CopyToClipboard text=" <p>Bu <!-- great text --> paragraph.</p>" onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>

           
            
        </Box>
    </Box>
  )
}

export default Html6dars