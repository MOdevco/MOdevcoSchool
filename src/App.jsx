import { Box , Button } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import Home from './pages/Home'
import { ArrowUpIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'

function App() {
  const [scroll , setScroll] = useState(false)

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
    <Box >
      <Box position={'fixed'} width={'100%'} zIndex={10}>
        <Header />
        <Navbar />
      </Box>

      <Routes>
        <Route path='/' element={<Home />} ></Route>
      </Routes>

     {scroll && <Box position={'fixed'} bottom={'30px'} right={'30px'}>
        <Button onClick={handleScroll} height={'60px'} fontSize={'30px'} bg={'gray.600'} _hover={{bg: ''}}>
          <ArrowUpIcon />
        </Button>
      </Box>}

      <Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default App
