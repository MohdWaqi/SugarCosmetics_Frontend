import React from "react";
import Navbar from "../Components/Navbar";
import { Box, Button, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import carouselImg1 from "../assets/1.jpg";
import carouselImg2 from "../assets/2.jpg";
import carouselImg3 from "../assets/3.gif";
import carouselImg4 from "../assets/4.jpg";
import carouselImg5 from "../assets/5.jpg";
import carouselImg6 from "../assets/6.jpg";
import carouselImg7 from "../assets/7.jpg";
import carouselImg8 from "../assets/8.jpg";
import clubIcon from "../assets/10009.svg";
import background from "../assets/10046.png";
import BannerCarousel from "../Components/BannerCarousel";
import CustomHeading from "../Components/CustomHeading";
import background2 from "../assets/10047.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import img1 from "../assets/10029.jpg"
import priceIcon from "../assets/10013.svg"
import like from "../assets/10014.svg"
import bestSellerIcon from "../assets/10015.svg"
import ProductCard from "../Components/ProductCard";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box bg="#F3F3F3" w="100vw" pt="17vh">
        <BannerCarousel
          imageList={[
            carouselImg1,
            carouselImg2,
            carouselImg3,
            carouselImg4,
            carouselImg5,
            carouselImg6,
            carouselImg7,
            carouselImg8,
          ]}
        />
        <Box>
          <CustomHeading title="CLUB VELLVETTE" black={false} />
          <Box
            w="95%"
            backgroundImage={`url(${background})`}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            p="0.5%"
            px="5%"
            borderRadius="10px"
            margin="auto"
            mt="2%"
          >
            <Flex gap="10%">
              <Image w="22%" src={clubIcon} />
              <Box color="white" fontSize="1.8rem" fontWeight="600" p="3%">
                <Text fontSize="2.5rem" fontWeight="700">
                  Buy @ ₹299 for 6 months
                </Text>
                <Text fontSize="2.3rem">Save 20% EXTRA + FREE Shipping</Text>
                <Text color="#FF008B">JOIN NOW</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box backgroundImage={`url(${background2})`} my="5%" py="3%" gap="2%">
            <CustomHeading title="BESTSELLERS" black={true} />
            <Carousel
          transitionTime={1}
          infiniteLoop
          showArrows={true}
          showIndicators={false}
          showStatus={false}
          stopOnHover={true}
          
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
                <div>

              <div
                style={{
                  position: "absolute",
                  zIndex: "1",
                  display: "flex",
                  color: "white",
                  width: "40px",
                  height: "40px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "90px",
                  top: "40%",
                  left: "4%",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  cursor: "pointer",
                }}
                onClick={clickHandler}
              >
                <ArrowLeftIcon />
              </div>
                </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
                <div>

              <div
                style={{
                  position: "absolute",
                  zIndex: "1",
                  display: "flex",
                  color: "white",
                  width: "40px",
                  height: "40px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "90px",
                  top: "40%",
                  right: "4%",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  cursor: "pointer",
                }}
                onClick={clickHandler}
              >
                <ArrowRightIcon />
              </div>
                </div>
            );
          }}
        >
          <Box>
          <Flex w="80%" m="auto" gap="2%">
            <ProductCard productImage={img1} productName="La La Love 18HR Liquid Lipstick - Set of 3" productVariety="3 shades" productPrice="799" discountPrice="639" />
            <ProductCard productImage={img1} productName="La La Love 18HR Liquid Lipstick - Set of 3" productVariety="3 shades" productPrice="799" discountPrice="639" />
            <ProductCard productImage={img1} productName="La La Love 18HR Liquid Lipstick - Set of 3" productVariety="3 shades" productPrice="799" discountPrice="639" />
            <ProductCard productImage={img1} productName="La La Love 18HR Liquid Lipstick - Set of 3" productVariety="3 shades" productPrice="799" discountPrice="639" />
          </Flex>
          </Box>
        </Carousel>
        </Box>
      </Box>
    </>
  );
};

export default Home;
