import styles from "../styles/Fechas.module.css";

const InputFecha = ({ id, label, min, max}) => {
  return (
    <div className={styles.fecha}>
      <label htmlFor={id}>{label}</label>
      <input type="date" id={id} min={min} max={max}  />
        <i class="fa-solid fa-angle-down"></i>   </div>
  );
};

const Fechas = () => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const minDate = "2023-04-19";
  
  return (
    <div className={styles.container}>
      <InputFecha
        id="inicio"
        label="Fecha Inicio"
        min={minDate}
      
      />
      <InputFecha
        id="final"
        label="Fecha Fin"
        max={currentDate}
      />
    </div>
  );
};

export default Fechas;
