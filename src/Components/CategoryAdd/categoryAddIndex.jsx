import styles from "./CategoryAdd.module.css"

import { MyCarousel } from "../Carousel/carouselIndex"
import { CardAdd } from "../CardAdd/cardAddIndex"

export function CategoryAdd({ categoria }) {
    var videosLocal = JSON.parse(localStorage.getItem('videos'))

    function filterCategory(idCat) {
        return videosLocal.filter(({ category }) => category === idCat)
    }

    return (
        <div className={styles.category}>
            <h1>{categoria}</h1>
            <section className={styles.cards}>
                {/* <MyCarousel> */}
                {filterCategory(categoria).map(({ id }) => <CardAdd id={id} />)}
                {/* </MyCarousel>  */}
            </section>
        </div>
    )
}