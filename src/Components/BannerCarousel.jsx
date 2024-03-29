import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AuthContext } from "../Context/AuthContextProvider";

const BannerCarousel = ({ imageList }) => {
  const {isTablet} = useContext(AuthContext)
  return (
    <Carousel
      autoPlay={true}
      interval={4000}
      infiniteLoop
      showArrows={false}
      showIndicators={true}
      showStatus={false}
      stopOnHover={true}
      dynamicHeight={true}
      renderArrowPrev={(clickHandler) => {
        return (
          !isTablet&&<div
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
        );
      }}
      renderArrowNext={(clickHandler) => {
        return (
          !isTablet&&<div
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
        );
      }}
    >
      {imageList.length &&
        imageList.map((image, i) => (
          <Box key={i}>
            <Image src={image} />
          </Box>
        ))}
    </Carousel>
  );
};

export default BannerCarousel;
