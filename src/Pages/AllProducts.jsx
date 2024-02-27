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
import optionFilter from "../assets/filters.json";
import ProductCard from "../Components/ProductCard";
import { allProducts } from "../services/Api";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await allProducts();
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

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
              <FilterOption optionData={optionFilter} />
            </Accordion>
          </Box>
        </Box>
        <Grid
          w="70%"
          templateColumns="repeat(3, 1fr)"
          gap={6}
          textAlign="center"
        >
          {products.length > 0 &&
            products.map((product, i) => (
              <ProductCard
                key={product._id}
                productImage={product.image}
                productName={product.title}
                productVariety={`${product.shades.length} Shades`}
                productId={product._id}
                productPrice={product.price}
                discountPrice={product.discountPrice}
                fullProduct={product}
              />
            ))}
        </Grid>
      </Flex>
      <Footer />
    </>
  );
};

export default AllProducts;
