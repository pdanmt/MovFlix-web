import styles from "./Loader.module.css"

import { Container } from "../Container/containerIndex"

export function Loader() {
    return (
        <Container>
            <div className={styles.loader}>

            </div>
        </Container>
    )
}