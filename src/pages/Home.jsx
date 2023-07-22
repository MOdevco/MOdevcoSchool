import { Box } from '@chakra-ui/react'
import BeckCard from '../components/beckCard/beckCard'
import ColorCards from '../components/colorCards/colorCards'
import FrontCard from '../components/forntCard/frontCard'
import HomeColors from '../components/homeColors/homeColors'
import HomeCss from '../components/homeCss/homeCss'
import HomeHtml from '../components/homeHtml/homeHtml'
import HomeJavascipt from '../components/homeJavascript/homeJavascipt'
import HomeLessons from '../components/homeLessons/homeLessons'
import HomeReact from '../components/homeReact/homeReact'
import MainTitle from '../components/mainTitle/mainTitle'

const Home = () => {
  return (
    <Box >
        <MainTitle />
        <HomeHtml />
        <HomeCss /> 
        <HomeJavascipt />
        <HomeReact />
        <HomeLessons />
        <HomeColors />
        <FrontCard />
        <BeckCard />
    </Box>
  )
}

export default Home