import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart.svg';
import logo from '../assets/logo.png';
import styles from './Navbar.module.css';

export default function Navbar({ itemCount = 0, handleClick }) {
  return (
    <nav className={`${styles.navbar} ${styles['flex-container']}`}>
      <div className={`${styles.links} ${styles['flex-container']}`}>
        <Link className={styles['underline-animation']} to='/'>HOME</Link>
        <Link className={styles['underline-animation']} to='/store'>STORE</Link>
        <img src={logo} alt='' />
        <Link className={styles['underline-animation']} to='/about'>ABOUT</Link>
        <a className={styles['underline-animation']} href='https://github.com/datderek/ecommerce-app'>GITHUB</a>
      </div>
      <button className={styles['cart-button']} onClick={handleClick}><img src={cartIcon} alt='shopping cart' /><div>{itemCount}</div></button>
    </nav>
  );
}