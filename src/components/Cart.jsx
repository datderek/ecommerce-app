import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import CartItem from "./CartItem";
import styles from "./Cart.module.css"
import closeIcon from '../assets/close.svg';

function Cart({ cart, isVisible, setIsVisible }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isVisible) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isVisible])

  const totalPrice = (cart.reduce((sum, currentProduct) => sum + (Number(currentProduct.price) * Number(currentProduct.count)), 0)).toFixed(2);

  return (
    <dialog ref={ref} className={styles['shopping-cart-wrapper']} onCancel={setIsVisible}>
      <div className={styles['shopping-cart']}>
        <div className={styles.header}>
          <h2>YOUR CART</h2>
          <button className={styles['close-button']} onClick={setIsVisible}><img src={closeIcon} alt='' /></button>
        </div>
        {(cart && cart.length !== 0) ? (
          <>
            <div className={styles['list-container']}>
              <ul>
                {cart.map(product => <CartItem key={product.id} product={product} />)}
              </ul>
            </div>
            <div className={styles.footer}>
              <div>Total: {totalPrice}</div>
            </div>
          </>
        ) : (
          <div className={`${styles['list-container']} ${styles.empty}`}>
            <span>Looks like your cart is empty. Let's change that!</span>
            <Link to='/store'>SHOP</Link>
          </div>
        )}
      </div>
    </dialog>
  )
}

export default Cart;