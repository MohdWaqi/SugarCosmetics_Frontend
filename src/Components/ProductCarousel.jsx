import React, { useState } from 'react'
import CustomHeading from './CustomHeading';
import { Box, Flex } from '@chakra-ui/react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import ProductCard from './ProductCard';
import background2 from "../assets/10047.jpeg";

const ProductCarousel = ({dark, products, best }) => {
    const [hover, setHover] = useState(false)
  return (
    <Box backgroundImage={dark &&`url(${background2})`} bg={!dark&&"#FBFBFB"} py="3%" gap="2%" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
          <CustomHeading title={products?.name} black={dark} />
          <Carousel
            transitionTime={1}
            infiniteLoop
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            stopOnHover={true}
            showThumbs={true}
            renderArrowPrev={(clickHandler, hasPrev) => {
              return (
                <div>
                  {hover && <div
                    style={{
                      position: "absolute",
                      zIndex: "1",
                      display: "flex",
                      color: dark?"#FF008B":"white",
                      width: "40px",
                      height: "40px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "90px",
                      top: "40%",
                      left: "4%",
                      backgroundColor: dark?"white":"rgba(0,0,0,0.5)",
                      cursor: "pointer",
                  
                    }}
                    onClick={clickHandler}
                  >
                    <ArrowLeftIcon />
                  </div>}
                </div>
              );
            }}
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                <div>
                  {hover && <div
                    style={{
                      position: "absolute",
                      zIndex: "1",
                      display: "flex",
                      color: dark?"#FF008B":"white",
                      width: "40px",
                      height: "40px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "90px",
                      top: "40%",
                      right: "4%",
                      backgroundColor: dark?"white":"rgba(0,0,0,0.5)",
                      cursor: "pointer",
                    }}
                    onClick={clickHandler}
                  >
                    <ArrowRightIcon />
                  </div>}
                </div>
              );
            }}
          >
            {products?.data.map((bunch, index)=><Box key={index}>
              <Flex w="80%" m="auto" gap="2%">
                {bunch.map((details, index)=><ProductCard
                  key={index}
                  productImage={details.image}
                  productName={details.title}
                  productVariety={`${details.shades.length} shades`}
                  productPrice={details.price}
                  discountPrice={details.discountPrice}
                  best={best}
                  fullProduct={details}
                />)}
  
              </Flex>
            </Box>)}
          </Carousel>
        </Box>
  )
}

export default ProductCarousel