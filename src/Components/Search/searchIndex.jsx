import styles from "./Search.module.css"

import { useEffect, useState } from "react"
import { Category } from "../Category/categoryIndex"
import { Container } from "../Container/containerIndex"
import { Loader } from "../Loader/loaderIndex"
import { SwiperSlide } from "swiper/react"
import { MyCarousel } from "../Carousel/carouselIndex"

export function Search({ videos }) {
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 200)
    }, [])

    function filterVideoSearch() {
        const vd = videos.filter(({ category }) => category.toLowerCase().includes(search.toLowerCase()))
        const vdUnique = Array.from(new Set(vd.map(({ category }) => category)))
        return vdUnique
    }

    return (
        <div className={styles.search}>
            <input type="search"
                placeholder="Pesquise uma categoria"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {loading ? <Loader /> :
                <Container>
                    {filterVideoSearch().map((index) => <Category categoria={index} key={index} />)}
                </Container>
            }
        </div>
    )
}