import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import routes from './routes';

describe('App component', () => {
  beforeEach(() => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);
  })

  it("renders the navgiation bar", () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders Home page on initial load', () => {
    expect(screen.getByRole('heading').textContent).toMatch(/Home Page/i);
  });

  it('renders About page on click', async () => {
    const user = userEvent.setup();
    await user.click(screen.getByRole('link', { name: /About/i}));
    expect(screen.getByRole('heading').textContent).toMatch(/About Page/i);
  });

  it('renders Store page on click', async () => {
    const user = userEvent.setup();
    await user.click(screen.getByRole('link', { name: /Store/i}));
    expect(screen.getByRole('heading').textContent).toMatch(/Store Page/i);
  });
});