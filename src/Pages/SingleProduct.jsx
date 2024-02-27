import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  Box,
  Button,
  Flex,
  Image,
  Img,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import like from "../assets/10014.svg";
import ProductCarousel from "../Components/ProductCarousel";
import { useParams } from "react-router-dom";
import { getSingleProduct, homePageData } from "../services/Api";
import liked from "../assets/getLiked.svg";
import { AuthContext } from "../Context/AuthContextProvider";
import CustomToast from "../Components/CustomToast";

const SingleProduct = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const toast = useToast();
  const [data, setData] = useState({});
  const [extraAd, setExtraAd] = useState({});
  const { isAuth } = useContext(AuthContext);
  const { id } = useParams();
  const [likeProduct, setLikeProduct] = useState(false);
  const handleWishlist = () => {
    setLikeProduct(!likeProduct);
    if (!likeProduct) {
      toast({
        position: "bottom-left",
        render: () => <CustomToast message="Added to Wishlist" />,
      });
    } else {
      toast({
        position: "bottom-left",
        render: () => <CustomToast message="Removed from Wishlist" />,
      });
    }
  };
  const handleBag = () => {
    if (localStorage.getItem("bagItem") === null) {
      localStorage.setItem(
        "bagItem",
        JSON.stringify([{ ...data, quantity: 1 }])
      );
    } else {
      const bagData = JSON.parse(localStorage.getItem("bagItem"));

      if (bagData.some((data) => data._id == id)) {
        bagData.some((data) => {
          if (data._id == id) {
            data.quantity += 1;
          }
        });
        localStorage.setItem("bagItem", JSON.stringify(bagData));
      } else {
        bagData.push({ ...data, quantity: 1 });
        localStorage.setItem("bagItem", JSON.stringify(bagData));
      }
    }
    toast({
      position: "bottom-left",
      render: () => <CustomToast message="Item Added Successfully" />,
    });
  };
  const getProduct = async (id) => {
    try {
      const response = await getSingleProduct(id);
      setData(response.data);
    } catch (error) {
      console.log("Product not found");
    }
  };

  const extra = async () => {
    try {
      const response = await homePageData();
      setExtraAd(response.data);
    } catch (error) {
      console.log("Something went wrong");
    }
  };
  useEffect(() => {
    getProduct(id);
    extra();
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
                <Image
                  w="60px"
                  onClick={isAuth ? handleWishlist : onOpen}
                  src={likeProduct ? liked : like}
                />
                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                  <ModalOverlay />
                  <ModalContent textAlign="center">
                    <ModalHeader>Please Login to Add to Wishlist</ModalHeader>

                    <Flex justifyContent="center" gap="50px" mb="5%">
                      <Button
                        bg="black"
                        color="white"
                        _hover={{}}
                        _active={{}}
                        onClick={onClose}
                      >
                        CANCEL
                      </Button>
                      <Button
                        bg="black"
                        color="white"
                        _hover={{}}
                        _active={{}}
                        onClick={() => navigate("/login")}
                      >
                        LOGIN
                      </Button>
                    </Flex>
                  </ModalContent>
                </Modal>
                <Button
                  bg="black"
                  color="white"
                  w="40%"
                  ml="5%"
                  h="max-height"
                  _hover={{ backgroundColor: "black" }}
                  onClick={handleBag}
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
        {extraAd.bestSeller && (
          <ProductCarousel
            dark={false}
            products={extraAd.bestSeller}
            best={true}
          />
        )}
        {extraAd.bestSeller && (
          <ProductCarousel dark={false} products={extraAd.justIn} best={true} />
        )}
      </Box>
      <Footer />
    </>
  );
};

export default SingleProduct;
