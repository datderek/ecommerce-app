import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar component', () => {
  it("renders the links", () => { 
    render(<Navbar />, {wrapper: MemoryRouter});

    const navLinks = screen.getAllByRole('link');

    expect(navLinks[0].textContent).toMatch(/Home/i);
    expect(navLinks[1].textContent).toMatch(/Store/i);
    expect(navLinks[2].textContent).toMatch(/About/i);
  });

  it("renders the shopping cart button", () => {
    render(<Navbar />, {wrapper: MemoryRouter});

    const shoppingCartButton = screen.getByRole('button', { name: /shopping cart/i });

    expect(shoppingCartButton).toBeInTheDocument();
  });

  it("renders the number of items in the shopping cart", () => {
    render(<Navbar itemCount={3}/>, {wrapper: MemoryRouter});

    const itemCount = screen.getByText(/^3$/);
    expect(itemCount).toBeInTheDocument();
  })
});