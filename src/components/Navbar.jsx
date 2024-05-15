import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart.svg';

export default function Navbar({ itemCount = 0, handleClick }) {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/store'>Store</Link>
      <Link to='/about'>About</Link>
      <button onClick={handleClick}><img src={cartIcon} alt='shopping cart' /><div>{itemCount}</div></button>
    </nav>
  );
}