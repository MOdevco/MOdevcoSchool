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
import Css8dars from './pages/css8dars'
import Css9dars from './pages/css9dars'
import Css10dars from './pages/css10dars'
import Css11dars from './pages/css11dars'
import Css12dars from './pages/css12dars'
import Css13dars from './pages/css13dars'
import Css14dars from './pages/css14dars'
import Css15dars from './pages/css15dars'
import Css16dars from './pages/css16dars'
import Css17dars from './pages/css17dars'
import Css18dars from './pages/css18dars'
import Css19dars from './pages/css19dars'
import Css20dars from './pages/css20dars'
import Css21dars from './pages/css21dars'
import Css22dars from './pages/css22dars'
import Css23dars from './pages/css23dars'
import Css24dars from './pages/css24dars'
import Css25dars from './pages/css25dars'
import Css26dars from './pages/css26dars'
import Css27dars from './pages/css27dars'
import Css28dars from './pages/css28dars'
import Css29dars from './pages/css29dars'
import Css30dars from './pages/css30dars'
import Css31dars from './pages/css31dars'
import Css32dars from './pages/css32dars'
import Css33dars from './pages/css33dars'
import Css34dars from './pages/css34dars'
import Css35dars from './pages/css35dars'
import Css36dars from './pages/css36dars'
import Css37dars from './pages/css37dars'
import Css38dars from './pages/css38dars'
import Css39dars from './pages/css39dars'
import Css40dars from './pages/css40dars'
import Css41dars from './pages/css41dars'
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
        <Route path='/css8dars' element={ <Css8dars />}></Route>
        <Route path='/css9dars' element={ <Css9dars />}></Route>
        <Route path='/css10dars' element={ <Css10dars />}></Route>
        <Route path='/css11dars' element={ <Css11dars />}></Route>
        <Route path='/css12dars' element={ <Css12dars />}></Route>
        <Route path='/css13dars' element={ <Css13dars />}></Route>
        <Route path='/css14dars' element={ <Css14dars />}></Route>
        <Route path='/css15dars' element={ <Css15dars />}></Route>
        <Route path='/css16dars' element={ <Css16dars />}></Route>
        <Route path='/css17dars' element={ <Css17dars />}></Route>
        <Route path='/css18dars' element={ <Css18dars />}></Route>
        <Route path='/css19dars' element={ <Css19dars />}></Route>
        <Route path='/css20dars' element={ <Css20dars />}></Route>
        <Route path='/css21dars' element={ <Css21dars />}></Route>
        <Route path='/css22dars' element={ <Css22dars />}></Route>
        <Route path='/css23dars' element={ <Css23dars />}></Route>
        <Route path='/css24dars' element={ <Css24dars />}></Route>
        <Route path='/css25dars' element={ <Css25dars />}></Route>
        <Route path='/css26dars' element={ <Css26dars />}></Route>
        <Route path='/css27dars' element={ <Css27dars />}></Route>
        <Route path='/css28dars' element={ <Css28dars />}></Route>
        <Route path='/css29dars' element={ <Css29dars />}></Route>
        <Route path='/css30dars' element={ <Css30dars />}></Route>
        <Route path='/css31dars' element={ <Css31dars />}></Route>
        <Route path='/css32dars' element={ <Css32dars />}></Route>
        <Route path='/css33dars' element={ <Css33dars />}></Route>
        <Route path='/css34dars' element={ <Css34dars />}></Route>
        <Route path='/css35dars' element={ <Css35dars />}></Route>
        <Route path='/css36dars' element={ <Css36dars />}></Route>
        <Route path='/css37dars' element={ <Css37dars />}></Route>
        <Route path='/css38dars' element={ <Css38dars />}></Route>
        <Route path='/css39dars' element={ <Css39dars />}></Route>
        <Route path='/css40dars' element={ <Css40dars />}></Route>
        <Route path='/css41dars' element={ <Css41dars />}></Route>
        
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
