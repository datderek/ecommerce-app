import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [cart, setCart] = useState([]);
  
  return (
    <>
      <Navbar cart={cart}/>
      <Outlet context={[cart, setCart]}/>
    </>
  )
}

export default App;
