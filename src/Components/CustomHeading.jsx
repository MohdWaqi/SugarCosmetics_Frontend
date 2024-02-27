import { Divider, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const CustomHeading = ({ title, black }) => {
  return (
    <Flex alignItems="center" justifyContent="center" gap="1%" mb="2%">
      <Divider w="2.5rem" border="1px solid #FF008B" />
      <Heading fontSize="1.5rem" color={black && "white"}>
        {title}
      </Heading>
      <Divider w="2.5rem" border="1px solid #FF008B" />
    </Flex>
  );
};

export default CustomHeading;
