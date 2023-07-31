import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'
import BeckCard from '../components/beckCard/beckCard'
import ColorCards from '../components/colorCards/colorCards'
import FrontCard from '../components/forntCard/frontCard'
import HomeColors from '../components/homeColors/homeColors'
import HomeCss from '../components/homeCss/homeCss'
import HomeHtml from '../components/homeHtml/homeHtml'
import HomeJavascipt from '../components/homeJavascript/homeJavascipt'
import HomeLessons from '../components/homeLessons/homeLessons'
import HomeReact from '../components/homeReact/homeReact'
import HomeVideo from '../components/homeVideo/homeVideo'
import MainTitle from '../components/mainTitle/mainTitle'
import TexnologiIcon from '../components/texnologiIcon/texnologiIcon'
import Footer from '../components/footer/footer'
const Home = () => {

  useEffect(() => {
    window.scroll(0,0)
  }, [])
  return (
    <Box className={'bgImage'} >
        <MainTitle />
        <HomeHtml />
        <HomeCss /> 
        <HomeJavascipt />
        <HomeReact />
        <HomeLessons />
        <TexnologiIcon />
        <HomeVideo />
        <HomeColors />
        <FrontCard />
        <BeckCard />

        {/* <Footer /> */}

    </Box>
  )
}

export default Home