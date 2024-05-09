import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

const cart = [
  {
    id: 1,
    category: "men's clothing",
    title: 'Backpack',
    price: 37.99,
  }, 
  {
    id: 2,
    category: 'electronics',
    title: 'Xbox 360',
    price: 225.00,
  },
  {
    id: 1,
    category: "shoes",
    title: 'New Balance 1080',
    price: 164.99,
  }
]

describe('Navbar component', () => {
  it("renders the links", () => { 
    render(<Navbar cart={[]}/>, {wrapper: MemoryRouter});

    const navLinks = screen.getAllByRole('link');

    expect(navLinks[0].textContent).toMatch(/Home/);
    expect(navLinks[1].textContent).toMatch(/Store/);
    expect(navLinks[2].textContent).toMatch(/About/);
  });

  it("renders the shopping cart button", () => {
    render(<Navbar cart={[]}/>, {wrapper: MemoryRouter});

    const shoppingCartButton = screen.getByRole('button', { name: /shopping cart/i });

    expect(shoppingCartButton).toBeInTheDocument();
  });

  it("renders the number of items in the shopping cart", () => {
    render(<Navbar cart={cart}/>, {wrapper: MemoryRouter});

    const itemCount = screen.getByText(/^3$/);
    expect(itemCount).toBeInTheDocument();
  })
});