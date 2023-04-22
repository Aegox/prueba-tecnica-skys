import Home from "./components/Home.jsx";
import Gastos from "./components/Gastos.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/gastos" element={<Gastos/>}/>
          </Routes>
      </BrowserRouter>
    
  )
}

export default App;
