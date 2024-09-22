import FormView from '@/components/pages/Form';
import { render } from '@testing-library/react';

describe('Form Page', () => {
  it('should render form page', () => {
    const { container } = render(<FormView />);
    expect(container).toMatchSnapshot();
  });
});
