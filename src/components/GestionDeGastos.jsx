import { useState } from "react";
import {useNavigate} from "react-router-dom";
import styles from "../styles/GestionDeGastos.module.css";

const GestionDeGastos = () => {
    const gasto = { 
        id: "",
        nombre: "",
        valor: "", 
        periodicidad: "", 
        fechaPrimerCobro: "", 
        tipoDeGasto: "" 
    }    
    const [gastos, setGastos] = useState([gasto]);
    const navigate = useNavigate();
  

    const addGasto = () => {
        setGastos([...gastos, gasto]);
    };

    const handleGastoChange = (index, field, value) => {
        const newGastos = [...gastos];
        newGastos[index][field] = value;
        setGastos(newGastos);
    };
    

    const deleteGasto = (index) => {
        const newGastos = [...gastos];
        newGastos.splice(index, 1);
        setGastos(newGastos);
    };

  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>Gastos</h1>
            <h3>Ingrese la información en la tabla.</h3>
        </div>
        <div className={styles.tabla}>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Valor</th>
                        <th>Periodicidad</th>
                        <th>Fecha Primer Cobro</th>
                        <th>Tipo de Gasto</th>
                    </tr>
                </thead>
                <tbody>
                    {gastos.map((gasto, index) => (
                        <tr key={index}>
                            <td>
                                <input id={styles.id} type="text" value={gasto.id} onChange={(e) => handleGastoChange(index, "id", e.target.value)} />
                            </td>
                            <td>
                                <input type="text" value={gasto.nombre} onChange={(e) => handleGastoChange(index, "nombre", e.target.value)} />
                            </td>
                            <td>
                                <input type="number" value={gasto.valor} onChange={(e) => handleGastoChange(index, "valor", e.target.value)} />
                            </td>
                            <td>
                                <select value={gasto.periodicidad} onChange={(e) => handleGastoChange(index, "periodicidad", e.target.value)}>
                                    <option value=""></option>
                                    <option value="mensual">Mensual</option>
                                    <option value="2 Meses">2 Meses</option>
                                    <option value="3 Meses">3 Meses</option>
                                    <option value="semestral">Semestral</option>
                                    <option value="anual">Anual</option>
                                </select>
                            </td>
                            <td>
                                <input type="text" value={gasto.fechaPrimerCobro} onChange={(e) => handleGastoChange(index, "fechaPrimerCobro", e.target.value)} />
                            </td>
                            <td>
                                <select value={gasto.tipoDeGasto} onChange={(e) => handleGastoChange(index, "tipoDeGasto", e.target.value)}>
                                    <option value=""></option>
                                    <option value="fijo">Fijo</option>
                                    <option value="variable">Variable</option>
                                </select>
                            </td>
                            <td>
                                <button id={styles.button} onClick={() => deleteGasto(index)}>x</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.button}>
                <button onClick={addGasto}>Agregar Nuevo Item</button>
            </div>
        </div>
        <div id={styles.guardar} className={styles.button}>
            <button onClick={() => navigate("/")}>Guardar</button>
        </div>
    </div>
  );
};

export default GestionDeGastos;

