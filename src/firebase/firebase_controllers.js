import db from "./firebase_config.js";
import { collection, getDocs, getDoc, doc} from "firebase/firestore";

const getResumen = async () => {
    const docRef = doc(db, "modulo-contabilidad", "resumen");
    const docSnap = await getDoc(docRef);
    return docSnap.data()
}

const getResumenTabla = async (name) => {
    try {
        const response = [];
        const docRef =  collection(doc(db , `modulo-contabilidad/resumen-de-${name}`), `${name}-registrado`);
        const docSnap = await getDocs(docRef)
        docSnap.forEach(data => response.push(data.data()))
        return response;
    } catch(error) {
        console.log(error)
    }
}

export {getResumen , getResumenTabla};

