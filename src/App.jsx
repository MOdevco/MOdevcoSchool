import { Box , Button , Heading } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
// import Footer from './components/footer/footer'
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
import Html11dars from './pages/html11dars'
import Html12dars from './pages/html12dars'
import Html13dars from './pages/html13dars'
import FrontMalumot from './pages/frontMalumot'
import BeckMalumot from './pages/beckMalumot'
import Html8dars from './pages/html8dars'
import Html9dars from './pages/html9dars'
import Html10dars from './pages/html10dars'
import Html14dars from './pages/html14dars'
import Html15dars from './pages/html15dars'
import Html16dars from './pages/html16dars'
import Html17dars from './pages/html17dars'
import Html18dars from './pages/html18dars'
import Register from './pages/register'
import Html19dars from './pages/html19dars'
import HtmlCode from './pages/htmlCode'
import Html20dars from './pages/html20dars'
import Html21dars from './pages/html21dars'
import Html22dars from './pages/html22dars'
import Html23dars from './pages/html23dars'
import PageNotFound from './pages/pageNotFound'
import Faq from './pages/faq'
import Footer from './components/footer/footer'
import Fikr from './pages/fikr'
import Css from './pages/css'
import Css2dars from './pages/css2dars'
import Css3dars from './pages/css3dars'
import Css4dars from './pages/css4dars'
import Css5dars from './pages/css5dars'
import AdminModevcoAdmin from './pages/AdminmodevcoAdmin'
import Css6dars from './pages/css6dars'
import Css7dars from './pages/css7dars'
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
  useEffect(() => {
    window.scroll(0,0)
  }, [])



  return (
    <Box bg={'#1A202C'} >
      <Box position={'fixed'} width={'100%'} zIndex={10}>
        <Header />
        <Navbar />
      </Box>

      <Routes >
        <Route path='/' element={<Home />} ></Route>
        <Route path='/html' element={<Html />} ></Route>
        <Route path='/frontMalumot' element={<FrontMalumot />} ></Route>
        <Route path='/beckMalumot' element={<BeckMalumot />} ></Route>
        <Route path='/htmlCode' element={<HtmlCode />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/AdminmodevcoAdmin' element={<AdminModevcoAdmin />} ></Route>
        <Route path='/faq' element={<Faq />} ></Route>
        <Route path='/html1dars' element={<Html1dars />} ></Route>
        <Route path='/html2dars' element={<Html2dars />} ></Route>
        <Route path='/html3dars' element={<Html3dars/>} ></Route>
        <Route path='/html4dars' element={<Html4dars />} ></Route>
        <Route path='/html5dars' element={<Html5dars />} ></Route>
        <Route path='/html6dars' element={<Html6dars />} ></Route>
        <Route path='/html7dars' element={<Html7dars />} ></Route>
        <Route path='/html8dars' element={<Html8dars />} ></Route>
        <Route path='/html9dars' element={<Html9dars />} ></Route>
        <Route path='/html10dars' element={<Html10dars />} ></Route>
        <Route path='/html11dars' element={<Html11dars />} ></Route>
        <Route path='/html12dars' element={<Html12dars />} ></Route>
        <Route path='/html13dars' element={<Html13dars />} ></Route>
        <Route path='/html14dars' element={<Html14dars />} ></Route>
        <Route path='/html15dars' element={<Html15dars />} ></Route>
        <Route path='/html16dars' element={<Html16dars />} ></Route>
        <Route path='/html17dars' element={<Html17dars />} ></Route>
        <Route path='/html18dars' element={<Html18dars />} ></Route>
        <Route path='/html19dars' element={<Html19dars />}></Route>
        <Route path='/html20dars' element={<Html20dars />}></Route>
        <Route path='/html21dars' element={<Html21dars />}></Route>
        <Route path='/html22dars' element={<Html22dars />}></Route>
        <Route path='/html23dars' element={<Html23dars />}></Route>
        <Route path='*' element={ <PageNotFound />}></Route>
        <Route path='/fikr' element={ <Fikr />}></Route>
        <Route path='/css' element={ <Css />}></Route>
        <Route path='/css2dars' element={ <Css2dars />}></Route>
        <Route path='/css3dars' element={ <Css3dars />}></Route>
        <Route path='/css4dars' element={ <Css4dars />}></Route>
        <Route path='/css5dars' element={ <Css5dars />}></Route>
        <Route path='/css6dars' element={ <Css6dars />}></Route>
        <Route path='/css7dars' element={ <Css7dars />}></Route>
        
      </Routes>

     {scroll && <Box position={'fixed'} zIndex={'20'} bottom={'30px'} right={'30px'}>
        <Button onClick={handleScroll} height={'60px'} fontSize={'30px'} bg={'gray.600'} _hover={{bg: ''}}>
          <ArrowUpIcon />
        </Button>
      </Box>}

      {/* <Box>
        <Footer />
      </Box> */}


      
    </Box>
  )
}

export default App
