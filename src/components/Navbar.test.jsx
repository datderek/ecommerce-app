import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  })
  
  it("renders the links", () => { 
    const navLinks = screen.getAllByRole('link');
    expect(navLinks[0].textContent).toMatch(/Home/);
    expect(navLinks[1].textContent).toMatch(/Store/);
    expect(navLinks[2].textContent).toMatch(/About/);
  });

  it("renders the shopping cart button", () => {
    const shoppingCartButton = screen.getByRole('button', { name: /shopping-cart/i });
    expect(shoppingCartButton).toBeInTheDocument();
  });
});