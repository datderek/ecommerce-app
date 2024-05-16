import { useState } from "react";

function Product({ product, handlers }) {
  const [inCart, setInCart] = useState(false);

  return (
    <div>
      <img src={product.image_url} alt={product.name} />
      <div>
        {product.flavor_profile?.map(flavor => <h5>{flavor}</h5>)}
      </div>
      <h4>{product.region}</h4>
      <h3>{product.name}</h3>
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
