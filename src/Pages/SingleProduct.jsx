import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Box, Button, Flex, Image, Img, Text } from "@chakra-ui/react";
import like from "../assets/10014.svg"
import ProductCarousel from "../Components/ProductCarousel";

const SingleProduct = () => {
  const [data, setData] = useState({});
  const [extraAd, setExtraAd] = useState({})
  useEffect(() => {
    setData({
      image: "https://i.postimg.cc/cLSFr7dW/extra5.jpg",
      title: "Diamond Dust Eyeshadow Palette",
      price: 1299.99,
      discountPrice: 475,
      description:
        "Create mesmerizing eye looks with our Diamond Dust Eyeshadow Palette. Features a stunning array of shimmering shades.",
      shades: [
        "Diamond Dust",
        "Crystal Glitter",
        "Opulent Pearl",
        "Radiant Rose",
      ],
    });
    setExtraAd({
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
        justIn: {
          name: "JUST-IN",
          data: [
            [
              {
                image: "https://i.postimg.cc/13rM1x01/just1.jpg",
                title: "Golden Glow Serum",
                price: 1099.99,
                discountPrice: 329,
                description:
                  "Illuminate your skin with our Golden Glow Serum. Infused with gold flakes for a radiant complexion.",
                shades: ["Radiant Gold", "Champagne", "Rose Gold", "Bronze"],
              },
              {
                image: "https://i.postimg.cc/gjhqM1c5/just2.jpg",
                title: "Silk Satin Foundation",
                price: 1299.99,
                discountPrice: 890,
                description:
                  "Achieve a flawless, satin finish with our Silk Satin Foundation. Blurs imperfections for a smooth complexion.",
                shades: ["Ivory Silk", "Beige Satin", "Sandstone", "Golden Silk"],
              },
              {
                image: "https://i.postimg.cc/8cGjSYBx/just3.jpg",
                title: "Diamond Dust Blush",
                price: 1199.99,
                discountPrice: 849,
                description:
                  "Add a touch of luxury to your cheeks with our Diamond Dust Blush. Finely milled with diamond particles for luminosity.",
                shades: [
                  "Pink Diamond",
                  "Peach Pearl",
                  "Coral Crush",
                  "Rose Quartz",
                ],
              },
              {
                image: "https://i.postimg.cc/HkdRy9BH/just4.jpg",
                title: "Ultimate Radiance Serum",
                price: 1099.99,
                discountPrice: 894,
                description:
                  "Get lit-from-within skin with our Ultimate Radiance Serum. Enriched with potent antioxidants for a healthy glow.",
                shades: ["Golden Glow", "Radiant Rose", "Champagne", "Bronze"],
              },
            ],
            [
              {
                image: "https://i.postimg.cc/L84cYV8f/just5.gif",
                title: "Gilded Glamour Palette",
                price: 1399.99,
                discountPrice: 343,
                description:
                  "Unleash your inner artist with our Gilded Glamour Palette. Features a curated selection of metallic and matte shades.",
                shades: [
                  "Gilded Gold",
                  "Rose Quartz",
                  "Opulent Onyx",
                  "Sapphire Sparkle",
                ],
              },
              {
                image: "https://i.postimg.cc/hGz3TZWJ/just6.jpg",
                title: "Precious Pearl Primer",
                price: 1099.99,
                discountPrice: 348,
                description:
                  "Prime your skin to perfection with our Precious Pearl Primer. Smooths and blurs imperfections for flawless makeup application.",
                shades: ["Pearl Glow", "Champagne", "Rose Gold", "Iridescent"],
              },
              {
                image: "https://i.postimg.cc/pL9B6904/just7.jpg",
                title: "Opulent Orchid Lipstick",
                price: 1199.99,
                discountPrice: 832,
                description:
                  "Adorn your lips with our Opulent Orchid Lipstick. Luxurious formula infused with orchid extract for hydration.",
                shades: [
                  "Orchid Petal",
                  "Blossom Pink",
                  "Magenta Majesty",
                  "Velvet Violet",
                ],
              },
              {
                image: "https://i.postimg.cc/D08WwGbK/just8.jpg",
                title: "Radiant Diamond Highlighter",
                price: 1099.99,
                discountPrice: 690,
                description:
                  "Illuminate your complexion with our Radiant Diamond Highlighter. Infused with diamond powder for a dazzling glow.",
                shades: ["Crystal", "Champagne", "Rose Gold", "Opal"],
              },
            ],
          ],
        }})
  }, []);

  return (
    <>
      <Navbar />
      <Box pt="20vh" bg="#F3F3F3">
        <Box
          w="80%"
          m="auto"
          borderRadius="20px"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          my="2%"
        >
          <Flex p="2% 5%">
            <Flex w="40%" justifyContent="space-around">
              <Box w="15%">
                <Img
                  borderRadius="10px"
                  mt="20px"
                  border="1px solid #DFDEDE"
                  _hover={{ border: "1px solid black" }}
                  p="4%"
                  src={data.image}
                />
                <Img
                  borderRadius="10px"
                  mt="20px"
                  border="1px solid #DFDEDE"
                  _hover={{ border: "1px solid black" }}
                  p="4%"
                  src={data.image}
                />
                <Img
                  borderRadius="10px"
                  mt="20px"
                  border="1px solid #DFDEDE"
                  _hover={{ border: "1px solid black" }}
                  p="4%"
                  src={data.image}
                />
                <Img
                  borderRadius="10px"
                  mt="20px"
                  border="1px solid #DFDEDE"
                  _hover={{ border: "1px solid black" }}
                  p="4%"
                  src={data.image}
                />
              </Box>
              <Box
                w="75%"
                borderRadius="20px"
                display="flex"
                border="1px solid #DFDEDE"
              >
                <Img w="80%" borderRadius="15px" m="auto" src={data.image} />
              </Box>
            </Flex>
            <Box ml="5%" flex={1}>
              <Text fontSize="1.2rem" mb="2%">
                {data.title}
              </Text>
              <Text
                display="inline-block"
                p="1% 2%"
                border="1px solid gray"
                borderRadius="10px"
              >
                ★ 5.0(2)
              </Text>
              <Text fontSize="1.5rem" fontWeight="700" mb="2%">
                ₹{data.price}
              </Text>
              <Flex>
              <Image w="60px" src={like} />
              <Button
                bg="black"
                color="white"
                w="40%"
                ml="5%"
                h="max-height"
                _hover={{ backgroundColor: "black" }}
              >
                ADD TO BAG
              </Button>
              </Flex>
              <Text fontSize="1.2rem" my="2%" fontWeight="600">
                Description
              </Text>
              <Text>{data.description}</Text>
            </Box>
          </Flex>
        </Box>
        {extraAd.bestSeller&&<ProductCarousel dark={false} products={extraAd.bestSeller} best={true}/> }
        {extraAd.bestSeller&&<ProductCarousel dark={false} products={extraAd.justIn} best={true}/> }

      </Box>
      <Footer />
    </>
  );
};

export default SingleProduct;
