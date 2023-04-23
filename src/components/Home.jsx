import Fechas from "./Fechas.jsx";
import ButtonGastos from "./ButtonGastos.jsx";
import Resumenes from "./Resumenes.jsx";
import styles from "../styles/Home.module.css";
import Tabla from "./Tabla.jsx";

const Home = () => {
    return (
        <div className={styles.allContainer}>
            <section className={styles.container}>
                <Fechas/>
                <ButtonGastos/>
            </section>
            <Resumenes/>
        </div>
    )
}

export default Home;

