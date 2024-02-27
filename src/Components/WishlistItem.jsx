import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const WishlistItem = ({ iconImage, description }) => {
  return (
    <Box py="5%" borderBottom="1px solid #F3F3F3">
      <Flex alignItems="center">
        <Image w="40px" mr="5%" src={iconImage} />
        <Text flex="1">{description}</Text>
        <ChevronRightIcon fontSize="1.5rem" />
      </Flex>
    </Box>
  );
};

export default WishlistItem;
