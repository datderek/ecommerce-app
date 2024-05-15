function CartItem({ product }) {
  return (product &&
    <li>
      <img src={product.image} alt='' />
      <div>{product.title}</div>
      <div>{product.price}</div>
      <div>{product.count}</div>
    </li>
  )
}

export default CartItem;