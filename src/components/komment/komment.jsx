import { ChevronDownIcon, DeleteIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Divider, Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react'


const Komment = () => {
    const API = 'http://localhost:3000/komment'
    const [data , setData] = useState([])

    useEffect(() => {
        axios.get(API).then((res) => {
            setData(res.data)
        })
    } ,[API])


    const handleDlete = async (id) => {
        await axios.delete('http://localhost:3000/komment/' + id).then((res) => {
            axios.get(API).then((res) => {
                setData(res.data)
            })
        })
    }


  return (
    <Box pt={'250px'} minHeight='100vh'>
        
        
        <Box>
            <Box>
                <Heading>Kommentariyalar</Heading>
            </Box>

            <Box display={'flex'} width={'95%'} flexWrap={'wrap'} justifyContent={'space-between'}>
                {data && data.map((item , i) => (
                    <Box mt={'70px'}  rounded={'15px'} bg={'#233242'} width={'400px'} p={'20px'}>
                        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={'20px'}>
                            <Box display={'flex'} gap={'20px'} alignItems="center">
                                <Avatar />
                                <Text>Foidalanuvchi</Text>
                            </Box>
                            <Box>
                                <Popover >
                                    <PopoverTrigger>
                                        <ChevronDownIcon fontSize={'30px'} />
                                    </PopoverTrigger>
                                    <PopoverContent bg={'#233242'}>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader>Ma'lumotni tozalash</PopoverHeader>
                                        <PopoverBody>
                                            <Button onClick={(e) => handleDlete(item.id)} bg={'red'} _hover={{bg: 'red.500'}}><DeleteIcon /></Button>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </Box>
                        </Box>
                        <Divider mt={'10px'} />

                            <Box mt={'20px'} key={i}>
                                <Text>{item.komment}</Text>
                            </Box>
                    </Box>
                ))}
            </Box>


        </Box>


    </Box>
  )
}

export default Komment