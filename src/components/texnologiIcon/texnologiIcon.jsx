import { Box , Image , Text , Heading } from '@chakra-ui/react'
import { booPast, chakraPast, cssPast, htmlPast, jsPast, materPast, nextPast, reatcPast, tailPast } from '../../assets'
import TexnoCards from '../texnoCards/texnoCards'


const TexnologiIcon = () => {
  return (
    <Box height={{base: '100%' , xl: '40vh'}} mt={'100px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
        <Box  maxW={'1633px'} mx={'auto'}   >
            <Box display={'flex'} overflow={'scroll'} flexWrap={'wrap'}  gap={'40px'} alignItems={'center'} justifyContent={'center'}>
                <TexnoCards cardImg={htmlPast}cardTitle={'HTML'} modalTitle={'HTML stands for Hyper Text Markup Language. HTML veb-sahifalar uchun standart belgilash tilidir.'}/>
                <TexnoCards cardImg={cssPast}cardTitle={'CSS'} modalTitle={"CSS qisqartmasi Cascading Style Sheets degan ma'noni anglatadi"} />
                <TexnoCards cardImg={jsPast}cardTitle={"JAVASCRIPT"} modalTitle={'JavaScript dasturlash tili deyiladi.'} />
                <TexnoCards cardImg={booPast}cardTitle={"BOOTSTRAP"} modalTitle={"Onlayn muharririmiz yordamida siz kodni tahrirlashingiz va natijani ko'rish uchun tugmani bosishingiz mumkin."} />
                <TexnoCards cardImg={reatcPast}cardTitle={"REACT JS"} modalTitle={`Bizning "Reaktsiyani ko'rsatish" vositamiz Reactni namoyish qilishni osonlashtiradi. U kodni ham, natijani ham ko'rsatadi.`} />
            </Box>
        </Box>
    </Box>
  )
}

export default TexnologiIcon