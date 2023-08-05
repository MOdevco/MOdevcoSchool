import { Avatar, Box, Button, Divider, Heading } from '@chakra-ui/react'
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
import axios from 'axios'
import { DeleteIcon } from '@chakra-ui/icons'
import { err } from '../../assets'
import HodimUpdet from '../hodimUpdet/hodimUpdet'
const Hodimlar = ({setData , data}) => {
    const API = 'http://localhost:3000/users'
    const audio = () => {
        new Audio(err).play()
    }
    useEffect(() => {
        axios.get(API).then((res) => {
            setData(res.data)
        })

    } ,[API])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/users/' + id).then((res) => {
            axios.get(API).then((res) => {
                setData(res.data)
            })
            audio()
        })
    }


  return (
    <Box pt={'250px'}width={'100%'} >
        
        <Box display={'flex'} flexDirection={'column'} gap={'50px'}>
            <Box>
                <Heading>Xodimlar Ro'yxati</Heading>
            </Box> 

            <Box >
                <TableContainer width={'95%'} >
                    <Table bg={'white'} p>
                        <Thead>
                            <Tr borderBottom={'2px'} borderColor={'black'}>
                                <Th fontSize={'15px'}>Avatar</Th>
                                <Th fontSize={'15px'}>Ism</Th>
                                <Th fontSize={'15px'}>Familiya</Th>
                                <Th fontSize={'15px'}>Telefon Nomer</Th>
                                <Th fontSize={'15px'}>Email</Th>
                                <Th fontSize={'15px'}>Qo'shimcha</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((user , i) => (
                                <Tr key={i}>
                                    <Td fontSize={'20px'} color={'black'}><Avatar /></Td>
                                    <Td fontSize={'20px'} color={'black'}>{user.name}</Td>
                                    <Td fontSize={'20px'} color={'black'}>{user.lastname}</Td>
                                    <Td fontSize={'20px'} color={'black'}>{user.phone}</Td>
                                    <Td fontSize={'20px'} color={'black'}>{user.email}</Td>
                                    <Td fontSize={'20px'} color={'black'} display={'flex'} gap={'10px'}>
                                        <Button onClick={() => handleDelete(user.id)} bg={'red'} _hover={{bg: "red.500"}}><DeleteIcon /></Button>
                                        <HodimUpdet />
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>

        </Box>


    </Box>
  )
}

export default Hodimlar