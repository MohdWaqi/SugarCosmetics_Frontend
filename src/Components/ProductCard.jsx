import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import priceIcon from "../assets/10013.svg";
import like from "../assets/10014.svg";
import bestSellerIcon from "../assets/10015.svg";
import { useNavigate } from "react-router-dom";
import liked from "../assets/getLiked.svg";
import CustomToast from "./CustomToast";
import { AuthContext } from "../Context/AuthContextProvider";
import { addWishedItems, deleteWishedItems } from "../services/Api";

const ProductCard = ({
  productImage,
  productName,
  productVariety,
  productPrice,
  discountPrice,
  best,
  fullProduct,
}) => {
  const toast = useToast();
  const { isAuth } = useContext(AuthContext);
  const [likeProduct, setLikeProduct] = useState(
    isAuth?.accessToken ? fullProduct.like : false
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const handleWishlist = async () => {
    try {
      const config = {
        Authorization: `Bearer ${isAuth.accessToken}`,
        "Content-Type": "application/json",
      };
      if (!likeProduct) {
        await addWishedItems({ id: fullProduct._id }, config);
        toast({
          position: "bottom-left",
          render: () => <CustomToast message="Added to Wishlist" />,
        });
      } else {
        await deleteWishedItems(fullProduct._id, config);
        toast({
          position: "bottom-left",
          render: () => <CustomToast message="Removed from Wishlist" />,
        });
      }
      setLikeProduct(!likeProduct);
    } catch (error) {
      console.log(error);
    }
  };
  const handleBag = () => {
    if (localStorage.getItem("bagItem") === null) {
      localStorage.setItem(
        "bagItem",
        JSON.stringify([{ ...fullProduct, quantity: 1 }])
      );
    } else {
      const bagData = JSON.parse(localStorage.getItem("bagItem"));

      const existingItemIndex = bagData.findIndex(
        (data) => data._id == fullProduct._id
      );
      if (existingItemIndex !== -1) {
        bagData[existingItemIndex].quantity += 1;
      } else {
        bagData.push({ ...fullProduct, quantity: 1 });
      }
      localStorage.setItem("bagItem", JSON.stringify(bagData));
    }
    toast({
      position: "bottom-left",
      render: () => <CustomToast message="Item Added Successfully" />,
    });
  };
  return (
    <Box
      position="relative"
      bg="white"
      w="90%"
      borderRadius="10px"
      cursor="pointer"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      {best && (
        <Image position="absolute" className="tag" src={bestSellerIcon} />
      )}
      <Image
        onClick={() => navigate(`/products/${fullProduct._id}`)}
        className="carouselImg"
        h="200px"
        m="auto"
        borderRadius="10px"
        pt="1%"
        src={productImage}
      />
      <Text
        onClick={() => navigate(`/products/${fullProduct._id}`)}
        px="15%"
        fontSize={"0.85rem"}
      >
        {productName}
      </Text>
      <Text
        onClick={() => navigate(`/products/${fullProduct._id}`)}
        px="15%"
        color="gray"
      >
        {productVariety}
      </Text>
      <Text
        onClick={() => navigate(`/products/${fullProduct._id}`)}
        px="15%"
        fontSize="1.2rem"
        fontWeight="700"
      >
        ₹{productPrice}
      </Text>
      <Flex alignItems="center" justifyContent="center">
        <Image className="priceImg" src={priceIcon} />
        <Text ml="2%" fontSize="0.85rem">
          ₹{discountPrice}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" p="5%">
        <Image
          onClick={isAuth?.accessToken ? handleWishlist : onOpen}
          className="priceImg"
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
          p="7% 15%"
          _hover={{ backgroundColor: "black" }}
          onClick={handleBag}
        >
          ADD TO BAG
        </Button>
      </Flex>
    </Box>
  );
};

export default ProductCard;
