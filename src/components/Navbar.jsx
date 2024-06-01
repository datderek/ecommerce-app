import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart.svg';
import logo from '../assets/logo.png';
import styles from './Navbar.module.css';

export default function Navbar({ itemCount = 0, handleClick }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-left']}></div>
      <div className={styles.links}>
        <Link className={styles['underline-animation']} to='/'>
          <span className={styles['link-text']}>HOME</span>
          <svg className={styles['link-icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" fill='#FBE9D0'/></svg>
        </Link>
        <Link className={styles['underline-animation']} to='/store'>
          <span className={styles['link-text']}>STORE</span>
          <svg className={styles['link-icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z" fill='#FBE9D0'/></svg>
        </Link>
        <img src={logo} alt='' />
        <Link className={styles['underline-animation']} to='/about'>
          <span className={styles['link-text']}>ABOUT</span>
          <svg className={styles['link-icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" fill='#FBE9D0'/></svg>
        </Link>
        <a className={styles['underline-animation']} href='https://github.com/datderek/ecommerce-app'>
          <span className={styles['link-text']}>GITHUB</span>
          <svg className={styles['link-icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" fill='#FBE9D0'/></svg>
        </a>
        <div className={styles['shopping-cart-wrapper']} onClick={handleClick}>
          <button className={styles['shopping-cart-button']}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 22.5C21.913 22.5 22.5489 22.7634 23.0178 23.2322C23.4866 23.7011 23.75 24.337 23.75 25C23.75 25.663 23.4866 26.2989 23.0178 26.7678C22.5489 27.2366 21.913 27.5 21.25 27.5C19.8625 27.5 18.75 26.375 18.75 25C18.75 23.6125 19.8625 22.5 21.25 22.5ZM1.25 2.5H5.3375L6.5125 5H25C25.3315 5 25.6495 5.1317 25.8839 5.36612C26.1183 5.60054 26.25 5.91848 26.25 6.25C26.25 6.4625 26.1875 6.675 26.1 6.875L21.625 14.9625C21.2 15.725 20.375 16.25 19.4375 16.25H10.125L9 18.2875L8.9625 18.4375C8.9625 18.5204 8.99542 18.5999 9.05403 18.6585C9.11263 18.7171 9.19212 18.75 9.275 18.75H23.75V21.25H8.75C7.3625 21.25 6.25 20.125 6.25 18.75C6.25 18.3125 6.3625 17.9 6.55 17.55L8.25 14.4875L3.75 5H1.25V2.5ZM8.75 22.5C9.41304 22.5 10.0489 22.7634 10.5178 23.2322C10.9866 23.7011 11.25 24.337 11.25 25C11.25 25.663 10.9866 26.2989 10.5178 26.7678C10.0489 27.2366 9.41304 27.5 8.75 27.5C7.3625 27.5 6.25 26.375 6.25 25C6.25 23.6125 7.3625 22.5 8.75 22.5ZM20 13.75L23.475 7.5H7.675L10.625 13.75H20Z" fill='#FBE9D0'/></svg>
            <div>{itemCount}</div>
          </button>
        </div>
      </div>
      <div className={styles['navbar-right']} onClick={handleClick}>
        <button className={styles['shopping-cart-button']}>
          <img src={cartIcon} alt='shopping cart' />
          <div>{itemCount}</div>
        </button>
      </div>
    </nav>
  );
}