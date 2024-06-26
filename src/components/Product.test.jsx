import { render, screen } from "@testing-library/react";
import Product from "./Product";
import userEvent from "@testing-library/user-event";

const product = {
  id: 1,
  region: "South America",
  flavor_profile: ['Citrus', 'Dark Chocolate'],
  name: "Coffee One",
  price: 37.99,
};

describe("Product component", () => {
  it("renders the image", () => {
    render(<Product product={product} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders the name", () => {
    render(<Product product={product} />);

    expect(screen.getByRole("heading", { level: 3 }).textContent).toMatch(/Coffee One/i);
  });

  it('renders the flavor profiles', () => {
    render(<Product product={product} />);

    expect(screen.getByText(/Dark Chocolate/i)).toBeInTheDocument();
    expect(screen.getByText(/Citrus/i)).toBeInTheDocument();
  })

  it("renders the region", () => {
    render(<Product product={product} />);

    expect(screen.getByText(/South America/i)).toBeInTheDocument();
  });

  it("renders the price", () => {
    render(<Product product={product} />);

    expect(screen.getByText(/37.99/i)).toBeInTheDocument();
  });

  it('renders the "Add" button', () => {
    render(<Product product={product} />);

    expect(
      screen.getByRole("button", { name: /^Add$/i })
    ).toBeInTheDocument();
  });
});

describe("Interacting with Product component", () => {
  it('renders the number input and "Add to Cart" button on click', async () => {
    const addHandler = vi.fn();
    render(<Product product={product} addHandler={addHandler} />);
    const user = userEvent.setup();

    const addButton = screen.getByRole("button", { name: /Add/i });
    await user.click(addButton);

    expect(screen.getByRole("button", { name: /Add to Cart/i })).toBeInTheDocument();
    expect(screen.getByRole("spinbutton")).toBeInTheDocument();
  });

  it('calls the addHandler function when the "Add to Cart" button is clicked', async () => {
    const addHandler = vi.fn();
    render(<Product product={product} addHandler={addHandler} />);
    const user = userEvent.setup();

    const addButton = screen.getByRole("button", { name: /Add/i });
    await user.click(addButton);
    const addToCartButton = screen.getByRole("button", { name: /Add to Cart/i });
    await user.click(addToCartButton);

    expect(addHandler).toHaveBeenCalledWith({ ...product, count: '1' });
  });

  it('calls the addHandler with the correct amount', async () => {
    const addHandler = vi.fn();
    render(<Product product={product} addHandler={addHandler} />);
    const user = userEvent.setup();

    const addButton = screen.getByRole("button", { name: /Add/i });
    await user.click(addButton);
    const input = screen.getByRole('spinbutton');
    await user.clear(input);
    await user.type(input, '5');
    const addToCartButton = screen.getByRole("button", { name: /Add to Cart/i });
    await user.click(addToCartButton);

    expect(addHandler).toHaveBeenCalledWith({ ...product, count: '5' });
  })

  it('does not call the addHandler function when the "Add to Cart" button is not clicked', () => {
    const addHandler = vi.fn();
    render(<Product product={product} addHandler={addHandler} />);

    expect(addHandler).not.toHaveBeenCalled();
  });
});
