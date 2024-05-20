import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cart from './Cart';

const cart = [
  {
    id: 1,
    name: "Coffee One",
    price: '5.00',
    count: '2'
  },
  {
    id: 2,
    name: 'Coffee Two',
    price: '2.50',
    count: '2'
  },
  {
    id: 3,
    name: 'Coffee Three',
    price: '1.50',
    count: '1'
  }
]

describe('Cart component', () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.show = vi.fn();
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();
  });

  it('renders all items in cart', async () => {
    render(<Cart cart={cart} />);

    expect(screen.getAllByRole('listitem', { hidden: true }).length).toBe(3);
  })

  it('renders the correct total price', () => {
    render(<Cart cart={cart} />);

    expect(screen.getByText(/16.50/i)).toBeInTheDocument();
  })

  it('renders error message when there are no items in the cart', () => {
    render(<MemoryRouter><Cart cart={[]}/></MemoryRouter>);

    expect(screen.getByText(/Looks like your cart is empty/i)).toBeInTheDocument();
  })
})