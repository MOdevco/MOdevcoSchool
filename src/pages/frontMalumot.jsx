import { Box , Heading , Image , Button} from '@chakra-ui/react' 
import { frontImg } from '../assets'
import {
    ListItem,
    UnorderedList,
  } from '@chakra-ui/react'
import { useEffect } from 'react'
import { ArrowLeftIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import Particl from '../components/particl'

const FrontMalumot = () => {

    useEffect(() => {
        window.scroll(0,0)
      }, [])
  return (
    <Box height={'100%'} className={'bgImage'} pt={'250px'} px={{base: '25px', xl: '0'}} width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'flex-start'}>
        <Particl />
    
        <Box mb={'100px'} display={'flex'} flexDirection={'column'} gap={'70px'}>
            <Box height={'100%'}>
                <Heading fontSize={{base: '30px' , xl: '50px'}}>
                    Front-end dasturchi bo’lishni istaganlar <br /> uchun qo’llanma
                </Heading>
            </Box>
            
            <Box borderTop={'4px'} overflow={'scroll'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'} pt={'100px'} borderColor={'#7FFFD4'} height={'3500px'} gap={'20px'}  width={'100%'} bg={'#233242'}>
                <Box height={'3300px' }  overflow={'scroll'}width={'80%'} borderRadius={'20px'} bg={'#0A1624'}>
                    <Box>
                        <Image borderTopRightRadius={'20px'} borderTopLeftRadius={'20px'} src={frontImg}></Image>
                    </Box>
                    <Box p={'50px'}   display={'flex'} flexDirection={'column'} gap={'100px'}>
                        <Box>
                            <Heading fontSize={{base: '30px' , xl: '40px'}}>1 — Qism</Heading>
                            <UnorderedList  fontSize={{base: '15px' ,xl:'20px'}}>
                                <ListItem>Semantik belgilar (Semantic markup)</ListItem>
                                <ListItem>HTML standartlari tartibi va quirks rejimi</ListItem>
                                <ListItem>HTML asoslari</ListItem>
                                <ListItem>Class(lar) va ID(lar) bilan ishlash.</ListItem>
                                <ListItem>CSS asoslari</ListItem>
                                <ListItem>Selector(lar), Reset(lar) and no rmalizer(lar), box model bilan ishlash (border-box).</ListItem>
                                <ListItem>Mobil dizayn printsiplari</ListItem>
                                <ListItem>Ish stoli dizayn tamoyillari (Desktop design principles)</ListItem>
                                <ListItem>JavaScript fundamentals</ListItem>
                                <ListItem>Argumentlar va funktsiyalar(Variables and functions)</ListItem>
                                <ListItem>Ma'lumot tarkibi(Data structures)</ListItem>
                                <ListItem>Ob'ektga yo'naltirilgan JavaScript(Object-oriented JavaScript)</ListItem>
                                <ListItem>Birinchi darajali funktsiyalar(First-class functions)</ListItem>
                                <ListItem>Maydonlar va qoplamalar(Scopes and closures)</ListItem>
                                <ListItem>Turlar va grammatika(Types and grammar)</ListItem>
                                <ListItem>Node.js asoslari</ListItem>
                                <ListItem>Test-driven JavaScript</ListItem>
                                <ListItem>Versiyalarni boshqarish(Version control)</ListItem>
                            </UnorderedList>
                        </Box>
                        
                        <Box > 
                            <Heading fontSize={{base: '30px' , xl: '40px'}}>2 — Qism</Heading>
                            <UnorderedList fontSize={{base: '15px' ,xl:'20px'}}>
                                <ListItem>Internet qanday ishlaydi?</ListItem>
                                <ListItem>HTTP harakatlar (HTTP actions), So'rov / javob hederlari( Request/response headers)</ListItem>
                                <ListItem>Brauzer Eventlari (Browser Events)</ListItem>
                                <ListItem>JavaScript-da prototypal inheritens(Prototypal inheritance in JavaScript)</ListItem>
                                <ListItem>Ajax</ListItem>
                                <ListItem>Mijozlar tomonida nosozliklarni tuzatish strategiyalari(Client-side debugging strategies)</ListItem>
                                <ListItem>Foydalanuvchi tadqiqotlari(User research)</ListItem>
                                <ListItem>UX asoslari</ListItem>
                                <ListItem>UI prototipi (UI prototyping)</ListItem>
                                <ListItem>UI me'morchiligi (UI architecture)</ListItem>
                                <ListItem>Yuzibiliti va aksesibiliti(Usability and accessibility)</ListItem>
                                <ListItem>jQuery asoslari</ListItem>
                                <ListItem>jQuery UI</ListItem>
                                <ListItem>HTML shabloni (HTML templating (e.g. Handlebars, etc.))</ListItem>
                                <ListItem>Front-end Build Tool-lar va Workflow-lar(Front-end Build Tools and Workflows)</ListItem>
                                <ListItem>Intermediate CSS</ListItem>
                                <ListItem>Float-lar</ListItem>
                                <ListItem>Texnikani tozalash(Clearing techniques)</ListItem>
                                <ListItem>Samarali CSS-ni yozish(Writing efficient CSS)</ListItem>
                                <ListItem>CSS o'tishlari va animatsiyalar(CSS transitions and animations)</ListItem>
                                <ListItem>Tarjimalar(Translations)</ListItem>
                                <ListItem>CSS preprocessorlari: SASS, LESS va Stylus</ListItem>
                                <ListItem>Progressiv takomillashtirish (va nozik tanazzul)(Progressive enhancement (and graceful degradation))</ListItem>
                            </UnorderedList>
                        </Box>

                        <Box>
                            <Heading fontSize={{base: '30px' , xl: '40px'}}>3 — Qism</Heading>
                            <UnorderedList fontSize={{base: '15px' ,xl:'20px'}}>
                                <ListItem>Asenkron JavaScript( Asynchronous JavaScript)</ListItem>
                                <ListItem>Callback-lar , Promise -lar</ListItem>
                                <ListItem>Funktsional JavaScript (Partial application, Currying, Immutable data)</ListItem>
                                <ListItem>Mahalliylashtirish va xalqarolashtirish (Localization and internationalization)</ListItem>
                                <ListItem>Responsive dizayn, media querie-lar, va breakpoint -lar(Responsive design, media queries, and breakpoints)</ListItem>
                                <ListItem>CSS framework -lar (Bootstrap, Foundation, Pure, Skeleton)</ListItem>
                                <ListItem>CSS metodologiyasi (CSS methodologies — OOCSS ,BEM, SMACSS)</ListItem>
                                <ListItem>cookie, sessionStorage, and localStorage</ListItem>
                                <ListItem>HTML 5 Media APIs — lar (Canvas, Web Audio, Video, WebRTC)</ListItem>
                                <ListItem>Flexbox</ListItem>
                                <ListItem>Rasmni almashtirish metodlari(Image replacement techniques)</ListItem>
                                <ListItem>Web font-lar va responsive typography-lar(Web fonts and responsive typography)</ListItem>
                            </UnorderedList>
                        </Box>


                        <Box>
                            <Heading fontSize={{base: '30px' , xl: '40px'}}>4 — Qism</Heading>
                            <UnorderedList fontSize={{base: '15px' ,xl:'20px'}}>
                                <ListItem>CORS</ListItem>
                                <ListItem>Veb tarkibiy qismlari(Web components)</ListItem>
                                <ListItem>WebSocket -lar(WebSockets)</ListItem>
                                <ListItem>O'zaro faoliyat brauzerini ishlab chiqish va sinovdan o'tkazish(Cross-browser development and testing)</ListItem>
                                <ListItem>Front-end JavaScript Framework</ListItem>
                                <ListItem>Apache Cordova bilan mobil rivojlanish(Mobile Development with Apache Cordova)</ListItem>
                                <ListItem>CDN va aktivlarni etkazib berish(CDNs and Asset Delivery)</ListItem>
                                <ListItem>Oflayn keshlash(Offline Caching)</ListItem>
                                <ListItem>Mijozlar xavfsizligi(Data visualization wit D3)</ListItem>
                                <ListItem>Data visualization D3</ListItem>
                                <ListItem>Scalable Vector Graphic -lar (SVG formatlashSVG chegaralari)(Styling SVG , Limits of SVG)</ListItem>
                                <ListItem>Client-side performance</ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                </Box>

                <Link to={'/'}>
                    <Box >
                        <Button display={'flex'} alignItems={'center'} gap={'20px'} bg={'#0A1624'} color={'white'} _hover={{bg: '#222'}}>
                            <ArrowLeftIcon />
                            Bosh sahifaga qaytish
                        </Button>
                    </Box>
                </Link>
            </Box>

        </Box>
       


    </Box>
  )
}

export default FrontMalumot