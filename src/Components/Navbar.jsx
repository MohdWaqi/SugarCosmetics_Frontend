import {
  Box,
  Button,
  Flex,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  Menu,
  MenuButton,
  MenuOptionGroup,
  MenuList,
  MenuDivider,
  MenuItemOption,
  useDisclosure,
  Heading,
  UnorderedList,
  ListItem,
  MenuItem,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import logo from "../assets/10001.svg";
import searchIcon from "../assets/10002.svg";
import userIcon from "../assets/10005.svg";
import wishlistIcon from "../assets/10006.svg";
import bagIcon from "../assets/10007.svg";
import offerIcon from "../assets/10008.svg";
import menuData from "../assets/menuDB.json";
import MenuBar from "./MenuBar";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const navigate = useNavigate()
  const {isAuth} = useContext(AuthContext)
  return (
    <Box bg="black" position="fixed" w="100vw" zIndex={2}>
      <Flex h="10vh" alignItems="center" mx="2%">
        <Img onClick={()=>navigate("/")} cursor="pointer" w="22%" h="10vh" src={logo} />
        <InputGroup w="47%" mx="2%" _focus={{ outline: 0 }}>
          <Input
            borderRadius="10px"
            type="text"
            bg="#28282B"
            border="1px solid gray"
            _hover={{}}
            color="white"
            placeholder='Try "Liquid Lipstick"'
          />
          <InputRightElement w="17%" display="flex" alignItems="center">
            <Button w="100%" borderRadius="0 10px 10px 0">
              <Img w="15px" h="30px" mb="8%" mx="5%" src={searchIcon} />
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
        <Flex mx="5%" alignItems="center">
          <Link display="flex" alignItems="center" onClick={()=>{!isAuth && navigate("/login")}}>
            <Img w="30px" mx="4%" src={userIcon} />
            <Text color="white" minW="max-content">{isAuth?"Hi, Sugar Fan":"Login/Register"}</Text>
          </Link>
            
            {isAuth &&<Menu>
  <MenuButton as={Button} bg="transparent" _hover={{}} _active={{}}>
  <ChevronDownIcon cursor="pointer" color="white"/>
  </MenuButton>
  <MenuList minW="max-content" px="30%">
    <MenuItem  bg="transparent" >Logout</MenuItem>

  </MenuList>
</Menu>}
        </Flex>
        <Flex>
          <Img w="20px" mx="12%" cursor="pointer" onClick={()=>navigate("/wishlist")} src={wishlistIcon} />
          <Img w="20px" mx="12%" cursor="pointer" onClick={()=>navigate("/bag")} src={bagIcon} />
          <Img w="20px" mx="12%" src={offerIcon} />
        </Flex>
      </Flex>
      <Flex color="white" gap="3%" h="7vh" pl="2.8%" bg="#191919">
        {menuData.map((menu, index) => (
          <MenuBar key={index} menuTitle={menu.name} menuDetails={menu.data} />
        ))}
      </Flex>
    </Box>
  );
};

export default Navbar;
