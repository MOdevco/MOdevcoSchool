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
import { DeleteIcon, SearchIcon } from '@chakra-ui/icons'
import { err } from '../../assets'
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
            <Box border={'2px'} width={'95%'} height={'50px'} display={'flex'} alignItems={'center'} p={'10px'}>
                <SearchIcon fontSize={'30px'} />
                <input style={{border: 'none' , paddingLeft: '10px' , width: '100%' ,background: 'transparent' , color: 'white' , outline: 'none'}} type="text" />
            </Box>

            <Box >
                <TableContainer width={'95%'} >
                    <Table bg={'#233242'} p>
                        <Thead>
                            <Tr borderBottom={'2px'} borderColor={''}>
                                <Th fontSize={'15px'} color={'white'}>Avatar</Th>
                                <Th fontSize={'15px'} color={'white'}>Ism</Th>
                                <Th fontSize={'15px'} color={'white'}>Familiya</Th>
                                <Th fontSize={'15px'} color={'white'}>Telefon Nomer</Th>
                                <Th fontSize={'15px'} color={'white'}>Email</Th>
                                <Th fontSize={'15px'} color={'white'}>Qo'shimcha</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((user , i) => (
                                <Tr key={i}>
                                    <Td fontSize={'20px'} color={'#fff'}><Avatar /></Td>
                                    <Td fontSize={'20px'} color={'#fff'}>{user.name}</Td>
                                    <Td fontSize={'20px'} color={'#fff'}>{user.lastname}</Td>
                                    <Td fontSize={'20px'} color={'#fff'}>{user.phone}</Td>
                                    <Td fontSize={'20px'} color={'#fff'}>{user.email}</Td>
                                    <Td fontSize={'20px'} color={'#fff'}>
                                        <Button onClick={() => handleDelete(user.id)} bg={'red'} _hover={{bg: "red.500"}}><DeleteIcon /></Button>
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