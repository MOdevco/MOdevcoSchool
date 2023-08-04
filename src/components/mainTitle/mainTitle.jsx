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
import { Link } from 'react-router-dom';
const MainTitle = () => {
  return (
    <Box bg={'#050E17'} px={{base: '20px' , md: '0'}} width={'100%'} className={'slider'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} pt={'200px'} >
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
                        <img style={{width: '100%' , height: '100%'}} src='https://static.vecteezy.com/system/resources/previews/006/362/910/non_2x/circuit-board-technology-background-central-computer-processors-cpu-concept-motherboard-digital-chip-vector.jpg' />
                        <Box position={'absolute'}  display={'flex'} justifyContent={'center'} alignContent={'center'}  pl={{base: '20px' , xl: '200px'}} > 
                            <Box display={'flex'} flexDirection={'column'} gap={'10px'} justifyContent={'center'} alignItems="" >
                                <Heading fontSize={{base: '20px' , xl: '70px'}} >
                                    HTML Dasturini O'rganing
                                </Heading>
                                <Text fontSize={{base: '10px' ,xl: '25px'}}>
                                    Html darslarini mukammal darajada o'rganing <br /> va o'zingizni web ilova yoki sayitingizga asos soling! <br />
                                    Html blogiga kiring yoki pastdagi tugmacha yordamida <br /> html darsliklarga kirishingiz mumkin bo'ladi hoziroq boshlang!
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
                        <Box position={'absolute'} display={'flex'} justifyContent={'center'} alignContent={'center'}   pl={{base: '20px' , xl: '200px'}} > 
                            <Box display={'flex'} flexDirection={'column'} gap={'10px'} alignItems="flex-start" >
                                <Heading fontSize={{base: '20px' , xl: '70px'}} >
                                    CSS Dasturini O'rganing
                                </Heading>
                                <Text fontSize={{base: '10px' ,xl: '25px'}}>
                                    Css darslarini mukammal darajada o'rganing <br /> va o'zingizni web ilova yoki sayitingizga asos soling! <br />
                                    css blogiga kiring yoki pastdagi tugmacha yordamida <br /> css darsliklarga kirishingiz mumkin bo'ladi hoziroq boshlang!
                                </Text>
                               <Link to={'/css'}>
                                    <Button height={{base: '25px',  xl: '40px'}} fontSize={{base: '10px' , xl: '20px'}}>
                                        CSS darslari
                                    </Button>
                               </Link>
                            </Box>
                        </Box>
                    </SwiperSlide>

                    <SwiperSlide style={{position: 'relative' }} className={'center'}>
                        <img style={{width: '100%' , height: '50%'}} src='https://static.vecteezy.com/ti/vetor-gratis/p1/6362957-abstract-technology-chip-processor-background-circuit-board-and-html-code-3d-illustration-blue-technology-background-vector-vetor.jpg' />
                        <Box position={'absolute'} display={'flex'} justifyContent={'center'} alignContent={'center'}   pl={{base: '20px' , xl: '200px'}} > 
                            <Box display={'flex'} flexDirection={'column'} gap={'10px'} alignItems="flex-start" >
                                <Heading fontSize={{base: '20px' , xl: '70px'}} >
                                    JavaScript tilini O'rganing
                                </Heading>
                                <Text fontSize={{base: '10px' ,xl: '25px'}}>
                                    JavaScript darslarini mukammal darajada o'rganing <br /> va o'zingizni web ilova yoki sayitingizga asos soling! <br />
                                    JavaScript blogiga kiring yoki pastdagi tugmacha yordamida <br /> JavaScript darsliklarga kirishingiz mumkin bo'ladi hoziroq boshlang!
                                </Text>
                               <Link >
                                    <Button height={{base: '25px',  xl: '40px'}} fontSize={{base: '10px' , xl: '20px'}}>
                                        JAVASCRIPT darslari
                                    </Button>
                               </Link>
                            </Box>
                        </Box>
                    </SwiperSlide>


                    <SwiperSlide style={{position: 'relative' }} className={'center'}>
                        <img style={{width: '100%' , height: '50%'}} src='https://static.vecteezy.com/ti/vetor-gratis/p1/6363349-abstract-technology-chip-processor-background-circuit-board-and-html-code-3d-illustration-blue-technology-background-vector-vetor.jpg' />
                        <Box position={'absolute'}  display={'flex'} justifyContent={'center'} alignContent={'center'}  pl={{base: '20px' , xl: '200px'}} > 
                            <Box display={'flex'} flexDirection={'column'} gap={'10px'} justifyContent={'center'} alignItems="" >
                                <Heading fontSize={{base: '20px' , xl: '70px'}} >
                                    BOOTSTRAP Dasturini O'rganing
                                </Heading>
                                <Text fontSize={{base: '10px' ,xl: '25px'}}>
                                    BOOTSTRAP darslarini mukammal darajada o'rganing <br /> va o'zingizni web ilova yoki sayitingizga asos soling! <br />
                                    BOOTSTRAP blogiga kiring yoki pastdagi tugmacha yordamida <br /> BOOTSTRAP darsliklarga kirishingiz mumkin bo'ladi hoziroq boshlang!
                                </Text>
                               <Link >
                                    <Button height={{base: '25px',  xl: '40px'}} fontSize={{base: '10px' , xl: '20px'}}>
                                        BOOTSTRAP darslari
                                    </Button>
                               </Link>
                            </Box>
                        </Box>
                    </SwiperSlide>


                    <SwiperSlide style={{position: 'relative' }} className={'center'}>
                        <img style={{width: '100%' , height: '50%'}} src='https://static.vecteezy.com/ti/vetor-gratis/p1/3800691-abstract-technology-chip-processor-background-circuit-board-and-html-code-3d-illustration-blue-technology-background-vector-vetor.jpg' />
                        <Box position={'absolute'}  display={'flex'} justifyContent={'center'} alignContent={'center'}  pl={{base: '20px' , xl: '200px'}} > 
                            <Box display={'flex'} flexDirection={'column'} gap={'10px'} justifyContent={'center'} alignItems="" >
                                <Heading fontSize={{base: '20px' , xl: '70px'}} >
                                    REACT JS Dasturini O'rganing
                                </Heading>
                                <Text fontSize={{base: '10px' ,xl: '25px'}}>
                                    REACT JS darslarini mukammal darajada o'rganing <br /> va o'zingizni web ilova yoki sayitingizga asos soling! <br />
                                    REACT JS blogiga kiring yoki pastdagi tugmacha yordamida <br /> REACT JS darsliklarga kirishingiz mumkin bo'ladi hoziroq boshlang!
                                </Text>
                               <Link >
                                    <Button height={{base: '25px',  xl: '40px'}} fontSize={{base: '10px' , xl: '20px'}}>
                                        REACT JS darslari
                                    </Button>
                               </Link>
                            </Box>
                        </Box>
                    </SwiperSlide>

                    <SwiperSlide style={{position: 'relative' }} className={'center'}>
                        <img style={{width: '100%' , height: '50%'}} src='https://static.vecteezy.com/ti/vetor-gratis/p1/6362942-abstract-technology-chip-processor-background-circuit-board-and-html-code-3d-illustration-blue-technology-background-vector-vetor.jpg' />
                        <Box position={'absolute'}  display={'flex'} justifyContent={'center'} alignContent={'center'}  pl={{base: '20px' , xl: '200px'}} > 
                            <Box display={'flex'} flexDirection={'column'} gap={'10px'} justifyContent={'center'} alignItems="" >
                                <Heading fontSize={{base: '20px' , xl: '70px'}} >
                                    NEXT JS Dasturini O'rganing
                                </Heading>
                                <Text fontSize={{base: '10px' ,xl: '25px'}}>
                                    NEXT JS darslarini mukammal darajada o'rganing <br /> va o'zingizni web ilova yoki sayitingizga asos soling! <br />
                                    NEXT JS blogiga kiring yoki pastdagi tugmacha yordamida <br /> NEXT JS darsliklarga kirishingiz mumkin bo'ladi hoziroq boshlang!
                                </Text>
                               <Link >
                                    <Button height={{base: '25px',  xl: '40px'}} fontSize={{base: '10px' , xl: '20px'}}>
                                        NEXT JS darslari
                                    </Button>
                               </Link>
                            </Box>
                        </Box>
                    </SwiperSlide>

                    <SwiperSlide style={{position: 'relative' }} className={'center'}>
                        <img style={{width: '100%' , height: '50%'}} src='https://static.vecteezy.com/system/resources/previews/006/363/355/non_2x/abstract-technology-chip-processor-background-circuit-board-and-html-code-3d-illustration-blue-technology-background-vector.jpg' />
                        <Box position={'absolute'}  display={'flex'} justifyContent={'center'} alignContent={'center'}  pl={{base: '20px' , xl: '200px'}} > 
                            <Box display={'flex'} flexDirection={'column'} gap={'10px'} justifyContent={'center'} alignItems="" >
                                <Heading fontSize={{base: '20px' , xl: '70px'}} >
                                    TYPESCRIPT tilini o'rganing
                                </Heading>
                                <Text fontSize={{base: '10px' ,xl: '25px'}}>
                                    TYPESCRIPT darslarini mukammal darajada o'rganing <br /> va o'zingizni web ilova yoki sayitingizga asos soling! <br />
                                    TYPESCRIPT blogiga kiring yoki pastdagi tugmacha yordamida <br /> TYPESCRIPT darsliklarga kirishingiz mumkin bo'ladi hoziroq boshlang!
                                </Text>
                               <Link >
                                    <Button height={{base: '25px',  xl: '40px'}} fontSize={{base: '10px' , xl: '20px'}}>
                                        TYPESCRIPT darslari
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