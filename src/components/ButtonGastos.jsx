import {useNavigate} from "react-router-dom";
import styles from "../styles/buttonGastos.module.css"

const ButtonGastos = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/gastos")
    }
    return (
        <>
            <button className={styles.button} onClick={() => handleNavigate()}>Gestionar Gastor Fijos</button>
        </>
    )
}

export default ButtonGastos;
