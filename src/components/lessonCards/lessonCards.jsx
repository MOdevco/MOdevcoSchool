import { Box , Heading , Text , Button } from '@chakra-ui/react'

const LessonCards = ({title ,text , bg , color , cardBg , cardColor}) => {
  return (
    <Box display={'flex'} flexDirection={'column'} flexWrap={'wrap'}  alignItems={'center'} justifyContent={'center'} mt={'100px'}>
        <Box bg={cardBg}  rounded={'10px'} px={{base: '0' , md: '60px'}} width={'100%'} height={'350px '} display={'flex'} flexDirection={'column'} justifyContent={'center'}alignItems={'center'} gap={'20px'} color={cardColor} textAlign={'center'}>
            <Heading>{title}</Heading>
            <Text maxW={'400px'}>{text}</Text>
            <Button bg={bg} _hover={{bg: '#2222'}} color={color}>BOSHLASH</Button>
        </Box>
    </Box>
  )
}

export default LessonCards