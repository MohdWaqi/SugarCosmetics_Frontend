import { Box } from "@chakra-ui/react";
import React from "react";

const CustomToast = ({ message }) => {
  return (
    <Box
      color="#FFFFFF"
      bg="black"
      p={"8% 10%"}
      borderRadius="10px"
      width="max-content"
      fontWeight={700}
    >
      {message}
    </Box>
  );
};

export default CustomToast;
