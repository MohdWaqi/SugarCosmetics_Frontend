import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import "./CategoryCarousel.css"
import { Flex, Img, Text } from '@chakra-ui/react';

const CategoryCarousel = ({categoryData}) => {
  return (
    <Swiper
    freeMode={true}
    modules={[FreeMode]}
    className="mySwiper"
  >
  {categoryData.map((data,index)=><SwiperSlide key={index}>
        <Flex flexDirection="column" justifyContent="center" py="5%" >
            <Img src={data.image}/>
            <Text>{data.name}</Text>
        </Flex>
    </SwiperSlide>)}
  </Swiper>
  )
}

export default CategoryCarousel