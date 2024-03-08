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
  MenuList,
  MenuItem,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  InputLeftElement,
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
import { logout } from "../services/Api";
import bur from "../assets/burger.svg"
import { MobileMenu } from "./MobileMenu";
import mobileMenuData from "../assets/mobileMenu.json"
import appLogo from "../assets/app.jpeg"

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth, setAuth, isTablet } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleLogout =async()=>{
    try {
      await logout()
      sessionStorage.removeItem("auth")
      setAuth(null)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Box bg="black" position="fixed" w="100vw" zIndex={2}>
      <Flex h={{md:"10vh", base:"7vh"}} alignItems="center" mx="2%" w={{md:"90vw", base:"85vw"}} justifyContent="space-between">
        {isTablet&&<><Img 
          mr="5%"
          w="20px"
          src={bur}
          onClick={onOpen}
        />
         <Drawer
        isOpen={isOpen}
        placement='left'
        size="full"
        onClose={onClose}
        
      >
        <DrawerOverlay />
        <DrawerContent bg="black">

          <DrawerCloseButton left="10px" top="20px" color="white" fontSize="1.2rem" />
      
          <Img
          onClick={() => navigate("/")}
          cursor="pointer"
          w={{md:"22%", base:"12rem"}}
          h={{md:"10vh", base:"7vh"}} 
          src={logo}
          ml="4rem"
          mt="0.5rem"
        />
        <DrawerBody color="white" pb="0px" position="relative">
        {mobileMenuData.map((dataDetails, index)=><MobileMenu key={index} menuTitle={dataDetails}/>)}
        <Flex bg="gray"position="absolute" left="0" w="100%" p="1.5rem" justifyContent="space-around" gap="2rem" textAlign="center">
          <Img src={appLogo}/>
          <Box fontWeight="600" fontSize="1.2rem">
            <Text>
              GET THE NEW SUGAR APP TODAY!
            </Text>
            <Button w="100%" fontWeight="600">Install Now</Button>
          </Box>
        </Flex>
        </DrawerBody>
        </DrawerContent>
      </Drawer>
      </>
        }
        <Img
          onClick={() => navigate("/")}
          cursor="pointer"
          w={{md:"22%", base:"12rem"}}
          h={{md:"10vh", base:"7vh"}} 
          src={logo}
        />
        {!isTablet&&<InputGroup w="47%" mx="2%" _focus={{ outline: 0 }}>
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
        </InputGroup>}
        <Flex mx="5%" alignItems="center">
          {!isTablet&&<Link
            display="flex"
            alignItems="center"
            onClick={() => {
              !isAuth?.accessToken && navigate("/login");
            }}
          >
            <Img w="30px" mx="4%" src={userIcon} />
            <Text color="white" minW="max-content">
              {isAuth?.accessToken ? "Hi, Sugar Fan" : "Login/Register"}
            </Text>
          </Link>}

          {isAuth?.accessToken && (
            <Menu>
              <MenuButton as={Button} bg="transparent" _hover={{}} _active={{}}>
                <ChevronDownIcon cursor="pointer" color="white" />
              </MenuButton>
              <MenuList minW="max-content" px="30%">
                <MenuItem bg="transparent" onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
        <Flex>
          <Img
            w="20px"
            mx="12%"
            cursor="pointer"
            onClick={() => navigate("/wishlist")}
            src={wishlistIcon}
          />
          <Img
            w="20px"
            mx="12%"
            cursor="pointer"
            onClick={() => navigate("/bag")}
            src={bagIcon}
          />
          <Img w="20px" mx="12%" src={offerIcon} />
        </Flex>
      </Flex>
      <Flex color={!isTablet&&"white"} gap="3%" h="7vh" pl="2.8%" bg={isTablet?"lightgray":"#191919"}>
        {!isTablet ?menuData.map((menu, index) => (
          <MenuBar key={index} menuTitle={menu.name} menuDetails={menu.data} />
        )):<InputGroup  m="2%" _focus={{ outline: 0 }}>
          <Input
            borderRadius="10px"
            type="text"
            border="1px solid gray"
            _hover={{}}
            placeholder='Try "Liquid Lipstick"'
            pl="20%"
          />
          <InputLeftElement w="17%" display="flex" alignItems="center">
            
              <Img w="15px" h="30px" mb="8%" mx="5%" src={searchIcon} />
             
          </InputLeftElement>
        </InputGroup>}
      </Flex>
    </Box>
  );
};

export default Navbar;
