import HomeView from '@/components/pages/home';
import { render } from '@testing-library/react';

describe('Home Page', () => {
  it('should render home page', () => {
    const { container } = render(<HomeView />);
    expect(container).toMatchSnapshot();
  });
});
