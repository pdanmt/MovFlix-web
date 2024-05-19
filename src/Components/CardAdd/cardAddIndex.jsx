import styles from "./CardAdd.module.css"

import { Link } from "react-router-dom"
import { useFavoriteContext } from "../contexts/Favorites"

export function CardAdd({ id, idDel }) {
    const { favorite, addFavorite } = useFavoriteContext()
    const isFav = favorite.some((fav) => fav.id === id)
    const icon = isFav ? "star_rate_half" : "star"

    function deleteVideo() {
        const videoStorage = JSON.parse(localStorage.getItem('videos'))
        let videoToRemove = videoStorage.findIndex((video) => video.id === id)
        if (videoToRemove != -1) {
            videoStorage.splice(videoToRemove, 1)
            localStorage.setItem('videos', JSON.stringify(videoStorage))
        }
    }

    return (
        <div className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt=""/>
            </Link>
            <span className="material-symbols-outlined" id={styles.spanStar}  onClick={() => addFavorite({ id })} >{icon}</span>
            <span className="material-symbols-outlined" id={styles.spanTrash} onClick={deleteVideo}>delete</span>
        </div>
    )
}