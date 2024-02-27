import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import empty from "../assets/emptyBag.svg";
import ProductCarousel from "../Components/ProductCarousel";

import saveImage from "../assets/save.gif";
import BagCard from "../Components/BagCard";
import { useNavigate } from "react-router-dom";
import { homePageData } from "../services/Api";

const Bag = () => {
  const [adData, setAdData] = useState({});
  const [bagItems, setBagItems] = useState([]);
  const [emptyBag, setEmptyBag] = useState(false);
  const ad = async () => {
    try {
      const response = await homePageData();
      setAdData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    ad();
  }, []);
  useEffect(() => {
    const storedItems = localStorage.getItem("bagItem");
    if (storedItems) {
      setBagItems(JSON.parse(storedItems));
      if (bagItems.length == 0) {
        setEmptyBag(true);
      } else {
        setEmptyBag(false);
      }
    } else if (!storedItems) {
      setEmptyBag(true);
    }
  }, [emptyBag]);
  const calculateTotalPrice = () => {
    return bagItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const calculateDiscountedPrice = () => {
    return bagItems.reduce(
      (total, item) => total + item.discountPrice * item.quantity,
      0
    );
  };

  const removeFromBag = (productId) => {
    const updatedItems = bagItems.filter((item) => item._id !== productId);
    setBagItems(updatedItems);
    localStorage.setItem("bagItem", JSON.stringify(updatedItems));
    if (bagItems.length == 1) {
      setEmptyBag(true);
    }
  };

  const increaseQuantity = (productId) => {
    const existingItemIndex = bagItems.findIndex(
      (item) => item._id === productId
    );
    if (existingItemIndex !== -1) {
      const updatedItems = [...bagItems];
      updatedItems[existingItemIndex].quantity = Math.min(
        updatedItems[existingItemIndex].quantity + 1,
        5
      );
      setBagItems(updatedItems);
      localStorage.setItem("bagItem", JSON.stringify(updatedItems));
    }
  };

  const decreaseQuantity = (productId) => {
    const existingItemIndex = bagItems.findIndex(
      (item) => item._id === productId
    );
    if (existingItemIndex !== -1) {
      const updatedItems = [...bagItems];
      if (updatedItems[existingItemIndex].quantity > 1) {
        updatedItems[existingItemIndex].quantity -= 1;
      } else {
        updatedItems.splice(existingItemIndex, 1);
        if (bagItems.length == 1) {
          setEmptyBag(true);
        }
      }
      setBagItems(updatedItems);
      localStorage.setItem("bagItem", JSON.stringify(updatedItems));
    }
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
          {emptyBag ? (
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
              <Button
                bg="black"
                color="white"
                p="8% 10%"
                my="4%"
                _hover={{}}
                _active={{}}
                onClick={() => navigate("/")}
              >
                SHOP NOW
              </Button>
            </Box>
          ) : (
            <>
              <Box w="50%" p="1.5%">
                <Heading size="md" mb="2%">
                  BAG SUMMARY
                </Heading>
                <Box border="1px solid #BFBBBB" p="1% 2%" borderRadius="15px">
                  {bagItems.length > 0 &&
                    bagItems.map((item, index) => (
                      <BagCard
                        key={index}
                        photo={item.image}
                        name={item.title}
                        discount={item.discountPrice}
                        sellPrice={item.price}
                        quantity={item.quantity}
                        id={item._id}
                        increaseQuantity={() => increaseQuantity(item._id)}
                        decreaseQuantity={() => decreaseQuantity(item._id)}
                        deleteProductFromBag={() => removeFromBag(item._id)}
                      />
                    ))}
                </Box>
              </Box>
              <Box flex={1} p="1.5%">
                <Flex
                  border="1px solid pink"
                  bg="linear-gradient(to right ,pink, white)"
                  alignItems="center"
                  p="1% 3%"
                  justifyContent="space-between"
                  borderRadius="10px"
                >
                  <Heading fontSize="1rem">
                    ₹
                    {(
                      calculateTotalPrice() - calculateDiscountedPrice()
                    ).toFixed(2)}{" "}
                    total savings
                  </Heading>
                  <Image w="7%" src={saveImage} />
                </Flex>
                <Box>
                  <Heading size="md" py="2%">
                    PRICE DETAILS
                  </Heading>
                  <Box border="1px solid #BFBBBB" p="2%" borderRadius="15px">
                    <Flex mb="1%">
                      <Heading color="gray" flex={1} size="xs">
                        Item(s) Total{" "}
                        <Text as="i" fontSize="0.8rem">
                          (Inclusive of taxes)
                        </Text>
                      </Heading>
                      <Heading color="gray" w="30%" size="xs" textAlign="right">
                        ₹{calculateTotalPrice().toFixed(2)}
                      </Heading>
                    </Flex>
                    <Flex mb="1%">
                      <Heading color="gray" flex={1} size="xs">
                        Savings
                      </Heading>
                      <Heading
                        color="green"
                        w="30%"
                        size="xs"
                        textAlign="right"
                      >
                        -₹
                        {(
                          calculateTotalPrice() - calculateDiscountedPrice()
                        ).toFixed(2)}
                      </Heading>
                    </Flex>
                    <Flex mb="3%">
                      <Heading color="gray" flex={1} size="xs">
                        Standard Shipping
                      </Heading>
                      <Heading
                        color="green"
                        w="30%"
                        size="xs"
                        textAlign="right"
                      >
                        Free
                      </Heading>
                    </Flex>
                    <Flex
                      py="2%"
                      borderTop="1px solid gray"
                      borderStyle="dashed"
                    >
                      <Heading flex={1} size="md">
                        Order Total
                      </Heading>
                      <Heading w="30%" size="md" textAlign="right">
                        ₹{calculateDiscountedPrice()}
                      </Heading>
                    </Flex>
                  </Box>

                  <Flex justifyContent="flex-end" mt="5%">
                    <Button
                      bg="black"
                      color="white"
                      fontSize="1.2rem"
                      p="3.5% 10%"
                      _hover={{}}
                      _active={{}}
                    >
                      ₹{calculateDiscountedPrice()} PLACE ORDER
                    </Button>
                  </Flex>
                </Box>
              </Box>
            </>
          )}
        </Flex>
        {emptyBag && (
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
