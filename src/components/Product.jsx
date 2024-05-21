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
        <div className={styles['details-body']}>
          <div className={styles['flavor-container']}>
            {product.flavor_profile?.map(flavor => <p>{flavor}</p>)}
          </div>
          <p className={styles['product-region']}>{product.region}</p>
          <h3 className={styles['product-name']}>{product.name}</h3>
        </div>
        {!isAdding ? (
          <div className={styles['details-footer']}>
            <p>${product.price}</p>
            <button
              className={styles[`cart-add-button`]}
              onClick={() => {
                setCount('1');
                setIsAdding(true);
              }}
            >
              Add
            </button>
          </div>
        ) : (
          <div className={`${styles['details-footer']} ${styles['adding']}`}>
            <label>
              <input
                className={styles['product-count-input']}
                type="number"
                min="1"
                defaultValue={1}
                onChange={(e) => setCount(e.target.value)}
              />
            </label>
            <button 
              className={styles[`cart-add-to-button`]}
              onClick={() => {
                addHandler({ ...product, count });
                setIsAdding(false);
              }}
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </li>
  );
}

export default Product;
