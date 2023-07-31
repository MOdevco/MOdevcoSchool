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

        <Box width={'50%'}  p={'50px'} height={'654px'} display={'flex'} flexDirection={'column'} gap={'20px'} rounded={'20px'}  bg={'rgba(155 , 155, 155 , 0.12)'}>

            <Accordion allowMultiple display={'flex'} flexDirection={'column'} gap={'30px'}>
                <AccordionItem height={'60px'} border={'none'} bg={'#0A1624'}>
                {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton  fontSize={'30px'} pt={'29px'}  height={'40px'}>
                            <Box as="span" flex='1' textAlign='left'>
                            Section 2 title
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='20px' />
                            ) : (
                            <AddIcon fontSize='20px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>

                <AccordionItem border={'none'} bg={'#0A1624'}>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            Section 2 title
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
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