import Product from "./Product";

function ProductsList({ products }) {
  return (
    <ul>
      {products.length > 0 && products.map((product) => {
        return (
          <Product product={product} />
        )
      })}
    </ul>
  )
}

export default ProductsList;