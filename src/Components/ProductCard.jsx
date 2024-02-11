import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import priceIcon from "../assets/10013.svg"
import like from "../assets/10014.svg"
import bestSellerIcon from "../assets/10015.svg"

const ProductCard = ({productImage, productName, productVariety, productPrice, discountPrice, best}) => {
  return (
    <Box
      position="relative"
      bg="white"
      w="90%"
      borderRadius="10px"
      cursor="pointer"
      boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px"

    >
      {best &&<Image position="absolute" className="tag" src={bestSellerIcon} />}
      <Image className="carouselImg" h="200px" m="auto" borderRadius="10px" pt="1%" src={productImage} />
      <Text px="15%" fontSize={"0.85rem"}>
        {productName}
      </Text>
      <Text px="15%" color="gray">
        {productVariety}
      </Text>
      <Text px="15%" fontSize="1.2rem" fontWeight="700">
        ₹{productPrice}
      </Text>
      <Flex alignItems="center" justifyContent="center">
        <Image className="priceImg" src={priceIcon} />
        <Text ml="2%" fontSize="0.85rem">
          ₹{discountPrice}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" p="5%">
        <Image className="priceImg" src={like} />
        <Button
          bg="black"
          color="white"
          p="7% 15%"
          _hover={{ backgroundColor: "black" }}
        >
          ADD TO BAG
        </Button>
      </Flex>
    </Box>
  );
};

export default ProductCard;
