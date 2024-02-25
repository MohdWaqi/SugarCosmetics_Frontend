import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Box, Button, Divider, Flex, Grid, Image, Text } from '@chakra-ui/react'
import background from "../assets/10047.jpeg"
import user from "../assets/user.jpg"
import location from "../assets/location.svg"
import WishlistItem from '../Components/WishlistItem'
import wishlistLike from "../assets/liked.svg"
import whatsApp from "../assets/whatsapp.svg"
import refer from "../assets/gift.svg"
import emptyWishlist from "../assets/emptyWish.png"
import ProductCard from '../Components/ProductCard'
import { useNavigate } from 'react-router-dom'


const Wishlist = () => {
  const [wishProduct, setWishProduct] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    setWishProduct([{
      "image": "https://i.postimg.cc/jSh3xhSn/best1.jpg",
      "title": "Sculpting Palette",
      "price": 999.99,
      "discountPrice": 759,
      "description": "Define and contour your features with our Sculpting Palette. Includes shades for highlighting and bronzing.",
      "shades": ["Light", "Medium", "Deep"]
    },
    {
      "image": "https://i.postimg.cc/gjZ6zd3c/best2.jpg",
      "title": "Metallic Eyeshadow",
      "price": 849.99,
      "discountPrice": 684,
      "description": "Add shimmering dimension to your eyes with our Metallic Eyeshadow. Long-lasting formula with intense pigmentation.",
      "shades": ["Gold Rush", "Bronze Blaze", "Silver Spark", "Copper Crush"]
    },
    {
      "image": "https://i.postimg.cc/W1b0Bd5T/best3.jpg",
      "title": "Luxury Mascara",
      "price": 899.99,
      "discountPrice": 824,
      "description": "Elevate your lashes with our Luxury Mascara. Provides volume, length, and curl for a dramatic look.",
      "shades": ["Black", "Brown", "Midnight Blue", "Plum"]
    },
    {
      "image": "https://i.postimg.cc/bv1YLT1J/best4.jpg",
      "title": "Diamond Dust Highlighter",
      "price": 849.99,
      "discountPrice": 748,
      "description": "Illuminate your complexion with our Diamond Dust Highlighter. Infused with finely milled diamond particles for a radiant glow.",
      "shades": ["Crystal", "Champagne", "Rose Gold", "Opal"]
    },
    {
      "image": "https://i.postimg.cc/k4j0y6YG/best5.jpg",
      "title": "Velvet Matte Lipstick",
      "price": 899.99,
      "discountPrice": 847,
      "description": "Experience velvety smooth lips with our Velvet Matte Lipstick. Richly pigmented and long-wearing.",
      "shades": ["Red Velvet", "Plum Passion", "Berry Bliss", "Nude Nectar"]
    },
    {
      "image": "https://i.postimg.cc/GhYcbKSj/best6.jpg",
      "title": "Pearlescent Blush",
      "price": 849.99,
      "discountPrice": 701,
      "description": "Achieve a radiant flush with our Pearlescent Blush. Features luminous pearl particles for a dewy finish.",
      "shades": ["Peach Pearl", "Rose Quartz", "Coral Glow", "Golden Sun"]
    },
    {
      "image": "https://i.postimg.cc/50ZZGd1W/best7.jpg",
      "title": "Instant Lift Foundation",
      "price": 899.99,
      "discountPrice": 743,
      "description": "Get a lifted and firm complexion instantly with our Instant Lift Foundation. Formulated with collagen-boosting ingredients.",
      "shades": ["Ivory", "Beige", "Natural", "Golden"]
    },
    {
      "image": "https://i.postimg.cc/7Y4RTNZ9/best8.jpg",
      "title": "Liquid Gold Highlighter",
      "price": 849.99,
      "discountPrice": 820,
      "description": "Drench your skin in liquid gold with our Liquid Gold Highlighter. Ultra-pigmented and blendable formula for a luminous finish.",
      "shades": ["Champagne Gold", "Rose Gold", "Bronze Gold", "White Gold"]
    },
    {
      "image": "https://i.postimg.cc/R0t1RjPH/gift1.jpg",
      "title": "Crystal Clear Lip Gloss",
      "price": 899.99,
      "discountPrice": 324,
      "description": "Add high shine to your lips with our Crystal Clear Lip Gloss. Non-sticky formula enriched with nourishing oils.",
      "shades": ["Clear", "Sheer", "Transparent", "Shimmer"]
    },
    {
      "image": "https://i.postimg.cc/5t8vv805/gift2.jpg",
      "title": "Lash Lengthening Serum",
      "price": 849.99,
      "discountPrice": 834,
      "description": "Achieve longer and fuller lashes with our Lash Lengthening Serum. Enriched with peptides and vitamins for lash nourishment.",
      "shades": ["Clear", "Transparent", "White", "Neutral"]
    },
    {
      "image": "https://i.postimg.cc/RVn0N4qK/gift3.jpg",
      "title": "24K Gold Infused Primer",
      "price": 899.99,
      "discountPrice": 732,
      "description": "Prime your skin with luxury using our 24K Gold Infused Primer. Minimizes pores and enhances makeup longevity.",
      "shades": ["Gold", "Champagne", "Rose Gold", "Bronze"]
    },
    {
      "image": "https://i.postimg.cc/W1wq1TfS/gift4.jpg",
      "title": "Platinum Powder Highlighter",
      "price": 849.99,
      "discountPrice": 454,
      "description": "Illuminate your complexion with our Platinum Powder Highlighter. Finely milled powder for a dazzling glow.",
      "shades": ["Platinum", "Silver", "White Gold", "Champagne"]
    },
    {
      "image": "https://i.postimg.cc/fb6s40jP/gift5.jpg",
      "title": "Opulent Eyelash Curler",
      "price": 899.99,
      "discountPrice": 843,
      "description": "Achieve lifted and curled lashes with our Opulent Eyelash Curler. Ergonomically designed for ease of use.",
      "shades": ["Gold", "Rose Gold", "Silver", "Black"]
    }])
  }, [])
  
  return (
    <>
    <Navbar/>
    <Box pt="20vh" bg="#F3F3F3">
        <Flex w="95%" m="auto" gap="2%">
            <Box backgroundImage={`url(${background})`} w="23%" borderRadius="15px" h="max-content">
            <Flex alignItems="center" px="5%" pt="5%">
            <Image p="3%" w="20%" src={user} />
            <Text color="white" fontSize="1.2rem" fontWeight="700">Sugar Fan</Text>
            </Flex>
            <Box bg="white" p="5%" borderRadius="15px">
                <Text fontWeight="500" >Refer Your Friend & Family</Text>
                <Divider mt="5%" border="1px solid gray" />
                <WishlistItem iconImage={location} description="Addresses" />
                <WishlistItem iconImage={wishlistLike} description="Wishlist" />
                <WishlistItem iconImage={whatsApp} description="WhatsApp Store" />
                <WishlistItem iconImage={refer} description="Refer & Earn" />
            </Box>
            </Box>
            <Flex flex={1} >
             {false ? <Box textAlign="center" w="100%" m="auto" p="7%" bg="white" borderRadius="15px">
              <Image m="auto" mb="3%" src={emptyWishlist} />
              <Text fontWeight="500">
                Your Wishlist is Empty
              </Text>
              <Text fontWeight="500" color="#807E7E">
              Looks like you haven’t made your choice yet
              </Text>
              <Button bg="black" color="white" p="2% 8%" my="4%" onClick={()=>navigate("/")}>
                FILL IT UP
              </Button>
            </Box>:
            <Grid w="100%"  templateColumns="repeat(3, 1fr)" gap={6} textAlign="center">
            {wishProduct.map((product)=><ProductCard  productImage={product.image} productName={product.title} productVariety={`${product.shades.length} Shades`} productPrice={product.price} discountPrice={product.discountPrice} />)}
                </Grid>}
            </Flex>
        </Flex>
    </Box>
    <Footer/>
    </>
  )
}

export default Wishlist