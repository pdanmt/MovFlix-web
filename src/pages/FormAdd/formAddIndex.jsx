import styles from "./FormAdd.module.css"
import videos from "../../json/videos.json"

import { useEffect, useState } from "react"
import { Header } from "../../Components/Header/headerIndex"
import { Loader } from "../../Components/Loader/loaderIndex"
import { Container } from "../../Components/Container/containerIndex"
import { CategoryAdd } from "../../Components/CategoryAdd/categoryAddIndex"
import { Footer } from "../../Components/Footer/footerIndex"


const arrayCategorys = videos.map(({ category }) => { return category })
const arrayUniqueCategorys = [...new Set(arrayCategorys)]

if (JSON.parse(localStorage.getItem('videos')) == null || JSON.parse(localStorage.getItem('categorias')) == null) {
    localStorage.setItem('videos', JSON.stringify([]))
    localStorage.setItem('categorias', JSON.stringify(arrayUniqueCategorys))
}

function se() {
    return Array.from(
        new Set([...JSON.parse(localStorage.getItem('videos'))].map(({ category }) => category))
    )
}


export function FormAddVideo() {
    const [url, setURL] = useState('')
    const [category, setCategory] = useState('')
    const [vd, setVd] = useState([])
    const [addCat, setAddCat] = useState(JSON.parse(localStorage.getItem('categorias')))
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 200)
    }, [])

    useEffect(() => {
        const videoStorage = JSON.parse(localStorage.getItem("videos")) || [];
        setVd(videoStorage);
    }, [vd]);

    function onSave(e) {
        var inputURL = document.getElementById("inputURL")
        var inputCat = document.getElementById("inputCat")
        var select = document.getElementById("select")
        e.preventDefault()

        if (inputCat.value == "" && inputURL.value == "" && select.value == "") {
            alert("[ERRO] Preencha ao menos o campo de adicionar categorias.")
        } else {
            if (inputCat.value != "") {
                if (JSON.parse(localStorage.getItem('categorias')).findIndex((index) => index === inputCat.value) != -1) {
                    var getCatStorage = JSON.parse(localStorage.getItem('categorias'))
                    getCatStorage.splice(getCatStorage.indexOf(inputCat))
                    localStorage.setItem('categorias', JSON.stringify(getCatStorage))
                    setAddCat([...new Set(getCatStorage.map((index) => index))])
                } else {
                    localStorage.setItem('categorias', JSON.stringify(
                        [...addCat,
                        document.getElementById("inputCat").value])
                    )
                    setAddCat([...new Set(JSON.parse(localStorage.getItem('categorias')).map((index) => index))])
                }
                inputCat.value = ""
            } else if (inputURL.value == "" || select.value == "") {
                alert("[ERRO] Para adicionar um vídeo escolha uma categoria e digite um link.")
            } else if (inputURL.value != "" && select.value != "") {
                if (url.slice(0, 32) != "https://www.youtube.com/watch?v=" && url.slice(0, 17) != "https://youtu.be/") {
                    alert("[ERRO] link inválido")
                } else if (url.slice(0, 32) == "https://www.youtube.com/watch?v=") {
                    let id = url.slice(32, 43)
                    const newVideo = { id, category }
                    let storage = JSON.parse(localStorage.getItem('videos')).findIndex((video) => video.id === id)
                    if (storage == -1) {
                        setURL(id)
                        setCategory(select.value)
                        setVd([...vd, newVideo])
                        localStorage.setItem('videos', JSON.stringify([...vd, newVideo]))
                        setURL('')
                        select.value = ""
                    } else { alert("[ERRO] Esse vídeo já foi adicionado") }
                } else if (url.slice(0, 17) == "https://youtu.be/") {
                    let id = url.slice(17, 28)
                    const newVideo = { id, category }
                    setURL(id)
                    setCategory(select.value)
                    setVd([...vd, newVideo])
                    localStorage.setItem('videos', JSON.stringify([...vd, newVideo]))
                    setURL('')
                    select.value = ""
                }
            }
        }
    }
    return (
        <>
            <Header />
            <Container>
                <form className={styles.add} onSubmit={onSave}>
                    <input type="text"
                        placeholder="Adicione ou remova uma categoria"
                        id="inputCat"
                        className={styles.inputCat}
                    />
                    <input type="text"
                        placeholder="Cole a url do vídeo do Youtube"
                        id="inputURL"
                        className={styles.inputURL}
                        value={url}
                        onChange={e => setURL(e.target.value)} />
                    <select
                        name="select"
                        id="select"
                        onChange={e => setCategory(e.target.value)}>
                        <option value="">Selecione uma categoria</option>
                        {addCat.map((index) => <option value={index}>{index}</option>)}
                    </select>
                    <button>Enviar</button>
                </form>

                <h1 className={styles.h1Cards}>Seus adicionados:</h1>
                {se().map((index) => <CategoryAdd categoria={index} key={index} />)}
            </Container>
            <Footer />
        </>
    )
}