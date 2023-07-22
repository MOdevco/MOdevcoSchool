import { Box } from '@chakra-ui/react'
import LessonCards from '../lessonCards/lessonCards'

const HomeLessons = () => {
  return (
    <Box mt={'100px'}  >
        <Box>
            <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'} gap={'50px'}>
                <LessonCards cardBg={'#FFE4E1'} cardColor={'black'} title={'BOOTSTRAP'} bg={'#7FFFD4'} color={'black'} text={"Yaxshiroq veb-sahifalarni loyihalash uchunCSS ramkasi"}/>
                <LessonCards cardBg={'#778899'} cardColor={'white'} title={'TAILWIND '} bg={'#4682B4'} color={'black'} text={"HTMLni tark etmasdan tezda zamonaviy veb-saytlarni yarating"}/>
            </Box>
            <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'} gap={'50px'}>
                <LessonCards cardBg={'#87CEEB'} cardColor={'black'} title={'CHAKRA UI'} bg={'#008080'} color={'black'} text={"Tezlik bilan kirish mumkin bo'lgan React     ilovalarini yarating Chakra UI"}/>
                <LessonCards cardBg={'#BDB76B'} cardColor={'white'} title={'MATERIAL UI'} bg={'#778899'} color={'black'} text={"Material UI Google Material Design dasturini amalga oshiradigan React UI komponentlari kutubxonasi."}/>
            </Box>
            <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'} gap={'50px'}>
                <LessonCards cardBg={'#EE82EE'} cardColor={'black'} title={'NEXT JS'} bg={'#B0E0E6'} color={'black'} text={"Next.js ilovangiz uchun qo'shimcha tuzilma,   xususiyatlar va optimallashtirishlarni taqdim etadi."}/>
                <LessonCards cardBg={'#008080'} cardColor={'white'} title={'TYPESCRIPT'} bg={'#CCCCCC'} color={'black'} text={"TypeScript JavaScript-ga asoslangan kuchli     terilgan dasturlash tili"}/>
            </Box>
        </Box>

    </Box>
  )
}

export default HomeLessons