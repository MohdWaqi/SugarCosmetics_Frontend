import React, { useState, useEffect, useContext } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import background from "../assets/10047.jpeg";
import user from "../assets/user.jpg";
import location from "../assets/location.svg";
import WishlistItem from "../Components/WishlistItem";
import wishlistLike from "../assets/liked.svg";
import whatsApp from "../assets/whatsapp.svg";
import refer from "../assets/gift.svg";
import emptyWishlist from "../assets/emptyWish.png";
import ProductCard from "../Components/ProductCard";
import { useNavigate } from "react-router-dom";
import { getWishedItems } from "../services/Api";
import { AuthContext } from "../Context/AuthContextProvider";

const Wishlist = () => {
  const [wishProduct, setWishProduct] = useState([]);
  const {isAuth} = useContext(AuthContext)
  const navigate = useNavigate();
  const getItems = async()=>{
    try {
      const config={
        Authorization: `Bearer ${isAuth.accessToken}`,
        "Content-Type": "application/json",
      }
      const response = await getWishedItems(config)
      setWishProduct(response.data.wishlist.items)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getItems()
  }, []);

  return (
    <>
      <Navbar />
      <Box pt="20vh" bg="#F3F3F3">
        <Flex w="95%" m="auto" gap="2%">
          <Box
            backgroundImage={`url(${background})`}
            w="23%"
            borderRadius="15px"
            h="max-content"
          >
            <Flex alignItems="center" px="5%" pt="5%">
              <Image p="3%" w="20%" src={user} />
              <Text color="white" fontSize="1.2rem" fontWeight="700">
                Sugar Fan
              </Text>
            </Flex>
            <Box bg="white" p="5%" borderRadius="15px">
              <Text fontWeight="500">Refer Your Friend & Family</Text>
              <Divider mt="5%" border="1px solid gray" />
              <WishlistItem iconImage={location} description="Addresses" />
              <WishlistItem iconImage={wishlistLike} description="Wishlist" />
              <WishlistItem iconImage={whatsApp} description="WhatsApp Store" />
              <WishlistItem iconImage={refer} description="Refer & Earn" />
            </Box>
          </Box>
          <Flex flex={1}>
            {(wishProduct.length == 0) ? (
              <Box
                textAlign="center"
                w="100%"
                m="auto"
                p="7%"
                bg="white"
                borderRadius="15px"
              >
                <Image m="auto" mb="3%" src={emptyWishlist} />
                <Text fontWeight="500">Your Wishlist is Empty</Text>
                <Text fontWeight="500" color="#807E7E">
                  Looks like you haven’t made your choice yet
                </Text>
                <Button
                  bg="black"
                  color="white"
                  p="2% 8%"
                  my="4%"
                  onClick={() => navigate("/")}
                >
                  FILL IT UP
                </Button>
              </Box>
            ) : (
              <Grid
                w="100%"
                templateColumns="repeat(3, 1fr)"
                gap={6}
                textAlign="center"
              >
                {wishProduct.map((product) => (
                  <ProductCard
                    key={product._id}
                    productImage={product.image}
                    productName={product.title}
                    productVariety={`${product.shades.length} Shades`}
                    productPrice={product.price}
                    discountPrice={product.discountPrice}
                    best={false}
                    fullProduct={product}
                  />
                ))}
              </Grid>
            )}
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Wishlist;
