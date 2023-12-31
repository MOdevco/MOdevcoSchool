import { Box, Button, FormControl, FormLabel, Input, useToast , Image,  useDisclosure, Divider } from "@chakra-ui/react"
import {   useEffect, useState  } from "react"
import {  Logo} from "../assets"
import Hodimlar from "../components/hodimlar/hodimlar"
import Komment from "../components/komment/komment"
import SidebarAdmin from "../components/sidebarAdmi/sidebarAdmin"
import Takliflar from "../components/takliflar/takliflar"



const AdminModevcoAdmin = () => {
    const [admin , setAdmin] = useState("")
    const [password , setPassword] = useState("")
    const [showPanel , setShowPanel] = useState(false)
    const toast = useToast()
    const [data ,setData] = useState([])
    const [barchasi , setBarchasi] = useState(true)
    const [xodim , setXodim] = useState(true)
    const [taklif , setTaklif] = useState(true)
    const [komment , setKomment] = useState(true)
    const handleAll = () => {
        setXodim(true)
        setTaklif(true)
        setKomment(true)
    }
    const handleTaklif = () => {
        setXodim(false)
        setTaklif(true)
        setKomment(false)
    }
    const handleXodim = () => {
        setXodim(true)
        setTaklif(false)
        setKomment(false)
    }
    const handleKomment = () => {
        setXodim(false)
        setTaklif(false)
        setKomment(true)
    }
    const handleClose = () => {
        if(admin === "modevco" && password === '1122') {
            setShowPanel(false)
        } else {
            toast({
                title: 'Nimadur xato!!',
                status: 'error',
                position: 'top-right',
                duration: 3000,
                isClosable: true,
            })
        }
    }



    
  

  
    useEffect(() => {
        window.scroll(0,0)
    })
    return (

        <Box minHeight={'100vh'}>
            <Box  className="hide">
                {showPanel && <Box position={'fixed'} width={'100%'} height={'100vh'} top={0} left={'0'} display={'flex'} justifyContent={'center'} alignItems={'center'} bg={'black'} zIndex={10}>
                    <Box width={'30%'} bg={'#122435'} p={'30px'} rounded={'10px'}>
                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                            <Image width={'100px'} src={Logo}></Image>
                        </Box>
                        <FormControl isRequired>
                            <FormLabel>Admin</FormLabel>
                            <Input color={'white'} onChange={e => setAdmin(e.target.value)} placeholder='First name' />

                            <FormLabel pt={'20px'}>Parol</FormLabel >
                            <Input color={'white'} onChange={e => setPassword(e.target.value)} placeholder='First name' />

                            <Button className="btn" onClick={handleClose} bg={'#7FFFD4'} _hover={{bg: '#4FFFD4'}} mt={'20px'}>Kirish</Button>
                        </FormControl>
                    </Box>



                </Box>}
            </Box>


            <Box width={'100%'} display={'flex'} pl={'400px'}   >
                <Box>
                    <SidebarAdmin handleAll={handleAll} handleTaklif={handleTaklif} handleKomment={handleKomment} handleXodim={handleXodim} setData={setData} data={data}  />
                </Box>

                <Box width={'100%'}>
                    {xodim && <Hodimlar setData={setData} data={data} />}
                    {taklif && <Takliflar />}
                    {komment && <Komment />}
                </Box>

            </Box>
        </Box>

    )
}


export default AdminModevcoAdmin