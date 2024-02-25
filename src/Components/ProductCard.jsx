import { Box, Button, Flex, Image, Text, useToast, } from "@chakra-ui/react";
import React, { useState } from "react";
import priceIcon from "../assets/10013.svg"
import like from "../assets/10014.svg"
import bestSellerIcon from "../assets/10015.svg"
import { useNavigate } from "react-router-dom";
import liked from "../assets/getLiked.svg"

const ProductCard = ({productImage, productName, productVariety, productPrice, discountPrice, best, fullProduct}) => {
  const toast = useToast()
  const [likeProduct, setLikeProduct] = useState(false)
  const navigate = useNavigate()
  const handleWishlist =() =>{
    setLikeProduct(!likeProduct)
    if(!likeProduct){
      console.log(fullProduct)
      toast({
        position: "bottom-left",
        isClosable: true,
        render: () => (
          <Box color='#FFFFFF' bg="black" p={"5% 10%"} borderRadius="10px" width="max-content" fontWeight={700} >
            Added to Wishlist
          </Box>)
      })
    }else{
      toast({
        title: `Removed from Wishlist`,
        position: "bottom-left",
        isClosable: true,
      })
    }
  }
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
      <Image onClick={()=>navigate("/products")} className="carouselImg" h="200px" m="auto" borderRadius="10px" pt="1%" src={productImage} />
      <Text onClick={()=>navigate("/products")} px="15%" fontSize={"0.85rem"}>
        {productName}
      </Text>
      <Text onClick={()=>navigate("/products")} px="15%" color="gray">
        {productVariety}
      </Text>
      <Text onClick={()=>navigate("/products")} px="15%" fontSize="1.2rem" fontWeight="700">
        ₹{productPrice}
      </Text>
      <Flex alignItems="center" justifyContent="center">
        <Image className="priceImg" src={priceIcon} />
        <Text ml="2%" fontSize="0.85rem">
          ₹{discountPrice}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" p="5%">
        <Image onClick={handleWishlist} className="priceImg" src={likeProduct?liked:like} />
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
