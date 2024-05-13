import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import LaptopDetail from "./pages/LaptopDetail"

function App() {
  return (
    <div className=" bg-slate-200 min-h-[100vh]">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/laptops/:category" element={<LaptopDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
