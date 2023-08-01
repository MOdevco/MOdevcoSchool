import { Box } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import { AddIcon , MinusIcon } from '@chakra-ui/icons'
const FaqItem = ({title , desc}) => {
  return (
    <Box  >

        <Box> 
            <Accordion display={'flex'} gap={'10px'} flexDirection={'column'}  allowToggle >
                <AccordionItem border={0} bg={'#122435'} rounded={'10px'} >
                {({ isExpanded }) => (
                    <>
                        <h2> 
                        <AccordionButton  fontSize={{base: '15px' , xl: '20px'}} display={'flex'} gap={'20px'}>
                            {isExpanded ? (
                            <MinusIcon fontSize={{base: '12px' , xl: '15px'}} />
                            ) : (
                            <AddIcon fontSize={{base: '12px' , xl: '15px'}} />
                            )}
                            <Box as="span" flex='1' textAlign='left'>
                            {title}
                            </Box>
                            
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {desc}
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>


             

            </Accordion>
            

        </Box>


    </Box>
  )
}

export default FaqItem