import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react"




const AdminModevcoAdmin = () => {
    return (

        <Box minHeight={'100vh'}>
            <Box position={'fixed'} width={'100%'} height={'100vh'} top={0} left={'0'} display={'flex'} justifyContent={'center'} alignItems={'center'} bg={'black'} zIndex={10}>

                <FormControl isRequired>
                    <FormLabel>First name</FormLabel>
                    <Input placeholder='First name' />
                </FormControl>
                            
            </Box>
        </Box>

    )
}


export default AdminModevcoAdmin