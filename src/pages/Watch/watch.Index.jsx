import styles from "./Watch.module.css"
import videos from "../../json/videos.json"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { NotFound } from "../NotFound/notFoundIndex"
import { Header } from "../../Components/Header/headerIndex"
import { Banner } from "../../Components/Banner/bannerIndex"
import { Loader } from "../../Components/Loader/loaderIndex"
import { Container } from "../../Components/Container/containerIndex"
import { Footer } from "../../Components/Footer/footerIndex"

// localStorage.setItem('videos', JSON.stringify([]))

export function Watch() {
    const params = useParams()
    const [loading, setLoading] = useState(true)
    var videoPlay;

    useEffect(() => {
        setTimeout(() => setLoading(false), 750)
    })

    var video = videos.filter(({ id }) => params.id === id ? params.id : false)
    video = video.map(({ id }) => id)

    var videoStorage = JSON.parse(localStorage.getItem('videos'))
    if (videoStorage == null) {
        videoStorage = []
    } else {
        videoStorage = videoStorage.filter(({ id }) => params.id === id ? params.id : false)
        videoStorage = videoStorage.map(({ id }) => id)
    }
    if (video == false && videoStorage == false) {
        return <NotFound />
    } else if (video == false && videoStorage != false) {
        videoPlay = videoStorage
    } else {
        videoPlay = video
    }

    return (
        <div className={styles.watch}>
            <Header />
            <Banner image={"assistir"} />
                <Container>
                    <iframe width="760" height="480" src={`https://www.youtube.com/embed/${videoPlay}?si=zqClUsNOviwgiCjP`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </Container>
            <Footer />
        </div>
    )
}