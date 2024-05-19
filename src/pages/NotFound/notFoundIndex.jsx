import styles from "./NotFound.module.css"
import notFoundImg from "./notFoundImg.jpg"

import { Header } from "../../Components/Header/headerIndex"
import { Container } from "../../Components/Container/containerIndex"
import { Footer } from "../../Components/Footer/footerIndex"

export function NotFound() {
    return (
        <>
            <Header />
            <Container>
                <h1 id={styles.h1}>Ops... Página não encontrada!</h1>
                <img src={notFoundImg} alt="not found page image" id={styles.img}/>
            </Container>
            <Footer />
        </>
    )
}