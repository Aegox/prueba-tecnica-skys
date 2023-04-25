import Home from "./components/Home.jsx";
import GestionDeGastos from "./components/GestionDeGastos.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/gastos" element={<GestionDeGastos/>}/>
          </Routes>
      </BrowserRouter>
    
  )
}

export default App;
