import { Box , Heading , Text , Button , Image } from '@chakra-ui/react'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../mainTitle/mainTitle.css'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { htmlSlider } from '../../assets';
import { Link } from 'react-router-dom';
const MainTitle = () => {
  return (
    <Box bg={'#050E17'} px={{base: '20px' , md: '0'}} width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} pt={'150px'} >
        <Box maxW={'3000px'} mx={'auto'} width={'100%'} height={'100%'} p={4}>
            <div style={{width: '100%'}}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide style={{position: 'relative' }} className={'center'}>
                        <img style={{width: '100%' , height: '50%'}} src='https://static.vecteezy.com/system/resources/previews/006/362/910/non_2x/circuit-board-technology-background-central-computer-processors-cpu-concept-motherboard-digital-chip-vector.jpg' />
                        <Box position={'absolute'}  display={'flex'} justifyContent={'center'} alignContent={'center'}  pl={{base: '20px' , xl: '200px'}} > 
                            <Box display={'flex'} flexDirection={'column'} gap={'10px'} justifyContent={'center'} alignItems="" >
                                <Heading fontSize={{base: '20px' , xl: '70px'}} >
                                    HTML Dasturini O'rganing
                                </Heading>
                                <Text fontSize={{base: '10px' ,xl: '25px'}}>
                                    Html darslarini mukammal darajada o'rganing <br /> va o'zigizni web ilova yoki sayitingizga assos soling! <br />
                                    Html blogiga kiring yoki pastdagi tugmacha yordamida <br /> html darsliklarga kirishingiz mumkun boladi hoziroq boshlang!
                                </Text>
                               <Link to={'/html'}>
                                    <Button height={{base: '25px',  xl: '40px'}} fontSize={{base: '10px' , xl: '20px'}}>
                                        HTML darslari
                                    </Button>
                               </Link>
                            </Box>
                        </Box>
                    </SwiperSlide>

                    <SwiperSlide style={{position: 'relative' }} className={'center'}>
                        <img style={{width: '100%' , height: '50%'}} src='https://static.vecteezy.com/ti/vetor-gratis/p1/2082090-abstract-technology-chip-processor-background-circuit-board-and-html-code-blue-technology-background-vector-vetor.jpg' />
                        <Box position={'absolute'} top={{base: 10 , xl: 300}}  pl={{base: '20px' , xl: '200px'}} > 
                            <Box display={'flex'} flexDirection={'column'} gap={'30px'} alignItems="flex-start" >
                                <Heading fontSize={{base: '20px' , xl: '70px'}} >
                                    CSS Dasturini O'rganing
                                </Heading>
                                <Text fontSize={{base: '10px' ,xl: '25px'}}>
                                    Css darslarini mukammal darajada o'rganing <br /> va o'zigizni web ilova yoki sayitingizga assos soling! <br />
                                    css blogiga kiring yoki pastdagi tugmacha yordamida <br /> css darsliklarga kirishingiz mumkun boladi hoziroq boshlang!
                                </Text>
                               <Link to={'/html'}>
                                    <Button height={{base: '25px',  xl: '40px'}} fontSize={{base: '10px' , xl: '20px'}}>
                                        CSS darslari
                                    </Button>
                               </Link>
                            </Box>
                        </Box>
                    </SwiperSlide>

                    <SwiperSlide style={{position: 'relative' }} className={'center'}>
                        <img style={{width: '100%' , height: '50%'}} src='https://static.vecteezy.com/ti/vetor-gratis/p1/6362957-abstract-technology-chip-processor-background-circuit-board-and-html-code-3d-illustration-blue-technology-background-vector-vetor.jpg' />
                        <Box position={'absolute'} top={{base: 10 , xl: 300}}  pl={{base: '20px' , xl: '200px'}} > 
                            <Box display={'flex'} flexDirection={'column'} gap={'10px'} alignItems="flex-start" >
                                <Heading fontSize={{base: '20px' , xl: '70px'}} >
                                    JavaScript tilini O'rganing
                                </Heading>
                                <Text fontSize={{base: '10px' ,xl: '25px'}}>
                                    JavaScript darslarini mukammal darajada o'rganing <br /> va o'zigizni web ilova yoki sayitingizga assos soling! <br />
                                    JavaScript blogiga kiring yoki pastdagi tugmacha yordamida <br /> JavaScript darsliklarga kirishingiz mumkun boladi hoziroq boshlang!
                                </Text>
                               <Link to={'/html'}>
                                    <Button>
                                        JAVASCRIPT darslari
                                    </Button>
                               </Link>
                            </Box>
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Box>
    </Box>
  )
}

export default MainTitle