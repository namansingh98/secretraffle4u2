"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import banner1 from "@/public/banner1.png";
import banner2 from "@/public/banner2.png";
import banner3 from "@/public/banner3.png";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="flex justify-center">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        autoplay
        loop
        
      >
        <SwiperSlide >
          <Image src={banner1} alt="banner-1" className="md:h-5/6 h-fit"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} alt="banner-2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner3} alt="banner-3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
