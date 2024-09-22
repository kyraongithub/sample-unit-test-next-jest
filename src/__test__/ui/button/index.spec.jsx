import Button from '@/components/ui/Button';
import { fireEvent, render } from '@testing-library/react';

describe('Button Component', () => {
  it('should render button', () => {
    const { container } = render(<Button type="primary">hello world</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should handle click button', () => {
    const { container } = render(
      <Button type="primary" onClick={() => {}}>
        hello world
      </Button>
    );
    fireEvent.click(container.firstChild);
    expect(container).toMatchSnapshot();
  });
});
