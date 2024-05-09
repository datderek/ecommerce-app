function ProductsList({ products }) {
  return (
    <ul>
      {products.map((product) => {
        return <li key={product.id}>{product.title}</li>
      })}
    </ul>
  )
}

export default ProductsList;