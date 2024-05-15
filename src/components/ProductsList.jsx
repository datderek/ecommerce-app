import Product from "./Product";

function ProductsList({ products, handlers }) {
  return (
    <ul>
      {products.length > 0 &&
        products.map((product) => {
          return <Product key={product.id} product={product} handlers={handlers} />;
        })}
    </ul>
  );
}

export default ProductsList;
