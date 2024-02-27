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
import React from "react";
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

const Footer = () => {
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
        <InputGroup w="47%" m="auto" mt="2%" _focus={{ outline: 0 }}>
          <Input
            borderRadius="10px"
            type="text"
            bg="white"
            border="1px solid black"
            _hover={{}}
            color="white"
            placeholder="Enter Email"
          />
          <InputRightElement w="17%" display="flex" alignItems="center">
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
        <Box position="absolute" left="45%" top="-70px">
          <Img
            bg="black"
            w="130px"
            p="15px"
            borderRadius="100px 100px 0 0"
            src={footerLogo}
          />
        </Box>
        <Flex
          w="90%"
          m="auto"
          justifyContent="center"
          pt="8%"
          pb="2%"
          gap="20px"
        >
          <Img
            w="30px"
            bg="#C5C5C5"
            p="5px"
            borderRadius="50%"
            _hover={{ backgroundColor: "white" }}
            src={fb}
          />
          <Img
            w="30px"
            bg="#C5C5C5"
            p="5px"
            borderRadius="50%"
            _hover={{ backgroundColor: "white" }}
            src={tb}
          />
          <Img
            w="30px"
            bg="#C5C5C5"
            p="5px"
            borderRadius="50%"
            _hover={{ backgroundColor: "white" }}
            src={youtube}
          />
          <Img
            w="30px"
            bg="#C5C5C5"
            p="5px"
            borderRadius="50%"
            _hover={{ backgroundColor: "white" }}
            src={twitter}
          />
          <Img
            w="30px"
            bg="#C5C5C5"
            p="5px"
            borderRadius="50%"
            _hover={{ backgroundColor: "white" }}
            src={insta}
          />
          <Img
            w="30px"
            bg="#C5C5C5"
            p="5px"
            borderRadius="50%"
            _hover={{ backgroundColor: "white" }}
            src={mail}
          />
          <Img
            w="30px"
            bg="#C5C5C5"
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
          p="2% 12%"
          color="white"
          borderTop="2px solid gray"
          borderBottom="2px solid gray"
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
          p="2%"
          borderBottom="2px solid gray"
        >
          <Heading size="lg" fontWeight="500" mb="2%">
            GET IN TOUCH
          </Heading>
          <Flex justifyContent={"space-between"}>
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
          p="1%"
        >
          <FooterData
            mainTitle="GET THE NEW SUGAR APP TODAY!"
            detail="Tap into a better shopping experience."
          />
          <Img w="8%" src={androidApp} />
          <Img w="8%" src={appleApp} />
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
