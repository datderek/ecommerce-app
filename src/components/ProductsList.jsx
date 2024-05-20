import Product from "./Product";
import styles from "./ProductsList.module.css";

function ProductsList({ products, handlers }) {
  return (
    <ul className={styles['products-grid']}>
      {products.length > 0 &&
        products.map((product) => {
          return <Product key={product.id} product={product} handlers={handlers} />;
        })}
    </ul>
  );
}

export default ProductsList;
