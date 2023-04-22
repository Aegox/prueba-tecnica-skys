import styles from "../styles/Tabla.module.css";

const Tabla = () => {
    return (
        <section className={styles.container}>
            <h1>Ingresos</h1>
            <div className={styles.secondContainer}>
                <h2>Nombre</h2>
                <h2>Peridiocidad</h2>
                <h2>Gasto</h2>
                <h2>Valor</h2>
            </div>
        </section>
    )
}

export default Tabla;
