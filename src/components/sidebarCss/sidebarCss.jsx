import { Box , Heading , Button , Divider  } from '@chakra-ui/react'
import { Link , NavLink} from 'react-router-dom'
import { css10dars, css11dars, css12dars, css13dars, css14dars, css15dars, css16dars, css17dars, css18dars, css19dars, css1dars, css20dars, css21dars, css22dars, css2dars, css3dars, css4dars, css5dars, css6dars, css7dars, css8dars, css9dars } from '../../cssDesc'
import Html15dars from '../../pages/html15dars'

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

                                {css1dars.map((less , i) => (
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
                                {css2dars.map((less , i) => (
                                    <Button key={i}  bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                                {less.name}
                                        </NavLink>
                                    </Button>
                                ))}
                        </Box>

                        {/* ===========3-dars================ */}
                        <Box  display={'flex'} flexDirection={'column'} gap={'20px'} minHeight={'20vh'}>
                            <Button bg={'#7FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>3-Dars</Button>
                                {css3dars.map((less , i) => (
                                    <Button key={i}  bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                                {less.name}
                                        </NavLink>
                                    </Button>
                                ))}
                        </Box>

                        {/* ============4-dars=============== */}

                        <Box  display={'flex'} flexDirection={'column'} gap={'20px'} minHeight={'20vh'}>
                            <Button bg={'#7FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>4-Dars</Button>
                                {css4dars.map((less , i) => (
                                    <Button key={i}  bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                                {less.name}
                                        </NavLink>
                                    </Button>
                                ))}
                        </Box>

                        {/* ============5-dars========= */}
                        <Box  display={'flex'} flexDirection={'column'} gap={'20px'} minHeight={'20vh'}>
                            <Button bg={'#7FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>5-Dars</Button>
                                {css5dars.map((less , i) => (
                                    <Button key={i}  bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                                {less.name}
                                        </NavLink>
                                    </Button>
                                ))}
                        </Box>

                        {/* ===========6-dars============= */}

                        <Box  display={'flex'} flexDirection={'column'} gap={'20px'} minHeight={'20vh'}>
                            <Button bg={'#7FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>6-Dars</Button>
                                {css6dars.map((less , i) => (
                                    <Button key={i}  bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                                {less.name}
                                        </NavLink>
                                    </Button>
                                ))}
                        </Box>

                        {/* ============7-dars================== */}
                        <Box  display={'flex'} flexDirection={'column'} gap={'20px'} minHeight={'60vh'}>
                            <Button bg={'#7FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>7-Dars</Button>
                                {css7dars.map((less , i) => (
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
                            <Button bg={'#7FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>1-Dars</Button>
                                {css8dars.map((less , i) => (
                                    <Button key={i} bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                            {less.name}
                                        </NavLink >
                                    </Button>
                                ))}
                        </Box>

                        {/* =================2-dars===================== */}
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#7FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>2-Dars</Button>
                                {css9dars.map((less , i) => (
                                    <Button key={i} bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                            {less.name}
                                        </NavLink >
                                    </Button>
                                ))}
                        </Box>

                        {/* ===========3-dars================ */}
                        <Box  display={'flex'} flexDirection={'column'} gap={'20px'} minHeight={'20vh'}>
                            <Button bg={'#7FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>3-Dars</Button>
                                {css10dars.map((less , i) => (
                                    <Button key={i} bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                            {less.name}
                                        </NavLink >
                                    </Button>
                                ))}
                        </Box>


                        {/* ===============4-dars============= */}
                        <Box  display={'flex'} flexDirection={'column'} gap={'20px'} minHeight={'35vh'}>
                            <Button bg={'#7FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>4Dars</Button>
                                {css11dars.map((less , i) => (
                                    <Button key={i} bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                            {less.name}
                                        </NavLink >
                                    </Button>
                                ))}
                        </Box>


                        {/* ===============5-dars================== */}
                        <Box  display={'flex'} flexDirection={'column'} gap={'20px'} minHeight={'20vh'}>
                            <Button bg={'#7FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>5-Dars</Button>
                                {css12dars.map((less , i) => (
                                    <Button key={i} bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                            {less.name}
                                        </NavLink >
                                    </Button>
                                ))}
                        </Box>

                        {/* =================6-dars================ */}
                        <Box  display={'flex'} flexDirection={'column'} gap={'20px'} minHeight={'20vh'}>
                            <Button bg={'#7FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>6-Dars</Button>
                                {css13dars.map((less , i) => (
                                    <Button key={i} bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                            {less.name}
                                        </NavLink >
                                    </Button>
                                ))}
                        </Box>


                        {/* ==================7-dars============ */}
                        <Box  display={'flex'} flexDirection={'column'} gap={'20px'} minHeight={'60vh'}>
                            <Button bg={'#7FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>7-Dars</Button>
                                {css14dars.map((less , i) => (
                                    <Button key={i} bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                            {less.name}
                                        </NavLink >
                                    </Button>
                                ))}
                        </Box>
                    </Box>
                    
                    
                    {/* ===============3-MODUL============== */}
                    <Box display={'flex'} flexDirection={'column'}   gap={'20px'} minHeight={'50vh'}>
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#fff'} width={'100%'} height={'50px'} _hover={{bg: ''}} fontSize={'25px'} color={'#000'}>3-Modul</Button>
                            <Button bg={'#4FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>1-Dars</Button>
                                {css15dars.map((less , i) => (
                                    <Button key={i} bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                            {less.name}
                                        </NavLink >
                                    </Button>
                                ))}
                        </Box>


                        {/* ===============2-dars================= */}
                         <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#4FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>2-Dars</Button>
                                {css16dars.map((less , i) => (
                                    <Button key={i} bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                            {less.name}
                                        </NavLink >
                                    </Button>
                                ))}
                        </Box>


                        {/* ================3-dars=================== */}
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#4FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>3-Dars</Button>
                                {css17dars.map((less , i) => (
                                    <Button key={i} bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                            {less.name}
                                        </NavLink >
                                    </Button>
                                ))}
                        </Box>

                        {/* ================4-dars================== */}
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#4FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>4-Dars</Button>
                                {css18dars.map((less , i) => (
                                    <Button key={i} bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                            {less.name}
                                        </NavLink >
                                    </Button>
                                ))}
                        </Box>

                        {/* =================5-dars================== */}
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#4FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>5-Dars</Button>
                                {css19dars.map((less , i) => (
                                    <Button key={i} bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                            {less.name}
                                        </NavLink >
                                    </Button>
                                ))}
                        </Box>

                        {/* =====================6-dars================ */}
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#4FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>6-Dars</Button>
                                {css20dars.map((less , i) => (
                                    <Button key={i} bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                            {less.name}
                                        </NavLink >
                                    </Button>
                                ))}
                        </Box>

                        {/* =================7-dars================== */}
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#4FFFD4'} width={'100%'} height={'50px'} _hover={{bg: '#4FFFD4'}} fontSize={'25px'} color={'#000'}>7-Dars</Button>
                                {css21dars.map((less , i) => (
                                    <Button key={i} bg={'#0A1624'} width={'100%'} height={'50px'} _hover={{bg: '#222'}} fontSize={'17px'} color={'white'}>
                                        <NavLink style={({isActive}) => {return{color: isActive ? '#7FFFD4' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={less.link}>
                                            {less.name}
                                        </NavLink >
                                    </Button>
                                ))}
                        </Box>

                    </Box>

                    {/* ==========4-MODUL============ */}
                    <Box display={'flex'} flexDirection={'column'}   gap={'20px'} minHeight={'70vh'} pt={'100px'}>
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button bg={'#ffff'} width={'100%'} height={'50px'} _hover={{bg: ''}} fontSize={'25px'} color={'#000'}>4-Modul</Button>
                                {css22dars.map((less , i) => (
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