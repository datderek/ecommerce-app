import { render, screen } from "@testing-library/react";
import Product from "./Product";
import userEvent from "@testing-library/user-event";

const product = {
  id: 1,
  category: "men's clothing",
  title: "Backpack",
  price: 37.99,
};

describe("Product component", () => {
  it("renders the image", () => {
    render(<Product product={product} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders the title", () => {
    render(<Product product={product} />);

    expect(screen.getByRole("heading", { level: 3 }).textContent).toMatch(
      /Backpack/i
    );
  });

  it("renders the category", () => {
    render(<Product product={product} />);

    expect(
      screen.getByRole("heading", { name: /men's clothing/i, level: 4 })
    ).toBeInTheDocument();
  });

  it("renders the price", () => {
    render(<Product product={product} />);

    expect(
      screen.getByRole("heading", { name: /37.99/i, level: 4 })
    ).toBeInTheDocument();
  });

  it('renders the "Add to Cart" button', () => {
    render(<Product product={product} />);

    expect(
      screen.getByRole("button", { name: /Add to Cart/i })
    ).toBeInTheDocument();
  });
});

describe("Interacting with Product component", () => {
  it('renders the input and "Remove from Cart" button on click', async () => {
    const addHandler = vi.fn();
    const removeHandler = vi.fn();
    const updateHandler = vi.fn();
    const handlers = { addHandler, removeHandler, updateHandler };
    render(<Product product={product} handlers={handlers} />);
    const user = userEvent.setup();

    const addButton = screen.getByRole("button", { name: /Add to Cart/i });
    await user.click(addButton);

    expect(screen.getByRole("button", { name: /Remove from Cart/i })).toBeInTheDocument();
    expect(screen.getByRole("spinbutton")).toBeInTheDocument();
  });

  it('calls the addHandler function when the "Add to Cart" button is clicked', async () => {
    const addHandler = vi.fn();
    const removeHandler = vi.fn();
    const updateHandler = vi.fn();
    const handlers = { addHandler, removeHandler, updateHandler };
    render(<Product product={product} handlers={handlers} />);
    const user = userEvent.setup();

    const addButton = screen.getByRole("button", { name: /Add to Cart/i });
    await user.click(addButton);

    expect(addHandler).toHaveBeenCalledWith({ ...product, count: "1" });
  });

  it('does not call the addHandler function when the "Add to Cart" button is not clicked', () => {
    const addHandler = vi.fn();
    const removeHandler = vi.fn();
    const updateHandler = vi.fn();
    const handlers = { addHandler, removeHandler, updateHandler };
    render(<Product product={product} handlers={handlers} />);

    expect(addHandler).not.toHaveBeenCalled();
  });

  it('calls the removeHandler function when the "Remove from Cart" button is clicked', async () => {
    const addHandler = vi.fn();
    const removeHandler = vi.fn();
    const updateHandler = vi.fn();
    const handlers = { addHandler, removeHandler, updateHandler };
    render(<Product product={product} handlers={handlers} />);
    const user = userEvent.setup();

    const addButton = screen.getByRole("button", { name: /Add to Cart/i });
    await user.click(addButton);
    const removeButton = screen.getByRole("button", { name: /Remove from Cart/i });
    await user.click(removeButton);

    expect(removeHandler).toHaveBeenCalledWith({...product});
  });

  it('does not call the removeHandler function when the "Remove from Cart" button is not clicked', async () => {
    const addHandler = vi.fn();
    const removeHandler = vi.fn();
    const updateHandler = vi.fn();
    const handlers = { addHandler, removeHandler, updateHandler };
    render(<Product product={product} handlers={handlers} />);
    const user = userEvent.setup();

    const addButton = screen.getByRole("button", { name: /Add to Cart/i });
    await user.click(addButton);

    expect(removeHandler).not.toHaveBeenCalled();
  });

  it("calls the updateHandler function when the input is changed", async () => {
    const addHandler = vi.fn();
    const removeHandler = vi.fn();
    const updateHandler = vi.fn();
    const handlers = { addHandler, removeHandler, updateHandler };
    render(<Product product={product} handlers={handlers} />);
    const user = userEvent.setup();

    const addButton = screen.getByRole("button", { name: /Add to Cart/i });
    await user.click(addButton);
    const input = screen.getByRole("spinbutton");
    await user.click(input);
    await user.clear(input);
    await user.type(input, "3");

    expect(updateHandler).toHaveBeenCalledWith({ ...product, count: "3" });
  });

  it("does not call the updateHandler function when input is not changed", async () => {
    const addHandler = vi.fn();
    const removeHandler = vi.fn();
    const updateHandler = vi.fn();
    const handlers = { addHandler, removeHandler, updateHandler };
    render(<Product product={product} handlers={handlers} />);
    const user = userEvent.setup();

    const addButton = screen.getByRole("button", { name: /Add to Cart/i });
    await user.click(addButton);

    expect(updateHandler).not.toHaveBeenCalledWith();
  });
});
