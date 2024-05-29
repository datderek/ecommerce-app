import { useState } from "react"
import styles from "./CartItem.module.css"
import checkIcon from '../assets/check.svg';

function CartItem({ product, removeHandler, editHandler }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(product.count);

  const handleEnableEditClick = () => {
    if (!isEditing) {
      setIsEditing(true);
    }
  }

  const handleEditSubmitClick = () => {
    const updatedProduct = {...product, count: inputValue};
    editHandler(updatedProduct);
    setIsEditing(false);
  }

  return (product &&
    <li className={styles.product}>
      <img className={styles['product-image']} src={product.image_url} alt='' />
      <div className={styles['product-body']}>
        <div className={styles['product-name']}>{product.name}</div>
        <div className={styles['controls-container']}>
          <button onClick={() => {removeHandler(product)}}>Remove</button>
          <button onClick={handleEnableEditClick}>Edit</button>
        </div>
      </div>
      <div className={styles['product-price']}>{product.price}</div>
      {isEditing ? 
      <div className={styles['product-count-input-container']}>
        <input className={styles['product-count-input']} type='number' min='1' defaultValue={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button className={styles['product-count-button']} onClick={handleEditSubmitClick}><img src={checkIcon} alt=''/></button>
      </div> 
      : <div className={styles['product-count']}>{product.count}</div>}
    </li>
  )
}

export default CartItem;