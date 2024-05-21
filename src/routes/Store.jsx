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
    const existingProduct = cart.find((p) => p.id === product.id);
    let updatedCart;

    if (existingProduct) {
      const updatedProduct = { ...existingProduct, count: (Number(existingProduct.count) + Number(product.count)) }

      updatedCart = cart.map((p) => {
        if (p.id === updatedProduct.id) {
          return updatedProduct;
        }

        return p;
      })
    } else {
      updatedCart = [...cart];
      updatedCart.push(product);
    }

    setCart(updatedCart);
  };

  return (
    <main>
      <div className={styles.header}>
        <h1>SHOP</h1>
        <h2>Check out our hand selected coffee beans!</h2>
      </div>
      <div className={styles.content}>
        <FilterPanel />
        <ProductsList products={productList} addHandler={addHandler}
        />
      </div>
    </main>
  );
}

export default Store;
