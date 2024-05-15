import { render, screen } from '@testing-library/react';
import CartItem from './CartItem';

const product = {
  id: 1,
  title: "Backpack",
  price: '37.99',
}

describe('CartItem component', () => {
  it('renders all product details', () => {
    render(<CartItem product={product} />);

    expect(screen.getByRole('presentation')).toBeInTheDocument();
    expect(screen.getByText(/Backpack/i)).toBeInTheDocument();
    expect(screen.getByText(/37.99/i)).toBeInTheDocument();
  });

  it('renders nothing when not passed a product', () => {
    render(<CartItem product={null} />);

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.queryByText(/Backpack/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/37.99/i)).not.toBeInTheDocument();
  })
})