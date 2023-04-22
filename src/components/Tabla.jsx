import styles from "../styles/Tabla.module.css";

const Tabla = () => {
    return (
        <div className={styles.container}>
            <h1>Ingresos</h1>
            <div>
                <h2>Nombre</h2>
                <h2>Peridiocidad</h2>
                <h2>Tipo de Gasto</h2>
                <h2>Valor</h2>
            </div>
        </div>
    )
}

export default Tabla;
