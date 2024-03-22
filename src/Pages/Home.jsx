import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import {
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import refer from "../assets/refer.jpg";
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
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductCarousel from "../Components/ProductCarousel";
import Footer from "../Components/Footer";
import { homePageData } from "../services/Api";
import { AuthContext } from "../Context/AuthContextProvider";
import CategoryCarousel from "../Components/CategoryCarousel";
import cat1 from "../assets/cat1.png"
import cat2 from "../assets/cat2.png"
import cat3 from "../assets/cat3.png"
import cat4 from "../assets/cat4.png"
import cat5 from "../assets/cat5.png"
import cat6 from "../assets/cat6.png"
import cat7 from "../assets/cat7.png"
import cat8 from "../assets/cat8.png"
import cat9 from "../assets/cat9.png"
import cat10 from "../assets/cat10.png"
import mobCarousel1 from "../assets/10002.jpg"
import mobCarousel2 from "../assets/10003.gif"
import mobCarousel3 from "../assets/10004.gif"
import mobCarousel4 from "../assets/10005.jpg"
import mobCarousel5 from "../assets/10006.jpg"
import mobCarousel6 from "../assets/10007.gif"
import mobCarousel7 from "../assets/10008.jpg"
import mobCarousel8 from "../assets/10010.jpg"


const Home = () => {
  const [homeData, setHomeData] = useState({});
  const {isTablet} = useContext(AuthContext)
  const getData = async() =>{
    try {
      const response = await homePageData()
      setHomeData(response.data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, []);
  return (
    <>
      <Navbar />
      <Box bg="#F3F3F3" w="100vw" pt={{md:"17vh", base:"14vh"}}>
        {isTablet&&<CategoryCarousel categoryData={
          [
            {
              image: cat1,
              name: "Hot Deals"
            },
            {
              image: cat2,
              name: "SUGAR Play"
            },
            {
              image: cat3,
              name: "Lips"
            },
            {
              image: cat4,
              name: "Face"
            },
            {
              image: cat5,
              name: "Eyes"
            },
            {
              image: cat6,
              name: "Gifting"
            },
            {
              image: cat7,
              name: "Value Sets"
            },
            {
              image: cat8,
              name: "Skincare"
            },
            {
              image: cat9,
              name: "Merch Station"
            },
            {
              image: cat10,
              name: "Celeb Picks"
            },
          ]
        }/>}
        {homeData.bestSeller && (
          <BannerCarousel
            imageList={[
              isTablet?mobCarousel1:carouselImg1,
              isTablet?mobCarousel2:carouselImg2,
              isTablet?mobCarousel3:carouselImg3,
              isTablet?mobCarousel4:carouselImg4,
              isTablet?mobCarousel5:carouselImg5,
              isTablet?mobCarousel6:carouselImg6,
              isTablet?mobCarousel7:carouselImg7,
              isTablet?mobCarousel8:carouselImg8,
            ]}
          />
        )}
        <Box mb="5%">
          <CustomHeading title="CLUB VELLVETTE" black={false} />
          {homeData.bestSeller && (
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
          )}
        </Box>
        <ProductCarousel
          dark={true}
          products={homeData.bestSeller}
          best={true}
        />
        <Box mb="5%">
          <CustomHeading title="REFER YOUR FRIENDS" black={false} />
          <Box w="93%" margin="auto">
            {homeData.bestSeller && <Image borderRadius="10px" src={refer} />}
          </Box>
        </Box>
        <ProductCarousel dark={true} products={homeData.justIn} best={false} />
        <ProductCarousel dark={true} products={homeData.gift} />
        <Box>
          <CustomHeading title="NEWLY LAUNCHED" />
          {homeData.newly && <BannerCarousel imageList={homeData.newly} />}
        </Box>
        <ProductCarousel dark={false} products={homeData.merch} best={false} />
      </Box>
      <Footer/>
    </>
  );
};

export default Home;
