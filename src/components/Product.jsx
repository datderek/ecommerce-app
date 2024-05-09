function Product({ product }) {
  return (
    <div>
        <img src={product.image} alt={product.title}/>
        <h4>{product.category}</h4>
        <h3>{product.title}</h3>
        <h4>{product.price}</h4>
    </div>
  )
}

export default Product;