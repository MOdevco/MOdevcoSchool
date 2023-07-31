import { Box , Heading , Image , Text , Button} from '@chakra-ui/react'
import { useEffect } from 'react'
import { beckImg } from '../assets'
import { ArrowLeftIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const BeckMalumot = () => {


    useEffect(() => {
      window.scroll(0,0)
    }, [])
    
  return (
    <Box height={'100%'} pt={'250px'} className={'bgImage'} px={{base: '25px', xl: '0'}} width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'flex-start'}>
        <Box mb={'100px'} display={'flex'} flexDirection={'column'} gap={'70px'}>
            <Box height={'100%'}>
                <Heading fontSize={{base: '30px' , xl: '50px'}}>
                    Beckend haqida qisqacha ma’lumot
                </Heading>
            </Box>


            <Box borderTop={'4px'} overflow={'scroll'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'20px'} justifyContent={'flex-start'} pt={'100px'} borderColor={'#7FFFD4'} height={'1500px'}  width={'100%'} bg={'#233242'}>
                
                <Box height={'1300px' }  overflow={'scroll'}width={'80%'} borderRadius={'20px'} bg={'#0A1624'}>
                    <Box>
                        <Image borderTopRightRadius={'20px'} borderTopLeftRadius={'20px'} src={beckImg}></Image>
                    </Box>

                    <Box p={'50px'} display={'flex'} flexDirection={'column'} gap={'50px'}>
                       <Box>
                            <Heading  fontSize={{base: '30px' , xl: '40px'}}>1 — Qism</Heading>
                            <Text pt={'10px'} maxWidth={'650px'}>
                                Backend (inglizcha back-end) - bu xizmatning dasturiy ta'minot va apparat qismidir. Bu veb-sayt mantig'i amalga oshiriladigan vositalar to'plami. Bu bizning ko'zimizdan yashiringan narsa, ya'ni kompyuter va brauzerdan tashqarida sodir bo'ladi. (Back End) Orqa tomon ishlab chiquvchilari veb-saytlarning foydalanuvchilar bilan bevosita aloqasi bo'lmagan "qopqoq ostida" qismlarini yaratadilar.
                            </Text>
                       </Box>

                       <Box>
                            <Heading  fontSize={{base: '30px' , xl: '40px'}}>2 — Qism</Heading>
                            <Text pt={'10px'} maxWidth={'650px'}>
                                 Backend (back end, back-end) esa Frontendning aksi hisoblanib, qaysidir narsaning ichki, yoki orqa tomoni degan ma’noni anglatadi. Bu bilan biz qaysidir narsaning hammaga ko’rinmaydigan, yashirin, ichki yoki orqa tomonini nazarda tutgan bo’lamiz.
                            </Text>
                       </Box>

                       <Box>
                            <Heading  fontSize={{base: '30px' , xl: '40px'}}>3 — Qism</Heading>
                            <Text pt={'10px'} maxWidth={'650px'}>
                                 Back End Development - orqa tomonni rivojlantirish, dasturning server tomoniga va ma'lumotlar bazasi va brauzer o'rtasida aloqador narsalarga tegishlidir. Back End Development/Orqa tomon ishlab chiqishi deganda, avvalo saytning ishlashiga e'tiborinni qaratadigan rivojlanishning server tomoni tushuniladi.
                            </Text>
                       </Box>

                       <Box>
                            <Heading  fontSize={{base: '30px' , xl: '40px'}}>4 — Qism</Heading>
                            <Text pt={'10px'} maxWidth={'650px'}>
                                Back-end Development server tomonidagi rivojlanishni anglatadi. Bu veb-saytda biron bir harakatni amalga oshirishda sodir bo'ladigan sahna ortidagi harakatlar uchun ishlatiladigan atama. Bu sizning hisobingizga kirishi yoki onlayn-do'kondan soat sotib olishi mumkin.
                            </Text>
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

export default BeckMalumot