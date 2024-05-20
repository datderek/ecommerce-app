import styles from "./CartItem.module.css"

function CartItem({ product }) {
  return (product &&
    <li className={styles.product}>
      <img className={styles['product-image']} src={product.image_url} alt='' />
      <div className={styles['product-name']}>{product.name}</div>
      <div className={styles['product-price']}>{product.price}</div>
      <div className={styles['product-count']}>{product.count}</div>
    </li>
  )
}

export default CartItem;