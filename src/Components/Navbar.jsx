import { Box, Button, Flex, Img, Input, InputGroup, InputRightElement, Link, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/10001.svg"
import searchIcon from "../assets/10002.svg"
import userIcon from "../assets/10005.svg"
import wishlistIcon from "../assets/10006.svg"
import bagIcon from "../assets/10007.svg"
import offerIcon from "../assets/10008.svg"

const Navbar = () => {
  return (
    <Box bg="black" w="100vw">
        <Flex h="10vh" alignItems="center" mx="2%" >
            <Img w="22%" h="10vh" src={logo} />
            <InputGroup w="47%" mx="2%"  _focus={{outline:0}} >
            <Input borderRadius="10px" type='text' bg="#28282B" border="1px solid gray"  _hover={{}} color="white" placeholder='Try "Liquid Lipstick"'/>
            <InputRightElement w="17%" display="flex" alignItems="center">
                <Button  w="100%" borderRadius="0 10px 10px 0" ><Img w="15px" h="90px" mb="8%" mx="5%" src={searchIcon}/>Search</Button>
            </InputRightElement>
            </InputGroup>
            <Flex mx="6%">
                <Link display="flex" alignItems="center">
                <Img w="30px" mx="4%" src={userIcon} />
                <Text color='white'>Login/Register</Text>
                </Link>
            </Flex>
            <Flex ml="-1%">
                <Img w="20px" mx="12%" src={wishlistIcon} />
                <Img w="20px" mx="12%" src={bagIcon} />
                <Img w="20px" mx="12%" src={offerIcon} /> 
            </Flex>
        </Flex>
    </Box>
  )
}

export default Navbar