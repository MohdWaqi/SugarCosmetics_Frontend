import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import image1 from "../assets/just4.jpg";

const BagCard = ({name, length, quantity, photo, discount, sellPrice}) => {
    const deleteProductFromBag = (id) => {
        setBagItems(prevItems =>
          prevItems.filter(item => item.id !== id)
        );
      };
      const increaseQuantity = (id) => {
        setBagItems(prevItems =>
          prevItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      };
    
      const decreaseQuantity = (id) => {
        setBagItems(prevItems =>
          prevItems.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
          )
        );
      };
  return (
    <Flex alignItems="center" py="1%" borderTop={length > 0  && "1px solid #807E7E"}>
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
      <DeleteIcon onClick={()=>deleteProductFromBag()} color="#807E7E" />
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
        >
          -
        </Button>
        <Text>{quantity}</Text>
        <Button
          bg="transparent"
          _hover={{}}
          _active={{}}
          fontSize="1.2rem"
          w="max-content"
          onClick={()=>increaseQuantity(length)}
        >
          +
        </Button>
      </Flex>
    </Flex>
  );
};

export default BagCard;
