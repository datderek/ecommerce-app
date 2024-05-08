import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App component', () => {
  it("renders the links", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
      );
    
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});