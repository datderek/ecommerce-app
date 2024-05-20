import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ProductsList from "../components/ProductsList";
import FilterPanel from "../components/FilterPanel";
import styles from './Store.module.css';

function Store() {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useOutletContext();

  // Queries API for items on mount
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://fake-coffee-api.vercel.app/api", { signal })
      .then((res) => res.json())
      .then((json) => setProductList(json));

    return () => {
      controller.abort();
    };
  }, []);

  const addHandler = (product) => {
    const newCart = [...cart];
    newCart.push(product);
    setCart(newCart);
  };

  const removeHandler = (product) => {
    const cartCopy = [...cart];
    const newCart = cartCopy.filter(
      (oldProduct) => oldProduct.id !== product.id
    );

    setCart(newCart);
  };

  const updateHandler = (product) => {
    const newCart = cart.map((oldProduct) => {
      if (product.id === oldProduct.id) {
        return product;
      }

      return oldProduct;
    });

    setCart(newCart);
  };

  return (
    <>
      <h1>Store Page</h1>
      <main>
        <FilterPanel />
        <ProductsList
          products={productList}
          handlers={{ addHandler, removeHandler, updateHandler }}
        />
      </main>
    </>
  );
}

export default Store;
