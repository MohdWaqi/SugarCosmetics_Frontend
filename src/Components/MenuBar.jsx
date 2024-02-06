import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import MenuSection from "./MenuSection";

const MenuBar = ({ menuTitle, menuDetails }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box position="relative">
      <Box
        h="2.5px"
        bg="#FF008B"
        bottom="0"
        w={isOpen ? "100%" : "0"}
        position="absolute"
        transition="width 1s"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      ></Box>
      <Text
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        h="100%"
        display="flex"
        alignItems="center"
        cursor="pointer"
        onClick={() => console.log(menuTitle, menuDetails)}
      >
        {menuTitle}
      </Text>
      {isOpen && (
        <Box
          position="absolute"
          color="black"
          bg="white"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          right={menuTitle === "BLOG" && "-200%"}
          left={menuTitle === "GIFTS & KITS" && "-200%"}
          cursor="pointer"
          borderRadius="0 0 10px 10px"
        >
          {menuDetails?.length &&
            menuDetails.map((detail, index) => (
              <MenuSection key={index} detailData={detail} />
            ))}
        </Box>
      )}
    </Box>
  );
};

export default MenuBar;
