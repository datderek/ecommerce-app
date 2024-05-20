import { useState } from "react";
import styles from "./Product.module.css";

function Product({ product, handlers }) {
  const [inCart, setInCart] = useState(false);

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
        {!inCart && (
          <button
            onClick={() => {
              handlers.addHandler({ ...product, count: '1' });
              setInCart(true);
            }}
          >
            Add to Cart
          </button>
        )}
        {inCart && (
          <>
            <label>
              Amount:
              <input
                type="number"
                min="1"
                defaultValue={1}
                onChange={(e) =>
                  handlers.updateHandler({ ...product, count: e.target.value })
                }
              />
            </label>
            <button onClick={() => {
              handlers.removeHandler({ ...product });
              setInCart(false);
            }}
            >
              Remove from Cart
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default Product;
