import UserForm from '@/components/container/UserForm';
import { fireEvent, render } from '@testing-library/react';

describe('UserForm', () => {
  it('should render user form', () => {
    const { container } = render(<UserForm />);
    expect(container).toMatchSnapshot();
  });

  it('should handle change user name', () => {
    const { getByLabelText } = render(<UserForm />);
    const input = getByLabelText('Name');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue();
  });

  it('should handle change user email', () => {
    const { getByLabelText } = render(<UserForm />);
    const input = getByLabelText('Email');
    fireEvent.change(input, { target: { value: 'test@email.com' } });
    expect(input).toHaveValue();
  });

  it('should handle submit user form', () => {
    const { container, getByText } = render(<UserForm />);
    const submit = getByText('Submit');
    fireEvent.click(submit);
    expect(container).toMatchSnapshot();
  });

  it('should handle full flow submit user form', () => {
    const { container, getByLabelText, getByText } = render(<UserForm />);
    const input = getByLabelText('Name');
    const email = getByLabelText('Email');
    const submit = getByText('Submit');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.change(email, { target: { value: 'test@email.com' } });
    fireEvent.click(submit);
    expect(container).toMatchSnapshot();
  });
});
