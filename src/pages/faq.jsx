import { Box , Heading, Text  , Image} from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import { AddIcon , MinusIcon } from '@chakra-ui/icons'
import FaqItem from './faq/faqItem'
import Footer from '../components/footer/footer'
import { FaqImage } from '../assets'
const Faq = () => {
  return (
    <Box minHeight={'100vh'} display={'flex'} justifyContent={'center'} gap={'20px'} flexDirection={'row'} alignItems={'center'} width={'100%'}  pt={'200px'}>
        <Box width={{base: '100%' ,xl: '50%'}} display={'flex'} rounded={'20px'}  flexDirection={'column'}    gap={'10px'} bg={'#233242'} p={'20px'}> 
            <Box display={'flex'} width={'100%'} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                    <Heading fontSize={{base: '20px' , xl: '50px'}} textAlign={'start'}>FAQ</Heading>
                    <Text fontSize={'20px'}  pb={'20px'}>Tez-tez so'raladigan savollar</Text>
                </Box>
                <Image width={'150px'}  src={FaqImage}></Image>
                
            </Box>
           
           <FaqItem title={'Bu platforma bizga nma beradi?'} desc={"Platforma tartibida o'rgansangiz siz kelajakda bemalol ishlarni olib qilishingiz mumkun bo'ladi."} />


           <FaqItem title={'Kursi tugatganimdan so’ng biror narsa olamanmi?'} desc={"Yo'q faqat darsliklarni tugatasiz holos sertifikatga keladigan bo'lsak keyinchalik bu narsaniham rejalashtiryapmiz."} />

           <FaqItem title={'Homilik qilishim mumkunmi?'} desc={"Ha albatda qilsangiz bo'ladi uning uchun biz bilan bog'lanishingiz kerak bo'ladi telegram orqalik bog'lansa bo'ladi. Homilik maqsadlari faqat platforma rivoji va pullik darsliklar chiqgan taqdirda o'qish uchun mablag'i yoq o'quvchilarga yordam berish."} />

           <FaqItem title={'Videodagi darslarni yuklab olsam bo’ladimi?'} desc={"Yo'q darsliklarni yuklab olsa bo'lmaydi keyinchalik bunday imkoniyatni berish rejada bor"} />

           <FaqItem title={'Qanday qilib  platforma asoschisi bilan bog’lansam bo’ladi?'} desc={"Platforma asoschisi bilan telegram yordamida bog'lanishingiz mumkun bo'ladi."} />

           <FaqItem title={'Kursni qachondan boshlasam bo’ladi?'} desc={'Hohlagan vaqtda va hohlagan yoshda boshlash mumkun.'} />
           <FaqItem title={'Video darsliklarni qayerdan o’rgansam bo’ladi'} desc={"Bosh sahifadagi hohlagan texnalogiyangizni bo'limiga tushib video darslik degan tugma yordamida kirib ko'rsangiz bo'ladi"} />
           <FaqItem title={'Platforma yoki video darsliklarni yangi chiqgan holatlarini qayerdan bilsam bo’ladi?'} desc={"Telegram kanalimizga kirib yangiliklardan habardor bo'lishingiz mumkun."} />

        </Box>
        
    </Box>
  )
}

export default Faq