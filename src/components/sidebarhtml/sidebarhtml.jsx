import { Box , Heading , Button , Divider  } from '@chakra-ui/react'
import { Link , NavLink} from 'react-router-dom'
import { html1dars ,html2dars , html3dars , html4dars , html5dars , html6dars , html7dars ,html8dars} from '../../htmlDesc'

const SidebarCss = ({title , elementName }) => {
    
   
  return (
    <Box  display={{base: 'none' , md: 'block'}} className={'sidebar'}>
        <Box position={'fixed'} zIndex={'1'} display={'flex'} borderRight={'2px'} overflowY={'scroll'} borderColor={'#2D2D2D'} justifyContent={'center'} alignItems={'flex-start'} textAlign={'center'} pt={'190px'}  width={'365.02px'} height={'100vh'} bg={'#050E17'} top={{base: '100px' , xl: '50px'}}>
            <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                <Box>
                    <Heading color={'white'} fontSize={'35px'}>{title}</Heading>
                </Box>
                <Box>
                    
                    <Link to={'/'}>
                        <Button bg={'#0A1624'} color={'white'} _hover={{bg : ''}} width={'304px'} height='50px' fontSize={'25px'}>{elementName}</Button>
                    </Link>
                </Box>
                <Box>
                    {/* <AccordionItem  /> */}
                    {/* =============1-MODUL================== */}
                    <Box display={'flex'} flexDirection={'column'}   gap={'20px'}>
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#ffff'} width={'100%'} height={'50px'}  fontSize={'25px'} color={'black'}>1-Modul</Button>
                            <Button bg={'#7FFFD4'}  _hover={{bg: '#7fffd4'}} width={'100%'} height={'50px'} fontSize={'25px'} color={'#000'}>1-Dars</Button>

                                {html1dars.map((less , i) => (
                                    <Button key={i}   bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink  style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                                {less.name}
                                        </NavLink>
                                    </Button>
                                ))}
                        </Box>

                        {/* =================2-dars===================== */}
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#7FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>2-Dars</Button>
                                {html2dars.map((less , i) => (
                                    <Button key={i}  bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                                {less.name}
                                        </NavLink>
                                    </Button>
                                ))}
                        </Box>

                        {/* ===========3-dars================ */}
                        <Box  display={'flex'} flexDirection={'column'} gap={'20px'} minHeight={'40vh'}>
                            <Button bg={'#7FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>3-Dars</Button>
                                {html3dars.map((less , i) => (
                                    <Button key={i}  bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                                {less.name}
                                        </NavLink>
                                    </Button>
                                ))}
                        </Box>
                    </Box>


                    {/* =========2-MODUL======================== */}
                    <Box display={'flex'} flexDirection={'column'}   gap={'20px'}>
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#fff'} width={'100%'} height={'50px'} _hover={{bg: ''}} fontSize={'25px'} color={'#000'}>2-Modul</Button>
                            {/* <Divider /> */}
                            <Button bg={'#7FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>1-Dars</Button>
                                {html4dars.map((less , i) => (
                                    <Button key={i} bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                            {less.name}
                                        </NavLink >
                                    </Button>
                                ))}
                            {/* <Divider /> */}
                        </Box>

                        {/* =================2-dars===================== */}
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#7FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>2-Dars</Button>
                                {html5dars.map((less , i) => (
                                    <Button key={i} bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                            {less.name}
                                        </NavLink >
                                    </Button>
                                ))}
                        </Box>

                        {/* ===========3-dars================ */}
                        <Box  display={'flex'} flexDirection={'column'} gap={'20px'} minHeight={'35vh'}>
                            <Button bg={'#7FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>3-Dars</Button>
                                {html6dars.map((less , i) => (
                                    <Button key={i} bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                            {less.name}
                                        </NavLink >
                                    </Button>
                                ))}
                            {/* <Divider /> */}
                        </Box>
                    </Box>
                    
                    
                    {/* ===============3-MODUL============== */}
                    <Box display={'flex'} flexDirection={'column'}   gap={'20px'} minHeight={'50vh'}>
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#fff'} width={'100%'} height={'50px'} _hover={{bg: ''}} fontSize={'25px'} color={'#000'}>3-Modul</Button>
                            {/* <Divider /> */}
                            <Button bg={'#4FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>1-Dars</Button>
                                {html7dars.map((less , i) => (
                                    <Button key={i} bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                            {less.name}
                                        </NavLink >
                                    </Button>
                                ))}
                        </Box>

                    </Box>

                    {/* ==========4-MODUL============ */}
                    <Box display={'flex'} flexDirection={'column'}   gap={'20px'} minHeight={'50vh'}>
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#ffff'} width={'100%'} height={'50px'} _hover={{bg: ''}} fontSize={'25px'} color={'#000'}>4-Modul</Button>
                            {/* <Divider /> */}
                                {html8dars.map((less , i) => (
                                    <Button key={i} bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                            {less.name}
                                        </NavLink >
                                    </Button>
                                ))}
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default SidebarCss