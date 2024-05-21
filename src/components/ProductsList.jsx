import Product from "./Product";
import styles from "./ProductsList.module.css";

function ProductsList({ products, addHandler }) {
  return (
    <ul className={styles['products-grid']}>
      {products.length > 0 &&
        products.map((product) => {
          return <Product key={product.id} product={product} addHandler={addHandler} />;
        })}
    </ul>
  );
}

export default ProductsList;
