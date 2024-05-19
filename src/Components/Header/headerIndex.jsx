import styles from "./Header.module.css"

import { Link } from "react-router-dom"

export function Header() {
    return (
        <header className={styles.header}>
            <Link to={"/"}>
                <img src={require("../../images/logo.jpg")} alt="site logo" />
                <h1>Movflix</h1>
            </Link>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/favorites"}>Favoritos</Link>
                <Link to={"/add"}>Adicionar</Link>
            </nav>
        </header>
    )
}