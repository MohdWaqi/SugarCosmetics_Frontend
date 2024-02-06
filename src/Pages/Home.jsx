import React from 'react'
import Navbar from '../Components/Navbar'
import { Box, Image } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselImg1 from "../assets/1.jpg"
import carouselImg2 from "../assets/2.jpg"
import carouselImg3 from "../assets/3.gif"
import carouselImg4 from "../assets/4.jpg"
import carouselImg5 from "../assets/5.jpg"
import carouselImg6 from "../assets/6.jpg"
import carouselImg7 from "../assets/7.jpg"
import carouselImg8 from "../assets/8.jpg"
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Box bg="#F3F3F3" w="100vw" pt="17vh">
    <Carousel
        autoPlay={true}
        interval={4000}
        infiniteLoop
        showArrows={true}
        showIndicators={true}
        showStatus={false}
        stopOnHover={true}
        dynamicHeight={true}
        renderArrowPrev={(clickHandler, hasPrev) => {
    return (
      <div
      style={{position: 'absolute',zIndex:"1",display:"flex" ,color:"white", width:"40px", height:"40px", justifyContent:"center",alignItems:"center", borderRadius:"90px", top:"40%", left:"4%", backgroundColor:"rgba(0,0,0,0.5)", cursor: "pointer"}}
        onClick={clickHandler}
      >
        <ArrowLeftIcon/>
      </div>
    );
  }}
  renderArrowNext={(clickHandler, hasNext) => {
    return (
      <div
      style={{position: 'absolute',zIndex:"1",display:"flex" ,color:"white", width:"40px", height:"40px", justifyContent:"center",alignItems:"center", borderRadius:"90px", top:"40%", right:"4%", backgroundColor:"rgba(0,0,0,0.5)", cursor: "pointer"}}
         onClick={clickHandler}
      >
        <ArrowRightIcon/>
      </div>
    );
  }}
      >
        <Box>
          <Image  src={carouselImg1} />
         
        </Box>
        <Box>
          <Image src={carouselImg2} />
        </Box>
        <Box>
          <Image src={carouselImg3} />
        </Box>
        <Box>
          <Image src={carouselImg4} />
        </Box>
        <Box>
          <Image src={carouselImg5} />
        </Box>
        <Box>
          <Image src={carouselImg6} />
        </Box>
        <Box>
          <Image src={carouselImg7} />
        </Box>
        <Box>
          <Image src={carouselImg8} />
        </Box>
        
      </Carousel>
    </Box>
    </>
  )
}

export default Home