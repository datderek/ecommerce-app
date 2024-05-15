import CartItem from "./CartItem";

function Cart({ cart }) {
  // Display all items in the cart
  // List format
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart && cart.map((product) => { return <CartItem key={product.id} product={product} />})}
      </ul>
    </div>
  )
}

export default Cart;