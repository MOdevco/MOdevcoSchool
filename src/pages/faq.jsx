import { Box } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import { MinusIcon , AddIcon} from '@chakra-ui/icons'
const Faq = () => {
  return (
    <Box className='bgImage' pt={'200px'}  minHeight={'100vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>

        <Box width={'50%'}  p={'50px'} height={'654px'} rounded={'20px'}  bg={'rgba(155 , 155, 155 , 0.12)'}>

            <Accordion allowMultiple fontSize={'19px'}>
                <AccordionItem  border={'none'} bg={'#0A1624'} height={'70px'} >
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton pt={'12px'} fontSize={'30px'} display={'flex'} gap={'20px'}>
                            {isExpanded ? (
                            <MinusIcon fontSize='20px' />
                            ) : (
                            <AddIcon fontSize='20px' />
                            )}
                            <Box as="span" flex='1' textAlign='left'>
                            Section 2 title
                            </Box>
                           
                        </AccordionButton>
                        </h2>
                        <AccordionPanel bg={'#0A1624'} pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>
            </Accordion>
        </Box>


    </Box>
  )
}

export default Faq