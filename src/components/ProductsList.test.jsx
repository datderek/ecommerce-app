import { render, screen } from '@testing-library/react';
import ProductsList from './ProductsList';

const products = [
  { id: 1, name:'Coffee One' },
  { id: 2, name:'Coffee Two' },
  { id: 3, name:'Coffee Three'},
]

describe('ProductsList component', () => {
  it('renders the products array', () => {
    render(<ProductsList products={products} />);

    const renderedProducts = screen.getAllByRole('heading', {level: 2});

    expect(renderedProducts.length).toBe(3);
    expect(renderedProducts[0].textContent).toMatch(/Coffee One/i);
    expect(renderedProducts[1].textContent).toMatch(/Coffee Two/i);
    expect(renderedProducts[2].textContent).toMatch(/Coffee Three/i);
  })
});