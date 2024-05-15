import { useState } from "react";

function Product({ product, handlers }) {
  const [inCart, setInCart] = useState(false);
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h4>{product.category}</h4>
      <h3>{product.title}</h3>
      <h4>{product.price}</h4>
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
            handlers.removeHandler({...product});
            setInCart(false);
            }}
          >
            Remove from Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Product;
