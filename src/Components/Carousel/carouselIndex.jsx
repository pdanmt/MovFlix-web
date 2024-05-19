import styles from "./Carousel.module.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import React from "react";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Container } from "../Container/containerIndex";

export function MyCarousel({ children }) {
  return (
    <Swiper
      className={styles.swiperContainer}
      modules={[Navigation, Pagination]}
      navigation={true}
      slidesPerView={5}
      loop={true}>
      {children}
    </Swiper>
  )
}