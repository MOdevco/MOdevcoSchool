import { Box , Flex , Heading , Button , Text , Image , Input , FormLabel, HStack, Radio, RadioGroup, useDisclosure ,Divider} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'

const Click = () => {
    const [user , loading] = useAuthState(auth)
    const [folow , setFolow] = useState(true)
    const [clipboard , setClipboard] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()


    useEffect(() => {
        if(user) {
            setFolow(true)
        } else {
            setFolow(false)
        }
    } , [user])

    
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
  return (
    <Box pt={'100px'} width={'100%'} bg={'#1A202C'} height={'100%'}>
        <Box >

            <Box pl={{base: '20px' , md: '450px'}} display={'flex'} flexDirection={'column'} gap={'20px'} pt={'40px'} minHeight={'40vh'}>
                <Heading fontSize={{base: '30px' , md: '50px'}}> <span className='red'>{`<button> `}</span> Element</Heading>
                <Text fontSize={'25px'}> <span className='red'> {`<button>`}</span>  elementi bosiladigan tugmani belgilaydi:</Text>

                <Box width={{base: '100%' , md: '80%'}} gap={'20px'} display={'flex'} flexDirection={'column'} pl={{base: '20px' , md: '100px'}} justifyContent={'center'}alignItems={'flex-start'} bg={'#233242'} height={'350px'} rounded={'20px'}>
                    <Heading>Misol</Heading>
                    <Box width={'90%'} borderLeft={'4px'} pl={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} overflow={'scroll'}  borderColor={'#7FFFD4'} height={'130px'} bg={'#0A1624'}>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`<button `} <span className='red'> type=</span> <span className='yellow'>"button" </span > <span className='red'>onclick=</span> <span className='yellow'>"alert('Hello World!')"</span > {`>`} </Text>
                        <Text color={'#fff'} fontSize={'20px'}>Click Me! </Text>
                        <Text color={'#9D5EBB'} fontSize={'20px'}>{`</button>`}</Text>

                    </Box>
                    
                    <CopyToClipboard text={`<button type="button" onclick="alert('Hello World!')">Click Me!</button>`} onCopy={handleClip} >
                        <Button bg={'#7FFFD4'}>Nusxa olish</Button>
                    </CopyToClipboard>
                </Box>
                <Text fontSize={'25px'}> Yuqoridagi HTML kodi brauzerda shunday ko'rsatiladi:</Text>
                <Button onClick={onOpen} width={{base: '100%' , xl: '10%'}}>Meni bos!</Button>
                { folow ? (
                     <Modal onClose={onClose} isOpen={isOpen} isCentered>
                     <ModalOverlay />
                     <ModalContent bg={'#233242'}>
                       <ModalHeader>Diqqat</ModalHeader>
                       <ModalCloseButton />
                       <ModalBody>
                        Hurmatli foidalanuvchi siz ro'yxatdan o'tkansiz buning uchun sizdan minatdormiz platforma sizga yoqayotgan bo'lsa biz juda hursandmiz😊
                       </ModalBody>
                     </ModalContent>
                   </Modal>
                ): (
                    <Modal onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent bg={'#233242'}>
                      <ModalHeader>Diqqat</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                            Hurmatli foidalanuvchi siz platformamizdan ro'yxatdan o'tmagansiz sizga eslatib o'tamiz agarda ro'yxatdan o'tsangiz siz platformadan keng foidalanishingiz mumkun bo'ladi eng tepadagi ro'yxatdan o'tish tugmasi yordamida ro'yxatdan o'ting 😉 (Hurmat bilan <span className='red'>MO</span>devco jamoasi)
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                ) }
                <Text fontSize={'25px'}> Eslatma: Har doim tugma elementi uchun type atributini belgilang. Turli xil brauzerlar <br /> tugma elementi uchun har xil standart turlardan foydalanishi mumkin.</Text>
            </Box>

        </Box>
            
    </Box> 
  )
}

export default Click