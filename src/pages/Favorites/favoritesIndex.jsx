import styles from "./Favorites.module.css"

import { Header } from "../../Components/Header/headerIndex"
import { Banner } from "../../Components/Banner/bannerIndex"
import { Container } from "../../Components/Container/containerIndex"
import { Footer } from "../../Components/Footer/footerIndex"
import { useFavoriteContext } from "../../Components/contexts/Favorites"
import { Card } from "../../Components/Card/cardIndex"

export function Favorites() {
    const { favorite } = useFavoriteContext()
    return (
        <>
            <Header />
            <Banner image={"favoritos"} />
            <Container>
                <h1 className={styles.h1Favorites}>Meus favoritos</h1>
                { favorite == "" ? <h3 className={styles.h3Favorites}>Parece que você não tem favoritos...</h3> : "" }
                <div className={styles.divFlex}>
                    {favorite.map(({ id }) => <Card id={id} />)}
                </div>
            </Container>
            <Footer />
        </>
    )
}