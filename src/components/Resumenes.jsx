import Resumen from "./Resumen.jsx";
import Tabla from "./Tabla.jsx";
import styles from "../styles/Resumenes.module.css";
import {getResumen, getResumenTabla} from "../firebase/firebase_controllers.js";
import {useEffect, useState} from "react";


const Resumenes = () => {
    const [resumen, setResumen] = useState();
    const [tabla, setTabla] = useState();

    useEffect(() => {
        const getData = async () => {
            const result = await getResumen();
            setResumen(result)
        }
        getData()
    },[])
    
    const handleTabla = (name) => {
        const getTabla = async () => {
            const result = await getResumenTabla(name);
            setTabla({
                result,
                name
            })
        }
        getTabla()
    }

    if (!resumen) {
        return (
            <div>Cargando...</div>
        )
    }
    /*El handleTabla llama a las colecciones de datos para proporcionarcelos al componente Tabla, solo si se activa
    el evento onClick le pasa a la funcion el name que referencia a la coleccion y en algun componente resumen para traer su informacion correspondiente para llenar las tablas*/
    return (
        <div>
            <div className={styles.container}>
                <Resumen name={"Ingresos"} valor={resumen.totalDeIngresos} handle={handleTabla}/> 
                <Resumen name={"Gastos"} valor={resumen.totalDeGastos} handle={handleTabla}/> 
                <Resumen name={"Obligaciones Pagadas"} valor={resumen.totalObligacionesPagadas}/>  
            </div>
            {tabla ? <Tabla data={tabla}/> : false}
        </div>
    )
}

export default Resumenes;
