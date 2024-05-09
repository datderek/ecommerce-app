import { useEffect, useState } from "react";
import ProductsList from '../components/ProductsList';
 
 function Store() {
  const [productList, setProductList] = useState([]);

  // Queries API for items on mount
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://fakestoreapi.com/products', { signal })
      .then(res => res.json())
      .then(json => setProductList(json));

    return () => { 
      controller.abort()
    }
  }, []);

  return (
    <>
      <h1>Store Page</h1>
      <ProductsList products={productList} />
    </>
  )
}

export default Store;