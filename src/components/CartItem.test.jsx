import { render, screen } from '@testing-library/react';
import CartItem from './CartItem';

const product = {
  id: 1,
  name: "Exquiste Coffee",
  price: '37.99',
  count: '2',
}

describe('CartItem component', () => {
  it('renders all product details', () => {
    render(<CartItem product={product} />);

    expect(screen.getByRole('presentation')).toBeInTheDocument();
    expect(screen.getByText(/Exquiste Coffee/i)).toBeInTheDocument();
    expect(screen.getByText(/37.99/i)).toBeInTheDocument();
    expect(screen.getByText(/2/i)).toBeInTheDocument();
  });

  it('renders nothing when not passed a product', () => {
    render(<CartItem product={null} />);

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.queryByText(/Backpack/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/37.99/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/2/i)).not.toBeInTheDocument();
  })
})