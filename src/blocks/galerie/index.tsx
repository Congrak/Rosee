import { Carousel } from "@/components/carousel"
import styles from "./galerie.module.css"

export const Galerie = () => {
    return (
        <div className={styles.container}>
            <h1>NUESTROS TRABAJOS</h1>
            <Carousel />
        </div>
    )
}