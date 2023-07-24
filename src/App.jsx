import { Box , Button , Heading } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import Home from './pages/Home'
import { ArrowUpIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import Html from './pages/html'
import Html1dars from './pages/html1dars'
import Html2dars from './pages/html2dars'
import Html3dars from './pages/html3dars'
import Html4dars from './pages/html4dars'
import Html5dars from './pages/html5dars'
import { CloseIcon } from '@chakra-ui/icons'
import Html6dars from './pages/html6dars'
import Html7dars from './pages/html7dars'
function App() {
  const [scroll , setScroll] = useState(false)
  const [time , setTime] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTime(true)
    } , 360000)
  
    if(time) {
      setTimeout(() => {
        setTime(false)
      }, 5000)
    }
    
  } , [time])
  const handleClose = () => {
    setTime(false)
  }




  useEffect(() => {
    window.addEventListener('scroll' , e => {
      if(window.scrollY > 10) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }) 
  } , [])
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }



  return (
    <Box bg={'#1A202C'} >
      <Box position={'fixed'} width={'100%'} zIndex={10}>
        <Header />
        <Navbar />
      </Box>

      <Routes >
        <Route path='/' element={<Home />} ></Route>
        <Route path='/html' element={<Html />} ></Route>
        <Route path='/html1dars' element={<Html1dars />} ></Route>
        <Route path='/html2dars' element={<Html2dars />} ></Route>
        <Route path='/html3dars' element={<Html3dars/>} ></Route>
        <Route path='/html4dars' element={<Html4dars />} ></Route>
        <Route path='/html5dars' element={<Html5dars />} ></Route>
        <Route path='/html6dars' element={<Html6dars />} ></Route>
        <Route path='/html7dars' element={<Html7dars />} ></Route>
      </Routes>

     {scroll && <Box position={'fixed'} zIndex={'20'} bottom={'30px'} right={'30px'}>
        <Button onClick={handleScroll} height={'60px'} fontSize={'30px'} bg={'gray.600'} _hover={{bg: ''}}>
          <ArrowUpIcon />
        </Button>
      </Box>}

      { time && <Box position={'fixed'} bottom={'0'} left={'0'} width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} zIndex={'1000'} bg={'#98FB98'} height={'15vh'}>
            <Button onClick={handleClose} position={'absolute'} bg={'#222'} _hover={{bg: ''}} right={'20'}  top={'-5'}>
              <CloseIcon color={'black'} />
            </Button>
            <Heading color={'#000'} fontSize={{base: '30px' , md: '50px'}}><span style={{color: 'red'}}>MO</span>devco Online School biz bilan yuksaklarga erishasiz</Heading>
        </Box>}



      <Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default App
