import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const BagCard = ({
  name,
  length,
  quantity,
  photo,
  discount,
  sellPrice,
  increaseQuantity,
  decreaseQuantity,
  deleteProductFromBag,
}) => {
  const [bagQuantity, setBagQuantity] = useState("");
  useEffect(() => {
    setBagQuantity(quantity);
  }, [quantity]);

  return (
    <Flex
      alignItems="center"
      py="1%"
      borderTop={length > 0 && "1px solid #807E7E"}
    >
      <Image w="8%" borderRadius="5px" mr="5%" src={photo} />
      <Box flex={1}>
        <Text mb="5%" fontSize="0.8rem">
          {name}
        </Text>
        <Flex gap="5px">
          <Text fontSize="0.8rem" textDecoration="line-through" color="#807E7E">
            ₹{sellPrice}
          </Text>
          <Text fontSize="0.8rem" color="#807E7E">
            MRP
          </Text>
          <Text fontSize="0.9rem" fontWeight="600">
            ₹{discount}
          </Text>
        </Flex>
      </Box>
      <DeleteIcon onClick={deleteProductFromBag} color="#807E7E" />
      <Flex
        alignItems="center"
        gap="10px"
        border="1px solid #BFBBBB"
        borderRadius="10px"
        ml="5%"
      >
        <Button
          bg="transparent"
          _hover={{}}
          _active={{}}
          fontSize="1.5rem"
          w="max-content"
          onClick={decreaseQuantity}
        >
          -
        </Button>
        <Text>{bagQuantity}</Text>
        <Button
          bg="transparent"
          _hover={{}}
          _active={{}}
          fontSize="1.2rem"
          w="max-content"
          onClick={increaseQuantity}
        >
          +
        </Button>
      </Flex>
    </Flex>
  );
};

export default BagCard;
