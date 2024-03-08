import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import CustomHeading from "./CustomHeading";
import FooterData from "./FooterData";
import footerLogo from "../assets/10048.svg";
import fb from "../assets/svg-image-20.svg";
import tb from "../assets/svg-image-21.svg";
import youtube from "../assets/svg-image-22.svg";
import twitter from "../assets/svg-image-23.svg";
import insta from "../assets/svg-image-24.svg";
import mail from "../assets/svg-image-25.svg";
import pinterest from "../assets/svg-image-26.svg";
import appleApp from "../assets/10054.png";
import androidApp from "../assets/10049.png";
import stayTouch from "../assets/touch.svg";
import { AuthContext } from "../Context/AuthContextProvider";

const Footer = () => {
  const {isTablet} = useContext(AuthContext)
  return (
    <>
      <Box
        textAlign="center"
        backgroundImage={`url(${stayTouch})`}
        backgroundSize="cover"
        p="5%"
        pb="8%"
      >
        <CustomHeading title="LET'S STAY IN TOUCH" />
        <Text mt="-1%">
          Get the latest beauty tips straight to your inbox. Can't wait to
          connect!
        </Text>
        <InputGroup w={{md:"47%"}} m="auto" mt="2%" _focus={{ outline: 0 }}>
          <Input
            borderRadius="10px"
            type="text"
            bg="white"
            border="1px solid black"
            _hover={{}}
            color="white"
            placeholder="Enter Email"
          />
          <InputRightElement w={{md:"17%"}} display="flex" alignItems="center">
            <Button
              w="100%"
              borderRadius="0 10px 10px 0"
              bg="black"
              color="white"
              _hover={{}}
            >
              SUBSCRIBE
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
      <Box position="relative" bg="black">
        {!isTablet&&<Box position="absolute" left="45%" top="-70px">
          <Img
            bg="black"
            w="130px"
            p="15px"
            borderRadius="100px 100px 0 0"
            src={footerLogo}
          />
        </Box>}
        <Flex
          w="90%"
          m="auto"
          justifyContent={{md:"center", base:"space-around"}}
          pt="8%"
          pb={{md:"2%", base:"7%"}}
          gap="20px"
        >
          <Img
            w={{md:"30px",base:"23px"}}
            h={{md:"30px",base:"23px"}}
            bg={isTablet?"white":"#C5C5C5"}
            p="5px"
            borderRadius="50%"
            _hover={{ backgroundColor: "white" }}
            src={fb}
          />
          <Img
            w={{md:"30px",base:"23px"}}
            h={{md:"30px",base:"23px"}}
            bg={isTablet?"white":"#C5C5C5"}
            p="5px"
            borderRadius="50%"
            _hover={{ backgroundColor: "white" }}
            src={tb}
          />
          <Img
           w={{md:"30px",base:"23px"}}
            h={{md:"30px",base:"23px"}}
            bg={isTablet?"white":"#C5C5C5"}
            p="5px"
            borderRadius="50%"
            _hover={{ backgroundColor: "white" }}
            src={youtube}
          />
          <Img
            w={{md:"30px",base:"23px"}}
            h={{md:"30px",base:"23px"}}
            bg={isTablet?"white":"#C5C5C5"}
            p="5px"
            borderRadius="50%"
            _hover={{ backgroundColor: "white" }}
            src={twitter}
          />
          <Img
           w={{md:"30px",base:"23px"}}
            h={{md:"30px",base:"23px"}}
            bg={isTablet?"white":"#C5C5C5"}
            p="5px"
            borderRadius="50%"
            _hover={{ backgroundColor: "white" }}
            src={insta}
          />
          <Img
            w={{md:"30px",base:"23px"}}
            h={{md:"30px",base:"23px"}}
            bg={isTablet?"white":"#C5C5C5"}
            p="5px"
            borderRadius="50%"
            _hover={{ backgroundColor: "white" }}
            src={mail}
          />
          <Img
            w={{md:"30px",base:"23px"}}
            h={{md:"30px",base:"23px"}}
            bg={isTablet?"white":"#C5C5C5"}
            p="5px"
            borderRadius="50%"
            _hover={{ backgroundColor: "white" }}
            src={pinterest}
          />
        </Flex>
        <Flex
          w="90%"
          m="auto"
          justifyContent="space-around"
          px="12%"
          py={{md:"2%", base:"10%"}}
          color="white"
          borderTop="2px solid gray"
          borderBottom="2px solid gray"
          flexDirection={isTablet&&"column"}
          alignItems={"center"}
          gap="30px"
        >
          <Heading
            size="md"
            fontWeight="400"
            _hover={{ textDecoration: "underline" }}
          >
            Stores
          </Heading>
          <Heading
            size="md"
            fontWeight="400"
            _hover={{ textDecoration: "underline" }}
          >
            Elite
          </Heading>
          <Heading
            size="md"
            fontWeight="400"
            _hover={{ textDecoration: "underline" }}
          >
            Terms & Conditions
          </Heading>
          <Heading
            size="md"
            fontWeight="400"
            _hover={{ textDecoration: "underline" }}
          >
            Returns
          </Heading>
          <Heading
            size="md"
            fontWeight="400"
            _hover={{ textDecoration: "underline" }}
          >
            FAQs
          </Heading>
          <Heading
            size="md"
            fontWeight="400"
            _hover={{ textDecoration: "underline" }}
          >
            About Us
          </Heading>
        </Flex>
        <Box
          w="90%"
          m="auto"
          color="white"
          p={{md:"2%", base:"10%"}}
          borderBottom="2px solid gray"

        >
          <Heading size="lg" fontWeight="500" mb="2%" textAlign={isTablet&&"center"}>
            GET IN TOUCH
          </Heading>
          <Flex justifyContent={"space-between"} flexDirection={isTablet&&"column"}
          alignItems={"center"}
          gap="30px">
            <FooterData
              mainTitle="Call us at"
              mainDetail="+91 8755075132"
              detail="Monday to Friday: 10:00 AM - 09:00 PM"
            />
            <FooterData
              mainTitle="Support"
              mainDetail="mohdwaqipervez@gmail.com"
            />
            <FooterData mainTitle="Careers" mainDetail="We're hiring!" />
            <FooterData mainTitle="Influencer Collab" mainDetail="Join Us" />
          </Flex>
        </Box>
        <Flex
          color="white"
          alignItems="center"
          borderBottom="2px solid gray"
          justifyContent="center"
          gap="20px"
          
          p={{md:"1%", base:"10%"}}
          flexDirection={isTablet&&"column"}
        >
          <FooterData
            mainTitle="GET THE NEW SUGAR APP TODAY!"
            detail="Tap into a better shopping experience."
          />
          <Flex w={{md:"15%", base:"30%"}} gap="20px" justifyContent={isTablet&&"center"} >
          <Img src={androidApp} />
          <Img src={appleApp} />
          </Flex>
        </Flex>
        <Text
          color="gray"
          textAlign="center"
          p="2%"
          fontSize="0.9rem"
          fontWeight="500"
        >
          Copyright © {new Date().getFullYear()} Mohd Waqi Pervez. All rights
          reserved.
        </Text>
      </Box>
    </>
  );
};

export default Footer;
