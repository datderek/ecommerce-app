import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart.svg';

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/store'>Store</Link>
      <Link to='/about'>About</Link>
      <button><img src={cartIcon} alt='shopping-cart' /></button>
    </nav>
  );
}