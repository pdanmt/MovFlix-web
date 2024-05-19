import styles from "./Home.module.css"
import videos from "../../json/videos.json"

import { Header } from "../../Components/Header/headerIndex"
import { Banner } from "../../Components/Banner/bannerIndex"
import { Footer } from "../../Components/Footer/footerIndex"
import { Search } from "../../Components/Search/searchIndex"

export function Home() {
    return (
        <>
            <Header />
            <Banner image={"home"} />
            <Search videos={videos}/>
            <Footer />
        </>
    )
}