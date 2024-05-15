import { render, screen } from '@testing-library/react';
import Cart from './Cart';

const cart = [
  {
    id: 1,
    title: "Backpack",
    price: '37.99',
  },
  {
    id: 2,
    title: 'RTX 3080Ti',
    price: '500',
  },
  {
    id: 3,
    title: 'HotDog',
    price: '1.50',
  }
]

describe('Cart component', () => {
  it('renders all items in cart', () => {
    render(<Cart cart={cart} />);

    expect(screen.getAllByRole('listitem').length).toBe(3);
  })

  it('renders nothing when there are no items in the cart', () => {
    render(<Cart cart={[]} />);

    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  })
})