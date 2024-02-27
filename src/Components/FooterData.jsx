import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const FooterData = ({ mainTitle, mainDetail, detail }) => {
  return (
    <Box>
      <Heading mb="3%" fontSize="1.2rem" fontWeight="400">
        {mainTitle}
      </Heading>
      {mainDetail && (
        <Heading
          fontSize="1.2rem"
          fontWeight="700"
          color="gray"
          _hover={{ textDecoration: "underline", color: "white" }}
        >
          {mainDetail}
        </Heading>
      )}
      {detail && (
        <Text mt="-2%" color="gray" fontWeight="400">
          {detail}
        </Text>
      )}
    </Box>
  );
};

export default FooterData;
