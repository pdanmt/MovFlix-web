import styles from "./Card.module.css"

import { Link } from "react-router-dom"
import { useFavoriteContext } from "../contexts/Favorites"

export function Card({ id }) {
    const { favorite, addFavorite } = useFavoriteContext()
    const isFav = favorite.some((fav) => fav.id === id)
    const icon = isFav ? "star_rate_half" : "star"

    return (
        <div className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="" />
            </Link>
            <span className="material-symbols-outlined" onClick={() => addFavorite({id})}>{icon}</span>
        </div>
    )
}