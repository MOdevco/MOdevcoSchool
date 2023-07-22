import { Box , Heading , Text , Button } from '@chakra-ui/react'

const LessonCards = ({title ,text , bg , color , cardBg , cardColor}) => {
  return (
    <Box display={'flex'} flexDirection={'column'}  alignItems={'center'} justifyContent={'center'} mt={'100px'}>
        <Box bg={cardBg} p={'80px'} rounded={'10px'} height={'350px '} display={'flex'} flexDirection={'column'} gap={'20px'} color={cardColor} textAlign={'center'}>
            <Heading>{title}</Heading>
            <Text maxW={'400px'}>{text}</Text>
            <Button bg={bg} _hover={{bg: '#2222'}} color={color}>BOSHLASH</Button>
        </Box>
    </Box>
  )
}

export default LessonCards