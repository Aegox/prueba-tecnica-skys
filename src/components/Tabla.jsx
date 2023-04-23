import styles from "../styles/Tabla.module.css";

const Tabla = ({data}) => {
    return (
        <section className={styles.container}>
            <h1>{data.name}</h1>
            <div className={styles.secondContainer}>
                {Object.keys(data.result[0]).map(item => {
                    return (
                    <h2>{item}</h2>
                    )
                })}
            </div>
        </section>
    )
}

export default Tabla;
