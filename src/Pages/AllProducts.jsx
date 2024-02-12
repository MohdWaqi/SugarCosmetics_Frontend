import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import FilterOption from "../Components/FilterOption";
import optionFilter from "../assets/filters.json"
import ProductCard from "../Components/ProductCard";

const AllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
      setProducts([
        {
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
        },
      {
          "image": "https://i.postimg.cc/QCCJpVvX/gift6.jpg",
          "title": "Divine Diamond Dust",
          "price": 1299.99,
          "discountPrice": 1103,
          "description": "Experience the luxurious sparkle of our Divine Diamond Dust. Infused with finely crushed diamonds for a radiant glow.",
          "shades": ["Crystal", "Champagne", "Rose Gold", "Opal"]
        },
        {
          "image": "https://i.postimg.cc/fRnYbHWW/gift7.jpg",
          "title": "Luxe Liquid Lip Lacquer",
          "price": 1099.99,
          "discountPrice": 893,
          "description": "Indulge in opulent color with our Luxe Liquid Lip Lacquer. Provides high shine and intense pigmentation.",
          "shades": ["Crimson Velvet", "Ruby Rouge", "Satin Rose", "Glossy Garnet"]
        },
        {
          "image": "https://i.postimg.cc/1R8WnjSD/gift8.jpg",
          "title": "Platinum Precision Eyeliner",
          "price": 1199.99,
          "discountPrice": 805,
          "description": "Define your eyes with precision using our Platinum Precision Eyeliner. Waterproof and smudge-proof formula.",
          "shades": ["Black Onyx", "Deep Brown", "Midnight Blue", "Charcoal"]
        },
        {
          "image": "https://i.postimg.cc/13rM1x01/just1.jpg",
          "title": "Golden Glow Serum",
          "price": 1099.99,
          "discountPrice": 329,
          "description": "Illuminate your skin with our Golden Glow Serum. Infused with gold flakes for a radiant complexion.",
          "shades": ["Radiant Gold", "Champagne", "Rose Gold", "Bronze"]
        },
        {
          "image": "https://i.postimg.cc/gjhqM1c5/just2.jpg",
          "title": "Silk Satin Foundation",
          "price": 1299.99,
          "discountPrice": 890,
          "description": "Achieve a flawless, satin finish with our Silk Satin Foundation. Blurs imperfections for a smooth complexion.",
          "shades": ["Ivory Silk", "Beige Satin", "Sandstone", "Golden Silk"]
        },
        {
          "image": "https://i.postimg.cc/8cGjSYBx/just3.jpg",
          "title": "Diamond Dust Blush",
          "price": 1199.99,
          "discountPrice": 849,
          "description": "Add a touch of luxury to your cheeks with our Diamond Dust Blush. Finely milled with diamond particles for luminosity.",
          "shades": ["Pink Diamond", "Peach Pearl", "Coral Crush", "Rose Quartz"]
        },
        {
          "image": "https://i.postimg.cc/HkdRy9BH/just4.jpg",
          "title": "Ultimate Radiance Serum",
          "price": 1099.99,
          "discountPrice": 894,
          "description": "Get lit-from-within skin with our Ultimate Radiance Serum. Enriched with potent antioxidants for a healthy glow.",
          "shades": ["Golden Glow", "Radiant Rose", "Champagne", "Bronze"]
        },
        {
          "image": "https://i.postimg.cc/L84cYV8f/just5.gif",
          "title": "Gilded Glamour Palette",
          "price": 1399.99,
          "discountPrice": 343,
          "description": "Unleash your inner artist with our Gilded Glamour Palette. Features a curated selection of metallic and matte shades.",
          "shades": ["Gilded Gold", "Rose Quartz", "Opulent Onyx", "Sapphire Sparkle"]
        },
        {
          "image": "https://i.postimg.cc/hGz3TZWJ/just6.jpg",
          "title": "Precious Pearl Primer",
          "price": 1099.99,
          "discountPrice": 348,
          "description": "Prime your skin to perfection with our Precious Pearl Primer. Smooths and blurs imperfections for flawless makeup application.",
          "shades": ["Pearl Glow", "Champagne", "Rose Gold", "Iridescent"]
        },
        {
          "image": "https://i.postimg.cc/pL9B6904/just7.jpg",
          "title": "Opulent Orchid Lipstick",
          "price": 1199.99,
          "discountPrice": 832,
          "description": "Adorn your lips with our Opulent Orchid Lipstick. Luxurious formula infused with orchid extract for hydration.",
          "shades": ["Orchid Petal", "Blossom Pink", "Magenta Majesty", "Velvet Violet"]
        },
      {
          "image": "https://i.postimg.cc/D08WwGbK/just8.jpg",
          "title": "Radiant Diamond Highlighter",
          "price": 1099.99,
          "discountPrice": 690,
          "description": "Illuminate your complexion with our Radiant Diamond Highlighter. Infused with diamond powder for a dazzling glow.",
          "shades": ["Crystal", "Champagne", "Rose Gold", "Opal"]
        },
        {
          "image": "https://i.postimg.cc/9QGD0Czz/extra1.jpg",
          "title": "Enchanted Elixir Serum",
          "price": 1199.99,
          "discountPrice": 983,
          "description": "Transform your skin with our Enchanted Elixir Serum. Formulated with rare botanical extracts for youthful radiance.",
          "shades": ["Ethereal", "Mystic", "Enchantment", "Sorcery"]
        },
        {
          "image": "https://i.postimg.cc/26BypYpz/extra2.jpg",
          "title": "Glowing Goddess Bronzer",
          "price": 1099.99,
          "discountPrice": 849,
          "description": "Achieve a sun-kissed glow with our Glowing Goddess Bronzer. Infused with luminous pigments for a radiant complexion.",
          "shades": ["Golden Goddess", "Bronze Divinity", "Sunlit Siren", "Copper Queen"]
        },
        {
          "image": "https://i.postimg.cc/50xgnf6R/extra3.jpg",
          "title": "Velvet Veil Primer",
          "price": 1199.99,
          "discountPrice": 786,
          "description": "Create a smooth canvas for makeup with our Velvet Veil Primer. Blurs imperfections and extends makeup wear.",
          "shades": ["Transparent", "Illuminating", "Mattifying", "Hydrating"]
        },
        {
          "image": "https://i.postimg.cc/13hpvydr/extra4.jpg",
          "title": "Radiant Ruby Lipstick",
          "price": 1099.99,
          "discountPrice": 694,
          "description": "Adorn your lips with our Radiant Ruby Lipstick. Intensely pigmented formula for bold, long-lasting color.",
          "shades": ["Ruby Red", "Garnet Glam", "Scarlet Sizzle", "Crimson Crush"]
        },
        {
          "image": "https://i.postimg.cc/cLSFr7dW/extra5.jpg",
          "title": "Diamond Dust Eyeshadow Palette",
          "price": 1299.99,
          "discountPrice": 475,
          "description": "Create mesmerizing eye looks with our Diamond Dust Eyeshadow Palette. Features a stunning array of shimmering shades.",
          "shades": ["Diamond Dust", "Crystal Glitter", "Opulent Pearl", "Radiant Rose"]
        },
        {
          "image": "https://i.postimg.cc/255FZ2Js/extra6.jpg",
          "title": "Golden Goddess Highlighter",
          "price": 1099.99,
          "discountPrice": 799,
          "description": "Illuminate your features with our Golden Goddess Highlighter. Infused with gold flecks for a radiant glow.",
          "shades": ["Golden Glow", "Champagne", "Sunlit", "Bronze Goddess"]
        }
      ]
      )
    }, [])
    
  return (
    <>
      <Navbar />
      <Flex p="1%" pt="20vh" bg="#F3F3F3" justifyContent={"space-around"}>
        <Box w="20%">
          <Accordion
            allowToggle
            bg="white"
            borderRadius="15px"
            p="2%"
            border="transparent"
          >
            <AccordionItem>
              <h2>
                <AccordionButton _hover={{ backgroundColor: "white" }}>
                  <Box as="span" textAlign="left" fontWeight="700">
                    Sort By:
                  </Box>
                  <Box as="span" flex="1" textAlign="left" ml="10px">
                    Sort By:
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} borderTop="2px solid #F3F3F3">
                <RadioGroup>
                  <Stack>
                    <Radio gap="20px" colorScheme="pink" value="high">
                      Price: High To Low
                    </Radio>
                    <Radio gap="20px" colorScheme="pink" value="low">
                      Price: Low To High
                    </Radio>
                    <Radio gap="20px" colorScheme="pink" value="best">
                      Popularity: Bestsellers
                    </Radio>
                  </Stack>
                </RadioGroup>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box bg="white" borderRadius="15px" p="2%" mt="8%">
            <Text p="8% 5%" fontWeight="700">
              Filters
            </Text>
            <Accordion allowToggle border="transparent">
              <FilterOption optionData={optionFilter}/>
            </Accordion>
          </Box>
        </Box>
        <Grid w="70%"  templateColumns="repeat(3, 1fr)" gap={6} textAlign="center">
            {products.length >0 && products.map((product, i)=><ProductCard productImage={product.image} productName={product.title} productVariety={`${product.shades.length} Shades`} productPrice={product.price} discountPrice={product.discountPrice}/>)}
        </Grid>
      </Flex>
      <Footer />
    </>
  );
};

export default AllProducts;