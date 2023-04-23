import styles from "../styles/Resumen.module.css";

const Resumen = ({name, valor, handle}) => {
    return (
        <div onClick={() => handle(name.toLowerCase())} className={styles.container}>
            <h2>{name}</h2>
            <h1>${new Intl.NumberFormat().format(valor)}</h1>
            <h3>Total Actual</h3>
        </div>
    )
}

export default Resumen;
