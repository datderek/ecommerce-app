import { render, screen } from '@testing-library/react';
import Product from './Product';

const product = {
  id: 1,
  category: "men's clothing",
  title: 'Backpack',
  price: 37.99,
}

describe('Product component', () => {
  beforeEach(() => {
    render(
      <Product product={product}/>
    );
  })

  it('renders the image', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  })

  it('renders the title', () => {
    expect(screen.getByRole('heading', { level: 3 }).textContent).toMatch(/Backpack/i);
  })

  it('renders the category', () => {
    expect(screen.getByRole('heading', { name: /men's clothing/i, level: 4 })).toBeInTheDocument();
  })

  it('renders the price', () => {
    expect(screen.getByRole('heading', { name: /37.99/i, level: 4})).toBeInTheDocument();
  })
})