import { createContext, useContext, useState } from "react";


if (JSON.parse(localStorage.getItem('favorites')) == null) {
    localStorage.setItem('favorites', JSON.stringify([]))
}
const FavoritesContext = createContext()
// FavoritesContext.displayName("MyFavorites")

export function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem('favorites')))

    return (
        <FavoritesContext.Provider value={{ favorite, setFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext)

    function addFavorite(newFavorite) {
        const repeatedFav = favorite.some((item) => item.id === newFavorite.id)
        let newList = [...favorite]

        if (!repeatedFav) {
            newList.push(newFavorite)
            localStorage.setItem('favorites', JSON.stringify(newList))
            return setFavorite(newList)
        }
        newList = favorite.filter((fav) => fav.id !== newFavorite.id)
        localStorage.setItem('favorites', JSON.stringify(newList))
        return setFavorite(newList)
    }

    return {
        favorite, addFavorite
    }
}