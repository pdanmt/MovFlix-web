import styles from "./Footer.module.css"

export function Footer() {
    return (
        <footer className={styles.footer}>
            <h2>Pedro Daniel &copy; todos os direitos reservados {new Date().getFullYear()}</h2>
        </footer>
    )
}