import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import empty from "../assets/emptyBag.svg";
import ProductCarousel from "../Components/ProductCarousel";

import saveImage from "../assets/save.gif"
import BagCard from "../Components/BagCard";

const Bag = () => {
  const [adData, setAdData] = useState({});
  const [bagItems, setBagItems] = useState([]);
  useEffect(() => {
    setAdData({
      bestSeller: {
        name: "BESTSELLERS",
        data: [
          [
            {
              image: "https://i.postimg.cc/jSh3xhSn/best1.jpg",
              title: "Sculpting Palette",
              price: 899.99,
              discountPrice: 759,
              description:
                "Define and contour your features with our Sculpting Palette. Includes shades for highlighting and bronzing.",
              shades: ["Light", "Medium", "Deep"],
            },
            {
              image: "https://i.postimg.cc/gjZ6zd3c/best2.jpg",
              title: "Metallic Eyeshadow",
              price: 849.99,
              discountPrice: 684,
              description:
                "Add shimmering dimension to your eyes with our Metallic Eyeshadow. Long-lasting formula with intense pigmentation.",
              shades: [
                "Gold Rush",
                "Bronze Blaze",
                "Silver Spark",
                "Copper Crush",
              ],
            },
            {
              image: "https://i.postimg.cc/W1b0Bd5T/best3.jpg",
              title: "Luxury Mascara",
              price: 899.99,
              discountPrice: 824,
              description:
                "Elevate your lashes with our Luxury Mascara. Provides volume, length, and curl for a dramatic look.",
              shades: ["Black", "Brown", "Midnight Blue", "Plum"],
            },
            {
              image: "https://i.postimg.cc/bv1YLT1J/best4.jpg",
              title: "Diamond Dust Highlighter",
              price: 849.99,
              discountPrice: 748,
              description:
                "Illuminate your complexion with our Diamond Dust Highlighter. Infused with finely milled diamond particles for a radiant glow.",
              shades: ["Crystal", "Champagne", "Rose Gold", "Opal"],
            },
          ],
          [
            {
              image: "https://i.postimg.cc/k4j0y6YG/best5.jpg",
              title: "Velvet Matte Lipstick",
              price: 899.99,
              discountPrice: 847,
              description:
                "Experience velvety smooth lips with our Velvet Matte Lipstick. Richly pigmented and long-wearing.",
              shades: [
                "Red Velvet",
                "Plum Passion",
                "Berry Bliss",
                "Nude Nectar",
              ],
            },
            {
              image: "https://i.postimg.cc/GhYcbKSj/best6.jpg",
              title: "Pearlescent Blush",
              price: 849.99,
              discountPrice: 701,
              description:
                "Achieve a radiant flush with our Pearlescent Blush. Features luminous pearl particles for a dewy finish.",
              shades: [
                "Peach Pearl",
                "Rose Quartz",
                "Coral Glow",
                "Golden Sun",
              ],
            },
            {
              image: "https://i.postimg.cc/50ZZGd1W/best7.jpg",
              title: "Instant Lift Foundation",
              price: 899.99,
              discountPrice: 743,
              description:
                "Get a lifted and firm complexion instantly with our Instant Lift Foundation. Formulated with collagen-boosting ingredients.",
              shades: ["Ivory", "Beige", "Natural", "Golden"],
            },
            {
              image: "https://i.postimg.cc/7Y4RTNZ9/best8.jpg",
              title: "Liquid Gold Highlighter",
              price: 849.99,
              discountPrice: 820,
              description:
                "Drench your skin in liquid gold with our Liquid Gold Highlighter. Ultra-pigmented and blendable formula for a luminous finish.",
              shades: [
                "Champagne Gold",
                "Rose Gold",
                "Bronze Gold",
                "White Gold",
              ],
            },
          ],
        ],
      },
    });
  }, []);
  useEffect(()=>{
    setBagItems([
        {
          image: "https://i.postimg.cc/jSh3xhSn/best1.jpg",
          title: "Sculpting Palette",
          price: 899.99,
          discountPrice: 759,
          description:
            "Define and contour your features with our Sculpting Palette. Includes shades for highlighting and bronzing.",
          shades: ["Light", "Medium", "Deep"],
          quantity: 1,
        },
        {
          image: "https://i.postimg.cc/gjZ6zd3c/best2.jpg",
          title: "Metallic Eyeshadow",
          price: 849.99,
          discountPrice: 684,
          description:
            "Add shimmering dimension to your eyes with our Metallic Eyeshadow. Long-lasting formula with intense pigmentation.",
          shades: ["Gold Rush", "Bronze Blaze", "Silver Spark", "Copper Crush"],
          quantity: 1,
        },
        {
          image: "https://i.postimg.cc/W1b0Bd5T/best3.jpg",
          title: "Luxury Mascara",
          price: 899.99,
          discountPrice: 824,
          description:
            "Elevate your lashes with our Luxury Mascara. Provides volume, length, and curl for a dramatic look.",
          shades: ["Black", "Brown", "Midnight Blue", "Plum"],
          quantity: 1,
        },
        {
          image: "https://i.postimg.cc/bv1YLT1J/best4.jpg",
          title: "Diamond Dust Highlighter",
          price: 849.99,
          discountPrice: 748,
          description:
            "Illuminate your complexion with our Diamond Dust Highlighter. Infused with finely milled diamond particles for a radiant glow.",
          shades: ["Crystal", "Champagne", "Rose Gold", "Opal"],
          quantity: 1,
        },
      ]);
  },[])
  const calculateTotalPrice = () => {
    return bagItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const calculateDiscountedPrice = () => {
    return bagItems.reduce((total, item) => total + item.discountPrice * item.quantity, 0);
  };
  
  return (
    <>
      <Navbar />
      <Box pt="20vh" bg="#F3F3F3">
        <Flex
          w="95%"
          bg="white"
          m="auto"
          mb="2%"
          borderRadius="10px"
          justifyContent="center"
        >
          {false && (
            <Box textAlign="center">
              <Image m="auto" mb="3%" src={empty} />
              <Text fontWeight="500" color="#807E7E">
                Hey! It's lonely here.
              </Text>
              <Text fontWeight="500" color="#807E7E">
                Your bag seems to have no company.
              </Text>
              <Text fontWeight="500" color="#807E7E">
                Why not add some products?
              </Text>
              <Button bg="black" color="white" p="1.8%" my="4%">
                SHOP NOW
              </Button>
            </Box>
          )}
          <Box w="50%" p="1.5%">
            <Heading size="md" mb="2%">BAG SUMMARY</Heading>
            <Box border="1px solid #BFBBBB" p="1% 2%" borderRadius="15px">
              {bagItems.length > 0 && bagItems.map((item, index)=><BagCard key={index} photo={item.image} name={item.title} discount={item.discountPrice} sellPrice={item.price} quantity={item.quantity} length={index}/>)}
            </Box>
          </Box>
          <Box flex={1} p="1.5%" >
            <Flex border="1px solid pink" bg="linear-gradient(to right ,pink, white)" alignItems="center" p="1% 3%" justifyContent="space-between" borderRadius="10px">
            <Heading fontSize="1rem">₹{(calculateTotalPrice()-calculateDiscountedPrice()).toFixed(2)} total savings</Heading>
            <Image w="7%" src={saveImage} />
            </Flex>
            <Box>
            <Heading size="md" py="2%">PRICE DETAILS</Heading>
            <Box border="1px solid #BFBBBB" p="2%" borderRadius="15px">
                <Flex mb="1%">
                    <Heading color="gray"  flex={1} size="xs">Item(s) Total <Text as="i" fontSize="0.8rem">(Inclusive of taxes)</Text></Heading>
                    <Heading color="gray" w="30%" size="xs" textAlign="right">₹{calculateTotalPrice()}</Heading>
                </Flex>
                <Flex mb="1%">
                    <Heading color="gray"  flex={1} size="xs">Savings</Heading>
                    <Heading color="green" w="30%" size="xs" textAlign="right">-₹{(calculateTotalPrice()-calculateDiscountedPrice()).toFixed(2)}</Heading>
                </Flex>
                <Flex mb="3%">
                    <Heading color="gray"  flex={1} size="xs">Standard Shipping</Heading>
                    <Heading color="green" w="30%" size="xs" textAlign="right">Free</Heading>
                </Flex>
                <Flex py="2%" borderTop="1px solid gray" borderStyle="dashed">
                    <Heading  flex={1} size="md">Order Total</Heading>
                    <Heading  w="30%" size="md" textAlign="right">₹{calculateDiscountedPrice()}</Heading>
                </Flex>       
            </Box>
            <Flex justifyContent="flex-end" mt="5%">
                <Button bg="black" color="white" fontSize="1.2rem" p="3.5% 10%" _hover={{}} _active={{}} >₹{calculateDiscountedPrice()} PLACE ORDER</Button>
            </Flex>
            </Box>
          </Box>
        </Flex>
        {false && (
          <ProductCarousel
            dark={false}
            products={adData.bestSeller}
            best={true}
          />
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Bag;
