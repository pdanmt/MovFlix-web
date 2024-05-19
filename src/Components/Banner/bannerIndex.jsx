import styles from "./Banner.module.css"

export function Banner({image}) {
    return (
        <img src={require(`../../images/banner-${image}.png`)} alt="banner image" />
    )
}