import { render, screen } from "@testing-library/react";
import InfiniteCarousel from "./InfiniteCarousel";

const images = ['url.one', 'url.two', 'url.three'];

describe('InfiniteCarousel component', () => {
  it('renders all images', () => {
    render(<InfiniteCarousel images={images}/>);

    expect(screen.getAllByRole('presentation').length).toBe(3);
  });
})