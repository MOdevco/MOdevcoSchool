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
import Particl from '../components/particl'
const Faq = () => {
  return (
    <Box minHeight={'100vh'} display={'flex'} justifyContent={'center'} gap={'20px'} flexDirection={'row'} alignItems={'center'} width={'100%'}  pt={'200px'}>
      <Particl />
        <Box width={{base: '100%' ,xl: '50%'}} display={'flex'} rounded={'20px'}  flexDirection={'column'}    gap={'10px'} bg={'#233242'} p={'20px'}> 
            <Box display={'flex'} width={'100%'} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                    <Heading fontSize={{base: '20px' , xl: '50px'}} textAlign={'start'}>FAQ</Heading>
                    <Text fontSize={'20px'}  pb={'20px'}>Tez-tez so'raladigan savollar</Text>
                </Box>
                <Image width={'150px'}  src={FaqImage}></Image>
                
            </Box>
           
           <FaqItem title={'Bu platforma bizga nima beradi?'} desc={"Platforma tartibida o'rgansangiz va kelajakda hech qanday muamolarisiz loyihalarni bajara olasiz."} />


           <FaqItem title={'Kurs menga nima beradi?'} desc={"Darslardagi ma'lumotlarni mukammal o'rgatadi"} />

           <FaqItem title={'Homiylik qilishim mumkinmi?'} desc={"Ha albatda qilsangiz bo'ladi. Uning uchun biz bilan bog'lanishingiz kerak bo'ladi. Telegram orqalik bog'lansa bo'ladi. Homiylik maqsadlari faqat platforma rivoji va pullik darsliklar chiqgan taqdirda o'qish uchun mablag'i mavjud bo'lmagan o'quvchilarga yordam berish."} />

           <FaqItem title={'Videodagi darslarni yuklab olsam bo’ladimi?'} desc={"Yo'q darsliklarni yuklab olsa bo'lmaydi. Keyinchalik bunday imkoniyatni berish rejada bor"} />

           <FaqItem title={'Qanday qilib  platforma asoschisi bilan bog’lansam bo’ladi?'} desc={"Platforma asoschisi bilan telegram yordamida bog'lanishingiz mumkin bo'ladi."} />

           <FaqItem title={'Kursni qachondan boshlasam bo’ladi?'} desc={'Xohlagan vaqtda va xohlagan yoshda boshlash mumkin.'} />
           <FaqItem title={'Video darsliklarni qayerdan o’rgansam bo’ladi'} desc={"Bosh sahifadagi xohlagan texnalogiyangizni bo'limiga tushib video darslik degan tugma yordamida kirib ko'rsangiz bo'ladi"} />
           <FaqItem title={'Platforma yoki video darsliklarni yangi chiqgan holatlarini qayerdan bilsam bo’ladi?'} desc={"Telegram kanalimizga kirib, yangiliklardan xabardor bo'lishingiz mumkin."} />

        </Box>
        
    </Box>
  )
}

export default Faq