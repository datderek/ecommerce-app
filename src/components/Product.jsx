import { useState } from "react";
import styles from "./Product.module.css";

function Product({ product, addHandler }) {
  const [isAdding, setIsAdding] = useState(false);
  const [count, setCount] = useState('1');

  return (
    <li className={styles['product-container']}>
      <div className={styles['image-container']}>
        <img src={product.image_url} alt={product.name} />
      </div>
      <div className={styles['details-container']}>
        <div className={styles['flavor-container']}>
          {product.flavor_profile?.map(flavor => <p>{flavor}</p>)}
        </div>
        <p>{product.region}</p>
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        {!isAdding ? (
          <button
            onClick={() => {
              setCount('1');
              setIsAdding(true);
            }}
          >
            Add
          </button>
        ) : (
          <>
            <label>
              Amount:
              <input
                type="number"
                min="1"
                defaultValue={1}
                onChange={(e) => setCount(e.target.value)}
              />
            </label>
            <button onClick={() => {
                addHandler({ ...product, count });
                setIsAdding(false);
              }}
            >
              Add to Cart
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default Product;
