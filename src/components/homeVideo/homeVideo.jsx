import { Box } from '@chakra-ui/react'
import { video } from '../../assets'

const HomeVideo = () => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} minHeight={'50vh'}>

        <Box>
            <video style={{width: '980px' , borderRadius: '20px'}} src={video} autoPlay muted loop></video>
        </Box>

    </Box>
  )
}

export default HomeVideo