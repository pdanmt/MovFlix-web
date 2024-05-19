import styles from "./Category.module.css"
import videos from "../../json/videos.json"

import { Card } from "../Card/cardIndex"
import { MyCarousel } from "../Carousel/carouselIndex"
import { SwiperSlide } from "swiper/react"

export function Category({ categoria }) {

    function filterCategory(idCat) {
        return videos.filter(({ category }) => category === idCat)
    }

    return (
        <div className={styles.category}>
            <h1>{categoria}</h1>
            <section className={styles.cards}>
                <MyCarousel>                    
                        {filterCategory(categoria).map(({ id }) => <SwiperSlide><Card id={id} /></SwiperSlide>)}                    
                </MyCarousel>
            </section>
        </div>
    )
}