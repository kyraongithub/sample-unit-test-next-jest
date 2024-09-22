import Typography from '@/components/ui/Typography';
import { render } from '@testing-library/react';

describe('Typography Component', () => {
  it('should render typography', () => {
    const { container } = render(
      <Typography type="h1">hello world</Typography>
    );
    expect(container).toMatchSnapshot();
  });
});
