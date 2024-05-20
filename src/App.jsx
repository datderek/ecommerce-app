import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const clickHandler = () => {
    setIsCartVisible(!isCartVisible);
  }

  const itemCount = cart.reduce((totalCount, product) => totalCount + Number(product.count), 0);

  return (
    <>
      <Navbar itemCount={itemCount} handleClick={clickHandler} />
      <Cart cart={cart} isVisible={isCartVisible} setIsVisible={clickHandler}/>
      <Outlet context={[cart, setCart]} />
    </>
  )
}

export default App;
