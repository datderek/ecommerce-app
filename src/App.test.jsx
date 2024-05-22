import { render, screen, within } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import routes from './routes';

describe('App component', () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.show = vi.fn();
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();
  });
  
  beforeEach(() => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);
  })

  it("renders the navgiation bar", () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders Home page on initial load', () => {
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/Cuppa Joe/i);
  });

  it('renders About page on click', async () => {
    const user = userEvent.setup();

    await user.click(screen.getByRole('link', {name: /About/i}));

    expect(screen.getByRole('heading').textContent).toMatch(/About Page/i);
  });

  it('renders Store page on click', async () => {
    const user = userEvent.setup();

    await user.click(screen.getByRole('link', {name: /Store/i}));

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/SHOP/i);
  });
});

describe('App component integrates', () => {
  beforeEach(() => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);
  })

  /**
   * Skipped as JSDOM does not currently offer support for HTMLDialogElement methods
   * https://github.com/jsdom/jsdom/issues/3294
   */
  it.skip('rendering of Cart on Navbar cart button click', async () => {
    const user = userEvent.setup();
    const navbar = screen.getByRole('navigation');

    await user.click(within(navbar).getByRole('button'));

    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/Cart/i);
  })
})