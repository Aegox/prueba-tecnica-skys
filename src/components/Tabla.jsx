import styles from "../styles/Tabla.module.css";

//Parseo los datos y propiedades con fines esteticos ya que vienen en lowercase los strings//
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

//Obtengo las propiedades para darle los nombres de las columnas a la tabla//
const getColumns = (result) => {
  const obj = orderData(result[0])
  return Object.keys(obj);
};

//Parseo el timestamp que viene como objeto en los datos para convertirlos en un formato de fecha que pueda mostrar en al tabla//
const parseDate = (valor) => {
    const {seconds, nanoseconds} = valor;
    const fireBaseTime = new Date(
      seconds * 1000 + nanoseconds / 1000000,
    );
    return fireBaseTime.toDateString().slice(3);
}

//Firebase me trae los datos desordenados, por lo que a la hora de pasar los datos en la tabla quedan incongruentes con los nombre de las columnas, asi que los ordeno//
const orderData = (obj) => {
    const orderedKeys = Object.keys(obj).sort();
    const orderedObj = {};
    
    orderedKeys.forEach((key) => {
        orderedObj[key] = obj[key];
    });
    
    return orderedObj;
}

//Aca obtengo los datos para en las tablas para mostrarlos//
const ValoresTabla = ({ datosTabla }) => {
  const valores = Object.values(datosTabla);
  return (
    <div className={styles.datosTabla}>
      {valores.map((valor) => (
          //identifico el timestamp para parsearlo como datetime con la funcion antes creada//
        <h2>{typeof valor === 'object' ? parseDate(valor) : valor}</h2>
      ))}
    </div>
  );
}

const Tabla = ({ data }) => {
  const { name, result } = data;
  const columnas = getColumns(result);
  //Destructuro de la informacion incluyendo el name de la tabla ya que no lo puedos obtener directamente de la data//
  return (
    <div className={styles.container}>
      <h1>{capitalize(name)}</h1>
        <div className={styles.tabla}>
            <div className={styles.columna}>
                {columnas.map((columna) => (
                    <h2>{capitalize(columna)}</h2>
                ))}
            </div>
            {result.map((datosTabla) => (
            <ValoresTabla datosTabla={orderData(datosTabla)} />
            ))}
        </div>
    </div>
  );
};

export default Tabla;
