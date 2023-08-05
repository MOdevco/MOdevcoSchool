import { Box, Button, Heading, Text, Textarea } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
import { DeleteIcon } from '@chakra-ui/icons'
import { err } from '../../assets'
const Takliflar = () => {
    const API = 'http://localhost:3000/taklif'
    const [data , setData] = useState([])
    const audio = () => {
        new Audio(err).play()
    }

    useEffect(() => {
        axios.get(API).then((res) => {
            setData(res.data)
        })
    } ,[API])


    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/taklif/' + id).then((res) => {
            axios.get(API).then((res) => {
                setData(res.data)
            })
            audio()
        })
    }
  return (


    <Box pt={'250px'} minHeight='0vh'>
        
        <Box  >
            <Box>
                <Heading>Takliflar</Heading>
            </Box>

            {data.map((res , i) => (
                <Box  width={'95%'} key={i} >
                    <Box position={'relative'} mt={'20px'} rounded={'20px'} p={'20px'} height={'450px'} bg={'#233242'}>
                        <TableContainer>
                            <Table >
                                <Thead>
                                    <Tr >
                                        <Th color={'white'} fontSize={'20px'} fontWeight={'bold'}>Ism</Th>
                                        <Th color={'white'} fontSize={'20px'} fontWeight={'bold'}>Email</Th>
                                        <Th color={'white'} fontSize={'20px'} fontWeight={'bold'}>Mavzu</Th>
                                    </Tr>
                                </Thead>
                                <Tbody >
                                    <Tr >
                                        <Td color={'white'} fontSize={'18px'}>{res.ism}</Td>
                                        <Td color={'white'} fontSize={'18px'}>{res.email}</Td>
                                        <Td color={'white'} fontSize={'18px'}>{res.mavzu}</Td>
                                    </Tr>
                                </Tbody>
                            
                            </Table>
                        </TableContainer>
                        {/* <Text color={'black'} fontSize={'20px'}><span style={{fontSize: '30px' , color: 'black'}}>Ism:</span> {res.ism}</Text>
                        <Text color={'black'} fontSize={'20px'}><span style={{fontSize: '30px' , color: 'black'}}>Email:</span>  {res.email}</Text>
                        <Text color={'black'} fontSize={'20px'}><span style={{fontSize: '30px' , color: 'black'}}>Mavzu:</span>  {res.mavzu}</Text> */}
                        <Text color={'white'} fontSize={'30px'} mt={'20px'}>Xabar:  </Text>
                        <Textarea color={'white'} disabled value={res.xabar}   _hover={{}} fontSize={"25px"} rows={5} border={'2px'} borderColor={'white'}/>
                        <Button onClick={() => handleDelete(res.id)} position={'absolute'} bottom={'20px'} bg={'red'} _hover={{bg: 'red.500'}} right={'50px'} mt={'20px'}><DeleteIcon /></Button>
                    </Box>
                </Box>
            ))}






        </Box>


    </Box>
  )
}

export default Takliflar