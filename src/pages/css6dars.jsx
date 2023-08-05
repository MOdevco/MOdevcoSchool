import { Box , Flex , Heading , Button , Text , Image , Input , FormLabel, HStack, Radio, RadioGroup, Grid} from '@chakra-ui/react'
import { HamburgerIcon , CloseIcon } from '@chakra-ui/icons'
import Sidebar from '../components/sidebarhtml/sidebarhtml'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    useToast,Divider,
    UnorderedList,
    ListItem,
   
  } from '@chakra-ui/react'
import AccordionItenm from '../components/accordion/accordion'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import SidebarCss from '../components/sidebarCss/sidebarCss'
import PropsColor from '../components/propsColor/propsColor'
import ColorVal from '../components/colorVal/colorVal'
import CssAccordion from '../components/cssAccordion/cssAccordion'

const Css3dars = ({bgColor, textColor, title}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('left')
    const [size, setSize] = useState('')
    const [clipboard , setClipboard] = useState(false)
    const toast = useToast()

    const handleClip = () => {
        setClipboard(true)
        toast({
            position: 'top-right',
            render: () => (
              <Box color='white' p={3} bg='blue.500'>
                Nusxa olindi!
              </Box>
            ),
        })
    }
    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }
    const nandleClose = () => {
        onClose()
    }
    const sizes = ['md']
    useEffect(() => {
        window.scroll(0,0)
      }, [])
  return (
    <Box pt={'300px'} width={'100%'} bg={'#1A202C'} height={'100%'}>
        <Box >
            <Flex >
                {onOpen && <Box>
                    <SidebarCss title={'CSS DARSLARI'} elementName={'Bosh sahifa'}/>
                </Box>}
                <Box ml={{base: '30px' , md: '450px'}}   display={'flex'}  alignItems={'center'} gap={'20px'}>
                    {sizes.map((size) => (
                        <Button  onClick={ () => handleClick(size)} bg={'#233242'} _hover={{bg: '#222'}} display={{base: 'block' , md: 'none'}}>
                            <HamburgerIcon />
                        </Button>
                        
                    ))}
                    <Drawer placement={placement}  onClose={onClose} size={size} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                        <DrawerBody bg={'#0A1624'} display={'flex'} justifyContent={'center'} minHeight={'100vh'} >
                        <CloseIcon onClick={nandleClose} position={'absolute'} right={'10px'} />
                            <CssAccordion  />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box>
                        <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Color lari</Heading>
                    </Box>
                </Box>
            </Flex>
            <Divider mt={'20px'} />


            <Box className='mini' height={{base: '20vh' , md: '8vh'}} display={'flex'} alignItems={'center'} pt={4} pl={{base: '20px' , md: '450px'}}>
                <Text fontSize={'20px'}>Ranglar oldindan belgilangan rang nomlari yoki RGB, HEX, HSL, RGBA, HSLA qiymatlari yordamida aniqlanadi.</Text>
            </Box>
            <Divider mt={'20px'} />


            {/* 1 */}

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} h={{md:'100vh', base: '170vh', xl: '50vh',lg:'190vh'}} id='acr' className='base'>
              
            <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Rang Nomlari</Heading>
                <Text fontSize={'25px'}>CSS-da rang oldindan belgilangan rang nomi yordamida belgilanishi mumkin:</Text>
                

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'}  justifyContent={'center'} alignItems={'flex-start'}  height={{base:'150vh', md: '340px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    
                    <Box width={'100%'} display={'flex'} flexDirection={'column'} gap={{xl:'4rem', base: '1rem', md:'1rem', lg:'1rem'}} justifyContent={'flex-start'}  height={{md:'300px', base: '1300px'}}>
                        
                        <Box display={'flex'} gap={{base:'1rem', md:'1rem', lg:'1rem', xl:'0'}} alignItems={'center'} flexDirection={{base:'column', md: 'column',lg:'column',xl:'row'}} justifyContent={'space-around'} >

                        <PropsColor bgColor={'#FF6347'} colorName={'Tomato'} />
                        <PropsColor bgColor={'#FFA500'} colorName={'Orange'} />
                        <PropsColor bgColor={'#1E90FF'} colorName={'DodgerBlue'} />
                        <PropsColor bgColor={'#3CB371'} colorName={'MediumSeaGreen'} />
                        </Box>
                        <Box display={'flex'} alignItems={'center'} gap={{base:'1rem', md :'1em', lg:'1rem', xl:'0' }} flexDirection={{base:'column', md: 'column', lg:'column',xl:'row'}} justifyContent={'space-around'}>
                        <PropsColor bgColor={'#808080'} colorName={'Grey'} />
                        <PropsColor bgColor={'#6A5ACD'} colorName={'SlateBlue'} />
                        <PropsColor bgColor={'#EE82EE'} colorName={'Violet'} />
                        <PropsColor bgColor={'#D3D3D3'} colorName={'LightGray'} />
                        </Box>
                        
                        
                      
                    
                        
                    </Box>
                </Box>
            </Box>
            <Divider mt={{md:'20px', base: '290px'}} />
            
            


            {/* 2 */}

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} h={{base:'150vh',xl: '90vh', md:'100%',lg:'140vh', xl2: '80vh'}} className='surface2'>
              
            <Heading fontSize={{base: '30px' , md: '50px'}} w={{lg:'400px', base:'100%', xl:'100%'}}>CSS Background Color</Heading>
                <Text fontSize={'25px'}>CSS-da rang oldindan belgilangan rang nomi yordamida belgilanishi mumkin:</Text>
                <Text fontSize={'30px'} textAlign={'center'} bg={'#0094FF'} display={'flex'} alignItems={'center'} justifyContent={'center'} w={{md:'80%', base: '95%'}} h={'58px'}>Hello World</Text>
                <Text pl={'10px'} mt={'10px'} w={{md:'80%', base: '95%',}} h={{lg:'200px', base: '100%', md: '320px',xl:'180px'}} bg={'#FF6347'} display={'flex'} alignItems={'center'} justifyContent={'center'} id='txt' fontSize={'20px'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod <br /> tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis <br /> nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>

                <Box mt={'20px'} width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'310px', base:'310px', md: '320px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'100px'} bg={'#0A1624'} pt={'10px'}>
                      
                    <Text fontSize={'20px'} className='purple'>{`<h1`} <span className='blue'>style="</span><span className='red'>background-color:</span><span className='yellow'>DodgerBlue;</span><span className='blue'>"</span>{`>`}<span className='white'>Hello World</span>{`</h1>`}</Text>
                    <Text fontSize={'20px'} className='purple'>{`<h1`} <span className='blue'>style="</span><span className='red'>background-color:</span><span className='yellow'>Tomato;</span><span className='blue'>"</span>{`>`}<span className='white'>Lorem ipsum...</span>{`</h1>`}</Text>
                        
                    </Box>
                    <CopyToClipboard text={`<h1 style="background-color:DodgerBlue;">Hello World</h1> <h1 style="background-color:Tomato;">Lorem ipsum...</h1>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
            </Box>
            <Divider mt={'20px'} />

            

            
            
                
                {/* 3 */}
                


            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={{lg:'50vh', base:'50vh', md: '90vh'}} id='acrr'>
              
              <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Text Color</Heading>
                  <Text fontSize={'25px'}>Siz matn rangini belgilashingiz mumkin:</Text>
                  <Text className='orange'>Hello World</Text>
                  <Text fontSize={'20px'} color={'#0075FF'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut <br /> laoreet dolore magna aliquam erat volutpat.</Text>
                  <Text fontSize={'20px'} color={'#128000'}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                  
  
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{base:'430px', lg: '340px', md:'510px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Ushbu misolda <span className='red'>class=</span><span className='yellow'>"center"</span> ga ega bo'lgan barcha HTML elementlari qizil rangda bo'ladi va markazga tekislanadi:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'120px'} bg={'#0A1624'} pt={'10px'}>
                        
                      <Text fontSize={'20px'} className='purple'>{`<h1`} <span className='blue'>style="</span><span className='red'>color:</span><span className='yellow'>Tomato;</span><span className='blue'>"</span>{`>`}<span className='white'>Hello World</span>{`</h1>`}</Text>
                    <Text fontSize={'20px'} className='purple'>{`<p`} <span className='blue'>style="</span><span className='red'>color:</span><span className='yellow'>DodgerBlue;</span><span className='blue'>"</span>{`>`}<span className='white'>Lorem ipsum...</span>{`</p>`}</Text>
                    <Text fontSize={'20px'} className='purple'>{`<p`} <span className='blue'>style="</span><span className='red'>color:</span><span className='yellow'>MediumSeaGreen;</span><span className='blue'>"</span>{`>`}<span className='white'>Lorem ipsum...</span>{`</p>`}</Text>
                          
                      </Box>
                      <CopyToClipboard text={`<h1 style="color:Tomato;">Hello World</h1> <p style="color:DodgerBlue;">Lorem ipsum...</p> <p style="color:MediumSeaGreen;">Lorem ipsum...</p>`} onCopy={handleClip}>
                          <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
            </Box>
            <Divider mt={'20px'} />


           
                 
                    

            {/* 4 */}

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              
              <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Border Color</Heading>
                  <Text fontSize={'25px'}>Chegaralar rangini belgilashingiz mumkin:</Text>
                  <Text fontSize={'25px'} display={'flex'} alignItems={'center'} pl={'20px'}  w={{md:'80%', base: '95%'}} h={'58px'} border={'2px'} borderColor={'#FF6347'}>Hello World</Text>
                  <Text fontSize={'25px'} display={'flex'} alignItems={'center'} pl={'20px'}  w={{md:'80%', base: '95%'}} h={'58px'} border={'2px'} borderColor={'#0094FF'}>Hello World</Text>
                  <Text fontSize={'25px'} display={'flex'} alignItems={'center'} pl={'20px'}  w={{md:'80%', base: '95%'}} h={'58px'} border={'2px'} borderColor={'#EE82EE'}>Hello World</Text>
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'400px',md:'600px', base: '450px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Quyidagi CSS qoidasi sahifadagi har bir HTML elementiga ta'sir qiladi:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={{lg:'120px',md:'200px'}} bg={'#0A1624'} pt={'10px'}>
                        
                        <Text fontSize={'20px'} className='purple'>{`<h1`} <span className='blue'>style="</span><span className='red'>border:</span><span className='yellow'>2px solid Tomato;</span><span className='blue'>"</span>{`>`}<span className='white'>Hello World</span>{`</h1>`}</Text>
                        <Text fontSize={'20px'} className='purple'>{`<p`} <span className='blue'>style="</span><span className='red'>border:</span><span className='yellow'>2px solidDodgerBlue;</span><span className='blue'>"</span>{`>`}<span className='white'>Lorem ipsum...</span>{`</p>`}</Text>
                        <Text fontSize={'20px'} className='purple'>{`<p`} <span className='blue'>style="</span><span className='red'>border:</span><span className='yellow'>2px solid MediumSeaGreen;</span><span className='blue'>"</span>{`>`}<span className='white'>Lorem ipsum...</span>{`</p>`}</Text>
                          
                      </Box>
                      <CopyToClipboard text={`<h1 style="border:2px solid Tomato;">Hello World</h1> <p style="border:2px solidDodgerBlue;">Lorem ipsum...</p> <p style="border:2px solid MediumSeaGreen;">Lorem ipsum...</p>`} onCopy={handleClip}>
                          <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>
                  </Box>
              </Box>
              <Divider mt={'20px'} />


            
            {/* 5 */}
            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'50vh'}>
              
              <Heading fontSize={{base: '30px' , md: '50px'}}>CSS Color Values</Heading>
                  <Text fontSize={'20px'}>CSS-da ranglar RGB qiymatlari, HEX qiymatlari, HSL qiymatlari, RGBA qiymatlari va <br /> HSLA qiymatlari yordamida ham belgilanishi mumkin: <br/>Rang nomi "Pomidor" bilan bir xil:</Text>
                  
                    <ColorVal colorName={'rgb(255, 99, 71)'} bgColor={'#FF6347'} />
                    <ColorVal colorName={'#ff6347'} bgColor={'#FF6347'} />
                    <ColorVal colorName={'hsl(9, 100%, 64%)'} bgColor={'#FF6347'} />
                    <Text fontSize={'20px'}>Rang nomi "Pomidor" bilan bir xil, ammo 50% shaffof:</Text>

                    <ColorVal colorName={'rgba(255, 99, 71, 0.5)'} bgColor={'rgba(255, 99, 71, 0.5)'} />
                    <ColorVal colorName={'hsl(9, 100%, 64%)'} bgColor={'rgba(255, 99, 71, 0.5)'} />
                  
  
                  <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'} alignItems={'flex-start'} bg={'#233242'} height={{lg:'480px', base: "480px",md:'680px'}} py={{base: '15px', md :'0px'}} rounded={'20px'}>
                      <Heading>Misol</Heading>
                      <Text fontSize={'20px'}>Quyidagi CSS qoidasi sahifadagi har bir HTML elementiga ta'sir qiladi:</Text>
                      <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={{lg:'200px', base:'200px', md:'280px'}} bg={'#0A1624'} pt={'9px'}>
                        
                        <Text fontSize={'20px'} className='purple'>{`<h1`} <span className='blue'>style="</span><span className='red'>background-color:</span><span className='yellow'>rgb(255, 99, 71);</span><span className='blue'>"</span>{`>`}<span className='white'>...</span>{`</h1>`}</Text>
                        <Text fontSize={'20px'} className='purple'>{`<h1`} <span className='blue'>style="</span><span className='red'>background-color:</span><span className='yellow'>#ff6347;</span><span className='blue'>"</span>{`>`}<span className='white'>...</span>{`</h1>`}</Text>
                        <Text fontSize={'20px'} className='purple'>{`<h1`} <span className='blue'>style="</span><span className='red'>background-color:</span><span className='yellow'>hsl(9, 100%, 64%);</span><span className='blue'>"</span>{`>`}<span className='white'>...</span>{`</h1>`}</Text> <br />
                        <Text fontSize={'20px'} className='purple'>{`<h1`} <span className='blue'>style="</span><span className='red'>background-color:</span><span className='yellow'>gba(255, 99, 71, 0.5);</span><span className='blue'>"</span>{`>`}<span className='white'>...</span>{`</h1>`}</Text>
                        <Text fontSize={'20px'} className='purple'>{`<h1`} <span className='blue'>style="</span><span className='red'>background-color:</span><span className='yellow'>hsl(9, 100%, 64%, 0.5);</span><span className='blue'>"</span>{`>`}<span className='white'>...</span>{`</h1>`}</Text>
                          
                      </Box>
                      <Text fontSize={'20px'}>Eslatma: ID nomi raqam bilan boshlanmaydi!</Text>
                      <CopyToClipboard text={`h1 {text-align: center;color: red;} h2 {text-align: center;color: red;} p {text-align: center;color: red;}`} onCopy={handleClip} >
                          <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                      </CopyToClipboard>
                  </Box>

              </Box>
              <Divider mt={'20px'} />





            
           
            
    </Box>
  )
}

export default Css3dars
