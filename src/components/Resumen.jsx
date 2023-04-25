import styles from "../styles/Resumen.module.css";

const Resumen = ({name, valor, handle}) => {
    return (
        /*Aca evito que el resumen de Obligaciones pagadas se le pase la prop de handle 
        function para que no tire error al presionarlo.
        Y el NumberFormat parsea las cifras para que se dividan por puntos en las centenas.
        */
        <div onClick={() => name == "Obligaciones Pagadas" ? false : handle(name.toLowerCase())} className={styles.container}>
            <h2>{name}</h2>
            <h1>${new Intl.NumberFormat().format(valor)}</h1>
            <h3>Total Actual</h3>
        </div>
    )
}

export default Resumen;
